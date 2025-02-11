// const fs = require('fs');
// const path = require('path');
// const os = require('os');

// // Get arguments from the command line
// const tpTitle = process.argv[2];
// const jsonSourcePath = process.argv[3];
// const markdownTargetPath = process.argv[4];

// // Load the JSON data using fs.readFileSync and JSON.parse  test
// const jsonPath = path.resolve(jsonSourcePath);
// const jsonData = fs.readFileSync(jsonPath, 'utf8');
// const json = JSON.parse(jsonData);

// /// CHANGE 1 - rename .data.trackingPlan. to .rules. ///
// const trackEvents = json.rules;

// let formattedEvents = [];
// let header = tpTitle + '\n';
// formattedEvents.push(header);
// for (let event of trackEvents) {
//     let formattedEvent = [];
//     formattedEvent.push('\n');

//     formattedEvent.push('### ' + event.key + '\n');
//     let eventData = event.jsonSchema.properties;

//     formattedEvent.push('<!-- tabs:start -->');
//     formattedEvent.push('#### **Basics**' + '\n');
//     formattedEvent.push(event.description);
//     formattedEvent.push('#### **Properties**' + '\n');
//     formattedEvent.push('|**Name** | `Type` | Description | Required?|');
//     formattedEvent.push('| :--- | :--- | :--- | :---|' );
//     for (let propName in eventData.properties.properties) {
//         let propData = eventData.properties;
//         let propType = propData.properties[propName].type;
//         formattedEvent.push('|**' + propName  + '** | `' + propType + '` |...|Required/Optional|' );
//     }

//     formattedEvent.push('#### **JS**'+ '\n');
//     formattedEvent.push('```javascript');
//     formattedEvent.push('analytics.track("'+ event.key +'" {');

//     for (let propName in eventData.properties.properties) {
//         let propData = eventData.properties;
//         let propType = propData.properties[propName].type;
//         formattedEvent.push('"' + propName  + '": "<<' + propType + '>>"' );
//     }
//     formattedEvent.push('});');
//     formattedEvent.push('```' + ' \n');
//     formattedEvent.push('<!-- tabs:end -->' + '\n');
//     formattedEvent.push('<!-- panels:end -->' + '\n');
//     formattedEvents.push.apply(formattedEvents, formattedEvent);
// }

// let eventsMarkdown = formattedEvents.join(os.EOL);
// fs.writeFileSync(markdownTargetPath, eventsMarkdown, 'utf-8');

// const fs = require('fs');
// const path = require('path');
// const os = require('os');

// // Get arguments from the command line
// const tpTitle = process.argv[2];
// const jsonSourcePath = process.argv[3];
// const markdownTargetPath = process.argv[4];

// console.log(`Starting markdown generation for: ${tpTitle}`);
// console.log(`Reading JSON from: ${jsonSourcePath}`);
// console.log(`Markdown will be written to: ${markdownTargetPath}`);

// try {
//     // Load the JSON data using fs.readFileSync and JSON.parse
//     const jsonPath = path.resolve(jsonSourcePath);
//     const jsonData = fs.readFileSync(jsonPath, 'utf8');
//     console.log('JSON file read successfully');

//     const json = JSON.parse(jsonData);
//     console.log('JSON data parsed successfully');

//     /// CHANGE 1 - rename .data.trackingPlan. to .rules. ///
//     const trackEvents = json.rules;

//     if (!Array.isArray(trackEvents)) {
//         throw new Error('Expected trackEvents to be an array');
//     }

//     let formattedEvents = [];
//     let header = tpTitle + '\n';
//     formattedEvents.push(header);

//     for (let event of trackEvents) {
//         let formattedEvent = [];
//         formattedEvent.push('\n');

//         formattedEvent.push('### ' + event.key + '\n');
//         let eventData = event.jsonSchema.properties;

//         formattedEvent.push('<!-- tabs:start -->');
//         formattedEvent.push('#### **Basics**' + '\n');
//         formattedEvent.push(event.description || 'No description provided');
//         formattedEvent.push('#### **Properties**' + '\n');
//         formattedEvent.push('|**Name** | `Type` | Description | Required?|');
//         formattedEvent.push('| :--- | :--- | :--- | :---|' );

//         if (!eventData || !eventData.properties || !eventData.properties.properties) {
//             console.warn(`No properties found for event: ${event.key}`);
//         } else {
//             for (let propName in eventData.properties.properties) {
//                 let propData = eventData.properties;
//                 let propType = propData.properties[propName].type;
//                 formattedEvent.push('|**' + propName + '** | `' + propType + '` |...|Required/Optional|' );
//             }
//         }

//         formattedEvent.push('#### **JS**'+ '\n');
//         formattedEvent.push('```javascript');
//         formattedEvent.push('analytics.track("'+ event.key +'" {');

//         for (let propName in eventData.properties.properties) {
//             let propData = eventData.properties;
//             let propType = propData.properties[propName].type;
//             formattedEvent.push('"' + propName  + '": "<<' + propType + '>>"' );
//         }
//         formattedEvent.push('});');
//         formattedEvent.push('```' + ' \n');
//         formattedEvent.push('<!-- tabs:end -->' + '\n');
//         formattedEvent.push('<!-- panels:end -->' + '\n');
//         formattedEvents.push.apply(formattedEvents, formattedEvent);
//     }

//     let eventsMarkdown = formattedEvents.join(os.EOL);
//     console.log(eventsMarkdown);
//     fs.writeFileSync(markdownTargetPath, eventsMarkdown, 'utf-8');
//     console.log(`Markdown file successfully written to: ${markdownTargetPath}`);
// } catch (error) {
//     console.error('Error during markdown generation:', error.message);
// }


const fs = require('fs');
const path = require('path');
const os = require('os');

// Get arguments from the command line
const tpTitle = process.argv[2];
const jsonSourcePath = process.argv[3];
const markdownTargetPath = process.argv[4];

console.log(`Starting markdown generation for: ${tpTitle}`);
console.log(`Reading JSON from: ${jsonSourcePath}`);
console.log(`Markdown will be written to: ${markdownTargetPath}`);

try {
    // Load the JSON data using fs.readFileSync and JSON.parse
    const jsonPath = path.resolve(jsonSourcePath);
    const jsonData = fs.readFileSync(jsonPath, 'utf8');
    console.log('JSON file read successfully');

    const json = JSON.parse(jsonData);
    console.log('JSON data parsed successfully');

    // Extract the rules
    const trackEvents = json.rules;

    if (!Array.isArray(trackEvents)) {
        throw new Error('Expected trackEvents to be an array');
    }

    let formattedEvents = [];
    let header = `# ${tpTitle}\n`;
    formattedEvents.push(header);

    for (let event of trackEvents) {
        let formattedEvent = [];
        formattedEvent.push('\n### ' + event.key + '\n');

        let eventData = event.jsonSchema.properties;

        formattedEvent.push('<!-- tabs:start -->');
        formattedEvent.push('#### **Basics**\n');
        formattedEvent.push(event.description || 'No description provided');

        formattedEvent.push('#### **Properties**\n');
        formattedEvent.push('| **Name** | `Type` | Description | Required? |');
        formattedEvent.push('| :--- | :--- | :--- | :--- |');

        let jsSnippetProps = {};

        if (!eventData || !eventData.properties || !eventData.properties.properties) {
            console.warn(`No properties found for event: ${event.key}`);
        } else {
            function processProperties(properties, requiredFields, parentObj) {
                for (let propName in properties) {
                    let propData = properties[propName];
                    let propType = propData.type || 'unknown';
                    let propDescription = propData.description || 'No description';
                    let isRequired = requiredFields.includes(propName);
                    let requiredText = isRequired ? '✅' : '❌';

                    // Add to markdown table
                    formattedEvent.push(`| **${propName}** | \`${propType}\` | ${propDescription} | ${requiredText} |`);

                    // Handle nested objects
                    if (propType === 'object' && propData.properties) {
                        parentObj[propName] = {};
                        processProperties(propData.properties, propData.required || [], parentObj[propName]);
                    }
                    // Handle arrays with nested properties
                    else if (propType === 'array' && propData.items && propData.items.properties) {
                        parentObj[propName] = [{}]; // Array of objects
                        processProperties(propData.items.properties, [], parentObj[propName][0]);
                    }
                    // Handle simple properties
                    else {
                        parentObj[propName] = `<<type: ${propType}, required: ${isRequired}>>`;
                    }
                }
            }

            processProperties(eventData.properties.properties, eventData.properties.required || [], jsSnippetProps);
        }

        formattedEvent.push('#### **JS**\n');
        formattedEvent.push('```javascript');
        formattedEvent.push(`analytics.track("${event.key}", ${JSON.stringify(jsSnippetProps, null, 2)})`);
        formattedEvent.push('```' + '\n');
        formattedEvent.push('<!-- tabs:end -->' + '\n');
        formattedEvent.push('<!-- panels:end -->' + '\n');

        formattedEvents.push(...formattedEvent);
    }

    let eventsMarkdown = formattedEvents.join(os.EOL);
    console.log(eventsMarkdown);
    fs.writeFileSync(markdownTargetPath, eventsMarkdown, 'utf-8');
    console.log(`Markdown file successfully written to: ${markdownTargetPath}`);
} catch (error) {
    console.error('Error during markdown generation:', error.message);
}
