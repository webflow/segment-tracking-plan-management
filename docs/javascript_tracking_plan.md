# JavaScript Tracking Plan


### Advisory SE Roundtable

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **prop2** | `string` | this is a single property | ✅ |
| **prop3** | `string` | this is a single property | ✅ |
#### **JS**

```javascript
analytics.track("Advisory SE Roundtable", {
  "prop2": "<<type: string, required: true>>",
  "prop3": "<<type: string, required: true>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


### Aubrey's Event 1

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **prop2** | `string` | this is a single property | ✅ |
#### **JS**

```javascript
analytics.track("Aubrey's Event 1", {
  "prop2": "<<type: string, required: true>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


### First Event

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **array_prop2** | `array` | this is an array property (it will specify  "items", keys that need to exist for each item in the array) | ❌ |
| **layer1_prop34** | `string` | this is an optional property on any items in the array_prop1  change here | ❌ |
| **obj_prop1** | `object` | this is required object (i.e. can have nested sub-properties) here here | ✅ |
| **sub_prop1** | `array` | here blach | ✅ |
| **prop3** | `string` | this is a single test testing | ✅ |
#### **JS**

```javascript
analytics.track("First Event", {
  "array_prop2": [
    {
      "layer1_prop34": "<<type: string, required: false>>"
    }
  ],
  "obj_prop1": {
    "sub_prop1": "<<type: array, required: true>>"
  },
  "prop3": "<<type: string, required: true>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->


### Obj Prop

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single property | ✅ |
| **int1** | `number` | this should be a new property sd safd | ❌ |
| **string** | `string` | this is a required sub-property in an object | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop", {
  "object": {
    "int1": "<<type: number, required: false>>",
    "string": "<<type: string, required: true>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


### Obj Prop 10

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single property | ✅ |
| **int1** | `number` | this should be a new property | ❌ |
| **string** | `string` | this is a required property in an object new descriotion | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **string** | `string` | this is a required sub-property in an object dsfa | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 10", {
  "object": {
    "int1": "<<type: number, required: false>>",
    "string": "<<type: string, required: true>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


### Obj Prop 2

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single property | ✅ |
| **int1** | `number` | this should be a new property | ❌ |
| **string** | `string` | this is a required property in an object new descriotion | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **string** | `string` | this is a required sub-property in an object dsfa | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 2", {
  "object": {
    "int1": "<<type: number, required: false>>",
    "string": "<<type: string, required: true>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


### Obj Prop 20

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single property | ✅ |
| **int1** | `number` | this should be a new property | ❌ |
| **string** | `string` | this is a required property in an object new descriotion | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **string** | `string` | this is a required sub-property in an object dsfa | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 20", {
  "object": {
    "int1": "<<type: number, required: false>>",
    "string": "<<type: string, required: true>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


### Obj Prop 22

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single property | ✅ |
| **int1** | `number` | this should be a new property | ❌ |
| **string** | `string` | this is a required property in an object new descriotion | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **string** | `string` | this is a required sub-property in an object dsfa | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 22", {
  "object": {
    "int1": "<<type: number, required: false>>",
    "string": "<<type: string, required: true>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


### Obj Prop 4

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single property | ✅ |
| **int1** | `number` | this should be a new property | ❌ |
| **string** | `string` | this is a required property in an object new descriotion | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **string** | `string` | this is a required sub-property in an object dsfa | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 4", {
  "object": {
    "int1": "<<type: number, required: false>>",
    "string": "<<type: string, required: true>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


### Obj Prop 6

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single property | ✅ |
| **int1** | `number` | this should be a new property | ❌ |
| **string** | `string` | this is a required property in an object new descriotion | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **string** | `string` | this is a required sub-property in an object dsfa | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 6", {
  "object": {
    "int1": "<<type: number, required: false>>",
    "string": "<<type: string, required: true>>"
  },
  "object2": {
    "string": "<<type: string, required: false>>"
  }
})
```

<!-- tabs:end -->

<!-- panels:end -->


### Second Event

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **array_prop1** | `array` | this is an array property (it will specify  "items", keys that need to exist for each item in the array) | ❌ |
| **layer1_prop217** | `string` | this is an o ptional property on any items in the array_prop1 array safd | ❌ |
| **obj_prop1** | `object` | tfhis is required obj ect (i.e. c an have nested sub-properties) | ✅ |
| **sub_prop1** | `string` | this is a req uired sub-property in an object | ❌ |
| **prop3** | `string` | this is a single property | ✅ |
#### **JS**

```javascript
analytics.track("Second Event", {
  "array_prop1": [
    {
      "layer1_prop217": "<<type: string, required: false>>"
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


### Segment Consent Preference Updated

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
#### **JS**

```javascript
analytics.track("Segment Consent Preference Updated", {})
```

<!-- tabs:end -->

<!-- panels:end -->


### Third Event

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **prop2** | `string` | this is a single property | ✅ |
#### **JS**

```javascript
analytics.track("Third Event", {
  "prop2": "<<type: string, required: true>>"
})
```

<!-- tabs:end -->

<!-- panels:end -->
