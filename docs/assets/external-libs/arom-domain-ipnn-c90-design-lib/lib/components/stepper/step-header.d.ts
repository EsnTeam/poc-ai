/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { ChangeDetectorRef, ElementRef, OnDestroy, TemplateRef, AfterViewInit } from '@angular/core';
import { EsnStepLabel } from './step-label';
import { EsnStepperIntl } from './stepper-intl';
import { EsnStepperIconContext } from './stepper-icon';
import { StepState } from '@angular/cdk/stepper';
import { CanColor } from '@angular/material/core';
import { EsnIconName } from "../icon/icons";
import * as i0 from "@angular/core";
/** @docs-private */
declare const _EsnStepHeaderBase: import("@angular/material/core")._Constructor<CanColor> & import("@angular/material/core")._AbstractConstructor<CanColor> & {
    new (elementRef: ElementRef): {
        _elementRef: ElementRef<HTMLElement>;
        focus(): void;
    };
    ɵfac: unknown;
    ɵdir: unknown;
};
export declare class EsnStepHeader extends _EsnStepHeaderBase implements AfterViewInit, OnDestroy, CanColor {
    _intl: EsnStepperIntl;
    private _focusMonitor;
    private _intlSubscription;
    /** State of the given step. */
    state: StepState;
    /** Label of the given step. */
    label: EsnStepLabel | string;
    /** Error message to display when there's an error. */
    errorMessage: string;
    /** Overrides for the header icons, passed in via the stepper. */
    iconOverrides: {
        [key: string]: TemplateRef<EsnStepperIconContext>;
    };
    /** Index of the given step. */
    index: number;
    /** Whether the given step is selected. */
    selected: boolean;
    /** Whether the given step label is active. */
    active: boolean;
    /** Whether the given step is optional. */
    optional: boolean;
    /** Whether the ripple should be disabled. */
    disableRipple: boolean;
    /** Customized esn icon */
    esnIcon: EsnIconName;
    /** Mobile mode flag */
    isMobile: boolean;
    /** number of steps of the given step. */
    stepsNumber: number | undefined;
    constructor(_intl: EsnStepperIntl, _focusMonitor: FocusMonitor, _elementRef: ElementRef<HTMLElement>, changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** Focuses the step header. */
    focus(origin?: FocusOrigin, options?: FocusOptions): void;
    /** Returns string label of given step if it is a text label. */
    _stringLabel(): string | null;
    /** Returns EsnStepLabel if the label of given step is a template label. */
    _templateLabel(): EsnStepLabel | null;
    /** Returns the host HTML element. */
    _getHostElement(): HTMLElement;
    /** Template context variables that are exposed to the `esnStepperIcon` instances. */
    _getIconContext(): EsnStepperIconContext;
    _getDefaultTextForState(state: StepState, icon: EsnIconName): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnStepHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnStepHeader, "esn-step-header", never, { "state": "state"; "label": "label"; "errorMessage": "errorMessage"; "iconOverrides": "iconOverrides"; "index": "index"; "selected": "selected"; "active": "active"; "optional": "optional"; "disableRipple": "disableRipple"; "esnIcon": "esnIcon"; "isMobile": "isMobile"; "stepsNumber": "stepsNumber"; }, {}, never, never, false, never>;
}
export {};
