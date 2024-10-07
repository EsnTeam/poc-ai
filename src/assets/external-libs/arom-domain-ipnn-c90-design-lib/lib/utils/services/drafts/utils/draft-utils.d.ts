import { CanActivate, Route } from "@angular/router";
import { EsnWizardStep } from "../../../../components/wizard/model/step-parameters";
export declare class EsnDraftUtils {
    static getCreationRoutes(containerComponent: any, creationSteps: EsnWizardStep[], guards?: CanActivate[]): Route;
    static initDraftElement(additionalFields?: {
        [key in string]: string;
    }): {
        externalUuid: string;
        creationDate: Date;
        initialCreation: boolean;
    };
}
