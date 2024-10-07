import { AfterViewInit, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { EsnPaginator } from '../../paginator/paginator.component';
import { EsnColumnDef } from '../cell';
import { EsnTable } from '../table';
import { EsnAsyncDataSource } from './esn-async-datasource';
import * as i0 from "@angular/core";
export declare class EsnAsyncTable implements OnChanges, AfterViewInit {
    dataSource: EsnAsyncDataSource<any>;
    displayedColumns: string[];
    hidePageSize: boolean | string;
    pageSizeOptions: number[];
    showFirstLastButtons: boolean | string;
    numberOfResults: number;
    table: EsnTable<any>;
    paginator: EsnPaginator;
    columnDefs: QueryList<EsnColumnDef>;
    constructor();
    refresh(): void;
    load(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnAsyncTable, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnAsyncTable, "esn-async-table", never, { "dataSource": "dataSource"; "displayedColumns": "displayedColumns"; "hidePageSize": "hidePageSize"; "pageSizeOptions": "pageSizeOptions"; "showFirstLastButtons": "showFirstLastButtons"; }, {}, ["columnDefs"], ["*"], false, never>;
}
