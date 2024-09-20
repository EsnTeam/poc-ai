import { ExecutionStateEnum } from './pattern';

export interface WorkflowSession {
  id: string;
  workflowType: WorkflowTypeEnum;
  activeStepId: string;
  steps: WorkflowStep[];
}

export enum WorkflowTypeEnum {
  UML_TO_CI = 'UML_TO_CI',
  CI_TO_PLED = 'CI_TO_PLED',
}

export interface WorkflowStep {
  stepId: string;
  stepLabel: string;
  state?: ExecutionStateEnum;
  stepElements: WorkflowStepElement[];
}

export interface WorkflowStepElement {
  type: WorkflowStepElementType;
  fileMetadata?: PocFileMetadata;
  threadId?: string;
  patternId?: string;
  workObjectValue?: string;
}

export enum WorkflowStepElementType {
  THREAD = 'THREAD',
  FILE = 'FILE',
  PATTERN = 'PATTERN',
  WORK_OBJECT = 'WORK_OBJECT',
}

export interface PocFileMetadata {
  uuid: string;
  filename: string;
  content?: string;
}

export const NEW_WF_SESSION_UML_TO_CI = {
  workflowType: WorkflowTypeEnum.UML_TO_CI,
  activeStepId: 'select-uml',
  steps: [
    {
      stepId: 'select-uml',
      stepLabel: 'Choisir un fichier UML',
      state: ExecutionStateEnum.ONGOING,
      stepElements: [],
    },
    {
      stepId: 'select-obj',
      stepLabel: 'Choisir et éditer un objet métier',
      state: ExecutionStateEnum.NOT_EXECUTED,
      stepElements: [],
    },
    {
      stepId: 'enrich-obj',
      stepLabel: "Enrichir l'objet",
      state: ExecutionStateEnum.NOT_EXECUTED,
      stepElements: [],
    },
    {
      stepId: 'generate-ci',
      stepLabel: 'Générer le CI',
      state: ExecutionStateEnum.NOT_EXECUTED,
      stepElements: [],
    },
  ],
};
