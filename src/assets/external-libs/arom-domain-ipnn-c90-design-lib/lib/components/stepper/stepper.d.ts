/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { CdkStep, CdkStepper, StepperOptions } from '@angular/cdk/stepper';
import { AnimationEvent } from '@angular/animations';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, TemplateRef, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { EsnStepHeader } from './step-header';
import { EsnStepLabel } from './step-label';
import { EsnStepperIcon, EsnStepperIconContext } from './stepper-icon';
import { EsnStepContent } from './step-content';
import { EsnIconName } from "../icon/icons";
import { BreakpointObserver } from "@angular/cdk/layout";
import * as i0 from "@angular/core";
export declare class EsnStep extends CdkStep implements ErrorStateMatcher, AfterContentInit, OnDestroy {
    private _errorStateMatcher;
    private _viewContainerRef;
    private _isSelected;
    /** Content for step label given by `<ng-template esnStepLabel>`. */
    stepLabel: EsnStepLabel;
    /** Esn Icons */
    esnIcon: EsnIconName;
    /** Content that will be rendered lazily. */
    _lazyContent: EsnStepContent;
    /** Currently-attached portal containing the lazy content. */
    _portal: TemplatePortal;
    constructor(stepper: EsnStepper, _errorStateMatcher: ErrorStateMatcher, _viewContainerRef: ViewContainerRef, stepperOptions?: StepperOptions);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /** Custom error state matcher that additionally checks for validity of interacted form. */
    isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnStep, [null, { skipSelf: true; }, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnStep, "esn-step", ["esnStep"], { "esnIcon": "esnIcon"; }, {}, ["stepLabel", "_lazyContent"], ["*"], false, never>;
}
export declare class EsnStepper extends CdkStepper implements AfterContentInit, OnInit, OnDestroy {
    private breakpointObserver;
    private cdr;
    /** The list of step headers of the steps in the stepper. */
    _stepHeader: QueryList<EsnStepHeader>;
    /** Full list of steps inside the stepper, including inside nested steppers. */
    _steps: QueryList<EsnStep>;
    /** Steps that belong to the current stepper, excluding ones from nested steppers. */
    readonly steps: QueryList<EsnStep>;
    /** Custom icon overrides passed in by the consumer. */
    _icons: QueryList<EsnStepperIcon>;
    /** Event emitted when the current step is done transitioning in. */
    readonly animationDone: EventEmitter<void>;
    /** Whether ripples should be disabled for the step headers. */
    disableRipple: boolean;
    /**
     * Whether the label should display in bottom or end position.
     * Only applies in the `horizontal` orientation.
     */
    labelPosition: 'bottom' | 'end';
    /**
     * Position of the stepper's header.
     * Only applies in the `horizontal` orientation.
     */
    headerPosition: 'top' | 'bottom';
    /**
     * Detach the stepper content.
     * Only applies in the `vertical` orientation.
     */
    detachContent: boolean;
    /** Consumer-specified template-refs to be used to override the header icons. */
    _iconOverrides: Record<string, TemplateRef<EsnStepperIconContext>>;
    /** Stream of animation `done` events when the body expands/collapses. */
    readonly _animationDone: Subject<AnimationEvent>;
    /** Duration for the animation. Will be normalized to milliseconds if no units are set. */
    get animationDuration(): string;
    set animationDuration(value: string);
    private _animationDuration;
    private onChangeSub;
    isMobile: boolean;
    constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef<HTMLElement>, breakpointObserver: BreakpointObserver, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    _stepIsNavigable(index: number, step: EsnStep): boolean;
    _getAnimationDuration(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnStepper, [{ optional: true; }, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnStepper, "esn-stepper, esn-vertical-stepper, esn-horizontal-stepper, [esnStepper]", ["esnStepper", "esnVerticalStepper", "esnHorizontalStepper"], { "selectedIndex": "selectedIndex"; "disableRipple": "disableRipple"; "labelPosition": "labelPosition"; "headerPosition": "headerPosition"; "detachContent": "detachContent"; "animationDuration": "animationDuration"; }, { "animationDone": "animationDone"; }, ["_steps", "_icons"], never, false, never>;
}
