/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TemplateRef } from '@angular/core';
import { StepState } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
/** Template context available to an attached `esnStepperIcon`. */
export interface EsnStepperIconContext {
    /** Index of the step. */
    index: number;
    /** Whether the step is currently active. */
    active: boolean;
    /** Whether the step is optional. */
    optional: boolean;
}
/**
 * Template to be used to override the icons inside the step header.
 */
export declare class EsnStepperIcon {
    templateRef: TemplateRef<EsnStepperIconContext>;
    /** Name of the icon to be overridden. */
    name: StepState;
    constructor(templateRef: TemplateRef<EsnStepperIconContext>);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnStepperIcon, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnStepperIcon, "ng-template[esnStepperIcon]", never, { "name": "esnStepperIcon"; }, {}, never, never, false, never>;
}
