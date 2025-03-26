const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const axios = require('axios');
const { execSync } = require('child_process');

// Get environment variables
const planDir = process.env.PLAN_DIR;
const trackingPlanId = process.env.SEGMENT_TRACKING_PLAN_ID;
const apiUrl = `https://api.segmentapis.com/tracking-plans/${trackingPlanId}/rules`;
const apiKey = process.env.SEGMENT_API_KEY;

console.log('API key:', apiKey);
console.log('API URL:', apiUrl);
console.log('Tracking Plan ID:', trackingPlanId);

// Function to get the list of changed files in the latest commit
function getChangedFiles(directory) {
  try {
    const files = execSync('git diff --name-only HEAD^ HEAD').toString().split('\n');
    return files.filter(file => file.startsWith(directory) && file.endsWith('.yml'));
  } catch (error) {
    console.error('Error getting changed files:', error.response ? error.response.data : error.message);
  }
}

// Function to load YAML files from an array of file paths
function loadYamlFiles(files) {
  let allRules = [];
  try {
    files.forEach(file => {
      const fileContents = fs.readFileSync(file, 'utf8');
      const data = yaml.load(fileContents);
      allRules = allRules.concat(data.rules);
    });

  console.log('Loaded rules:', allRules);
  } catch (error) {
    console.error('Error loading yaml files:', error.response ? error.response.data : error.message);
  }
  return allRules;
}

// Function to format properties and collect required fields
function formatProperties(properties) {
  const formattedProperties = {};
  const requiredFields = [];

  for (const [key, value] of Object.entries(properties)) {
    formattedProperties[key] = { ...value };
    if (value.required === true) {
      requiredFields.push(key);
      delete formattedProperties[key].required;
    }
    if (value.properties) {
      const result = formatProperties(value.properties);
      formattedProperties[key].properties = result.properties;
      if (result.required.length > 0) {
        formattedProperties[key].required = result.required;
      }
    }
  }

  return { properties: formattedProperties, required: requiredFields };
}

// Get the list of changed files in the specified directory
const changedFiles = getChangedFiles(planDir);

// Load and process only the changed files
const rules = loadYamlFiles(changedFiles).map(rule => {
  const result = formatProperties(rule.properties);

  // Include the labels inside the jsonSchema
  const jsonSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
      context: { type: "object" },
      traits: { type: "object" },
      properties: {
        type: "object",
        properties: result.properties,
        required: result.required.length > 0 ? result.required : undefined
      }
    },
    required: ["properties"]
  };

  // If there are labels, add them to the jsonSchema
  if (rule.labels) {
    jsonSchema.labels = rule.labels;
  }

  const formattedRule = {
    key: rule.key,
    type: rule.type,
    version: rule.version,
    jsonSchema,
  };
  // Move the description inside jsonSchema instead of at the root level
  if (rule.description && rule.description.trim() !== "") {
    formattedRule.jsonSchema.description = rule.description;  // Fix: Add inside jsonSchema!
  }

  return formattedRule;
});

console.log('Request payload:', JSON.stringify({ rules }, null, 2));

// Update the tracking plan rules
async function updateTrackingPlanRules() {
  try {
    const response = await axios.patch(
      apiUrl,
      { rules },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Tracking plan rules updated successfully:', response.data);
  } catch (error) {
    console.error('Error updating tracking plan rules:', error.response ? error.response.data : error.message);
  }
}

updateTrackingPlanRules();
