/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Optional } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/** Stepper data that is required for internationalization. */
export declare class EsnStepperIntl {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    readonly changes: Subject<void>;
    /** Label that is rendered below optional steps. */
    optionalLabel: string;
    /** Label that is used to indicate step as completed to screen readers. */
    completedLabel: string;
    /** Label that is used to indicate step as editable to screen readers. */
    editableLabel: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnStepperIntl, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnStepperIntl>;
}
/** @docs-private */
export declare function ESN_STEPPER_INTL_PROVIDER_FACTORY(parentIntl: EsnStepperIntl): EsnStepperIntl;
/** @docs-private */
export declare const ESN_STEPPER_INTL_PROVIDER: {
    provide: typeof EsnStepperIntl;
    deps: Optional[][];
    useFactory: typeof ESN_STEPPER_INTL_PROVIDER_FACTORY;
};
