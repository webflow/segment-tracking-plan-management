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


## AI Site Builder Site Initialized

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **prompt** | `string` | No description | ❌ |
| **section categories** | `array` | No description | ❌ |
| **section count** | `integer` | No description | ❌ |
| **sections** | `object` | No description | ❌ |
| **sections.career** | `string` | No description | ❌ |
| **sections.contact** | `string` | No description | ❌ |
| **sections.content feed** | `string` | No description | ❌ |
| **sections.content header** | `string` | No description | ❌ |
| **sections.cta** | `string` | No description | ❌ |
| **sections.event feed** | `string` | No description | ❌ |
| **sections.faq** | `string` | No description | ❌ |
| **sections.feature** | `string` | No description | ❌ |
| **sections.footer** | `string` | No description | ❌ |
| **sections.gallery** | `string` | No description | ❌ |
| **sections.hero** | `string` | No description | ❌ |
| **sections.logo** | `string` | No description | ❌ |
| **sections.metrics** | `string` | No description | ❌ |
| **sections.nav** | `string` | No description | ❌ |
| **sections.pricing** | `string` | No description | ❌ |
| **sections.team** | `string` | No description | ❌ |
| **sections.testimonial** | `string` | No description | ❌ |
| **siteId** | `string` | No description | ❌ |
| **siteName** | `string` | No description | ❌ |
| **theme** | `object` | No description | ❌ |
| **theme.buttonPackId** | `string` | No description | ❌ |
| **theme.cardPackId** | `string` | No description | ❌ |
| **theme.colorPackId** | `string` | No description | ❌ |
| **theme.containerPackId** | `string` | No description | ❌ |
| **theme.fontPackId** | `string` | No description | ❌ |
| **theme.formPackId** | `string` | No description | ❌ |
| **theme.imagePackId** | `string` | No description | ❌ |
| **theme.roundnessPackId** | `string` | No description | ❌ |
| **theme.sectionVariancePackId** | `string` | No description | ❌ |
| **theme.spacingPackId** | `string` | No description | ❌ |
| **theme.tonePackId** | `string` | No description | ❌ |
| **theme.typographyPackId** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("AI Site Builder Site Initialized", {
  "prompt": "<<type: string, required: false>>",
  "section categories": "<<type: array, required: false>>",
  "section count": "<<type: integer, required: false>>",
  "sections": {
    "career": "<<type: string, required: false>>",
    "contact": "<<type: string, required: false>>",
    "content feed": "<<type: string, required: false>>",
    "content header": "<<type: string, required: false>>",
    "cta": "<<type: string, required: false>>",
    "event feed": "<<type: string, required: false>>",
    "faq": "<<type: string, required: false>>",
    "feature": "<<type: string, required: false>>",
    "footer": "<<type: string, required: false>>",
    "gallery": "<<type: string, required: false>>",
    "hero": "<<type: string, required: false>>",
    "logo": "<<type: string, required: false>>",
    "metrics": "<<type: string, required: false>>",
    "nav": "<<type: string, required: false>>",
    "pricing": "<<type: string, required: false>>",
    "team": "<<type: string, required: false>>",
    "testimonial": "<<type: string, required: false>>"
  },
  "siteId": "<<type: string, required: false>>",
  "siteName": "<<type: string, required: false>>",
  "theme": {
    "buttonPackId": "<<type: string, required: false>>",
    "cardPackId": "<<type: string, required: false>>",
    "colorPackId": "<<type: string, required: false>>",
    "containerPackId": "<<type: string, required: false>>",
    "fontPackId": "<<type: string, required: false>>",
    "formPackId": "<<type: string, required: false>>",
    "imagePackId": "<<type: string, required: false>>",
    "roundnessPackId": "<<type: string, required: false>>",
    "sectionVariancePackId": "<<type: string, required: false>>",
    "spacingPackId": "<<type: string, required: false>>",
    "tonePackId": "<<type: string, required: false>>",
    "typographyPackId": "<<type: string, required: false>>"
  },
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## AI Site Generator Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **AISBExperimentVariant** | `string` | No description | ❌ |
| **enabledAISiteGenViaMarketingSite** | `boolean` | No description | ❌ |
| **isInAiSiteGenFlag** | `boolean` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **shouldShowAISiteGenOption** | `boolean` | No description | ❌ |
#### **JS**

```javascript
analytics.track("AI Site Generator Selected", {
  "AISBExperimentVariant": "<<type: string, required: false>>",
  "enabledAISiteGenViaMarketingSite": "<<type: boolean, required: false>>",
  "isInAiSiteGenFlag": "<<type: boolean, required: false>>",
  "ref": "<<type: string, required: false>>",
  "shouldShowAISiteGenOption": "<<type: boolean, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## AIDA ENT Workspace Beta Agreement Accepted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("AIDA ENT Workspace Beta Agreement Accepted", {
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Accordion Interaction

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **element_type** | `string` | No description | ❌ |
| **path** | `string` | No description | ❌ |
| **title** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Accordion Interaction", {
  "action": "<<type: string, required: false>>",
  "element_type": "<<type: string, required: false>>",
  "path": "<<type: string, required: false>>",
  "title": "<<type: string, required: false>>"
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

Account Login Succeeded.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **is 2FA** | `boolean` | No description | ❌ |
| **maintain 2FA 30 days** | `boolean,null` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **show password** | `boolean,null` | No description | ❌ |
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
  "maintain 2FA 30 days": "<<type: boolean,null, required: false>>",
  "page": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "show password": "<<type: boolean,null, required: false>>",
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Add Payment Method Clicked", {
  "form context": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Add a site plan Clicked

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
analytics.track("Add a site plan Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **name** | `string` | No description | ❌ |
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
  "name": "<<type: string, required: false>>",
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


## App Created

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **app description** | `string` | No description | ❌ |
| **app id** | `string` | No description | ❌ |
| **app name** | `string` | No description | ❌ |
| **has designer extension** | `boolean` | No description | ❌ |
| **has oauth application** | `boolean` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("App Created", {
  "app description": "<<type: string, required: false>>",
  "app id": "<<type: string, required: false>>",
  "app name": "<<type: string, required: false>>",
  "has designer extension": "<<type: boolean, required: false>>",
  "has oauth application": "<<type: boolean, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
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


## Banner Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **banner** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Banner Viewed", {
  "banner": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Billing Action Tracked

<!-- tabs:start -->
### **Details**

#### **Description**

Billing Action Tracked.
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
| **coupon** | `any` | No description | ❌ |
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
| **origin** | `string` | No description | ❌ |
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
  "coupon": "<<type: any, required: false>>",
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
  "origin": "<<type: string, required: false>>",
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
| **AISBExperimentVariant** | `string` | No description | ❌ |
| **enabledAISiteGenViaMarketingSite** | `boolean` | No description | ❌ |
| **isInAiSiteGenFlag** | `boolean` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **shouldShowAISiteGenOption** | `boolean` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Blank Site Selected", {
  "AISBExperimentVariant": "<<type: string, required: false>>",
  "enabledAISiteGenViaMarketingSite": "<<type: boolean, required: false>>",
  "isInAiSiteGenFlag": "<<type: boolean, required: false>>",
  "ref": "<<type: string, required: false>>",
  "shouldShowAISiteGenOption": "<<type: boolean, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Blog Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

Blog Viewed.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **category** | `string` | No description | ❌ |
| **created at** | `string,null` | No description | ❌ |
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
  "created at": "<<type: string,null, required: false>>",
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


## Bulk Redirect Imported

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **num_redirects** | `integer` | No description | ❌ |
| **site_id** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace_id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Bulk Redirect Imported", {
  "num_redirects": "<<type: integer, required: false>>",
  "site_id": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace_id": "<<type: string, required: false>>"
})
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


## CMS Link Clicked

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
analytics.track("CMS Link Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## CTA Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

CTA Clicked.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **button CTA** | `string` | No description | ❌ |
| **button action** | `string` | No description | ❌ |
| **button action and type** | `string` | No description | ❌ |
| **button cta** | `string` | No description | ❌ |
| **cities** | `array` | No description | ❌ |
| **countries** | `array` | No description | ❌ |
| **cta** | `string` | No description | ❌ |
| **currentStep** | `string` | No description | ❌ |
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
| **location** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **modal name** | `string` | No description | ❌ |
| **modal type** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **page section** | `string` | No description | ❌ |
| **page step** | `string` | No description | ❌ |
| **page type** | `string` | No description | ❌ |
| **position** | `string` | No description | ❌ |
| **position on page** | `string,null` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **scroll** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site ids** | `array` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **skills** | `array` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **sso** | `boolean` | No description | ❌ |
| **stepCount** | `integer` | No description | ❌ |
| **surface area** | `string` | No description | ❌ |
| **target** | `string` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **url** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "action": "<<type: string, required: false>>",
  "button CTA": "<<type: string, required: false>>",
  "button action": "<<type: string, required: false>>",
  "button action and type": "<<type: string, required: false>>",
  "button cta": "<<type: string, required: false>>",
  "cities": "<<type: array, required: false>>",
  "countries": "<<type: array, required: false>>",
  "cta": "<<type: string, required: false>>",
  "currentStep": "<<type: string, required: false>>",
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
  "location": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "modal name": "<<type: string, required: false>>",
  "modal type": "<<type: string, required: false>>",
  "page": "<<type: string, required: false>>",
  "page section": "<<type: string, required: false>>",
  "page step": "<<type: string, required: false>>",
  "page type": "<<type: string, required: false>>",
  "position": "<<type: string, required: false>>",
  "position on page": "<<type: string,null, required: false>>",
  "ref": "<<type: string, required: false>>",
  "scroll": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site ids": "<<type: array, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "skills": "<<type: array, required: false>>",
  "source": "<<type: string, required: false>>",
  "sso": "<<type: boolean, required: false>>",
  "stepCount": "<<type: integer, required: false>>",
  "surface area": "<<type: string, required: false>>",
  "target": "<<type: string, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "type": "<<type: string, required: false>>",
  "url": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Can't log in clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Can't log in clicked", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Card Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **description** | `string` | No description | ❌ |
| **destination** | `string` | No description | ❌ |
| **element_type** | `string` | No description | ❌ |
| **path** | `string` | No description | ❌ |
| **title** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Card Clicked", {
  "description": "<<type: string, required: false>>",
  "destination": "<<type: string, required: false>>",
  "element_type": "<<type: string, required: false>>",
  "path": "<<type: string, required: false>>",
  "title": "<<type: string, required: false>>"
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


## Chat with Webflow Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Chat with Webflow Clicked", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Checkout Address Autocomplete

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
| **value** | `object` | No description | ❌ |
| **value.city** | `string` | No description | ❌ |
| **value.country** | `string` | No description | ❌ |
| **value.line1** | `string` | No description | ❌ |
| **value.line2** | `string` | No description | ❌ |
| **value.name** | `string` | No description | ❌ |
| **value.postalCode** | `string` | No description | ❌ |
| **value.state** | `string` | No description | ❌ |
| **value.vat** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Checkout Address Autocomplete", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "value": {
    "city": "<<type: string, required: false>>",
    "country": "<<type: string, required: false>>",
    "line1": "<<type: string, required: false>>",
    "line2": "<<type: string, required: false>>",
    "name": "<<type: string, required: false>>",
    "postalCode": "<<type: string, required: false>>",
    "state": "<<type: string, required: false>>",
    "vat": "<<type: string, required: false>>"
  },
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Checkout Edit Payment Method Clicked

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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Checkout Edit Payment Method Clicked", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Checkout Modal Closed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **close reason** | `string` | No description | ❌ |
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "close reason": "<<type: string, required: false>>",
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **payment method status** | `string` | No description | ❌ |
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "payment method status": "<<type: string, required: false>>",
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **initial plan frequency** | `string` | No description | ❌ |
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace initial number of seats** | `integer` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace new addons** | `object` | No description | ❌ |
| **workspace new addons.full seat count** | `integer` | No description | ❌ |
| **workspace new addons.limited seat count** | `integer` | No description | ❌ |
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
  "initial plan frequency": "<<type: string, required: false>>",
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace initial number of seats": "<<type: integer, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace new addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Code Copied

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **content_preview** | `string` | No description | ❌ |
| **element_type** | `string` | No description | ❌ |
| **language** | `string` | No description | ❌ |
| **path** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Code Copied", {
  "content_preview": "<<type: string, required: false>>",
  "element_type": "<<type: string, required: false>>",
  "language": "<<type: string, required: false>>",
  "path": "<<type: string, required: false>>"
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


## Community forum Card Clicked

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
analytics.track("Community forum Card Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Connect a domain Clicked

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
analytics.track("Connect a domain Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Continue Button Clicked in Message

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Continue Button Clicked in Message", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Continue Button Clicked in Site & Workspace

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Continue Button Clicked in Site & Workspace", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Continue Button Clicked in Suggested Solutions

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **firewall** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Continue Button Clicked in Suggested Solutions", {
  "firewall": "<<type: string, required: false>>"
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


## Custom Role Created

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **base_role** | `string` | No description | ❌ |
| **role_id** | `string` | No description | ❌ |
| **role_name** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Custom Role Created", {
  "base_role": "<<type: string, required: false>>",
  "role_id": "<<type: string, required: false>>",
  "role_name": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Custom Role Deleted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **base_role** | `string` | No description | ❌ |
| **role_id** | `string` | No description | ❌ |
| **role_name** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Custom Role Deleted", {
  "base_role": "<<type: string, required: false>>",
  "role_id": "<<type: string, required: false>>",
  "role_name": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Custom Role Duplicate And Edit Button Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
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
analytics.track("Custom Role Duplicate And Edit Button Clicked", {
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": "<<type: object, required: false>>",
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


## Custom Role Edit Button Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Custom Role Edit Button Clicked", {
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Custom Role Modal Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **modal_type** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Custom Role Modal Opened", {
  "modal_type": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Custom Role Updated

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **base_role** | `string` | No description | ❌ |
| **role_id** | `string` | No description | ❌ |
| **role_name** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Custom Role Updated", {
  "base_role": "<<type: string, required: false>>",
  "role_id": "<<type: string, required: false>>",
  "role_name": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Dashboard Link Clicked Clicked

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
analytics.track("Dashboard Link Clicked Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Dashboard Sort Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **initial value** | `string` | No description | ❌ |
| **new value** | `string` | No description | ❌ |
| **site count** | `integer` | No description | ❌ |
| **user id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Dashboard Sort Selected", {
  "initial value": "<<type: string, required: false>>",
  "new value": "<<type: string, required: false>>",
  "site count": "<<type: integer, required: false>>",
  "user id": "<<type: string, required: false>>",
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


## Dashboard View Toggled

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **initial value** | `string` | No description | ❌ |
| **new value** | `string` | No description | ❌ |
| **site count** | `integer` | No description | ❌ |
| **user id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Dashboard View Toggled", {
  "initial value": "<<type: string, required: false>>",
  "new value": "<<type: string, required: false>>",
  "site count": "<<type: integer, required: false>>",
  "user id": "<<type: string, required: false>>",
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


## Dashboard Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

Dashboard Viewed.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **ref** | `string,null` | No description | ❌ |
| **section** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "ref": "<<type: string,null, required: false>>",
  "section": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "source": "<<type: string, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Delete CMS Modal Closed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Delete CMS Modal Opened", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Designer Link Clicked

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
analytics.track("Designer Link Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Designer Opened

<!-- tabs:start -->
### **Details**

#### **Description**

Designer Opened.
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
| **mode** | `string,null` | No description | ❌ |
| **num designer-teammates** | `integer` | No description | ❌ |
| **num editor-teammates** | `integer` | No description | ❌ |
| **num self-instances** | `integer` | No description | ❌ |
| **num total instances** | `integer` | No description | ❌ |
| **page count** | `integer` | No description | ❌ |
| **page id** | `string` | No description | ❌ |
| **plan** | `string` | No description | ❌ |
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
  "mode": "<<type: string,null, required: false>>",
  "num designer-teammates": "<<type: integer, required: false>>",
  "num editor-teammates": "<<type: integer, required: false>>",
  "num self-instances": "<<type: integer, required: false>>",
  "num total instances": "<<type: integer, required: false>>",
  "page count": "<<type: integer, required: false>>",
  "page id": "<<type: string, required: false>>",
  "plan": "<<type: string, required: false>>",
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


## Developer Docs Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Developer Docs Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "ref": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Developer docs Card Clicked

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
analytics.track("Developer docs Card Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Ecommerce Link Clicked

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
analytics.track("Ecommerce Link Clicked", {
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


## Edit Custom Code

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **custom code location** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Edit Custom Code", {
  "custom code location": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Editor Link Clicked

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
analytics.track("Editor Link Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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


## Endpoint URL Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **element_type** | `string` | No description | ❌ |
| **endpoint** | `string` | No description | ❌ |
| **path** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Endpoint URL Clicked", {
  "element_type": "<<type: string, required: false>>",
  "endpoint": "<<type: string, required: false>>",
  "path": "<<type: string, required: false>>"
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
| **suggested email used** | `boolean` | No description | ❌ |
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
  "suggested email used": "<<type: boolean, required: false>>",
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


## Enterprise Card Clicked

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
analytics.track("Enterprise Card Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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


## Find a Webflow Partner Clicked

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
analytics.track("Find a Webflow Partner Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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


## Firewall shown

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **firewall** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Firewall shown", {
  "firewall": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - About Clicked

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
analytics.track("Footer - About Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Become an Affiliate Clicked

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
analytics.track("Footer - Become an Affiliate Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Blog Clicked

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
analytics.track("Footer - Blog Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Careers Clicked

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
analytics.track("Footer - Careers Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Community Clicked

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
analytics.track("Footer - Community Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Cookie policy Clicked

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
analytics.track("Footer - Cookie policy Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Courses Clicked

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
analytics.track("Footer - Courses Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Developers Clicked

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
analytics.track("Footer - Developers Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Ebooks Clicked

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
analytics.track("Footer - Ebooks Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Facebook Clicked

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
analytics.track("Footer - Facebook Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Forum Clicked

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
analytics.track("Footer - Forum Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Hire designers Clicked

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
analytics.track("Footer - Hire designers Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Instagram Clicked

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
analytics.track("Footer - Instagram Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Made in Webflow Clicked

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
analytics.track("Footer - Made in Webflow Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Marketplace Clicked

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
analytics.track("Footer - Marketplace Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Privacy policy Clicked

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
analytics.track("Footer - Privacy policy Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Sitemap Clicked

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
analytics.track("Footer - Sitemap Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Status Clicked

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
analytics.track("Footer - Status Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Support Clicked

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
analytics.track("Footer - Support Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Terms of Service Clicked

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
analytics.track("Footer - Terms of Service Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - TikTok Clicked

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
analytics.track("Footer - TikTok Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - University Clicked

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
analytics.track("Footer - University Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - Wishlist Clicked

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
analytics.track("Footer - Wishlist Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - X Clicked

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
analytics.track("Footer - X Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer - YouTube Clicked

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
analytics.track("Footer - YouTube Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Footer -Dashboard Clicked

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
analytics.track("Footer -Dashboard Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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


## Get Started Clicked

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
analytics.track("Get Started Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Get Support Clicked

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
analytics.track("Get Support Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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


## Get support button hero clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Get support button hero clicked", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## GitHub Example Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **element_type** | `string` | No description | ❌ |
| **full_url** | `string` | No description | ❌ |
| **path** | `string` | No description | ❌ |
| **repository** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("GitHub Example Clicked", {
  "element_type": "<<type: string, required: false>>",
  "full_url": "<<type: string, required: false>>",
  "path": "<<type: string, required: false>>",
  "repository": "<<type: string, required: false>>"
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


## Help Center Article Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Add SEO title and meta description

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Add SEO title and meta description", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Add a calendar to your site with Calendly

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Add a calendar to your site with Calendly", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Add Google Fonts

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Add Google Fonts", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Animate an element while scrolling

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Animate an element while scrolling", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Background styles

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Background styles", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Bandwidth overview

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Bandwidth overview", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Build a sticky footer using flexbox

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Build a sticky footer using flexbox", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Buy a custom domain through Webflow

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Buy a custom domain through Webflow", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Center elements with flexbox

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Center elements with flexbox", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Classes

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Classes", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Code block

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Code block", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Collaborate in the Webflow Designer

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Collaborate in the Webflow Designer", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Collections overview

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Collections overview", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Components overview

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Components overview", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Configure taxes on Ecommerce orders

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Configure taxes on Ecommerce orders", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Connect a custom domain overview

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Connect a custom domain overview", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Connect a payment provider

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Connect a payment provider", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Control text wrapping and line breaking

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Control text wrapping and line breaking", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Create a sitemap in Webflow

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Create a sitemap in Webflow", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Create static page templates

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Create static page templates", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Create a custom accordion

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Create a custom accordion", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Custom code embed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Custom code embed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Custom code in head and body tags

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Custom code in head and body tags", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Custom dropdown menu

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Custom dropdown menu", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Date/time field

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Date/time field", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Drafted pages

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Drafted pages", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Embed Lottie animations

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Embed Lottie animations", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Flexbox

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Flexbox", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Form file upload

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Form file upload", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Forms overview

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Forms overview", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Google site verification

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Google site verification", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: HTML tags

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: HTML tags", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Image

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Image", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Image conversion tool

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Image conversion tool", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Image field

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Image field", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Import/export Collection content

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Import/export Collection content", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Inline text formatting

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Inline text formatting", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Intro to Webflow

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Intro to Webflow", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Intro to the Audit panel

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Intro to the Audit panel", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Intro to the Editor

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Intro to the Editor", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Intro to the Webflow Designer

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Intro to the Webflow Designer", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Intro to the box model

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Intro to the box model", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Lightbox

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Lightbox", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Localization overview

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Localization overview", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Logic sunset

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Logic sunset", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Make your site more accessible

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Make your site more accessible", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Manually connect a custom domain

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Manually connect a custom domain", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Map

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Map", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Migrate from WordPress to Webflow CMS

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Migrate from WordPress to Webflow CMS", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Multi-image field overview

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Multi-image field overview", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Navigator

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Navigator", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Overflow: hidden

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Overflow: hidden", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Overview of After Effects and Lottie in Webflow

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Overview of After Effects and Lottie in Webflow", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Page URLs

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Page URLs", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Prevent spam in form submissions

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Prevent spam in form submissions", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Quick Stack

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Quick Stack", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Set 301 redirects to maintain SEO ranking

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Set 301 redirects to maintain SEO ranking", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Spacing (margin and padding)

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Spacing (margin and padding)", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Transfer a site

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Transfer a site", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Triggers and animations

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Triggers and animations", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Troubleshoot issues in Webflow

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Troubleshoot issues in Webflow", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Update your Dashboard notification settings

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Update your Dashboard notification settings", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Upload custom fonts

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Upload custom fonts", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Using the Webflow AI Assistant for site design

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Using the Webflow AI Assistant for site design", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Webflow User Accounts overview

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Webflow User Accounts overview", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Webflow staging subdomain

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Webflow staging subdomain", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Article: Workspace roles and permissions

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Article: Workspace roles and permissions", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Category Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Category Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Clicked

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
analytics.track("Help Center Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Homepage

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Homepage", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Homepage Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Homepage Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Quick Help Viewed

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
analytics.track("Help Center Quick Help Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Search Results

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Search Results", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Search Results Viewed

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
analytics.track("Help Center Search Results Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Section Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Section Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Section: Billing and invoicing

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **redirect** | `boolean` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Help Center Section: Billing and invoicing", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "redirect": "<<type: boolean, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Help Center Viewed

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
analytics.track("Help Center Viewed", {
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


## Hosting Link Clicked

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
analytics.track("Hosting Link Clicked", {
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
| **contact sales qualified** | `boolean` | No description | ❌ |
| **cta** | `string` | No description | ❌ |
| **current month usage** | `integer` | No description | ❌ |
| **current plan id** | `string` | No description | ❌ |
| **feature notification type** | `string` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **location** | `string` | No description | ❌ |
| **occurrence** | `string` | No description | ❌ |
| **previous month usage** | `unknown` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site name** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **usage limit** | `integer` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
| **workspace_role** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("In-App Message CTA Clicked", {
  "action": "<<type: string, required: false>>",
  "contact sales qualified": "<<type: boolean, required: false>>",
  "cta": "<<type: string, required: false>>",
  "current month usage": "<<type: integer, required: false>>",
  "current plan id": "<<type: string, required: false>>",
  "feature notification type": "<<type: string, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "location": "<<type: string, required: false>>",
  "occurrence": "<<type: string, required: false>>",
  "previous month usage": "<<type: unknown, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site name": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "usage limit": "<<type: integer, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>",
  "workspace_role": "<<type: string, required: false>>"
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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

In-App Message Expired.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **__cpLocation** | `string` | No description | ❌ |
| **action** | `string` | No description | ❌ |
| **expiresAt** | `string,null` | No description | ❌ |
| **location** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("In-App Message Expired", {
  "__cpLocation": "<<type: string, required: false>>",
  "action": "<<type: string, required: false>>",
  "expiresAt": "<<type: string,null, required: false>>",
  "location": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## In-App Message Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **__cpLocation** | `string` | No description | ❌ |
| **action** | `string` | No description | ❌ |
| **cta** | `string` | No description | ❌ |
| **ids** | `array` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **location** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "__cpLocation": "<<type: string, required: false>>",
  "action": "<<type: string, required: false>>",
  "cta": "<<type: string, required: false>>",
  "ids": "<<type: array, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "location": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Interactions Link Clicked

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
analytics.track("Interactions Link Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Interactive Element Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

Interactive Element Clicked.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **controls** | `unknown` | No description | ❌ |
| **element_type** | `string` | No description | ❌ |
| **path** | `string` | No description | ❌ |
| **state** | `string,null` | No description | ❌ |
| **text** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Interactive Element Clicked", {
  "controls": "<<type: unknown, required: false>>",
  "element_type": "<<type: string, required: false>>",
  "path": "<<type: string, required: false>>",
  "state": "<<type: string,null, required: false>>",
  "text": "<<type: string, required: false>>"
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
| **item slug** | `string` | No description | ❌ |
| **last 4 digits** | `string` | No description | ❌ |
| **message** | `string` | No description | ❌ |
| **owner kind** | `string` | No description | ❌ |
| **plan name** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **treatment payment exp** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Invoice Charge Failed", {
  "attempt": "<<type: integer, required: false>>",
  "card type": "<<type: string, required: false>>",
  "item": "<<type: string, required: false>>",
  "item slug": "<<type: string, required: false>>",
  "last 4 digits": "<<type: string, required: false>>",
  "message": "<<type: string, required: false>>",
  "owner kind": "<<type: string, required: false>>",
  "plan name": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "treatment payment exp": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Invoice Payment Succeeded

<!-- tabs:start -->
### **Details**

#### **Description**

Invoice Payment Succeeded.
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
| **tax** | `integer,null` | No description | ❌ |
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
  "tax": "<<type: integer,null, required: false>>",
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


## Learn Clicked

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
analytics.track("Learn Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Legacy Plan Change Modal Closed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **selected plan id** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Legacy Plan Change Modal Closed", {
  "ref": "<<type: string, required: false>>",
  "selected plan id": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Legacy Plan Change Modal Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **selected plan id** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Legacy Plan Change Modal Opened", {
  "ref": "<<type: string, required: false>>",
  "selected plan id": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Library Action

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **adobe fonts count** | `integer` | No description | ❌ |
| **assets count** | `integer` | No description | ❌ |
| **blocked symbols count** | `integer` | No description | ❌ |
| **custom fonts count** | `integer` | No description | ❌ |
| **google fonts count** | `integer` | No description | ❌ |
| **installs count** | `integer` | No description | ❌ |
| **interactions count** | `integer` | No description | ❌ |
| **library id** | `string` | No description | ❌ |
| **library name** | `string` | No description | ❌ |
| **library type** | `string` | No description | ❌ |
| **library version id** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **symbols count** | `integer` | No description | ❌ |
| **variables count** | `integer` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Library Action", {
  "action": "<<type: string, required: false>>",
  "adobe fonts count": "<<type: integer, required: false>>",
  "assets count": "<<type: integer, required: false>>",
  "blocked symbols count": "<<type: integer, required: false>>",
  "custom fonts count": "<<type: integer, required: false>>",
  "google fonts count": "<<type: integer, required: false>>",
  "installs count": "<<type: integer, required: false>>",
  "interactions count": "<<type: integer, required: false>>",
  "library id": "<<type: string, required: false>>",
  "library name": "<<type: string, required: false>>",
  "library type": "<<type: string, required: false>>",
  "library version id": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "symbols count": "<<type: integer, required: false>>",
  "variables count": "<<type: integer, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
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


## Library Orphaned Content Recovered

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **components detached** | `integer` | No description | ❌ |
| **components updated** | `integer` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Library Orphaned Content Recovered", {
  "components detached": "<<type: integer, required: false>>",
  "components updated": "<<type: integer, required: false>>",
  "site id": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Logic Link Clicked

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
analytics.track("Logic Link Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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


## Marketplace - Apps Clicked

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
analytics.track("Marketplace - Apps Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace - Hire a Certified Partner Clicked

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
analytics.track("Marketplace - Hire a Certified Partner Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace - Libraries Clicked

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
analytics.track("Marketplace - Libraries Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace - Made in Webflow Clicked

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
analytics.track("Marketplace - Made in Webflow Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace - Overview Clicked

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
analytics.track("Marketplace - Overview Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace - Templates Clicked

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
analytics.track("Marketplace - Templates Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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
| **email** | `string` | No description | ❌ |
| **has subscription** | `boolean` | No description | ❌ |
| **id** | `string` | No description | ❌ |
| **install count** | `integer` | No description | ❌ |
| **installation location** | `string` | No description | ❌ |
| **lastUpdatedSite** | `string` | No description | ❌ |
| **lastUpdatedSiteName** | `string` | No description | ❌ |
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
  "email": "<<type: string, required: false>>",
  "has subscription": "<<type: boolean, required: false>>",
  "id": "<<type: string, required: false>>",
  "install count": "<<type: integer, required: false>>",
  "installation location": "<<type: string, required: false>>",
  "lastUpdatedSite": "<<type: string, required: false>>",
  "lastUpdatedSiteName": "<<type: string, required: false>>",
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
| **loggedIn** | `boolean` | No description | ❌ |
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
  "loggedIn": "<<type: boolean, required: false>>",
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
| **marketplace subscription id** | `string` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Checkout Created", {
  "marketplace order id": "<<type: string, required: false>>",
  "marketplace subscription id": "<<type: string, required: false>>",
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

Marketplace Checkout Redirect Page Viewed.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **resource id** | `string,null` | No description | ❌ |
| **resource type** | `string,null` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **surface area** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Marketplace Checkout Redirect Page Viewed", {
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "resource id": "<<type: string,null, required: false>>",
  "resource type": "<<type: string,null, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "surface area": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Marketplace Checkout Redirected

<!-- tabs:start -->
### **Details**

#### **Description**

Marketplace Checkout Redirected.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **redirected to** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **resource id** | `string,null` | No description | ❌ |
| **resource type** | `string,null` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **surface area** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Marketplace Checkout Redirected", {
  "page": "<<type: string, required: false>>",
  "redirected to": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "resource id": "<<type: string,null, required: false>>",
  "resource type": "<<type: string,null, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "surface area": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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

Marketplace Filters Changed.
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Marketplace Subscription Created

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
analytics.track("Marketplace Subscription Created", {
  "seller workspace id": "<<type: string, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Marketplace Subscription Transitioned

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **marketplace subscription** | `string` | No description | ❌ |
| **new status** | `string` | No description | ❌ |
| **old status** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Marketplace Subscription Transitioned", {
  "marketplace subscription": "<<type: string, required: false>>",
  "new status": "<<type: string, required: false>>",
  "old status": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>"
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

Matchmaking Experts Survey Abandoned.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **projectUID** | `string` | No description | ❌ |
| **reason** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **searchParams** | `string` | No description | ❌ |
| **submissionState** | `integer` | No description | ❌ |
| **values** | `object,null` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "values": "<<type: object,null, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
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

Matchmaking Experts Survey Completed.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **values** | `object` | No description | ❌ |
| **values.anythingElse** | `string` | No description | ❌ |
| **values.budget** | `string` | No description | ❌ |
| **values.companyMeta** | `object,null` | No description | ❌ |
| **values.country** | `string,null` | No description | ❌ |
| **values.custom-budget-amount** | `string` | No description | ❌ |
| **values.existing-link** | `string` | No description | ❌ |
| **values.kindOfSite** | `string` | No description | ❌ |
| **values.language** | `string,null` | No description | ❌ |
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
    "companyMeta": "<<type: object,null, required: false>>",
    "country": "<<type: string,null, required: false>>",
    "custom-budget-amount": "<<type: string, required: false>>",
    "existing-link": "<<type: string, required: false>>",
    "kindOfSite": "<<type: string, required: false>>",
    "language": "<<type: string,null, required: false>>",
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

Matchmaking Experts Survey Page Viewed.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **projectUID** | `string` | No description | ❌ |
| **ref** | `string,null` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Matchmaking Experts Survey Page Viewed", {
  "projectUID": "<<type: string, required: false>>",
  "ref": "<<type: string,null, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Matchmaking Experts Survey Resumed

<!-- tabs:start -->
### **Details**

#### **Description**

Matchmaking Experts Survey Resumed.
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
| **values.companyMeta** | `object,null` | No description | ❌ |
| **values.country** | `string,null` | No description | ❌ |
| **values.custom-budget-amount** | `string` | No description | ❌ |
| **values.existing-link** | `string` | No description | ❌ |
| **values.kindOfSite** | `unknown` | No description | ❌ |
| **values.language** | `string,null` | No description | ❌ |
| **values.locationPreference** | `unknown` | No description | ❌ |
| **values.migrating-link** | `string` | No description | ❌ |
| **values.ownerOfSite** | `unknown` | No description | ❌ |
| **values.projectFinishedBy** | `unknown` | No description | ❌ |
| **values.services** | `array` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
    "companyMeta": "<<type: object,null, required: false>>",
    "country": "<<type: string,null, required: false>>",
    "custom-budget-amount": "<<type: string, required: false>>",
    "existing-link": "<<type: string, required: false>>",
    "kindOfSite": "<<type: unknown, required: false>>",
    "language": "<<type: string,null, required: false>>",
    "locationPreference": "<<type: unknown, required: false>>",
    "migrating-link": "<<type: string, required: false>>",
    "ownerOfSite": "<<type: unknown, required: false>>",
    "projectFinishedBy": "<<type: unknown, required: false>>",
    "services": "<<type: array, required: false>>"
  },
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
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

Matchmaking Experts Survey Step Submitted.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **cta** | `string` | No description | ❌ |
| **currentPage** | `string` | No description | ❌ |
| **destinationPage** | `string,null` | No description | ❌ |
| **options selected** | `any` | No description | ❌ |
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
  "destinationPage": "<<type: string,null, required: false>>",
  "options selected": "<<type: any, required: false>>",
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Matchmaking Note CTA Clicked", {
  "cta": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "variant": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Memberships Link Clicked

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
analytics.track("Memberships Link Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("New Project Page Back", {
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("New Project Page Viewed", {
  "libraries shown": "<<type: array, required: false>>",
  "recommended cloneables shown": "<<type: array, required: false>>",
  "recommended templates shown": "<<type: array, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Notice dismissed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ID** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Notice dismissed", {
  "ID": "<<type: string, required: false>>"
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Order Completed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Overage Notification Badge Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **is near limit variant** | `boolean` | No description | ❌ |
| **is over limit variant** | `boolean` | No description | ❌ |
| **is upgrading soon variant** | `boolean` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Overage Notification Badge Clicked", {
  "is near limit variant": "<<type: boolean, required: false>>",
  "is over limit variant": "<<type: boolean, required: false>>",
  "is upgrading soon variant": "<<type: boolean, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Overage Notification Closed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **contact sales qualified** | `boolean` | No description | ❌ |
| **current month usage** | `integer` | No description | ❌ |
| **current plan id** | `string` | No description | ❌ |
| **current usage** | `integer` | No description | ❌ |
| **feature notification type** | `string` | No description | ❌ |
| **occurrence** | `string` | No description | ❌ |
| **previous month usage** | `unknown` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site name** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **usage limit** | `integer` | No description | ❌ |
| **went over high usage threshold previous month** | `boolean` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Overage Notification Closed", {
  "action": "<<type: string, required: false>>",
  "contact sales qualified": "<<type: boolean, required: false>>",
  "current month usage": "<<type: integer, required: false>>",
  "current plan id": "<<type: string, required: false>>",
  "current usage": "<<type: integer, required: false>>",
  "feature notification type": "<<type: string, required: false>>",
  "occurrence": "<<type: string, required: false>>",
  "previous month usage": "<<type: unknown, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site name": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "usage limit": "<<type: integer, required: false>>",
  "went over high usage threshold previous month": "<<type: boolean, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Overage Notification Contact Sales Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **0** | `object` | No description | ❌ |
| **0.__cursor** | `string` | No description | ❌ |
| **0.__typename** | `string` | No description | ❌ |
| **0.activities** | `array` | No description | ❌ |
| **0.activities.items** | `object` | Contains the structure for array items | ❌ |
| **0.activities.items.__typename** | `string` | No description | ❌ |
| **0.activities.items.actor** | `object` | No description | ❌ |
| **0.activities.items.data** | `object` | No description | ❌ |
| **0.activities.items.id** | `string` | No description | ❌ |
| **0.activities.items.inserted_at** | `string` | No description | ❌ |
| **0.activities.items.recipient** | `object` | No description | ❌ |
| **0.activities.items.updated_at** | `string` | No description | ❌ |
| **0.actors** | `array` | No description | ❌ |
| **0.actors.items** | `object` | Contains the structure for array items | ❌ |
| **0.actors.items.__typename** | `string` | No description | ❌ |
| **0.actors.items.created_at** | `unknown` | No description | ❌ |
| **0.actors.items.email** | `string` | No description | ❌ |
| **0.actors.items.firstName** | `string` | No description | ❌ |
| **0.actors.items.id** | `string` | No description | ❌ |
| **0.actors.items.name** | `string` | No description | ❌ |
| **0.actors.items.role** | `string` | No description | ❌ |
| **0.actors.items.updated_at** | `string` | No description | ❌ |
| **0.archived_at** | `unknown` | No description | ❌ |
| **0.blocks** | `array` | No description | ❌ |
| **0.blocks.items** | `object` | Contains the structure for array items | ❌ |
| **0.blocks.items.content** | `string` | No description | ❌ |
| **0.blocks.items.name** | `string` | No description | ❌ |
| **0.blocks.items.rendered** | `string` | No description | ❌ |
| **0.blocks.items.type** | `string` | No description | ❌ |
| **0.clicked_at** | `unknown` | No description | ❌ |
| **0.data** | `object` | No description | ❌ |
| **0.data.bannerId** | `string` | No description | ❌ |
| **0.data.currentPlan** | `string` | No description | ❌ |
| **0.data.currentPlanId** | `string` | No description | ❌ |
| **0.data.currentUsage** | `integer` | No description | ❌ |
| **0.data.featureNotificationType** | `string` | No description | ❌ |
| **0.data.isBandwidthAddonMaxedOut** | `boolean` | No description | ❌ |
| **0.data.nextTierPlan** | `string` | No description | ❌ |
| **0.data.notificationType** | `string` | No description | ❌ |
| **0.data.occurrence** | `string` | No description | ❌ |
| **0.data.siteId** | `string` | No description | ❌ |
| **0.data.siteName** | `string` | No description | ❌ |
| **0.data.siteSlug** | `string` | No description | ❌ |
| **0.data.usageLimit** | `integer` | No description | ❌ |
| **0.data.usageLimitGB** | `integer` | No description | ❌ |
| **0.data.wentOverHighUsageThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **0.data.wentOverThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **0.data.workspaceName** | `string` | No description | ❌ |
| **0.data.workspaceSlug** | `string` | No description | ❌ |
| **0.id** | `string` | No description | ❌ |
| **0.inserted_at** | `string` | No description | ❌ |
| **0.interacted_at** | `unknown` | No description | ❌ |
| **0.link_clicked_at** | `unknown` | No description | ❌ |
| **0.read_at** | `unknown` | No description | ❌ |
| **0.seen_at** | `unknown` | No description | ❌ |
| **0.source** | `object` | No description | ❌ |
| **0.source.__typename** | `string` | No description | ❌ |
| **0.source.categories** | `array` | No description | ❌ |
| **0.source.key** | `string` | No description | ❌ |
| **0.source.version_id** | `string` | No description | ❌ |
| **0.tenant** | `unknown` | No description | ❌ |
| **0.total_activities** | `integer` | No description | ❌ |
| **0.total_actors** | `integer` | No description | ❌ |
| **0.updated_at** | `string` | No description | ❌ |
| **1** | `object` | No description | ❌ |
| **1.__cursor** | `string` | No description | ❌ |
| **1.__typename** | `string` | No description | ❌ |
| **1.activities** | `array` | No description | ❌ |
| **1.activities.items** | `object` | Contains the structure for array items | ❌ |
| **1.activities.items.__typename** | `string` | No description | ❌ |
| **1.activities.items.actor** | `object` | No description | ❌ |
| **1.activities.items.data** | `object` | No description | ❌ |
| **1.activities.items.id** | `string` | No description | ❌ |
| **1.activities.items.inserted_at** | `string` | No description | ❌ |
| **1.activities.items.recipient** | `object` | No description | ❌ |
| **1.activities.items.updated_at** | `string` | No description | ❌ |
| **1.actors** | `array` | No description | ❌ |
| **1.actors.items** | `object` | Contains the structure for array items | ❌ |
| **1.actors.items.__typename** | `string` | No description | ❌ |
| **1.actors.items.created_at** | `unknown` | No description | ❌ |
| **1.actors.items.email** | `string` | No description | ❌ |
| **1.actors.items.firstName** | `string` | No description | ❌ |
| **1.actors.items.id** | `string` | No description | ❌ |
| **1.actors.items.name** | `string` | No description | ❌ |
| **1.actors.items.role** | `string` | No description | ❌ |
| **1.actors.items.updated_at** | `string` | No description | ❌ |
| **1.archived_at** | `unknown` | No description | ❌ |
| **1.blocks** | `array` | No description | ❌ |
| **1.blocks.items** | `object` | Contains the structure for array items | ❌ |
| **1.blocks.items.content** | `string` | No description | ❌ |
| **1.blocks.items.name** | `string` | No description | ❌ |
| **1.blocks.items.rendered** | `string` | No description | ❌ |
| **1.blocks.items.type** | `string` | No description | ❌ |
| **1.clicked_at** | `unknown` | No description | ❌ |
| **1.data** | `object` | No description | ❌ |
| **1.data.bannerId** | `string` | No description | ❌ |
| **1.data.currentPlan** | `string` | No description | ❌ |
| **1.data.currentPlanId** | `string` | No description | ❌ |
| **1.data.currentUsage** | `integer` | No description | ❌ |
| **1.data.featureNotificationType** | `string` | No description | ❌ |
| **1.data.isBandwidthAddonMaxedOut** | `boolean` | No description | ❌ |
| **1.data.nextResetDate** | `string` | No description | ❌ |
| **1.data.nextTierPlan** | `string` | No description | ❌ |
| **1.data.notificationType** | `string` | No description | ❌ |
| **1.data.occurrence** | `string` | No description | ❌ |
| **1.data.siteId** | `string` | No description | ❌ |
| **1.data.siteName** | `string` | No description | ❌ |
| **1.data.siteSlug** | `string` | No description | ❌ |
| **1.data.usageLimit** | `integer` | No description | ❌ |
| **1.data.usageLimitGB** | `integer` | No description | ❌ |
| **1.data.wentOverHighUsageThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **1.data.wentOverThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **1.data.workspaceName** | `string` | No description | ❌ |
| **1.data.workspaceSlug** | `string` | No description | ❌ |
| **1.id** | `string` | No description | ❌ |
| **1.inserted_at** | `string` | No description | ❌ |
| **1.interacted_at** | `string` | No description | ❌ |
| **1.link_clicked_at** | `unknown` | No description | ❌ |
| **1.read_at** | `string` | No description | ❌ |
| **1.seen_at** | `unknown` | No description | ❌ |
| **1.source** | `object` | No description | ❌ |
| **1.source.__typename** | `string` | No description | ❌ |
| **1.source.categories** | `array` | No description | ❌ |
| **1.source.key** | `string` | No description | ❌ |
| **1.source.version_id** | `string` | No description | ❌ |
| **1.tenant** | `unknown` | No description | ❌ |
| **1.total_activities** | `integer` | No description | ❌ |
| **1.total_actors** | `integer` | No description | ❌ |
| **1.updated_at** | `string` | No description | ❌ |
| **2** | `object` | No description | ❌ |
| **2.__cursor** | `string` | No description | ❌ |
| **2.__typename** | `string` | No description | ❌ |
| **2.activities** | `array` | No description | ❌ |
| **2.activities.items** | `object` | Contains the structure for array items | ❌ |
| **2.activities.items.__typename** | `string` | No description | ❌ |
| **2.activities.items.actor** | `object` | No description | ❌ |
| **2.activities.items.data** | `object` | No description | ❌ |
| **2.activities.items.id** | `string` | No description | ❌ |
| **2.activities.items.inserted_at** | `string` | No description | ❌ |
| **2.activities.items.recipient** | `object` | No description | ❌ |
| **2.activities.items.updated_at** | `string` | No description | ❌ |
| **2.actors** | `array` | No description | ❌ |
| **2.actors.items** | `object` | Contains the structure for array items | ❌ |
| **2.actors.items.__typename** | `string` | No description | ❌ |
| **2.actors.items.created_at** | `unknown` | No description | ❌ |
| **2.actors.items.email** | `string` | No description | ❌ |
| **2.actors.items.firstName** | `string` | No description | ❌ |
| **2.actors.items.id** | `string` | No description | ❌ |
| **2.actors.items.name** | `string` | No description | ❌ |
| **2.actors.items.role** | `string` | No description | ❌ |
| **2.actors.items.updated_at** | `string` | No description | ❌ |
| **2.archived_at** | `unknown` | No description | ❌ |
| **2.blocks** | `array` | No description | ❌ |
| **2.blocks.items** | `object` | Contains the structure for array items | ❌ |
| **2.blocks.items.content** | `string` | No description | ❌ |
| **2.blocks.items.name** | `string` | No description | ❌ |
| **2.blocks.items.rendered** | `string` | No description | ❌ |
| **2.blocks.items.type** | `string` | No description | ❌ |
| **2.clicked_at** | `unknown` | No description | ❌ |
| **2.data** | `object` | No description | ❌ |
| **2.data.bannerId** | `string` | No description | ❌ |
| **2.data.currentPlan** | `string` | No description | ❌ |
| **2.data.currentPlanId** | `string` | No description | ❌ |
| **2.data.currentUsage** | `integer` | No description | ❌ |
| **2.data.featureNotificationType** | `string` | No description | ❌ |
| **2.data.isBandwidthAddonMaxedOut** | `boolean` | No description | ❌ |
| **2.data.nextResetDate** | `string` | No description | ❌ |
| **2.data.nextTierPlan** | `string` | No description | ❌ |
| **2.data.notificationType** | `string` | No description | ❌ |
| **2.data.occurrence** | `string` | No description | ❌ |
| **2.data.siteId** | `string` | No description | ❌ |
| **2.data.siteName** | `string` | No description | ❌ |
| **2.data.siteSlug** | `string` | No description | ❌ |
| **2.data.usageLimit** | `integer` | No description | ❌ |
| **2.data.usageLimitGB** | `integer` | No description | ❌ |
| **2.data.wentOverHighUsageThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **2.data.wentOverThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **2.data.workspaceName** | `string` | No description | ❌ |
| **2.data.workspaceSlug** | `string` | No description | ❌ |
| **2.id** | `string` | No description | ❌ |
| **2.inserted_at** | `string` | No description | ❌ |
| **2.interacted_at** | `string` | No description | ❌ |
| **2.link_clicked_at** | `unknown` | No description | ❌ |
| **2.read_at** | `string` | No description | ❌ |
| **2.seen_at** | `unknown` | No description | ❌ |
| **2.source** | `object` | No description | ❌ |
| **2.source.__typename** | `string` | No description | ❌ |
| **2.source.categories** | `array` | No description | ❌ |
| **2.source.key** | `string` | No description | ❌ |
| **2.source.version_id** | `string` | No description | ❌ |
| **2.tenant** | `unknown` | No description | ❌ |
| **2.total_activities** | `integer` | No description | ❌ |
| **2.total_actors** | `integer` | No description | ❌ |
| **2.updated_at** | `string` | No description | ❌ |
| **3** | `object` | No description | ❌ |
| **3.__cursor** | `string` | No description | ❌ |
| **3.__typename** | `string` | No description | ❌ |
| **3.activities** | `array` | No description | ❌ |
| **3.activities.items** | `object` | Contains the structure for array items | ❌ |
| **3.activities.items.__typename** | `string` | No description | ❌ |
| **3.activities.items.id** | `string` | No description | ❌ |
| **3.activities.items.inserted_at** | `string` | No description | ❌ |
| **3.activities.items.recipient** | `object` | No description | ❌ |
| **3.activities.items.updated_at** | `string` | No description | ❌ |
| **3.actors** | `array` | No description | ❌ |
| **3.actors.items** | `object` | Contains the structure for array items | ❌ |
| **3.actors.items.__typename** | `string` | No description | ❌ |
| **3.actors.items.created_at** | `unknown` | No description | ❌ |
| **3.actors.items.email** | `string` | No description | ❌ |
| **3.actors.items.firstName** | `string` | No description | ❌ |
| **3.actors.items.name** | `string` | No description | ❌ |
| **3.actors.items.role** | `string` | No description | ❌ |
| **3.actors.items.updated_at** | `string` | No description | ❌ |
| **3.archived_at** | `unknown` | No description | ❌ |
| **3.blocks** | `array` | No description | ❌ |
| **3.blocks.items** | `object` | Contains the structure for array items | ❌ |
| **3.blocks.items.content** | `string` | No description | ❌ |
| **3.blocks.items.name** | `string` | No description | ❌ |
| **3.blocks.items.rendered** | `string` | No description | ❌ |
| **3.blocks.items.type** | `string` | No description | ❌ |
| **3.data** | `object` | No description | ❌ |
| **3.data.currentPlanId** | `string` | No description | ❌ |
| **3.data.currentUsage** | `integer` | No description | ❌ |
| **3.data.featureNotificationType** | `string` | No description | ❌ |
| **3.data.nextResetDate** | `string` | No description | ❌ |
| **3.data.nextTierPlan** | `string` | No description | ❌ |
| **3.data.notificationType** | `string` | No description | ❌ |
| **3.data.occurrence** | `string` | No description | ❌ |
| **3.data.siteId** | `string` | No description | ❌ |
| **3.data.siteName** | `string` | No description | ❌ |
| **3.data.usageLimitGB** | `integer` | No description | ❌ |
| **3.data.wentOverHighUsageThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **3.data.wentOverThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **3.data.workspaceName** | `string` | No description | ❌ |
| **3.data.workspaceSlug** | `string` | No description | ❌ |
| **3.id** | `string` | No description | ❌ |
| **3.inserted_at** | `string` | No description | ❌ |
| **3.interacted_at** | `string` | No description | ❌ |
| **3.link_clicked_at** | `unknown` | No description | ❌ |
| **3.source** | `object` | No description | ❌ |
| **3.source.__typename** | `string` | No description | ❌ |
| **3.source.categories** | `array` | No description | ❌ |
| **3.source.version_id** | `string` | No description | ❌ |
| **3.tenant** | `unknown` | No description | ❌ |
| **3.total_actors** | `integer` | No description | ❌ |
| **4** | `object` | No description | ❌ |
| **4.__typename** | `string` | No description | ❌ |
| **4.activities** | `array` | No description | ❌ |
| **4.activities.items** | `object` | Contains the structure for array items | ❌ |
| **4.activities.items.__typename** | `string` | No description | ❌ |
| **4.activities.items.actor** | `object` | No description | ❌ |
| **4.activities.items.data** | `object` | No description | ❌ |
| **4.activities.items.inserted_at** | `string` | No description | ❌ |
| **4.activities.items.recipient** | `object` | No description | ❌ |
| **4.activities.items.updated_at** | `string` | No description | ❌ |
| **4.actors** | `array` | No description | ❌ |
| **4.actors.items** | `object` | Contains the structure for array items | ❌ |
| **4.actors.items.__typename** | `string` | No description | ❌ |
| **4.actors.items.created_at** | `unknown` | No description | ❌ |
| **4.actors.items.firstName** | `string` | No description | ❌ |
| **4.actors.items.id** | `string` | No description | ❌ |
| **4.actors.items.name** | `string` | No description | ❌ |
| **4.archived_at** | `unknown` | No description | ❌ |
| **4.blocks** | `array` | No description | ❌ |
| **4.data** | `object` | No description | ❌ |
| **4.data.bannerId** | `string` | No description | ❌ |
| **4.data.currentPlanId** | `string` | No description | ❌ |
| **4.data.featureNotificationType** | `string` | No description | ❌ |
| **4.data.nextResetDate** | `string` | No description | ❌ |
| **4.data.nextTierPlan** | `string` | No description | ❌ |
| **4.data.occurrence** | `string` | No description | ❌ |
| **4.data.siteName** | `string` | No description | ❌ |
| **4.data.siteSlug** | `string` | No description | ❌ |
| **4.data.usageLimit** | `integer` | No description | ❌ |
| **4.data.wentOverThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **4.data.workspaceName** | `string` | No description | ❌ |
| **4.data.workspaceSlug** | `string` | No description | ❌ |
| **4.id** | `string` | No description | ❌ |
| **4.inserted_at** | `string` | No description | ❌ |
| **4.interacted_at** | `string` | No description | ❌ |
| **4.link_clicked_at** | `unknown` | No description | ❌ |
| **4.seen_at** | `unknown` | No description | ❌ |
| **4.source** | `object` | No description | ❌ |
| **4.source.__typename** | `string` | No description | ❌ |
| **4.source.categories** | `array` | No description | ❌ |
| **4.source.key** | `string` | No description | ❌ |
| **4.source.version_id** | `string` | No description | ❌ |
| **4.tenant** | `unknown` | No description | ❌ |
| **4.updated_at** | `string` | No description | ❌ |
| **current usage** | `integer` | No description | ❌ |
| **feature notification type** | `string` | No description | ❌ |
| **occurrence** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **usage limit** | `integer` | No description | ❌ |
| **went over high usage threshold previous month** | `boolean` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Overage Notification Contact Sales Clicked", {
  "0": {
    "__cursor": "<<type: string, required: false>>",
    "__typename": "<<type: string, required: false>>",
    "activities": [
      {
        "__typename": "<<type: string, required: false>>",
        "actor": "<<type: object, required: false>>",
        "data": "<<type: object, required: false>>",
        "id": "<<type: string, required: false>>",
        "inserted_at": "<<type: string, required: false>>",
        "recipient": "<<type: object, required: false>>",
        "updated_at": "<<type: string, required: false>>"
      }
    ],
    "actors": [
      {
        "__typename": "<<type: string, required: false>>",
        "created_at": "<<type: unknown, required: false>>",
        "email": "<<type: string, required: false>>",
        "firstName": "<<type: string, required: false>>",
        "id": "<<type: string, required: false>>",
        "name": "<<type: string, required: false>>",
        "role": "<<type: string, required: false>>",
        "updated_at": "<<type: string, required: false>>"
      }
    ],
    "archived_at": "<<type: unknown, required: false>>",
    "blocks": [
      {
        "content": "<<type: string, required: false>>",
        "name": "<<type: string, required: false>>",
        "rendered": "<<type: string, required: false>>",
        "type": "<<type: string, required: false>>"
      }
    ],
    "clicked_at": "<<type: unknown, required: false>>",
    "data": {
      "bannerId": "<<type: string, required: false>>",
      "currentPlan": "<<type: string, required: false>>",
      "currentPlanId": "<<type: string, required: false>>",
      "currentUsage": "<<type: integer, required: false>>",
      "featureNotificationType": "<<type: string, required: false>>",
      "isBandwidthAddonMaxedOut": "<<type: boolean, required: false>>",
      "nextTierPlan": "<<type: string, required: false>>",
      "notificationType": "<<type: string, required: false>>",
      "occurrence": "<<type: string, required: false>>",
      "siteId": "<<type: string, required: false>>",
      "siteName": "<<type: string, required: false>>",
      "siteSlug": "<<type: string, required: false>>",
      "usageLimit": "<<type: integer, required: false>>",
      "usageLimitGB": "<<type: integer, required: false>>",
      "wentOverHighUsageThresholdPreviousMonth": "<<type: boolean, required: false>>",
      "wentOverThresholdPreviousMonth": "<<type: boolean, required: false>>",
      "workspaceName": "<<type: string, required: false>>",
      "workspaceSlug": "<<type: string, required: false>>"
    },
    "id": "<<type: string, required: false>>",
    "inserted_at": "<<type: string, required: false>>",
    "interacted_at": "<<type: unknown, required: false>>",
    "link_clicked_at": "<<type: unknown, required: false>>",
    "read_at": "<<type: unknown, required: false>>",
    "seen_at": "<<type: unknown, required: false>>",
    "source": {
      "__typename": "<<type: string, required: false>>",
      "categories": "<<type: array, required: false>>",
      "key": "<<type: string, required: false>>",
      "version_id": "<<type: string, required: false>>"
    },
    "tenant": "<<type: unknown, required: false>>",
    "total_activities": "<<type: integer, required: false>>",
    "total_actors": "<<type: integer, required: false>>",
    "updated_at": "<<type: string, required: false>>"
  },
  "1": {
    "__cursor": "<<type: string, required: false>>",
    "__typename": "<<type: string, required: false>>",
    "activities": [
      {
        "__typename": "<<type: string, required: false>>",
        "actor": "<<type: object, required: false>>",
        "data": "<<type: object, required: false>>",
        "id": "<<type: string, required: false>>",
        "inserted_at": "<<type: string, required: false>>",
        "recipient": "<<type: object, required: false>>",
        "updated_at": "<<type: string, required: false>>"
      }
    ],
    "actors": [
      {
        "__typename": "<<type: string, required: false>>",
        "created_at": "<<type: unknown, required: false>>",
        "email": "<<type: string, required: false>>",
        "firstName": "<<type: string, required: false>>",
        "id": "<<type: string, required: false>>",
        "name": "<<type: string, required: false>>",
        "role": "<<type: string, required: false>>",
        "updated_at": "<<type: string, required: false>>"
      }
    ],
    "archived_at": "<<type: unknown, required: false>>",
    "blocks": [
      {
        "content": "<<type: string, required: false>>",
        "name": "<<type: string, required: false>>",
        "rendered": "<<type: string, required: false>>",
        "type": "<<type: string, required: false>>"
      }
    ],
    "clicked_at": "<<type: unknown, required: false>>",
    "data": {
      "bannerId": "<<type: string, required: false>>",
      "currentPlan": "<<type: string, required: false>>",
      "currentPlanId": "<<type: string, required: false>>",
      "currentUsage": "<<type: integer, required: false>>",
      "featureNotificationType": "<<type: string, required: false>>",
      "isBandwidthAddonMaxedOut": "<<type: boolean, required: false>>",
      "nextResetDate": "<<type: string, required: false>>",
      "nextTierPlan": "<<type: string, required: false>>",
      "notificationType": "<<type: string, required: false>>",
      "occurrence": "<<type: string, required: false>>",
      "siteId": "<<type: string, required: false>>",
      "siteName": "<<type: string, required: false>>",
      "siteSlug": "<<type: string, required: false>>",
      "usageLimit": "<<type: integer, required: false>>",
      "usageLimitGB": "<<type: integer, required: false>>",
      "wentOverHighUsageThresholdPreviousMonth": "<<type: boolean, required: false>>",
      "wentOverThresholdPreviousMonth": "<<type: boolean, required: false>>",
      "workspaceName": "<<type: string, required: false>>",
      "workspaceSlug": "<<type: string, required: false>>"
    },
    "id": "<<type: string, required: false>>",
    "inserted_at": "<<type: string, required: false>>",
    "interacted_at": "<<type: string, required: false>>",
    "link_clicked_at": "<<type: unknown, required: false>>",
    "read_at": "<<type: string, required: false>>",
    "seen_at": "<<type: unknown, required: false>>",
    "source": {
      "__typename": "<<type: string, required: false>>",
      "categories": "<<type: array, required: false>>",
      "key": "<<type: string, required: false>>",
      "version_id": "<<type: string, required: false>>"
    },
    "tenant": "<<type: unknown, required: false>>",
    "total_activities": "<<type: integer, required: false>>",
    "total_actors": "<<type: integer, required: false>>",
    "updated_at": "<<type: string, required: false>>"
  },
  "2": {
    "__cursor": "<<type: string, required: false>>",
    "__typename": "<<type: string, required: false>>",
    "activities": [
      {
        "__typename": "<<type: string, required: false>>",
        "actor": "<<type: object, required: false>>",
        "data": "<<type: object, required: false>>",
        "id": "<<type: string, required: false>>",
        "inserted_at": "<<type: string, required: false>>",
        "recipient": "<<type: object, required: false>>",
        "updated_at": "<<type: string, required: false>>"
      }
    ],
    "actors": [
      {
        "__typename": "<<type: string, required: false>>",
        "created_at": "<<type: unknown, required: false>>",
        "email": "<<type: string, required: false>>",
        "firstName": "<<type: string, required: false>>",
        "id": "<<type: string, required: false>>",
        "name": "<<type: string, required: false>>",
        "role": "<<type: string, required: false>>",
        "updated_at": "<<type: string, required: false>>"
      }
    ],
    "archived_at": "<<type: unknown, required: false>>",
    "blocks": [
      {
        "content": "<<type: string, required: false>>",
        "name": "<<type: string, required: false>>",
        "rendered": "<<type: string, required: false>>",
        "type": "<<type: string, required: false>>"
      }
    ],
    "clicked_at": "<<type: unknown, required: false>>",
    "data": {
      "bannerId": "<<type: string, required: false>>",
      "currentPlan": "<<type: string, required: false>>",
      "currentPlanId": "<<type: string, required: false>>",
      "currentUsage": "<<type: integer, required: false>>",
      "featureNotificationType": "<<type: string, required: false>>",
      "isBandwidthAddonMaxedOut": "<<type: boolean, required: false>>",
      "nextResetDate": "<<type: string, required: false>>",
      "nextTierPlan": "<<type: string, required: false>>",
      "notificationType": "<<type: string, required: false>>",
      "occurrence": "<<type: string, required: false>>",
      "siteId": "<<type: string, required: false>>",
      "siteName": "<<type: string, required: false>>",
      "siteSlug": "<<type: string, required: false>>",
      "usageLimit": "<<type: integer, required: false>>",
      "usageLimitGB": "<<type: integer, required: false>>",
      "wentOverHighUsageThresholdPreviousMonth": "<<type: boolean, required: false>>",
      "wentOverThresholdPreviousMonth": "<<type: boolean, required: false>>",
      "workspaceName": "<<type: string, required: false>>",
      "workspaceSlug": "<<type: string, required: false>>"
    },
    "id": "<<type: string, required: false>>",
    "inserted_at": "<<type: string, required: false>>",
    "interacted_at": "<<type: string, required: false>>",
    "link_clicked_at": "<<type: unknown, required: false>>",
    "read_at": "<<type: string, required: false>>",
    "seen_at": "<<type: unknown, required: false>>",
    "source": {
      "__typename": "<<type: string, required: false>>",
      "categories": "<<type: array, required: false>>",
      "key": "<<type: string, required: false>>",
      "version_id": "<<type: string, required: false>>"
    },
    "tenant": "<<type: unknown, required: false>>",
    "total_activities": "<<type: integer, required: false>>",
    "total_actors": "<<type: integer, required: false>>",
    "updated_at": "<<type: string, required: false>>"
  },
  "3": {
    "__cursor": "<<type: string, required: false>>",
    "__typename": "<<type: string, required: false>>",
    "activities": [
      {
        "__typename": "<<type: string, required: false>>",
        "id": "<<type: string, required: false>>",
        "inserted_at": "<<type: string, required: false>>",
        "recipient": "<<type: object, required: false>>",
        "updated_at": "<<type: string, required: false>>"
      }
    ],
    "actors": [
      {
        "__typename": "<<type: string, required: false>>",
        "created_at": "<<type: unknown, required: false>>",
        "email": "<<type: string, required: false>>",
        "firstName": "<<type: string, required: false>>",
        "name": "<<type: string, required: false>>",
        "role": "<<type: string, required: false>>",
        "updated_at": "<<type: string, required: false>>"
      }
    ],
    "archived_at": "<<type: unknown, required: false>>",
    "blocks": [
      {
        "content": "<<type: string, required: false>>",
        "name": "<<type: string, required: false>>",
        "rendered": "<<type: string, required: false>>",
        "type": "<<type: string, required: false>>"
      }
    ],
    "data": {
      "currentPlanId": "<<type: string, required: false>>",
      "currentUsage": "<<type: integer, required: false>>",
      "featureNotificationType": "<<type: string, required: false>>",
      "nextResetDate": "<<type: string, required: false>>",
      "nextTierPlan": "<<type: string, required: false>>",
      "notificationType": "<<type: string, required: false>>",
      "occurrence": "<<type: string, required: false>>",
      "siteId": "<<type: string, required: false>>",
      "siteName": "<<type: string, required: false>>",
      "usageLimitGB": "<<type: integer, required: false>>",
      "wentOverHighUsageThresholdPreviousMonth": "<<type: boolean, required: false>>",
      "wentOverThresholdPreviousMonth": "<<type: boolean, required: false>>",
      "workspaceName": "<<type: string, required: false>>",
      "workspaceSlug": "<<type: string, required: false>>"
    },
    "id": "<<type: string, required: false>>",
    "inserted_at": "<<type: string, required: false>>",
    "interacted_at": "<<type: string, required: false>>",
    "link_clicked_at": "<<type: unknown, required: false>>",
    "source": {
      "__typename": "<<type: string, required: false>>",
      "categories": "<<type: array, required: false>>",
      "version_id": "<<type: string, required: false>>"
    },
    "tenant": "<<type: unknown, required: false>>",
    "total_actors": "<<type: integer, required: false>>"
  },
  "4": {
    "__typename": "<<type: string, required: false>>",
    "activities": [
      {
        "__typename": "<<type: string, required: false>>",
        "actor": "<<type: object, required: false>>",
        "data": "<<type: object, required: false>>",
        "inserted_at": "<<type: string, required: false>>",
        "recipient": "<<type: object, required: false>>",
        "updated_at": "<<type: string, required: false>>"
      }
    ],
    "actors": [
      {
        "__typename": "<<type: string, required: false>>",
        "created_at": "<<type: unknown, required: false>>",
        "firstName": "<<type: string, required: false>>",
        "id": "<<type: string, required: false>>",
        "name": "<<type: string, required: false>>"
      }
    ],
    "archived_at": "<<type: unknown, required: false>>",
    "blocks": "<<type: array, required: false>>",
    "data": {
      "bannerId": "<<type: string, required: false>>",
      "currentPlanId": "<<type: string, required: false>>",
      "featureNotificationType": "<<type: string, required: false>>",
      "nextResetDate": "<<type: string, required: false>>",
      "nextTierPlan": "<<type: string, required: false>>",
      "occurrence": "<<type: string, required: false>>",
      "siteName": "<<type: string, required: false>>",
      "siteSlug": "<<type: string, required: false>>",
      "usageLimit": "<<type: integer, required: false>>",
      "wentOverThresholdPreviousMonth": "<<type: boolean, required: false>>",
      "workspaceName": "<<type: string, required: false>>",
      "workspaceSlug": "<<type: string, required: false>>"
    },
    "id": "<<type: string, required: false>>",
    "inserted_at": "<<type: string, required: false>>",
    "interacted_at": "<<type: string, required: false>>",
    "link_clicked_at": "<<type: unknown, required: false>>",
    "seen_at": "<<type: unknown, required: false>>",
    "source": {
      "__typename": "<<type: string, required: false>>",
      "categories": "<<type: array, required: false>>",
      "key": "<<type: string, required: false>>",
      "version_id": "<<type: string, required: false>>"
    },
    "tenant": "<<type: unknown, required: false>>",
    "updated_at": "<<type: string, required: false>>"
  },
  "current usage": "<<type: integer, required: false>>",
  "feature notification type": "<<type: string, required: false>>",
  "occurrence": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "usage limit": "<<type: integer, required: false>>",
  "went over high usage threshold previous month": "<<type: boolean, required: false>>",
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


## Overage Notification Go To Billing Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **bannerId** | `string` | No description | ❌ |
| **currentPlan** | `string` | No description | ❌ |
| **currentPlanId** | `string` | No description | ❌ |
| **currentUsage** | `integer` | No description | ❌ |
| **featureNotificationType** | `string` | No description | ❌ |
| **isBandwidthAddonMaxedOut** | `boolean` | No description | ❌ |
| **nextResetDate** | `string` | No description | ❌ |
| **nextTierPlan** | `string` | No description | ❌ |
| **notificationType** | `string` | No description | ❌ |
| **occurrence** | `string` | No description | ❌ |
| **previousUsage** | `unknown` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `string` | No description | ❌ |
| **siteName** | `string` | No description | ❌ |
| **siteSlug** | `string` | No description | ❌ |
| **usageLimit** | `integer` | No description | ❌ |
| **usageLimitFormatted** | `string` | No description | ❌ |
| **usageLimitGB** | `integer` | No description | ❌ |
| **wentOverHighUsageThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **wentOverThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
| **workspaceName** | `string` | No description | ❌ |
| **workspaceSlug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Overage Notification Go To Billing Clicked", {
  "bannerId": "<<type: string, required: false>>",
  "currentPlan": "<<type: string, required: false>>",
  "currentPlanId": "<<type: string, required: false>>",
  "currentUsage": "<<type: integer, required: false>>",
  "featureNotificationType": "<<type: string, required: false>>",
  "isBandwidthAddonMaxedOut": "<<type: boolean, required: false>>",
  "nextResetDate": "<<type: string, required: false>>",
  "nextTierPlan": "<<type: string, required: false>>",
  "notificationType": "<<type: string, required: false>>",
  "occurrence": "<<type: string, required: false>>",
  "previousUsage": "<<type: unknown, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: string, required: false>>",
  "siteName": "<<type: string, required: false>>",
  "siteSlug": "<<type: string, required: false>>",
  "usageLimit": "<<type: integer, required: false>>",
  "usageLimitFormatted": "<<type: string, required: false>>",
  "usageLimitGB": "<<type: integer, required: false>>",
  "wentOverHighUsageThresholdPreviousMonth": "<<type: boolean, required: false>>",
  "wentOverThresholdPreviousMonth": "<<type: boolean, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>",
  "workspaceName": "<<type: string, required: false>>",
  "workspaceSlug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Overage Notification Learn more Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **contact sales qualified** | `boolean` | No description | ❌ |
| **current month usage** | `integer` | No description | ❌ |
| **current plan id** | `string` | No description | ❌ |
| **current usage** | `integer` | No description | ❌ |
| **feature notification type** | `string` | No description | ❌ |
| **occurrence** | `string` | No description | ❌ |
| **previous month usage** | `unknown` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site name** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **usage limit** | `integer` | No description | ❌ |
| **went over high usage threshold previous month** | `boolean` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Overage Notification Learn more Clicked", {
  "action": "<<type: string, required: false>>",
  "contact sales qualified": "<<type: boolean, required: false>>",
  "current month usage": "<<type: integer, required: false>>",
  "current plan id": "<<type: string, required: false>>",
  "current usage": "<<type: integer, required: false>>",
  "feature notification type": "<<type: string, required: false>>",
  "occurrence": "<<type: string, required: false>>",
  "previous month usage": "<<type: unknown, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site name": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "usage limit": "<<type: integer, required: false>>",
  "went over high usage threshold previous month": "<<type: boolean, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Overage Notification See Usage Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **bannerId** | `string` | No description | ❌ |
| **currentPlan** | `string` | No description | ❌ |
| **currentPlanId** | `string` | No description | ❌ |
| **currentUsage** | `integer` | No description | ❌ |
| **featureNotificationType** | `string` | No description | ❌ |
| **isBandwidthAddonMaxedOut** | `boolean` | No description | ❌ |
| **isCompletedAutoUpgradeDetermined** | `boolean` | No description | ❌ |
| **nextResetDate** | `string` | No description | ❌ |
| **nextTierPlan** | `string` | No description | ❌ |
| **notificationType** | `string` | No description | ❌ |
| **occurrence** | `string` | No description | ❌ |
| **previousUsage** | `unknown` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `string` | No description | ❌ |
| **siteName** | `string` | No description | ❌ |
| **siteSlug** | `string` | No description | ❌ |
| **subscriptionUpdatedOrigin** | `boolean` | No description | ❌ |
| **usageLimit** | `integer` | No description | ❌ |
| **usageLimitFormatted** | `string` | No description | ❌ |
| **usageLimitGB** | `integer` | No description | ❌ |
| **wentOverHighUsageThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **wentOverThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
| **workspaceName** | `string` | No description | ❌ |
| **workspaceSlug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Overage Notification See Usage Clicked", {
  "bannerId": "<<type: string, required: false>>",
  "currentPlan": "<<type: string, required: false>>",
  "currentPlanId": "<<type: string, required: false>>",
  "currentUsage": "<<type: integer, required: false>>",
  "featureNotificationType": "<<type: string, required: false>>",
  "isBandwidthAddonMaxedOut": "<<type: boolean, required: false>>",
  "isCompletedAutoUpgradeDetermined": "<<type: boolean, required: false>>",
  "nextResetDate": "<<type: string, required: false>>",
  "nextTierPlan": "<<type: string, required: false>>",
  "notificationType": "<<type: string, required: false>>",
  "occurrence": "<<type: string, required: false>>",
  "previousUsage": "<<type: unknown, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: string, required: false>>",
  "siteName": "<<type: string, required: false>>",
  "siteSlug": "<<type: string, required: false>>",
  "subscriptionUpdatedOrigin": "<<type: boolean, required: false>>",
  "usageLimit": "<<type: integer, required: false>>",
  "usageLimitFormatted": "<<type: string, required: false>>",
  "usageLimitGB": "<<type: integer, required: false>>",
  "wentOverHighUsageThresholdPreviousMonth": "<<type: boolean, required: false>>",
  "wentOverThresholdPreviousMonth": "<<type: boolean, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>",
  "workspaceName": "<<type: string, required: false>>",
  "workspaceSlug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Overage Notification Sent

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **current usage** | `integer` | No description | ❌ |
| **detected auto upgrade** | `boolean` | No description | ❌ |
| **is bandwidth addon maxed out** | `boolean` | No description | ❌ |
| **notification type** | `string` | No description | ❌ |
| **occurrence** | `string` | No description | ❌ |
| **previous month high usage overage** | `boolean` | No description | ❌ |
| **previous month overage** | `boolean` | No description | ❌ |
| **previous month usage** | `unknown` | No description | ❌ |
| **recipients** | `array` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site usage limit** | `integer` | No description | ❌ |
| **site usage limit GB** | `integer` | No description | ❌ |
| **site usage limit formatted** | `string` | No description | ❌ |
| **subscription updated origin** | `boolean` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Overage Notification Sent", {
  "current usage": "<<type: integer, required: false>>",
  "detected auto upgrade": "<<type: boolean, required: false>>",
  "is bandwidth addon maxed out": "<<type: boolean, required: false>>",
  "notification type": "<<type: string, required: false>>",
  "occurrence": "<<type: string, required: false>>",
  "previous month high usage overage": "<<type: boolean, required: false>>",
  "previous month overage": "<<type: boolean, required: false>>",
  "previous month usage": "<<type: unknown, required: false>>",
  "recipients": "<<type: array, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site usage limit": "<<type: integer, required: false>>",
  "site usage limit GB": "<<type: integer, required: false>>",
  "site usage limit formatted": "<<type: string, required: false>>",
  "subscription updated origin": "<<type: boolean, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Overage Notification Upgrade Now Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **bannerId** | `string` | No description | ❌ |
| **currentPlan** | `string` | No description | ❌ |
| **currentPlanId** | `string` | No description | ❌ |
| **currentUsage** | `integer` | No description | ❌ |
| **featureNotificationType** | `string` | No description | ❌ |
| **isBandwidthAddonMaxedOut** | `boolean` | No description | ❌ |
| **isCompletedAutoUpgradeDetermined** | `boolean` | No description | ❌ |
| **nextResetDate** | `string` | No description | ❌ |
| **nextTierPlan** | `string` | No description | ❌ |
| **notificationType** | `string` | No description | ❌ |
| **occurrence** | `string` | No description | ❌ |
| **previousUsage** | `unknown` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `string` | No description | ❌ |
| **siteName** | `string` | No description | ❌ |
| **siteSlug** | `string` | No description | ❌ |
| **subscriptionUpdatedOrigin** | `boolean` | No description | ❌ |
| **usageLimit** | `integer` | No description | ❌ |
| **usageLimitFormatted** | `string` | No description | ❌ |
| **usageLimitGB** | `integer` | No description | ❌ |
| **wentOverHighUsageThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **wentOverThresholdPreviousMonth** | `boolean` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
| **workspaceName** | `string` | No description | ❌ |
| **workspaceSlug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Overage Notification Upgrade Now Clicked", {
  "bannerId": "<<type: string, required: false>>",
  "currentPlan": "<<type: string, required: false>>",
  "currentPlanId": "<<type: string, required: false>>",
  "currentUsage": "<<type: integer, required: false>>",
  "featureNotificationType": "<<type: string, required: false>>",
  "isBandwidthAddonMaxedOut": "<<type: boolean, required: false>>",
  "isCompletedAutoUpgradeDetermined": "<<type: boolean, required: false>>",
  "nextResetDate": "<<type: string, required: false>>",
  "nextTierPlan": "<<type: string, required: false>>",
  "notificationType": "<<type: string, required: false>>",
  "occurrence": "<<type: string, required: false>>",
  "previousUsage": "<<type: unknown, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: string, required: false>>",
  "siteName": "<<type: string, required: false>>",
  "siteSlug": "<<type: string, required: false>>",
  "subscriptionUpdatedOrigin": "<<type: boolean, required: false>>",
  "usageLimit": "<<type: integer, required: false>>",
  "usageLimitFormatted": "<<type: string, required: false>>",
  "usageLimitGB": "<<type: integer, required: false>>",
  "wentOverHighUsageThresholdPreviousMonth": "<<type: boolean, required: false>>",
  "wentOverThresholdPreviousMonth": "<<type: boolean, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>",
  "workspaceName": "<<type: string, required: false>>",
  "workspaceSlug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Overage Notification Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **contact sales qualified** | `boolean` | No description | ❌ |
| **current month usage** | `integer` | No description | ❌ |
| **current plan id** | `string` | No description | ❌ |
| **current usage** | `integer` | No description | ❌ |
| **feature notification type** | `string` | No description | ❌ |
| **multiple** | `boolean` | No description | ❌ |
| **occurrence** | `string` | No description | ❌ |
| **previous month usage** | `unknown` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site name** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **usage limit** | `integer` | No description | ❌ |
| **went over high usage threshold previous month** | `boolean` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Overage Notification Viewed", {
  "action": "<<type: string, required: false>>",
  "contact sales qualified": "<<type: boolean, required: false>>",
  "current month usage": "<<type: integer, required: false>>",
  "current plan id": "<<type: string, required: false>>",
  "current usage": "<<type: integer, required: false>>",
  "feature notification type": "<<type: string, required: false>>",
  "multiple": "<<type: boolean, required: false>>",
  "occurrence": "<<type: string, required: false>>",
  "previous month usage": "<<type: unknown, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site name": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "usage limit": "<<type: integer, required: false>>",
  "went over high usage threshold previous month": "<<type: boolean, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Page Building Component Added

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **component root id** | `string` | No description | ❌ |
| **mode** | `string` | No description | ❌ |
| **page id** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site role** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Page Building Component Added", {
  "component root id": "<<type: string, required: false>>",
  "mode": "<<type: string, required: false>>",
  "page id": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site role": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Page Building Component Moved

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **component root id** | `string` | No description | ❌ |
| **mode** | `string` | No description | ❌ |
| **page id** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site role** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Page Building Component Moved", {
  "component root id": "<<type: string, required: false>>",
  "mode": "<<type: string, required: false>>",
  "page id": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site role": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Page Building Component Removed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **component root id** | `string` | No description | ❌ |
| **mode** | `string` | No description | ❌ |
| **page id** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site role** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Page Building Component Removed", {
  "component root id": "<<type: string, required: false>>",
  "mode": "<<type: string, required: false>>",
  "page id": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site role": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Partner Hub Availability Status Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **userId** | `string` | No description | ❌ |
| **workspaceId** | `string` | No description | ❌ |
| **workspaceRole** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Partner Hub Availability Status Clicked", {
  "userId": "<<type: string, required: false>>",
  "workspaceId": "<<type: string, required: false>>",
  "workspaceRole": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Partner Hub Code Copied

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **location** | `string` | No description | ❌ |
| **userId** | `string` | No description | ❌ |
| **workspaceId** | `string` | No description | ❌ |
| **workspaceRole** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Partner Hub Code Copied", {
  "location": "<<type: string, required: false>>",
  "userId": "<<type: string, required: false>>",
  "workspaceId": "<<type: string, required: false>>",
  "workspaceRole": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Partner Hub Commission Explainer Opened

<!-- tabs:start -->
### **Details**

#### **Description**

Partner Hub Commission Explainer Opened.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **userId** | `string` | No description | ❌ |
| **workspaceId** | `string` | No description | ❌ |
| **workspaceRole** | `string,null` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Partner Hub Commission Explainer Opened", {
  "userId": "<<type: string, required: false>>",
  "workspaceId": "<<type: string, required: false>>",
  "workspaceRole": "<<type: string,null, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Partner Hub Manipulative Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **params** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Partner Hub Manipulative Viewed", {
  "logged in": "<<type: boolean, required: false>>",
  "params": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Partner Hub Onboarding Step Completed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **requirement** | `string` | No description | ❌ |
| **role** | `string` | No description | ❌ |
| **step** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspaceId** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Partner Hub Onboarding Step Completed", {
  "requirement": "<<type: string, required: false>>",
  "role": "<<type: string, required: false>>",
  "step": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspaceId": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Partner Hub Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

Partner Hub Page Viewed.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **params** | `object` | No description | ❌ |
| **params.paramCollectionSlug** | `string` | No description | ❌ |
| **params.paramWorkspaceSlug** | `string` | No description | ❌ |
| **referer** | `string` | No description | ❌ |
| **userId** | `string` | No description | ❌ |
| **workspaceId** | `string` | No description | ❌ |
| **workspaceRole** | `string,null` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Partner Hub Page Viewed", {
  "page": "<<type: string, required: false>>",
  "params": {
    "paramCollectionSlug": "<<type: string, required: false>>",
    "paramWorkspaceSlug": "<<type: string, required: false>>"
  },
  "referer": "<<type: string, required: false>>",
  "userId": "<<type: string, required: false>>",
  "workspaceId": "<<type: string, required: false>>",
  "workspaceRole": "<<type: string,null, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Partner Hub Resource Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

Partner Hub Resource Viewed.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **resourceName** | `string` | No description | ❌ |
| **resourceType** | `string` | No description | ❌ |
| **userId** | `string` | No description | ❌ |
| **workspaceId** | `string` | No description | ❌ |
| **workspaceRole** | `string,null` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Partner Hub Resource Viewed", {
  "resourceName": "<<type: string, required: false>>",
  "resourceType": "<<type: string, required: false>>",
  "userId": "<<type: string, required: false>>",
  "workspaceId": "<<type: string, required: false>>",
  "workspaceRole": "<<type: string,null, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Partner Hub Step Waived

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **requirement** | `string` | No description | ❌ |
| **role** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspaceId** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Partner Hub Step Waived", {
  "requirement": "<<type: string, required: false>>",
  "role": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspaceId": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Partner Hub Submit Enterprise Lead Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **userId** | `string` | No description | ❌ |
| **workspaceId** | `string` | No description | ❌ |
| **workspaceRole** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Partner Hub Submit Enterprise Lead Clicked", {
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
| **initial plan frequency** | `string` | No description | ❌ |
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace initial number of seats** | `integer` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace new addons** | `object` | No description | ❌ |
| **workspace new addons.full seat count** | `integer` | No description | ❌ |
| **workspace new addons.limited seat count** | `integer` | No description | ❌ |
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
  "initial plan frequency": "<<type: string, required: false>>",
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace initial number of seats": "<<type: integer, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace new addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **initial plan frequency** | `string` | No description | ❌ |
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace initial number of seats** | `integer` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace new addons** | `object` | No description | ❌ |
| **workspace new addons.full seat count** | `integer` | No description | ❌ |
| **workspace new addons.limited seat count** | `integer` | No description | ❌ |
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
  "initial plan frequency": "<<type: string, required: false>>",
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace initial number of seats": "<<type: integer, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace new addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Person profile created

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
analytics.track("Person profile created", {
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Plan Modified

<!-- tabs:start -->
### **Details**

#### **Description**

Plan Modified.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **add-on initial quantity** | `integer` | No description | ❌ |
| **add-on new quantity** | `integer` | No description | ❌ |
| **charged amount** | `integer` | No description | ❌ |
| **comment** | `string` | No description | ❌ |
| **comments** | `string,null` | No description | ❌ |
| **cost of new plan** | `integer` | No description | ❌ |
| **currency of new plan** | `string` | No description | ❌ |
| **initial number of seats** | `integer` | No description | ❌ |
| **initial plan frequency** | `string` | No description | ❌ |
| **initial plan level** | `string` | No description | ❌ |
| **legacy initial number of seats** | `integer` | No description | ❌ |
| **legacy new number of seats** | `integer` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **new number of seats** | `integer` | No description | ❌ |
| **new plan frequency** | `string` | No description | ❌ |
| **new plan level** | `string` | No description | ❌ |
| **plan type** | `string` | No description | ❌ |
| **promotion applied** | `boolean` | No description | ❌ |
| **promotion code** | `unknown` | No description | ❌ |
| **promotion type** | `string` | No description | ❌ |
| **promotion value** | `integer` | No description | ❌ |
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
| **siteId** | `unknown` | No description | ❌ |
| **stripe subscription id** | `string` | No description | ❌ |
| **switch to competitor** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **transferring site** | `string` | No description | ❌ |
| **value of new plan** | `integer,null` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace initial number of seats** | `integer` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace new addons** | `object` | No description | ❌ |
| **workspace new addons.full seat count** | `integer` | No description | ❌ |
| **workspace new addons.limited seat count** | `integer` | No description | ❌ |
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
  "comments": "<<type: string,null, required: false>>",
  "cost of new plan": "<<type: integer, required: false>>",
  "currency of new plan": "<<type: string, required: false>>",
  "initial number of seats": "<<type: integer, required: false>>",
  "initial plan frequency": "<<type: string, required: false>>",
  "initial plan level": "<<type: string, required: false>>",
  "legacy initial number of seats": "<<type: integer, required: false>>",
  "legacy new number of seats": "<<type: integer, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "new number of seats": "<<type: integer, required: false>>",
  "new plan frequency": "<<type: string, required: false>>",
  "new plan level": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "promotion applied": "<<type: boolean, required: false>>",
  "promotion code": "<<type: unknown, required: false>>",
  "promotion type": "<<type: string, required: false>>",
  "promotion value": "<<type: integer, required: false>>",
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
  "siteId": "<<type: unknown, required: false>>",
  "stripe subscription id": "<<type: string, required: false>>",
  "switch to competitor": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "transferring site": "<<type: string, required: false>>",
  "value of new plan": "<<type: integer,null, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace initial number of seats": "<<type: integer, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace new addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
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
  "workspace addons": "<<type: object, required: false>>",
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
| **workspace addons** | `object` | No description | ❌ |
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
  "workspace addons": "<<type: object, required: false>>",
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


## Plan Recommendation Dismissed

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
| **workspace addons** | `object` | No description | ❌ |
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
analytics.track("Plan Recommendation Dismissed", {
  "banner version": "<<type: string, required: false>>",
  "initial plan level": "<<type: string, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "recommended plan level": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": "<<type: object, required: false>>",
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **transactionId** | `string` | No description | ❌ |
| **userAgent** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Plan Upgraded by Company", {
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Pricing Update Notification Closed

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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Pricing Update Notification Closed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Pricing Update Notification Go To Seats Clicked

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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Pricing Update Notification Go To Seats Clicked", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Pricing Update Notification Go to Billing Clicked

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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Pricing Update Notification Go to Billing Clicked", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Pricing Update Notification Go to Plans Clicked

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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Pricing Update Notification Go to Plans Clicked", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Pricing Update Notification Link Clicked

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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Pricing Update Notification Link Clicked", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Pricing Update Notification Sent

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **recipients** | `array` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Pricing Update Notification Sent", {
  "recipients": "<<type: array, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspace id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Pricing Update Notification Upgrade Now Clicked

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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Pricing Update Notification Upgrade Now Clicked", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
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


## Pricing Update Notification Viewed

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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Pricing Update Notification Viewed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Profile Edit Modal Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

Profile Edit Modal Viewed.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **profileId** | `string,null` | No description | ❌ |
| **profileName** | `string` | No description | ❌ |
| **profileSlug** | `string,null` | No description | ❌ |
| **tabName** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Profile Edit Modal Viewed", {
  "profileId": "<<type: string,null, required: false>>",
  "profileName": "<<type: string, required: false>>",
  "profileSlug": "<<type: string,null, required: false>>",
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Profile Settings Page Viewed", {
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Project Created

<!-- tabs:start -->
### **Details**

#### **Description**

Project Created.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **category** | `string` | No description | ❌ |
| **create method** | `string,null` | No description | ❌ |
| **from site** | `string,null` | No description | ❌ |
| **library cost** | `string` | No description | ❌ |
| **library id** | `string` | No description | ❌ |
| **library name** | `string` | No description | ❌ |
| **library selected position** | `unknown` | No description | ❌ |
| **price type** | `string` | No description | ❌ |
| **ref** | `string,null` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Project Created", {
  "action": "<<type: string, required: false>>",
  "category": "<<type: string, required: false>>",
  "create method": "<<type: string,null, required: false>>",
  "from site": "<<type: string,null, required: false>>",
  "library cost": "<<type: string, required: false>>",
  "library id": "<<type: string, required: false>>",
  "library name": "<<type: string, required: false>>",
  "library selected position": "<<type: unknown, required: false>>",
  "price type": "<<type: string, required: false>>",
  "ref": "<<type: string,null, required: false>>",
  "site id": "<<type: string, required: false>>",
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Property Toggle Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **element_type** | `string` | No description | ❌ |
| **path** | `string` | No description | ❌ |
| **property** | `string` | No description | ❌ |
| **state** | `unknown` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Property Toggle Clicked", {
  "element_type": "<<type: string, required: false>>",
  "path": "<<type: string, required: false>>",
  "property": "<<type: string, required: false>>",
  "state": "<<type: unknown, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Publishing Page Viewed

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
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Publishing Page Viewed", {
  "legacy team id": "<<type: string, required: false>>",
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


## Quick Help - Can I accept payments with iDEAL in Webflow Ecommerce? Clicked

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
analytics.track("Quick Help - Can I accept payments with iDEAL in Webflow Ecommerce? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - Can I bulk-import my products in Webflow Ecommerce? Clicked

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
analytics.track("Quick Help - Can I bulk-import my products in Webflow Ecommerce? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - Feature sunsets/deprecations Clicked

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
analytics.track("Quick Help - Feature sunsets/deprecations Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - How do I report spam, phishing, or abuse? Clicked

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
analytics.track("Quick Help - How do I report spam, phishing, or abuse? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - How do I reset my password? Clicked

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
analytics.track("Quick Help - How do I reset my password? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - How do I resolve the “That domain is already connected to a Webflow site” error? Clicked

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
analytics.track("Quick Help - How do I resolve the “That domain is already connected to a Webflow site” error? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - How do I submit a DMCA takedown request? Clicked

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
analytics.track("Quick Help - How do I submit a DMCA takedown request? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - How do I submit a trademark takedown request? Clicked

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
analytics.track("Quick Help - How do I submit a trademark takedown request? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - How do I unarchive a Workspace? Clicked

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
analytics.track("Quick Help - How do I unarchive a Workspace? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - How do I unarchive my site? Clicked

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
analytics.track("Quick Help - How do I unarchive my site? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - How to Switch from WordPress to Webflow: A Step-by-Step Guide Clicked

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
analytics.track("Quick Help - How to Switch from WordPress to Webflow: A Step-by-Step Guide Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - How to fix “User is required” or “missing username or email” error when logging into Webflow Clicked

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
analytics.track("Quick Help - How to fix “User is required” or “missing username or email” error when logging into Webflow Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - How to redeem your Webflow for startups discount Clicked

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
analytics.track("Quick Help - How to redeem your Webflow for startups discount Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - I Clicked

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
analytics.track("Quick Help - I Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - I can Clicked

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
analytics.track("Quick Help - I can Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - I can’t access the email associated with my Webflow account Clicked

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
analytics.track("Quick Help - I can’t access the email associated with my Webflow account Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - I need to transfer my Workspace to someone else Clicked

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
analytics.track("Quick Help - I need to transfer my Workspace to someone else Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - I signed up for a Webflow account but didn Clicked

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
analytics.track("Quick Help - I signed up for a Webflow account but didn Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - My payment failed — what should I do? Clicked

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
analytics.track("Quick Help - My payment failed — what should I do? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - Nonprofit Organization (NPO) discount Clicked

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
analytics.track("Quick Help - Nonprofit Organization (NPO) discount Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - Reconnect a custom domain if your Site plan is canceled Clicked

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
analytics.track("Quick Help - Reconnect a custom domain if your Site plan is canceled Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - The owner of our Workspace  has left our organization. How do I transfer ownership? Clicked

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
analytics.track("Quick Help - The owner of our Workspace  has left our organization. How do I transfer ownership? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - Unable to log in? Recover your account Clicked

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
analytics.track("Quick Help - Unable to log in? Recover your account Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - Understanding per page JavaScript and asynchronously loading JavaScript Clicked

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
analytics.track("Quick Help - Understanding per page JavaScript and asynchronously loading JavaScript Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - Updates to our pricing and product strategy for December 2024 Clicked

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
analytics.track("Quick Help - Updates to our pricing and product strategy for December 2024 Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - Webflow for educators Clicked

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
analytics.track("Quick Help - Webflow for educators Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - Webflow for students Clicked

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
analytics.track("Quick Help - Webflow for students Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - What’s the grace period discount? Clicked

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
analytics.track("Quick Help - What’s the grace period discount? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - Why can’t I archive my site? Clicked

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
analytics.track("Quick Help - Why can’t I archive my site? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Quick Help - Why was I charged when my site exceeded its bandwidth limit? Clicked

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
analytics.track("Quick Help - Why was I charged when my site exceeded its bandwidth limit? Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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


## Quick help Card Clicked

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
analytics.track("Quick help Card Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Redirect Export Button Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Redirect Export Button Clicked", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Redirect Import Button Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site_id** | `string` | No description | ❌ |
| **workspace_id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Redirect Import Button Clicked", {
  "site_id": "<<type: string, required: false>>",
  "workspace_id": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Redirect Import Modal Closed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Redirect Import Modal Closed", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Redirect Import Modal Opened

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Redirect Import Modal Opened", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Related Article Clicked

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
analytics.track("Related Article Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Related Templates - Experiment Assigned

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
analytics.track("Related Templates - Experiment Assigned", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "variant": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Related Templates - Fallback to Similar

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
| **template** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Related Templates - Fallback to Similar", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "template": "<<type: string, required: false>>"
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Remove Payment Method Cancelled", {
  "form context": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Remove Payment Method Clicked", {
  "form context": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Remove Payment Method Confirmed", {
  "form context": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Request Sent

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **element_type** | `string` | No description | ❌ |
| **path** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Request Sent", {
  "element_type": "<<type: string, required: false>>",
  "path": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Request form submitted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **form** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Request form submitted", {
  "form": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Request refund Clicked

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
analytics.track("Request refund Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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


## Resources - Blog Clicked

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
analytics.track("Resources - Blog Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Resources - Community Clicked

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
analytics.track("Resources - Community Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Resources - Ebooks Clicked

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
analytics.track("Resources - Ebooks Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Resources - Forum Clicked

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
analytics.track("Resources - Forum Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Rich text content pasted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **is sanitized** | `boolean` | No description | ❌ |
| **sanitized data** | `object` | No description | ❌ |
| **sanitized data.clean** | `string` | No description | ❌ |
| **sanitized data.raw** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Rich text content pasted", {
  "is sanitized": "<<type: boolean, required: false>>",
  "sanitized data": {
    "clean": "<<type: string, required: false>>",
    "raw": "<<type: string, required: false>>"
  },
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## SEO Link Clicked

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
analytics.track("SEO Link Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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


## Save Custom Code

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **custom code location** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Save Custom Code", {
  "custom code location": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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


## Scroll Depth Reached

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **depth** | `integer` | No description | ❌ |
| **pageHeight** | `integer` | No description | ❌ |
| **path** | `string` | No description | ❌ |
| **viewportHeight** | `integer` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Scroll Depth Reached", {
  "depth": "<<type: integer, required: false>>",
  "pageHeight": "<<type: integer, required: false>>",
  "path": "<<type: string, required: false>>",
  "viewportHeight": "<<type: integer, required: false>>"
})
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


## Secondary Thumbnail - Experiment Assigned

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
analytics.track("Secondary Thumbnail - Experiment Assigned", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "variant": "<<type: string, required: false>>"
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


## Security Link Clicked

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
analytics.track("Security Link Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Segmentation Survey Completed

<!-- tabs:start -->
### **Details**

#### **Description**

Segmentation Survey Completed.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **anythingElse** | `string` | No description | ❌ |
| **become expert interest** | `string` | No description | ❌ |
| **budget** | `string` | No description | ❌ |
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
| **isStudent** | `string,null` | No description | ❌ |
| **locationPreference** | `string` | No description | ❌ |
| **number of steps** | `integer` | No description | ❌ |
| **onboardProjAirtableUID** | `string` | No description | ❌ |
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
  "anythingElse": "<<type: string, required: false>>",
  "become expert interest": "<<type: string, required: false>>",
  "budget": "<<type: string, required: false>>",
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
  "isStudent": "<<type: string,null, required: false>>",
  "locationPreference": "<<type: string, required: false>>",
  "number of steps": "<<type: integer, required: false>>",
  "onboardProjAirtableUID": "<<type: string, required: false>>",
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

Segmentation Survey Page Viewed.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page type** | `string` | No description | ❌ |
| **redirect** | `boolean,null` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **trigger source** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Segmentation Survey Page Viewed", {
  "page type": "<<type: string, required: false>>",
  "redirect": "<<type: boolean,null, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "trigger source": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Segmentation Survey Step Submitted

<!-- tabs:start -->
### **Details**

#### **Description**

Segmentation Survey Step Submitted.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **business owner** | `boolean` | No description | ❌ |
| **email opt-in** | `boolean` | No description | ❌ |
| **option order** | `array` | No description | ❌ |
| **options selected** | `any` | No description | ❌ |
| **position of selected option** | `integer` | No description | ❌ |
| **pre-checked email opt-in** | `boolean` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **step name** | `string` | No description | ❌ |
| **step number** | `string` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **trigger source** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "options selected": "<<type: any, required: false>>",
  "position of selected option": "<<type: integer, required: false>>",
  "pre-checked email opt-in": "<<type: boolean, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "step name": "<<type: string, required: false>>",
  "step number": "<<type: string, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "trigger source": "<<type: string, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **action** | `string` | No description | ❌ |
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
  "action": "<<type: string, required: false>>",
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

Showcase Search Results Viewed.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **search** | `string,null` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Showcase Search Results Viewed", {
  "ref": "<<type: string, required: false>>",
  "search": "<<type: string,null, required: false>>",
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

Showcase Viewed.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **additionalTags** | `array,null` | No description | ❌ |
| **clone type** | `string` | No description | ❌ |
| **designer id** | `string` | No description | ❌ |
| **loggedIn** | `boolean` | No description | ❌ |
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
| **tags** | `array,null` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Showcase Viewed", {
  "additionalTags": "<<type: array,null, required: false>>",
  "clone type": "<<type: string, required: false>>",
  "designer id": "<<type: string, required: false>>",
  "loggedIn": "<<type: boolean, required: false>>",
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
  "tags": "<<type: array,null, required: false>>",
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
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **team id** | `string` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **transactionId** | `string` | No description | ❌ |
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "source": "<<type: string, required: false>>",
  "team id": "<<type: string, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "transactionId": "<<type: string, required: false>>",
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Signed Up", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Since You Been Gone Modal Closed

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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Since You Been Gone Modal Closed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Since You Been Gone Modal Viewed

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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Since You Been Gone Modal Viewed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Site Billing Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **cancellation source** | `string` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **primary upgrade source** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `string` | No description | ❌ |
| **tab** | `string` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **timestamp** | `integer` | No description | ❌ |
| **upgrade prompt** | `string` | No description | ❌ |
| **upgrade source page** | `string` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Billing Page Viewed", {
  "cancellation source": "<<type: string, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "primary upgrade source": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: string, required: false>>",
  "tab": "<<type: string, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "timestamp": "<<type: integer, required: false>>",
  "upgrade prompt": "<<type: string, required: false>>",
  "upgrade source page": "<<type: string, required: false>>",
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Site Plans Page Viewed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "tab": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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

Site Selected.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site** | `object,string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Site Selected", {
  "site": "<<type: object,string, required: false>>"
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Site Settings Page Viewed", {
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **added user data.items.siteRoleId** | `string` | No description | ❌ |
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
      "siteRoleId": "<<type: string, required: false>>",
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Site Transfer Canceled", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Site Transfer Modal Canceled", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Site Transfer Modal Opened", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **after** | `string` | No description | ❌ |
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
  "after": "<<type: string, required: false>>",
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan selected** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan selected": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Survey Modal Opened", {
  "is frequency survey": "<<type: boolean, required: false>>",
  "plan type": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "survey type": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan selected** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan selected": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Tab Pressed", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "tab": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Template Card Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **has_secondary_thumbnail** | `boolean` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **secondary_thumbnail_variant** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **source_page_title** | `string` | No description | ❌ |
| **source_page_url** | `string` | No description | ❌ |
| **template_index** | `integer` | No description | ❌ |
| **template_name** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Card Clicked", {
  "has_secondary_thumbnail": "<<type: boolean, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "secondary_thumbnail_variant": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "source_page_title": "<<type: string, required: false>>",
  "source_page_url": "<<type: string, required: false>>",
  "template_index": "<<type: integer, required: false>>",
  "template_name": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Detail Page - Browse Author Clicked

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
| **template** | `string` | No description | ❌ |
| **variant** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Detail Page - Browse Author Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "template": "<<type: string, required: false>>",
  "variant": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Detail Page - Full Description Collapsed

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
| **template** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Detail Page - Full Description Collapsed", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "template": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Detail Page - Full Description Expanded

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
| **template** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Detail Page - Full Description Expanded", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "template": "<<type: string, required: false>>"
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


## Template Detail Page - Related Templates Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **click_area** | `string` | No description | ❌ |
| **clicked_template** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **template** | `string` | No description | ❌ |
| **template_index** | `integer` | No description | ❌ |
| **variant** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Detail Page - Related Templates Clicked", {
  "click_area": "<<type: string, required: false>>",
  "clicked_template": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "template": "<<type: string, required: false>>",
  "template_index": "<<type: integer, required: false>>",
  "variant": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Detail Page - Similar Templates Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **click_area** | `string` | No description | ❌ |
| **clicked_template** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **template** | `string` | No description | ❌ |
| **template_index** | `integer` | No description | ❌ |
| **variant** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Detail Page - Similar Templates Clicked", {
  "click_area": "<<type: string, required: false>>",
  "clicked_template": "<<type: string, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "template": "<<type: string, required: false>>",
  "template_index": "<<type: integer, required: false>>",
  "variant": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Item CTA Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

Template Item CTA Clicked.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **action** | `string` | No description | ❌ |
| **category** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **template cost** | `integer,null` | No description | ❌ |
| **template id** | `string` | No description | ❌ |
| **template index** | `integer` | No description | ❌ |
| **template name** | `string` | No description | ❌ |
| **template selected position** | `integer` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "template cost": "<<type: integer,null, required: false>>",
  "template id": "<<type: string, required: false>>",
  "template index": "<<type: integer, required: false>>",
  "template name": "<<type: string, required: false>>",
  "template selected position": "<<type: integer, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **AISBExperimentVariant** | `string` | No description | ❌ |
| **category** | `string` | No description | ❌ |
| **enabledAISiteGenViaMarketingSite** | `boolean` | No description | ❌ |
| **isInAiSiteGenFlag** | `boolean` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **shouldShowAISiteGenOption** | `boolean` | No description | ❌ |
| **type** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Modal Selected", {
  "AISBExperimentVariant": "<<type: string, required: false>>",
  "category": "<<type: string, required: false>>",
  "enabledAISiteGenViaMarketingSite": "<<type: boolean, required: false>>",
  "isInAiSiteGenFlag": "<<type: boolean, required: false>>",
  "ref": "<<type: string, required: false>>",
  "shouldShowAISiteGenOption": "<<type: boolean, required: false>>",
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


## Template Search - Clicked Buy Btn

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **price** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Search - Clicked Buy Btn", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "price": "<<type: string, required: false>>",
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


## Template Search - Image Scrolled Inside Popup

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **scrollingToIndex** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Template Search - Image Scrolled Inside Popup", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "scrollingToIndex": "<<type: string, required: false>>",
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


## Template Search - Opened Iframe in New Tab

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
analytics.track("Template Search - Opened Iframe in New Tab", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Template Search - Prev Page Clicked

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
analytics.track("Template Search - Prev Page Clicked", {
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
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **team id** | `unknown` | No description | ❌ |
| **teamId** | `unknown` | No description | ❌ |
| **template** | `string` | No description | ❌ |
| **template cost** | `string` | No description | ❌ |
| **template id** | `string` | No description | ❌ |
| **timestamp** | `unknown` | No description | ❌ |
| **wf session id** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "team id": "<<type: unknown, required: false>>",
  "teamId": "<<type: unknown, required: false>>",
  "template": "<<type: string, required: false>>",
  "template cost": "<<type: string, required: false>>",
  "template id": "<<type: string, required: false>>",
  "timestamp": "<<type: unknown, required: false>>",
  "wf session id": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Time Active on Page

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **page** | `string` | No description | ❌ |
| **timeSpent** | `number` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Time Active on Page", {
  "page": "<<type: string, required: false>>",
  "timeSpent": "<<type: number, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Toggled Bot Protection

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **value** | `boolean` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Toggled Bot Protection", {
  "value": "<<type: boolean, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Toggled Hide Branding

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
analytics.track("Toggled Hide Branding", {
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


## Toggled Webflow badge

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Toggled Webflow badge", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## Top Search Clicked

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
analytics.track("Top Search Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
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

University Lesson Completed.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **course** | `string` | No description | ❌ |
| **course progress** | `integer,null` | No description | ❌ |
| **lesson name** | `string` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **page** | `string` | No description | ❌ |
| **source** | `string` | No description | ❌ |
| **video id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("University Lesson Completed", {
  "course": "<<type: string, required: false>>",
  "course progress": "<<type: integer,null, required: false>>",
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Update Payment Method Clicked", {
  "form context": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
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


## Updated Email Notifications

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **account** | `boolean` | No description | ❌ |
| **blog** | `boolean` | No description | ❌ |
| **events** | `boolean` | No description | ❌ |
| **feature** | `boolean` | No description | ❌ |
| **followerUpdates** | `unknown` | No description | ❌ |
| **product** | `boolean` | No description | ❌ |
| **showcaseActivity** | `boolean` | No description | ❌ |
| **showcaseActivityWeekly** | `boolean` | No description | ❌ |
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
  "account": "<<type: boolean, required: false>>",
  "blog": "<<type: boolean, required: false>>",
  "events": "<<type: boolean, required: false>>",
  "feature": "<<type: boolean, required: false>>",
  "followerUpdates": "<<type: unknown, required: false>>",
  "product": "<<type: boolean, required: false>>",
  "showcaseActivity": "<<type: boolean, required: false>>",
  "showcaseActivityWeekly": "<<type: boolean, required: false>>",
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
| **setting** | `string` | No description | ❌ |
| **settings_name** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **siteId** | `unknown` | No description | ❌ |
| **site_id** | `string` | No description | ❌ |
| **site_slug** | `string` | No description | ❌ |
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
| **workspace_id** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Updated Site Settings", {
  "legacy team id": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "setting": "<<type: string, required: false>>",
  "settings_name": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "siteId": "<<type: unknown, required: false>>",
  "site_id": "<<type: string, required: false>>",
  "site_slug": "<<type: string, required: false>>",
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
  "workspace slug": "<<type: string, required: false>>",
  "workspace_id": "<<type: string, required: false>>"
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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

Upgraded plan.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **city** | `string` | No description | ❌ |
| **client work** | `array,null` | No description | ❌ |
| **country** | `string` | No description | ❌ |
| **email** | `string` | No description | ❌ |
| **legacy team id** | `string` | No description | ❌ |
| **plan** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Upgraded plan", {
  "city": "<<type: string, required: false>>",
  "client work": "<<type: array,null, required: false>>",
  "country": "<<type: string, required: false>>",
  "email": "<<type: string, required: false>>",
  "legacy team id": "<<type: string, required: false>>",
  "plan": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
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
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## View updates Clicked

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
analytics.track("View updates Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
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
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Visit 404 Page", {
  "source": "<<type: string, required: false>>"
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
| **source** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Visit Customers Page", {
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Visit Workspace Profile

<!-- tabs:start -->
### **Details**

#### **Description**

Visit Workspace Profile.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **designer** | `string` | No description | ❌ |
| **hasTestimonials** | `boolean` | No description | ❌ |
| **isExpert** | `boolean` | No description | ❌ |
| **isOwnProfile** | `boolean` | No description | ❌ |
| **numShowcasedSites** | `integer` | No description | ❌ |
| **param** | `string` | No description | ❌ |
| **param","ac0x3f031q":"ac0x3f031q","":"** | `string` | No description | ❌ |
| **param","b5n66sa8d8":"b5n66sa8d8","":"** | `string` | No description | ❌ |
| **param","brrrbn33wf":"brrrbn33wf","":"** | `string` | No description | ❌ |
| **param","bsrkdq5w2i":"bsrkdq5w2i","":"** | `string` | No description | ❌ |
| **param","bwytyf25ip":"bwytyf25ip","":"** | `string` | No description | ❌ |
| **param","bx3rvd6nn1":"bx3rvd6nn1","":"** | `string` | No description | ❌ |
| **param","dql8tr7hmg":"dql8tr7hmg","":"** | `string` | No description | ❌ |
| **param","edfspz14u3":"edfspz14u3","":"** | `string` | No description | ❌ |
| **param","esbg3mxk0r":"esbg3mxk0r","":"** | `string` | No description | ❌ |
| **param","evct49q6xo":"evct49q6xo","":"** | `string` | No description | ❌ |
| **param","fnbubrqvam":"fnbubrqvam","":"** | `string` | No description | ❌ |
| **param","fuknfn82sm":"fuknfn82sm","":"** | `string` | No description | ❌ |
| **param","ge8i5pt1zm":"ge8i5pt1zm","":"** | `string` | No description | ❌ |
| **param","hxfrs8n70i":"hxfrs8n70i","":"** | `string` | No description | ❌ |
| **param","idf4akic16":"idf4akic16","":"** | `string` | No description | ❌ |
| **param","ig6l878ok0":"ig6l878ok0","":"** | `string` | No description | ❌ |
| **param","iu9n7u7jso":"iu9n7u7jso","":"** | `string` | No description | ❌ |
| **param","j7xa5mh8xb":"j7xa5mh8xb","":"** | `string` | No description | ❌ |
| **param","jsht5wn0eh":"jsht5wn0eh","":"** | `string` | No description | ❌ |
| **param","k8gkcz6grz":"k8gkcz6grz","":"** | `string` | No description | ❌ |
| **param","ka8ltspc2j":"ka8ltspc2j","":"** | `string` | No description | ❌ |
| **param","kzpo1xwlhf":"kzpo1xwlhf","":"** | `string` | No description | ❌ |
| **param","lgbl4q8q83":"lgbl4q8q83","":"** | `string` | No description | ❌ |
| **param","m6ir3mpz34":"m6ir3mpz34","":"** | `string` | No description | ❌ |
| **param","nn3bty9fsh":"nn3bty9fsh","":"** | `string` | No description | ❌ |
| **param","o0by461lb8":"o0by461lb8","":"** | `string` | No description | ❌ |
| **param","o5icwef790":"o5icwef790","":"** | `string` | No description | ❌ |
| **param","oi8lrramtm":"oi8lrramtm","":"** | `string` | No description | ❌ |
| **param","pskdk9n0nq":"pskdk9n0nq","":"** | `string` | No description | ❌ |
| **param","pt0bngy0m1":"pt0bngy0m1","":"** | `string` | No description | ❌ |
| **param","pwcoolc5of":"pwcoolc5of","":"** | `string` | No description | ❌ |
| **param","s6muhpsd31":"s6muhpsd31","":"** | `string` | No description | ❌ |
| **param","uuf6y3y2y8":"uuf6y3y2y8","":"** | `string` | No description | ❌ |
| **param","uvukotrrig":"uvukotrrig","":"** | `string` | No description | ❌ |
| **param","wzuurfdijf":"wzuurfdijf","":"** | `string` | No description | ❌ |
| **param","z4aem92yok":"z4aem92yok","":"** | `string` | No description | ❌ |
| **param","zgzlkr66fu":"zgzlkr66fu","":"** | `string` | No description | ❌ |
| **param","zltp5xoquz":"zltp5xoquz","":"** | `string` | No description | ❌ |
| **param//ab0wf2vby9** | `string` | No description | ❌ |
| **param//auewxgbott** | `string` | No description | ❌ |
| **param//b42mzueiqw** | `string` | No description | ❌ |
| **param//bdbh75osqp** | `string` | No description | ❌ |
| **param//bgtl15bjxf** | `string` | No description | ❌ |
| **param//c4weehb6os** | `string` | No description | ❌ |
| **param//cvygmgi6te** | `string` | No description | ❌ |
| **param//dkbqnr5xve** | `string` | No description | ❌ |
| **param//dpe8g93ekm** | `string` | No description | ❌ |
| **param//dw374yaw9g** | `string` | No description | ❌ |
| **param//fps8ekecne** | `string` | No description | ❌ |
| **param//h1vov50qyk** | `string` | No description | ❌ |
| **param//hbrisiou7s** | `string` | No description | ❌ |
| **param//he2skp9x2u** | `string` | No description | ❌ |
| **param//hi8rjnlpt9** | `string` | No description | ❌ |
| **param//irzrxqy520** | `string` | No description | ❌ |
| **param//jdztvb9vm1** | `string` | No description | ❌ |
| **param//jmhbtlel3d** | `string` | No description | ❌ |
| **param//k48ict7rk3** | `string` | No description | ❌ |
| **param//k68kbmmsgr** | `string` | No description | ❌ |
| **param//khctlurc1q** | `string` | No description | ❌ |
| **param//kpivb30zz5** | `string` | No description | ❌ |
| **param//kufcbgusnz** | `string` | No description | ❌ |
| **param//lspvn3pq1l** | `string` | No description | ❌ |
| **param//m1wc0q6u0s** | `string` | No description | ❌ |
| **param//n8rvrhxs2f** | `string` | No description | ❌ |
| **param//nfnc6488yd** | `string` | No description | ❌ |
| **param//ntefjd8uzc** | `string` | No description | ❌ |
| **param//o0av5dpl35** | `string` | No description | ❌ |
| **param//o4l4x052sm** | `string` | No description | ❌ |
| **param//pdklpyr8i2** | `string` | No description | ❌ |
| **param//pwhu4off3x** | `string` | No description | ❌ |
| **param//qqdw23wo96** | `string` | No description | ❌ |
| **param//rn9fbupjn9** | `string` | No description | ❌ |
| **param//rzy4q8uka0** | `string` | No description | ❌ |
| **param//s36let8oax** | `string` | No description | ❌ |
| **param//s8c74osa5j** | `string` | No description | ❌ |
| **param//t6zvjvtsmn** | `string` | No description | ❌ |
| **param//tybsr5z6ur** | `string` | No description | ❌ |
| **param//u53fw7xv9h** | `string` | No description | ❌ |
| **param//uuyjj7xwcn** | `string` | No description | ❌ |
| **param//vat8b2h1s5** | `string` | No description | ❌ |
| **param//w8g3ni9xpa** | `string` | No description | ❌ |
| **param//x3b3vwd3y5** | `string` | No description | ❌ |
| **param//xkz9z7tq9j** | `string` | No description | ❌ |
| **param//xyisgomxb1** | `string` | No description | ❌ |
| **param//ye2j32e2uo** | `string` | No description | ❌ |
| **param//yk2zk5pmn7** | `string` | No description | ❌ |
| **param//ykvq1va04y** | `string` | No description | ❌ |
| **param//yp1xqkjo79** | `string` | No description | ❌ |
| **param//zznn8e9p8g** | `string` | No description | ❌ |
| **param/edit** | `string` | No description | ❌ |
| **param9fdacd48_page** | `string` | No description | ❌ |
| **param<br** | `string` | No description | ❌ |
| **paramASddas** | `string` | No description | ❌ |
| **paramAsfd** | `string` | No description | ❌ |
| **paramBvred** | `string` | No description | ❌ |
| **paramBxmv0eknwt** | `string` | No description | ❌ |
| **paramCheckbox-Free** | `string` | No description | ❌ |
| **paramCho3f2a1wh** | `string` | No description | ❌ |
| **paramCloneable** | `string` | No description | ❌ |
| **paramDarkschemeovr** | `string` | No description | ❌ |
| **paramDescriptionFromFileType** | `string` | No description | ❌ |
| **paramDosi5vqz6i** | `string` | No description | ❌ |
| **paramE642diyjzl** | `string` | No description | ❌ |
| **paramE6v973o30v** | `string` | No description | ❌ |
| **paramEdit** | `string` | No description | ❌ |
| **paramEog7cwpqcj** | `string` | No description | ❌ |
| **paramFbclid** | `string` | No description | ❌ |
| **paramFeatures** | `string` | No description | ❌ |
| **paramForm** | `string` | No description | ❌ |
| **paramFrom** | `string` | No description | ❌ |
| **paramFunctionality** | `array` | No description | ❌ |
| **paramGad_source** | `string` | No description | ❌ |
| **paramGbraid** | `string` | No description | ❌ |
| **paramGclid** | `string` | No description | ❌ |
| **paramGidzl** | `string` | No description | ❌ |
| **paramGspk** | `string` | No description | ❌ |
| **paramGsxid** | `string` | No description | ❌ |
| **paramHl** | `string` | No description | ❌ |
| **paramHss_channel** | `string` | No description | ❌ |
| **paramHttp://cdfof6kdxu** | `object` | No description | ❌ |
| **paramHttp://cdfof6kdxu.com** | `string` | No description | ❌ |
| **paramHttp://had5lpmhhm** | `object` | No description | ❌ |
| **paramHttp://had5lpmhhm.com** | `string` | No description | ❌ |
| **paramJhfzqald4v** | `string` | No description | ❌ |
| **paramKeaczwuxab** | `string` | No description | ❌ |
| **paramLdj6buxm4g** | `string` | No description | ❌ |
| **paramLtclid** | `string` | No description | ❌ |
| **paramLutges1abn** | `string` | No description | ❌ |
| **paramMbstx** | `string` | No description | ❌ |
| **paramMc_cid** | `string` | No description | ❌ |
| **paramMc_eid** | `string` | No description | ❌ |
| **paramMil66npajz** | `string` | No description | ❌ |
| **paramMkt_tok** | `string` | No description | ❌ |
| **paramMode** | `string` | No description | ❌ |
| **paramMsockid** | `string` | No description | ❌ |
| **paramN3g40c4tzc** | `string` | No description | ❌ |
| **paramNbcs** | `string` | No description | ❌ |
| **paramOikm** | `string` | No description | ❌ |
| **paramPs_partner** | `string` | No description | ❌ |
| **paramPs_partner_key** | `string` | No description | ❌ |
| **paramPs_xid** | `string` | No description | ❌ |
| **paramPscd** | `string` | No description | ❌ |
| **paramQdir7yhxvy** | `string` | No description | ❌ |
| **paramR5opqsu5o0** | `string` | No description | ❌ |
| **paramRef** | `string` | No description | ❌ |
| **paramReferrer** | `string` | No description | ❌ |
| **paramResubmit** | `string` | No description | ❌ |
| **paramRfsn** | `string` | No description | ❌ |
| **paramRoutes** | `array` | No description | ❌ |
| **paramRuq68wsctg** | `string` | No description | ❌ |
| **paramS** | `string` | No description | ❌ |
| **paramSearch** | `string` | No description | ❌ |
| **paramSid1** | `string` | No description | ❌ |
| **paramSlug** | `string` | No description | ❌ |
| **paramSource** | `string` | No description | ❌ |
| **paramSpm** | `string` | No description | ❌ |
| **paramSsId** | `string` | No description | ❌ |
| **paramStatus** | `string` | No description | ❌ |
| **paramT** | `string` | No description | ❌ |
| **paramTest1** | `string` | No description | ❌ |
| **paramTest2** | `string` | No description | ❌ |
| **paramTrk** | `string` | No description | ❌ |
| **paramTtclid** | `string` | No description | ❌ |
| **paramU5369cmsre** | `string` | No description | ❌ |
| **paramUtm-source** | `string` | No description | ❌ |
| **paramUtm_adgroup** | `string` | No description | ❌ |
| **paramUtm_adname** | `string` | No description | ❌ |
| **paramUtm_camapign** | `string` | No description | ❌ |
| **paramUtm_campaign** | `string` | No description | ❌ |
| **paramUtm_content** | `string` | No description | ❌ |
| **paramUtm_id** | `string` | No description | ❌ |
| **paramUtm_medium** | `string,null` | No description | ❌ |
| **paramUtm_source** | `string` | No description | ❌ |
| **paramUtm_term** | `string` | No description | ❌ |
| **paramUybv** | `string` | No description | ❌ |
| **paramVia** | `string` | No description | ❌ |
| **paramWbe4bd6gmy** | `string` | No description | ❌ |
| **paramWbraid** | `string` | No description | ❌ |
| **paramZarsrc** | `string` | No description | ❌ |
| **paramZj84qqw3r5** | `string` | No description | ❌ |
| **paramZksas48k2b** | `string` | No description | ❌ |
| **paramZohyfwrtbd** | `string` | No description | ❌ |
| **param_hsenc** | `string` | No description | ❌ |
| **param_hsmi** | `string` | No description | ❌ |
| **param_se** | `string` | No description | ❌ |
| **param_vd** | `string` | No description | ❌ |
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
  "param": "<<type: string, required: false>>",
  "param\",\"ac0x3f031q\":\"ac0x3f031q\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"b5n66sa8d8\":\"b5n66sa8d8\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"brrrbn33wf\":\"brrrbn33wf\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"bsrkdq5w2i\":\"bsrkdq5w2i\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"bwytyf25ip\":\"bwytyf25ip\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"bx3rvd6nn1\":\"bx3rvd6nn1\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"dql8tr7hmg\":\"dql8tr7hmg\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"edfspz14u3\":\"edfspz14u3\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"esbg3mxk0r\":\"esbg3mxk0r\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"evct49q6xo\":\"evct49q6xo\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"fnbubrqvam\":\"fnbubrqvam\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"fuknfn82sm\":\"fuknfn82sm\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"ge8i5pt1zm\":\"ge8i5pt1zm\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"hxfrs8n70i\":\"hxfrs8n70i\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"idf4akic16\":\"idf4akic16\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"ig6l878ok0\":\"ig6l878ok0\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"iu9n7u7jso\":\"iu9n7u7jso\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"j7xa5mh8xb\":\"j7xa5mh8xb\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"jsht5wn0eh\":\"jsht5wn0eh\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"k8gkcz6grz\":\"k8gkcz6grz\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"ka8ltspc2j\":\"ka8ltspc2j\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"kzpo1xwlhf\":\"kzpo1xwlhf\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"lgbl4q8q83\":\"lgbl4q8q83\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"m6ir3mpz34\":\"m6ir3mpz34\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"nn3bty9fsh\":\"nn3bty9fsh\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"o0by461lb8\":\"o0by461lb8\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"o5icwef790\":\"o5icwef790\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"oi8lrramtm\":\"oi8lrramtm\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"pskdk9n0nq\":\"pskdk9n0nq\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"pt0bngy0m1\":\"pt0bngy0m1\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"pwcoolc5of\":\"pwcoolc5of\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"s6muhpsd31\":\"s6muhpsd31\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"uuf6y3y2y8\":\"uuf6y3y2y8\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"uvukotrrig\":\"uvukotrrig\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"wzuurfdijf\":\"wzuurfdijf\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"z4aem92yok\":\"z4aem92yok\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"zgzlkr66fu\":\"zgzlkr66fu\",\"\":\"": "<<type: string, required: false>>",
  "param\",\"zltp5xoquz\":\"zltp5xoquz\",\"\":\"": "<<type: string, required: false>>",
  "param//ab0wf2vby9": "<<type: string, required: false>>",
  "param//auewxgbott": "<<type: string, required: false>>",
  "param//b42mzueiqw": "<<type: string, required: false>>",
  "param//bdbh75osqp": "<<type: string, required: false>>",
  "param//bgtl15bjxf": "<<type: string, required: false>>",
  "param//c4weehb6os": "<<type: string, required: false>>",
  "param//cvygmgi6te": "<<type: string, required: false>>",
  "param//dkbqnr5xve": "<<type: string, required: false>>",
  "param//dpe8g93ekm": "<<type: string, required: false>>",
  "param//dw374yaw9g": "<<type: string, required: false>>",
  "param//fps8ekecne": "<<type: string, required: false>>",
  "param//h1vov50qyk": "<<type: string, required: false>>",
  "param//hbrisiou7s": "<<type: string, required: false>>",
  "param//he2skp9x2u": "<<type: string, required: false>>",
  "param//hi8rjnlpt9": "<<type: string, required: false>>",
  "param//irzrxqy520": "<<type: string, required: false>>",
  "param//jdztvb9vm1": "<<type: string, required: false>>",
  "param//jmhbtlel3d": "<<type: string, required: false>>",
  "param//k48ict7rk3": "<<type: string, required: false>>",
  "param//k68kbmmsgr": "<<type: string, required: false>>",
  "param//khctlurc1q": "<<type: string, required: false>>",
  "param//kpivb30zz5": "<<type: string, required: false>>",
  "param//kufcbgusnz": "<<type: string, required: false>>",
  "param//lspvn3pq1l": "<<type: string, required: false>>",
  "param//m1wc0q6u0s": "<<type: string, required: false>>",
  "param//n8rvrhxs2f": "<<type: string, required: false>>",
  "param//nfnc6488yd": "<<type: string, required: false>>",
  "param//ntefjd8uzc": "<<type: string, required: false>>",
  "param//o0av5dpl35": "<<type: string, required: false>>",
  "param//o4l4x052sm": "<<type: string, required: false>>",
  "param//pdklpyr8i2": "<<type: string, required: false>>",
  "param//pwhu4off3x": "<<type: string, required: false>>",
  "param//qqdw23wo96": "<<type: string, required: false>>",
  "param//rn9fbupjn9": "<<type: string, required: false>>",
  "param//rzy4q8uka0": "<<type: string, required: false>>",
  "param//s36let8oax": "<<type: string, required: false>>",
  "param//s8c74osa5j": "<<type: string, required: false>>",
  "param//t6zvjvtsmn": "<<type: string, required: false>>",
  "param//tybsr5z6ur": "<<type: string, required: false>>",
  "param//u53fw7xv9h": "<<type: string, required: false>>",
  "param//uuyjj7xwcn": "<<type: string, required: false>>",
  "param//vat8b2h1s5": "<<type: string, required: false>>",
  "param//w8g3ni9xpa": "<<type: string, required: false>>",
  "param//x3b3vwd3y5": "<<type: string, required: false>>",
  "param//xkz9z7tq9j": "<<type: string, required: false>>",
  "param//xyisgomxb1": "<<type: string, required: false>>",
  "param//ye2j32e2uo": "<<type: string, required: false>>",
  "param//yk2zk5pmn7": "<<type: string, required: false>>",
  "param//ykvq1va04y": "<<type: string, required: false>>",
  "param//yp1xqkjo79": "<<type: string, required: false>>",
  "param//zznn8e9p8g": "<<type: string, required: false>>",
  "param/edit": "<<type: string, required: false>>",
  "param9fdacd48_page": "<<type: string, required: false>>",
  "param<br": "<<type: string, required: false>>",
  "paramASddas": "<<type: string, required: false>>",
  "paramAsfd": "<<type: string, required: false>>",
  "paramBvred": "<<type: string, required: false>>",
  "paramBxmv0eknwt": "<<type: string, required: false>>",
  "paramCheckbox-Free": "<<type: string, required: false>>",
  "paramCho3f2a1wh": "<<type: string, required: false>>",
  "paramCloneable": "<<type: string, required: false>>",
  "paramDarkschemeovr": "<<type: string, required: false>>",
  "paramDescriptionFromFileType": "<<type: string, required: false>>",
  "paramDosi5vqz6i": "<<type: string, required: false>>",
  "paramE642diyjzl": "<<type: string, required: false>>",
  "paramE6v973o30v": "<<type: string, required: false>>",
  "paramEdit": "<<type: string, required: false>>",
  "paramEog7cwpqcj": "<<type: string, required: false>>",
  "paramFbclid": "<<type: string, required: false>>",
  "paramFeatures": "<<type: string, required: false>>",
  "paramForm": "<<type: string, required: false>>",
  "paramFrom": "<<type: string, required: false>>",
  "paramFunctionality": "<<type: array, required: false>>",
  "paramGad_source": "<<type: string, required: false>>",
  "paramGbraid": "<<type: string, required: false>>",
  "paramGclid": "<<type: string, required: false>>",
  "paramGidzl": "<<type: string, required: false>>",
  "paramGspk": "<<type: string, required: false>>",
  "paramGsxid": "<<type: string, required: false>>",
  "paramHl": "<<type: string, required: false>>",
  "paramHss_channel": "<<type: string, required: false>>",
  "paramHttp://cdfof6kdxu": {
    "com": "<<type: string, required: false>>"
  },
  "paramHttp://had5lpmhhm": {
    "com": "<<type: string, required: false>>"
  },
  "paramJhfzqald4v": "<<type: string, required: false>>",
  "paramKeaczwuxab": "<<type: string, required: false>>",
  "paramLdj6buxm4g": "<<type: string, required: false>>",
  "paramLtclid": "<<type: string, required: false>>",
  "paramLutges1abn": "<<type: string, required: false>>",
  "paramMbstx": "<<type: string, required: false>>",
  "paramMc_cid": "<<type: string, required: false>>",
  "paramMc_eid": "<<type: string, required: false>>",
  "paramMil66npajz": "<<type: string, required: false>>",
  "paramMkt_tok": "<<type: string, required: false>>",
  "paramMode": "<<type: string, required: false>>",
  "paramMsockid": "<<type: string, required: false>>",
  "paramN3g40c4tzc": "<<type: string, required: false>>",
  "paramNbcs": "<<type: string, required: false>>",
  "paramOikm": "<<type: string, required: false>>",
  "paramPs_partner": "<<type: string, required: false>>",
  "paramPs_partner_key": "<<type: string, required: false>>",
  "paramPs_xid": "<<type: string, required: false>>",
  "paramPscd": "<<type: string, required: false>>",
  "paramQdir7yhxvy": "<<type: string, required: false>>",
  "paramR5opqsu5o0": "<<type: string, required: false>>",
  "paramRef": "<<type: string, required: false>>",
  "paramReferrer": "<<type: string, required: false>>",
  "paramResubmit": "<<type: string, required: false>>",
  "paramRfsn": "<<type: string, required: false>>",
  "paramRoutes": "<<type: array, required: false>>",
  "paramRuq68wsctg": "<<type: string, required: false>>",
  "paramS": "<<type: string, required: false>>",
  "paramSearch": "<<type: string, required: false>>",
  "paramSid1": "<<type: string, required: false>>",
  "paramSlug": "<<type: string, required: false>>",
  "paramSource": "<<type: string, required: false>>",
  "paramSpm": "<<type: string, required: false>>",
  "paramSsId": "<<type: string, required: false>>",
  "paramStatus": "<<type: string, required: false>>",
  "paramT": "<<type: string, required: false>>",
  "paramTest1": "<<type: string, required: false>>",
  "paramTest2": "<<type: string, required: false>>",
  "paramTrk": "<<type: string, required: false>>",
  "paramTtclid": "<<type: string, required: false>>",
  "paramU5369cmsre": "<<type: string, required: false>>",
  "paramUtm-source": "<<type: string, required: false>>",
  "paramUtm_adgroup": "<<type: string, required: false>>",
  "paramUtm_adname": "<<type: string, required: false>>",
  "paramUtm_camapign": "<<type: string, required: false>>",
  "paramUtm_campaign": "<<type: string, required: false>>",
  "paramUtm_content": "<<type: string, required: false>>",
  "paramUtm_id": "<<type: string, required: false>>",
  "paramUtm_medium": "<<type: string,null, required: false>>",
  "paramUtm_source": "<<type: string, required: false>>",
  "paramUtm_term": "<<type: string, required: false>>",
  "paramUybv": "<<type: string, required: false>>",
  "paramVia": "<<type: string, required: false>>",
  "paramWbe4bd6gmy": "<<type: string, required: false>>",
  "paramWbraid": "<<type: string, required: false>>",
  "paramZarsrc": "<<type: string, required: false>>",
  "paramZj84qqw3r5": "<<type: string, required: false>>",
  "paramZksas48k2b": "<<type: string, required: false>>",
  "paramZohyfwrtbd": "<<type: string, required: false>>",
  "param_hsenc": "<<type: string, required: false>>",
  "param_hsmi": "<<type: string, required: false>>",
  "param_se": "<<type: string, required: false>>",
  "param_vd": "<<type: string, required: false>>",
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


## Webflow 101 Clicked

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
analytics.track("Webflow 101 Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Webflow Logo Clicked

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
analytics.track("Webflow Logo Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Webflow University Card Clicked

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
analytics.track("Webflow University Card Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Webflow features Card Clicked

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
analytics.track("Webflow features Card Clicked", {
  "logged in": "<<type: boolean, required: false>>",
  "page": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>"
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

Website Form Submitted.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **button CTA** | `string` | No description | ❌ |
| **button action and type** | `string` | No description | ❌ |
| **company** | `string` | No description | ❌ |
| **company size** | `string,null` | No description | ❌ |
| **consent** | `unknown` | No description | ❌ |
| **country** | `string` | No description | ❌ |
| **email** | `string,null` | No description | ❌ |
| **first name** | `string,null` | No description | ❌ |
| **form name** | `string,null` | No description | ❌ |
| **last name** | `string,null` | No description | ❌ |
| **logged in** | `boolean` | No description | ❌ |
| **message** | `string,null` | No description | ❌ |
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
  "company size": "<<type: string,null, required: false>>",
  "consent": "<<type: unknown, required: false>>",
  "country": "<<type: string, required: false>>",
  "email": "<<type: string,null, required: false>>",
  "first name": "<<type: string,null, required: false>>",
  "form name": "<<type: string,null, required: false>>",
  "last name": "<<type: string,null, required: false>>",
  "logged in": "<<type: boolean, required: false>>",
  "message": "<<type: string,null, required: false>>",
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
| **Redirect** | `boolean` | No description | ❌ |
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
  "Redirect": "<<type: boolean, required: false>>",
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


## Workspace Billing Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **legacy team id** | `string` | No description | ❌ |
| **primary upgrade source** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **upgrade prompt** | `string` | No description | ❌ |
| **upgrade source page** | `string` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Billing Page Viewed", {
  "legacy team id": "<<type: string, required: false>>",
  "primary upgrade source": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "upgrade prompt": "<<type: string, required: false>>",
  "upgrade source page": "<<type: string, required: false>>",
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


## Workspace Frictionless Invite Purchased

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **new addon type** | `string` | No description | ❌ |
| **new quantity** | `integer` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace new addons** | `object` | No description | ❌ |
| **workspace new addons.full seat count** | `integer` | No description | ❌ |
| **workspace new addons.limited seat count** | `integer` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Frictionless Invite Purchased", {
  "new addon type": "<<type: string, required: false>>",
  "new quantity": "<<type: integer, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace new addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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
| **can manage site billing** | `boolean` | No description | ❌ |
| **can publish** | `boolean` | No description | ❌ |
| **display price** | `string` | No description | ❌ |
| **email** | `string` | No description | ❌ |
| **interval** | `string` | No description | ❌ |
| **invitation link** | `string` | No description | ❌ |
| **inviter name** | `string` | No description | ❌ |
| **recipient role** | `string` | No description | ❌ |
| **request date** | `string` | No description | ❌ |
| **site name** | `string` | No description | ❌ |
| **site plan name** | `string` | No description | ❌ |
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
  "can manage site billing": "<<type: boolean, required: false>>",
  "can publish": "<<type: boolean, required: false>>",
  "display price": "<<type: string, required: false>>",
  "email": "<<type: string, required: false>>",
  "interval": "<<type: string, required: false>>",
  "invitation link": "<<type: string, required: false>>",
  "inviter name": "<<type: string, required: false>>",
  "recipient role": "<<type: string, required: false>>",
  "request date": "<<type: string, required: false>>",
  "site name": "<<type: string, required: false>>",
  "site plan name": "<<type: string, required: false>>",
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


## Workspace Member Selected

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **workspaceMember** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Member Selected", {
  "workspaceMember": "<<type: string, required: false>>"
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Workspace Profile Image Updated", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Workspace Reviewer Signup

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
analytics.track("Workspace Reviewer Signup", {
  "ref": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Workspace Selected

<!-- tabs:start -->
### **Details**

#### **Description**

Workspace Selected.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **workspace** | `object,string,null` | No description | ❌ |
#### **JS**

```javascript
analytics.track("Workspace Selected", {
  "workspace": "<<type: object,string,null, required: false>>"
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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("Workspace Settings Page Viewed", {
  "page": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "source": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## Workspace profile created

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
analytics.track("Workspace profile created", {
  "wf_source": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## [Client payments] Client Invite Accepted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteName** | `string` | No description | ❌ |
| **userId** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
| **workspaceRole** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("[Client payments] Client Invite Accepted", {
  "site id": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteName": "<<type: string, required: false>>",
  "userId": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>",
  "workspaceRole": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## [Client payments] Client Invite Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **inviterWorkspaceId** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **siteName** | `string` | No description | ❌ |
| **userId** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("[Client payments] Client Invite Page Viewed", {
  "inviterWorkspaceId": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "siteName": "<<type: string, required: false>>",
  "userId": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## [Client payments] Delayed Segmentation Survey Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **step** | `string` | No description | ❌ |
| **userId** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("[Client payments] Delayed Segmentation Survey Viewed", {
  "site id": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "step": "<<type: string, required: false>>",
  "userId": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## [Client payments] Payment Request Sent

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **clientEmail** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **userId** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
| **workspaceRole** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("[Client payments] Payment Request Sent", {
  "clientEmail": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "userId": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>",
  "workspaceRole": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## [Client payments] Request Payment Page Viewed

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **userId** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
| **workspaceRole** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("[Client payments] Request Payment Page Viewed", {
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "userId": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>",
  "workspaceRole": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## [Client payments] Site Plan Charge To Client Clicked

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
| **userId** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
| **workspaceRole** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("[Client payments] Site Plan Charge To Client Clicked", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "userId": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>",
  "workspaceRole": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## [Client payments] Site Plan Pay On Your Own Clicked

<!-- tabs:start -->
### **Details**

#### **Description**

[Client payments] Site Plan Pay On Your Own Clicked.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **userId** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace is enterprise** | `boolean` | No description | ❌ |
| **workspace plan** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string,null` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
| **workspaceRole** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("[Client payments] Site Plan Pay On Your Own Clicked", {
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "userId": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace is enterprise": "<<type: boolean, required: false>>",
  "workspace plan": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string,null, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>",
  "workspaceRole": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## [Client payments] Site Transfer Accepted

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **userId** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
| **workspace id** | `string` | No description | ❌ |
| **workspace plan id** | `string` | No description | ❌ |
| **workspace plan type** | `string` | No description | ❌ |
| **workspace role** | `string` | No description | ❌ |
| **workspace seat count** | `integer` | No description | ❌ |
| **workspace slug** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("[Client payments] Site Transfer Accepted", {
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "userId": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
  "workspace id": "<<type: string, required: false>>",
  "workspace plan id": "<<type: string, required: false>>",
  "workspace plan type": "<<type: string, required: false>>",
  "workspace role": "<<type: string, required: false>>",
  "workspace seat count": "<<type: integer, required: false>>",
  "workspace slug": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## [Client payments] Site Transfer Requested

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **email** | `string` | No description | ❌ |
| **receiverWorkspaceId** | `string` | No description | ❌ |
| **ref** | `string` | No description | ❌ |
| **site id** | `string` | No description | ❌ |
| **site plan id** | `string` | No description | ❌ |
| **site plan type** | `string` | No description | ❌ |
| **site slug** | `string` | No description | ❌ |
| **userId** | `string` | No description | ❌ |
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("[Client payments] Site Transfer Requested", {
  "email": "<<type: string, required: false>>",
  "receiverWorkspaceId": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "userId": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## [Client payments] Update Payment Method Confirmed

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
| **workspace addons** | `object` | No description | ❌ |
| **workspace addons.full seat count** | `integer` | No description | ❌ |
| **workspace addons.limited seat count** | `integer` | No description | ❌ |
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
analytics.track("[Client payments] Update Payment Method Confirmed", {
  "form context": "<<type: string, required: false>>",
  "ref": "<<type: string, required: false>>",
  "site id": "<<type: string, required: false>>",
  "site plan id": "<<type: string, required: false>>",
  "site plan type": "<<type: string, required: false>>",
  "site slug": "<<type: string, required: false>>",
  "workspace addons": {
    "full seat count": "<<type: integer, required: false>>",
    "limited seat count": "<<type: integer, required: false>>"
  },
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


## [Invite guest modal] Guest email entered

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **emailValidationSucceeded** | `boolean` | No description | ❌ |
| **guestDomain** | `string` | No description | ❌ |
| **guestDomainMatchesHostDomain** | `boolean` | No description | ❌ |
| **guestHadAllowlistedDomain** | `boolean` | No description | ❌ |
| **guestHadWhitelistedDomain** | `boolean` | No description | ❌ |
| **hostDomain** | `string` | No description | ❌ |
| **wf_source** | `string` | No description | ❌ |
| **workspaceId** | `string` | No description | ❌ |
| **workspacePlan** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("[Invite guest modal] Guest email entered", {
  "emailValidationSucceeded": "<<type: boolean, required: false>>",
  "guestDomain": "<<type: string, required: false>>",
  "guestDomainMatchesHostDomain": "<<type: boolean, required: false>>",
  "guestHadAllowlistedDomain": "<<type: boolean, required: false>>",
  "guestHadWhitelistedDomain": "<<type: boolean, required: false>>",
  "hostDomain": "<<type: string, required: false>>",
  "wf_source": "<<type: string, required: false>>",
  "workspaceId": "<<type: string, required: false>>",
  "workspacePlan": "<<type: string, required: false>>"
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
| **email** | `string` | No description | ❌ |
| **product** | `string` | No description | ❌ |
| **type** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("enrichment_provider", {
  "email": "<<type: string, required: false>>",
  "product": "<<type: string, required: false>>",
  "type": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## get_started_for_free_clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("get_started_for_free_clicked", {})
```

<!-- tabs:end -->

<!-- panels:end -->


## help_option_clicked

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **option** | `string` | No description | ❌ |
#### **JS**

```javascript
analytics.track("help_option_clicked", {
  "option": "<<type: string, required: false>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->
