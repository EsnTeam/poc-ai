import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class EsnErrorState implements OnInit {
    retryPossible: boolean;
    retryOngoing: boolean;
    btnText?: string;
    btnClicked: EventEmitter<void>;
    constructor();
    ngOnInit(): void;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnErrorState, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnErrorState, "esn-error-state", never, { "retryPossible": "retryPossible"; "retryOngoing": "retryOngoing"; "btnText": "btnText"; }, { "btnClicked": "btnClicked"; }, never, ["*"], false, never>;
}
