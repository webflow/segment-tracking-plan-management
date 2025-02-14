const axios = require("axios");

const WEBFLOW_API_KEY = process.env.WEBFLOW_API_KEY;
const COLLECTION_ID = process.env.WEBFLOW_COLLECTION_ID;
const markdownContent = "# Sample Markdown\n\nThis is a test upload.";

const payload = {
  isArchived: false,
  isDraft: false,
  fieldData: {
    name: "Server Tracking Plan",
    slug: "server-tracking-plan",
    "markdown-content": markdownContent
  }
};

async function pushToWebflow() {
  try {
    const response = await axios.post(
      `https://api.webflow.com/v2/collections/${COLLECTION_ID}/items`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${WEBFLOW_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ Successfully pushed to Webflow:", response.data);
  } catch (error) {
    console.error("❌ Error updating Webflow:", error.response ? error.response.data : error.message);
  }
}

pushToWebflow();
