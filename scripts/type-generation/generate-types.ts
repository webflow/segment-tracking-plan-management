import { compile, JSONSchema } from "json-schema-to-typescript";
import fs from "fs";
import type { GeneratedType, TestPlanJSON } from "./types";
import { rimraf } from "rimraf";

const compilerOptions = {
  inferStringEnumKeysFromValues: false,
};

function readSchemaFile(path: string) {
  try {
    const string = fs.readFileSync(path, "utf8");
    return JSON.parse(string);
  } catch (error) {
    console.error(`Error reading schema file at ${path}:`, error);
    throw error;
  }
}

// Sanitize the name to be a valid TypeScript identifier and filename
function sanitizeName(name: string) {
  return name
    .replace(/[^a-zA-Z0-9_]/g, "")
    .replace(/_+/g, "")
    .replace(/^_/, "")
    .replace(/_$/, "");
}

// Wrap the properties with a common event signature JSON schema
function wrapWithEventSignature(
  eventName: string,
  properties: any,
): JSONSchema {
  return {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
      event: { type: "string", enum: [eventName] },
      type: { type: "string", enum: ["track"] },
      properties,
    },
    required: ["properties", "event", "type"],
  };
}

function compileSchemas(testPlanFile: TestPlanJSON): Promise<GeneratedType[]> {
  const compilePromises: Promise<GeneratedType>[] = testPlanFile.rules.map(
    (rule) => {
      return compile(
        wrapWithEventSignature(rule.key, rule.jsonSchema.properties.properties),
        rule.key,
        compilerOptions,
      ).then((content) => {
        return {
          name: sanitizeName(rule.key),
          content,
        };
      });
    },
  );
  return Promise.all(compilePromises);
}

function saveTypesToFile(types: GeneratedType[], outputDir: string) {
  types.forEach((type) => {
    const filePath = `${outputDir}/${type.name}.d.ts`;
    fs.writeFileSync(filePath, type.content);
  });
}

function saveIndexFile(types: GeneratedType[], outputDir: string) {
  const indexContent = types
    .map((type) => `export * from "./${type.name}";`)
    .join("\n");
  const indexFilePath = `${outputDir}/index.d.ts`;
  fs.writeFileSync(indexFilePath, indexContent);
}

export async function makeTypesFromTestPlan(
  testPlanPath: string,
  outputDir: string,
) {
  if (!fs.existsSync(testPlanPath)) {
    throw new Error(`Schema file not found at ${testPlanPath}`);
  }
  rimraf.sync(outputDir);
  fs.mkdirSync(outputDir, { recursive: true });
  const testPlanFile: TestPlanJSON = readSchemaFile(testPlanPath);
  const types: GeneratedType[] = await compileSchemas(testPlanFile);
  await saveTypesToFile(types, outputDir);
  await saveIndexFile(types, outputDir);
}

makeTypesFromTestPlan(
  "./plans/prod/webflow/current-rules.json",
  "./dist/types/webflow",
);
