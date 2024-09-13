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
  format?: string;
  label?: I18nField;
  description?: I18nField;
}

export interface ObjectSchema {
  name: string;
  attributes: ObjectSchemaAttribute[];
}

export interface I18nField {
  fr: string;
  en?: string;
  es?: string;
}
