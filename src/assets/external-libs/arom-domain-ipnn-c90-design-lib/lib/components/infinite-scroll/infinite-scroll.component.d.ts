import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class EsnInfiniteScroll implements OnInit, OnChanges {
    callFunc: (page: number, pageSize: number) => Promise<any[]>;
    totalNumberOfResults: number;
    scrollElement: HTMLElement;
    refreshElementsSubject: BehaviorSubject<null>;
    pageSize: number;
    showLoaderOnRefresh: boolean;
    elmsUpdated: EventEmitter<any[]>;
    elements: any[];
    nbPageLoaded: number;
    isLoading: boolean;
    subscriptions: Subscription;
    scroll$: Observable<any>;
    resize$: Observable<any>;
    manualTrigger$: BehaviorSubject<null>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    refreshElements(): Promise<void>;
    loadNextPage(force?: boolean): Promise<void>;
    handleScroll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnInfiniteScroll, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnInfiniteScroll, "esn-infinite-scroll", never, { "callFunc": "callFunc"; "totalNumberOfResults": "totalNumberOfResults"; "scrollElement": "scrollElement"; "refreshElementsSubject": "refreshElementsSubject"; "pageSize": "pageSize"; "showLoaderOnRefresh": "showLoaderOnRefresh"; }, { "elmsUpdated": "elmsUpdated"; }, never, ["*"], false, never>;
}
