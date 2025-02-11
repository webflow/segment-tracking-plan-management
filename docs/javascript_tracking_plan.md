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
"prop2": "<<string>>",
  "prop3": "<<string>>"
});
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
"prop2": "<<string>>"
});
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
| **array_prop2[].layer1_prop34** | `string` | this is an optional property on any items in the array_prop1  change here | ❌ |
| **obj_prop1** | `object` | this is required object (i.e. can have nested sub-properties) here here | ✅ |
| **obj_prop1.sub_prop1** | `array` | here blach | ✅ |
| **prop3** | `string` | this is a single test testing | ✅ |
#### **JS**

```javascript
analytics.track("First Event", {
"array_prop2": "<<array>>",
  "array_prop2[].layer1_prop34": "<<string>>",
  "obj_prop1": "<<object>>",
  "obj_prop1.sub_prop1": "<<array>>",
  "prop3": "<<string>>"
});
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
| **object.int1** | `number` | this should be a new property sd safd | ❌ |
| **object.string** | `string` | this is a required sub-property in an object | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop", {
"object": "<<object>>",
  "object.int1": "<<number>>",
  "object.string": "<<string>>",
  "object2": "<<object>>",
  "object2.string": "<<string>>"
});
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
| **object.int1** | `number` | this should be a new property | ❌ |
| **object.string** | `string` | this is a required property in an object new descriotion | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object dsfa | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 10", {
"object": "<<object>>",
  "object.int1": "<<number>>",
  "object.string": "<<string>>",
  "object2": "<<object>>",
  "object2.string": "<<string>>"
});
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
| **object.int1** | `number` | this should be a new property | ❌ |
| **object.string** | `string` | this is a required property in an object new descriotion | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object dsfa | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 2", {
"object": "<<object>>",
  "object.int1": "<<number>>",
  "object.string": "<<string>>",
  "object2": "<<object>>",
  "object2.string": "<<string>>"
});
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
| **object.int1** | `number` | this should be a new property | ❌ |
| **object.string** | `string` | this is a required property in an object new descriotion | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object dsfa | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 20", {
"object": "<<object>>",
  "object.int1": "<<number>>",
  "object.string": "<<string>>",
  "object2": "<<object>>",
  "object2.string": "<<string>>"
});
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
| **object.int1** | `number` | this should be a new property | ❌ |
| **object.string** | `string` | this is a required property in an object new descriotion | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object dsfa | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 22", {
"object": "<<object>>",
  "object.int1": "<<number>>",
  "object.string": "<<string>>",
  "object2": "<<object>>",
  "object2.string": "<<string>>"
});
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
| **object.int1** | `number` | this should be a new property | ❌ |
| **object.string** | `string` | this is a required property in an object new descriotion | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object dsfa | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 4", {
"object": "<<object>>",
  "object.int1": "<<number>>",
  "object.string": "<<string>>",
  "object2": "<<object>>",
  "object2.string": "<<string>>"
});
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
| **object.int1** | `number` | this should be a new property | ❌ |
| **object.string** | `string` | this is a required property in an object new descriotion | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object dsfa | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 6", {
"object": "<<object>>",
  "object.int1": "<<number>>",
  "object.string": "<<string>>",
  "object2": "<<object>>",
  "object2.string": "<<string>>"
});
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
| **array_prop1[].layer1_prop7** | `string` | this is an o ptional property on any items in the array_prop1 array safd | ❌ |
| **obj_prop1** | `object` | tfhis is required obj ect (i.e. c an have nested sub-properties) | ✅ |
| **obj_prop1.sub_prop1** | `string` | this is a req uired sub-property in an object | ❌ |
| **prop3** | `string` | this is a single property | ✅ |
#### **JS**

```javascript
analytics.track("Second Event", {
"array_prop1": "<<array>>",
  "array_prop1[].layer1_prop7": "<<string>>",
  "obj_prop1": "<<object>>",
  "obj_prop1.sub_prop1": "<<string>>",
  "prop3": "<<string>>"
});
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
analytics.track("Segment Consent Preference Updated", {
});
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
"prop2": "<<string>>"
});
```

<!-- tabs:end -->

<!-- panels:end -->
