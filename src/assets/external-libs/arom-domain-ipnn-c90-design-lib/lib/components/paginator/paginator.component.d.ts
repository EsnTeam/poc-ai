import { AfterViewInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { MatPaginator, MatPaginatorSelectConfig } from '@angular/material/paginator';
import * as i0 from "@angular/core";
export declare class PageEvent {
    /** The current page index. */
    pageIndex: number;
    /**  Index of the page that was selected previously. */
    previousPageIndex?: number;
    /** The current page size. */
    pageSize: number;
    /** The current total number of items being paged. */
    length: number;
}
export declare class EsnPaginator implements AfterViewInit {
    disabled: boolean | string;
    hidePageSize: boolean | string;
    length: number;
    pageIndex: number;
    pageSize: number;
    pageSizeOptions: number[];
    selectConfig: MatPaginatorSelectConfig;
    showFirstLastButtons: boolean | string;
    page: EventEmitter<PageEvent>;
    paginator: MatPaginator;
    _initialized: Subject<void>;
    constructor();
    ngAfterViewInit(): void;
    get initialized(): import("rxjs").Observable<void>;
    getNumberOfPages(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnPaginator, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnPaginator, "esn-paginator", never, { "disabled": "disabled"; "hidePageSize": "hidePageSize"; "length": "length"; "pageIndex": "pageIndex"; "pageSize": "pageSize"; "pageSizeOptions": "pageSizeOptions"; "selectConfig": "selectConfig"; "showFirstLastButtons": "showFirstLastButtons"; }, { "page": "page"; }, never, never, false, never>;
}
