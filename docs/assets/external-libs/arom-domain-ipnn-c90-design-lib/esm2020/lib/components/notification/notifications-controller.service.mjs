import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { HttpHeaders, HttpParams, } from '@angular/common/http';
import { Configuration, CustomHttpUrlEncodingCodec, ESN_ENVIRONMENT_CONFIG } from '../../utils/public-api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../utils/public-api";
export class EsnNotificationsController {
    constructor(httpClient, basePath, configuration, environment) {
        this.httpClient = httpClient;
        this.environment = environment;
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new Configuration();
        this.basePath = '';
        if (!!environment.not_set) {
            throw `EsnFilemanagerModule requires an ESN_ENVIRONMENT_CONFIG.
      Please provide one with "{ provide: ESN_ENVIRONMENT_CONFIG, useValue: your_environment_file (from src/environments) }"`;
        }
        this.basePath = basePath || `${environment.services.protocol}://${environment.services.hostname}${!!environment.services.gateway.port
            ? ':' + environment.services.gateway.port
            : ''}/${environment.services.notifications.route}`;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
        if (!!environment.services.mock?.mockApi) {
            this.basePath = `${environment.services.mock.url}/${environment.services.gdd.route}`;
        }
    }
    getNotifications(page, size, tags, read, dateBefore, dateAfter, criticality, observe = 'body', reportProgress = false) {
        let queryParameters = new HttpParams({
            encoder: new CustomHttpUrlEncodingCodec(),
        });
        if (!!tags) {
            queryParameters = queryParameters.set('tags', tags);
        }
        if (read !== undefined && read !== null) {
            queryParameters = queryParameters.set('read', read);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', size);
        }
        if (dateBefore !== undefined && dateBefore !== null) {
            queryParameters = queryParameters.set('dateBefore', dateBefore.toISOString());
        }
        if (dateAfter !== undefined && dateAfter !== null) {
            queryParameters = queryParameters.set('dateAfter', dateAfter.toISOString());
        }
        if (criticality !== undefined && criticality !== null) {
            queryParameters = queryParameters.set('criticality', criticality);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = ['*/*'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.get(`${this.basePath}/web-notifications`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress,
        });
    }
    getCounters(tags, observe = 'body', reportProgress = false) {
        let queryParameters = new HttpParams({
            encoder: new CustomHttpUrlEncodingCodec(),
        });
        if (!!tags) {
            queryParameters = queryParameters.set('tags', tags);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = ['*/*'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(`${this.basePath}/web-notifications/count`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress,
        });
    }
    markNotificationAsRead(notificationId, observe, reportProgress) {
        let queryParameters = new HttpParams({
            encoder: new CustomHttpUrlEncodingCodec(),
        });
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = ['*/*'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.patch(`${this.basePath}/web-notifications/${notificationId}/read`, { isRead: true }, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress,
        });
    }
    doActionOnNotification(mark, tags, lastDate, observe, reportProgress) {
        let queryParameters = new HttpParams({
            encoder: new CustomHttpUrlEncodingCodec(),
        });
        if (!!tags) {
            queryParameters = queryParameters.set('tags', tags);
        }
        if (mark !== undefined && mark !== null) {
            queryParameters = queryParameters.set('mark', mark);
        }
        if (lastDate !== undefined && lastDate !== null) {
            queryParameters = queryParameters.set('sendDate', lastDate);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = ['*/*'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.put(`${this.basePath}/web-notifications/action`, {}, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress,
        });
    }
}
EsnNotificationsController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationsController, deps: [{ token: i1.HttpClient }, { token: new InjectionToken('basePath'), optional: true }, { token: i2.Configuration, optional: true }, { token: ESN_ENVIRONMENT_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
EsnNotificationsController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationsController });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationsController, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [new InjectionToken('basePath')]
                }] }, { type: i2.Configuration, decorators: [{
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ESN_ENVIRONMENT_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy1jb250cm9sbGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9ucy1jb250cm9sbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBR0wsV0FBVyxFQUNYLFVBQVUsR0FFWCxNQUFNLHNCQUFzQixDQUFDO0FBSTlCLE9BQU8sRUFBZSxhQUFhLEVBQUUsMEJBQTBCLEVBQUUsc0JBQXNCLEVBQWtCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFJeEksTUFBTSxPQUFPLDBCQUEwQjtJQUtyQyxZQUNZLFVBQXNCLEVBR2hDLFFBQWdCLEVBQ0osYUFBNEIsRUFDRCxXQUFnQjtRQUw3QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBS08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFWbEQsbUJBQWMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNqQyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBV3RCLElBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUM7WUFDdkIsTUFBTTs2SEFDaUgsQ0FBQztTQUN6SDtRQUVDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFLLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLE1BQzNELFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFDdkIsR0FDRSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUNqQyxDQUFDLENBQUMsR0FBRyxHQUFH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QkFBMEIsNENBUTNCLElBQUksY0FBYyxDQUFTLFVBQVUsQ0FBQywwRUFHdEMsc0JBQXNCOzRIQVhyQiwwQkFBMEI7NEZBQTFCLDBCQUEwQjtrQkFEdEMsVUFBVTs7MEJBUU4sUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxJQUFJLGNBQWMsQ0FBUyxVQUFVLENBQUM7OzBCQUU3QyxRQUFROzswQkFDUixNQUFNOzJCQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgSHR0cENsaWVudCxcclxuICBIdHRwRXZlbnQsXHJcbiAgSHR0cEhlYWRlcnMsXHJcbiAgSHR0cFBhcmFtcyxcclxuICBIdHRwUmVzcG9uc2UsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQXBpUmVzcG9uc2UsIENvbmZpZ3VyYXRpb24sIEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjLCBFU05fRU5WSVJPTk1FTlRfQ09ORklHLCBMaXN0V3JhcHBlckR0byB9IGZyb20gJy4uLy4uL3V0aWxzL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgeyBFc25Ob3RpZmljYXRpb25Nb2RlbCB9IGZyb20gJy4vbW9kZWwvbm90aWZpY2F0aW9uJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVzbk5vdGlmaWNhdGlvbnNDb250cm9sbGVyIHtcclxuICBwdWJsaWMgZGVmYXVsdEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICBwdWJsaWMgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKCk7XHJcbiAgcHJvdGVjdGVkIGJhc2VQYXRoID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignYmFzZVBhdGgnKSlcclxuICAgIGJhc2VQYXRoOiBzdHJpbmcsXHJcbiAgICBAT3B0aW9uYWwoKSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uLFxyXG4gICAgQEluamVjdChFU05fRU5WSVJPTk1FTlRfQ09ORklHKSBwdWJsaWMgZW52aXJvbm1lbnQ6IGFueSxcclxuXHJcbiAgKSB7XHJcbiAgICBpZighIWVudmlyb25tZW50Lm5vdF9zZXQpe1xyXG4gICAgICB0aHJvdyBgRXNuRmlsZW1hbmFnZXJNb2R1bGUgcmVxdWlyZXMgYW4gRVNOX0VOVklST05NRU5UX0NPTkZJRy5cclxuICAgICAgUGxlYXNlIHByb3ZpZGUgb25lIHdpdGggXCJ7IHByb3ZpZGU6IEVTTl9FTlZJUk9OTUVOVF9DT05GSUcsIHVzZVZhbHVlOiB5b3VyX2Vudmlyb25tZW50X2ZpbGUgKGZyb20gc3JjL2Vudmlyb25tZW50cykgfVwiYDtcclxuICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aCB8fCAgYCR7ZW52aXJvbm1lbnQuc2VydmljZXMucHJvdG9jb2x9Oi8vJHtcclxuICAgICAgICBlbnZpcm9ubWVudC5zZXJ2aWNlcy5ob3N0bmFtZVxyXG4gICAgICB9JHtcclxuICAgICAgICAhIWVudmlyb25tZW50LnNlcnZpY2VzLmdhdGV3YXkucG9ydFxyXG4gICAgICAgICAgPyAnOicgKyBlbnZpcm9ubWVudC5zZXJ2aWNlcy5nYXRld2F5LnBvcnRcclxuICAgICAgICAgIDogJydcclxuICAgICAgfS8ke2Vudmlyb25tZW50LnNlcnZpY2VzLm5vdGlmaWNhdGlvbnMucm91dGV9YDtcclxuICAgIFxyXG4gICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoIHx8IGNvbmZpZ3VyYXRpb24uYmFzZVBhdGggfHwgdGhpcy5iYXNlUGF0aDtcclxuICAgIH1cclxuICAgIGlmICghIWVudmlyb25tZW50LnNlcnZpY2VzLm1vY2s/Lm1vY2tBcGkpIHtcclxuICAgICAgdGhpcy5iYXNlUGF0aCA9IGAke2Vudmlyb25tZW50LnNlcnZpY2VzLm1vY2sudXJsfS8ke2Vudmlyb25tZW50LnNlcnZpY2VzLmdkZC5yb3V0ZX1gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXROb3RpZmljYXRpb25zKFxyXG4gICAgcGFnZT86IG51bWJlcixcclxuICAgIHNpemU/OiBudW1iZXIsXHJcbiAgICB0YWdzPzogc3RyaW5nLFxyXG4gICAgcmVhZD86IGJvb2xlYW4sXHJcbiAgICBkYXRlQmVmb3JlPzogRGF0ZSxcclxuICAgIGRhdGVBZnRlcj86IERhdGUsXHJcbiAgICBjcml0aWNhbGl0eT86IHN0cmluZyxcclxuICAgIG9ic2VydmU/OiAnYm9keScsXHJcbiAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW5cclxuICApOiBPYnNlcnZhYmxlPExpc3RXcmFwcGVyRHRvPEVzbk5vdGlmaWNhdGlvbk1vZGVsPiA+O1xyXG4gIHB1YmxpYyBnZXROb3RpZmljYXRpb25zKFxyXG4gICAgcGFnZT86IG51bWJlcixcclxuICAgIHNpemU/OiBudW1iZXIsXHJcbiAgICB0YWdzPzogc3RyaW5nLFxyXG4gICAgcmVhZD86IGJvb2xlYW4sXHJcbiAgICBkYXRlQmVmb3JlPzogRGF0ZSxcclxuICAgIGRhdGVBZnRlcj86IERhdGUsXHJcbiAgICBjcml0aWNhbGl0eT86IHN0cmluZyxcclxuICAgIG9ic2VydmU/OiAncmVzcG9uc2UnLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8TGlzdFdyYXBwZXJEdG88RXNuTm90aWZpY2F0aW9uTW9kZWw+ID4+O1xyXG4gIHB1YmxpYyBnZXROb3RpZmljYXRpb25zKFxyXG4gICAgcGFnZT86IG51bWJlcixcclxuICAgIHNpemU/OiBudW1iZXIsXHJcbiAgICB0YWdzPzogc3RyaW5nLFxyXG4gICAgcmVhZD86IGJvb2xlYW4sXHJcbiAgICBkYXRlQmVmb3JlPzogRGF0ZSxcclxuICAgIGRhdGVBZnRlcj86IERhdGUsXHJcbiAgICBjcml0aWNhbGl0eT86IHN0cmluZyxcclxuICAgIG9ic2VydmU/OiAnZXZlbnRzJyxcclxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhblxyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PExpc3RXcmFwcGVyRHRvPEVzbk5vdGlmaWNhdGlvbk1vZGVsPiA+PjtcclxuICBwdWJsaWMgZ2V0Tm90aWZpY2F0aW9ucyhcclxuICAgIHBhZ2U/OiBudW1iZXIsXHJcbiAgICBzaXplPzogbnVtYmVyLFxyXG4gICAgdGFncz86IHN0cmluZyxcclxuICAgIHJlYWQ/OiBib29sZWFuLFxyXG4gICAgZGF0ZUJlZm9yZT86IERhdGUsXHJcbiAgICBkYXRlQWZ0ZXI/OiBEYXRlLFxyXG4gICAgY3JpdGljYWxpdHk/OiBzdHJpbmcsXHJcbiAgICBvYnNlcnZlOiBhbnkgPSAnYm9keScsXHJcbiAgICByZXBvcnRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGxldCBxdWVyeVBhcmFtZXRlcnMgPSBuZXcgSHR0cFBhcmFtcyh7XHJcbiAgICAgIGVuY29kZXI6IG5ldyBDdXN0b21IdHRwVXJsRW5jb2RpbmdDb2RlYygpLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoISF0YWdzKSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHF1ZXJ5UGFyYW1ldGVycy5zZXQoJ3RhZ3MnLCA8YW55PnRhZ3MpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlYWQgIT09IHVuZGVmaW5lZCAmJiByZWFkICE9PSBudWxsKSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHF1ZXJ5UGFyYW1ldGVycy5zZXQoJ3JlYWQnLCA8YW55PnJlYWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhZ2UgIT09IHVuZGVmaW5lZCAmJiBwYWdlICE9PSBudWxsKSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHF1ZXJ5UGFyYW1ldGVycy5zZXQoJ3BhZ2UnLCA8YW55PnBhZ2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNpemUgIT09IHVuZGVmaW5lZCAmJiBzaXplICE9PSBudWxsKSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHF1ZXJ5UGFyYW1ldGVycy5zZXQoJ3NpemUnLCA8YW55PnNpemUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGVCZWZvcmUgIT09IHVuZGVmaW5lZCAmJiBkYXRlQmVmb3JlICE9PSBudWxsKSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHF1ZXJ5UGFyYW1ldGVycy5zZXQoJ2RhdGVCZWZvcmUnLCA8YW55PmRhdGVCZWZvcmUudG9JU09TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0ZUFmdGVyICE9PSB1bmRlZmluZWQgJiYgZGF0ZUFmdGVyICE9PSBudWxsKSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHF1ZXJ5UGFyYW1ldGVycy5zZXQoJ2RhdGVBZnRlcicsIDxhbnk+ZGF0ZUFmdGVyLnRvSVNPU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNyaXRpY2FsaXR5ICE9PSB1bmRlZmluZWQgJiYgY3JpdGljYWxpdHkgIT09IG51bGwpIHtcclxuICAgICAgcXVlcnlQYXJhbWV0ZXJzID0gcXVlcnlQYXJhbWV0ZXJzLnNldCgnY3JpdGljYWxpdHknLCA8YW55PmNyaXRpY2FsaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XHJcblxyXG4gICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXHJcbiAgICBsZXQgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gWycqLyonXTtcclxuICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID1cclxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XHJcbiAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHRvIGRldGVybWluZSB0aGUgQ29udGVudC1UeXBlIGhlYWRlclxyXG4gICAgY29uc3QgY29uc3VtZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8TGlzdFdyYXBwZXJEdG88RXNuTm90aWZpY2F0aW9uTW9kZWw+ID4oXHJcbiAgICAgIGAke3RoaXMuYmFzZVBhdGh9L3dlYi1ub3RpZmljYXRpb25zYCxcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgIG9ic2VydmU6IG9ic2VydmUsXHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIFxyXG5cclxuICBwdWJsaWMgZ2V0Q291bnRlcnMoXHJcbiAgICB0YWdzPzogc3RyaW5nLFxyXG4gICAgb2JzZXJ2ZT86ICdib2R5JyxcclxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhblxyXG4gICk6IE9ic2VydmFibGU8TGlzdFdyYXBwZXJEdG88RXNuTm90aWZpY2F0aW9uTW9kZWw+ID47XHJcbiAgcHVibGljIGdldENvdW50ZXJzKFxyXG4gICAgdGFncz86IHN0cmluZyxcclxuICAgIG9ic2VydmU/OiAncmVzcG9uc2UnLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8TGlzdFdyYXBwZXJEdG88RXNuTm90aWZpY2F0aW9uTW9kZWw+ID4+O1xyXG4gIHB1YmxpYyBnZXRDb3VudGVycyhcclxuICAgIHRhZ3M/OiBzdHJpbmcsXHJcbiAgICBvYnNlcnZlPzogJ2V2ZW50cycsXHJcbiAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW5cclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxMaXN0V3JhcHBlckR0bzxFc25Ob3RpZmljYXRpb25Nb2RlbD4gPj47XHJcbiAgcHVibGljIGdldENvdW50ZXJzKFxyXG4gICAgdGFncz86IHN0cmluZyxcclxuICAgIG9ic2VydmU6IGFueSA9ICdib2R5JyxcclxuICAgIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2VcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgbGV0IHF1ZXJ5UGFyYW1ldGVycyA9IG5ldyBIdHRwUGFyYW1zKHtcclxuICAgICAgZW5jb2RlcjogbmV3IEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjKCksXHJcbiAgICB9KTtcclxuICAgIGlmICghIXRhZ3MpIHtcclxuICAgICAgcXVlcnlQYXJhbWV0ZXJzID0gcXVlcnlQYXJhbWV0ZXJzLnNldCgndGFncycsIDxhbnk+dGFncyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRzOiBzdHJpbmdbXSA9IFsnKi8qJ107XHJcbiAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9XHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xyXG4gICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8TGlzdFdyYXBwZXJEdG88RXNuTm90aWZpY2F0aW9uTW9kZWw+ID4oXHJcbiAgICAgIGAke3RoaXMuYmFzZVBhdGh9L3dlYi1ub3RpZmljYXRpb25zL2NvdW50YCxcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgIG9ic2VydmU6IG9ic2VydmUsXHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBtYXJrTm90aWZpY2F0aW9uQXNSZWFkIChcclxuICAgIG5vdGlmaWNhdGlvbklkOiBzdHJpbmcsXHJcbiAgICBvYnNlcnZlPzogJ2JvZHknLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxBcGlSZXNwb25zZTxhbnk+PjtcclxuICBwdWJsaWMgbWFya05vdGlmaWNhdGlvbkFzUmVhZChcclxuICAgIG5vdGlmaWNhdGlvbklkOiBzdHJpbmcsXHJcbiAgICBvYnNlcnZlPzogJ2JvZHknLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QXBpUmVzcG9uc2U8YW55Pj4+O1xyXG4gIHB1YmxpYyBtYXJrTm90aWZpY2F0aW9uQXNSZWFkKFxyXG4gICAgbm90aWZpY2F0aW9uSWQ6IHN0cmluZyxcclxuICAgIG9ic2VydmU/OiAnYm9keScsXHJcbiAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW5cclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxBcGlSZXNwb25zZTxhbnk+Pj47XHJcbiAgcHVibGljIG1hcmtOb3RpZmljYXRpb25Bc1JlYWQoXHJcbiAgICBub3RpZmljYXRpb25JZDogc3RyaW5nLFxyXG4gICAgb2JzZXJ2ZT86ICdib2R5JyxcclxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhblxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBsZXQgcXVlcnlQYXJhbWV0ZXJzID0gbmV3IEh0dHBQYXJhbXMoe1xyXG4gICAgICBlbmNvZGVyOiBuZXcgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcclxuXHJcbiAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcclxuICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbJyovKiddO1xyXG4gICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPVxyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcclxuICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcclxuICAgIGNvbnN0IGNvbnN1bWVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucGF0Y2g8YW55PihcclxuICAgICAgYCR7dGhpcy5iYXNlUGF0aH0vd2ViLW5vdGlmaWNhdGlvbnMvJHtub3RpZmljYXRpb25JZH0vcmVhZGAsXHJcbiAgICAgIHsgaXNSZWFkOiB0cnVlIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzcyxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHVibGljIGRvQWN0aW9uT25Ob3RpZmljYXRpb24gKFxyXG4gICAgbWFyazogJ1ZJRVdFRCcgfCAnUkVBRCcsXHJcbiAgICB0YWdzOiBzdHJpbmcsXHJcbiAgICBsYXN0RGF0ZTogc3RyaW5nLFxyXG4gICAgb2JzZXJ2ZT86ICdib2R5JyxcclxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhblxyXG4gICk6IE9ic2VydmFibGU8QXBpUmVzcG9uc2U8YW55Pj47XHJcbiAgcHVibGljIGRvQWN0aW9uT25Ob3RpZmljYXRpb24oXHJcbiAgICBtYXJrOiAnVklFV0VEJyB8ICdSRUFEJyxcclxuICAgIHRhZ3M6IHN0cmluZyxcclxuICAgIGxhc3REYXRlOiBzdHJpbmcsXHJcbiAgICBvYnNlcnZlPzogJ2JvZHknLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QXBpUmVzcG9uc2U8YW55Pj4+O1xyXG4gIHB1YmxpYyBkb0FjdGlvbk9uTm90aWZpY2F0aW9uKFxyXG4gICAgbWFyazogJ1ZJRVdFRCcgfCAnUkVBRCcsXHJcbiAgICB0YWdzOiBzdHJpbmcsXHJcbiAgICBsYXN0RGF0ZTogc3RyaW5nLFxyXG4gICAgb2JzZXJ2ZT86ICdib2R5JyxcclxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhblxyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PEFwaVJlc3BvbnNlPGFueT4+PjtcclxuICBwdWJsaWMgZG9BY3Rpb25Pbk5vdGlmaWNhdGlvbihcclxuICAgIG1hcms6ICdWSUVXRUQnIHwgJ1JFQUQnLFxyXG4gICAgdGFnczogc3RyaW5nLFxyXG4gICAgbGFzdERhdGU6c3RyaW5nLFxyXG4gICAgb2JzZXJ2ZT86ICdib2R5JyxcclxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhblxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBsZXQgcXVlcnlQYXJhbWV0ZXJzID0gbmV3IEh0dHBQYXJhbXMoe1xyXG4gICAgICBlbmNvZGVyOiBuZXcgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMoKSxcclxuICAgIH0pO1xyXG4gICAgaWYgKCEhdGFncykge1xyXG4gICAgICBxdWVyeVBhcmFtZXRlcnMgPSBxdWVyeVBhcmFtZXRlcnMuc2V0KCd0YWdzJywgPGFueT50YWdzKTtcclxuICAgIH1cclxuICAgIGlmIChtYXJrICE9PSB1bmRlZmluZWQgJiYgbWFyayAhPT0gbnVsbCkge1xyXG4gICAgICBxdWVyeVBhcmFtZXRlcnMgPSBxdWVyeVBhcmFtZXRlcnMuc2V0KCdtYXJrJywgPGFueT5tYXJrKTtcclxuICAgIH1cclxuICAgIGlmIChsYXN0RGF0ZSAhPT0gdW5kZWZpbmVkICYmIGxhc3REYXRlICE9PSBudWxsKSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHF1ZXJ5UGFyYW1ldGVycy5zZXQoJ3NlbmREYXRlJywgPGFueT5sYXN0RGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRzOiBzdHJpbmdbXSA9IFsnKi8qJ107XHJcbiAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9XHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xyXG4gICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRvIGRldGVybWluZSB0aGUgQ29udGVudC1UeXBlIGhlYWRlclxyXG4gICAgY29uc3QgY29uc3VtZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wdXQ8YW55PihcclxuICAgICAgYCR7dGhpcy5iYXNlUGF0aH0vd2ViLW5vdGlmaWNhdGlvbnMvYWN0aW9uYCxcclxuICAgICAge30sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzcyxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==