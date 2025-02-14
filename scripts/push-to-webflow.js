const fs = require('fs');
const path = require('path');
const axios = require('axios');

const WEBFLOW_API_KEY = process.env.WEBFLOW_API_KEY;
const WEBFLOW_COLLECTION_ID = process.env.WEBFLOW_COLLECTION_ID;
const WEBFLOW_SITE_ID = process.env.WEBFLOW_SITE_ID;

const trackingPlanName = process.argv[2]; // Passed from GitHub Action
const markdownPath = path.resolve(`docs/${trackingPlanName}_tracking_plan.md`);

if (!WEBFLOW_API_KEY || !WEBFLOW_COLLECTION_ID || !WEBFLOW_SITE_ID) {
  console.error("Missing Webflow API credentials. Ensure WEBFLOW_API_KEY, WEBFLOW_COLLECTION_ID, and WEBFLOW_SITE_ID are set.");
  process.exit(1);
}

// Read the generated markdown file
const markdownContent = fs.readFileSync(markdownPath, 'utf8');

// Webflow API endpoint
const WEBFLOW_API_URL = `https://api.webflow.com/collections/${WEBFLOW_COLLECTION_ID}/items`;

async function updateWebflow() {
  try {
    console.log(`Updating Webflow for ${trackingPlanName}...`);

    // Check if an item with the same name already exists
    const existingItems = await axios.get(WEBFLOW_API_URL, {
      headers: { Authorization: `Bearer ${WEBFLOW_API_KEY}` },
    });

    const existingItem = existingItems.data.items.find(item => item.name === trackingPlanName);

    if (existingItem) {
      // Update the existing item
      const updateResponse = await axios.patch(
        `${WEBFLOW_API_URL}/${existingItem._id}`,
        {
          fields: {
            name: trackingPlanName,
            markdown_content: markdownContent,
            _archived: false,
            _draft: false,
          },
        },
        { headers: { Authorization: `Bearer ${WEBFLOW_API_KEY}`, "Content-Type": "application/json" } }
      );

      console.log("Webflow Item Updated:", updateResponse.data);
    } else {
      // Create a new item
      const createResponse = await axios.post(
        WEBFLOW_API_URL,
        {
          fields: {
            name: trackingPlanName,
            markdown_content: markdownContent,
            _archived: false,
            _draft: false,
          },
        },
        { headers: { Authorization: `Bearer ${WEBFLOW_API_KEY}`, "Content-Type": "application/json" } }
      );

      console.log("Webflow Item Created:", createResponse.data);
    }
  } catch (error) {
    console.error("Error updating Webflow:", error.response ? error.response.data : error.message);
    process.exit(1);
  }
}

// Run the function
updateWebflow();
