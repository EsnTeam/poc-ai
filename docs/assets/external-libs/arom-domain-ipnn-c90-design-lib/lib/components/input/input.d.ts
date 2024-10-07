import { AfterContentInit, AfterViewInit, ElementRef, EventEmitter, Injector, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, AbstractControl, FormGroup, Validator } from '@angular/forms';
import { _MatAutocompleteBase } from '@angular/material/autocomplete';
import { MatChipGrid } from '@angular/material/chips';
import { MatFormField, MatFormFieldAppearance } from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare type EsnInputError = string | {
    [key: string]: string;
};
export declare abstract class _EsnInputBase implements OnChanges, OnInit, AfterContentInit, ControlValueAccessor, AfterViewInit, Validator {
    private _injector;
    elementRef: ElementRef;
    minlength: number | string | null;
    maxlength: number | string | null;
    pattern: string | RegExp;
    placeholder: string;
    readonly: boolean | string;
    required: boolean | string;
    disabled: boolean | string;
    value?: string;
    label?: string;
    hint?: string;
    error?: EsnInputError;
    hintAlign: 'start' | 'end';
    floatLabel: 'auto' | 'always';
    counterHint?: boolean | string;
    size: 'sm' | 'md';
    appearance: 'fill' | 'outline' | 'underline';
    theme: 'dark' | 'light' | null;
    nativeInput: ElementRef;
    focus: EventEmitter<void>;
    blur: EventEmitter<void>;
    errorsList: string[][];
    defaultError?: string;
    parentControl: NgControl;
    onChangeSub: Subscription;
    errorMessage: string;
    _matAppearance: MatFormFieldAppearance;
    control: FormControl;
    observer: ResizeObserver;
    onChange: any;
    onTouch: any;
    shouldAddAsterisk: boolean;
    formField: MatFormField;
    constructor(_injector: Injector, elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(onTouched: Function): void;
    setDisabledState(isDisabled: boolean): void;
    computeErrorMessage(): void;
    assignErrors(): void;
    processBooleanInputs(): void;
    handleMatAppearance(): void;
    updateDisableState(): void;
    ngOnDestroy(): void;
    processShouldAddAsterisk(): void;
    isControlRequired(control: AbstractControl | null): any;
    _getNotchWidth(): string | null;
    validate(control: AbstractControl): import("@angular/forms").ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<_EsnInputBase, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<_EsnInputBase, "esn-input-text-base", never, { "minlength": "minlength"; "maxlength": "maxlength"; "pattern": "pattern"; "placeholder": "placeholder"; "readonly": "readonly"; "required": "required"; "disabled": "disabled"; "value": "value"; "label": "label"; "hint": "hint"; "error": "error"; "hintAlign": "hintAlign"; "floatLabel": "floatLabel"; "counterHint": "counterHint"; "size": "size"; "appearance": "appearance"; "theme": "theme"; }, { "focus": "focus"; "blur": "blur"; }, never, never, false, never>;
}
export declare class EsnInputText extends _EsnInputBase {
    autocomplete: _MatAutocompleteBase;
    chipInputSeparatorKeyCodes: readonly number[] | ReadonlySet<number>;
    chipInputFor: MatChipGrid;
    searchIcon: boolean;
    constructor(_injector: Injector, elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnInputText, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnInputText, "esn-input-text", never, { "autocomplete": "autocomplete"; "chipInputSeparatorKeyCodes": "chipInputSeparatorKeyCodes"; "chipInputFor": "chipInputFor"; "searchIcon": "searchIcon"; }, {}, never, ["*"], false, never>;
}
export declare class EsnInputTextArea extends _EsnInputBase {
    cdkAutosizeMinRows: number | string | null;
    constructor(_injector: Injector, elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnInputTextArea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnInputTextArea, "esn-input-textarea", never, { "cdkAutosizeMinRows": "cdkAutosizeMinRows"; }, {}, never, never, false, never>;
}
export declare class _EsnDateInputBase extends _EsnInputBase {
    min?: Date;
    max?: Date;
    change: EventEmitter<any>;
    constructor(_injector: Injector, elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<_EsnDateInputBase, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<_EsnDateInputBase, "esn-date-input-base", never, { "min": "min"; "max": "max"; }, { "change": "change"; }, never, never, false, never>;
}
export declare class EsnDatePicker extends _EsnDateInputBase implements AfterViewInit {
    constructor(_injector: Injector, elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDatePicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnDatePicker, "esn-datepicker", never, {}, {}, never, never, false, never>;
}
export declare class EsnDateTimePicker extends _EsnDateInputBase {
    defaultTime: number[];
    disableMinute: boolean;
    enableMeridian: boolean;
    hideTime: boolean;
    showSeconds: boolean;
    stepHour: number;
    stepMinute: number;
    stepSecond: number;
    constructor(_injector: Injector, elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDateTimePicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnDateTimePicker, "esn-datetimepicker", never, { "defaultTime": "defaultTime"; "disableMinute": "disableMinute"; "enableMeridian": "enableMeridian"; "hideTime": "hideTime"; "showSeconds": "showSeconds"; "stepHour": "stepHour"; "stepMinute": "stepMinute"; "stepSecond": "stepSecond"; }, {}, never, never, false, never>;
}
export declare class EsnDateRangePicker extends _EsnDateInputBase implements AfterViewInit {
    placeholderStartDate: string;
    placeholderEndDate: string;
    minStartDate: Date;
    maxStartDate: Date;
    minEndDate: Date;
    maxEndDate: Date;
    startDateErrorMessage: string;
    endDateErrorMessage: string;
    range: FormGroup<{
        start: FormControl<Date | null>;
        end: FormControl<Date | null>;
    }>;
    constructor(_injector: Injector, elementRef: ElementRef);
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    updateDisableState(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDateRangePicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnDateRangePicker, "esn-date-range-picker", never, { "placeholderStartDate": "placeholderStartDate"; "placeholderEndDate": "placeholderEndDate"; "minStartDate": "minStartDate"; "maxStartDate": "maxStartDate"; "minEndDate": "minEndDate"; "maxEndDate": "maxEndDate"; "startDateErrorMessage": "startDateErrorMessage"; "endDateErrorMessage": "endDateErrorMessage"; }, {}, never, never, false, never>;
}
export declare class EsnNumberInput extends _EsnInputBase implements OnInit {
    max: number | null;
    min: number | null;
    showButtons: boolean;
    isFocused: boolean;
    previousValue?: number;
    minusButtonClicked(): void;
    plusButtonClicked(): void;
    onFocus(): void;
    onBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnNumberInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnNumberInput, "esn-input-number", never, { "max": "max"; "min": "min"; "showButtons": "showButtons"; }, {}, never, ["*"], false, never>;
}
