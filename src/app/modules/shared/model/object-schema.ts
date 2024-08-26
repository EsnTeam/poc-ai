export interface ObjectSchemaAttribute {
  name: string;
  type: string;
  isPrimitiveType?: boolean;
  isMultivalued: boolean;
  isMandatory: boolean;
  isSubObjectIncluded?: boolean;
  isIncluded?: boolean;
  uuid: string;
  suggestedFieldName?: string;
}

export interface ObjectSchema {
  name: string;
  attributes: ObjectSchemaAttribute[];
}
