# Server Tracking Plan


### First Event

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **array_prop1** | `array` | this is an array property (it will specify  "items", keys that need to exist for each item in the array)  asdasd | ❌ |
| **array_prop1[].layer1_prop2** | `string` | this is an optional property on any items in the array_prop1 array dsg | ❌ |
| **obj_prop1** | `object` | this is required object (i.e. can have nested sub-properties) | ✅ |
| **obj_prop1.sub_prop1** | `string` | this is a required sub-property in an object here | ✅ |
| **prop3** | `string` | this is a single property testing testing | ✅ |
#### **JS**

```javascript
analytics.track("First Event", {
"array_prop1": "<<array>>",
  "array_prop1[].layer1_prop2": "<<string>>",
  "obj_prop1": "<<object>>",
  "obj_prop1.sub_prop1": "<<string>>",
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
| **object** | `object` | this is a single property blah blah blah | ✅ |
| **object.int** | `number` | this is an optional sub-property in an object dsfas | ❌ |
| **object.string** | `string` | this is a required sub-property in an object sdas | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop", {
"object": "<<object>>",
  "object.int": "<<number>>",
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
| **object** | `object` | this is a single property value | ✅ |
| **object.int** | `number` | this is an | ❌ |
| **object.string** | `integer` | this is a required sub-property in an objec | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 10", {
"object": "<<object>>",
  "object.int": "<<number>>",
  "object.string": "<<integer>>",
  "object2": "<<object>>",
  "object2.string": "<<string>>"
});
```

<!-- tabs:end -->

<!-- panels:end -->


### Obj Prop 15

<!-- tabs:start -->
#### **Basics**

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
"object": "<<object>>",
  "object.int": "<<number>>",
  "object.string": "<<integer>>",
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
| **object** | `object` | this is a single | ✅ |
| **object.int** | `number` | this is an optional sub-property in an object hey hey | ❌ |
| **object.string** | `string` | this is a required sub-property in an object here | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 2", {
"object": "<<object>>",
  "object.int": "<<number>>",
  "object.string": "<<string>>",
  "object2": "<<object>>",
  "object2.string": "<<string>>"
});
```

<!-- tabs:end -->

<!-- panels:end -->


### Obj Prop 3

<!-- tabs:start -->
#### **Basics**

No description provided
#### **Properties**

| **Name** | `Type` | Description | Required? |
| :--- | :--- | :--- | :--- |
| **object** | `object` | this is a single property hey hey | ✅ |
| **object.int** | `number` | this is an optional sub-property in an object hey hey | ❌ |
| **object.string** | `string` | this is a required sub-property in an object | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 3", {
"object": "<<object>>",
  "object.int": "<<number>>",
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
| **object** | `object` | this is a single | ✅ |
| **object.int** | `number` | this is an optional sub-property in an object hey hey | ❌ |
| **object.string** | `string` | this is a required sub-property in an object here | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 4", {
"object": "<<object>>",
  "object.int": "<<number>>",
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
| **object** | `object` | this is a single property value | ✅ |
| **object.int** | `number` | this is an | ❌ |
| **object.string** | `integer` | this is a required sub-property in an objec | ✅ |
| **object2** | `object` | this is a single property | ❌ |
| **object2.string** | `string` | this is a required sub-property in an object | ❌ |
#### **JS**

```javascript
analytics.track("Obj Prop 6", {
"object": "<<object>>",
  "object.int": "<<number>>",
  "object.string": "<<integer>>",
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
| **array_prop1[].layer1_prop2** | `string` | this is an optional property on any items in the array_prop1 array | ❌ |
| **obj_prop1** | `object` | this is required object (i.e. can have nested sub-properties) | ✅ |
| **obj_prop1.sub_prop1** | `string` | this is a required sub-property in an object | ✅ |
| **prop3** | `string` | this is a single property | ✅ |
#### **JS**

```javascript
analytics.track("Second Event", {
"array_prop1": "<<array>>",
  "array_prop1[].layer1_prop2": "<<string>>",
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
