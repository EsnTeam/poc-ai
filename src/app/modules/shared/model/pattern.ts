export interface Pattern {
  id?: string;
  name: string;
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
}

export enum PatternStepType {
  MESSAGE = 'MESSAGE',
  RUN = 'RUN',
  ACTION = 'ACTION',
}

export enum StepActionType {
  DOWNLOAD = 'DOWNLOAD',
  ADD_FIELD_TO_DATA = 'ADD_FIELD_TO_DATA',
}

export const STEP_ACTION_LABELS: { [key in StepActionType]: string } = {
  DOWNLOAD: `Download last response as a file`,
  ADD_FIELD_TO_DATA: `Update Data with the suggested field names`,
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
}
