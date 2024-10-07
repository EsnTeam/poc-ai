import { EsnIconName } from '../../icon';
export interface EsnWizardStep {
    path: string;
    stepperStep: any;
    component: any;
}
export interface EsnWizardStepperStep {
    label: string;
    icon: EsnIconName;
}
