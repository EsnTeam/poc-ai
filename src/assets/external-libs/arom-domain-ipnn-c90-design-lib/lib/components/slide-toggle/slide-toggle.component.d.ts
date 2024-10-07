import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare type EsnButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;
export declare type EsnSlideToggleColor = 'primary' | 'accent' | 'success' | 'error' | 'warning' | 'info' | 'neutral' | undefined;
/*****************************************************/
export declare class EsnSlideToggle implements OnChanges, OnInit, ControlValueAccessor {
    _color: EsnSlideToggleColor;
    _background: EsnSlideToggleColor;
    checked?: boolean;
    disabled?: boolean | string;
    required?: boolean | string;
    labelPosition: 'before' | 'after';
    id: string;
    set background(value: EsnSlideToggleColor);
    get background(): EsnSlideToggleColor;
    set color(value: EsnSlideToggleColor);
    get color(): EsnSlideToggleColor;
    change: EventEmitter<any>;
    toggleChange: EventEmitter<any>;
    control: FormControl;
    onChangeSub: Subscription;
    onChange: any;
    onTouch: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(onTouched: Function): void;
    setDisabledState(isDisabled: boolean): void;
    updateDisableState(): void;
    processBooleanInputs(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnSlideToggle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnSlideToggle, "esn-slide-toggle", never, { "checked": "checked"; "disabled": "disabled"; "required": "required"; "labelPosition": "labelPosition"; "id": "id"; "background": "background"; "color": "color"; }, { "change": "change"; "toggleChange": "toggleChange"; }, never, ["[label]", "[subtitle]", "*"], false, never>;
}
