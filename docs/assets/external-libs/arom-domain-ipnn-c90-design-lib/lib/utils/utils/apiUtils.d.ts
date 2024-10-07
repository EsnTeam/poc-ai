import { Observable } from 'rxjs';
import { ApiCallWrapper, ApiErrorDisplay, ApiResponse, ListWrapperDto } from '../model/public-api';
import { HttpParams } from '@angular/common/http';
export declare class EsnApiUtils {
    static retry(func: Function, condition?: Function, stepName?: string, bodySent?: any, retries?: number, interval?: number): Promise<any>;
    static getErrorMessage(error: any, errorType?: string): ApiErrorDisplay;
    static fetchAllElementsWithCallWrapper(callFunc: (page: number, size: number) => Promise<ApiCallWrapper>): Promise<ApiCallWrapper>;
    static fetchAllElementsWithoutCallWrapper(callFunc: (page: number, size: number) => Observable<ApiResponse<ListWrapperDto<any>>>): Observable<any>;
    static forkJoinCallWrappers(calls: Promise<ApiCallWrapper>[]): Promise<ApiCallWrapper>;
    static forkJoinXByX(calls: Observable<any>[], batchSize?: number): Observable<any>;
    static makeQueryParameters(queryParams: {
        [key in string]: any;
    }): HttpParams;
}
