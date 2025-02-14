const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Load environment variables
const WEBFLOW_API_KEY = process.env.WEBFLOW_API_KEY;
const WEBFLOW_COLLECTION_ID = process.env.WEBFLOW_COLLECTION_ID;
const WEBFLOW_SITE_ID = process.env.WEBFLOW_SITE_ID;

// Get tracking plan name from CLI args
const trackingPlanName = process.argv[2];
if (!trackingPlanName) {
  console.error("❌ Missing tracking plan name. Usage: node push-to-webflow.js <tracking-plan-name>");
  process.exit(1);
}

// Define the markdown file path
const markdownFilePath = path.join(__dirname, `../docs/${trackingPlanName}_tracking_plan.md`);
console.log(`📄 Loading markdown from: ${markdownFilePath}`);

// Read the markdown file
if (!fs.existsSync(markdownFilePath)) {
  console.error(`❌ Markdown file not found: ${markdownFilePath}`);
  process.exit(1);
}
const markdownContent = fs.readFileSync(markdownFilePath, "utf8");

// Generate a slug from the tracking plan name
const slug = trackingPlanName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

// Define Webflow API endpoint
const WEBFLOW_API_URL = `https://api.webflow.com/collections/${WEBFLOW_COLLECTION_ID}/items`;

// Construct the payload
const payload = {
  fields: {
    name: trackingPlanName,
    slug: slug,
    "markdown-content": markdownContent
  }
};

// Send data to Webflow
async function updateWebflow() {
  try {
    console.log("🚀 Updating Webflow...");

    const response = await axios.post(WEBFLOW_API_URL, payload, {
      headers: {
        Authorization: `Bearer ${WEBFLOW_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });

    console.log("✅ Successfully updated Webflow:", response.data);
  } catch (error) {
    console.error("❌ Error updating Webflow:", error.response?.data || error.message);
  }
}

// Run the script
updateWebflow();
