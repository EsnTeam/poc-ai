import { JsonSchema, UISchemaElement } from '@jsonforms/core';

export type JsonFormModel = { layouts: object, uiSchema: UISchemaElement, schema: JsonSchema,i18n?:any, rawData?: object };
