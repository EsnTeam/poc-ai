import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare type EsnButtonType = 'basic' | 'stroked' | 'flat' | 'light' | 'link' | undefined;
export declare type EsnButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;
export declare type EsnButtonColor = 'primary' | 'accent' | 'success' | 'error' | 'neutral' | undefined;
declare type MatButtonColor = 'primary' | 'accent' | 'warn' | null | undefined;
/*****************************************************/
export declare class EsnButton {
    type: EsnButtonType;
    size: EsnButtonSize;
    disabled: boolean | string;
    round: boolean;
    iconOnly: boolean;
    set color(value: EsnButtonColor);
    get color(): EsnButtonColor;
    click: EventEmitter<any>;
    _color: EsnButtonColor;
    _matColor: MatButtonColor;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnButton, "esn-button", never, { "type": "type"; "size": "size"; "disabled": "disabled"; "round": "round"; "iconOnly": "iconOnly"; "color": "color"; }, { "click": "click"; }, never, ["*"], false, never>;
}
export {};
