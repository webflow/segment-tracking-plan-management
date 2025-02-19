# 📌 Segment Tracking Plans Automation 🚀  

*A repository demonstrating the power of GitHub Workflows for automated Segment Tracking Plan management.*

![Tracking Plans Automation](https://github.com/user-attachments/assets/83d617e5-8f52-40b1-afd8-956010b4d662)

---

## 📖 Table of Contents  

- [🔧 Setup Instructions](#-setup-instructions)  
- [⚙️ How It Works](#️-how-it-works)  
  - [Step 1: Updating Dev Tracking Plan](#step-1-updating-dev-tracking-plan)  
  - [Step 2: Merging to Main & Updating Prod](#step-2-merging-to-main--updating-prod)  
- [🔹 Advanced Features](#-advanced-features)  
  - [RESET_DEV Workflow](#reset_dev-workflow)  
  - [Markdown Auto-Update](#markdown-auto-update)  
- [Segment API References](#segment-api-references)  

---

## 🔧 Setup Instructions  

### 1️⃣ Clone the Repository  

```bash
git clone https://github.com/YOUR_USERNAME/trackings-plans.git
cd trackings-plans
```

### 2️⃣ Configure GitHub Secrets  

This project requires **GitHub repository secrets** for authentication with the Segment API.

| Secret Name  | Description |
|-------------|-------------|
| `SEGMENT_PUBLIC_API_TOKEN`  | API Token for Segment Public API |
| `DEV_SEGMENT_TRACKING_PLAN_ID_<TP_NAME>`  | Segment Tracking Plan ID for **Dev** |
| `PROD_SEGMENT_TRACKING_PLAN_ID_<TP_NAME>` | Segment Tracking Plan ID for **Prod** |

**Hint**:
`https://app.segment.com/<your_workspace>/protocols/tracking-plans/<tracking_plan_id>`

#### Example

This repository manages **two tracking plans**:  
✅ Webflow  
✅ Designer 

So, it requires **5 GitHub Secrets**:  

- **1** API token (`SEGMENT_PUBLIC_API_TOKEN`)  
- **2** Webflow tracking plan IDs (Dev & Prod)  
- **2** Designer tracking plan IDs (Dev & Prod)  

---

## ⚙️ How It Works  

### Setup & Initialize

1. Configure your tracking plans in `config/tracking-plans-config.json`
2. Create a **GitHub release** with the title **"initialize"**
   - This triggers the `initialize-tracking-plans` workflow
   - It pulls tracking plans from Segment, saves them as JSON, generates YAML, and creates the markdown dictionary.

### **Step 1: Updating Dev Tracking Plan**  

🔹 **Trigger**:  

- Pushing changes to `tracking-rules/webflow/**.yml` or `tracking-rules/designer/**.yml` on a **new branch**  
- This triggers the **Dev workflow** (`Update Development Tracking Plans`)

🔹 **What Happens?**  

1. Converts the modified YAML rule(s) to JSON
2. Updates the **Dev** tracking plan using a `PATCH` request  
3. Fetches the updated rules from Segment & saves to `plans/dev/<TP_NAME>/current-rules.json`  
4. Adds, commits, and pushes the changes  

---

### **Step 2: Merging to Main & Updating Prod**  

🔹 **Trigger**:  

- Merging a branch with tracking rule updates into `main`  
- This triggers the **Prod workflow** (`Update Production Tracking Plans and Generate Markdown`)

🔹 **What Happens?**  

1. Converts the updated YAML to JSON  
2. Updates the **Prod** tracking plan using a `PATCH` request  
3. Fetches updated rules from Segment & saves to `plans/prod/<TP_NAME>/current-rules.json`  
4. Generates a **Markdown data dictionary** (`docs/<TP_NAME>.md`)  
5. Commits & pushes updates to `main`  

---

## 🔹 Advanced Features  

### **RESET_DEV Workflow**  

- Triggered by creating a **release** named `RESET_DEV`  
- Fetches rules from **Prod**  
- Replaces **all** rules in **Dev** tracking plan with **Prod**
- Updates `plans/dev/<TP_NAME>/current-rules.json`  

---

### **Markdown Auto-Update**  

- Ensures **docs stay up to date**  
- Fetches latest `PROD` rules  
- Runs `render-tp.js` to regenerate Markdown  

---

## **Segment API References**

This project interacts with Segment's Tracking Plan API for managing tracking plans. Below are the key API endpoints used:

### **Saving Tracking Plans**

The `save-tracking-plans.js` script retrieves the latest rules from the Segment API and saves them to the repository.

🔗 [List Rules from Tracking Plan API](https://docs.segmentapis.com/tag/Tracking-Plans#operation/listRulesFromTrackingPlan)  
*Used in:* `scripts/save-tracking-plans.js`

### **Updating Tracking Plans**

The `update-tracking-plan.js` script updates tracking plan rules in Segment using the API.

🔗 [Update Rules in Tracking Plan API](https://docs.segmentapis.com/tag/Tracking-Plans#operation/updateRulesInTrackingPlan)  
*Used in:* `scripts/update-tracking-plan.js`

These endpoints ensure that the tracking plans stay in sync between Segment and this repository.

✅ **This setup automates the full tracking plan lifecycle from YAML to Segment to Markdown!** 🎯  
