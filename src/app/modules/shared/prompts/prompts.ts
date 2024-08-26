export const PROMPTS = {
  rawDataStatement: `Here is an array of json objects, each corresponding to a business object and describing its different attributes: 
    ##1`,

  askForFieldSuggestions: `For each attribute of each object, suggest a field name, in english and in camel case. 
    - translate from French to have fields in English
    - Use plural if the field is multivalued.
    - If isPrimitiveType is false and isSubObjectIncluded is also false, this is a reference by Id to another object, so always suggest fieldNames that ends in "Id" like "CraneId" or "ConcernedFolderId".`,

  formatFieldNamesAnswer: `Reformat your answer to match this format:
    {
        attributes: { 
            uuid: string;
            suggestedFieldName: string;
        }[]
    }
       
    An array of objects containing your suggestion with the uuid of the corresponding attribute.
    `,

  askForJsonSchema: `Using the suggestedAttributeName to name fields, give me a json schema to control the root object "##1".`,
  askForJsonUI: `Now give me a JSON_UI for the object ##1`,
  askForJsonOnly: `Repeat your previous answer`,
};
