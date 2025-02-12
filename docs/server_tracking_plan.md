# Server Tracking Plan


## First Event

<!-- tabs:start -->
### **Details**

#### **Description**

First Event hi hi
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **array_prop2** | `array` | this is an array property (it will specify  "items", keys that need to exist for each item in the array)  asdasd | ❌ |
| **array_prop2.items** | `object` | Contains the structure for array items | ❌ |
| **array_prop2.items.layer1_prop2** | `string` | this is an optional property on any items in the array_prop1 array dsg | ❌ |
| **obj_prop1** | `object` | this is required object (i.e. can have nested sub-properties) | ✅ |
| **obj_prop1.sub_prop1** | `string` | this is a required sub-property in an object here | ❌ |
| **prop3** | `string` | this is a single property testing testing | ✅ |
#### **JS**

```javascript
analytics.track("First Event", {
  "array_prop2": [
    {
      "layer1_prop2": "<<type: string, required: false>>"
    }
  ],
  "obj_prop1": {
    "sub_prop1": "<<type: string, required: false>>"
  },
  "prop3": "<<type: string, required: true>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Obj Prop

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single property blah blah blah | ✅ |
| **object.int** | `number` | this is an optional sub-property in an object dsfas | ❌ |
| **object.string** | `string` | this is a required sub-property in an object sdas | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop", {
  "object": {
    "int": "<<type: number, required: false>>",
    "string": "<<type: string, required: true>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Obj Prop 10

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single property value | ✅ |
| **object.int** | `number` | this is an | ❌ |
| **object.string** | `integer` | this is a required sub-property in an objec | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 10", {
  "object": {
    "int": "<<type: number, required: false>>",
    "string": "<<type: integer, required: true>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Obj Prop 15

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single property value | ✅ |
| **object.int** | `number` | this is an | ❌ |
| **object.string** | `integer` | this is a required sub-property in an objec | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 15", {
  "object": {
    "int": "<<type: number, required: false>>",
    "string": "<<type: integer, required: true>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Obj Prop 2

<!-- tabs:start -->
### **Details**

#### **Description**

Obj Prop 2
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single object | ✅ |
| **object.int** | `number` | this is an optional sub-property in an object hey hey | ❌ |
| **object.strings** | `string` | this is a required sub-property in an object here | ❌ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 2", {
  "object": {
    "int": "<<type: number, required: false>>",
    "strings": "<<type: string, required: false>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Obj Prop 3

<!-- tabs:start -->
### **Details**

#### **Description**

Obj Prop 312
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single property hey hey | ✅ |
| **object.int** | `number` | this is an optional sub-property in an object hey hey | ❌ |
| **object.string** | `string` | this is a required sub-property in an object | ❌ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 3", {
  "object": {
    "int": "<<type: number, required: false>>",
    "string": "<<type: string, required: false>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Obj Prop 4

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single | ✅ |
| **object.int** | `number` | this is an optional sub-property in an object hey hey | ❌ |
| **object.string** | `string` | this is a required sub-property in an object here | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 4", {
  "object": {
    "int": "<<type: number, required: false>>",
    "string": "<<type: string, required: true>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Obj Prop 6

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single property value | ✅ |
| **object.int** | `number` | this is an | ❌ |
| **object.string** | `integer` | this is a required sub-property in an objec | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 6", {
  "object": {
    "int": "<<type: number, required: false>>",
    "string": "<<type: integer, required: true>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Second Event

<!-- tabs:start -->
### **Details**

#### **Description**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **array_prop1** | `array` | this is an array property (it will specify  "items", keys that need to exist for each item in the array) | ❌ |
| **array_prop1.items** | `object` | Contains the structure for array items | ❌ |
| **array_prop1.items.layer1_prop2** | `string` | this is an optional property on any items in the array_prop1 array | ❌ |
| **obj_prop1** | `object` | this is required object (i.e. can have nested sub-properties) | ✅ |
| **obj_prop1.sub_prop1** | `string` | this is a required sub-property in an object | ✅ |
| **prop3** | `string` | this is a single property | ✅ |
#### **JS**

```javascript
analytics.track("Second Event", {
  "array_prop1": [
    {
      "layer1_prop2": "<<type: string, required: false>>"
    }
  ],
  "obj_prop1": {
    "sub_prop1": "<<type: string, required: true>>"
  },
  "prop3": "<<type: string, required: true>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


## Segment Consent Preference Updated

<!-- tabs:start -->
### **Details**

#### **Description**

DO NOT EDIT. Event generated to store end users consent preferences for Unify and Twilio Engage.
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Segment Consent Preference Updated", {})
```

<!-- tabs:end -->

<!-- panels:end -->
