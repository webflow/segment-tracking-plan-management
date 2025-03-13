export interface TestPlanJSON {
  rules: Rule[];
}

interface Rule {
  key: string;
  type: string;
  version: number;
  jsonSchema: {
    $schema: string;
    type: "object";
    properties: {
      context: {};
      traits: {};
      properties: any;
    };
  };
}

export interface GeneratedType {
  name: string;
  content: string;
}
