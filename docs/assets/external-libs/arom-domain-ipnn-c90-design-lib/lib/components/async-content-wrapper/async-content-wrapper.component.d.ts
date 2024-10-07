import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiErrorDisplay } from '../../utils/model/public-api';
import * as i0 from "@angular/core";
export declare class EsnAsyncContentWrapper implements OnInit, OnChanges {
    isLoading: boolean;
    errorDisplay?: ApiErrorDisplay;
    isEmpty: boolean;
    emptyStateText: string;
    errorText: string;
    errorActionText: string;
    errorActionClick: EventEmitter<void>;
    contentDisplayed: EventEmitter<void>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onErrorActionClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnAsyncContentWrapper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnAsyncContentWrapper, "esn-async-content-wrapper", never, { "isLoading": "isLoading"; "errorDisplay": "errorDisplay"; "isEmpty": "isEmpty"; "emptyStateText": "emptyStateText"; "errorText": "errorText"; "errorActionText": "errorActionText"; }, { "errorActionClick": "errorActionClick"; "contentDisplayed": "contentDisplayed"; }, never, ["*"], false, never>;
}
