import * as i0 from "@angular/core";
export declare enum EsnAsyncDataSourceType {
    PROMISE = "PROMISE",
    OBSERVABLE = "OBSERVABLE"
}
export declare abstract class EsnAsyncDataSourceAdapter {
    callReturnType: EsnAsyncDataSourceType;
    debounceTime: number;
    getResults(resp: any): any[];
    getTotalNbResults(resp: any): number;
    getError(resp: any): null;
    processError(err: any): any;
}
export declare class EsnAsyncDatasourceCallWrapperAdapter extends EsnAsyncDataSourceAdapter {
    getResults(resp: any): any;
    getTotalNbResults(resp: any): any;
    getError(resp: any): any;
    processError(err: any): {
        message: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnAsyncDatasourceCallWrapperAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnAsyncDatasourceCallWrapperAdapter>;
}
export declare class EsnAsyncDatasourceApiResponseAdapter extends EsnAsyncDataSourceAdapter {
    callReturnType: EsnAsyncDataSourceType;
    getResults(resp: any): any;
    getTotalNbResults(resp: any): any;
    processError(err: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnAsyncDatasourceApiResponseAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnAsyncDatasourceApiResponseAdapter>;
}
export declare const ESN_ASYNC_DATASOURCE_DEFAULT_ADAPTER: typeof EsnAsyncDatasourceCallWrapperAdapter;
