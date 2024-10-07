import { EsnAsyncDataSource } from './esn-async-datasource';
import { EsnAsyncDataSourceAdapter } from './esnAsyncTableAdapter';
import * as i0 from "@angular/core";
export declare class EsnAsyncDataSourceFactory {
    adapter: EsnAsyncDataSourceAdapter;
    constructor(adapter: EsnAsyncDataSourceAdapter);
    createDataSource<T>(funcToCall: Function): EsnAsyncDataSource<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnAsyncDataSourceFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnAsyncDataSourceFactory>;
}
