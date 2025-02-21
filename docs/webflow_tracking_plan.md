# Webflow Tracking Plan


## 2FA Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("2FA Page Viewed", {
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## AI Chat Issue Solved

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("AI Chat Issue Solved", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Accessibility Checkbox Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **item name** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Accessibility Checkbox Clicked", {
  "item name": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Account Login Failed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **attempt number** | `integer` | No description | ❌ |
| **cause** | `unknown` | No description | ❌ |
| **failure reason** | `array` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **signup method** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Account Login Failed", {
  "attempt number": "<<type: integer, required: false>>",
  "cause": "<<type: unknown, required: false>>",
  "failure reason": "<<type: array, required: false>>",
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "signup method": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Account Login Succeeded

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **is 2FA** | `boolean` | No description | ❌ |
| **maintain 2FA 30 days** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **show password** | `boolean` | No description | ❌ |
| **signup method** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **via** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Account Login Succeeded", {
  "is 2FA": "<<type: boolean, required: false>>",
  "maintain 2FA 30 days": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "show password": "<<type: boolean, required: false>>",
  "signup method": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "via": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Account Signup Failed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **attempt number** | `integer` | No description | ❌ |
| **cause** | `unknown` | No description | ❌ |
| **failure reason** | `array` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **signup method** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Account Signup Failed", {
  "attempt number": "<<type: integer, required: false>>",
  "cause": "<<type: unknown, required: false>>",
  "failure reason": "<<type: array, required: false>>",
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "signup method": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Activated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **activated_at** | `string` | No description | ❌ |
| **days_to_activate** | `string` | No description | ❌ |
| **hours_to_activate** | `string` | No description | ❌ |
| **minutes_to_activate** | `string` | No description | ❌ |
| **months_to_activation** | `string` | No description | ❌ |
| **site_id** | `string` | No description | ❌ |
| **weeks_to_activation** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Activated", {
  "activated_at": "<<type: string, required: false>>",
  "days_to_activate": "<<type: string, required: false>>",
  "hours_to_activate": "<<type: string, required: false>>",
  "minutes_to_activate": "<<type: string, required: false>>",
  "months_to_activation": "<<type: string, required: false>>",
  "site_id": "<<type: string, required: false>>",
  "weeks_to_activation": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Add CC Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Add CC Clicked", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Add Payment Method Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **form context** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Add Payment Method Clicked", {
  "form context": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Add-ons CTA Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **button action and type** | `string` | No description | ❌ |
| **button cta** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **page section** | `string` | No description | ❌ |
| **position on page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **surface area** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Add-ons CTA Clicked", {
  "button action and type": "<<type: string, required: false>>",
  "button cta": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "page section": "<<type: string, required: false>>",
  "position on page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "surface area": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Add-ons Modal Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **modal name** | `string` | No description | ❌ |
| **modal type** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **surface area** | `string` | No description | ❌ |
| **triggered by** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Add-ons Modal Opened", {
  "modal name": "<<type: string, required: false>>",
  "modal type": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "surface area": "<<type: string, required: false>>",
  "triggered by": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Added Custom Font

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Added Custom Font", {
  "legacy team id": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Added Google Font

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **name** | `unknown` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Added Google Font", {
  "legacy team id": "<<type: string, required: false>>",
  "name": "<<type: unknown, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Added redirect

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Added redirect", {
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Additional support request clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **label** | `string` | No description | ❌ |
| **location** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Additional support request clicked", {
  "label": "<<type: string, required: false>>",
  "location": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## App Action

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("App Action", {
  "action": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## App Installed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **app id** | `string` | No description | ❌ |
| **app name** | `string` | No description | ❌ |
| **installation location** | `string` | No description | ❌ |
| **installation type** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("App Installed", {
  "app id": "<<type: string, required: false>>",
  "app name": "<<type: string, required: false>>",
  "installation location": "<<type: string, required: false>>",
  "installation type": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Attachment added

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **file** | `string` | No description | ❌ |
| **size** | `integer` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Attachment added", {
  "file": "<<type: string, required: false>>",
  "size": "<<type: integer, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Attachment deleted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **file** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Attachment deleted", {
  "file": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Beta Feature Toggled

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **beta flag** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **value** | `boolean` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Beta Feature Toggled", {
  "beta flag": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "value": "<<type: boolean, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Billing Action Tracked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **actorId** | `string` | No description | ❌ |
| **actorType** | `string` | No description | ❌ |
| **billId** | `string` | No description | ❌ |
| **causedBy** | `object` | No description | ❌ |
| **causedBy.admin** | `string` | No description | ❌ |
| **causedBy.reason** | `string` | No description | ❌ |
| **causedBy.system** | `string` | No description | ❌ |
| **causedBy.user** | `string` | No description | ❌ |
| **coupon** | `object` | No description | ❌ |
| **coupon.__v** | `integer` | No description | ❌ |
| **coupon._id** | `string` | No description | ❌ |
| **coupon.allowAccountItems** | `boolean` | No description | ❌ |
| **coupon.allowMonthlyBill** | `boolean` | No description | ❌ |
| **coupon.allowRetroactiveUse** | `boolean` | No description | ❌ |
| **coupon.allowSiteItems** | `boolean` | No description | ❌ |
| **coupon.allowTeamItems** | `boolean` | No description | ❌ |
| **coupon.allowTemplatePurchases** | `boolean` | No description | ❌ |
| **coupon.allowWorkspaceItems** | `boolean` | No description | ❌ |
| **coupon.allowYearlyBill** | `boolean` | No description | ❌ |
| **coupon.code** | `string` | No description | ❌ |
| **coupon.createdBy** | `string` | No description | ❌ |
| **coupon.createdOn** | `string` | No description | ❌ |
| **coupon.department** | `string` | No description | ❌ |
| **coupon.description** | `string` | No description | ❌ |
| **coupon.durationInMonths** | `integer` | No description | ❌ |
| **coupon.expiresOn** | `string` | No description | ❌ |
| **coupon.maxRedemptionsPerUser** | `integer` | No description | ❌ |
| **coupon.oneOff** | `boolean` | No description | ❌ |
| **coupon.onlyFirstTemplate** | `boolean` | No description | ❌ |
| **coupon.onlyPlanId** | `array` | No description | ❌ |
| **coupon.onlySchool** | `boolean` | No description | ❌ |
| **coupon.onlyTemplateId** | `array` | No description | ❌ |
| **coupon.onlyUnconverted** | `boolean` | No description | ❌ |
| **coupon.onlyUserAgeAbove** | `integer` | No description | ❌ |
| **coupon.onlyUserAgeUnder** | `integer` | No description | ❌ |
| **coupon.percentOff** | `integer` | No description | ❌ |
| **coupon.rebateUSD** | `integer` | No description | ❌ |
| **coupon.redemptionsLeft** | `integer` | No description | ❌ |
| **currency** | `string` | No description | ❌ |
| **interval** | `string` | No description | ❌ |
| **invoiceTargetSubscriptionId** | `string` | No description | ❌ |
| **item** | `unknown` | No description | ❌ |
| **itemId** | `string` | No description | ❌ |
| **kind** | `string` | No description | ❌ |
| **mode** | `string` | No description | ❌ |
| **newPlan** | `string` | No description | ❌ |
| **opts** | `object` | No description | ❌ |
| **opts.invoiceTargetSubscriptionId** | `string` | No description | ❌ |
| **opts.removeTeamsHostingPlans** | `boolean` | No description | ❌ |
| **origin** | `unknown` | No description | ❌ |
| **ownerId** | `string` | No description | ❌ |
| **ownerType** | `string` | No description | ❌ |
| **partnerCode** | `unknown` | No description | ❌ |
| **personId** | `string` | No description | ❌ |
| **pile** | `object` | No description | ❌ |
| **pile.__v** | `integer` | No description | ❌ |
| **pile._id** | `string` | No description | ❌ |
| **pile.archived** | `boolean` | No description | ❌ |
| **pile.chargeUSD** | `integer` | No description | ❌ |
| **pile.createdOn** | `string` | No description | ❌ |
| **pile.creditUSD** | `integer` | No description | ❌ |
| **pile.refill** | `object` | No description | ❌ |
| **pile.refill.enabled** | `boolean` | No description | ❌ |
| **pile.refill.level** | `integer` | No description | ❌ |
| **pile.target** | `string` | No description | ❌ |
| **plan** | `string` | No description | ❌ |
| **prorate** | `string` | No description | ❌ |
| **removeTeamsHostingPlans** | `boolean` | No description | ❌ |
| **replacement_id** | `unknown` | No description | ❌ |
| **siteId** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **source_id** | `string` | No description | ❌ |
| **subscriptionId** | `string` | No description | ❌ |
| **targetId** | `string` | No description | ❌ |
| **templateId** | `string` | No description | ❌ |
| **trialEndsAt** | `string` | No description | ❌ |
| **update** | `object` | No description | ❌ |
| **update.causedBy** | `object` | No description | ❌ |
| **update.causedBy.admin** | `string` | No description | ❌ |
| **update.source** | `string` | No description | ❌ |
| **updatedItem** | `object` | No description | ❌ |
| **updatedItem.__v** | `integer` | No description | ❌ |
| **updatedItem._id** | `string` | No description | ❌ |
| **updatedItem.bill** | `string` | No description | ❌ |
| **updatedItem.bulkHostingUsed** | `boolean` | No description | ❌ |
| **updatedItem.createdOn** | `string` | No description | ❌ |
| **updatedItem.delinquentOn** | `unknown` | No description | ❌ |
| **updatedItem.discount** | `object` | No description | ❌ |
| **updatedItem.discount.addedOn** | `string` | No description | ❌ |
| **updatedItem.discount.couponData** | `object` | No description | ❌ |
| **updatedItem.discount.couponData.__v** | `integer` | No description | ❌ |
| **updatedItem.discount.couponData._id** | `string` | No description | ❌ |
| **updatedItem.discount.couponData.allowAccountItems** | `boolean` | No description | ❌ |
| **updatedItem.discount.couponData.allowMonthlyBill** | `boolean` | No description | ❌ |
| **updatedItem.discount.couponData.allowRetroactiveUse** | `boolean` | No description | ❌ |
| **updatedItem.discount.couponData.allowSiteItems** | `boolean` | No description | ❌ |
| **updatedItem.discount.couponData.allowTeamItems** | `boolean` | No description | ❌ |
| **updatedItem.discount.couponData.allowTemplatePurchases** | `boolean` | No description | ❌ |
| **updatedItem.discount.couponData.allowWorkspaceItems** | `boolean` | No description | ❌ |
| **updatedItem.discount.couponData.allowYearlyBill** | `boolean` | No description | ❌ |
| **updatedItem.discount.couponData.code** | `string` | No description | ❌ |
| **updatedItem.discount.couponData.createdBy** | `string` | No description | ❌ |
| **updatedItem.discount.couponData.createdOn** | `string` | No description | ❌ |
| **updatedItem.discount.couponData.department** | `string` | No description | ❌ |
| **updatedItem.discount.couponData.description** | `string` | No description | ❌ |
| **updatedItem.discount.couponData.durationInMonths** | `integer` | No description | ❌ |
| **updatedItem.discount.couponData.expiresOn** | `string` | No description | ❌ |
| **updatedItem.discount.couponData.maxRedemptionsPerUser** | `integer` | No description | ❌ |
| **updatedItem.discount.couponData.oneOff** | `boolean` | No description | ❌ |
| **updatedItem.discount.couponData.onlyFirstTemplate** | `boolean` | No description | ❌ |
| **updatedItem.discount.couponData.onlyPlanId** | `array` | No description | ❌ |
| **updatedItem.discount.couponData.onlySchool** | `boolean` | No description | ❌ |
| **updatedItem.discount.couponData.onlyTemplateId** | `array` | No description | ❌ |
| **updatedItem.discount.couponData.onlyUnconverted** | `boolean` | No description | ❌ |
| **updatedItem.discount.couponData.percentOff** | `integer` | No description | ❌ |
| **updatedItem.discount.couponData.rebateUSD** | `integer` | No description | ❌ |
| **updatedItem.discount.couponData.redemptionsLeft** | `integer` | No description | ❌ |
| **updatedItem.discount.migratedFromLegacyBilling** | `boolean` | No description | ❌ |
| **updatedItem.failedCharges** | `integer` | No description | ❌ |
| **updatedItem.incidentalsLastInvoicedOn** | `string` | No description | ❌ |
| **updatedItem.lastChargeId** | `string` | No description | ❌ |
| **updatedItem.paidUntil** | `string` | No description | ❌ |
| **updatedItem.partnerCode** | `unknown` | No description | ❌ |
| **updatedItem.pastDueStripeInvoiceId** | `unknown` | No description | ❌ |
| **updatedItem.paysFor** | `object` | No description | ❌ |
| **updatedItem.paysFor.org** | `unknown` | No description | ❌ |
| **updatedItem.paysFor.person** | `unknown` | No description | ❌ |
| **updatedItem.paysFor.sites** | `array` | No description | ❌ |
| **updatedItem.paysFor.workspace** | `unknown` | No description | ❌ |
| **updatedItem.plan** | `string` | No description | ❌ |
| **updatedItem.quantity** | `integer` | No description | ❌ |
| **updatedItem.stripe** | `object` | No description | ❌ |
| **updatedItem.stripe.discountId** | `unknown` | No description | ❌ |
| **updatedItem.stripe.itemId** | `string` | No description | ❌ |
| **updatedItem.stripe.subscriptionId** | `string` | No description | ❌ |
| **updatedItem.stripe.subscriptionPaidUntil** | `string` | No description | ❌ |
| **updatedItem.target** | `string` | No description | ❌ |
| **user** | `object` | No description | ❌ |
| **user.email** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Billing Action Tracked", {
  "action": "<<type: string, required: false>>",
  "actorId": "<<type: string, required: false>>",
  "actorType": "<<type: string, required: false>>",
  "billId": "<<type: string, required: false>>",
  "causedBy": {
    "admin": "<<type: string, required: false>>",
    "reason": "<<type: string, required: false>>",
    "system": "<<type: string, required: false>>",
    "user": "<<type: string, required: false>>"
  },
  "coupon": {
    "__v": "<<type: integer, required: false>>",
    "_id": "<<type: string, required: false>>",
    "allowAccountItems": "<<type: boolean, required: false>>",
    "allowMonthlyBill": "<<type: boolean, required: false>>",
    "allowRetroactiveUse": "<<type: boolean, required: false>>",
    "allowSiteItems": "<<type: boolean, required: false>>",
    "allowTeamItems": "<<type: boolean, required: false>>",
    "allowTemplatePurchases": "<<type: boolean, required: false>>",
    "allowWorkspaceItems": "<<type: boolean, required: false>>",
    "allowYearlyBill": "<<type: boolean, required: false>>",
    "code": "<<type: string, required: false>>",
    "createdBy": "<<type: string, required: false>>",
    "createdOn": "<<type: string, required: false>>",
    "department": "<<type: string, required: false>>",
    "description": "<<type: string, required: false>>",
    "durationInMonths": "<<type: integer, required: false>>",
    "expiresOn": "<<type: string, required: false>>",
    "maxRedemptionsPerUser": "<<type: integer, required: false>>",
    "oneOff": "<<type: boolean, required: false>>",
    "onlyFirstTemplate": "<<type: boolean, required: false>>",
    "onlyPlanId": "<<type: array, required: false>>",
    "onlySchool": "<<type: boolean, required: false>>",
    "onlyTemplateId": "<<type: array, required: false>>",
    "onlyUnconverted": "<<type: boolean, required: false>>",
    "onlyUserAgeAbove": "<<type: integer, required: false>>",
    "onlyUserAgeUnder": "<<type: integer, required: false>>",
    "percentOff": "<<type: integer, required: false>>",
    "rebateUSD": "<<type: integer, required: false>>",
    "redemptionsLeft": "<<type: integer, required: false>>"
  },
  "currency": "<<type: string, required: false>>",
  "interval": "<<type: string, required: false>>",
  "invoiceTargetSubscriptionId": "<<type: string, required: false>>",
  "item": "<<type: unknown, required: false>>",
  "itemId": "<<type: string, required: false>>",
  "kind": "<<type: string, required: false>>",
  "mode": "<<type: string, required: false>>",
  "newPlan": "<<type: string, required: false>>",
  "opts": {
    "invoiceTargetSubscriptionId": "<<type: string, required: false>>",
    "removeTeamsHostingPlans": "<<type: boolean, required: false>>"
  },
  "origin": "<<type: unknown, required: false>>",
  "ownerId": "<<type: string, required: false>>",
  "ownerType": "<<type: string, required: false>>",
  "partnerCode": "<<type: unknown, required: false>>",
  "personId": "<<type: string, required: false>>",
  "pile": {
    "__v": "<<type: integer, required: false>>",
    "_id": "<<type: string, required: false>>",
    "archived": "<<type: boolean, required: false>>",
    "chargeUSD": "<<type: integer, required: false>>",
    "createdOn": "<<type: string, required: false>>",
    "creditUSD": "<<type: integer, required: false>>",
    "refill": {
      "enabled": "<<type: boolean, required: false>>",
      "level": "<<type: integer, required: false>>"
    },
    "target": "<<type: string, required: false>>"
  },
  "plan": "<<type: string, required: false>>",
  "prorate": "<<type: string, required: false>>",
  "removeTeamsHostingPlans": "<<type: boolean, required: false>>",
  "replacement_id": "<<type: unknown, required: false>>",
  "siteId": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "source_id": "<<type: string, required: false>>",
  "subscriptionId": "<<type: string, required: false>>",
  "targetId": "<<type: string, required: false>>",
  "templateId": "<<type: string, required: false>>",
  "trialEndsAt": "<<type: string, required: false>>",
  "update": {
    "causedBy": {
      "admin": "<<type: string, required: false>>"
    },
    "source": "<<type: string, required: false>>"
  },
  "updatedItem": {
    "__v": "<<type: integer, required: false>>",
    "_id": "<<type: string, required: false>>",
    "bill": "<<type: string, required: false>>",
    "bulkHostingUsed": "<<type: boolean, required: false>>",
    "createdOn": "<<type: string, required: false>>",
    "delinquentOn": "<<type: unknown, required: false>>",
    "discount": {
      "addedOn": "<<type: string, required: false>>",
      "couponData": {
        "__v": "<<type: integer, required: false>>",
        "_id": "<<type: string, required: false>>",
        "allowAccountItems": "<<type: boolean, required: false>>",
        "allowMonthlyBill": "<<type: boolean, required: false>>",
        "allowRetroactiveUse": "<<type: boolean, required: false>>",
        "allowSiteItems": "<<type: boolean, required: false>>",
        "allowTeamItems": "<<type: boolean, required: false>>",
        "allowTemplatePurchases": "<<type: boolean, required: false>>",
        "allowWorkspaceItems": "<<type: boolean, required: false>>",
        "allowYearlyBill": "<<type: boolean, required: false>>",
        "code": "<<type: string, required: false>>",
        "createdBy": "<<type: string, required: false>>",
        "createdOn": "<<type: string, required: false>>",
        "department": "<<type: string, required: false>>",
        "description": "<<type: string, required: false>>",
        "durationInMonths": "<<type: integer, required: false>>",
        "expiresOn": "<<type: string, required: false>>",
        "maxRedemptionsPerUser": "<<type: integer, required: false>>",
        "oneOff": "<<type: boolean, required: false>>",
        "onlyFirstTemplate": "<<type: boolean, required: false>>",
        "onlyPlanId": "<<type: array, required: false>>",
        "onlySchool": "<<type: boolean, required: false>>",
        "onlyTemplateId": "<<type: array, required: false>>",
        "onlyUnconverted": "<<type: boolean, required: false>>",
        "percentOff": "<<type: integer, required: false>>",
        "rebateUSD": "<<type: integer, required: false>>",
        "redemptionsLeft": "<<type: integer, required: false>>"
      },
      "migratedFromLegacyBilling": "<<type: boolean, required: false>>"
    },
    "failedCharges": "<<type: integer, required: false>>",
    "incidentalsLastInvoicedOn": "<<type: string, required: false>>",
    "lastChargeId": "<<type: string, required: false>>",
    "paidUntil": "<<type: string, required: false>>",
    "partnerCode": "<<type: unknown, required: false>>",
    "pastDueStripeInvoiceId": "<<type: unknown, required: false>>",
    "paysFor": {
      "org": "<<type: unknown, required: false>>",
      "person": "<<type: unknown, required: false>>",
      "sites": "<<type: array, required: false>>",
      "workspace": "<<type: unknown, required: false>>"
    },
    "plan": "<<type: string, required: false>>",
    "quantity": "<<type: integer, required: false>>",
    "stripe": {
      "discountId": "<<type: unknown, required: false>>",
      "itemId": "<<type: string, required: false>>",
      "subscriptionId": "<<type: string, required: false>>",
      "subscriptionPaidUntil": "<<type: string, required: false>>"
    },
    "target": "<<type: string, required: false>>"
  },
  "user": {
    "email": "<<type: string, required: false>>"
  },
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Birdie Button Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Birdie Button Clicked", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Blank Site Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Blank Site Selected", {
  "ref": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Blog Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **category** | `string` | No description | ❌ |
| **created at** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **loggedIn** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **post author** | `string` | No description | ❌ |
| **post tag slug** | `string` | No description | ❌ |
| **post title** | `string` | No description | ❌ |
| **published at** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **updated at** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Blog Viewed", {
  "category": "<<type: string, required: false>>",
  "created at": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "loggedIn": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "post author": "<<type: string, required: false>>",
  "post tag slug": "<<type: string, required: false>>",
  "post title": "<<type: string, required: false>>",
  "published at": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "updated at": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## CC Deleted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("CC Deleted", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## CMS Item Publish Failed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **failure reason** | `string` | No description | ❌ |
| **failure_reason** | `string` | No description | ❌ |
| **publish type** | `string` | No description | ❌ |
| **publish_type** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("CMS Item Publish Failed", {
  "failure reason": "<<type: string, required: false>>",
  "failure_reason": "<<type: string, required: false>>",
  "publish type": "<<type: string, required: false>>",
  "publish_type": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## CMS Item Published

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **publish type** | `string` | No description | ❌ |
| **publish_type** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("CMS Item Published", {
  "publish type": "<<type: string, required: false>>",
  "publish_type": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## CTA Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **button CTA** | `string` | No description | ❌ |
| **button action** | `string` | No description | ❌ |
| **button action and type** | `string` | No description | ❌ |
| **button cta** | `string` | No description | ❌ |
| **cities** | `array` | No description | ❌ |
| **countries** | `array` | No description | ❌ |
| **ids** | `array` | No description | ❌ |
| **ids.items** | `object` | Contains the structure for array items | ❌ |
| **ids.items.__v** | `integer` | No description | ❌ |
| **ids.items._id** | `string` | No description | ❌ |
| **ids.items._status** | `object` | No description | ❌ |
| **ids.items._status.code** | `string` | No description | ❌ |
| **ids.items._status.lastChanged** | `string` | No description | ❌ |
| **ids.items.active** | `boolean` | No description | ❌ |
| **ids.items.annotationCount** | `integer` | No description | ❌ |
| **ids.items.apolloMaxRequestsPerSecond** | `number` | No description | ❌ |
| **ids.items.archived** | `boolean` | No description | ❌ |
| **ids.items.assetSize** | `integer` | No description | ❌ |
| **ids.items.authStr** | `unknown` | No description | ❌ |
| **ids.items.authUser** | `unknown` | No description | ❌ |
| **ids.items.brandLogo** | `string` | No description | ❌ |
| **ids.items.brandName** | `unknown` | No description | ❌ |
| **ids.items.captchaPlugin** | `string` | No description | ❌ |
| **ids.items.cdnInfo** | `object` | No description | ❌ |
| **ids.items.cdnInfo.cdnMonthlyGBLimit** | `integer` | No description | ❌ |
| **ids.items.cdnInfo.endDate** | `string` | No description | ❌ |
| **ids.items.cdnInfo.nearCdnLimit** | `boolean` | No description | ❌ |
| **ids.items.cdnInfo.projectedUsageGB** | `number` | No description | ❌ |
| **ids.items.cdnInfo.startDate** | `string` | No description | ❌ |
| **ids.items.cdnInfo.totalUsageGB** | `number` | No description | ❌ |
| **ids.items.cdnInfo.usageOfLimit** | `number` | No description | ❌ |
| **ids.items.cloneOf** | `string` | No description | ❌ |
| **ids.items.compiledAt** | `string` | No description | ❌ |
| **ids.items.createdBy** | `string` | No description | ❌ |
| **ids.items.createdOn** | `string` | No description | ❌ |
| **ids.items.dashboardFolder** | `string` | No description | ❌ |
| **ids.items.database** | `string` | No description | ❌ |
| **ids.items.designTime** | `integer` | No description | ❌ |
| **ids.items.dirty** | `boolean` | No description | ❌ |
| **ids.items.domain** | `string` | No description | ❌ |
| **ids.items.emailFormFromLabel** | `string` | No description | ❌ |
| **ids.items.emailFormOptions** | `object` | No description | ❌ |
| **ids.items.emailFormOptions.incSubInfo** | `boolean` | No description | ❌ |
| **ids.items.emailFormOptions.incUnsubLink** | `boolean` | No description | ❌ |
| **ids.items.emailFormReplyTo** | `string` | No description | ❌ |
| **ids.items.emailFormSubject** | `string` | No description | ❌ |
| **ids.items.emailFormTarget** | `string` | No description | ❌ |
| **ids.items.emailFormTemplate** | `string` | No description | ❌ |
| **ids.items.exportCount** | `integer` | No description | ❌ |
| **ids.items.exportedToStigg** | `boolean` | No description | ❌ |
| **ids.items.faviconUrl** | `string` | No description | ❌ |
| **ids.items.formFileLoginRequired** | `boolean` | No description | ❌ |
| **ids.items.formSubmissions** | `integer` | No description | ❌ |
| **ids.items.formsHaveBeenMigrated** | `boolean` | No description | ❌ |
| **ids.items.googleDomain** | `string` | No description | ❌ |
| **ids.items.hasHosting** | `boolean` | No description | ❌ |
| **ids.items.hosting** | `object` | No description | ❌ |
| **ids.items.hosting._deprecatedTierName** | `string` | No description | ❌ |
| **ids.items.hosting.addons** | `array` | No description | ❌ |
| **ids.items.hosting.capabilities** | `object` | No description | ❌ |
| **ids.items.hosting.compatibleAddons** | `array` | No description | ❌ |
| **ids.items.hosting.displayName** | `string` | No description | ❌ |
| **ids.items.hosting.id** | `string` | No description | ❌ |
| **ids.items.hosting.interval** | `string` | No description | ❌ |
| **ids.items.hosting.kind** | `string` | No description | ❌ |
| **ids.items.hosting.metadata** | `object` | No description | ❌ |
| **ids.items.hosting.monthlyPrices** | `object` | No description | ❌ |
| **ids.items.hosting.name** | `string` | No description | ❌ |
| **ids.items.hosting.paidUntil** | `string` | No description | ❌ |
| **ids.items.hosting.plan** | `string` | No description | ❌ |
| **ids.items.hosting.prices** | `array` | No description | ❌ |
| **ids.items.hosting.pricingModel** | `string` | No description | ❌ |
| **ids.items.hosting.pricingRules** | `object` | No description | ❌ |
| **ids.items.hosting.site** | `string` | No description | ❌ |
| **ids.items.hosting.sites** | `array` | No description | ❌ |
| **ids.items.hosting.stripeProductId** | `string` | No description | ❌ |
| **ids.items.hosting.stripeSubscriptionId** | `string` | No description | ❌ |
| **ids.items.hosting.subscriptionId** | `string` | No description | ❌ |
| **ids.items.hosting.yearlyPrices** | `object` | No description | ❌ |
| **ids.items.hostingPlanName** | `string` | No description | ❌ |
| **ids.items.indexPage** | `string` | No description | ❌ |
| **ids.items.installedMarketplaceResources** | `array` | No description | ❌ |
| **ids.items.isExpired** | `integer` | No description | ❌ |
| **ids.items.isStagingPrivate** | `boolean` | No description | ❌ |
| **ids.items.lastExport** | `string` | No description | ❌ |
| **ids.items.lastFormInvoice** | `string` | No description | ❌ |
| **ids.items.lastPublicationId** | `string` | No description | ❌ |
| **ids.items.lastPublished** | `string` | No description | ❌ |
| **ids.items.lastPublishedBy** | `string` | No description | ❌ |
| **ids.items.lastSearchIndex** | `string` | No description | ❌ |
| **ids.items.lastSearchIndexAuto** | `string` | No description | ❌ |
| **ids.items.lastSearchIndexManual** | `unknown` | No description | ❌ |
| **ids.items.lastSnapped** | `string` | No description | ❌ |
| **ids.items.lastUpdated** | `string` | No description | ❌ |
| **ids.items.lockDeletion** | `boolean` | No description | ❌ |
| **ids.items.lockedReason** | `unknown` | No description | ❌ |
| **ids.items.maxPages** | `unknown` | No description | ❌ |
| **ids.items.name** | `string` | No description | ❌ |
| **ids.items.newFormDatas** | `integer` | No description | ❌ |
| **ids.items.oldPreviewId** | `string` | No description | ❌ |
| **ids.items.persistentUIState** | `object` | No description | ❌ |
| **ids.items.persistentUIState.addTabVisibilityStates** | `object` | No description | ❌ |
| **ids.items.persistentUIState.auditResultsIgnored** | `array` | No description | ❌ |
| **ids.items.persistentUIState.auditResultsRead** | `array` | No description | ❌ |
| **ids.items.persistentUIState.logicLibraryVisibilityStates** | `object` | No description | ❌ |
| **ids.items.persistentUIState.numSiteVisit** | `integer` | No description | ❌ |
| **ids.items.persistentUIState.pageSettingVisibilityStates** | `object` | No description | ❌ |
| **ids.items.persistentUIState.pageVisibilityStates** | `object` | No description | ❌ |
| **ids.items.persistentUIState.stylePanelVisibilityStates** | `object` | No description | ❌ |
| **ids.items.previewId** | `string` | No description | ❌ |
| **ids.items.previewUrl** | `string` | No description | ❌ |
| **ids.items.previewUrlSm** | `string` | No description | ❌ |
| **ids.items.public** | `boolean` | No description | ❌ |
| **ids.items.recaptchaRequired** | `boolean` | No description | ❌ |
| **ids.items.recaptchaSecretKey** | `unknown` | No description | ❌ |
| **ids.items.recaptchaSiteKey** | `unknown` | No description | ❌ |
| **ids.items.responsiveImages** | `boolean` | No description | ❌ |
| **ids.items.roles** | `object` | No description | ❌ |
| **ids.items.roles.site** | `string` | No description | ❌ |
| **ids.items.roles.workspace** | `string` | No description | ❌ |
| **ids.items.searchIndexMode** | `string` | No description | ❌ |
| **ids.items.searchIndexShard** | `string` | No description | ❌ |
| **ids.items.searchIndexSlice** | `string` | No description | ❌ |
| **ids.items.shortName** | `string` | No description | ❌ |
| **ids.items.siteCredits** | `array` | No description | ❌ |
| **ids.items.siteFileDependenciesInitialized** | `boolean` | No description | ❌ |
| **ids.items.siteSpecificAccess** | `boolean` | No description | ❌ |
| **ids.items.sslHosting** | `boolean` | No description | ❌ |
| **ids.items.styleCount** | `integer` | No description | ❌ |
| **ids.items.styleOps** | `integer` | No description | ❌ |
| **ids.items.template** | `unknown` | No description | ❌ |
| **ids.items.templateOf** | `string` | No description | ❌ |
| **ids.items.timezone** | `string` | No description | ❌ |
| **ids.items.version** | `integer` | No description | ❌ |
| **ids.items.webClipUrl** | `string` | No description | ❌ |
| **ids.items.workspace** | `string` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **modal name** | `string` | No description | ❌ |
| **modal type** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **page section** | `string` | No description | ❌ |
| **page step** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **position on page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **scroll** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site ids** | `array` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **skills** | `array` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **sso** | `boolean` | No description | ❌ |
| **surface area** | `string` | No description | ❌ |
| **target** | `string` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("CTA Clicked", {
  "button CTA": "<<type: string, required: false>>",
  "button action": "<<type: string, required: false>>",
  "button action and type": "<<type: string, required: false>>",
  "button cta": "<<type: string, required: false>>",
  "cities": "<<type: array, required: false>>",
  "countries": "<<type: array, required: false>>",
  "ids": [
    {
      "__v": "<<type: integer, required: false>>",
      "_id": "<<type: string, required: false>>",
      "_status": {
        "code": "<<type: string, required: false>>",
        "lastChanged": "<<type: string, required: false>>"
      },
      "active": "<<type: boolean, required: false>>",
      "annotationCount": "<<type: integer, required: false>>",
      "apolloMaxRequestsPerSecond": "<<type: number, required: false>>",
      "archived": "<<type: boolean, required: false>>",
      "assetSize": "<<type: integer, required: false>>",
      "authStr": "<<type: unknown, required: false>>",
      "authUser": "<<type: unknown, required: false>>",
      "brandLogo": "<<type: string, required: false>>",
      "brandName": "<<type: unknown, required: false>>",
      "captchaPlugin": "<<type: string, required: false>>",
      "cdnInfo": {
        "cdnMonthlyGBLimit": "<<type: integer, required: false>>",
        "endDate": "<<type: string, required: false>>",
        "nearCdnLimit": "<<type: boolean, required: false>>",
        "projectedUsageGB": "<<type: number, required: false>>",
        "startDate": "<<type: string, required: false>>",
        "totalUsageGB": "<<type: number, required: false>>",
        "usageOfLimit": "<<type: number, required: false>>"
      },
      "cloneOf": "<<type: string, required: false>>",
      "compiledAt": "<<type: string, required: false>>",
      "createdBy": "<<type: string, required: false>>",
      "createdOn": "<<type: string, required: false>>",
      "dashboardFolder": "<<type: string, required: false>>",
      "database": "<<type: string, required: false>>",
      "designTime": "<<type: integer, required: false>>",
      "dirty": "<<type: boolean, required: false>>",
      "domain": "<<type: string, required: false>>",
      "emailFormFromLabel": "<<type: string, required: false>>",
      "emailFormOptions": {
        "incSubInfo": "<<type: boolean, required: false>>",
        "incUnsubLink": "<<type: boolean, required: false>>"
      },
      "emailFormReplyTo": "<<type: string, required: false>>",
      "emailFormSubject": "<<type: string, required: false>>",
      "emailFormTarget": "<<type: string, required: false>>",
      "emailFormTemplate": "<<type: string, required: false>>",
      "exportCount": "<<type: integer, required: false>>",
      "exportedToStigg": "<<type: boolean, required: false>>",
      "faviconUrl": "<<type: string, required: false>>",
      "formFileLoginRequired": "<<type: boolean, required: false>>",
      "formSubmissions": "<<type: integer, required: false>>",
      "formsHaveBeenMigrated": "<<type: boolean, required: false>>",
      "googleDomain": "<<type: string, required: false>>",
      "hasHosting": "<<type: boolean, required: false>>",
      "hosting": {
        "_deprecatedTierName": "<<type: string, required: false>>",
        "addons": "<<type: array, required: false>>",
        "capabilities": "<<type: object, required: false>>",
        "compatibleAddons": "<<type: array, required: false>>",
        "displayName": "<<type: string, required: false>>",
        "id": "<<type: string, required: false>>",
        "interval": "<<type: string, required: false>>",
        "kind": "<<type: string, required: false>>",
        "metadata": "<<type: object, required: false>>",
        "monthlyPrices": "<<type: object, required: false>>",
        "name": "<<type: string, required: false>>",
        "paidUntil": "<<type: string, required: false>>",
        "plan": "<<type: string, required: false>>",
        "prices": "<<type: array, required: false>>",
        "pricingModel": "<<type: string, required: false>>",
        "pricingRules": "<<type: object, required: false>>",
        "site": "<<type: string, required: false>>",
        "sites": "<<type: array, required: false>>",
        "stripeProductId": "<<type: string, required: false>>",
        "stripeSubscriptionId": "<<type: string, required: false>>",
        "subscriptionId": "<<type: string, required: false>>",
        "yearlyPrices": "<<type: object, required: false>>"
      },
      "hostingPlanName": "<<type: string, required: false>>",
      "indexPage": "<<type: string, required: false>>",
      "installedMarketplaceResources": "<<type: array, required: false>>",
      "isExpired": "<<type: integer, required: false>>",
      "isStagingPrivate": "<<type: boolean, required: false>>",
      "lastExport": "<<type: string, required: false>>",
      "lastFormInvoice": "<<type: string, required: false>>",
      "lastPublicationId": "<<type: string, required: false>>",
      "lastPublished": "<<type: string, required: false>>",
      "lastPublishedBy": "<<type: string, required: false>>",
      "lastSearchIndex": "<<type: string, required: false>>",
      "lastSearchIndexAuto": "<<type: string, required: false>>",
      "lastSearchIndexManual": "<<type: unknown, required: false>>",
      "lastSnapped": "<<type: string, required: false>>",
      "lastUpdated": "<<type: string, required: false>>",
      "lockDeletion": "<<type: boolean, required: false>>",
      "lockedReason": "<<type: unknown, required: false>>",
      "maxPages": "<<type: unknown, required: false>>",
      "name": "<<type: string, required: false>>",
      "newFormDatas": "<<type: integer, required: false>>",
      "oldPreviewId": "<<type: string, required: false>>",
      "persistentUIState": {
        "addTabVisibilityStates": "<<type: object, required: false>>",
        "auditResultsIgnored": "<<type: array, required: false>>",
        "auditResultsRead": "<<type: array, required: false>>",
        "logicLibraryVisibilityStates": "<<type: object, required: false>>",
        "numSiteVisit": "<<type: integer, required: false>>",
        "pageSettingVisibilityStates": "<<type: object, required: false>>",
        "pageVisibilityStates": "<<type: object, required: false>>",
        "stylePanelVisibilityStates": "<<type: object, required: false>>"
      },
      "previewId": "<<type: string, required: false>>",
      "previewUrl": "<<type: string, required: false>>",
      "previewUrlSm": "<<type: string, required: false>>",
      "public": "<<type: boolean, required: false>>",
      "recaptchaRequired": "<<type: boolean, required: false>>",
      "recaptchaSecretKey": "<<type: unknown, required: false>>",
      "recaptchaSiteKey": "<<type: unknown, required: false>>",
      "responsiveImages": "<<type: boolean, required: false>>",
      "roles": {
        "site": "<<type: string, required: false>>",
        "workspace": "<<type: string, required: false>>"
      },
      "searchIndexMode": "<<type: string, required: false>>",
      "searchIndexShard": "<<type: string, required: false>>",
      "searchIndexSlice": "<<type: string, required: false>>",
      "shortName": "<<type: string, required: false>>",
      "siteCredits": "<<type: array, required: false>>",
      "siteFileDependenciesInitialized": "<<type: boolean, required: false>>",
      "siteSpecificAccess": "<<type: boolean, required: false>>",
      "sslHosting": "<<type: boolean, required: false>>",
      "styleCount": "<<type: integer, required: false>>",
      "styleOps": "<<type: integer, required: false>>",
      "template": "<<type: unknown, required: false>>",
      "templateOf": "<<type: string, required: false>>",
      "timezone": "<<type: string, required: false>>",
      "version": "<<type: integer, required: false>>",
      "webClipUrl": "<<type: string, required: false>>",
      "workspace": "<<type: string, required: false>>"
    }
  ],
  "legacy team id": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "modal name": "<<type: string, required: false>>",
  "modal type": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "page section": "<<type: string, required: false>>",
  "page step": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "position on page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "scroll": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site ids": "<<type: array, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "skills": "<<type: array, required: false>>",
  "source": "<<type: string, required: false>>",
  "sso": "<<type: boolean, required: false>>",
  "surface area": "<<type: string, required: false>>",
  "target": "<<type: string, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "type": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Changed Password

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Changed Password", {
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Checkout Modal Closed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **fields with values** | `array` | No description | ❌ |
| **plan selected** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **selected plan** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **team id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Checkout Modal Closed", {
  "action": "<<type: string, required: false>>",
  "fields with values": "<<type: array, required: false>>",
  "plan selected": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "selected plan": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "team id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Checkout Modal Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **Plan Type** | `string` | No description | ❌ |
| **initial number of seats** | `integer` | No description | ❌ |
| **initial plan frequency** | `unknown` | No description | ❌ |
| **initial plan level** | `string` | No description | ❌ |
| **legacy initial number of seats** | `integer` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **plan selected** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **selected plan** | `string` | No description | ❌ |
| **selected plan id** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **team id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Checkout Modal Opened", {
  "Plan Type": "<<type: string, required: false>>",
  "initial number of seats": "<<type: integer, required: false>>",
  "initial plan frequency": "<<type: unknown, required: false>>",
  "initial plan level": "<<type: string, required: false>>",
  "legacy initial number of seats": "<<type: integer, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "plan selected": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "selected plan": "<<type: string, required: false>>",
  "selected plan id": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "team id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Checkout Payment Button Pressed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **Charged Amount (dollars)** | `integer` | No description | ❌ |
| **Desired Plan Level** | `string` | No description | ❌ |
| **Desired Plan Period** | `string` | No description | ❌ |
| **Desired Plan Seats** | `integer` | No description | ❌ |
| **Plan Type** | `string` | No description | ❌ |
| **Promo Used** | `boolean` | No description | ❌ |
| **add-on initial quantity** | `integer` | No description | ❌ |
| **add-on new quantity** | `integer` | No description | ❌ |
| **charged amount** | `integer` | No description | ❌ |
| **comments** | `unknown` | No description | ❌ |
| **currency of new plan** | `string` | No description | ❌ |
| **initial number of seats** | `integer` | No description | ❌ |
| **initial plan frequency** | `unknown` | No description | ❌ |
| **initial plan level** | `string` | No description | ❌ |
| **legacy new number of seats** | `integer` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **new plan frequency** | `string` | No description | ❌ |
| **new plan level** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **promotion applied** | `boolean` | No description | ❌ |
| **promotion type** | `string` | No description | ❌ |
| **promotion value** | `integer` | No description | ❌ |
| **reason** | `array` | No description | ❌ |
| **reason difficult to use** | `array` | No description | ❌ |
| **reason missing features** | `array` | No description | ❌ |
| **reason switch to competitor** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **selected plan** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **stripe subscription id** | `string` | No description | ❌ |
| **team id** | `string` | No description | ❌ |
| **value of new plan** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace initial number of seats** | `integer` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace new number of seats** | `integer` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Checkout Payment Button Pressed", {
  "Charged Amount (dollars)": "<<type: integer, required: false>>",
  "Desired Plan Level": "<<type: string, required: false>>",
  "Desired Plan Period": "<<type: string, required: false>>",
  "Desired Plan Seats": "<<type: integer, required: false>>",
  "Plan Type": "<<type: string, required: false>>",
  "Promo Used": "<<type: boolean, required: false>>",
  "add-on initial quantity": "<<type: integer, required: false>>",
  "add-on new quantity": "<<type: integer, required: false>>",
  "charged amount": "<<type: integer, required: false>>",
  "comments": "<<type: unknown, required: false>>",
  "currency of new plan": "<<type: string, required: false>>",
  "initial number of seats": "<<type: integer, required: false>>",
  "initial plan frequency": "<<type: unknown, required: false>>",
  "initial plan level": "<<type: string, required: false>>",
  "legacy new number of seats": "<<type: integer, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "new plan frequency": "<<type: string, required: false>>",
  "new plan level": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "promotion applied": "<<type: boolean, required: false>>",
  "promotion type": "<<type: string, required: false>>",
  "promotion value": "<<type: integer, required: false>>",
  "reason": "<<type: array, required: false>>",
  "reason difficult to use": "<<type: array, required: false>>",
  "reason missing features": "<<type: array, required: false>>",
  "reason switch to competitor": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "selected plan": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "stripe subscription id": "<<type: string, required: false>>",
  "team id": "<<type: string, required: false>>",
  "value of new plan": "<<type: integer, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace initial number of seats": "<<type: integer, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace new number of seats": "<<type: integer, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Clicked Navbar Link

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **breakpoint** | `string` | No description | ❌ |
| **link** | `string` | No description | ❌ |
| **name** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Clicked Navbar Link", {
  "breakpoint": "<<type: string, required: false>>",
  "link": "<<type: string, required: false>>",
  "name": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Common Support Link Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **question** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Common Support Link Clicked", {
  "question": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Contact Sales Exit Modal Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Contact Sales Exit Modal Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Credit card charge failed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Credit card charge failed", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Dashboard Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **ref** | `array` | No description | ❌ |
| **section** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Dashboard Viewed", {
  "legacy team id": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "ref": "<<type: array, required: false>>",
  "section": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "source": "<<type: string, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Default Workspace Set

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Default Workspace Set", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Delete CMS Modal Closed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Delete CMS Modal Closed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Delete CMS Modal Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Delete CMS Modal Opened", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Designer Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **active tutorials** | `string` | No description | ❌ |
| **cms item count** | `integer` | No description | ❌ |
| **design mode** | `string` | No description | ❌ |
| **ecommerce enabled** | `boolean` | No description | ❌ |
| **ecommerce item count** | `integer` | No description | ❌ |
| **enterprise billing** | `boolean` | No description | ❌ |
| **legacy seat count** | `integer` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **mode** | `array` | No description | ❌ |
| **num designer-teammates** | `integer` | No description | ❌ |
| **num editor-teammates** | `integer` | No description | ❌ |
| **num self-instances** | `integer` | No description | ❌ |
| **num total instances** | `integer` | No description | ❌ |
| **page count** | `integer` | No description | ❌ |
| **page id** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **project count** | `integer` | No description | ❌ |
| **project item count** | `integer` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site published** | `boolean` | No description | ❌ |
| **site role** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **styles count** | `integer` | No description | ❌ |
| **total collection count** | `integer` | No description | ❌ |
| **tutorial** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Designer Opened", {
  "active tutorials": "<<type: string, required: false>>",
  "cms item count": "<<type: integer, required: false>>",
  "design mode": "<<type: string, required: false>>",
  "ecommerce enabled": "<<type: boolean, required: false>>",
  "ecommerce item count": "<<type: integer, required: false>>",
  "enterprise billing": "<<type: boolean, required: false>>",
  "legacy seat count": "<<type: integer, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "mode": "<<type: array, required: false>>",
  "num designer-teammates": "<<type: integer, required: false>>",
  "num editor-teammates": "<<type: integer, required: false>>",
  "num self-instances": "<<type: integer, required: false>>",
  "num total instances": "<<type: integer, required: false>>",
  "page count": "<<type: integer, required: false>>",
  "page id": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "project count": "<<type: integer, required: false>>",
  "project item count": "<<type: integer, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site published": "<<type: boolean, required: false>>",
  "site role": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "styles count": "<<type: integer, required: false>>",
  "total collection count": "<<type: integer, required: false>>",
  "tutorial": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Devlink Components Synced

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **css modules** | `boolean` | No description | ❌ |
| **is subset** | `boolean` | No description | ❌ |
| **limit exceeded** | `boolean` | No description | ❌ |
| **number of components** | `integer` | No description | ❌ |
| **number of elements** | `integer` | No description | ❌ |
| **number of style blocks** | `integer` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Devlink Components Synced", {
  "css modules": "<<type: boolean, required: false>>",
  "is subset": "<<type: boolean, required: false>>",
  "limit exceeded": "<<type: boolean, required: false>>",
  "number of components": "<<type: integer, required: false>>",
  "number of elements": "<<type: integer, required: false>>",
  "number of style blocks": "<<type: integer, required: false>>",
  "site id": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Disabled SSL

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Disabled SSL", {
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Disabled Two-Factor Authentication

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Disabled Two-Factor Authentication", {
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Downgrade Plan Button Pressed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **comments** | `unknown` | No description | ❌ |
| **initial plan frequency** | `string` | No description | ❌ |
| **initial plan level** | `string` | No description | ❌ |
| **new plan frequency** | `string` | No description | ❌ |
| **new plan level** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **promotion applied** | `boolean` | No description | ❌ |
| **reason** | `array` | No description | ❌ |
| **reason cancel Site plan** | `string` | No description | ❌ |
| **reason cancel Workspace plan** | `string` | No description | ❌ |
| **reason difficult to use** | `array` | No description | ❌ |
| **reason improvement areas** | `array` | No description | ❌ |
| **reason missing features** | `array` | No description | ❌ |
| **reason project canceled** | `string` | No description | ❌ |
| **reason switch to competitor** | `string` | No description | ❌ |
| **reason transferring site** | `string` | No description | ❌ |
| **reason unnecessary features** | `array` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **stripe subscription id** | `string` | No description | ❌ |
| **value of new plan** | `unknown` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace initial number of seats** | `integer` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace new number of seats** | `integer` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Downgrade Plan Button Pressed", {
  "comments": "<<type: unknown, required: false>>",
  "initial plan frequency": "<<type: string, required: false>>",
  "initial plan level": "<<type: string, required: false>>",
  "new plan frequency": "<<type: string, required: false>>",
  "new plan level": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "promotion applied": "<<type: boolean, required: false>>",
  "reason": "<<type: array, required: false>>",
  "reason cancel Site plan": "<<type: string, required: false>>",
  "reason cancel Workspace plan": "<<type: string, required: false>>",
  "reason difficult to use": "<<type: array, required: false>>",
  "reason improvement areas": "<<type: array, required: false>>",
  "reason missing features": "<<type: array, required: false>>",
  "reason project canceled": "<<type: string, required: false>>",
  "reason switch to competitor": "<<type: string, required: false>>",
  "reason transferring site": "<<type: string, required: false>>",
  "reason unnecessary features": "<<type: array, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "stripe subscription id": "<<type: string, required: false>>",
  "value of new plan": "<<type: unknown, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace initial number of seats": "<<type: integer, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace new number of seats": "<<type: integer, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Download Digital Product

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Download Digital Product", {
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Dropdown Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **dropdown id** | `string` | No description | ❌ |
| **initial value** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **surface area** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Dropdown Opened", {
  "dropdown id": "<<type: string, required: false>>",
  "initial value": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "surface area": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Dropdown Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **dropdown id** | `string` | No description | ❌ |
| **initial value** | `string` | No description | ❌ |
| **new value** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **payment provider** | `string` | No description | ❌ |
| **payout methods** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **selected country** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **surface area** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Dropdown Selected", {
  "dropdown id": "<<type: string, required: false>>",
  "initial value": "<<type: string, required: false>>",
  "new value": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "payment provider": "<<type: string, required: false>>",
  "payout methods": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "selected country": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "surface area": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## EMM - FAQ item opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **item** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("EMM - FAQ item opened", {
  "item": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## EMM - HWV item opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **item** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("EMM - HWV item opened", {
  "item": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Ecommerce Membership Product Limit Exceeded

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Ecommerce Membership Product Limit Exceeded", {
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Ecommerce Product CSV Exported

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **location** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Ecommerce Product CSV Exported", {
  "location": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Editor Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **load method** | `string` | No description | ❌ |
| **location** | `string` | No description | ❌ |
| **siteId** | `string` | No description | ❌ |
| **siteShortName** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Editor Opened", {
  "load method": "<<type: string, required: false>>",
  "location": "<<type: string, required: false>>",
  "siteId": "<<type: string, required: false>>",
  "siteShortName": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Email Entry Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Email Entry Page Viewed", {
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Email Suggestion Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Email Suggestion Page Viewed", {
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Email Suggestion Used

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Email Suggestion Used", {
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Email Verification Completed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Email Verification Completed", {
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Email Verification Sent

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Email Verification Sent", {
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Email Verification Started

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Email Verification Started", {
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Enabled SSL

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Enabled SSL", {
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Enabled Two-Factor Authentication

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Enabled Two-Factor Authentication", {
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Enter Password Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **account type** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **password entry** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **suggested email used** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Enter Password Page Viewed", {
  "account type": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "password entry": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "suggested email used": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Error Encountered

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **error msg** | `string` | No description | ❌ |
| **error type** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Error Encountered", {
  "error msg": "<<type: string, required: false>>",
  "error type": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "source": "<<type: string, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Exit Modal Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Exit Modal Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Experiment Assignment

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **assignment** | `string` | No description | ❌ |
| **authentication state** | `array` | No description | ❌ |
| **experiment** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **specificity** | `string` | No description | ❌ |
| **target audience** | `object` | No description | ❌ |
| **target audience.user** | `object` | No description | ❌ |
| **target audience.user.authState** | `object` | No description | ❌ |
| **target audience.user.authState.important** | `boolean` | No description | ❌ |
| **target audience.user.authState.value** | `array` | No description | ❌ |
| **target audience.user.companySize** | `object` | No description | ❌ |
| **target audience.user.companySize.important** | `boolean` | No description | ❌ |
| **target audience.user.companySize.value** | `array` | No description | ❌ |
| **target audience.user.createdAfter** | `object` | No description | ❌ |
| **target audience.user.createdAfter.important** | `boolean` | No description | ❌ |
| **target audience.user.createdAfter.value** | `string` | No description | ❌ |
| **target audience.user.segmentationCategory** | `object` | No description | ❌ |
| **target audience.user.segmentationCategory.important** | `boolean` | No description | ❌ |
| **target audience.user.segmentationCategory.value** | `array` | No description | ❌ |
| **target audience.workspace** | `object` | No description | ❌ |
| **target audience.workspace.maxSeats** | `object` | No description | ❌ |
| **target audience.workspace.maxSeats.important** | `boolean` | No description | ❌ |
| **target audience.workspace.minSeats** | `object` | No description | ❌ |
| **target audience.workspace.minSeats.important** | `boolean` | No description | ❌ |
| **target audience.workspace.plan** | `object` | No description | ❌ |
| **target audience.workspace.plan.important** | `boolean` | No description | ❌ |
| **target audience.workspace.plan.value** | `array` | No description | ❌ |
| **target audience.workspace.role** | `object` | No description | ❌ |
| **target audience.workspace.role.important** | `boolean` | No description | ❌ |
| **target audience.workspace.role.value** | `array` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspaceId** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Experiment Assignment", {
  "assignment": "<<type: string, required: false>>",
  "authentication state": "<<type: array, required: false>>",
  "experiment": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "source": "<<type: string, required: false>>",
  "specificity": "<<type: string, required: false>>",
  "target audience": {
    "user": {
      "authState": {
        "important": "<<type: boolean, required: false>>",
        "value": "<<type: array, required: false>>"
      },
      "companySize": {
        "important": "<<type: boolean, required: false>>",
        "value": "<<type: array, required: false>>"
      },
      "createdAfter": {
        "important": "<<type: boolean, required: false>>",
        "value": "<<type: string, required: false>>"
      },
      "segmentationCategory": {
        "important": "<<type: boolean, required: false>>",
        "value": "<<type: array, required: false>>"
      }
    },
    "workspace": {
      "maxSeats": {
        "important": "<<type: boolean, required: false>>"
      },
      "minSeats": {
        "important": "<<type: boolean, required: false>>"
      },
      "plan": {
        "important": "<<type: boolean, required: false>>",
        "value": "<<type: array, required: false>>"
      },
      "role": {
        "important": "<<type: boolean, required: false>>",
        "value": "<<type: array, required: false>>"
      }
    }
  },
  "team id": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspaceId": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Experiment Conflicted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **experiment** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Experiment Conflicted", {
  "experiment": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Experiment Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **campaignId** | `string` | No description | ❌ |
| **campaignName** | `string` | No description | ❌ |
| **experimentId** | `string` | No description | ❌ |
| **experimentName** | `string` | No description | ❌ |
| **nonInteraction** | `integer` | No description | ❌ |
| **sectionId** | `string` | No description | ❌ |
| **sectionName** | `string` | No description | ❌ |
| **variationId** | `string` | No description | ❌ |
| **variationName** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Experiment Viewed", {
  "campaignId": "<<type: string, required: false>>",
  "campaignName": "<<type: string, required: false>>",
  "experimentId": "<<type: string, required: false>>",
  "experimentName": "<<type: string, required: false>>",
  "nonInteraction": "<<type: integer, required: false>>",
  "sectionId": "<<type: string, required: false>>",
  "sectionName": "<<type: string, required: false>>",
  "variationId": "<<type: string, required: false>>",
  "variationName": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Experts Apply Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **cta** | `string` | No description | ❌ |
| **location** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Experts Apply Clicked", {
  "cta": "<<type: string, required: false>>",
  "location": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Experts Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **direct-referrer** | `string` | No description | ❌ |
| **expert city** | `string` | No description | ❌ |
| **expert country** | `string` | No description | ❌ |
| **expert location** | `string` | No description | ❌ |
| **expert name** | `string` | No description | ❌ |
| **expert price range** | `string` | No description | ❌ |
| **expert slug** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **params** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **referring-domain** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **utm** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Experts Viewed", {
  "direct-referrer": "<<type: string, required: false>>",
  "expert city": "<<type: string, required: false>>",
  "expert country": "<<type: string, required: false>>",
  "expert location": "<<type: string, required: false>>",
  "expert name": "<<type: string, required: false>>",
  "expert price range": "<<type: string, required: false>>",
  "expert slug": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "params": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "referring-domain": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "utm": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Firewall Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **intent** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Firewall Clicked", {
  "intent": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Firewall Displayed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **intent** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Firewall Displayed", {
  "intent": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Forgot Password Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **trigger source page** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Forgot Password Page Viewed", {
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "trigger source page": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Forum Topic Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **topic** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Forum Topic Clicked", {
  "topic": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Free Domain Banner Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Free Domain Banner Clicked", {
  "action": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Free Domain Menu Item Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Free Domain Menu Item Clicked", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Free Domain Offer Claimed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Free Domain Offer Claimed", {
  "site id": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Free Domain Offer Initiated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Free Domain Offer Initiated", {
  "site id": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Free Domain Offer Redeemed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Free Domain Offer Redeemed", {
  "site id": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Get Support button clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **location** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Get Support button clicked", {
  "location": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Google One Tap Authentication

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Google One Tap Authentication", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Google One Tap Closed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Google One Tap Closed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Google One Tap Closed by Tap Outside

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Google One Tap Closed by Tap Outside", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Google One Tap Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Google One Tap Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Hire Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **cities** | `array` | No description | ❌ |
| **countries** | `array` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **skills** | `array` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **surface area** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Hire Page Viewed", {
  "cities": "<<type: array, required: false>>",
  "countries": "<<type: array, required: false>>",
  "page": "<<type: string, required: false>>",
  "skills": "<<type: array, required: false>>",
  "source": "<<type: string, required: false>>",
  "surface area": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Homepage Exit Modal Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Homepage Exit Modal Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Hosting Transferred

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **clientBilling** | `boolean` | No description | ❌ |
| **customDomains** | `boolean` | No description | ❌ |
| **defaultDomain** | `boolean` | No description | ❌ |
| **from** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **sslHosting** | `boolean` | No description | ❌ |
| **to** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Hosting Transferred", {
  "clientBilling": "<<type: boolean, required: false>>",
  "customDomains": "<<type: boolean, required: false>>",
  "defaultDomain": "<<type: boolean, required: false>>",
  "from": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "sslHosting": "<<type: boolean, required: false>>",
  "to": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## In-App Message CTA Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **cta** | `string` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **location** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("In-App Message CTA Clicked", {
  "action": "<<type: string, required: false>>",
  "cta": "<<type: string, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "location": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## In-App Message Dismissed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **__cpLocation** | `string` | No description | ❌ |
| **action** | `string` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **location** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("In-App Message Dismissed", {
  "__cpLocation": "<<type: string, required: false>>",
  "action": "<<type: string, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "location": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## In-App Message Expired

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **__cpLocation** | `string` | No description | ❌ |
| **action** | `string` | No description | ❌ |
| **expiresAt** | `unknown` | No description | ❌ |
| **location** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("In-App Message Expired", {
  "__cpLocation": "<<type: string, required: false>>",
  "action": "<<type: string, required: false>>",
  "expiresAt": "<<type: unknown, required: false>>",
  "location": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## In-App Message Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **ids** | `array` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **location** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("In-App Message Viewed", {
  "action": "<<type: string, required: false>>",
  "ids": "<<type: array, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "location": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Intent Detected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **currentIntent** | `string` | No description | ❌ |
| **intent** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Intent Detected", {
  "currentIntent": "<<type: string, required: false>>",
  "intent": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Inventory Sync CSV Requested

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **inv_sync_enabled** | `boolean` | No description | ❌ |
| **inv_sync_platform** | `string` | No description | ❌ |
| **inv_sync_products_total** | `integer` | No description | ❌ |
| **inv_sync_variants_total** | `integer` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Inventory Sync CSV Requested", {
  "inv_sync_enabled": "<<type: boolean, required: false>>",
  "inv_sync_platform": "<<type: string, required: false>>",
  "inv_sync_products_total": "<<type: integer, required: false>>",
  "inv_sync_variants_total": "<<type: integer, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Invoice Charge Failed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **attempt** | `integer` | No description | ❌ |
| **card type** | `string` | No description | ❌ |
| **item** | `string` | No description | ❌ |
| **item slug** | `unknown` | No description | ❌ |
| **last 4 digits** | `string` | No description | ❌ |
| **message** | `string` | No description | ❌ |
| **owner kind** | `string` | No description | ❌ |
| **plan name** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Invoice Charge Failed", {
  "attempt": "<<type: integer, required: false>>",
  "card type": "<<type: string, required: false>>",
  "item": "<<type: string, required: false>>",
  "item slug": "<<type: unknown, required: false>>",
  "last 4 digits": "<<type: string, required: false>>",
  "message": "<<type: string, required: false>>",
  "owner kind": "<<type: string, required: false>>",
  "plan name": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Invoice Payment Succeeded

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **billingEmail** | `string` | No description | ❌ |
| **billingLink** | `string` | No description | ❌ |
| **chargeDate** | `string` | No description | ❌ |
| **currency** | `string` | No description | ❌ |
| **description** | `string` | No description | ❌ |
| **email** | `string` | No description | ❌ |
| **firstName** | `string` | No description | ❌ |
| **invoiceId** | `string` | No description | ❌ |
| **invoicePDF** | `string` | No description | ❌ |
| **lastName** | `string` | No description | ❌ |
| **ownerKind** | `string` | No description | ❌ |
| **ownerSlug** | `string` | No description | ❌ |
| **plan** | `string` | No description | ❌ |
| **planFrequency** | `string` | No description | ❌ |
| **planType** | `string` | No description | ❌ |
| **projectName** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **subTotal** | `integer` | No description | ❌ |
| **tax** | `integer` | No description | ❌ |
| **total** | `integer` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Invoice Payment Succeeded", {
  "billingEmail": "<<type: string, required: false>>",
  "billingLink": "<<type: string, required: false>>",
  "chargeDate": "<<type: string, required: false>>",
  "currency": "<<type: string, required: false>>",
  "description": "<<type: string, required: false>>",
  "email": "<<type: string, required: false>>",
  "firstName": "<<type: string, required: false>>",
  "invoiceId": "<<type: string, required: false>>",
  "invoicePDF": "<<type: string, required: false>>",
  "lastName": "<<type: string, required: false>>",
  "ownerKind": "<<type: string, required: false>>",
  "ownerSlug": "<<type: string, required: false>>",
  "plan": "<<type: string, required: false>>",
  "planFrequency": "<<type: string, required: false>>",
  "planType": "<<type: string, required: false>>",
  "projectName": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "subTotal": "<<type: integer, required: false>>",
  "tax": "<<type: integer, required: false>>",
  "total": "<<type: integer, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Landing Page Feature Card Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **link** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Landing Page Feature Card Clicked", {
  "link": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Library Installed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **install_source** | `string` | No description | ❌ |
| **library id** | `string` | No description | ❌ |
| **library name** | `string` | No description | ❌ |
| **library version** | `string` | No description | ❌ |
| **site id** | `array` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Library Installed", {
  "install_source": "<<type: string, required: false>>",
  "library id": "<<type: string, required: false>>",
  "library name": "<<type: string, required: false>>",
  "library version": "<<type: string, required: false>>",
  "site id": "<<type: array, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Login clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **location** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Login clicked", {
  "location": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Login to get support clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **location** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Login to get support clicked", {
  "location": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Login to submit a ticket clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **location** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Login to submit a ticket clicked", {
  "location": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace App Authorized to Site

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **app client id** | `string` | No description | ❌ |
| **app id** | `string` | No description | ❌ |
| **app name** | `string` | No description | ❌ |
| **id** | `string` | No description | ❌ |
| **install count** | `integer` | No description | ❌ |
| **installation location** | `string` | No description | ❌ |
| **mrp name** | `string` | No description | ❌ |
| **mrp slug** | `string` | No description | ❌ |
| **name** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **version** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace App Authorized to Site", {
  "app client id": "<<type: string, required: false>>",
  "app id": "<<type: string, required: false>>",
  "app name": "<<type: string, required: false>>",
  "id": "<<type: string, required: false>>",
  "install count": "<<type: integer, required: false>>",
  "installation location": "<<type: string, required: false>>",
  "mrp name": "<<type: string, required: false>>",
  "mrp slug": "<<type: string, required: false>>",
  "name": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "version": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace App Plan Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **app client id** | `string` | No description | ❌ |
| **app name** | `string` | No description | ❌ |
| **id** | `string` | No description | ❌ |
| **mrp name** | `string` | No description | ❌ |
| **mrp slug** | `string` | No description | ❌ |
| **name** | `string` | No description | ❌ |
| **plan** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace App Plan Selected", {
  "app client id": "<<type: string, required: false>>",
  "app name": "<<type: string, required: false>>",
  "id": "<<type: string, required: false>>",
  "mrp name": "<<type: string, required: false>>",
  "mrp slug": "<<type: string, required: false>>",
  "name": "<<type: string, required: false>>",
  "plan": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace CTA Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **CTA** | `string` | No description | ❌ |
| **active tutorials** | `string` | No description | ❌ |
| **button action and type** | `string` | No description | ❌ |
| **cms item count** | `integer` | No description | ❌ |
| **cta** | `string` | No description | ❌ |
| **ecommerce enabled** | `boolean` | No description | ❌ |
| **ecommerce item count** | `integer` | No description | ❌ |
| **link** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **mode** | `string` | No description | ❌ |
| **name** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **page count** | `integer` | No description | ❌ |
| **page id** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **position on page** | `string` | No description | ❌ |
| **project item count** | `integer` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site published** | `boolean` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **styles count** | `integer` | No description | ❌ |
| **total collection count** | `integer` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace CTA Clicked", {
  "CTA": "<<type: string, required: false>>",
  "active tutorials": "<<type: string, required: false>>",
  "button action and type": "<<type: string, required: false>>",
  "cms item count": "<<type: integer, required: false>>",
  "cta": "<<type: string, required: false>>",
  "ecommerce enabled": "<<type: boolean, required: false>>",
  "ecommerce item count": "<<type: integer, required: false>>",
  "link": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "mode": "<<type: string, required: false>>",
  "name": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "page count": "<<type: integer, required: false>>",
  "page id": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "position on page": "<<type: string, required: false>>",
  "project item count": "<<type: integer, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site published": "<<type: boolean, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "styles count": "<<type: integer, required: false>>",
  "total collection count": "<<type: integer, required: false>>",
  "type": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Category Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **category** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Category Clicked", {
  "category": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Checkout Created

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **marketplace order id** | `string` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Checkout Created", {
  "marketplace order id": "<<type: string, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Checkout Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **can manage workspace billing** | `boolean` | No description | ❌ |
| **is site limit reached** | `boolean` | No description | ❌ |
| **marketplace product id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Checkout Page Viewed", {
  "can manage workspace billing": "<<type: boolean, required: false>>",
  "is site limit reached": "<<type: boolean, required: false>>",
  "marketplace product id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Checkout Redirect Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **resource id** | `string` | No description | ❌ |
| **resource type** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **surface area** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Checkout Redirect Page Viewed", {
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "resource id": "<<type: string, required: false>>",
  "resource type": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "surface area": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Checkout Redirected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **redirected to** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **resource id** | `string` | No description | ❌ |
| **resource type** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **surface area** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Checkout Redirected", {
  "page": "<<type: string, required: false>>",
  "redirected to": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "resource id": "<<type: string, required: false>>",
  "resource type": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "surface area": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Create Profile Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **profileType** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Create Profile Page Viewed", {
  "profileType": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Filters Changed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **category** | `string` | No description | ❌ |
| **tags** | `array,null` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Filters Changed", {
  "category": "<<type: string, required: false>>",
  "tags": "<<type: array,null, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Hub Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **payment provider** | `string` | No description | ❌ |
| **payout methods** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **surface area** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Hub Page Viewed", {
  "page": "<<type: string, required: false>>",
  "payment provider": "<<type: string, required: false>>",
  "payout methods": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "surface area": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Order Created

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **seller workspace id** | `string` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Order Created", {
  "seller workspace id": "<<type: string, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Order Transitioned

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **marketplace order** | `string` | No description | ❌ |
| **new status** | `string` | No description | ❌ |
| **old status** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Order Transitioned", {
  "marketplace order": "<<type: string, required: false>>",
  "new status": "<<type: string, required: false>>",
  "old status": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Payout Method Created

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **country** | `string` | No description | ❌ |
| **payment provider** | `string` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Payout Method Created", {
  "country": "<<type: string, required: false>>",
  "payment provider": "<<type: string, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Payout Method Login Link Created

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **payment provider** | `string` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Payout Method Login Link Created", {
  "payment provider": "<<type: string, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **app client id** | `string` | No description | ❌ |
| **app id** | `string` | No description | ❌ |
| **app name** | `string` | No description | ❌ |
| **category** | `string` | No description | ❌ |
| **id** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **mrp id** | `string` | No description | ❌ |
| **mrp name** | `string` | No description | ❌ |
| **mrp slug** | `string` | No description | ❌ |
| **name** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **search query** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Viewed", {
  "app client id": "<<type: string, required: false>>",
  "app id": "<<type: string, required: false>>",
  "app name": "<<type: string, required: false>>",
  "category": "<<type: string, required: false>>",
  "id": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "mrp id": "<<type: string, required: false>>",
  "mrp name": "<<type: string, required: false>>",
  "mrp slug": "<<type: string, required: false>>",
  "name": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "ref": "<<type: string, required: false>>",
  "search query": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Matchmaking Experts Survey Abandoned

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **projectUID** | `string` | No description | ❌ |
| **reason** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **searchParams** | `string` | No description | ❌ |
| **submissionState** | `integer` | No description | ❌ |
| **values** | `object` | No description | ❌ |
| **values.anythingElse** | `unknown` | No description | ❌ |
| **values.budget** | `unknown` | No description | ❌ |
| **values.companyMeta** | `object` | No description | ❌ |
| **values.companyMeta.company-industry** | `string` | No description | ❌ |
| **values.companyMeta.company-name** | `string` | No description | ❌ |
| **values.companyMeta.company-role** | `string` | No description | ❌ |
| **values.companyMeta.company-size** | `string` | No description | ❌ |
| **values.country** | `string` | No description | ❌ |
| **values.custom-budget-amount** | `string` | No description | ❌ |
| **values.existing-link** | `string` | No description | ❌ |
| **values.kindOfSite** | `unknown` | No description | ❌ |
| **values.language** | `unknown` | No description | ❌ |
| **values.locationPreference** | `unknown` | No description | ❌ |
| **values.migrating-link** | `string` | No description | ❌ |
| **values.ownerOfSite** | `unknown` | No description | ❌ |
| **values.projectFinishedBy** | `unknown` | No description | ❌ |
| **values.services** | `array` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Matchmaking Experts Survey Abandoned", {
  "projectUID": "<<type: string, required: false>>",
  "reason": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "searchParams": "<<type: string, required: false>>",
  "submissionState": "<<type: integer, required: false>>",
  "values": {
    "anythingElse": "<<type: unknown, required: false>>",
    "budget": "<<type: unknown, required: false>>",
    "companyMeta": {
      "company-industry": "<<type: string, required: false>>",
      "company-name": "<<type: string, required: false>>",
      "company-role": "<<type: string, required: false>>",
      "company-size": "<<type: string, required: false>>"
    },
    "country": "<<type: string, required: false>>",
    "custom-budget-amount": "<<type: string, required: false>>",
    "existing-link": "<<type: string, required: false>>",
    "kindOfSite": "<<type: unknown, required: false>>",
    "language": "<<type: unknown, required: false>>",
    "locationPreference": "<<type: unknown, required: false>>",
    "migrating-link": "<<type: string, required: false>>",
    "ownerOfSite": "<<type: unknown, required: false>>",
    "projectFinishedBy": "<<type: unknown, required: false>>",
    "services": "<<type: array, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Matchmaking Experts Survey Completed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **values** | `object` | No description | ❌ |
| **values.anythingElse** | `string` | No description | ❌ |
| **values.budget** | `string` | No description | ❌ |
| **values.companyMeta** | `object` | No description | ❌ |
| **values.companyMeta.company-industry** | `string` | No description | ❌ |
| **values.companyMeta.company-name** | `string` | No description | ❌ |
| **values.companyMeta.company-role** | `string` | No description | ❌ |
| **values.companyMeta.company-size** | `string` | No description | ❌ |
| **values.country** | `string` | No description | ❌ |
| **values.custom-budget-amount** | `string` | No description | ❌ |
| **values.existing-link** | `string` | No description | ❌ |
| **values.kindOfSite** | `string` | No description | ❌ |
| **values.language** | `string` | No description | ❌ |
| **values.locationPreference** | `string` | No description | ❌ |
| **values.migrating-link** | `string` | No description | ❌ |
| **values.ownerOfSite** | `string` | No description | ❌ |
| **values.projectFinishedBy** | `string` | No description | ❌ |
| **values.projectUID** | `string` | No description | ❌ |
| **values.services** | `array` | No description | ❌ |
| **values.urlParams** | `object` | No description | ❌ |
| **values.urlParams.email** | `string` | No description | ❌ |
| **values.urlParams.firstName** | `string` | No description | ❌ |
| **values.urlParams.lastName** | `string` | No description | ❌ |
| **values.urlParams.ref** | `string` | No description | ❌ |
| **values.urlParams.role** | `string` | No description | ❌ |
| **values.urlParams.variant** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Matchmaking Experts Survey Completed", {
  "ref": "<<type: string, required: false>>",
  "values": {
    "anythingElse": "<<type: string, required: false>>",
    "budget": "<<type: string, required: false>>",
    "companyMeta": {
      "company-industry": "<<type: string, required: false>>",
      "company-name": "<<type: string, required: false>>",
      "company-role": "<<type: string, required: false>>",
      "company-size": "<<type: string, required: false>>"
    },
    "country": "<<type: string, required: false>>",
    "custom-budget-amount": "<<type: string, required: false>>",
    "existing-link": "<<type: string, required: false>>",
    "kindOfSite": "<<type: string, required: false>>",
    "language": "<<type: string, required: false>>",
    "locationPreference": "<<type: string, required: false>>",
    "migrating-link": "<<type: string, required: false>>",
    "ownerOfSite": "<<type: string, required: false>>",
    "projectFinishedBy": "<<type: string, required: false>>",
    "projectUID": "<<type: string, required: false>>",
    "services": "<<type: array, required: false>>",
    "urlParams": {
      "email": "<<type: string, required: false>>",
      "firstName": "<<type: string, required: false>>",
      "lastName": "<<type: string, required: false>>",
      "ref": "<<type: string, required: false>>",
      "role": "<<type: string, required: false>>",
      "variant": "<<type: string, required: false>>"
    }
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Matchmaking Experts Survey Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **projectUID** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Matchmaking Experts Survey Page Viewed", {
  "projectUID": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Matchmaking Experts Survey Resumed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **projectUID** | `string` | No description | ❌ |
| **reason** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **searchParams** | `string` | No description | ❌ |
| **submissionState** | `integer` | No description | ❌ |
| **values** | `object` | No description | ❌ |
| **values.anythingElse** | `unknown` | No description | ❌ |
| **values.budget** | `unknown` | No description | ❌ |
| **values.companyMeta** | `object` | No description | ❌ |
| **values.companyMeta.company-industry** | `string` | No description | ❌ |
| **values.companyMeta.company-name** | `string` | No description | ❌ |
| **values.companyMeta.company-role** | `string` | No description | ❌ |
| **values.companyMeta.company-size** | `string` | No description | ❌ |
| **values.country** | `string` | No description | ❌ |
| **values.custom-budget-amount** | `string` | No description | ❌ |
| **values.existing-link** | `string` | No description | ❌ |
| **values.kindOfSite** | `unknown` | No description | ❌ |
| **values.language** | `unknown` | No description | ❌ |
| **values.locationPreference** | `unknown` | No description | ❌ |
| **values.migrating-link** | `string` | No description | ❌ |
| **values.ownerOfSite** | `unknown` | No description | ❌ |
| **values.projectFinishedBy** | `unknown` | No description | ❌ |
| **values.services** | `array` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Matchmaking Experts Survey Resumed", {
  "projectUID": "<<type: string, required: false>>",
  "reason": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "searchParams": "<<type: string, required: false>>",
  "submissionState": "<<type: integer, required: false>>",
  "values": {
    "anythingElse": "<<type: unknown, required: false>>",
    "budget": "<<type: unknown, required: false>>",
    "companyMeta": {
      "company-industry": "<<type: string, required: false>>",
      "company-name": "<<type: string, required: false>>",
      "company-role": "<<type: string, required: false>>",
      "company-size": "<<type: string, required: false>>"
    },
    "country": "<<type: string, required: false>>",
    "custom-budget-amount": "<<type: string, required: false>>",
    "existing-link": "<<type: string, required: false>>",
    "kindOfSite": "<<type: unknown, required: false>>",
    "language": "<<type: unknown, required: false>>",
    "locationPreference": "<<type: unknown, required: false>>",
    "migrating-link": "<<type: string, required: false>>",
    "ownerOfSite": "<<type: unknown, required: false>>",
    "projectFinishedBy": "<<type: unknown, required: false>>",
    "services": "<<type: array, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Matchmaking Experts Survey Step Submitted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **cta** | `string` | No description | ❌ |
| **currentPage** | `string` | No description | ❌ |
| **destinationPage** | `string` | No description | ❌ |
| **options selected** | `object` | No description | ❌ |
| **options selected.company-industry** | `string` | No description | ❌ |
| **options selected.company-name** | `string` | No description | ❌ |
| **options selected.company-role** | `string` | No description | ❌ |
| **options selected.company-size** | `string` | No description | ❌ |
| **options selected.label** | `string` | No description | ❌ |
| **options selected.value** | `string` | No description | ❌ |
| **projectUID** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Matchmaking Experts Survey Step Submitted", {
  "cta": "<<type: string, required: false>>",
  "currentPage": "<<type: string, required: false>>",
  "destinationPage": "<<type: string, required: false>>",
  "options selected": {
    "company-industry": "<<type: string, required: false>>",
    "company-name": "<<type: string, required: false>>",
    "company-role": "<<type: string, required: false>>",
    "company-size": "<<type: string, required: false>>",
    "label": "<<type: string, required: false>>",
    "value": "<<type: string, required: false>>"
  },
  "projectUID": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Matchmaking Note CTA Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **cta** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **variant** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Matchmaking Note CTA Clicked", {
  "cta": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "variant": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Matchmaking Note Dismissed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **active tutorials** | `string` | No description | ❌ |
| **cms item count** | `integer` | No description | ❌ |
| **ecommerce enabled** | `boolean` | No description | ❌ |
| **ecommerce item count** | `integer` | No description | ❌ |
| **mode** | `string` | No description | ❌ |
| **page count** | `integer` | No description | ❌ |
| **page id** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **project item count** | `integer` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site published** | `boolean` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **styles count** | `integer` | No description | ❌ |
| **total collection count** | `integer` | No description | ❌ |
| **variant** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Matchmaking Note Dismissed", {
  "active tutorials": "<<type: string, required: false>>",
  "cms item count": "<<type: integer, required: false>>",
  "ecommerce enabled": "<<type: boolean, required: false>>",
  "ecommerce item count": "<<type: integer, required: false>>",
  "mode": "<<type: string, required: false>>",
  "page count": "<<type: integer, required: false>>",
  "page id": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "project item count": "<<type: integer, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site published": "<<type: boolean, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "styles count": "<<type: integer, required: false>>",
  "total collection count": "<<type: integer, required: false>>",
  "variant": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Matchmaking Note Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **variant** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Matchmaking Note Viewed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "variant": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Member Subscription Canceled

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **billing period** | `string` | No description | ❌ |
| **price** | `string` | No description | ❌ |
| **product type** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Member Subscription Canceled", {
  "billing period": "<<type: string, required: false>>",
  "price": "<<type: string, required: false>>",
  "product type": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Member Subscription Created

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **billing period** | `string` | No description | ❌ |
| **price** | `string` | No description | ❌ |
| **product type** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Member Subscription Created", {
  "billing period": "<<type: string, required: false>>",
  "price": "<<type: string, required: false>>",
  "product type": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Mobile Onboarding Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `unknown` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Mobile Onboarding Page Viewed", {
  "site id": "<<type: unknown, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Navbar Dropdown Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **name** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Navbar Dropdown Clicked", {
  "name": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## New Project Page Back

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("New Project Page Back", {
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## New Project Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **libraries shown** | `array` | No description | ❌ |
| **recommended cloneables shown** | `array` | No description | ❌ |
| **recommended templates shown** | `array` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("New Project Page Viewed", {
  "libraries shown": "<<type: array, required: false>>",
  "recommended cloneables shown": "<<type: array, required: false>>",
  "recommended templates shown": "<<type: array, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Onboarding Tutorial Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Onboarding Tutorial Selected", {
  "ref": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Open Account Info

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Open Account Info", {
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Open Update Email Page

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `unknown` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Open Update Email Page", {
  "site id": "<<type: unknown, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Order Completed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Order Completed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Partner Hub Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **referer** | `string` | No description | ❌ |
| **userId** | `string` | No description | ❌ |
| **workspaceId** | `string` | No description | ❌ |
| **workspaceRole** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Partner Hub Page Viewed", {
  "page": "<<type: string, required: false>>",
  "referer": "<<type: string, required: false>>",
  "userId": "<<type: string, required: false>>",
  "workspaceId": "<<type: string, required: false>>",
  "workspaceRole": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Password Reset Failed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **error msg** | `object` | No description | ❌ |
| **error msg.column** | `integer` | No description | ❌ |
| **error msg.line** | `integer` | No description | ❌ |
| **error msg.sourceURL** | `string` | No description | ❌ |
| **error type** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Password Reset Failed", {
  "error msg": {
    "column": "<<type: integer, required: false>>",
    "line": "<<type: integer, required: false>>",
    "sourceURL": "<<type: string, required: false>>"
  },
  "error type": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Password Reset Instructions Sent

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Password Reset Instructions Sent", {
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Password Reset Success

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Password Reset Success", {
  "page": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Password reset clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **location** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Password reset clicked", {
  "location": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Payment Failed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **Charged Amount (dollars)** | `integer` | No description | ❌ |
| **Desired Plan Level** | `string` | No description | ❌ |
| **Desired Plan Period** | `string` | No description | ❌ |
| **Desired Plan Seats** | `integer` | No description | ❌ |
| **Plan Type** | `string` | No description | ❌ |
| **Promo Used** | `boolean` | No description | ❌ |
| **add-on initial quantity** | `integer` | No description | ❌ |
| **add-on new quantity** | `integer` | No description | ❌ |
| **charged amount** | `integer` | No description | ❌ |
| **currency of new plan** | `string` | No description | ❌ |
| **initial number of seats** | `integer` | No description | ❌ |
| **initial plan frequency** | `unknown` | No description | ❌ |
| **initial plan level** | `string` | No description | ❌ |
| **legacy new number of seats** | `integer` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **new plan frequency** | `string` | No description | ❌ |
| **new plan level** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **promotion applied** | `boolean` | No description | ❌ |
| **promotion type** | `string` | No description | ❌ |
| **promotion value** | `integer` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **selected plan** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **stripe subscription id** | `string` | No description | ❌ |
| **team id** | `string` | No description | ❌ |
| **value of new plan** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace initial number of seats** | `integer` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace new number of seats** | `integer` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Payment Failed", {
  "Charged Amount (dollars)": "<<type: integer, required: false>>",
  "Desired Plan Level": "<<type: string, required: false>>",
  "Desired Plan Period": "<<type: string, required: false>>",
  "Desired Plan Seats": "<<type: integer, required: false>>",
  "Plan Type": "<<type: string, required: false>>",
  "Promo Used": "<<type: boolean, required: false>>",
  "add-on initial quantity": "<<type: integer, required: false>>",
  "add-on new quantity": "<<type: integer, required: false>>",
  "charged amount": "<<type: integer, required: false>>",
  "currency of new plan": "<<type: string, required: false>>",
  "initial number of seats": "<<type: integer, required: false>>",
  "initial plan frequency": "<<type: unknown, required: false>>",
  "initial plan level": "<<type: string, required: false>>",
  "legacy new number of seats": "<<type: integer, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "new plan frequency": "<<type: string, required: false>>",
  "new plan level": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "promotion applied": "<<type: boolean, required: false>>",
  "promotion type": "<<type: string, required: false>>",
  "promotion value": "<<type: integer, required: false>>",
  "ref": "<<type: string, required: false>>",
  "selected plan": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "stripe subscription id": "<<type: string, required: false>>",
  "team id": "<<type: string, required: false>>",
  "value of new plan": "<<type: integer, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace initial number of seats": "<<type: integer, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace new number of seats": "<<type: integer, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Payment Success

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **Charged Amount (dollars)** | `integer` | No description | ❌ |
| **Desired Plan Level** | `string` | No description | ❌ |
| **Desired Plan Period** | `string` | No description | ❌ |
| **Desired Plan Seats** | `integer` | No description | ❌ |
| **Plan Type** | `string` | No description | ❌ |
| **Promo Used** | `boolean` | No description | ❌ |
| **add-on initial quantity** | `integer` | No description | ❌ |
| **add-on new quantity** | `integer` | No description | ❌ |
| **charged amount** | `integer` | No description | ❌ |
| **currency of new plan** | `string` | No description | ❌ |
| **initial number of seats** | `integer` | No description | ❌ |
| **initial plan frequency** | `unknown` | No description | ❌ |
| **initial plan level** | `string` | No description | ❌ |
| **legacy new number of seats** | `integer` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **new plan frequency** | `string` | No description | ❌ |
| **new plan level** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **promotion applied** | `boolean` | No description | ❌ |
| **promotion type** | `string` | No description | ❌ |
| **promotion value** | `integer` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **selected plan** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **stripe subscription id** | `string` | No description | ❌ |
| **team id** | `string` | No description | ❌ |
| **value of new plan** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace initial number of seats** | `integer` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace new number of seats** | `integer` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Payment Success", {
  "Charged Amount (dollars)": "<<type: integer, required: false>>",
  "Desired Plan Level": "<<type: string, required: false>>",
  "Desired Plan Period": "<<type: string, required: false>>",
  "Desired Plan Seats": "<<type: integer, required: false>>",
  "Plan Type": "<<type: string, required: false>>",
  "Promo Used": "<<type: boolean, required: false>>",
  "add-on initial quantity": "<<type: integer, required: false>>",
  "add-on new quantity": "<<type: integer, required: false>>",
  "charged amount": "<<type: integer, required: false>>",
  "currency of new plan": "<<type: string, required: false>>",
  "initial number of seats": "<<type: integer, required: false>>",
  "initial plan frequency": "<<type: unknown, required: false>>",
  "initial plan level": "<<type: string, required: false>>",
  "legacy new number of seats": "<<type: integer, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "new plan frequency": "<<type: string, required: false>>",
  "new plan level": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "promotion applied": "<<type: boolean, required: false>>",
  "promotion type": "<<type: string, required: false>>",
  "promotion value": "<<type: integer, required: false>>",
  "ref": "<<type: string, required: false>>",
  "selected plan": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "stripe subscription id": "<<type: string, required: false>>",
  "team id": "<<type: string, required: false>>",
  "value of new plan": "<<type: integer, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace initial number of seats": "<<type: integer, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace new number of seats": "<<type: integer, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Paywall Encountered

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **paywall plan type** | `string` | No description | ❌ |
| **paywall trigger type** | `string` | No description | ❌ |
| **paywall type** | `string` | No description | ❌ |
| **paywallPlanType** | `string` | No description | ❌ |
| **paywallTriggerType** | `string` | No description | ❌ |
| **paywallType** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **team id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Paywall Encountered", {
  "legacy team id": "<<type: string, required: false>>",
  "paywall plan type": "<<type: string, required: false>>",
  "paywall trigger type": "<<type: string, required: false>>",
  "paywall type": "<<type: string, required: false>>",
  "paywallPlanType": "<<type: string, required: false>>",
  "paywallTriggerType": "<<type: string, required: false>>",
  "paywallType": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "team id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Confusion Modal Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **value** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plan Confusion Modal Clicked", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "value": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Confusion Modal Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plan Confusion Modal Viewed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Modified

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **add-on initial quantity** | `integer` | No description | ❌ |
| **add-on new quantity** | `integer` | No description | ❌ |
| **charged amount** | `integer` | No description | ❌ |
| **comment** | `string` | No description | ❌ |
| **comments** | `string` | No description | ❌ |
| **cost of new plan** | `integer` | No description | ❌ |
| **currency of new plan** | `string` | No description | ❌ |
| **initial number of seats** | `integer` | No description | ❌ |
| **initial plan frequency** | `string` | No description | ❌ |
| **initial plan level** | `string` | No description | ❌ |
| **legacy initial number of seats** | `integer` | No description | ❌ |
| **legacy new number of seats** | `integer` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **new number of seats** | `integer` | No description | ❌ |
| **new plan frequency** | `unknown` | No description | ❌ |
| **new plan level** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **promotion applied** | `unknown` | No description | ❌ |
| **promotion code** | `unknown` | No description | ❌ |
| **promotion type** | `unknown` | No description | ❌ |
| **promotion value** | `unknown` | No description | ❌ |
| **reason** | `array` | No description | ❌ |
| **reason cancel Site plan** | `string` | No description | ❌ |
| **reason cancel Workspace plan** | `string` | No description | ❌ |
| **reason difficult to use** | `array` | No description | ❌ |
| **reason improvement areas** | `array` | No description | ❌ |
| **reason missing features** | `array` | No description | ❌ |
| **reason project canceled** | `string` | No description | ❌ |
| **reason switch to competitor** | `string` | No description | ❌ |
| **reason transferring site** | `string` | No description | ❌ |
| **reason unnecessary features** | `array` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **stripe subscription id** | `unknown` | No description | ❌ |
| **switch to competitor** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **transferring site** | `string` | No description | ❌ |
| **value of new plan** | `integer` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace initial number of seats** | `integer` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace new number of seats** | `integer` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plan Modified", {
  "add-on initial quantity": "<<type: integer, required: false>>",
  "add-on new quantity": "<<type: integer, required: false>>",
  "charged amount": "<<type: integer, required: false>>",
  "comment": "<<type: string, required: false>>",
  "comments": "<<type: string, required: false>>",
  "cost of new plan": "<<type: integer, required: false>>",
  "currency of new plan": "<<type: string, required: false>>",
  "initial number of seats": "<<type: integer, required: false>>",
  "initial plan frequency": "<<type: string, required: false>>",
  "initial plan level": "<<type: string, required: false>>",
  "legacy initial number of seats": "<<type: integer, required: false>>",
  "legacy new number of seats": "<<type: integer, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "new number of seats": "<<type: integer, required: false>>",
  "new plan frequency": "<<type: unknown, required: false>>",
  "new plan level": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "promotion applied": "<<type: unknown, required: false>>",
  "promotion code": "<<type: unknown, required: false>>",
  "promotion type": "<<type: unknown, required: false>>",
  "promotion value": "<<type: unknown, required: false>>",
  "reason": "<<type: array, required: false>>",
  "reason cancel Site plan": "<<type: string, required: false>>",
  "reason cancel Workspace plan": "<<type: string, required: false>>",
  "reason difficult to use": "<<type: array, required: false>>",
  "reason improvement areas": "<<type: array, required: false>>",
  "reason missing features": "<<type: array, required: false>>",
  "reason project canceled": "<<type: string, required: false>>",
  "reason switch to competitor": "<<type: string, required: false>>",
  "reason transferring site": "<<type: string, required: false>>",
  "reason unnecessary features": "<<type: array, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "stripe subscription id": "<<type: unknown, required: false>>",
  "switch to competitor": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "transferring site": "<<type: string, required: false>>",
  "value of new plan": "<<type: integer, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace initial number of seats": "<<type: integer, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace new number of seats": "<<type: integer, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Object Tab Pressed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **plan type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **tab** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plan Object Tab Pressed", {
  "plan type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "tab": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Recommendation

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **banner version** | `string` | No description | ❌ |
| **initial plan level** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **recommended plan level** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plan Recommendation", {
  "banner version": "<<type: string, required: false>>",
  "initial plan level": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "recommended plan level": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Recommendation Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **banner version** | `string` | No description | ❌ |
| **initial plan level** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **recommended plan level** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plan Recommendation Clicked", {
  "banner version": "<<type: string, required: false>>",
  "initial plan level": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "recommended plan level": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Recommendation Dismissed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **banner version** | `string` | No description | ❌ |
| **initial plan level** | `unknown` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **recommended plan level** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plan Recommendation Dismissed", {
  "banner version": "<<type: string, required: false>>",
  "initial plan level": "<<type: unknown, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "recommended plan level": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Seats Updated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **plan type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace new number of seats** | `integer` | No description | ❌ |
| **workspace old number of seats** | `integer` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plan Seats Updated", {
  "plan type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace new number of seats": "<<type: integer, required: false>>",
  "workspace old number of seats": "<<type: integer, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Upgraded by Business

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **city** | `string` | No description | ❌ |
| **country** | `string` | No description | ❌ |
| **email** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **transactionId** | `string` | No description | ❌ |
| **userAgent** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plan Upgraded by Business", {
  "city": "<<type: string, required: false>>",
  "country": "<<type: string, required: false>>",
  "email": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "transactionId": "<<type: string, required: false>>",
  "userAgent": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Upgraded by Company

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **city** | `string` | No description | ❌ |
| **country** | `string` | No description | ❌ |
| **email** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **transactionId** | `unknown` | No description | ❌ |
| **userAgent** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plan Upgraded by Company", {
  "city": "<<type: string, required: false>>",
  "country": "<<type: string, required: false>>",
  "email": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "transactionId": "<<type: unknown, required: false>>",
  "userAgent": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Upgraded by SP

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **city** | `string` | No description | ❌ |
| **country** | `string` | No description | ❌ |
| **email** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **transactionId** | `string` | No description | ❌ |
| **userAgent** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plan Upgraded by SP", {
  "city": "<<type: string, required: false>>",
  "country": "<<type: string, required: false>>",
  "email": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "transactionId": "<<type: string, required: false>>",
  "userAgent": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Upgraded by Self

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **city** | `string` | No description | ❌ |
| **country** | `string` | No description | ❌ |
| **email** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **transactionId** | `string` | No description | ❌ |
| **userAgent** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plan Upgraded by Self", {
  "city": "<<type: string, required: false>>",
  "country": "<<type: string, required: false>>",
  "email": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "transactionId": "<<type: string, required: false>>",
  "userAgent": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Upgraded from Free

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **city** | `string` | No description | ❌ |
| **country** | `string` | No description | ❌ |
| **email** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **transactionId** | `string` | No description | ❌ |
| **userAgent** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plan Upgraded from Free", {
  "city": "<<type: string, required: false>>",
  "country": "<<type: string, required: false>>",
  "email": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "transactionId": "<<type: string, required: false>>",
  "userAgent": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plans Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **plan type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **tab** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Plans Page Viewed", {
  "plan type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "tab": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Pricing CTA Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **cta action** | `string` | No description | ❌ |
| **entitlement id** | `string` | No description | ❌ |
| **entitlement scope** | `array` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **surface area** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Pricing CTA Clicked", {
  "cta action": "<<type: string, required: false>>",
  "entitlement id": "<<type: string, required: false>>",
  "entitlement scope": "<<type: array, required: false>>",
  "page": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "surface area": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Profile Edit Modal Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **profileId** | `string` | No description | ❌ |
| **profileName** | `string` | No description | ❌ |
| **profileSlug** | `string` | No description | ❌ |
| **tabName** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Profile Edit Modal Viewed", {
  "profileId": "<<type: string, required: false>>",
  "profileName": "<<type: string, required: false>>",
  "profileSlug": "<<type: string, required: false>>",
  "tabName": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Profile Edited

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **editedFields** | `array` | No description | ❌ |
| **profileId** | `string` | No description | ❌ |
| **profileName** | `string` | No description | ❌ |
| **profileSlug** | `string` | No description | ❌ |
| **tabName** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Profile Edited", {
  "editedFields": "<<type: array, required: false>>",
  "profileId": "<<type: string, required: false>>",
  "profileName": "<<type: string, required: false>>",
  "profileSlug": "<<type: string, required: false>>",
  "tabName": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Profile Settings Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Profile Settings Page Viewed", {
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Project Created

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **category** | `string` | No description | ❌ |
| **create method** | `string` | No description | ❌ |
| **from site** | `string` | No description | ❌ |
| **library cost** | `string` | No description | ❌ |
| **library id** | `string` | No description | ❌ |
| **library name** | `string` | No description | ❌ |
| **library selected position** | `unknown` | No description | ❌ |
| **price type** | `string` | No description | ❌ |
| **ref** | `array` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **site_id** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **team** | `array` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **template cost** | `string` | No description | ❌ |
| **template id** | `string` | No description | ❌ |
| **template name** | `string` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **tutorial** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `unknown` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `unknown` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `unknown` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Project Created", {
  "action": "<<type: string, required: false>>",
  "category": "<<type: string, required: false>>",
  "create method": "<<type: string, required: false>>",
  "from site": "<<type: string, required: false>>",
  "library cost": "<<type: string, required: false>>",
  "library id": "<<type: string, required: false>>",
  "library name": "<<type: string, required: false>>",
  "library selected position": "<<type: unknown, required: false>>",
  "price type": "<<type: string, required: false>>",
  "ref": "<<type: array, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "site_id": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "team": "<<type: array, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "template cost": "<<type: string, required: false>>",
  "template id": "<<type: string, required: false>>",
  "template name": "<<type: string, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "tutorial": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: unknown, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: unknown, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: unknown, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Project Deleted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **admin action** | `boolean` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **team id** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Project Deleted", {
  "admin action": "<<type: boolean, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "team id": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Project Published

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **branch id** | `unknown` | No description | ❌ |
| **designer mode** | `string` | No description | ❌ |
| **location** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **siteId** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **target** | `array` | No description | ❌ |
| **targets** | `array` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **type** | `array` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Project Published", {
  "action": "<<type: string, required: false>>",
  "branch id": "<<type: unknown, required: false>>",
  "designer mode": "<<type: string, required: false>>",
  "location": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "siteId": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "target": "<<type: array, required: false>>",
  "targets": "<<type: array, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "type": "<<type: array, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Project Showcased

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **isSiteCredit** | `boolean` | No description | ❌ |
| **project id** | `string` | No description | ❌ |
| **project image** | `string` | No description | ❌ |
| **project name** | `string` | No description | ❌ |
| **project url** | `string` | No description | ❌ |
| **showcasedToUserProfile** | `boolean` | No description | ❌ |
| **showcasedToWorkspaceProfile** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Project Showcased", {
  "isSiteCredit": "<<type: boolean, required: false>>",
  "project id": "<<type: string, required: false>>",
  "project image": "<<type: string, required: false>>",
  "project name": "<<type: string, required: false>>",
  "project url": "<<type: string, required: false>>",
  "showcasedToUserProfile": "<<type: boolean, required: false>>",
  "showcasedToWorkspaceProfile": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Project Snapshot Restored

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **create method** | `string` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **team id** | `string` | No description | ❌ |
| **template id** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Project Snapshot Restored", {
  "create method": "<<type: string, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "team id": "<<type: string, required: false>>",
  "template id": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Project Transfer Accepted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Project Transfer Accepted", {
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Project Transfer Received

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **template id** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Project Transfer Received", {
  "site id": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "template id": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Project Transferred

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **target id** | `string` | No description | ❌ |
| **target type** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Project Transferred", {
  "site id": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "target id": "<<type: string, required: false>>",
  "target type": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Link Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **link** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Quick Link Clicked", {
  "link": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Recover your account clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **location** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Recover your account clicked", {
  "location": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Remove Default Domain

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Remove Default Domain", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Remove Payment Method Cancelled

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **form context** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Remove Payment Method Cancelled", {
  "form context": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Remove Payment Method Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **form context** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Remove Payment Method Clicked", {
  "form context": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Remove Payment Method Confirmed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **form context** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Remove Payment Method Confirmed", {
  "form context": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Removed Secondary Email

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Removed Secondary Email", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Removed all redirects

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Removed all redirects", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Removed redirect

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Removed redirect", {
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Rename Collection Slug

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **dbId** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Rename Collection Slug", {
  "dbId": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Required Payment Authentication Completed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Required Payment Authentication Completed", {
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Required Payment Authentication Failed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Required Payment Authentication Failed", {
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Required Payment Authentication Started

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Required Payment Authentication Started", {
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## SSO Login Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("SSO Login Page Viewed", {
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Screen Recording added

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Screen Recording added", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Screen Recording deleted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Screen Recording deleted", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Screen Recording viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Screen Recording viewed", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Secondary Email Removal Completed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Secondary Email Removal Completed", {
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Secondary Tutorial Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Secondary Tutorial Selected", {
  "ref": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Segmentation Survey Completed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **become expert interest** | `string` | No description | ❌ |
| **build** | `array` | No description | ❌ |
| **building for** | `string` | No description | ❌ |
| **buildingFor** | `unknown` | No description | ❌ |
| **buildingForList** | `array` | No description | ❌ |
| **business owner** | `boolean` | No description | ❌ |
| **client work** | `array` | No description | ❌ |
| **clientWorkType** | `string` | No description | ❌ |
| **coding experience** | `string` | No description | ❌ |
| **coding level** | `integer` | No description | ❌ |
| **codingExperienceMap** | `string` | No description | ❌ |
| **codingExperienceMapped** | `integer` | No description | ❌ |
| **company size** | `unknown` | No description | ❌ |
| **consent required** | `boolean` | No description | ❌ |
| **design experience level** | `string` | No description | ❌ |
| **email opt-in** | `boolean` | No description | ❌ |
| **existing site issues** | `array` | No description | ❌ |
| **existing site issues: other** | `string` | No description | ❌ |
| **existing site platform** | `string` | No description | ❌ |
| **existing site platform: other** | `string` | No description | ❌ |
| **hire expert interest** | `string` | No description | ❌ |
| **hireExpert** | `unknown` | No description | ❌ |
| **isStudent** | `unknown` | No description | ❌ |
| **number of steps** | `integer` | No description | ❌ |
| **onboarding questionnaire submitted** | `string` | No description | ❌ |
| **onboarding questionnaire version** | `string` | No description | ❌ |
| **persona** | `string` | No description | ❌ |
| **pre-checked email opt-in** | `boolean` | No description | ❌ |
| **primary site creator** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **role** | `string` | No description | ❌ |
| **segmentation category** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **siteBuild** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **submission source** | `string` | No description | ❌ |
| **subscribed to newsletter** | `boolean` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **type of site** | `string` | No description | ❌ |
| **type of site: other** | `string` | No description | ❌ |
| **user has pre-webflow site** | `boolean` | No description | ❌ |
| **userVerified** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workplace** | `unknown` | No description | ❌ |
| **workplaceSize** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Segmentation Survey Completed", {
  "become expert interest": "<<type: string, required: false>>",
  "build": "<<type: array, required: false>>",
  "building for": "<<type: string, required: false>>",
  "buildingFor": "<<type: unknown, required: false>>",
  "buildingForList": "<<type: array, required: false>>",
  "business owner": "<<type: boolean, required: false>>",
  "client work": "<<type: array, required: false>>",
  "clientWorkType": "<<type: string, required: false>>",
  "coding experience": "<<type: string, required: false>>",
  "coding level": "<<type: integer, required: false>>",
  "codingExperienceMap": "<<type: string, required: false>>",
  "codingExperienceMapped": "<<type: integer, required: false>>",
  "company size": "<<type: unknown, required: false>>",
  "consent required": "<<type: boolean, required: false>>",
  "design experience level": "<<type: string, required: false>>",
  "email opt-in": "<<type: boolean, required: false>>",
  "existing site issues": "<<type: array, required: false>>",
  "existing site issues: other": "<<type: string, required: false>>",
  "existing site platform": "<<type: string, required: false>>",
  "existing site platform: other": "<<type: string, required: false>>",
  "hire expert interest": "<<type: string, required: false>>",
  "hireExpert": "<<type: unknown, required: false>>",
  "isStudent": "<<type: unknown, required: false>>",
  "number of steps": "<<type: integer, required: false>>",
  "onboarding questionnaire submitted": "<<type: string, required: false>>",
  "onboarding questionnaire version": "<<type: string, required: false>>",
  "persona": "<<type: string, required: false>>",
  "pre-checked email opt-in": "<<type: boolean, required: false>>",
  "primary site creator": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "role": "<<type: string, required: false>>",
  "segmentation category": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "siteBuild": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "source": "<<type: string, required: false>>",
  "submission source": "<<type: string, required: false>>",
  "subscribed to newsletter": "<<type: boolean, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "type of site": "<<type: string, required: false>>",
  "type of site: other": "<<type: string, required: false>>",
  "user has pre-webflow site": "<<type: boolean, required: false>>",
  "userVerified": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workplace": "<<type: unknown, required: false>>",
  "workplaceSize": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Segmentation Survey Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page type** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **trigger source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Segmentation Survey Page Viewed", {
  "page type": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "ref": "<<type: string, required: false>>",
  "trigger source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Segmentation Survey Step Submitted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **business owner** | `boolean` | No description | ❌ |
| **email opt-in** | `boolean` | No description | ❌ |
| **option order** | `array` | No description | ❌ |
| **options selected** | `array` | No description | ❌ |
| **position of selected option** | `integer` | No description | ❌ |
| **pre-checked email opt-in** | `boolean` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **step name** | `string` | No description | ❌ |
| **step number** | `string` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **trigger source** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Segmentation Survey Step Submitted", {
  "business owner": "<<type: boolean, required: false>>",
  "email opt-in": "<<type: boolean, required: false>>",
  "option order": "<<type: array, required: false>>",
  "options selected": "<<type: array, required: false>>",
  "position of selected option": "<<type: integer, required: false>>",
  "pre-checked email opt-in": "<<type: boolean, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "step name": "<<type: string, required: false>>",
  "step number": "<<type: string, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "trigger source": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Set Default Domain

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Set Default Domain", {
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Show Required Payment Authentication Notice

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Show Required Payment Authentication Notice", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Showcase Action

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `unknown` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Showcase Action", {
  "action": "<<type: unknown, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Showcase Action Received

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **action data** | `string` | No description | ❌ |
| **actor id** | `string` | No description | ❌ |
| **actor total projects** | `integer` | No description | ❌ |
| **actor username** | `string` | No description | ❌ |
| **project id** | `string` | No description | ❌ |
| **project image** | `string` | No description | ❌ |
| **project name** | `string` | No description | ❌ |
| **project url** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Showcase Action Received", {
  "action": "<<type: string, required: false>>",
  "action data": "<<type: string, required: false>>",
  "actor id": "<<type: string, required: false>>",
  "actor total projects": "<<type: integer, required: false>>",
  "actor username": "<<type: string, required: false>>",
  "project id": "<<type: string, required: false>>",
  "project image": "<<type: string, required: false>>",
  "project name": "<<type: string, required: false>>",
  "project url": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Showcase Created

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **showcasedToUserProfile** | `boolean` | No description | ❌ |
| **showcasedToWorkspaceProfile** | `boolean` | No description | ❌ |
| **site_id** | `string` | No description | ❌ |
| **tags** | `array` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Showcase Created", {
  "showcasedToUserProfile": "<<type: boolean, required: false>>",
  "showcasedToWorkspaceProfile": "<<type: boolean, required: false>>",
  "site_id": "<<type: string, required: false>>",
  "tags": "<<type: array, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Showcase Digest Generated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **clones** | `integer` | No description | ❌ |
| **comments** | `integer` | No description | ❌ |
| **end date** | `string` | No description | ❌ |
| **followers** | `integer` | No description | ❌ |
| **likes** | `integer` | No description | ❌ |
| **mentions** | `integer` | No description | ❌ |
| **most cloned project** | `string` | No description | ❌ |
| **most cloned project url** | `string` | No description | ❌ |
| **most liked project** | `string` | No description | ❌ |
| **most liked project url** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **start date** | `string` | No description | ❌ |
| **total views** | `integer` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Showcase Digest Generated", {
  "clones": "<<type: integer, required: false>>",
  "comments": "<<type: integer, required: false>>",
  "end date": "<<type: string, required: false>>",
  "followers": "<<type: integer, required: false>>",
  "likes": "<<type: integer, required: false>>",
  "mentions": "<<type: integer, required: false>>",
  "most cloned project": "<<type: string, required: false>>",
  "most cloned project url": "<<type: string, required: false>>",
  "most liked project": "<<type: string, required: false>>",
  "most liked project url": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "start date": "<<type: string, required: false>>",
  "total views": "<<type: integer, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Showcase Search Results Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **search** | `array` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Showcase Search Results Viewed", {
  "ref": "<<type: string, required: false>>",
  "search": "<<type: array, required: false>>",
  "site id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Showcase Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **additionalTags** | `array` | No description | ❌ |
| **clone type** | `string` | No description | ❌ |
| **designer id** | `string` | No description | ❌ |
| **profile** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **section** | `string` | No description | ❌ |
| **showcase collection slug** | `string` | No description | ❌ |
| **showcase section** | `string` | No description | ❌ |
| **showcasedToExpertProfile** | `boolean` | No description | ❌ |
| **showcasedToUserProfile** | `boolean` | No description | ❌ |
| **showcasedToWorkspaceProfile** | `boolean` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **tags** | `array` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Showcase Viewed", {
  "additionalTags": "<<type: array, required: false>>",
  "clone type": "<<type: string, required: false>>",
  "designer id": "<<type: string, required: false>>",
  "profile": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "section": "<<type: string, required: false>>",
  "showcase collection slug": "<<type: string, required: false>>",
  "showcase section": "<<type: string, required: false>>",
  "showcasedToExpertProfile": "<<type: boolean, required: false>>",
  "showcasedToUserProfile": "<<type: boolean, required: false>>",
  "showcasedToWorkspaceProfile": "<<type: boolean, required: false>>",
  "site id": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "tags": "<<type: array, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Sign In Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Sign In Page Viewed", {
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Sign Up

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **beta feature** | `string` | No description | ❌ |
| **beta flag** | `string` | No description | ❌ |
| **city** | `string` | No description | ❌ |
| **country** | `string` | No description | ❌ |
| **email** | `string` | No description | ❌ |
| **first_touch_date** | `string` | No description | ❌ |
| **initial_gclid** | `string` | No description | ❌ |
| **initial_page_url** | `string` | No description | ❌ |
| **initial_referrer** | `string` | No description | ❌ |
| **initial_referring_domain** | `string` | No description | ❌ |
| **initial_utm_campaign** | `string` | No description | ❌ |
| **initial_utm_content** | `string` | No description | ❌ |
| **initial_utm_medium** | `string` | No description | ❌ |
| **initial_utm_source** | `string` | No description | ❌ |
| **initial_utm_term** | `string` | No description | ❌ |
| **invitedToWorkspace** | `boolean` | No description | ❌ |
| **is previous user** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **marketing vertical code** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **presignup_breadcrumbs** | `array` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **refId** | `unknown` | No description | ❌ |
| **referrer affiliate click timestamp** | `string` | No description | ❌ |
| **referrer affiliate id** | `string` | No description | ❌ |
| **referrer partner key** | `string` | No description | ❌ |
| **school** | `unknown` | No description | ❌ |
| **signup method** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **transactionId** | `unknown` | No description | ❌ |
| **trialEndsAt** | `string` | No description | ❌ |
| **trigger** | `unknown` | No description | ❌ |
| **type** | `unknown` | No description | ❌ |
| **userAgent** | `string` | No description | ❌ |
| **via** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **wf_initial_referrer** | `string` | No description | ❌ |
| **wf_initial_utm_campaign** | `string` | No description | ❌ |
| **wf_initial_utm_content** | `string` | No description | ❌ |
| **wf_initial_utm_medium** | `string` | No description | ❌ |
| **wf_initial_utm_source** | `string` | No description | ❌ |
| **wf_initial_utm_term** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Sign Up", {
  "beta feature": "<<type: string, required: false>>",
  "beta flag": "<<type: string, required: false>>",
  "city": "<<type: string, required: false>>",
  "country": "<<type: string, required: false>>",
  "email": "<<type: string, required: false>>",
  "first_touch_date": "<<type: string, required: false>>",
  "initial_gclid": "<<type: string, required: false>>",
  "initial_page_url": "<<type: string, required: false>>",
  "initial_referrer": "<<type: string, required: false>>",
  "initial_referring_domain": "<<type: string, required: false>>",
  "initial_utm_campaign": "<<type: string, required: false>>",
  "initial_utm_content": "<<type: string, required: false>>",
  "initial_utm_medium": "<<type: string, required: false>>",
  "initial_utm_source": "<<type: string, required: false>>",
  "initial_utm_term": "<<type: string, required: false>>",
  "invitedToWorkspace": "<<type: boolean, required: false>>",
  "is previous user": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "marketing vertical code": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "presignup_breadcrumbs": "<<type: array, required: false>>",
  "ref": "<<type: string, required: false>>",
  "refId": "<<type: unknown, required: false>>",
  "referrer affiliate click timestamp": "<<type: string, required: false>>",
  "referrer affiliate id": "<<type: string, required: false>>",
  "referrer partner key": "<<type: string, required: false>>",
  "school": "<<type: unknown, required: false>>",
  "signup method": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "source": "<<type: string, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "transactionId": "<<type: unknown, required: false>>",
  "trialEndsAt": "<<type: string, required: false>>",
  "trigger": "<<type: unknown, required: false>>",
  "type": "<<type: unknown, required: false>>",
  "userAgent": "<<type: string, required: false>>",
  "via": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "wf_initial_referrer": "<<type: string, required: false>>",
  "wf_initial_utm_campaign": "<<type: string, required: false>>",
  "wf_initial_utm_content": "<<type: string, required: false>>",
  "wf_initial_utm_medium": "<<type: string, required: false>>",
  "wf_initial_utm_source": "<<type: string, required: false>>",
  "wf_initial_utm_term": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Sign Up Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **page step** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **previous step** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **utm_content** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Sign Up Page Viewed", {
  "legacy team id": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "page step": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "previous step": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "utm_content": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Signed Up

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Signed Up", {
  "ref": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Build Initiated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **days to initiate** | `integer` | No description | ❌ |
| **days_to_initiate_build** | `string` | No description | ❌ |
| **hours to initiate** | `integer` | No description | ❌ |
| **hours_to_initiate_build** | `string` | No description | ❌ |
| **initiatedAt** | `string` | No description | ❌ |
| **minutes to initiate** | `integer` | No description | ❌ |
| **minutes_to_initiate_build** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site_id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Build Initiated", {
  "days to initiate": "<<type: integer, required: false>>",
  "days_to_initiate_build": "<<type: string, required: false>>",
  "hours to initiate": "<<type: integer, required: false>>",
  "hours_to_initiate_build": "<<type: string, required: false>>",
  "initiatedAt": "<<type: string, required: false>>",
  "minutes to initiate": "<<type: integer, required: false>>",
  "minutes_to_initiate_build": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site_id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Custom Code Updated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **team id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Custom Code Updated", {
  "legacy team id": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "team id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Export Queued

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ecommerce enabled** | `string` | No description | ❌ |
| **export enabled** | `string` | No description | ❌ |
| **short name** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site published** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Export Queued", {
  "ecommerce enabled": "<<type: string, required: false>>",
  "export enabled": "<<type: string, required: false>>",
  "short name": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site published": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Export Requested

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Export Requested", {
  "site id": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site In Site Specific Access Workspace Created

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **creator workspace role** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site specific access** | `boolean` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site In Site Specific Access Workspace Created", {
  "creator workspace role": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site specific access": "<<type: boolean, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Integrations Marketing Form Added

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **formName** | `string` | No description | ❌ |
| **integration** | `object` | No description | ❌ |
| **integration.__v** | `integer` | No description | ❌ |
| **integration._id** | `string` | No description | ❌ |
| **integration.createdOn** | `string` | No description | ❌ |
| **integration.fieldMapping** | `object` | No description | ❌ |
| **integration.fieldMapping.0** | `string` | No description | ❌ |
| **integration.fieldMapping.ABM** | `string` | No description | ❌ |
| **integration.fieldMapping.AOL** | `string` | No description | ❌ |
| **integration.fieldMapping.Attachment** | `string` | No description | ❌ |
| **integration.fieldMapping.Audience Type** | `string` | No description | ❌ |
| **integration.fieldMapping.Autoblog** | `string` | No description | ❌ |
| **integration.fieldMapping.Booth Talks And Swag 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Brand** | `string` | No description | ❌ |
| **integration.fieldMapping.Business Email** | `string` | No description | ❌ |
| **integration.fieldMapping.Business Email Address** | `string` | No description | ❌ |
| **integration.fieldMapping.Business Email Address 2** | `string` | No description | ❌ |
| **integration.fieldMapping.CRM System** | `string` | No description | ❌ |
| **integration.fieldMapping.Campaigns** | `string` | No description | ❌ |
| **integration.fieldMapping.Checkbox** | `string` | No description | ❌ |
| **integration.fieldMapping.Checkbox 2** | `string` | No description | ❌ |
| **integration.fieldMapping.City** | `string` | No description | ❌ |
| **integration.fieldMapping.Company** | `string` | No description | ❌ |
| **integration.fieldMapping.Company 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Company Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Company Name 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Company Size** | `string` | No description | ❌ |
| **integration.fieldMapping.Company Updates Checkbox** | `string` | No description | ❌ |
| **integration.fieldMapping.Company name** | `string` | No description | ❌ |
| **integration.fieldMapping.Company-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.CompanyOO** | `string` | No description | ❌ |
| **integration.fieldMapping.CompanyRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.CompanySize** | `string` | No description | ❌ |
| **integration.fieldMapping.Connect With Team 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Connector Phase** | `string` | No description | ❌ |
| **integration.fieldMapping.Consent** | `string` | No description | ❌ |
| **integration.fieldMapping.Consent Given** | `string` | No description | ❌ |
| **integration.fieldMapping.Consent Given Marketing** | `string` | No description | ❌ |
| **integration.fieldMapping.Consent Given ROW** | `string` | No description | ❌ |
| **integration.fieldMapping.Consent_Type__c** | `string` | No description | ❌ |
| **integration.fieldMapping.Contact Email** | `string` | No description | ❌ |
| **integration.fieldMapping.Country** | `string` | No description | ❌ |
| **integration.fieldMapping.Country-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.CountryOO** | `string` | No description | ❌ |
| **integration.fieldMapping.CountryRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Crowdstrike** | `string` | No description | ❌ |
| **integration.fieldMapping.Describe Company** | `string` | No description | ❌ |
| **integration.fieldMapping.Description** | `string` | No description | ❌ |
| **integration.fieldMapping.Dial code** | `string` | No description | ❌ |
| **integration.fieldMapping.Educational Content Checkbox** | `string` | No description | ❌ |
| **integration.fieldMapping.Email** | `string` | No description | ❌ |
| **integration.fieldMapping.Email 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Email 3** | `string` | No description | ❌ |
| **integration.fieldMapping.Email 4** | `string` | No description | ❌ |
| **integration.fieldMapping.Email Address** | `string` | No description | ❌ |
| **integration.fieldMapping.Email-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.EmailOO** | `string` | No description | ❌ |
| **integration.fieldMapping.EmailRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Employer Email** | `string` | No description | ❌ |
| **integration.fieldMapping.Employer First Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Employer Last Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Employer Role** | `string` | No description | ❌ |
| **integration.fieldMapping.Engadget** | `string` | No description | ❌ |
| **integration.fieldMapping.Events Checkbox** | `string` | No description | ❌ |
| **integration.fieldMapping.Field** | `string` | No description | ❌ |
| **integration.fieldMapping.Field 12** | `string` | No description | ❌ |
| **integration.fieldMapping.Field 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Field 9** | `string` | No description | ❌ |
| **integration.fieldMapping.Film + animation** | `string` | No description | ❌ |
| **integration.fieldMapping.First Name** | `string` | No description | ❌ |
| **integration.fieldMapping.First Name 2** | `string` | No description | ❌ |
| **integration.fieldMapping.First name** | `string` | No description | ❌ |
| **integration.fieldMapping.FirstName** | `string` | No description | ❌ |
| **integration.fieldMapping.FirstName-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.FirstNameOO** | `string` | No description | ❌ |
| **integration.fieldMapping.FirstNameRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Firstname** | `string` | No description | ❌ |
| **integration.fieldMapping.Full Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Have you formed a legal entity yet?** | `string` | No description | ❌ |
| **integration.fieldMapping.Hidden** | `string` | No description | ❌ |
| **integration.fieldMapping.How many homes per year** | `string` | No description | ❌ |
| **integration.fieldMapping.IPAddress** | `string` | No description | ❌ |
| **integration.fieldMapping.Interest** | `string` | No description | ❌ |
| **integration.fieldMapping.Job Function** | `string` | No description | ❌ |
| **integration.fieldMapping.Job Title** | `string` | No description | ❌ |
| **integration.fieldMapping.JobTitle** | `string` | No description | ❌ |
| **integration.fieldMapping.Jobtitle** | `string` | No description | ❌ |
| **integration.fieldMapping.Last Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Last Name 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Last Name 3** | `string` | No description | ❌ |
| **integration.fieldMapping.Last name** | `string` | No description | ❌ |
| **integration.fieldMapping.LastName** | `string` | No description | ❌ |
| **integration.fieldMapping.LastName-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.LastNameOO** | `string` | No description | ❌ |
| **integration.fieldMapping.LastNameRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Lastname** | `string` | No description | ❌ |
| **integration.fieldMapping.Lead generation** | `string` | No description | ❌ |
| **integration.fieldMapping.Location** | `string` | No description | ❌ |
| **integration.fieldMapping.Market** | `string` | No description | ❌ |
| **integration.fieldMapping.Marketing Consent 2** | `string` | No description | ❌ |
| **integration.fieldMapping.MarketingConsent** | `string` | No description | ❌ |
| **integration.fieldMapping.MarketingConsent-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.MarketingConsentOO** | `string` | No description | ❌ |
| **integration.fieldMapping.Message** | `string` | No description | ❌ |
| **integration.fieldMapping.Message Long** | `string` | No description | ❌ |
| **integration.fieldMapping.Mobile Phone** | `string` | No description | ❌ |
| **integration.fieldMapping.MobilePhone** | `string` | No description | ❌ |
| **integration.fieldMapping.MobilePhone-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.MobilePhoneOO** | `string` | No description | ❌ |
| **integration.fieldMapping.MobilePhoneRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.My role in homebuilding is** | `string` | No description | ❌ |
| **integration.fieldMapping.Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Name 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Name 3** | `string` | No description | ❌ |
| **integration.fieldMapping.Name 4** | `string` | No description | ❌ |
| **integration.fieldMapping.Needs help with** | `string` | No description | ❌ |
| **integration.fieldMapping.Netsuite** | `string` | No description | ❌ |
| **integration.fieldMapping.Newsletter Checkbox** | `string` | No description | ❌ |
| **integration.fieldMapping.No renewals** | `string` | No description | ❌ |
| **integration.fieldMapping.Number of Employees** | `string` | No description | ❌ |
| **integration.fieldMapping.Opt in** | `string` | No description | ❌ |
| **integration.fieldMapping.Original_Lead_Source_Detail__c** | `string` | No description | ❌ |
| **integration.fieldMapping.Original_Lead_Source__c** | `string` | No description | ❌ |
| **integration.fieldMapping.Other** | `string` | No description | ❌ |
| **integration.fieldMapping.Other renewals** | `string` | No description | ❌ |
| **integration.fieldMapping.Phone** | `string` | No description | ❌ |
| **integration.fieldMapping.Phone 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Phone Number** | `string` | No description | ❌ |
| **integration.fieldMapping.Platform** | `string` | No description | ❌ |
| **integration.fieldMapping.Preferred language** | `string` | No description | ❌ |
| **integration.fieldMapping.Primary Reason for Refering** | `string` | No description | ❌ |
| **integration.fieldMapping.Priority Rating** | `string` | No description | ❌ |
| **integration.fieldMapping.Project Summary** | `string` | No description | ❌ |
| **integration.fieldMapping.Project To Product Workshop 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Project-Summary** | `string` | No description | ❌ |
| **integration.fieldMapping.QuarterlyBudget** | `string` | No description | ❌ |
| **integration.fieldMapping.Questions or Comments** | `string` | No description | ❌ |
| **integration.fieldMapping.Receive offers** | `string` | No description | ❌ |
| **integration.fieldMapping.Recent_Lead_Source_Detail__c** | `string` | No description | ❌ |
| **integration.fieldMapping.Recent_Lead_Source__c** | `string` | No description | ❌ |
| **integration.fieldMapping.Referal Department** | `string` | No description | ❌ |
| **integration.fieldMapping.Referral Email Address** | `string` | No description | ❌ |
| **integration.fieldMapping.Referral First Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Referral Last Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Referral Title** | `string` | No description | ❌ |
| **integration.fieldMapping.Renewals** | `string` | No description | ❌ |
| **integration.fieldMapping.Role** | `string` | No description | ❌ |
| **integration.fieldMapping.Salesforce** | `string` | No description | ❌ |
| **integration.fieldMapping.Select Country** | `string` | No description | ❌ |
| **integration.fieldMapping.Select Inquiry Email Address** | `string` | No description | ❌ |
| **integration.fieldMapping.Server ID** | `string` | No description | ❌ |
| **integration.fieldMapping.Slack** | `string` | No description | ❌ |
| **integration.fieldMapping.State** | `string` | No description | ❌ |
| **integration.fieldMapping.State / Province** | `string` | No description | ❌ |
| **integration.fieldMapping.Strategy** | `string` | No description | ❌ |
| **integration.fieldMapping.Subject** | `string` | No description | ❌ |
| **integration.fieldMapping.Subscribe** | `string` | No description | ❌ |
| **integration.fieldMapping.TechCrunch** | `string` | No description | ❌ |
| **integration.fieldMapping.Tell us more** | `string` | No description | ❌ |
| **integration.fieldMapping.Terms Checkbox** | `string` | No description | ❌ |
| **integration.fieldMapping.The Cadillac Three 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Title** | `string` | No description | ❌ |
| **integration.fieldMapping.Topic** | `string` | No description | ❌ |
| **integration.fieldMapping.UTM Campaign** | `string` | No description | ❌ |
| **integration.fieldMapping.UTM Content** | `string` | No description | ❌ |
| **integration.fieldMapping.UTM Medium** | `string` | No description | ❌ |
| **integration.fieldMapping.UTM Source** | `string` | No description | ❌ |
| **integration.fieldMapping.UTM Term** | `string` | No description | ❌ |
| **integration.fieldMapping.Unsubscribe Checkbox** | `string` | No description | ❌ |
| **integration.fieldMapping.Use Clair as employer or employee?** | `string` | No description | ❌ |
| **integration.fieldMapping.User ID** | `string` | No description | ❌ |
| **integration.fieldMapping.Webinars Checkbox** | `string` | No description | ❌ |
| **integration.fieldMapping.Website** | `string` | No description | ❌ |
| **integration.fieldMapping.Website-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.WebsiteOO** | `string` | No description | ❌ |
| **integration.fieldMapping.WebsiteRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Work Email** | `string` | No description | ❌ |
| **integration.fieldMapping.Xbox** | `string` | No description | ❌ |
| **integration.fieldMapping.Yahoo** | `string` | No description | ❌ |
| **integration.fieldMapping.YahooEntertainment** | `string` | No description | ❌ |
| **integration.fieldMapping.YahooFinance** | `string` | No description | ❌ |
| **integration.fieldMapping.YahooLife** | `string` | No description | ❌ |
| **integration.fieldMapping.YahooMail** | `string` | No description | ❌ |
| **integration.fieldMapping.YahooNews** | `string` | No description | ❌ |
| **integration.fieldMapping.YahooSports** | `string` | No description | ❌ |
| **integration.fieldMapping.Your First Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Your Last Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Your email** | `string` | No description | ❌ |
| **integration.fieldMapping.YourCRM** | `string` | No description | ❌ |
| **integration.fieldMapping.Zoom** | `string` | No description | ❌ |
| **integration.fieldMapping.address** | `string` | No description | ❌ |
| **integration.fieldMapping.adpr** | `string` | No description | ❌ |
| **integration.fieldMapping.annual_revenue** | `string` | No description | ❌ |
| **integration.fieldMapping.budget** | `string` | No description | ❌ |
| **integration.fieldMapping.campaign** | `string` | No description | ❌ |
| **integration.fieldMapping.channel** | `string` | No description | ❌ |
| **integration.fieldMapping.city** | `string` | No description | ❌ |
| **integration.fieldMapping.code** | `string` | No description | ❌ |
| **integration.fieldMapping.comments** | `string` | No description | ❌ |
| **integration.fieldMapping.company** | `string` | No description | ❌ |
| **integration.fieldMapping.company-name** | `string` | No description | ❌ |
| **integration.fieldMapping.companyType** | `string` | No description | ❌ |
| **integration.fieldMapping.company_name** | `string` | No description | ❌ |
| **integration.fieldMapping.company_role** | `string` | No description | ❌ |
| **integration.fieldMapping.company_role_new** | `string` | No description | ❌ |
| **integration.fieldMapping.company_size** | `string` | No description | ❌ |
| **integration.fieldMapping.consultation** | `string` | No description | ❌ |
| **integration.fieldMapping.creative** | `string` | No description | ❌ |
| **integration.fieldMapping.description** | `string` | No description | ❌ |
| **integration.fieldMapping.design** | `string` | No description | ❌ |
| **integration.fieldMapping.do_not_sell_preference** | `string` | No description | ❌ |
| **integration.fieldMapping.email** | `string` | No description | ❌ |
| **integration.fieldMapping.field** | `string` | No description | ❌ |
| **integration.fieldMapping.first-name** | `string` | No description | ❌ |
| **integration.fieldMapping.firstName** | `string` | No description | ❌ |
| **integration.fieldMapping.first_name** | `string` | No description | ❌ |
| **integration.fieldMapping.firstname** | `string` | No description | ❌ |
| **integration.fieldMapping.formRef** | `string` | No description | ❌ |
| **integration.fieldMapping.formUrl** | `string` | No description | ❌ |
| **integration.fieldMapping.formid** | `string` | No description | ❌ |
| **integration.fieldMapping.found-through** | `string` | No description | ❌ |
| **integration.fieldMapping.function** | `string` | No description | ❌ |
| **integration.fieldMapping.gclid** | `string` | No description | ❌ |
| **integration.fieldMapping.hidden 1** | `string` | No description | ❌ |
| **integration.fieldMapping.how_did_you_learn_about_insense_** | `string` | No description | ❌ |
| **integration.fieldMapping.ip_country_geojs** | `string` | No description | ❌ |
| **integration.fieldMapping.job-title** | `string` | No description | ❌ |
| **integration.fieldMapping.last-name** | `string` | No description | ❌ |
| **integration.fieldMapping.lastName** | `string` | No description | ❌ |
| **integration.fieldMapping.last_name** | `string` | No description | ❌ |
| **integration.fieldMapping.lastname** | `string` | No description | ❌ |
| **integration.fieldMapping.lt_utm_campaign__c** | `string` | No description | ❌ |
| **integration.fieldMapping.lt_utm_medium__c** | `string` | No description | ❌ |
| **integration.fieldMapping.lt_utm_source__c** | `string` | No description | ❌ |
| **integration.fieldMapping.lt_utm_term__c** | `string` | No description | ❌ |
| **integration.fieldMapping.message** | `string` | No description | ❌ |
| **integration.fieldMapping.mobile** | `string` | No description | ❌ |
| **integration.fieldMapping.mpr** | `string` | No description | ❌ |
| **integration.fieldMapping.munchkinId** | `string` | No description | ❌ |
| **integration.fieldMapping.nb-confirmation-token** | `string` | No description | ❌ |
| **integration.fieldMapping.nb-result** | `string` | No description | ❌ |
| **integration.fieldMapping.nb-transaction-token** | `string` | No description | ❌ |
| **integration.fieldMapping.numberOfEvents** | `string` | No description | ❌ |
| **integration.fieldMapping.opt-in** | `string` | No description | ❌ |
| **integration.fieldMapping.pages** | `string` | No description | ❌ |
| **integration.fieldMapping.phone** | `string` | No description | ❌ |
| **integration.fieldMapping.phone number** | `string` | No description | ❌ |
| **integration.fieldMapping.placement** | `string` | No description | ❌ |
| **integration.fieldMapping.pr** | `string` | No description | ❌ |
| **integration.fieldMapping.pr2** | `string` | No description | ❌ |
| **integration.fieldMapping.pr3** | `string` | No description | ❌ |
| **integration.fieldMapping.pr4** | `string` | No description | ❌ |
| **integration.fieldMapping.reason_for_contacting** | `string` | No description | ❌ |
| **integration.fieldMapping.referrer-email** | `string` | No description | ❌ |
| **integration.fieldMapping.select2-results__option** | `string` | No description | ❌ |
| **integration.fieldMapping.self_identified_persona** | `string` | No description | ❌ |
| **integration.fieldMapping.source** | `string` | No description | ❌ |
| **integration.fieldMapping.source-URL** | `string` | No description | ❌ |
| **integration.fieldMapping.sourcedetail** | `string` | No description | ❌ |
| **integration.fieldMapping.special_instructions_for_mailing** | `string` | No description | ❌ |
| **integration.fieldMapping.state** | `string` | No description | ❌ |
| **integration.fieldMapping.tellUSMore** | `string` | No description | ❌ |
| **integration.fieldMapping.terms** | `string` | No description | ❌ |
| **integration.fieldMapping.urlPath** | `string` | No description | ❌ |
| **integration.fieldMapping.use_case** | `string` | No description | ❌ |
| **integration.fieldMapping.user-agent** | `string` | No description | ❌ |
| **integration.fieldMapping.utm_campaign** | `string` | No description | ❌ |
| **integration.fieldMapping.utm_content** | `string` | No description | ❌ |
| **integration.fieldMapping.utm_medium** | `string` | No description | ❌ |
| **integration.fieldMapping.utm_source** | `string` | No description | ❌ |
| **integration.fieldMapping.utm_term** | `string` | No description | ❌ |
| **integration.fieldMapping.webflow** | `string` | No description | ❌ |
| **integration.fieldMapping.website** | `string` | No description | ❌ |
| **integration.fieldMapping.website_Company** | `string` | No description | ❌ |
| **integration.fieldMapping.website_FirstName** | `string` | No description | ❌ |
| **integration.fieldMapping.website_LastName** | `string` | No description | ❌ |
| **integration.fieldMapping.website_Topic** | `string` | No description | ❌ |
| **integration.fieldMapping.website_comments** | `string` | No description | ❌ |
| **integration.fieldMapping.website_country** | `string` | No description | ❌ |
| **integration.fieldMapping.website_email** | `string` | No description | ❌ |
| **integration.fieldMapping.what_best_describes_your_business_** | `string` | No description | ❌ |
| **integration.fieldMapping.zip** | `string` | No description | ❌ |
| **integration.integrationAuth** | `string` | No description | ❌ |
| **integration.metadata** | `object` | No description | ❌ |
| **integration.metadata.hubspotFormId** | `string` | No description | ❌ |
| **integration.metadata.hubspotFormName** | `string` | No description | ❌ |
| **integration.metadata.marketoFormId** | `integer` | No description | ❌ |
| **integration.metadata.marketoFormName** | `string` | No description | ❌ |
| **integration.site** | `string` | No description | ❌ |
| **integration.webflowFormName** | `string` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteName** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Integrations Marketing Form Added", {
  "formName": "<<type: string, required: false>>",
  "integration": {
    "__v": "<<type: integer, required: false>>",
    "_id": "<<type: string, required: false>>",
    "createdOn": "<<type: string, required: false>>",
    "fieldMapping": {
      "0": "<<type: string, required: false>>",
      "ABM": "<<type: string, required: false>>",
      "AOL": "<<type: string, required: false>>",
      "Attachment": "<<type: string, required: false>>",
      "Audience Type": "<<type: string, required: false>>",
      "Autoblog": "<<type: string, required: false>>",
      "Booth Talks And Swag 2": "<<type: string, required: false>>",
      "Brand": "<<type: string, required: false>>",
      "Business Email": "<<type: string, required: false>>",
      "Business Email Address": "<<type: string, required: false>>",
      "Business Email Address 2": "<<type: string, required: false>>",
      "CRM System": "<<type: string, required: false>>",
      "Campaigns": "<<type: string, required: false>>",
      "Checkbox": "<<type: string, required: false>>",
      "Checkbox 2": "<<type: string, required: false>>",
      "City": "<<type: string, required: false>>",
      "Company": "<<type: string, required: false>>",
      "Company 2": "<<type: string, required: false>>",
      "Company Name": "<<type: string, required: false>>",
      "Company Name 2": "<<type: string, required: false>>",
      "Company Size": "<<type: string, required: false>>",
      "Company Updates Checkbox": "<<type: string, required: false>>",
      "Company name": "<<type: string, required: false>>",
      "Company-DSP": "<<type: string, required: false>>",
      "CompanyOO": "<<type: string, required: false>>",
      "CompanyRMN": "<<type: string, required: false>>",
      "CompanySize": "<<type: string, required: false>>",
      "Connect With Team 2": "<<type: string, required: false>>",
      "Connector Phase": "<<type: string, required: false>>",
      "Consent": "<<type: string, required: false>>",
      "Consent Given": "<<type: string, required: false>>",
      "Consent Given Marketing": "<<type: string, required: false>>",
      "Consent Given ROW": "<<type: string, required: false>>",
      "Consent_Type__c": "<<type: string, required: false>>",
      "Contact Email": "<<type: string, required: false>>",
      "Country": "<<type: string, required: false>>",
      "Country-DSP": "<<type: string, required: false>>",
      "CountryOO": "<<type: string, required: false>>",
      "CountryRMN": "<<type: string, required: false>>",
      "Crowdstrike": "<<type: string, required: false>>",
      "Describe Company": "<<type: string, required: false>>",
      "Description": "<<type: string, required: false>>",
      "Dial code": "<<type: string, required: false>>",
      "Educational Content Checkbox": "<<type: string, required: false>>",
      "Email": "<<type: string, required: false>>",
      "Email 2": "<<type: string, required: false>>",
      "Email 3": "<<type: string, required: false>>",
      "Email 4": "<<type: string, required: false>>",
      "Email Address": "<<type: string, required: false>>",
      "Email-DSP": "<<type: string, required: false>>",
      "EmailOO": "<<type: string, required: false>>",
      "EmailRMN": "<<type: string, required: false>>",
      "Employer Email": "<<type: string, required: false>>",
      "Employer First Name": "<<type: string, required: false>>",
      "Employer Last Name": "<<type: string, required: false>>",
      "Employer Role": "<<type: string, required: false>>",
      "Engadget": "<<type: string, required: false>>",
      "Events Checkbox": "<<type: string, required: false>>",
      "Field": "<<type: string, required: false>>",
      "Field 12": "<<type: string, required: false>>",
      "Field 2": "<<type: string, required: false>>",
      "Field 9": "<<type: string, required: false>>",
      "Film + animation": "<<type: string, required: false>>",
      "First Name": "<<type: string, required: false>>",
      "First Name 2": "<<type: string, required: false>>",
      "First name": "<<type: string, required: false>>",
      "FirstName": "<<type: string, required: false>>",
      "FirstName-DSP": "<<type: string, required: false>>",
      "FirstNameOO": "<<type: string, required: false>>",
      "FirstNameRMN": "<<type: string, required: false>>",
      "Firstname": "<<type: string, required: false>>",
      "Full Name": "<<type: string, required: false>>",
      "Have you formed a legal entity yet?": "<<type: string, required: false>>",
      "Hidden": "<<type: string, required: false>>",
      "How many homes per year": "<<type: string, required: false>>",
      "IPAddress": "<<type: string, required: false>>",
      "Interest": "<<type: string, required: false>>",
      "Job Function": "<<type: string, required: false>>",
      "Job Title": "<<type: string, required: false>>",
      "JobTitle": "<<type: string, required: false>>",
      "Jobtitle": "<<type: string, required: false>>",
      "Last Name": "<<type: string, required: false>>",
      "Last Name 2": "<<type: string, required: false>>",
      "Last Name 3": "<<type: string, required: false>>",
      "Last name": "<<type: string, required: false>>",
      "LastName": "<<type: string, required: false>>",
      "LastName-DSP": "<<type: string, required: false>>",
      "LastNameOO": "<<type: string, required: false>>",
      "LastNameRMN": "<<type: string, required: false>>",
      "Lastname": "<<type: string, required: false>>",
      "Lead generation": "<<type: string, required: false>>",
      "Location": "<<type: string, required: false>>",
      "Market": "<<type: string, required: false>>",
      "Marketing Consent 2": "<<type: string, required: false>>",
      "MarketingConsent": "<<type: string, required: false>>",
      "MarketingConsent-DSP": "<<type: string, required: false>>",
      "MarketingConsentOO": "<<type: string, required: false>>",
      "Message": "<<type: string, required: false>>",
      "Message Long": "<<type: string, required: false>>",
      "Mobile Phone": "<<type: string, required: false>>",
      "MobilePhone": "<<type: string, required: false>>",
      "MobilePhone-DSP": "<<type: string, required: false>>",
      "MobilePhoneOO": "<<type: string, required: false>>",
      "MobilePhoneRMN": "<<type: string, required: false>>",
      "My role in homebuilding is": "<<type: string, required: false>>",
      "Name": "<<type: string, required: false>>",
      "Name 2": "<<type: string, required: false>>",
      "Name 3": "<<type: string, required: false>>",
      "Name 4": "<<type: string, required: false>>",
      "Needs help with": "<<type: string, required: false>>",
      "Netsuite": "<<type: string, required: false>>",
      "Newsletter Checkbox": "<<type: string, required: false>>",
      "No renewals": "<<type: string, required: false>>",
      "Number of Employees": "<<type: string, required: false>>",
      "Opt in": "<<type: string, required: false>>",
      "Original_Lead_Source_Detail__c": "<<type: string, required: false>>",
      "Original_Lead_Source__c": "<<type: string, required: false>>",
      "Other": "<<type: string, required: false>>",
      "Other renewals": "<<type: string, required: false>>",
      "Phone": "<<type: string, required: false>>",
      "Phone 2": "<<type: string, required: false>>",
      "Phone Number": "<<type: string, required: false>>",
      "Platform": "<<type: string, required: false>>",
      "Preferred language": "<<type: string, required: false>>",
      "Primary Reason for Refering": "<<type: string, required: false>>",
      "Priority Rating": "<<type: string, required: false>>",
      "Project Summary": "<<type: string, required: false>>",
      "Project To Product Workshop 2": "<<type: string, required: false>>",
      "Project-Summary": "<<type: string, required: false>>",
      "QuarterlyBudget": "<<type: string, required: false>>",
      "Questions or Comments": "<<type: string, required: false>>",
      "Receive offers": "<<type: string, required: false>>",
      "Recent_Lead_Source_Detail__c": "<<type: string, required: false>>",
      "Recent_Lead_Source__c": "<<type: string, required: false>>",
      "Referal Department": "<<type: string, required: false>>",
      "Referral Email Address": "<<type: string, required: false>>",
      "Referral First Name": "<<type: string, required: false>>",
      "Referral Last Name": "<<type: string, required: false>>",
      "Referral Title": "<<type: string, required: false>>",
      "Renewals": "<<type: string, required: false>>",
      "Role": "<<type: string, required: false>>",
      "Salesforce": "<<type: string, required: false>>",
      "Select Country": "<<type: string, required: false>>",
      "Select Inquiry Email Address": "<<type: string, required: false>>",
      "Server ID": "<<type: string, required: false>>",
      "Slack": "<<type: string, required: false>>",
      "State": "<<type: string, required: false>>",
      "State / Province": "<<type: string, required: false>>",
      "Strategy": "<<type: string, required: false>>",
      "Subject": "<<type: string, required: false>>",
      "Subscribe": "<<type: string, required: false>>",
      "TechCrunch": "<<type: string, required: false>>",
      "Tell us more": "<<type: string, required: false>>",
      "Terms Checkbox": "<<type: string, required: false>>",
      "The Cadillac Three 2": "<<type: string, required: false>>",
      "Title": "<<type: string, required: false>>",
      "Topic": "<<type: string, required: false>>",
      "UTM Campaign": "<<type: string, required: false>>",
      "UTM Content": "<<type: string, required: false>>",
      "UTM Medium": "<<type: string, required: false>>",
      "UTM Source": "<<type: string, required: false>>",
      "UTM Term": "<<type: string, required: false>>",
      "Unsubscribe Checkbox": "<<type: string, required: false>>",
      "Use Clair as employer or employee?": "<<type: string, required: false>>",
      "User ID": "<<type: string, required: false>>",
      "Webinars Checkbox": "<<type: string, required: false>>",
      "Website": "<<type: string, required: false>>",
      "Website-DSP": "<<type: string, required: false>>",
      "WebsiteOO": "<<type: string, required: false>>",
      "WebsiteRMN": "<<type: string, required: false>>",
      "Work Email": "<<type: string, required: false>>",
      "Xbox": "<<type: string, required: false>>",
      "Yahoo": "<<type: string, required: false>>",
      "YahooEntertainment": "<<type: string, required: false>>",
      "YahooFinance": "<<type: string, required: false>>",
      "YahooLife": "<<type: string, required: false>>",
      "YahooMail": "<<type: string, required: false>>",
      "YahooNews": "<<type: string, required: false>>",
      "YahooSports": "<<type: string, required: false>>",
      "Your First Name": "<<type: string, required: false>>",
      "Your Last Name": "<<type: string, required: false>>",
      "Your email": "<<type: string, required: false>>",
      "YourCRM": "<<type: string, required: false>>",
      "Zoom": "<<type: string, required: false>>",
      "address": "<<type: string, required: false>>",
      "adpr": "<<type: string, required: false>>",
      "annual_revenue": "<<type: string, required: false>>",
      "budget": "<<type: string, required: false>>",
      "campaign": "<<type: string, required: false>>",
      "channel": "<<type: string, required: false>>",
      "city": "<<type: string, required: false>>",
      "code": "<<type: string, required: false>>",
      "comments": "<<type: string, required: false>>",
      "company": "<<type: string, required: false>>",
      "company-name": "<<type: string, required: false>>",
      "companyType": "<<type: string, required: false>>",
      "company_name": "<<type: string, required: false>>",
      "company_role": "<<type: string, required: false>>",
      "company_role_new": "<<type: string, required: false>>",
      "company_size": "<<type: string, required: false>>",
      "consultation": "<<type: string, required: false>>",
      "creative": "<<type: string, required: false>>",
      "description": "<<type: string, required: false>>",
      "design": "<<type: string, required: false>>",
      "do_not_sell_preference": "<<type: string, required: false>>",
      "email": "<<type: string, required: false>>",
      "field": "<<type: string, required: false>>",
      "first-name": "<<type: string, required: false>>",
      "firstName": "<<type: string, required: false>>",
      "first_name": "<<type: string, required: false>>",
      "firstname": "<<type: string, required: false>>",
      "formRef": "<<type: string, required: false>>",
      "formUrl": "<<type: string, required: false>>",
      "formid": "<<type: string, required: false>>",
      "found-through": "<<type: string, required: false>>",
      "function": "<<type: string, required: false>>",
      "gclid": "<<type: string, required: false>>",
      "hidden 1": "<<type: string, required: false>>",
      "how_did_you_learn_about_insense_": "<<type: string, required: false>>",
      "ip_country_geojs": "<<type: string, required: false>>",
      "job-title": "<<type: string, required: false>>",
      "last-name": "<<type: string, required: false>>",
      "lastName": "<<type: string, required: false>>",
      "last_name": "<<type: string, required: false>>",
      "lastname": "<<type: string, required: false>>",
      "lt_utm_campaign__c": "<<type: string, required: false>>",
      "lt_utm_medium__c": "<<type: string, required: false>>",
      "lt_utm_source__c": "<<type: string, required: false>>",
      "lt_utm_term__c": "<<type: string, required: false>>",
      "message": "<<type: string, required: false>>",
      "mobile": "<<type: string, required: false>>",
      "mpr": "<<type: string, required: false>>",
      "munchkinId": "<<type: string, required: false>>",
      "nb-confirmation-token": "<<type: string, required: false>>",
      "nb-result": "<<type: string, required: false>>",
      "nb-transaction-token": "<<type: string, required: false>>",
      "numberOfEvents": "<<type: string, required: false>>",
      "opt-in": "<<type: string, required: false>>",
      "pages": "<<type: string, required: false>>",
      "phone": "<<type: string, required: false>>",
      "phone number": "<<type: string, required: false>>",
      "placement": "<<type: string, required: false>>",
      "pr": "<<type: string, required: false>>",
      "pr2": "<<type: string, required: false>>",
      "pr3": "<<type: string, required: false>>",
      "pr4": "<<type: string, required: false>>",
      "reason_for_contacting": "<<type: string, required: false>>",
      "referrer-email": "<<type: string, required: false>>",
      "select2-results__option": "<<type: string, required: false>>",
      "self_identified_persona": "<<type: string, required: false>>",
      "source": "<<type: string, required: false>>",
      "source-URL": "<<type: string, required: false>>",
      "sourcedetail": "<<type: string, required: false>>",
      "special_instructions_for_mailing": "<<type: string, required: false>>",
      "state": "<<type: string, required: false>>",
      "tellUSMore": "<<type: string, required: false>>",
      "terms": "<<type: string, required: false>>",
      "urlPath": "<<type: string, required: false>>",
      "use_case": "<<type: string, required: false>>",
      "user-agent": "<<type: string, required: false>>",
      "utm_campaign": "<<type: string, required: false>>",
      "utm_content": "<<type: string, required: false>>",
      "utm_medium": "<<type: string, required: false>>",
      "utm_source": "<<type: string, required: false>>",
      "utm_term": "<<type: string, required: false>>",
      "webflow": "<<type: string, required: false>>",
      "website": "<<type: string, required: false>>",
      "website_Company": "<<type: string, required: false>>",
      "website_FirstName": "<<type: string, required: false>>",
      "website_LastName": "<<type: string, required: false>>",
      "website_Topic": "<<type: string, required: false>>",
      "website_comments": "<<type: string, required: false>>",
      "website_country": "<<type: string, required: false>>",
      "website_email": "<<type: string, required: false>>",
      "what_best_describes_your_business_": "<<type: string, required: false>>",
      "zip": "<<type: string, required: false>>"
    },
    "integrationAuth": "<<type: string, required: false>>",
    "metadata": {
      "hubspotFormId": "<<type: string, required: false>>",
      "hubspotFormName": "<<type: string, required: false>>",
      "marketoFormId": "<<type: integer, required: false>>",
      "marketoFormName": "<<type: string, required: false>>"
    },
    "site": "<<type: string, required: false>>",
    "webflowFormName": "<<type: string, required: false>>"
  },
  "legacy team id": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteName": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Integrations Marketing Form Updated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **integration** | `object` | No description | ❌ |
| **integration.__v** | `integer` | No description | ❌ |
| **integration._id** | `string` | No description | ❌ |
| **integration.createdOn** | `string` | No description | ❌ |
| **integration.fieldMapping** | `object` | No description | ❌ |
| **integration.fieldMapping.AOL** | `string` | No description | ❌ |
| **integration.fieldMapping.Access Code** | `string` | No description | ❌ |
| **integration.fieldMapping.Audience Type** | `string` | No description | ❌ |
| **integration.fieldMapping.Autoblog** | `string` | No description | ❌ |
| **integration.fieldMapping.Business Email** | `string` | No description | ❌ |
| **integration.fieldMapping.Business Email Address** | `string` | No description | ❌ |
| **integration.fieldMapping.Business Email Address 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Checkbox** | `string` | No description | ❌ |
| **integration.fieldMapping.Checkbox 2** | `string` | No description | ❌ |
| **integration.fieldMapping.City** | `string` | No description | ❌ |
| **integration.fieldMapping.Company** | `string` | No description | ❌ |
| **integration.fieldMapping.Company 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Company DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.Company Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Company Name 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Company Website** | `string` | No description | ❌ |
| **integration.fieldMapping.Company YP** | `string` | No description | ❌ |
| **integration.fieldMapping.Company name** | `string` | No description | ❌ |
| **integration.fieldMapping.Company-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.Company-RMN** | `string` | No description | ❌ |
| **integration.fieldMapping.CompanyOO** | `string` | No description | ❌ |
| **integration.fieldMapping.CompanyRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.CompanySize** | `string` | No description | ❌ |
| **integration.fieldMapping.Consent** | `string` | No description | ❌ |
| **integration.fieldMapping.Consent Given** | `string` | No description | ❌ |
| **integration.fieldMapping.Consent Given ROW** | `string` | No description | ❌ |
| **integration.fieldMapping.Contact Business Email** | `string` | No description | ❌ |
| **integration.fieldMapping.Contact Checkbox Terms** | `string` | No description | ❌ |
| **integration.fieldMapping.Contact Company Size** | `string` | No description | ❌ |
| **integration.fieldMapping.Contact Drone Service Checkbox** | `string` | No description | ❌ |
| **integration.fieldMapping.Contact First Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Contact How Did You Hear About Us** | `string` | No description | ❌ |
| **integration.fieldMapping.Contact Last Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Contact Message** | `string` | No description | ❌ |
| **integration.fieldMapping.Contract** | `string` | No description | ❌ |
| **integration.fieldMapping.Country** | `string` | No description | ❌ |
| **integration.fieldMapping.Country DSP Input** | `string` | No description | ❌ |
| **integration.fieldMapping.Country Input** | `string` | No description | ❌ |
| **integration.fieldMapping.Country YP** | `string` | No description | ❌ |
| **integration.fieldMapping.Country-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.Country-Input** | `string` | No description | ❌ |
| **integration.fieldMapping.Country-RMN** | `string` | No description | ❌ |
| **integration.fieldMapping.CountryDSP-Input** | `string` | No description | ❌ |
| **integration.fieldMapping.CountryOO** | `string` | No description | ❌ |
| **integration.fieldMapping.CountryRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Current_page_url__c** | `string` | No description | ❌ |
| **integration.fieldMapping.Date available** | `string` | No description | ❌ |
| **integration.fieldMapping.Describe Company** | `string` | No description | ❌ |
| **integration.fieldMapping.Dial code** | `string` | No description | ❌ |
| **integration.fieldMapping.Email** | `string` | No description | ❌ |
| **integration.fieldMapping.Email 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Email Address** | `string` | No description | ❌ |
| **integration.fieldMapping.Email Address 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Email DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.Email-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.Email-RMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Email-YP** | `string` | No description | ❌ |
| **integration.fieldMapping.EmailOO** | `string` | No description | ❌ |
| **integration.fieldMapping.EmailRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Employee Count** | `string` | No description | ❌ |
| **integration.fieldMapping.Employer Email** | `string` | No description | ❌ |
| **integration.fieldMapping.Employer First Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Employer Last Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Employer Phone Number** | `string` | No description | ❌ |
| **integration.fieldMapping.Employer Role** | `string` | No description | ❌ |
| **integration.fieldMapping.Engadget** | `string` | No description | ❌ |
| **integration.fieldMapping.Entry Path** | `string` | No description | ❌ |
| **integration.fieldMapping.Exhibitor Tour** | `string` | No description | ❌ |
| **integration.fieldMapping.Fall** | `string` | No description | ❌ |
| **integration.fieldMapping.Field** | `string` | No description | ❌ |
| **integration.fieldMapping.Field 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Field 9** | `string` | No description | ❌ |
| **integration.fieldMapping.First Name** | `string` | No description | ❌ |
| **integration.fieldMapping.First Name 2** | `string` | No description | ❌ |
| **integration.fieldMapping.First Name 3** | `string` | No description | ❌ |
| **integration.fieldMapping.First Name DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.First Name YP** | `string` | No description | ❌ |
| **integration.fieldMapping.First Name-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.First Name-RMN** | `string` | No description | ❌ |
| **integration.fieldMapping.First name** | `string` | No description | ❌ |
| **integration.fieldMapping.FirstName** | `string` | No description | ❌ |
| **integration.fieldMapping.FirstName-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.FirstNameOO** | `string` | No description | ❌ |
| **integration.fieldMapping.FirstNameRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Form_submission_url__c** | `string` | No description | ❌ |
| **integration.fieldMapping.Full Name** | `string` | No description | ❌ |
| **integration.fieldMapping.GCLID__c** | `string` | No description | ❌ |
| **integration.fieldMapping.Guided Product Tour** | `string` | No description | ❌ |
| **integration.fieldMapping.Hear about us** | `string` | No description | ❌ |
| **integration.fieldMapping.Hidden** | `string` | No description | ❌ |
| **integration.fieldMapping.Hidden 3** | `string` | No description | ❌ |
| **integration.fieldMapping.IPAddress** | `string` | No description | ❌ |
| **integration.fieldMapping.Interest** | `string` | No description | ❌ |
| **integration.fieldMapping.Job Function** | `string` | No description | ❌ |
| **integration.fieldMapping.Job Title** | `string` | No description | ❌ |
| **integration.fieldMapping.Job Title 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Keep Me Informed** | `string` | No description | ❌ |
| **integration.fieldMapping.Last Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Last Name 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Last Name 3** | `string` | No description | ❌ |
| **integration.fieldMapping.Last Name-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.Last Name-RMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Last Name-YP** | `string` | No description | ❌ |
| **integration.fieldMapping.Last name** | `string` | No description | ❌ |
| **integration.fieldMapping.LastName** | `string` | No description | ❌ |
| **integration.fieldMapping.LastName-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.LastNameOO** | `string` | No description | ❌ |
| **integration.fieldMapping.LastNameRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Market** | `string` | No description | ❌ |
| **integration.fieldMapping.Marketing Consent** | `string` | No description | ❌ |
| **integration.fieldMapping.Marketing Consent 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Marketing Consent-RMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Marketing Consent-YP** | `string` | No description | ❌ |
| **integration.fieldMapping.MarketingConsent** | `string` | No description | ❌ |
| **integration.fieldMapping.MarketingConsent-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.MarketingConsentOO** | `string` | No description | ❌ |
| **integration.fieldMapping.Message** | `string` | No description | ❌ |
| **integration.fieldMapping.Message 3** | `string` | No description | ❌ |
| **integration.fieldMapping.Message Field** | `string` | No description | ❌ |
| **integration.fieldMapping.Mobile Phone** | `string` | No description | ❌ |
| **integration.fieldMapping.Mobile Phone-RMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Mobile Phone-YP** | `string` | No description | ❌ |
| **integration.fieldMapping.MobilePhone-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.MobilePhoneOO** | `string` | No description | ❌ |
| **integration.fieldMapping.MobilePhoneRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Name 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Networking Session** | `string` | No description | ❌ |
| **integration.fieldMapping.Notes** | `string` | No description | ❌ |
| **integration.fieldMapping.Number of Employees** | `string` | No description | ❌ |
| **integration.fieldMapping.Occupied 2** | `string` | No description | ❌ |
| **integration.fieldMapping.Organization Name** | `string` | No description | ❌ |
| **integration.fieldMapping.Organization State** | `string` | No description | ❌ |
| **integration.fieldMapping.Original_UTM_medium__c** | `string` | No description | ❌ |
| **integration.fieldMapping.Original_UTM_source__c** | `string` | No description | ❌ |
| **integration.fieldMapping.Original_UTM_term__c** | `string` | No description | ❌ |
| **integration.fieldMapping.Own acquiring acquisition** | `string` | No description | ❌ |
| **integration.fieldMapping.Phone** | `string` | No description | ❌ |
| **integration.fieldMapping.Phone Number** | `string` | No description | ❌ |
| **integration.fieldMapping.Phone number** | `string` | No description | ❌ |
| **integration.fieldMapping.Press Announcement** | `string` | No description | ❌ |
| **integration.fieldMapping.Previous_page_url__c** | `string` | No description | ❌ |
| **integration.fieldMapping.Primary Business Unit** | `string` | No description | ❌ |
| **integration.fieldMapping.Property address** | `string` | No description | ❌ |
| **integration.fieldMapping.Q2 Agent Retention** | `string` | No description | ❌ |
| **integration.fieldMapping.Q2 Agent Training Costs** | `string` | No description | ❌ |
| **integration.fieldMapping.Q2 Decreasing Budget** | `string` | No description | ❌ |
| **integration.fieldMapping.Q2 Generative AI Implementation** | `string` | No description | ❌ |
| **integration.fieldMapping.Q2 Increased Costs** | `string` | No description | ❌ |
| **integration.fieldMapping.Q2 Increased Customer Expectations** | `string` | No description | ❌ |
| **integration.fieldMapping.Q2 Low Sales Conversions** | `string` | No description | ❌ |
| **integration.fieldMapping.Q2 Quality & Consistency** | `string` | No description | ❌ |
| **integration.fieldMapping.Q2 Technology Adoption** | `string` | No description | ❌ |
| **integration.fieldMapping.Q3 Aftercall Coaching** | `string` | No description | ❌ |
| **integration.fieldMapping.Q3 Automatic Summaries** | `string` | No description | ❌ |
| **integration.fieldMapping.Q3 Digital Adoption** | `string` | No description | ❌ |
| **integration.fieldMapping.Q3 Realtime Agent Assistance** | `string` | No description | ❌ |
| **integration.fieldMapping.Q3 Response Augmentation** | `string` | No description | ❌ |
| **integration.fieldMapping.Q4 Agent Throughput** | `string` | No description | ❌ |
| **integration.fieldMapping.Q4 Average Handle Time** | `string` | No description | ❌ |
| **integration.fieldMapping.Q4 Call Quality** | `string` | No description | ❌ |
| **integration.fieldMapping.Q4 Digital Adoption** | `string` | No description | ❌ |
| **integration.fieldMapping.Q4 First Time Resolution** | `string` | No description | ❌ |
| **integration.fieldMapping.Q4 NPS** | `string` | No description | ❌ |
| **integration.fieldMapping.Q4 Sales Conversions** | `string` | No description | ❌ |
| **integration.fieldMapping.Q4 Time to Proficiency** | `string` | No description | ❌ |
| **integration.fieldMapping.Q6 AWS Connect** | `string` | No description | ❌ |
| **integration.fieldMapping.Q6 Avaya** | `string` | No description | ❌ |
| **integration.fieldMapping.Q6 Cisco** | `string` | No description | ❌ |
| **integration.fieldMapping.Q6 Cresta** | `string` | No description | ❌ |
| **integration.fieldMapping.Q6 Genesys** | `string` | No description | ❌ |
| **integration.fieldMapping.Q6 Google CCAI** | `string` | No description | ❌ |
| **integration.fieldMapping.Q6 Home Grown** | `string` | No description | ❌ |
| **integration.fieldMapping.Q6 Live Person** | `string` | No description | ❌ |
| **integration.fieldMapping.Q6 Nice** | `string` | No description | ❌ |
| **integration.fieldMapping.Q6 Other** | `string` | No description | ❌ |
| **integration.fieldMapping.Q6 SalesForce** | `string` | No description | ❌ |
| **integration.fieldMapping.Q6 Uniphore** | `string` | No description | ❌ |
| **integration.fieldMapping.Q6 Verint** | `string` | No description | ❌ |
| **integration.fieldMapping.Q7 ASAPP Messaging** | `string` | No description | ❌ |
| **integration.fieldMapping.Q7 AutoAssist** | `string` | No description | ❌ |
| **integration.fieldMapping.Q7 AutoCompose** | `string` | No description | ❌ |
| **integration.fieldMapping.Q7 AutoSummary** | `string` | No description | ❌ |
| **integration.fieldMapping.Q7 AutoTranscribe** | `string` | No description | ❌ |
| **integration.fieldMapping.Q7 CoachingAI** | `string` | No description | ❌ |
| **integration.fieldMapping.Q7 GenerativeAgent** | `string` | No description | ❌ |
| **integration.fieldMapping.Q7 Not Sure** | `string` | No description | ❌ |
| **integration.fieldMapping.QuarterlyBudget** | `string` | No description | ❌ |
| **integration.fieldMapping.REFERRALCODE** | `string` | No description | ❌ |
| **integration.fieldMapping.Receive offers** | `string` | No description | ❌ |
| **integration.fieldMapping.Renewals** | `string` | No description | ❌ |
| **integration.fieldMapping.RenewalsText** | `string` | No description | ❌ |
| **integration.fieldMapping.Role** | `string` | No description | ❌ |
| **integration.fieldMapping.Select Country** | `string` | No description | ❌ |
| **integration.fieldMapping.Spring** | `string` | No description | ❌ |
| **integration.fieldMapping.State** | `string` | No description | ❌ |
| **integration.fieldMapping.State / Province** | `string` | No description | ❌ |
| **integration.fieldMapping.Subscribe** | `string` | No description | ❌ |
| **integration.fieldMapping.Summer** | `string` | No description | ❌ |
| **integration.fieldMapping.Tech Crunch** | `string` | No description | ❌ |
| **integration.fieldMapping.TechCrunch** | `string` | No description | ❌ |
| **integration.fieldMapping.Tell us more** | `string` | No description | ❌ |
| **integration.fieldMapping.Terms Checkbox** | `string` | No description | ❌ |
| **integration.fieldMapping.Title** | `string` | No description | ❌ |
| **integration.fieldMapping.Topic** | `string` | No description | ❌ |
| **integration.fieldMapping.Total # of Teams** | `string` | No description | ❌ |
| **integration.fieldMapping.Trade** | `string` | No description | ❌ |
| **integration.fieldMapping.UTM_Campaign__c** | `string` | No description | ❌ |
| **integration.fieldMapping.UTM_Content__c** | `string` | No description | ❌ |
| **integration.fieldMapping.UTM_Medium__c** | `string` | No description | ❌ |
| **integration.fieldMapping.UTM_Source__c** | `string` | No description | ❌ |
| **integration.fieldMapping.UTM_Term__c** | `string` | No description | ❌ |
| **integration.fieldMapping.Website** | `string` | No description | ❌ |
| **integration.fieldMapping.Website DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.Website-DSP** | `string` | No description | ❌ |
| **integration.fieldMapping.Website-RMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Website-YP** | `string` | No description | ❌ |
| **integration.fieldMapping.WebsiteOO** | `string` | No description | ❌ |
| **integration.fieldMapping.WebsiteRMN** | `string` | No description | ❌ |
| **integration.fieldMapping.Winter** | `string` | No description | ❌ |
| **integration.fieldMapping.Work Email** | `string` | No description | ❌ |
| **integration.fieldMapping.Xbox** | `string` | No description | ❌ |
| **integration.fieldMapping.Yahoo** | `string` | No description | ❌ |
| **integration.fieldMapping.Yahoo Entertainment** | `string` | No description | ❌ |
| **integration.fieldMapping.Yahoo Finance** | `string` | No description | ❌ |
| **integration.fieldMapping.Yahoo Life** | `string` | No description | ❌ |
| **integration.fieldMapping.Yahoo Mail** | `string` | No description | ❌ |
| **integration.fieldMapping.Yahoo News** | `string` | No description | ❌ |
| **integration.fieldMapping.Yahoo Sports** | `string` | No description | ❌ |
| **integration.fieldMapping.YahooEntertainment** | `string` | No description | ❌ |
| **integration.fieldMapping.YahooFinance** | `string` | No description | ❌ |
| **integration.fieldMapping.YahooLife** | `string` | No description | ❌ |
| **integration.fieldMapping.YahooMail** | `string` | No description | ❌ |
| **integration.fieldMapping.YahooNews** | `string` | No description | ❌ |
| **integration.fieldMapping.YahooSports** | `string` | No description | ❌ |
| **integration.fieldMapping.address** | `string` | No description | ❌ |
| **integration.fieldMapping.city** | `string` | No description | ❌ |
| **integration.fieldMapping.comments** | `string` | No description | ❌ |
| **integration.fieldMapping.company** | `string` | No description | ❌ |
| **integration.fieldMapping.company-name** | `string` | No description | ❌ |
| **integration.fieldMapping.customMessage** | `string` | No description | ❌ |
| **integration.fieldMapping.description** | `string` | No description | ❌ |
| **integration.fieldMapping.email** | `string` | No description | ❌ |
| **integration.fieldMapping.field** | `string` | No description | ❌ |
| **integration.fieldMapping.first-name** | `string` | No description | ❌ |
| **integration.fieldMapping.firstName** | `string` | No description | ❌ |
| **integration.fieldMapping.firstname** | `string` | No description | ❌ |
| **integration.fieldMapping.formRef** | `string` | No description | ❌ |
| **integration.fieldMapping.formUrl** | `string` | No description | ❌ |
| **integration.fieldMapping.form_gclid** | `string` | No description | ❌ |
| **integration.fieldMapping.gclid** | `string` | No description | ❌ |
| **integration.fieldMapping.hidden 1** | `string` | No description | ❌ |
| **integration.fieldMapping.hiddenEmailField** | `string` | No description | ❌ |
| **integration.fieldMapping.job-title** | `string` | No description | ❌ |
| **integration.fieldMapping.last-name** | `string` | No description | ❌ |
| **integration.fieldMapping.lastName** | `string` | No description | ❌ |
| **integration.fieldMapping.lastname** | `string` | No description | ❌ |
| **integration.fieldMapping.lt_utm_campaign__c** | `string` | No description | ❌ |
| **integration.fieldMapping.lt_utm_medium__c** | `string` | No description | ❌ |
| **integration.fieldMapping.lt_utm_source__c** | `string` | No description | ❌ |
| **integration.fieldMapping.lt_utm_term__c** | `string` | No description | ❌ |
| **integration.fieldMapping.message** | `string` | No description | ❌ |
| **integration.fieldMapping.msclkid** | `string` | No description | ❌ |
| **integration.fieldMapping.nb-confirmation-token** | `string` | No description | ❌ |
| **integration.fieldMapping.nb-result** | `string` | No description | ❌ |
| **integration.fieldMapping.nb-transaction-token** | `string` | No description | ❌ |
| **integration.fieldMapping.phone** | `string` | No description | ❌ |
| **integration.fieldMapping.phone number** | `string` | No description | ❌ |
| **integration.fieldMapping.q1-agent-population** | `string` | No description | ❌ |
| **integration.fieldMapping.q5-interaction-volume** | `string` | No description | ❌ |
| **integration.fieldMapping.reason_for_contacting** | `string` | No description | ❌ |
| **integration.fieldMapping.referrer-email** | `string` | No description | ❌ |
| **integration.fieldMapping.role** | `string` | No description | ❌ |
| **integration.fieldMapping.select2-results__option** | `string` | No description | ❌ |
| **integration.fieldMapping.self_identified_persona** | `string` | No description | ❌ |
| **integration.fieldMapping.source-URL** | `string` | No description | ❌ |
| **integration.fieldMapping.special_instructions_for_mailing** | `string` | No description | ❌ |
| **integration.fieldMapping.state** | `string` | No description | ❌ |
| **integration.fieldMapping.urlPath** | `string` | No description | ❌ |
| **integration.fieldMapping.userid** | `string` | No description | ❌ |
| **integration.fieldMapping.utm_campaign** | `string` | No description | ❌ |
| **integration.fieldMapping.utm_content** | `string` | No description | ❌ |
| **integration.fieldMapping.utm_medium** | `string` | No description | ❌ |
| **integration.fieldMapping.utm_source** | `string` | No description | ❌ |
| **integration.fieldMapping.utm_term** | `string` | No description | ❌ |
| **integration.fieldMapping.visitor code** | `string` | No description | ❌ |
| **integration.fieldMapping.zip** | `string` | No description | ❌ |
| **integration.integrationAuth** | `string` | No description | ❌ |
| **integration.metadata** | `object` | No description | ❌ |
| **integration.metadata.hubspotFormId** | `string` | No description | ❌ |
| **integration.metadata.hubspotFormName** | `string` | No description | ❌ |
| **integration.metadata.marketoFormId** | `integer` | No description | ❌ |
| **integration.metadata.marketoFormName** | `string` | No description | ❌ |
| **integration.site** | `string` | No description | ❌ |
| **integration.webflowFormName** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Integrations Marketing Form Updated", {
  "integration": {
    "__v": "<<type: integer, required: false>>",
    "_id": "<<type: string, required: false>>",
    "createdOn": "<<type: string, required: false>>",
    "fieldMapping": {
      "AOL": "<<type: string, required: false>>",
      "Access Code": "<<type: string, required: false>>",
      "Audience Type": "<<type: string, required: false>>",
      "Autoblog": "<<type: string, required: false>>",
      "Business Email": "<<type: string, required: false>>",
      "Business Email Address": "<<type: string, required: false>>",
      "Business Email Address 2": "<<type: string, required: false>>",
      "Checkbox": "<<type: string, required: false>>",
      "Checkbox 2": "<<type: string, required: false>>",
      "City": "<<type: string, required: false>>",
      "Company": "<<type: string, required: false>>",
      "Company 2": "<<type: string, required: false>>",
      "Company DSP": "<<type: string, required: false>>",
      "Company Name": "<<type: string, required: false>>",
      "Company Name 2": "<<type: string, required: false>>",
      "Company Website": "<<type: string, required: false>>",
      "Company YP": "<<type: string, required: false>>",
      "Company name": "<<type: string, required: false>>",
      "Company-DSP": "<<type: string, required: false>>",
      "Company-RMN": "<<type: string, required: false>>",
      "CompanyOO": "<<type: string, required: false>>",
      "CompanyRMN": "<<type: string, required: false>>",
      "CompanySize": "<<type: string, required: false>>",
      "Consent": "<<type: string, required: false>>",
      "Consent Given": "<<type: string, required: false>>",
      "Consent Given ROW": "<<type: string, required: false>>",
      "Contact Business Email": "<<type: string, required: false>>",
      "Contact Checkbox Terms": "<<type: string, required: false>>",
      "Contact Company Size": "<<type: string, required: false>>",
      "Contact Drone Service Checkbox": "<<type: string, required: false>>",
      "Contact First Name": "<<type: string, required: false>>",
      "Contact How Did You Hear About Us": "<<type: string, required: false>>",
      "Contact Last Name": "<<type: string, required: false>>",
      "Contact Message": "<<type: string, required: false>>",
      "Contract": "<<type: string, required: false>>",
      "Country": "<<type: string, required: false>>",
      "Country DSP Input": "<<type: string, required: false>>",
      "Country Input": "<<type: string, required: false>>",
      "Country YP": "<<type: string, required: false>>",
      "Country-DSP": "<<type: string, required: false>>",
      "Country-Input": "<<type: string, required: false>>",
      "Country-RMN": "<<type: string, required: false>>",
      "CountryDSP-Input": "<<type: string, required: false>>",
      "CountryOO": "<<type: string, required: false>>",
      "CountryRMN": "<<type: string, required: false>>",
      "Current_page_url__c": "<<type: string, required: false>>",
      "Date available": "<<type: string, required: false>>",
      "Describe Company": "<<type: string, required: false>>",
      "Dial code": "<<type: string, required: false>>",
      "Email": "<<type: string, required: false>>",
      "Email 2": "<<type: string, required: false>>",
      "Email Address": "<<type: string, required: false>>",
      "Email Address 2": "<<type: string, required: false>>",
      "Email DSP": "<<type: string, required: false>>",
      "Email-DSP": "<<type: string, required: false>>",
      "Email-RMN": "<<type: string, required: false>>",
      "Email-YP": "<<type: string, required: false>>",
      "EmailOO": "<<type: string, required: false>>",
      "EmailRMN": "<<type: string, required: false>>",
      "Employee Count": "<<type: string, required: false>>",
      "Employer Email": "<<type: string, required: false>>",
      "Employer First Name": "<<type: string, required: false>>",
      "Employer Last Name": "<<type: string, required: false>>",
      "Employer Phone Number": "<<type: string, required: false>>",
      "Employer Role": "<<type: string, required: false>>",
      "Engadget": "<<type: string, required: false>>",
      "Entry Path": "<<type: string, required: false>>",
      "Exhibitor Tour": "<<type: string, required: false>>",
      "Fall": "<<type: string, required: false>>",
      "Field": "<<type: string, required: false>>",
      "Field 2": "<<type: string, required: false>>",
      "Field 9": "<<type: string, required: false>>",
      "First Name": "<<type: string, required: false>>",
      "First Name 2": "<<type: string, required: false>>",
      "First Name 3": "<<type: string, required: false>>",
      "First Name DSP": "<<type: string, required: false>>",
      "First Name YP": "<<type: string, required: false>>",
      "First Name-DSP": "<<type: string, required: false>>",
      "First Name-RMN": "<<type: string, required: false>>",
      "First name": "<<type: string, required: false>>",
      "FirstName": "<<type: string, required: false>>",
      "FirstName-DSP": "<<type: string, required: false>>",
      "FirstNameOO": "<<type: string, required: false>>",
      "FirstNameRMN": "<<type: string, required: false>>",
      "Form_submission_url__c": "<<type: string, required: false>>",
      "Full Name": "<<type: string, required: false>>",
      "GCLID__c": "<<type: string, required: false>>",
      "Guided Product Tour": "<<type: string, required: false>>",
      "Hear about us": "<<type: string, required: false>>",
      "Hidden": "<<type: string, required: false>>",
      "Hidden 3": "<<type: string, required: false>>",
      "IPAddress": "<<type: string, required: false>>",
      "Interest": "<<type: string, required: false>>",
      "Job Function": "<<type: string, required: false>>",
      "Job Title": "<<type: string, required: false>>",
      "Job Title 2": "<<type: string, required: false>>",
      "Keep Me Informed": "<<type: string, required: false>>",
      "Last Name": "<<type: string, required: false>>",
      "Last Name 2": "<<type: string, required: false>>",
      "Last Name 3": "<<type: string, required: false>>",
      "Last Name-DSP": "<<type: string, required: false>>",
      "Last Name-RMN": "<<type: string, required: false>>",
      "Last Name-YP": "<<type: string, required: false>>",
      "Last name": "<<type: string, required: false>>",
      "LastName": "<<type: string, required: false>>",
      "LastName-DSP": "<<type: string, required: false>>",
      "LastNameOO": "<<type: string, required: false>>",
      "LastNameRMN": "<<type: string, required: false>>",
      "Market": "<<type: string, required: false>>",
      "Marketing Consent": "<<type: string, required: false>>",
      "Marketing Consent 2": "<<type: string, required: false>>",
      "Marketing Consent-RMN": "<<type: string, required: false>>",
      "Marketing Consent-YP": "<<type: string, required: false>>",
      "MarketingConsent": "<<type: string, required: false>>",
      "MarketingConsent-DSP": "<<type: string, required: false>>",
      "MarketingConsentOO": "<<type: string, required: false>>",
      "Message": "<<type: string, required: false>>",
      "Message 3": "<<type: string, required: false>>",
      "Message Field": "<<type: string, required: false>>",
      "Mobile Phone": "<<type: string, required: false>>",
      "Mobile Phone-RMN": "<<type: string, required: false>>",
      "Mobile Phone-YP": "<<type: string, required: false>>",
      "MobilePhone-DSP": "<<type: string, required: false>>",
      "MobilePhoneOO": "<<type: string, required: false>>",
      "MobilePhoneRMN": "<<type: string, required: false>>",
      "Name": "<<type: string, required: false>>",
      "Name 2": "<<type: string, required: false>>",
      "Networking Session": "<<type: string, required: false>>",
      "Notes": "<<type: string, required: false>>",
      "Number of Employees": "<<type: string, required: false>>",
      "Occupied 2": "<<type: string, required: false>>",
      "Organization Name": "<<type: string, required: false>>",
      "Organization State": "<<type: string, required: false>>",
      "Original_UTM_medium__c": "<<type: string, required: false>>",
      "Original_UTM_source__c": "<<type: string, required: false>>",
      "Original_UTM_term__c": "<<type: string, required: false>>",
      "Own acquiring acquisition": "<<type: string, required: false>>",
      "Phone": "<<type: string, required: false>>",
      "Phone Number": "<<type: string, required: false>>",
      "Phone number": "<<type: string, required: false>>",
      "Press Announcement": "<<type: string, required: false>>",
      "Previous_page_url__c": "<<type: string, required: false>>",
      "Primary Business Unit": "<<type: string, required: false>>",
      "Property address": "<<type: string, required: false>>",
      "Q2 Agent Retention": "<<type: string, required: false>>",
      "Q2 Agent Training Costs": "<<type: string, required: false>>",
      "Q2 Decreasing Budget": "<<type: string, required: false>>",
      "Q2 Generative AI Implementation": "<<type: string, required: false>>",
      "Q2 Increased Costs": "<<type: string, required: false>>",
      "Q2 Increased Customer Expectations": "<<type: string, required: false>>",
      "Q2 Low Sales Conversions": "<<type: string, required: false>>",
      "Q2 Quality & Consistency": "<<type: string, required: false>>",
      "Q2 Technology Adoption": "<<type: string, required: false>>",
      "Q3 Aftercall Coaching": "<<type: string, required: false>>",
      "Q3 Automatic Summaries": "<<type: string, required: false>>",
      "Q3 Digital Adoption": "<<type: string, required: false>>",
      "Q3 Realtime Agent Assistance": "<<type: string, required: false>>",
      "Q3 Response Augmentation": "<<type: string, required: false>>",
      "Q4 Agent Throughput": "<<type: string, required: false>>",
      "Q4 Average Handle Time": "<<type: string, required: false>>",
      "Q4 Call Quality": "<<type: string, required: false>>",
      "Q4 Digital Adoption": "<<type: string, required: false>>",
      "Q4 First Time Resolution": "<<type: string, required: false>>",
      "Q4 NPS": "<<type: string, required: false>>",
      "Q4 Sales Conversions": "<<type: string, required: false>>",
      "Q4 Time to Proficiency": "<<type: string, required: false>>",
      "Q6 AWS Connect": "<<type: string, required: false>>",
      "Q6 Avaya": "<<type: string, required: false>>",
      "Q6 Cisco": "<<type: string, required: false>>",
      "Q6 Cresta": "<<type: string, required: false>>",
      "Q6 Genesys": "<<type: string, required: false>>",
      "Q6 Google CCAI": "<<type: string, required: false>>",
      "Q6 Home Grown": "<<type: string, required: false>>",
      "Q6 Live Person": "<<type: string, required: false>>",
      "Q6 Nice": "<<type: string, required: false>>",
      "Q6 Other": "<<type: string, required: false>>",
      "Q6 SalesForce": "<<type: string, required: false>>",
      "Q6 Uniphore": "<<type: string, required: false>>",
      "Q6 Verint": "<<type: string, required: false>>",
      "Q7 ASAPP Messaging": "<<type: string, required: false>>",
      "Q7 AutoAssist": "<<type: string, required: false>>",
      "Q7 AutoCompose": "<<type: string, required: false>>",
      "Q7 AutoSummary": "<<type: string, required: false>>",
      "Q7 AutoTranscribe": "<<type: string, required: false>>",
      "Q7 CoachingAI": "<<type: string, required: false>>",
      "Q7 GenerativeAgent": "<<type: string, required: false>>",
      "Q7 Not Sure": "<<type: string, required: false>>",
      "QuarterlyBudget": "<<type: string, required: false>>",
      "REFERRALCODE": "<<type: string, required: false>>",
      "Receive offers": "<<type: string, required: false>>",
      "Renewals": "<<type: string, required: false>>",
      "RenewalsText": "<<type: string, required: false>>",
      "Role": "<<type: string, required: false>>",
      "Select Country": "<<type: string, required: false>>",
      "Spring": "<<type: string, required: false>>",
      "State": "<<type: string, required: false>>",
      "State / Province": "<<type: string, required: false>>",
      "Subscribe": "<<type: string, required: false>>",
      "Summer": "<<type: string, required: false>>",
      "Tech Crunch": "<<type: string, required: false>>",
      "TechCrunch": "<<type: string, required: false>>",
      "Tell us more": "<<type: string, required: false>>",
      "Terms Checkbox": "<<type: string, required: false>>",
      "Title": "<<type: string, required: false>>",
      "Topic": "<<type: string, required: false>>",
      "Total # of Teams": "<<type: string, required: false>>",
      "Trade": "<<type: string, required: false>>",
      "UTM_Campaign__c": "<<type: string, required: false>>",
      "UTM_Content__c": "<<type: string, required: false>>",
      "UTM_Medium__c": "<<type: string, required: false>>",
      "UTM_Source__c": "<<type: string, required: false>>",
      "UTM_Term__c": "<<type: string, required: false>>",
      "Website": "<<type: string, required: false>>",
      "Website DSP": "<<type: string, required: false>>",
      "Website-DSP": "<<type: string, required: false>>",
      "Website-RMN": "<<type: string, required: false>>",
      "Website-YP": "<<type: string, required: false>>",
      "WebsiteOO": "<<type: string, required: false>>",
      "WebsiteRMN": "<<type: string, required: false>>",
      "Winter": "<<type: string, required: false>>",
      "Work Email": "<<type: string, required: false>>",
      "Xbox": "<<type: string, required: false>>",
      "Yahoo": "<<type: string, required: false>>",
      "Yahoo Entertainment": "<<type: string, required: false>>",
      "Yahoo Finance": "<<type: string, required: false>>",
      "Yahoo Life": "<<type: string, required: false>>",
      "Yahoo Mail": "<<type: string, required: false>>",
      "Yahoo News": "<<type: string, required: false>>",
      "Yahoo Sports": "<<type: string, required: false>>",
      "YahooEntertainment": "<<type: string, required: false>>",
      "YahooFinance": "<<type: string, required: false>>",
      "YahooLife": "<<type: string, required: false>>",
      "YahooMail": "<<type: string, required: false>>",
      "YahooNews": "<<type: string, required: false>>",
      "YahooSports": "<<type: string, required: false>>",
      "address": "<<type: string, required: false>>",
      "city": "<<type: string, required: false>>",
      "comments": "<<type: string, required: false>>",
      "company": "<<type: string, required: false>>",
      "company-name": "<<type: string, required: false>>",
      "customMessage": "<<type: string, required: false>>",
      "description": "<<type: string, required: false>>",
      "email": "<<type: string, required: false>>",
      "field": "<<type: string, required: false>>",
      "first-name": "<<type: string, required: false>>",
      "firstName": "<<type: string, required: false>>",
      "firstname": "<<type: string, required: false>>",
      "formRef": "<<type: string, required: false>>",
      "formUrl": "<<type: string, required: false>>",
      "form_gclid": "<<type: string, required: false>>",
      "gclid": "<<type: string, required: false>>",
      "hidden 1": "<<type: string, required: false>>",
      "hiddenEmailField": "<<type: string, required: false>>",
      "job-title": "<<type: string, required: false>>",
      "last-name": "<<type: string, required: false>>",
      "lastName": "<<type: string, required: false>>",
      "lastname": "<<type: string, required: false>>",
      "lt_utm_campaign__c": "<<type: string, required: false>>",
      "lt_utm_medium__c": "<<type: string, required: false>>",
      "lt_utm_source__c": "<<type: string, required: false>>",
      "lt_utm_term__c": "<<type: string, required: false>>",
      "message": "<<type: string, required: false>>",
      "msclkid": "<<type: string, required: false>>",
      "nb-confirmation-token": "<<type: string, required: false>>",
      "nb-result": "<<type: string, required: false>>",
      "nb-transaction-token": "<<type: string, required: false>>",
      "phone": "<<type: string, required: false>>",
      "phone number": "<<type: string, required: false>>",
      "q1-agent-population": "<<type: string, required: false>>",
      "q5-interaction-volume": "<<type: string, required: false>>",
      "reason_for_contacting": "<<type: string, required: false>>",
      "referrer-email": "<<type: string, required: false>>",
      "role": "<<type: string, required: false>>",
      "select2-results__option": "<<type: string, required: false>>",
      "self_identified_persona": "<<type: string, required: false>>",
      "source-URL": "<<type: string, required: false>>",
      "special_instructions_for_mailing": "<<type: string, required: false>>",
      "state": "<<type: string, required: false>>",
      "urlPath": "<<type: string, required: false>>",
      "userid": "<<type: string, required: false>>",
      "utm_campaign": "<<type: string, required: false>>",
      "utm_content": "<<type: string, required: false>>",
      "utm_medium": "<<type: string, required: false>>",
      "utm_source": "<<type: string, required: false>>",
      "utm_term": "<<type: string, required: false>>",
      "visitor code": "<<type: string, required: false>>",
      "zip": "<<type: string, required: false>>"
    },
    "integrationAuth": "<<type: string, required: false>>",
    "metadata": {
      "hubspotFormId": "<<type: string, required: false>>",
      "hubspotFormName": "<<type: string, required: false>>",
      "marketoFormId": "<<type: integer, required: false>>",
      "marketoFormName": "<<type: string, required: false>>"
    },
    "site": "<<type: string, required: false>>",
    "webflowFormName": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Integrations Settings Updated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **api token** | `boolean` | No description | ❌ |
| **facebook pixel ID** | `boolean` | No description | ❌ |
| **facebook pixel lazy load** | `boolean` | No description | ❌ |
| **google IP address anonymization** | `boolean` | No description | ❌ |
| **google analytics ID** | `boolean` | No description | ❌ |
| **google gtag enabled** | `boolean` | No description | ❌ |
| **google maps api key** | `boolean` | No description | ❌ |
| **google optimize ID** | `boolean` | No description | ❌ |
| **google universal analytics ID** | `boolean` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **team id** | `string` | No description | ❌ |
| **webhook** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Integrations Settings Updated", {
  "api token": "<<type: boolean, required: false>>",
  "facebook pixel ID": "<<type: boolean, required: false>>",
  "facebook pixel lazy load": "<<type: boolean, required: false>>",
  "google IP address anonymization": "<<type: boolean, required: false>>",
  "google analytics ID": "<<type: boolean, required: false>>",
  "google gtag enabled": "<<type: boolean, required: false>>",
  "google maps api key": "<<type: boolean, required: false>>",
  "google optimize ID": "<<type: boolean, required: false>>",
  "google universal analytics ID": "<<type: boolean, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "team id": "<<type: string, required: false>>",
  "webhook": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Plans Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **tab** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Plans Page Viewed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "tab": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site SEO Settings Updated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **default sitemap** | `boolean` | No description | ❌ |
| **disable indexing** | `boolean` | No description | ❌ |
| **global canonical tag url** | `boolean` | No description | ❌ |
| **google site verification** | `boolean` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **robots** | `boolean` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **sitemap** | `boolean` | No description | ❌ |
| **team id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site SEO Settings Updated", {
  "default sitemap": "<<type: boolean, required: false>>",
  "disable indexing": "<<type: boolean, required: false>>",
  "global canonical tag url": "<<type: boolean, required: false>>",
  "google site verification": "<<type: boolean, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "robots": "<<type: boolean, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "sitemap": "<<type: boolean, required: false>>",
  "team id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site** | `object` | No description | ❌ |
| **site.__v** | `integer` | No description | ❌ |
| **site._id** | `string` | No description | ❌ |
| **site._status** | `object` | No description | ❌ |
| **site._status.code** | `string` | No description | ❌ |
| **site._status.lastChanged** | `string` | No description | ❌ |
| **site.active** | `boolean` | No description | ❌ |
| **site.annotationCount** | `integer` | No description | ❌ |
| **site.apolloMaxRequestsPerSecond** | `number` | No description | ❌ |
| **site.archived** | `boolean` | No description | ❌ |
| **site.assetSize** | `integer` | No description | ❌ |
| **site.authStr** | `unknown` | No description | ❌ |
| **site.authUser** | `unknown` | No description | ❌ |
| **site.brandLogo** | `unknown` | No description | ❌ |
| **site.brandName** | `unknown` | No description | ❌ |
| **site.captchaPlugin** | `string` | No description | ❌ |
| **site.cloneOf** | `string` | No description | ❌ |
| **site.compiledAt** | `unknown` | No description | ❌ |
| **site.createdBy** | `string` | No description | ❌ |
| **site.createdOn** | `string` | No description | ❌ |
| **site.dashboardFolder** | `unknown` | No description | ❌ |
| **site.database** | `string` | No description | ❌ |
| **site.designTime** | `integer` | No description | ❌ |
| **site.dirty** | `boolean` | No description | ❌ |
| **site.domain** | `string` | No description | ❌ |
| **site.emailFormFromLabel** | `unknown` | No description | ❌ |
| **site.emailFormOptions** | `object` | No description | ❌ |
| **site.emailFormOptions.incSubInfo** | `boolean` | No description | ❌ |
| **site.emailFormOptions.incUnsubLink** | `boolean` | No description | ❌ |
| **site.emailFormReplyTo** | `unknown` | No description | ❌ |
| **site.emailFormSubject** | `unknown` | No description | ❌ |
| **site.emailFormTarget** | `string` | No description | ❌ |
| **site.emailFormTemplate** | `unknown` | No description | ❌ |
| **site.exportCount** | `integer` | No description | ❌ |
| **site.exportedToStigg** | `boolean` | No description | ❌ |
| **site.faviconUrl** | `string` | No description | ❌ |
| **site.formFileLoginRequired** | `boolean` | No description | ❌ |
| **site.formSubmissions** | `integer` | No description | ❌ |
| **site.formsHaveBeenMigrated** | `boolean` | No description | ❌ |
| **site.hostingPlanName** | `string` | No description | ❌ |
| **site.indexPage** | `string` | No description | ❌ |
| **site.installedMarketplaceResources** | `array` | No description | ❌ |
| **site.installedMarketplaceResources.items** | `object` | Contains the structure for array items | ❌ |
| **site.installedMarketplaceResources.items._id** | `string` | No description | ❌ |
| **site.installedMarketplaceResources.items.installer** | `string` | No description | ❌ |
| **site.installedMarketplaceResources.items.installerModel** | `string` | No description | ❌ |
| **site.installedMarketplaceResources.items.resource** | `string` | No description | ❌ |
| **site.installedMarketplaceResources.items.resourceModel** | `string` | No description | ❌ |
| **site.installedMarketplaceResources.items.type** | `string` | No description | ❌ |
| **site.isStagingPrivate** | `boolean` | No description | ❌ |
| **site.lastExport** | `string` | No description | ❌ |
| **site.lastFormInvoice** | `string` | No description | ❌ |
| **site.lastPublicationId** | `unknown` | No description | ❌ |
| **site.lastPublished** | `unknown` | No description | ❌ |
| **site.lastPublishedBy** | `unknown` | No description | ❌ |
| **site.lastSearchIndex** | `unknown` | No description | ❌ |
| **site.lastSearchIndexAuto** | `unknown` | No description | ❌ |
| **site.lastSearchIndexManual** | `unknown` | No description | ❌ |
| **site.lastSnapped** | `string` | No description | ❌ |
| **site.lastUpdated** | `string` | No description | ❌ |
| **site.lockDeletion** | `boolean` | No description | ❌ |
| **site.lockedReason** | `unknown` | No description | ❌ |
| **site.maxPages** | `unknown` | No description | ❌ |
| **site.name** | `string` | No description | ❌ |
| **site.newFormDatas** | `integer` | No description | ❌ |
| **site.oldPreviewId** | `string` | No description | ❌ |
| **site.pages** | `array` | No description | ❌ |
| **site.persistentUIState** | `object` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates** | `object` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Basic** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.CMS** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Components** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Features** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Footer** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Forms** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Gallery** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Hero** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Layout** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Logos** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Media** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Pricing** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Team** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Testimonial** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.Typography** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"basic","val":"Advanced"}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"basic","val":"CMS"}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"basic","val":"Ecommerce"}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"basic","val":"Features"}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"basic","val":"Forms"}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"basic","val":"Gallery"}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"basic","val":"Hero"}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"basic","val":"Logos"}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"basic","val":"Media"}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"basic","val":"Navigation"}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"basic","val":"Structure"}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"basic","val":"Typography"}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"basic","val":"Users"}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Conversion Flow Library",["Brand Section"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Conversion Flow Library",["CTA Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Conversion Flow Library",["Content Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Conversion Flow Library",["FAQ Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Conversion Flow Library",["Feature Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Conversion Flow Library",["Footer Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Conversion Flow Library",["Form Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Conversion Flow Library",["Header Section"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Conversion Flow Library",["Navigation"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Conversion Flow Library",["Pricing Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Conversion Flow Library",["Testimonial Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Accordions"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Blog Cards"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Call to Actions"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Contact Forms"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Content Cards"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Content Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Dropdowns"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Ecommerce Cards"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Footers"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Galleries"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Headers"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Heros"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Logo Strips"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Pricing Cards"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Stats"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Team Members"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Testimonials"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Elements Webflow Library",["Top Bars"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["404"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["Blog"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["CTA"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["Contact Us"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["Cookie"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["FAQ"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["Feature"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["Footer"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["Hero"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["Logo"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["Navbar"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["Pricing"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["Privacy Policy"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["Solution Cards"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Flow Library",["Testimonials"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Account"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Banner"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["CTA"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Career"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Contact"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Content"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Feature"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Footer"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Gallery"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Header"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Logo"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Navigation"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Pricing"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Testimonial"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Utility / Accordian"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Utility / Alert"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Utility / Avatar"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Utility / Breadcrumb"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Utility / Button"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Utility / Checkbox, Radio & Toggle"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Utility / Dropdown"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Utility / Input Field"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Utility / Interaction"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Utility / Modal"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["FlowUI - Component Library",["Utility / Tab"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Lynx",["Call to action"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Lynx",["Clients"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Lynx",["FAQ"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Lynx",["Feature"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Lynx",["Footer"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Lynx",["Hero"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Lynx",["Navbar"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Lynx",["Pricing"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Lynx",["Process"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Lynx",["Productivity"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Lynx",["Testimonials"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Banners"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Blog Header Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Blog Posts"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Blog Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["CTA Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Client-First Structure"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Contact Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["FAQ Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Feature Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Footers"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Gallery Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Header Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Logo Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Navbars"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Pricing Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Style Guide"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Team Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Relume Library Lite",["Testimonial Sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Starter library",["Features"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Starter library",["Footer"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Starter library",["Gallery"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Starter library",["Hero"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Starter library",["Logos"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Starter library",["Navigation"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Starter library",["Pricing"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Starter library",["Team"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Starter library",["Testimonial"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Banners"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Blog page headers"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Blog posts"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Blog sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["CTA sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Careers sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Contact sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["FAQ sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Features sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Footers"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Header sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Hero header sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Logos sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Navbars"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Pricing sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Team sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Untitled UI",["Testimonial sections"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["Waves Library",["Top Bars"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["uDesign Components",["CTA"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["uDesign Components",["Cards"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["uDesign Components",["FAQ"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["uDesign Components",["Footer"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["uDesign Components",["Hero"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["uDesign Components",["Navbar"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.addTabVisibilityStates.{"type":"fromLibrary","val":["uDesign Components",["Pricing"]]}** | `boolean` | No description | ❌ |
| **site.persistentUIState.auditResultsIgnored** | `array` | No description | ❌ |
| **site.persistentUIState.auditResultsRead** | `array` | No description | ❌ |
| **site.persistentUIState.logicLibraryVisibilityStates** | `object` | No description | ❌ |
| **site.persistentUIState.logicLibraryVisibilityStates.actions** | `boolean` | No description | ❌ |
| **site.persistentUIState.logicLibraryVisibilityStates.utilities** | `boolean` | No description | ❌ |
| **site.persistentUIState.numSiteVisit** | `integer` | No description | ❌ |
| **site.persistentUIState.pageSettingVisibilityStates** | `object` | No description | ❌ |
| **site.persistentUIState.pageSettingVisibilityStates.accessControl** | `boolean` | No description | ❌ |
| **site.persistentUIState.pageSettingVisibilityStates.custom** | `boolean` | No description | ❌ |
| **site.persistentUIState.pageSettingVisibilityStates.general** | `boolean` | No description | ❌ |
| **site.persistentUIState.pageSettingVisibilityStates.graph** | `boolean` | No description | ❌ |
| **site.persistentUIState.pageSettingVisibilityStates.publish** | `boolean` | No description | ❌ |
| **site.persistentUIState.pageSettingVisibilityStates.rss** | `boolean` | No description | ❌ |
| **site.persistentUIState.pageSettingVisibilityStates.search** | `boolean` | No description | ❌ |
| **site.persistentUIState.pageSettingVisibilityStates.seo** | `boolean` | No description | ❌ |
| **site.persistentUIState.pageVisibilityStates** | `object` | No description | ❌ |
| **site.persistentUIState.pageVisibilityStates.cms** | `boolean` | No description | ❌ |
| **site.persistentUIState.pageVisibilityStates.ecommerce** | `boolean` | No description | ❌ |
| **site.persistentUIState.pageVisibilityStates.publish** | `boolean` | No description | ❌ |
| **site.persistentUIState.pageVisibilityStates.static** | `boolean` | No description | ❌ |
| **site.persistentUIState.pageVisibilityStates.user** | `boolean` | No description | ❌ |
| **site.persistentUIState.pageVisibilityStates.utility** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates** | `object` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.__focusMode__** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.backgrounds** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.borders** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.bordersAdvanced** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.effects** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.expandedCss** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.flexAlignAdvanced** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.flexChild** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.flexChildAdvanced** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.gridAlignAdvanced** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.gridItem** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.layout** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.listItem** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.position** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.positionAdvanced** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.size** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.spacing** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.typography** | `boolean` | No description | ❌ |
| **site.persistentUIState.stylePanelVisibilityStates.typographyAdvanced** | `boolean` | No description | ❌ |
| **site.previewId** | `unknown` | No description | ❌ |
| **site.previewUrl** | `string` | No description | ❌ |
| **site.previewUrlSm** | `string` | No description | ❌ |
| **site.public** | `boolean` | No description | ❌ |
| **site.recaptchaRequired** | `boolean` | No description | ❌ |
| **site.recaptchaSecretKey** | `unknown` | No description | ❌ |
| **site.recaptchaSiteKey** | `unknown` | No description | ❌ |
| **site.responsiveImages** | `boolean` | No description | ❌ |
| **site.searchIndexShard** | `string` | No description | ❌ |
| **site.searchIndexSlice** | `string` | No description | ❌ |
| **site.shortName** | `string` | No description | ❌ |
| **site.siteCredits** | `array` | No description | ❌ |
| **site.siteCredits.items** | `object` | Contains the structure for array items | ❌ |
| **site.siteCredits.items.id** | `string` | No description | ❌ |
| **site.siteCredits.items.type** | `string` | No description | ❌ |
| **site.siteFileDependenciesInitialized** | `boolean` | No description | ❌ |
| **site.siteSpecificAccess** | `boolean` | No description | ❌ |
| **site.sslHosting** | `boolean` | No description | ❌ |
| **site.styleCount** | `integer` | No description | ❌ |
| **site.styleOps** | `integer` | No description | ❌ |
| **site.template** | `unknown` | No description | ❌ |
| **site.templateOf** | `string` | No description | ❌ |
| **site.timezone** | `string` | No description | ❌ |
| **site.version** | `integer` | No description | ❌ |
| **site.webClipUrl** | `string` | No description | ❌ |
| **site.workspace** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Selected", {
  "site": {
    "__v": "<<type: integer, required: false>>",
    "_id": "<<type: string, required: false>>",
    "_status": {
      "code": "<<type: string, required: false>>",
      "lastChanged": "<<type: string, required: false>>"
    },
    "active": "<<type: boolean, required: false>>",
    "annotationCount": "<<type: integer, required: false>>",
    "apolloMaxRequestsPerSecond": "<<type: number, required: false>>",
    "archived": "<<type: boolean, required: false>>",
    "assetSize": "<<type: integer, required: false>>",
    "authStr": "<<type: unknown, required: false>>",
    "authUser": "<<type: unknown, required: false>>",
    "brandLogo": "<<type: unknown, required: false>>",
    "brandName": "<<type: unknown, required: false>>",
    "captchaPlugin": "<<type: string, required: false>>",
    "cloneOf": "<<type: string, required: false>>",
    "compiledAt": "<<type: unknown, required: false>>",
    "createdBy": "<<type: string, required: false>>",
    "createdOn": "<<type: string, required: false>>",
    "dashboardFolder": "<<type: unknown, required: false>>",
    "database": "<<type: string, required: false>>",
    "designTime": "<<type: integer, required: false>>",
    "dirty": "<<type: boolean, required: false>>",
    "domain": "<<type: string, required: false>>",
    "emailFormFromLabel": "<<type: unknown, required: false>>",
    "emailFormOptions": {
      "incSubInfo": "<<type: boolean, required: false>>",
      "incUnsubLink": "<<type: boolean, required: false>>"
    },
    "emailFormReplyTo": "<<type: unknown, required: false>>",
    "emailFormSubject": "<<type: unknown, required: false>>",
    "emailFormTarget": "<<type: string, required: false>>",
    "emailFormTemplate": "<<type: unknown, required: false>>",
    "exportCount": "<<type: integer, required: false>>",
    "exportedToStigg": "<<type: boolean, required: false>>",
    "faviconUrl": "<<type: string, required: false>>",
    "formFileLoginRequired": "<<type: boolean, required: false>>",
    "formSubmissions": "<<type: integer, required: false>>",
    "formsHaveBeenMigrated": "<<type: boolean, required: false>>",
    "hostingPlanName": "<<type: string, required: false>>",
    "indexPage": "<<type: string, required: false>>",
    "installedMarketplaceResources": [
      {
        "_id": "<<type: string, required: false>>",
        "installer": "<<type: string, required: false>>",
        "installerModel": "<<type: string, required: false>>",
        "resource": "<<type: string, required: false>>",
        "resourceModel": "<<type: string, required: false>>",
        "type": "<<type: string, required: false>>"
      }
    ],
    "isStagingPrivate": "<<type: boolean, required: false>>",
    "lastExport": "<<type: string, required: false>>",
    "lastFormInvoice": "<<type: string, required: false>>",
    "lastPublicationId": "<<type: unknown, required: false>>",
    "lastPublished": "<<type: unknown, required: false>>",
    "lastPublishedBy": "<<type: unknown, required: false>>",
    "lastSearchIndex": "<<type: unknown, required: false>>",
    "lastSearchIndexAuto": "<<type: unknown, required: false>>",
    "lastSearchIndexManual": "<<type: unknown, required: false>>",
    "lastSnapped": "<<type: string, required: false>>",
    "lastUpdated": "<<type: string, required: false>>",
    "lockDeletion": "<<type: boolean, required: false>>",
    "lockedReason": "<<type: unknown, required: false>>",
    "maxPages": "<<type: unknown, required: false>>",
    "name": "<<type: string, required: false>>",
    "newFormDatas": "<<type: integer, required: false>>",
    "oldPreviewId": "<<type: string, required: false>>",
    "pages": "<<type: array, required: false>>",
    "persistentUIState": {
      "addTabVisibilityStates": {
        "Basic": "<<type: boolean, required: false>>",
        "CMS": "<<type: boolean, required: false>>",
        "Components": "<<type: boolean, required: false>>",
        "Features": "<<type: boolean, required: false>>",
        "Footer": "<<type: boolean, required: false>>",
        "Forms": "<<type: boolean, required: false>>",
        "Gallery": "<<type: boolean, required: false>>",
        "Hero": "<<type: boolean, required: false>>",
        "Layout": "<<type: boolean, required: false>>",
        "Logos": "<<type: boolean, required: false>>",
        "Media": "<<type: boolean, required: false>>",
        "Pricing": "<<type: boolean, required: false>>",
        "Team": "<<type: boolean, required: false>>",
        "Testimonial": "<<type: boolean, required: false>>",
        "Typography": "<<type: boolean, required: false>>",
        "{\"type\":\"basic\",\"val\":\"Advanced\"}": "<<type: boolean, required: false>>",
        "{\"type\":\"basic\",\"val\":\"CMS\"}": "<<type: boolean, required: false>>",
        "{\"type\":\"basic\",\"val\":\"Ecommerce\"}": "<<type: boolean, required: false>>",
        "{\"type\":\"basic\",\"val\":\"Features\"}": "<<type: boolean, required: false>>",
        "{\"type\":\"basic\",\"val\":\"Forms\"}": "<<type: boolean, required: false>>",
        "{\"type\":\"basic\",\"val\":\"Gallery\"}": "<<type: boolean, required: false>>",
        "{\"type\":\"basic\",\"val\":\"Hero\"}": "<<type: boolean, required: false>>",
        "{\"type\":\"basic\",\"val\":\"Logos\"}": "<<type: boolean, required: false>>",
        "{\"type\":\"basic\",\"val\":\"Media\"}": "<<type: boolean, required: false>>",
        "{\"type\":\"basic\",\"val\":\"Navigation\"}": "<<type: boolean, required: false>>",
        "{\"type\":\"basic\",\"val\":\"Structure\"}": "<<type: boolean, required: false>>",
        "{\"type\":\"basic\",\"val\":\"Typography\"}": "<<type: boolean, required: false>>",
        "{\"type\":\"basic\",\"val\":\"Users\"}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Conversion Flow Library\",[\"Brand Section\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Conversion Flow Library\",[\"CTA Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Conversion Flow Library\",[\"Content Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Conversion Flow Library\",[\"FAQ Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Conversion Flow Library\",[\"Feature Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Conversion Flow Library\",[\"Footer Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Conversion Flow Library\",[\"Form Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Conversion Flow Library\",[\"Header Section\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Conversion Flow Library\",[\"Navigation\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Conversion Flow Library\",[\"Pricing Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Conversion Flow Library\",[\"Testimonial Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Accordions\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Blog Cards\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Call to Actions\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Contact Forms\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Content Cards\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Content Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Dropdowns\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Ecommerce Cards\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Footers\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Galleries\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Headers\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Heros\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Logo Strips\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Pricing Cards\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Stats\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Team Members\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Testimonials\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Elements Webflow Library\",[\"Top Bars\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"404\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"Blog\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"CTA\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"Contact Us\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"Cookie\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"FAQ\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"Feature\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"Footer\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"Hero\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"Logo\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"Navbar\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"Pricing\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"Privacy Policy\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"Solution Cards\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Flow Library\",[\"Testimonials\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Account\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Banner\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"CTA\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Career\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Contact\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Content\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Feature\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Footer\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Gallery\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Header\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Logo\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Navigation\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Pricing\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Testimonial\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Utility / Accordian\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Utility / Alert\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Utility / Avatar\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Utility / Breadcrumb\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Utility / Button\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Utility / Checkbox, Radio & Toggle\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Utility / Dropdown\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Utility / Input Field\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Utility / Interaction\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Utility / Modal\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"FlowUI - Component Library\",[\"Utility / Tab\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Lynx\",[\"Call to action\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Lynx\",[\"Clients\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Lynx\",[\"FAQ\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Lynx\",[\"Feature\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Lynx\",[\"Footer\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Lynx\",[\"Hero\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Lynx\",[\"Navbar\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Lynx\",[\"Pricing\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Lynx\",[\"Process\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Lynx\",[\"Productivity\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Lynx\",[\"Testimonials\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Banners\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Blog Header Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Blog Posts\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Blog Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"CTA Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Client-First Structure\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Contact Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"FAQ Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Feature Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Footers\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Gallery Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Header Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Logo Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Navbars\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Pricing Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Style Guide\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Team Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Relume Library Lite\",[\"Testimonial Sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Starter library\",[\"Features\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Starter library\",[\"Footer\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Starter library\",[\"Gallery\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Starter library\",[\"Hero\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Starter library\",[\"Logos\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Starter library\",[\"Navigation\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Starter library\",[\"Pricing\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Starter library\",[\"Team\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Starter library\",[\"Testimonial\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Banners\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Blog page headers\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Blog posts\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Blog sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"CTA sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Careers sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Contact sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"FAQ sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Features sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Footers\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Header sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Hero header sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Logos sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Navbars\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Pricing sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Team sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Untitled UI\",[\"Testimonial sections\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"Waves Library\",[\"Top Bars\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"uDesign Components\",[\"CTA\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"uDesign Components\",[\"Cards\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"uDesign Components\",[\"FAQ\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"uDesign Components\",[\"Footer\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"uDesign Components\",[\"Hero\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"uDesign Components\",[\"Navbar\"]]}": "<<type: boolean, required: false>>",
        "{\"type\":\"fromLibrary\",\"val\":[\"uDesign Components\",[\"Pricing\"]]}": "<<type: boolean, required: false>>"
      },
      "auditResultsIgnored": "<<type: array, required: false>>",
      "auditResultsRead": "<<type: array, required: false>>",
      "logicLibraryVisibilityStates": {
        "actions": "<<type: boolean, required: false>>",
        "utilities": "<<type: boolean, required: false>>"
      },
      "numSiteVisit": "<<type: integer, required: false>>",
      "pageSettingVisibilityStates": {
        "accessControl": "<<type: boolean, required: false>>",
        "custom": "<<type: boolean, required: false>>",
        "general": "<<type: boolean, required: false>>",
        "graph": "<<type: boolean, required: false>>",
        "publish": "<<type: boolean, required: false>>",
        "rss": "<<type: boolean, required: false>>",
        "search": "<<type: boolean, required: false>>",
        "seo": "<<type: boolean, required: false>>"
      },
      "pageVisibilityStates": {
        "cms": "<<type: boolean, required: false>>",
        "ecommerce": "<<type: boolean, required: false>>",
        "publish": "<<type: boolean, required: false>>",
        "static": "<<type: boolean, required: false>>",
        "user": "<<type: boolean, required: false>>",
        "utility": "<<type: boolean, required: false>>"
      },
      "stylePanelVisibilityStates": {
        "__focusMode__": "<<type: boolean, required: false>>",
        "backgrounds": "<<type: boolean, required: false>>",
        "borders": "<<type: boolean, required: false>>",
        "bordersAdvanced": "<<type: boolean, required: false>>",
        "effects": "<<type: boolean, required: false>>",
        "expandedCss": "<<type: boolean, required: false>>",
        "flexAlignAdvanced": "<<type: boolean, required: false>>",
        "flexChild": "<<type: boolean, required: false>>",
        "flexChildAdvanced": "<<type: boolean, required: false>>",
        "gridAlignAdvanced": "<<type: boolean, required: false>>",
        "gridItem": "<<type: boolean, required: false>>",
        "layout": "<<type: boolean, required: false>>",
        "listItem": "<<type: boolean, required: false>>",
        "position": "<<type: boolean, required: false>>",
        "positionAdvanced": "<<type: boolean, required: false>>",
        "size": "<<type: boolean, required: false>>",
        "spacing": "<<type: boolean, required: false>>",
        "typography": "<<type: boolean, required: false>>",
        "typographyAdvanced": "<<type: boolean, required: false>>"
      }
    },
    "previewId": "<<type: unknown, required: false>>",
    "previewUrl": "<<type: string, required: false>>",
    "previewUrlSm": "<<type: string, required: false>>",
    "public": "<<type: boolean, required: false>>",
    "recaptchaRequired": "<<type: boolean, required: false>>",
    "recaptchaSecretKey": "<<type: unknown, required: false>>",
    "recaptchaSiteKey": "<<type: unknown, required: false>>",
    "responsiveImages": "<<type: boolean, required: false>>",
    "searchIndexShard": "<<type: string, required: false>>",
    "searchIndexSlice": "<<type: string, required: false>>",
    "shortName": "<<type: string, required: false>>",
    "siteCredits": [
      {
        "id": "<<type: string, required: false>>",
        "type": "<<type: string, required: false>>"
      }
    ],
    "siteFileDependenciesInitialized": "<<type: boolean, required: false>>",
    "siteSpecificAccess": "<<type: boolean, required: false>>",
    "sslHosting": "<<type: boolean, required: false>>",
    "styleCount": "<<type: integer, required: false>>",
    "styleOps": "<<type: integer, required: false>>",
    "template": "<<type: unknown, required: false>>",
    "templateOf": "<<type: string, required: false>>",
    "timezone": "<<type: string, required: false>>",
    "version": "<<type: integer, required: false>>",
    "webClipUrl": "<<type: string, required: false>>",
    "workspace": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Settings Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Settings Page Viewed", {
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Specific Access Site Members Added

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **added user data** | `array` | No description | ❌ |
| **added user data.items** | `object` | Contains the structure for array items | ❌ |
| **added user data.items.canPublish** | `boolean` | No description | ❌ |
| **added user data.items.siteRole** | `string` | No description | ❌ |
| **added user data.items.userId** | `string` | No description | ❌ |
| **num of users added** | `integer` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Specific Access Site Members Added", {
  "added user data": [
    {
      "canPublish": "<<type: boolean, required: false>>",
      "siteRole": "<<type: string, required: false>>",
      "userId": "<<type: string, required: false>>"
    }
  ],
  "num of users added": "<<type: integer, required: false>>",
  "site id": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Specific Access Site Members Removed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **removed user id** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Specific Access Site Members Removed", {
  "removed user id": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Specific Access Value Updated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **new site specific access** | `boolean` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Specific Access Value Updated", {
  "new site specific access": "<<type: boolean, required: false>>",
  "site id": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Transfer Canceled

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Transfer Canceled", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Transfer Modal Canceled

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Transfer Modal Canceled", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Transfer Modal Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Transfer Modal Opened", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Transfer Modal Submitted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **tab** | `string` | No description | ❌ |
| **transfer email** | `string` | No description | ❌ |
| **transfer workspace id** | `string` | No description | ❌ |
| **transfer workspace slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Transfer Modal Submitted", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "tab": "<<type: string, required: false>>",
  "transfer email": "<<type: string, required: false>>",
  "transfer workspace id": "<<type: string, required: false>>",
  "transfer workspace slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Site Transfer Request Received

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **accept link** | `string` | No description | ❌ |
| **sender email** | `string` | No description | ❌ |
| **site name** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Transfer Request Received", {
  "accept link": "<<type: string, required: false>>",
  "sender email": "<<type: string, required: false>>",
  "site name": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Solution Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **article** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Solution Clicked", {
  "article": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Specific Access Bulk Value Updated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **new site specific access** | `boolean` | No description | ❌ |
| **updated sites count** | `integer` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Specific Access Bulk Value Updated", {
  "new site specific access": "<<type: boolean, required: false>>",
  "updated sites count": "<<type: integer, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Squarespace VS Page View

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Squarespace VS Page View", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Stripe Method Called

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **after** | `unknown` | No description | ❌ |
| **card** | `string` | No description | ❌ |
| **cus** | `string` | No description | ❌ |
| **function** | `string` | No description | ❌ |
| **id** | `string` | No description | ❌ |
| **lines** | `integer` | No description | ❌ |
| **method** | `string` | No description | ❌ |
| **ownerId** | `string` | No description | ❌ |
| **person_id** | `string` | No description | ❌ |
| **prorate** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **sub** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Stripe Method Called", {
  "after": "<<type: unknown, required: false>>",
  "card": "<<type: string, required: false>>",
  "cus": "<<type: string, required: false>>",
  "function": "<<type: string, required: false>>",
  "id": "<<type: string, required: false>>",
  "lines": "<<type: integer, required: false>>",
  "method": "<<type: string, required: false>>",
  "ownerId": "<<type: string, required: false>>",
  "person_id": "<<type: string, required: false>>",
  "prorate": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>",
  "sub": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Submit Request Cancelled

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Submit Request Cancelled", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Submit Request Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Submit Request Clicked", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Submit Request Confirmed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Submit Request Confirmed", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Submit a ticket clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **location** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Submit a ticket clicked", {
  "location": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Support Form Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Support Form Viewed", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Support Landing Page FAQ Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **link** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Support Landing Page FAQ Clicked", {
  "link": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Support Portal Incident Banner Displayed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **impact** | `string` | No description | ❌ |
| **incident** | `string` | No description | ❌ |
| **status** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Support Portal Incident Banner Displayed", {
  "impact": "<<type: string, required: false>>",
  "incident": "<<type: string, required: false>>",
  "status": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Support Portal Landing Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Support Portal Landing Page Viewed", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Survey Modal Closed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **is frequency survey** | `boolean` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan selected** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **survey type** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan selected** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Survey Modal Closed", {
  "is frequency survey": "<<type: boolean, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan selected": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "survey type": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan selected": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Survey Modal Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **is frequency survey** | `boolean` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **survey type** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Survey Modal Opened", {
  "is frequency survey": "<<type: boolean, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "survey type": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Survey Submitted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **comments** | `unknown` | No description | ❌ |
| **is frequency survey** | `boolean` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **reason frequency** | `array` | No description | ❌ |
| **reason noLongerNeedFeatures** | `array` | No description | ❌ |
| **reason siteDowngradeReason** | `array` | No description | ❌ |
| **reason workspaceDowngradeReason** | `array` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan selected** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **survey type** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan selected** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Survey Submitted", {
  "comments": "<<type: unknown, required: false>>",
  "is frequency survey": "<<type: boolean, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "reason frequency": "<<type: array, required: false>>",
  "reason noLongerNeedFeatures": "<<type: array, required: false>>",
  "reason siteDowngradeReason": "<<type: array, required: false>>",
  "reason workspaceDowngradeReason": "<<type: array, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan selected": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "survey type": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan selected": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## TS - Budget Option Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **budget** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("TS - Budget Option Selected", {
  "budget": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## TS - Calendly Interaction Triggered

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **calendly-event** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("TS - Calendly Interaction Triggered", {
  "calendly-event": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## TS - FAQ Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **question** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("TS - FAQ Opened", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "question": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## TS - FAQ Show More/Less Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **cta** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("TS - FAQ Show More/Less Clicked", {
  "cta": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## TS - Help Modal Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **cta-location** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("TS - Help Modal Opened", {
  "cta-location": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Tab Pressed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **tab** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Tab Pressed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "tab": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Detail Page - Image Carousel Scrolled

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **cta** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **template** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Detail Page - Image Carousel Scrolled", {
  "cta": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "template": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Detail Page - Preview CTA Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **cta** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **template** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Detail Page - Preview CTA Clicked", {
  "cta": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "template": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Item CTA Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **category** | `string` | No description | ❌ |
| **ref** | `array` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **template cost** | `integer` | No description | ❌ |
| **template id** | `string` | No description | ❌ |
| **template index** | `integer` | No description | ❌ |
| **template name** | `string` | No description | ❌ |
| **template selected position** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Item CTA Clicked", {
  "action": "<<type: string, required: false>>",
  "category": "<<type: string, required: false>>",
  "ref": "<<type: array, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "template cost": "<<type: integer, required: false>>",
  "template id": "<<type: string, required: false>>",
  "template index": "<<type: integer, required: false>>",
  "template name": "<<type: string, required: false>>",
  "template selected position": "<<type: integer, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Marketplace Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **loggedIn** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **params** | `string` | No description | ❌ |
| **price** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **template** | `string` | No description | ❌ |
| **template author** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Marketplace Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "loggedIn": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "params": "<<type: string, required: false>>",
  "price": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "template": "<<type: string, required: false>>",
  "template author": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Modal Purchased Checked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **checked** | `boolean` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Modal Purchased Checked", {
  "checked": "<<type: boolean, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Modal Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **category** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Modal Selected", {
  "category": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Search - Changed IFrame Breakpoint

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **changedToBreakpoint** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Search - Changed IFrame Breakpoint", {
  "changedToBreakpoint": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Search - Details link clicked in Image Popup

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Search - Details link clicked in Image Popup", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Search - Experiment Assigned

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **variant** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Search - Experiment Assigned", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "variant": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Search - IFrame Popup Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Search - IFrame Popup Opened", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Search - Iframe Opened from Image Popup

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Search - Iframe Opened from Image Popup", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Search - Image Popup Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Search - Image Popup Opened", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Search - In-line Carousel Scrolled

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **currentSlideIndex** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **nextSlideIndex** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Search - In-line Carousel Scrolled", {
  "currentSlideIndex": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "nextSlideIndex": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Search - Initial Search Submitted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **searchTerm** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Search - Initial Search Submitted", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "searchTerm": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Search - Next Page Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **currentPage** | `string` | No description | ❌ |
| **destinationPage** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Search - Next Page Clicked", {
  "currentPage": "<<type: string, required: false>>",
  "destinationPage": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Search - Updated Search Submitted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **updatedSearchTerm** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Search - Updated Search Submitted", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "updatedSearchTerm": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **template** | `unknown` | No description | ❌ |
| **template cost** | `string` | No description | ❌ |
| **template id** | `string` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Selected", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "template": "<<type: unknown, required: false>>",
  "template cost": "<<type: string, required: false>>",
  "template id": "<<type: string, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Services - Detail Toast Closed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Services - Detail Toast Closed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Services - Resource Link Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **resource** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Services - Resource Link Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "resource": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Services - Schedule CTA Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **cta-__cpLocation** | `string` | No description | ❌ |
| **cta-location** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **template-name** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Services - Schedule CTA Clicked", {
  "cta-__cpLocation": "<<type: string, required: false>>",
  "cta-location": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "template-name": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Services - Service Type Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **service-type** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Services - Service Type Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "service-type": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Upsell Toast - A/B Test Assigned

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **variant** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Upsell Toast - A/B Test Assigned", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "variant": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Ticket Created

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ticketId** | `integer` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Ticket Created", {
  "ticketId": "<<type: integer, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Typed in Swiftype Search

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Typed in Swiftype Search", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## University Course Completed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **course** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("University Course Completed", {
  "course": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## University Course Enrolled

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **course** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("University Course Enrolled", {
  "course": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## University Exam Failed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **exam id** | `string` | No description | ❌ |
| **exam title** | `string` | No description | ❌ |
| **score percentage** | `integer` | No description | ❌ |
| **session attempt** | `integer` | No description | ❌ |
| **session time** | `integer` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("University Exam Failed", {
  "exam id": "<<type: string, required: false>>",
  "exam title": "<<type: string, required: false>>",
  "score percentage": "<<type: integer, required: false>>",
  "session attempt": "<<type: integer, required: false>>",
  "session time": "<<type: integer, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## University Exam Passed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **exam id** | `string` | No description | ❌ |
| **exam title** | `string` | No description | ❌ |
| **score percentage** | `integer` | No description | ❌ |
| **session attempt** | `integer` | No description | ❌ |
| **session time** | `integer` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("University Exam Passed", {
  "exam id": "<<type: string, required: false>>",
  "exam title": "<<type: string, required: false>>",
  "score percentage": "<<type: integer, required: false>>",
  "session attempt": "<<type: integer, required: false>>",
  "session time": "<<type: integer, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## University Lesson Completed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **course** | `string` | No description | ❌ |
| **course progress** | `integer` | No description | ❌ |
| **lesson name** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **video id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("University Lesson Completed", {
  "course": "<<type: string, required: false>>",
  "course progress": "<<type: integer, required: false>>",
  "lesson name": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "video id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## University Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **loggedIn** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("University Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "loggedIn": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Update Payment Method Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **form context** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Update Payment Method Clicked", {
  "form context": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Update Payment Method Confirmed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **form context** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Update Payment Method Confirmed", {
  "form context": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Updated Email Notifications

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **account** | `unknown` | No description | ❌ |
| **blog** | `unknown` | No description | ❌ |
| **events** | `unknown` | No description | ❌ |
| **feature** | `unknown` | No description | ❌ |
| **followerUpdates** | `unknown` | No description | ❌ |
| **product** | `unknown` | No description | ❌ |
| **showcaseActivity** | `boolean` | No description | ❌ |
| **showcaseActivityWeekly** | `unknown` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Updated Email Notifications", {
  "account": "<<type: unknown, required: false>>",
  "blog": "<<type: unknown, required: false>>",
  "events": "<<type: unknown, required: false>>",
  "feature": "<<type: unknown, required: false>>",
  "followerUpdates": "<<type: unknown, required: false>>",
  "product": "<<type: unknown, required: false>>",
  "showcaseActivity": "<<type: boolean, required: false>>",
  "showcaseActivityWeekly": "<<type: unknown, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Updated Favicon

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Updated Favicon", {
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Updated Forms

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Updated Forms", {
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Updated Site Settings

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Updated Site Settings", {
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "source": "<<type: string, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Updated Webclip

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Updated Webclip", {
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Updated staging domain

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Updated staging domain", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Upgrade Modal Closed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **data** | `object` | No description | ❌ |
| **data.ref** | `string` | No description | ❌ |
| **data.upgradeType** | `string` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **name** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **upgradeType** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Upgrade Modal Closed", {
  "data": {
    "ref": "<<type: string, required: false>>",
    "upgradeType": "<<type: string, required: false>>"
  },
  "legacy team id": "<<type: string, required: false>>",
  "name": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "upgradeType": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Upgrade Modal Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **data** | `object` | No description | ❌ |
| **data.ref** | `string` | No description | ❌ |
| **data.upgradeType** | `string` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **name** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **upgradeType** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Upgrade Modal Opened", {
  "data": {
    "ref": "<<type: string, required: false>>",
    "upgradeType": "<<type: string, required: false>>"
  },
  "legacy team id": "<<type: string, required: false>>",
  "name": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "upgradeType": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Upgrade Modal Workspace Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **data** | `object` | No description | ❌ |
| **data.manageableSites** | `integer` | No description | ❌ |
| **data.ref** | `string` | No description | ❌ |
| **data.upgradeType** | `string` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **manageable sites** | `integer` | No description | ❌ |
| **manageableSites** | `integer` | No description | ❌ |
| **name** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **upgradeType** | `string` | No description | ❌ |
| **workspace** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Upgrade Modal Workspace Selected", {
  "data": {
    "manageableSites": "<<type: integer, required: false>>",
    "ref": "<<type: string, required: false>>",
    "upgradeType": "<<type: string, required: false>>"
  },
  "legacy team id": "<<type: string, required: false>>",
  "manageable sites": "<<type: integer, required: false>>",
  "manageableSites": "<<type: integer, required: false>>",
  "name": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "upgradeType": "<<type: string, required: false>>",
  "workspace": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Upgraded plan

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **city** | `string` | No description | ❌ |
| **client work** | `array` | No description | ❌ |
| **country** | `string` | No description | ❌ |
| **email** | `string` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **plan** | `unknown` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **transactionId** | `string` | No description | ❌ |
| **userAgent** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Upgraded plan", {
  "city": "<<type: string, required: false>>",
  "client work": "<<type: array, required: false>>",
  "country": "<<type: string, required: false>>",
  "email": "<<type: string, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "plan": "<<type: unknown, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "transactionId": "<<type: string, required: false>>",
  "userAgent": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## User Systems Enabled

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **siteId** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("User Systems Enabled", {
  "siteId": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## User Systems User CSV Imported

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **siteId** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("User Systems User CSV Imported", {
  "siteId": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Verified Account

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Verified Account", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Verified Secondary Email

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Verified Secondary Email", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Visit 404 Page

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **source** | `unknown` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Visit 404 Page", {
  "source": "<<type: unknown, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Visit Customers Page

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **source** | `unknown` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Visit Customers Page", {
  "source": "<<type: unknown, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Visit Workspace Profile

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **designer** | `string` | No description | ❌ |
| **hasTestimonials** | `boolean` | No description | ❌ |
| **isExpert** | `boolean` | No description | ❌ |
| **isOwnProfile** | `boolean` | No description | ❌ |
| **numShowcasedSites** | `integer` | No description | ❌ |
| **param/edit** | `string` | No description | ❌ |
| **param<br** | `string` | No description | ❌ |
| **paramBvred** | `string` | No description | ❌ |
| **paramDarkschemeovr** | `string` | No description | ❌ |
| **paramDescriptionFromFileType** | `string` | No description | ❌ |
| **paramEdit** | `string` | No description | ❌ |
| **paramFbclid** | `string` | No description | ❌ |
| **paramGad_source** | `string` | No description | ❌ |
| **paramGclid** | `string` | No description | ❌ |
| **paramGidzl** | `string` | No description | ❌ |
| **paramGspk** | `string` | No description | ❌ |
| **paramGsxid** | `string` | No description | ❌ |
| **paramLtclid** | `string` | No description | ❌ |
| **paramMbstx** | `string` | No description | ❌ |
| **paramMkt_tok** | `string` | No description | ❌ |
| **paramMode** | `string` | No description | ❌ |
| **paramNbcs** | `string` | No description | ❌ |
| **paramOikm** | `string` | No description | ❌ |
| **paramPs_partner** | `string` | No description | ❌ |
| **paramPs_partner_key** | `string` | No description | ❌ |
| **paramPs_xid** | `string` | No description | ❌ |
| **paramRef** | `string` | No description | ❌ |
| **paramReferrer** | `string` | No description | ❌ |
| **paramResubmit** | `string` | No description | ❌ |
| **paramRfsn** | `string` | No description | ❌ |
| **paramRoutes** | `array` | No description | ❌ |
| **paramS** | `string` | No description | ❌ |
| **paramSid1** | `string` | No description | ❌ |
| **paramSlug** | `string` | No description | ❌ |
| **paramSource** | `string` | No description | ❌ |
| **paramSpm** | `string` | No description | ❌ |
| **paramStatus** | `string` | No description | ❌ |
| **paramTest1** | `string` | No description | ❌ |
| **paramTest2** | `string` | No description | ❌ |
| **paramTrk** | `string` | No description | ❌ |
| **paramUtm_adgroup** | `string` | No description | ❌ |
| **paramUtm_adname** | `string` | No description | ❌ |
| **paramUtm_camapign** | `string` | No description | ❌ |
| **paramUtm_campaign** | `string` | No description | ❌ |
| **paramUtm_content** | `string` | No description | ❌ |
| **paramUtm_medium** | `array` | No description | ❌ |
| **paramUtm_source** | `string` | No description | ❌ |
| **paramUtm_term** | `string` | No description | ❌ |
| **paramUybv** | `string` | No description | ❌ |
| **paramVia** | `string` | No description | ❌ |
| **paramZarsrc** | `string` | No description | ❌ |
| **param_se** | `string` | No description | ❌ |
| **param_x_tr_hist** | `string` | No description | ❌ |
| **profileId** | `string` | No description | ❌ |
| **profileName** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **referrer** | `unknown` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Visit Workspace Profile", {
  "designer": "<<type: string, required: false>>",
  "hasTestimonials": "<<type: boolean, required: false>>",
  "isExpert": "<<type: boolean, required: false>>",
  "isOwnProfile": "<<type: boolean, required: false>>",
  "numShowcasedSites": "<<type: integer, required: false>>",
  "param/edit": "<<type: string, required: false>>",
  "param<br": "<<type: string, required: false>>",
  "paramBvred": "<<type: string, required: false>>",
  "paramDarkschemeovr": "<<type: string, required: false>>",
  "paramDescriptionFromFileType": "<<type: string, required: false>>",
  "paramEdit": "<<type: string, required: false>>",
  "paramFbclid": "<<type: string, required: false>>",
  "paramGad_source": "<<type: string, required: false>>",
  "paramGclid": "<<type: string, required: false>>",
  "paramGidzl": "<<type: string, required: false>>",
  "paramGspk": "<<type: string, required: false>>",
  "paramGsxid": "<<type: string, required: false>>",
  "paramLtclid": "<<type: string, required: false>>",
  "paramMbstx": "<<type: string, required: false>>",
  "paramMkt_tok": "<<type: string, required: false>>",
  "paramMode": "<<type: string, required: false>>",
  "paramNbcs": "<<type: string, required: false>>",
  "paramOikm": "<<type: string, required: false>>",
  "paramPs_partner": "<<type: string, required: false>>",
  "paramPs_partner_key": "<<type: string, required: false>>",
  "paramPs_xid": "<<type: string, required: false>>",
  "paramRef": "<<type: string, required: false>>",
  "paramReferrer": "<<type: string, required: false>>",
  "paramResubmit": "<<type: string, required: false>>",
  "paramRfsn": "<<type: string, required: false>>",
  "paramRoutes": "<<type: array, required: false>>",
  "paramS": "<<type: string, required: false>>",
  "paramSid1": "<<type: string, required: false>>",
  "paramSlug": "<<type: string, required: false>>",
  "paramSource": "<<type: string, required: false>>",
  "paramSpm": "<<type: string, required: false>>",
  "paramStatus": "<<type: string, required: false>>",
  "paramTest1": "<<type: string, required: false>>",
  "paramTest2": "<<type: string, required: false>>",
  "paramTrk": "<<type: string, required: false>>",
  "paramUtm_adgroup": "<<type: string, required: false>>",
  "paramUtm_adname": "<<type: string, required: false>>",
  "paramUtm_camapign": "<<type: string, required: false>>",
  "paramUtm_campaign": "<<type: string, required: false>>",
  "paramUtm_content": "<<type: string, required: false>>",
  "paramUtm_medium": "<<type: array, required: false>>",
  "paramUtm_source": "<<type: string, required: false>>",
  "paramUtm_term": "<<type: string, required: false>>",
  "paramUybv": "<<type: string, required: false>>",
  "paramVia": "<<type: string, required: false>>",
  "paramZarsrc": "<<type: string, required: false>>",
  "param_se": "<<type: string, required: false>>",
  "param_x_tr_hist": "<<type: string, required: false>>",
  "profileId": "<<type: string, required: false>>",
  "profileName": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "referrer": "<<type: unknown, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Webflow status page clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Webflow status page clicked", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Website Form Submitted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **button CTA** | `string` | No description | ❌ |
| **button action and type** | `string` | No description | ❌ |
| **company** | `string` | No description | ❌ |
| **company size** | `string` | No description | ❌ |
| **consent** | `unknown` | No description | ❌ |
| **country** | `string` | No description | ❌ |
| **email** | `string` | No description | ❌ |
| **first name** | `string` | No description | ❌ |
| **form name** | `string` | No description | ❌ |
| **last name** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **message** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **phone** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **title** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Website Form Submitted", {
  "button CTA": "<<type: string, required: false>>",
  "button action and type": "<<type: string, required: false>>",
  "company": "<<type: string, required: false>>",
  "company size": "<<type: string, required: false>>",
  "consent": "<<type: unknown, required: false>>",
  "country": "<<type: string, required: false>>",
  "email": "<<type: string, required: false>>",
  "first name": "<<type: string, required: false>>",
  "form name": "<<type: string, required: false>>",
  "last name": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "message": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "phone": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "title": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Website Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **btnError** | `unknown` | No description | ❌ |
| **btnVersion** | `string` | No description | ❌ |
| **headerError** | `unknown` | No description | ❌ |
| **headerVersion** | `string` | No description | ❌ |
| **hero** | `unknown` | No description | ❌ |
| **heroError** | `unknown` | No description | ❌ |
| **heroVersion** | `string` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **loggedIn** | `boolean` | No description | ❌ |
| **modalVersion** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **signupError** | `unknown` | No description | ❌ |
| **signupVersion** | `string` | No description | ❌ |
| **site id** | `unknown` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **version** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Website Viewed", {
  "btnError": "<<type: unknown, required: false>>",
  "btnVersion": "<<type: string, required: false>>",
  "headerError": "<<type: unknown, required: false>>",
  "headerVersion": "<<type: string, required: false>>",
  "hero": "<<type: unknown, required: false>>",
  "heroError": "<<type: unknown, required: false>>",
  "heroVersion": "<<type: string, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "loggedIn": "<<type: boolean, required: false>>",
  "modalVersion": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "ref": "<<type: string, required: false>>",
  "signupError": "<<type: unknown, required: false>>",
  "signupVersion": "<<type: string, required: false>>",
  "site id": "<<type: unknown, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "source": "<<type: string, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "version": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Words Translated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **contentSource** | `string` | No description | ❌ |
| **siteId** | `string` | No description | ❌ |
| **sourceLang** | `string` | No description | ❌ |
| **targetLang** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **wordsTranslated** | `integer` | No description | ❌ |
| **workspaceId** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Words Translated", {
  "contentSource": "<<type: string, required: false>>",
  "siteId": "<<type: string, required: false>>",
  "sourceLang": "<<type: string, required: false>>",
  "targetLang": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "wordsTranslated": "<<type: integer, required: false>>",
  "workspaceId": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Workspace Commenter Signup

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Commenter Signup", {
  "ref": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Workspace Invitation Accepted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **recipient role** | `string` | No description | ❌ |
| **recipient site role** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace invite id** | `string` | No description | ❌ |
| **workspace name** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Invitation Accepted", {
  "recipient role": "<<type: string, required: false>>",
  "recipient site role": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace invite id": "<<type: string, required: false>>",
  "workspace name": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Workspace Invitation Canceled

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **email** | `string` | No description | ❌ |
| **recipient role** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace invite id** | `string` | No description | ❌ |
| **workspace name** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Invitation Canceled", {
  "email": "<<type: string, required: false>>",
  "recipient role": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace invite id": "<<type: string, required: false>>",
  "workspace name": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Workspace Invitation Declined

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **recipient role** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace invite id** | `string` | No description | ❌ |
| **workspace name** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Invitation Declined", {
  "recipient role": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace invite id": "<<type: string, required: false>>",
  "workspace name": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Workspace Invitation Sent

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **can publish** | `boolean` | No description | ❌ |
| **email** | `string` | No description | ❌ |
| **invitation link** | `string` | No description | ❌ |
| **inviter name** | `string` | No description | ❌ |
| **recipient role** | `string` | No description | ❌ |
| **site role** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace invite id** | `string` | No description | ❌ |
| **workspace name** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Invitation Sent", {
  "can publish": "<<type: boolean, required: false>>",
  "email": "<<type: string, required: false>>",
  "invitation link": "<<type: string, required: false>>",
  "inviter name": "<<type: string, required: false>>",
  "recipient role": "<<type: string, required: false>>",
  "site role": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace invite id": "<<type: string, required: false>>",
  "workspace name": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Workspace Member Removed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **method** | `string` | No description | ❌ |
| **role** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace name** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Member Removed", {
  "method": "<<type: string, required: false>>",
  "role": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace name": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Workspace Plan Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **primary upgrade source** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **tab** | `string` | No description | ❌ |
| **upgrade prompt** | `string` | No description | ❌ |
| **upgrade source page** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Plan Page Viewed", {
  "primary upgrade source": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "tab": "<<type: string, required: false>>",
  "upgrade prompt": "<<type: string, required: false>>",
  "upgrade source page": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Workspace Profile Image Updated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Profile Image Updated", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Workspace Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **workspace** | `object` | No description | ❌ |
| **workspace._id** | `string` | No description | ❌ |
| **workspace.billingTarget** | `string` | No description | ❌ |
| **workspace.createdOn** | `string` | No description | ❌ |
| **workspace.location** | `object` | No description | ❌ |
| **workspace.location.city** | `string` | No description | ❌ |
| **workspace.location.country** | `string` | No description | ❌ |
| **workspace.name** | `string` | No description | ❌ |
| **workspace.profileImg** | `string` | No description | ❌ |
| **workspace.profileSlug** | `string` | No description | ❌ |
| **workspace.profileVisibility** | `string` | No description | ❌ |
| **workspace.role** | `string` | No description | ❌ |
| **workspace.siteCount** | `integer` | No description | ❌ |
| **workspace.slug** | `string` | No description | ❌ |
| **workspace.updatedOn** | `string` | No description | ❌ |
| **workspace.usedSeats** | `integer` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Selected", {
  "workspace": {
    "_id": "<<type: string, required: false>>",
    "billingTarget": "<<type: string, required: false>>",
    "createdOn": "<<type: string, required: false>>",
    "location": {
      "city": "<<type: string, required: false>>",
      "country": "<<type: string, required: false>>"
    },
    "name": "<<type: string, required: false>>",
    "profileImg": "<<type: string, required: false>>",
    "profileSlug": "<<type: string, required: false>>",
    "profileVisibility": "<<type: string, required: false>>",
    "role": "<<type: string, required: false>>",
    "siteCount": "<<type: integer, required: false>>",
    "slug": "<<type: string, required: false>>",
    "updatedOn": "<<type: string, required: false>>",
    "usedSeats": "<<type: integer, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Workspace Settings Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Settings Page Viewed", {
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## enrichment_provider

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **email** | `unknown` | No description | ❌ |
| **product** | `unknown` | No description | ❌ |
| **type** | `unknown` | No description | ❌ |
#### **JS**

```javascript
analytics.track("enrichment_provider", {
  "email": "<<type: unknown, required: false>>",
  "product": "<<type: unknown, required: false>>",
  "type": "<<type: unknown, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## test

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("test", {})
```

<!-- tabs:end -->

<!-- panels:end -->
