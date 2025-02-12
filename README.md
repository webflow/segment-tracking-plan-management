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
- [💻 Running Scripts Locally](#-running-scripts-locally)  

---

## 🔧 Setup Instructions  

### 1️⃣ Clone the Repository  
➡️ *(Insert your clone and CD commands here)*  

### 2️⃣ Configure GitHub Secrets  
This project requires **GitHub repository secrets** for authentication with the Segment API.

| Secret Name  | Description |
|-------------|-------------|
| `SEGMENT_PUBLIC_API_TOKEN`  | API Token for Segment Public API |
| `DEV_SEGMENT_TRACKING_PLAN_ID_<TP_NAME>`  | Segment Tracking Plan ID for **Dev** |
| `PROD_SEGMENT_TRACKING_PLAN_ID_<TP_NAME>` | Segment Tracking Plan ID for **Prod** |

#### Example:
This repository manages **two tracking plans**:  
✅ JavaScript  
✅ Server  

So, it requires **5 GitHub Secrets**:  
- **1** API token (`SEGMENT_PUBLIC_API_TOKEN`)  
- **2** JavaScript tracking plan IDs (Dev & Prod)  
- **2** Server tracking plan IDs (Dev & Prod)  

---

## ⚙️ How It Works  

### Setup & Initialize

1. Configure your tracking plans in `config/tracking-plans-config.json`
2. Create a **GitHub release** with the title **"initialize"**
   - This triggers the `initialize-tracking-plans` workflow
   - It pulls tracking plans from Segment, saves them as JSON, generates YAML, and creates the markdown dictionary.


### **Step 1: Updating Dev Tracking Plan**  

🔹 **Trigger**:  
- Pushing changes to `tracking-rules/javascript/**.yml` or `tracking-rules/server/**.yml` on a **new branch**  
- This triggers the **Dev workflow** (`update-and-save-tracking-plans`)

🔹 **What Happens?**  
1. Converts the modified YAML rule(s) to JSON  
2. Updates the **Dev** tracking plan using a `PATCH` request  
3. Fetches the updated rules from Segment & saves to `plans/dev/<TP_NAME>/current-rules.json`  
4. Adds, commits, and pushes the changes  

---

### **Step 2: Merging to Main & Updating Prod**  

🔹 **Trigger**:  
- Merging a branch with tracking rule updates into `main`  

🔹 **What Happens?**  
1. Converts the updated YAML to JSON  
2. Updates the **Prod** tracking plan using a `PATCH` request  
3. Fetches updated rules from Segment & saves to `plans/prod/<TP_NAME>/current-rules.json`  
4. Generates a **Markdown data dictionary** (`docs/<TP_NAME>.md`)  
5. Commits & pushes updates to `main`  

---

## 🔹 Advanced Features  

### **RESET_DEV Workflow**  
- Triggered by creating a **release** named `"RESET DEV"`  
- Fetches rules from **Prod**  
- Replaces **all** rules in **Dev** tracking plan  
- Updates `plans/dev/<TP_NAME>/current-rules.json`  

---

### **Markdown Auto-Update**  
- Ensures **docs stay up to date**  
- Fetches latest `PROD` rules  
- Runs `render-tp.js` to regenerate Markdown  

---

## 💻 Running Scripts Locally  

➡️ *(Insert instructions for running the `generate-yaml-rules.js` script here)*  

➡️ *(Provide steps for installing dependencies and executing the script locally)*  

---

✅ **This setup automates the full tracking plan lifecycle from YAML to Segment to Markdown!** 🎯  
