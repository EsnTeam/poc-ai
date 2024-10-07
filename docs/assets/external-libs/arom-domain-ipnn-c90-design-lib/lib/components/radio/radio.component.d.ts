/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, DoCheck, ElementRef, EventEmitter, InjectionToken, OnDestroy, OnInit, QueryList } from '@angular/core';
import { CanDisableRipple, HasTabIndex } from '@angular/material/core';
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { BooleanInput } from '@angular/cdk/coercion';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare type EsnRadioSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
export declare type EsnCheckboxColor = 'primary' | 'accent' | 'success' | 'error' | 'neutral' | undefined;
/** Change event object emitted by radio button and radio group. */
export declare class EsnRadioChange {
    /** The radio button that emits the change event. */
    source: _EsnRadioButtonBase;
    /** The value of the radio button. */
    value: any;
    constructor(
    /** The radio button that emits the change event. */
    source: _EsnRadioButtonBase, 
    /** The value of the radio button. */
    value: any);
}
/**
 * Provider Expression that allows esn-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */
export declare const ESN_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: any;
/**
 * Injection token that can be used to inject instances of `EsnRadioGroup`. It serves as
 * alternative token to the actual `EsnRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
export declare const ESN_RADIO_GROUP: InjectionToken<_EsnRadioGroupBase<_EsnRadioButtonBase>>;
export interface EsnRadioDefaultOptions {
    color: EsnCheckboxColor;
    size: EsnRadioSize;
}
export declare const ESN_RADIO_DEFAULT_OPTIONS: InjectionToken<EsnRadioDefaultOptions>;
export declare function ESN_RADIO_DEFAULT_OPTIONS_FACTORY(): EsnRadioDefaultOptions;
/**
 * Base class with all of the `EsnRadioGroup` functionality.
 * @docs-private
 */
export declare abstract class _EsnRadioGroupBase<T extends _EsnRadioButtonBase> implements AfterContentInit, ControlValueAccessor {
    private _changeDetector;
    /** Selected value for the radio group. */
    private _value;
    /** The HTML name attribute applied to radio buttons in this group. */
    private _name;
    /** The currently selected radio button. Should match value. */
    private _selected;
    /** Whether the `value` has been set to its initial value. */
    private _isInitialized;
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    private _labelPosition;
    /** Whether the radio group is disabled. */
    private _disabled;
    /** Whether the radio group is required. */
    private _required;
    /** The method to be called in order to update ngModel */
    _controlValueAccessorChangeFn: (value: any) => void;
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * @docs-private
     */
    onTouched: () => any;
    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     */
    readonly change: EventEmitter<EsnRadioChange>;
    /** Child radio buttons. */
    abstract _radios: QueryList<T>;
    /** Theme color for all of the radio buttons in the group. */
    color: EsnCheckboxColor;
    /** Theme color for all of the radio buttons in the group. */
    size: EsnRadioSize;
    /** Name of the radio button group. All radio buttons inside this group will use this name. */
    get name(): string;
    set name(value: string);
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    get labelPosition(): 'before' | 'after';
    set labelPosition(v: 'before' | 'after');
    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value. If there is not such a corresponding
     * radio button, this value persists to be applied in case a new radio button is added with a
     * matching value.
     */
    get value(): any;
    set value(newValue: any);
    _checkSelectedRadioButton(): void;
    /**
     * The currently selected radio button. If set to a new radio button, the radio group value
     * will be updated to match the new selected button.
     */
    get selected(): T | null;
    set selected(selected: T | null);
    /** Whether the radio group is disabled */
    get disabled(): boolean;
    set disabled(value: BooleanInput);
    /** Whether the radio group is required */
    get required(): boolean;
    set required(value: BooleanInput);
    constructor(_changeDetector: ChangeDetectorRef);
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    ngAfterContentInit(): void;
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    _touch(): void;
    private _updateRadioButtonNames;
    /** Updates the `selected` radio button from the internal _value state. */
    private _updateSelectedRadioFromValue;
    /** Dispatch change event with current selection and group value. */
    _emitChangeEvent(): void;
    _markRadiosForCheck(): void;
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value: any): void;
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn: (value: any) => void): void;
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn: any): void;
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<_EsnRadioGroupBase<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_EsnRadioGroupBase<any>, never, never, { "color": "color"; "size": "size"; "name": "name"; "labelPosition": "labelPosition"; "value": "value"; "selected": "selected"; "disabled": "disabled"; "required": "required"; }, { "change": "change"; }, never, never, false, never>;
}
/** @docs-private */
declare abstract class EsnRadioButtonBase {
    _elementRef: ElementRef;
    abstract disabled: boolean;
    constructor(_elementRef: ElementRef);
}
declare const _EsnRadioButtonMixinBase: import("@angular/material/core")._Constructor<CanDisableRipple> & import("@angular/material/core")._AbstractConstructor<CanDisableRipple> & import("@angular/material/core")._Constructor<HasTabIndex> & import("@angular/material/core")._AbstractConstructor<HasTabIndex> & typeof EsnRadioButtonBase;
/**
 * Base class with all of the `EsnRadioButton` functionality.
 * @docs-private
 */
export declare abstract class _EsnRadioButtonBase extends _EsnRadioButtonMixinBase implements OnInit, AfterViewInit, DoCheck, OnDestroy, CanDisableRipple, HasTabIndex {
    protected _changeDetector: ChangeDetectorRef;
    private _focusMonitor;
    private _radioDispatcher;
    private _providerOverride?;
    private _uniqueId;
    /** The unique ID for the radio button. */
    id: string;
    /** Analog to HTML 'name' attribute used to group radios for unique selection. */
    name: string;
    /** Used to set the 'aria-label' attribute on the underlying input element. */
    ariaLabel: string;
    /** The 'aria-labelledby' attribute takes precedence as the element's text alternative. */
    ariaLabelledby: string;
    /** The 'aria-describedby' attribute is read after the element's label and field type. */
    ariaDescribedby: string;
    /** Whether this radio button is checked. */
    get checked(): boolean;
    set checked(value: BooleanInput);
    /** The value of this radio button. */
    get value(): any;
    set value(value: any);
    /** Whether the label should appear after or before the radio button. Defaults to 'after' */
    get labelPosition(): 'before' | 'after';
    set labelPosition(value: 'before' | 'after');
    private _labelPosition;
    /** Whether the radio button is disabled. */
    get disabled(): boolean;
    set disabled(value: BooleanInput);
    /** Whether the radio button is required. */
    get required(): boolean;
    set required(value: BooleanInput);
    /** Theme color of the radio button. */
    get color(): EsnCheckboxColor;
    set color(newValue: EsnCheckboxColor);
    private _color;
    /** Theme color of the radio button. */
    get size(): EsnRadioSize;
    set size(newValue: EsnRadioSize);
    private _size;
    /**
     * Event emitted when the checked state of this radio button changes.
     * Change events are only emitted when the value changes due to user interaction with
     * the radio button (the same behavior as `<input type-"radio">`).
     */
    readonly change: EventEmitter<EsnRadioChange>;
    /** The parent radio group. May or may not be present. */
    radioGroup: _EsnRadioGroupBase<_EsnRadioButtonBase>;
    /** ID of the native input element inside `<esn-radio-button>` */
    get inputId(): string;
    /** Whether this radio is checked. */
    private _checked;
    /** Whether this radio is disabled. */
    private _disabled;
    /** Whether this radio is required. */
    private _required;
    /** Value assigned to this radio. */
    private _value;
    /** Unregister function for _radioDispatcher */
    private _removeUniqueSelectionListener;
    /** Previous value of the input's tabindex. */
    private _previousTabIndex;
    /** The native `<input type=radio>` element */
    _inputElement: ElementRef<HTMLInputElement>;
    /** Whether animations are disabled. */
    _noopAnimations: boolean;
    constructor(radioGroup: _EsnRadioGroupBase<_EsnRadioButtonBase>, elementRef: ElementRef, _changeDetector: ChangeDetectorRef, _focusMonitor: FocusMonitor, _radioDispatcher: UniqueSelectionDispatcher, animationMode?: string, _providerOverride?: EsnRadioDefaultOptions | undefined, tabIndex?: string);
    /** Focuses the radio button. */
    focus(options?: FocusOptions, origin?: FocusOrigin): void;
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     */
    _markForCheck(): void;
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** Dispatch change event with current value. */
    private _emitChangeEvent;
    _isRippleDisabled(): boolean;
    _onInputClick(event: Event): void;
    /** Triggered when the radio button receives an interaction from the user. */
    _onInputInteraction(event: Event): void;
    /** Sets the disabled state and marks for check if a change occurred. */
    protected _setDisabled(value: boolean): void;
    /** Gets the tabindex for the underlying input element. */
    private _updateTabIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<_EsnRadioButtonBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<_EsnRadioButtonBase, never, never, { "id": "id"; "name": "name"; "ariaLabel": "aria-label"; "ariaLabelledby": "aria-labelledby"; "ariaDescribedby": "aria-describedby"; "checked": "checked"; "value": "value"; "labelPosition": "labelPosition"; "disabled": "disabled"; "required": "required"; "color": "color"; "size": "size"; }, { "change": "change"; }, never, never, false, never>;
}
/**
 * A group of radio buttons. May contain one or more `<esn-radio-button>` elements.
 */
export declare class EsnRadioGroup extends _EsnRadioGroupBase<EsnRadioButton> {
    /** Child radio buttons. */
    _radios: QueryList<EsnRadioButton>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnRadioGroup, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnRadioGroup, "esn-radio-group", ["EsnRadioGroup"], {}, {}, ["_radios"], never, false, never>;
}
export declare class EsnRadioButton extends _EsnRadioButtonBase {
    constructor(radioGroup: EsnRadioGroup, elementRef: ElementRef, _changeDetector: ChangeDetectorRef, _focusMonitor: FocusMonitor, _radioDispatcher: UniqueSelectionDispatcher, animationMode?: string, _providerOverride?: EsnRadioDefaultOptions, tabIndex?: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnRadioButton, [{ optional: true; }, null, null, null, null, { optional: true; }, { optional: true; }, { attribute: "tabindex"; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnRadioButton, "esn-radio-button", ["EsnRadioButton"], { "disableRipple": "disableRipple"; "tabIndex": "tabIndex"; }, {}, never, ["[label]", "[subtitle]", "*"], false, never>;
}
export {};
