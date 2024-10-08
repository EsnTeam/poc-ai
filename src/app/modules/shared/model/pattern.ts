export interface Pattern {
  id?: string;
  name: string;
  startFrom?: string;
  steps: PatternStep[];
}

export interface PatternStep {
  type: PatternStepType;
  stepId: string;
  pause?: boolean;

  //Message
  prompt?: string;
  attachedFileId?: string;

  //Run
  assistantId?: string;
  runFormat?: RunFormatEnum;

  //action
  actionType?: StepActionType;
  fileName?: string;
  inputFormat?: InputFormattingEnum;
  inputNb?: number;
}

export enum PatternStepType {
  MESSAGE = 'MESSAGE',
  RUN = 'RUN',
  ACTION = 'ACTION',
}

export enum StepActionType {
  DOWNLOAD = 'DOWNLOAD',
  ADD_FIELD_TO_DATA = 'ADD_FIELD_TO_DATA',
  REPLACE_DATA = 'REPLACE_DATA',
  FORMAT_INPUT = 'FORMAT_INPUT',
  IMPORT_JSON_SCHEMA_FROM_RESP = 'IMPORT_JSON_SCHEMA_FROM_RESP',
  IMPORT_UI_SCHEMA_FROM_RESP = 'IMPORT_UI_SCHEMA_FROM_RESP',
  IMPORT_I18N_SCHEMA_FROM_RESP = 'IMPORT_I18N_SCHEMA_FROM_RESP',
  OPEN_FORM_PREVIEW = 'OPEN_FORM_PREVIEW',
}

export const STEP_ACTION_LABELS: { [key in StepActionType]: string } = {
  DOWNLOAD: `Download last response as a file`,
  ADD_FIELD_TO_DATA: `Update Data with the suggested field names`,
  REPLACE_DATA: `Import last response as object data`,
  FORMAT_INPUT: `Format input`,
  IMPORT_JSON_SCHEMA_FROM_RESP: `Import last response as a JSON Schema`,
  IMPORT_UI_SCHEMA_FROM_RESP: `Import last response as an UI Schema`,
  IMPORT_I18N_SCHEMA_FROM_RESP: `Import last response as an i18n config`,
  OPEN_FORM_PREVIEW: `Open form preview in new tab`,
};

export enum InputFormattingEnum {
  FLAT_TO_NESTED = 'FLAT_TO_NESTED',
}
export const INPUT_FORMATTING_LABELS: { [key in InputFormattingEnum]: string } =
  {
    FLAT_TO_NESTED: `Flat raw data to nested`,
  };

export enum RunFormatEnum {
  JSON = 'JSON',
  UUID_SUGG_FIELD_NAME = 'UUID_SUGG_FIELD_NAME',
}

export const RUN_FORMAT_LABELS: { [key in RunFormatEnum]: string } = {
  JSON: `Json`,
  UUID_SUGG_FIELD_NAME: `List of Uuids with suggested field names`,
};

export interface PatternStepExecutionState {
  state: ExecutionStateEnum;
  data?: any;
}

export enum ExecutionStateEnum {
  SUCCESS = 'SUCCESS',
  ONGOING = 'ONGOING',
  FAIL = 'FAIL',
  NOT_EXECUTED = 'NOT_EXECUTED',
}
