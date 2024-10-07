import { AfterContentInit, OnChanges, OnDestroy, QueryList, SimpleChanges } from '@angular/core';
import { EsnSelectableCard } from './selectable-card/selectable-card';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class EsnSelectableCardGroup implements ControlValueAccessor, AfterContentInit, OnChanges, OnDestroy {
    multiple: boolean | string;
    radioBtnMode: boolean;
    cards: QueryList<EsnSelectableCard>;
    value: any;
    onChange: any;
    onTouch: any;
    subs: Subscription;
    contentInitialized: boolean;
    multi: boolean;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    writeValue(val: any): Promise<void>;
    registerOnChange(fn: any): void;
    registerOnTouched(onTouched: Function): void;
    setDisabledState(isDisabled: boolean): Promise<void>;
    _listenForCardSelectionChanges(card: EsnSelectableCard): void;
    _waitUntilContentInit(): Promise<void>;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnSelectableCardGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnSelectableCardGroup, "esn-selectable-card-group", never, { "multiple": "multiple"; "radioBtnMode": "radioBtnMode"; }, {}, ["cards"], ["*"], false, never>;
}
