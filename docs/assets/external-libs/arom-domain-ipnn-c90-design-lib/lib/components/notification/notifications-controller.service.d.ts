import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Configuration, ListWrapperDto } from '../../utils/public-api';
import { EsnNotificationModel } from './model/notification';
import * as i0 from "@angular/core";
export declare class EsnNotificationsController {
    protected httpClient: HttpClient;
    environment: any;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    protected basePath: string;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration, environment: any);
    getNotifications(page?: number, size?: number, tags?: string, read?: boolean, dateBefore?: Date, dateAfter?: Date, criticality?: string, observe?: 'body', reportProgress?: boolean): Observable<ListWrapperDto<EsnNotificationModel>>;
    getNotifications(page?: number, size?: number, tags?: string, read?: boolean, dateBefore?: Date, dateAfter?: Date, criticality?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ListWrapperDto<EsnNotificationModel>>>;
    getNotifications(page?: number, size?: number, tags?: string, read?: boolean, dateBefore?: Date, dateAfter?: Date, criticality?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ListWrapperDto<EsnNotificationModel>>>;
    getCounters(tags?: string, observe?: 'body', reportProgress?: boolean): Observable<ListWrapperDto<EsnNotificationModel>>;
    getCounters(tags?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ListWrapperDto<EsnNotificationModel>>>;
    getCounters(tags?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ListWrapperDto<EsnNotificationModel>>>;
    markNotificationAsRead(notificationId: string, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse<any>>;
    markNotificationAsRead(notificationId: string, observe?: 'body', reportProgress?: boolean): Observable<HttpResponse<ApiResponse<any>>>;
    markNotificationAsRead(notificationId: string, observe?: 'body', reportProgress?: boolean): Observable<HttpEvent<ApiResponse<any>>>;
    doActionOnNotification(mark: 'VIEWED' | 'READ', tags: string, lastDate: string, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse<any>>;
    doActionOnNotification(mark: 'VIEWED' | 'READ', tags: string, lastDate: string, observe?: 'body', reportProgress?: boolean): Observable<HttpResponse<ApiResponse<any>>>;
    doActionOnNotification(mark: 'VIEWED' | 'READ', tags: string, lastDate: string, observe?: 'body', reportProgress?: boolean): Observable<HttpEvent<ApiResponse<any>>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnNotificationsController, [null, { optional: true; }, { optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnNotificationsController>;
}
