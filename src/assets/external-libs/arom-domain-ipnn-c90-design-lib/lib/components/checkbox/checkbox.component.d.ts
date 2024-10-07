import { EventEmitter, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
declare type MatCheckboxColor = 'primary' | 'accent' | 'warn' | undefined;
export declare type EsnCheckboxColor = 'primary' | 'accent' | 'success' | 'error' | 'neutral' | undefined;
export declare class EsnCheckboxChange {
    /** The source checkbox of the event. */
    source: EsnCheckboxComponent;
    /** The new `checked` value of the checkbox. */
    checked: boolean;
}
export declare class EsnCheckboxComponent implements ControlValueAccessor {
    private _formBuilder;
    id: string;
    name: string | null;
    value: string;
    checked: boolean;
    required: boolean;
    disabled: boolean;
    indeterminate: boolean;
    disableRipple: boolean;
    labelPosition: 'before' | 'after';
    set color(value: EsnCheckboxColor);
    get color(): EsnCheckboxColor;
    tabIndex: number;
    change: EventEmitter<any>;
    indeterminateChange: EventEmitter<boolean>;
    form: FormGroup;
    onChangeSub: Subscription;
    _color: EsnCheckboxColor;
    _matColor: MatCheckboxColor;
    onChange: any;
    onTouch: any;
    constructor(_formBuilder: FormBuilder);
    ngOnChanges(changes: SimpleChanges): void;
    onChanges($event: any): void;
    onIndeterminateChange($event: boolean): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(onTouched: Function): void;
    setDisabledState(isDisabled: boolean): void;
    updateDisableState(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnCheckboxComponent, "esn-checkbox", never, { "id": "id"; "name": "name"; "value": "value"; "checked": "checked"; "required": "required"; "disabled": "disabled"; "indeterminate": "indeterminate"; "disableRipple": "disableRipple"; "labelPosition": "labelPosition"; "color": "color"; "tabIndex": "tabIndex"; }, { "change": "change"; "indeterminateChange": "indeterminateChange"; }, never, ["[label]", "[subtitle]", "*"], false, never>;
}
export {};
