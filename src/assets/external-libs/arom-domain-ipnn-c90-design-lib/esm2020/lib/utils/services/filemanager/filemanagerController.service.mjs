import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { HttpHeaders, HttpParams, } from '@angular/common/http';
import { Configuration, CustomHttpUrlEncodingCodec } from '../../public-api';
import { ESN_ENVIRONMENT_CONFIG } from '../global-configuration/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../public-api";
export class EsnFilemanagerController {
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
            : ''}/${environment.services.filemanager.route}`;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
        if (!!environment.services.mock?.mockApi) {
            this.basePath = `${environment.services.mock.url}/${environment.services.gdd.route}`;
        }
    }
    deleteFile(FILEUUID, observe = 'body', reportProgress = false) {
        if (FILEUUID === null || FILEUUID === undefined) {
            throw new Error('Required parameter FILEUUID was null or undefined when calling deleteFile.');
        }
        let headers = this.defaultHeaders;
        // authentication (aromOauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        else {
            const aromAccess = localStorage.getItem('aromAccess');
            const gardianAccess = localStorage.getItem('gardianAccess');
            if (aromAccess && gardianAccess) {
                const aromAccessJson = JSON.parse(aromAccess);
                const gardianAccessJson = JSON.parse(gardianAccess);
                headers = headers.set('Authorization', 'Bearer ' + gardianAccessJson.id_token);
                headers = headers.set('OIDC_access_token', aromAccessJson.access_token);
            }
        }
        // to determine the Accept header
        let httpHeaderAccepts = [];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('delete', `${this.basePath}/files/${encodeURIComponent(String(FILEUUID))}`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress,
        });
    }
    filesAddparts(formData, index, length, FILEUUID, observe = 'body', reportProgress = false) {
        if (formData === null || formData === undefined) {
            throw new Error('Required parameter body was null or undefined when calling filesAddparts.');
        }
        if (index === null || index === undefined) {
            throw new Error('Required parameter index was null or undefined when calling filesAddparts.');
        }
        if (length === null || length === undefined) {
            throw new Error('Required parameter length was null or undefined when calling filesAddparts.');
        }
        if (FILEUUID === null || FILEUUID === undefined) {
            throw new Error('Required parameter FILEUUID was null or undefined when calling filesAddparts.');
        }
        let queryParameters = new HttpParams({
            encoder: new CustomHttpUrlEncodingCodec(),
        });
        if (index !== undefined && index !== null) {
            queryParameters = queryParameters.set('index', index);
        }
        if (length !== undefined && length !== null) {
            queryParameters = queryParameters.set('length', length);
        }
        let headers = this.defaultHeaders;
        // authentication (aromOauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        else {
            const aromAccess = localStorage.getItem('aromAccess');
            const gardianAccess = localStorage.getItem('gardianAccess');
            if (aromAccess && gardianAccess) {
                const aromAccessJson = JSON.parse(aromAccess);
                const gardianAccessJson = JSON.parse(gardianAccess);
                headers = headers.set('Authorization', 'Bearer ' + gardianAccessJson.id_token);
                headers = headers.set('OIDC_access_token', aromAccessJson.access_token);
            }
        }
        // to determine the Accept header
        let httpHeaderAccepts = ['application/json'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.request('post', `${this.basePath}/files/${encodeURIComponent(String(FILEUUID))}/parts`, {
            body: formData,
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress,
        });
    }
    filesCompletion(completion, checksum, FILEUUID, observe = 'body', reportProgress = false) {
        if (completion === null || completion === undefined) {
            throw new Error('Required parameter completion was null or undefined when calling filesCompletion.');
        }
        if (checksum === null || checksum === undefined) {
            throw new Error('Required parameter checksum was null or undefined when calling filesCompletion.');
        }
        if (FILEUUID === null || FILEUUID === undefined) {
            throw new Error('Required parameter FILEUUID was null or undefined when calling filesCompletion.');
        }
        let queryParameters = new HttpParams({
            encoder: new CustomHttpUrlEncodingCodec(),
        });
        if (completion !== undefined && completion !== null) {
            queryParameters = queryParameters.set('completion', completion);
        }
        if (checksum !== undefined && checksum !== null) {
            // Checksum calculation method changed in Mbaas
            //queryParameters = queryParameters.set('checksum', <any>checksum);
        }
        let headers = this.defaultHeaders;
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        else {
            const aromAccess = localStorage.getItem('aromAccess');
            const gardianAccess = localStorage.getItem('gardianAccess');
            if (aromAccess && gardianAccess) {
                const aromAccessJson = JSON.parse(aromAccess);
                const gardianAccessJson = JSON.parse(gardianAccess);
                headers = headers.set('Authorization', 'Bearer ' + gardianAccessJson.id_token);
                headers = headers.set('OIDC_access_token', aromAccessJson.access_token);
            }
        }
        // to determine the Accept header
        let httpHeaderAccepts = ['application/json'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('patch', `${this.basePath}/files/${encodeURIComponent(String(FILEUUID))}`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress,
        });
    }
    filesDebug(type, fileuuid, observe = 'body', reportProgress = false) {
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling filesDebug.');
        }
        let queryParameters = new HttpParams({
            encoder: new CustomHttpUrlEncodingCodec(),
        });
        if (type !== undefined && type !== null) {
            queryParameters = queryParameters.set('type', type);
        }
        if (fileuuid !== undefined && fileuuid !== null) {
            queryParameters = queryParameters.set('fileuuid', fileuuid);
        }
        let headers = this.defaultHeaders;
        // authentication (aromOauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        else {
            const gardianAccess = localStorage.getItem('gardianAccess');
            const aromAccess = localStorage.getItem('aromAccess');
            if (aromAccess && gardianAccess) {
                const aromAccessJson = JSON.parse(aromAccess);
                const gardianAccessJson = JSON.parse(gardianAccess);
                headers = headers.set('Authorization', 'Bearer ' + gardianAccessJson.id_token);
                headers = headers.set('OIDC_access_token', aromAccessJson.access_token);
            }
        }
        // to determine the Accept header
        let httpHeaderAccepts = ['application/json'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('get', `${this.basePath}/debug`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress,
        });
    }
    filesDownload(FILEUUID, observe = 'body', reportProgress = false) {
        if (FILEUUID === null || FILEUUID === undefined) {
            throw new Error('Required parameter FILEUUID was null or undefined when calling filesDownload.');
        }
        let headers = this.defaultHeaders;
        // authentication (aromOauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        else {
            const gardianAccess = localStorage.getItem('gardianAccess');
            const aromAccess = localStorage.getItem('aromAccess');
            if (aromAccess && gardianAccess) {
                const aromAccessJson = JSON.parse(aromAccess);
                const gardianAccessJson = JSON.parse(gardianAccess);
                headers = headers.set('Authorization', 'Bearer ' + gardianAccessJson.id_token);
                headers = headers.set('OIDC_access_token', aromAccessJson.access_token);
            }
        }
        // to determine the Accept header
        let httpHeaderAccepts = ['application/octet-stream'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', 'application/octet-stream');
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.get(`${this.basePath}/${this.environment.services.filemanager.endpoints.files}/${encodeURIComponent(String(FILEUUID))}/binary`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress,
            responseType: 'blob',
        });
    }
    filesInitFile(body, observe = 'body', reportProgress = false) {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling filesInitFile.');
        }
        let headers = this.defaultHeaders;
        // authentication (aromOauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        else {
            const gardianAccess = localStorage.getItem('gardianAccess');
            const aromAccess = localStorage.getItem('aromAccess');
            if (aromAccess && gardianAccess) {
                const aromAccessJson = JSON.parse(aromAccess);
                const gardianAccessJson = JSON.parse(gardianAccess);
                headers = headers.set('Authorization', 'Bearer ' + gardianAccessJson.id_token);
                headers = headers.set('OIDC_access_token', aromAccessJson.access_token);
            }
        }
        // to determine the Accept header
        let httpHeaderAccepts = ['application/json'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = ['application/json'];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.request('post', `${this.basePath}/files`, {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress,
        });
    }
    getFileMetadata(FILEUUID, observe = 'body', reportProgress = false) {
        if (FILEUUID === null || FILEUUID === undefined) {
            throw new Error('Required parameter FILEUUID was null or undefined when calling getFileMetadata.');
        }
        let headers = this.defaultHeaders;
        // authentication (aromOauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        else {
            const gardianAccess = localStorage.getItem('gardianAccess');
            const aromAccess = localStorage.getItem('aromAccess');
            if (aromAccess && gardianAccess) {
                const aromAccessJson = JSON.parse(aromAccess);
                const gardianAccessJson = JSON.parse(gardianAccess);
                headers = headers.set('Authorization', 'Bearer ' + gardianAccessJson.id_token);
                headers = headers.set('OIDC_access_token', aromAccessJson.access_token);
            }
        }
        // to determine the Accept header
        let httpHeaderAccepts = ['application/json'];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('get', `${this.basePath}/${encodeURIComponent(String(FILEUUID))}`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress,
        });
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
}
EsnFilemanagerController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFilemanagerController, deps: [{ token: i1.HttpClient }, { token: new InjectionToken('basePath'), optional: true }, { token: i2.Configuration, optional: true }, { token: ESN_ENVIRONMENT_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
EsnFilemanagerController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFilemanagerController });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFilemanagerController, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZW1hbmFnZXJDb250cm9sbGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvdXRpbHMvc2VydmljZXMvZmlsZW1hbmFnZXIvZmlsZW1hbmFnZXJDb250cm9sbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBR0wsV0FBVyxFQUNYLFVBQVUsR0FFWCxNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBMkIsYUFBYSxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLGtCQUFrQixDQUFDO0FBR3RJLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0FBRzdFLE1BQU0sT0FBTyx3QkFBd0I7SUFLbkMsWUFDWSxVQUFzQixFQUdoQyxRQUFnQixFQUNKLGFBQTRCLEVBQ0QsV0FBZ0I7UUFMN0MsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUtPLGdCQUFXLEdBQVgsV0FBVyxDQUFLO1FBVmxELG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDakMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQVd0QixJQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFDO1lBQ3ZCLE1BQU07NkhBQ2lILENBQUM7U0FDekg7UUFFQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsSUFBSyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxNQUMzRCxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQ3ZCLEdBQ0UsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxD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QkFBQyxJQUFJLGNBQWMsQ0FBUyxVQUFVLENBQUM7OzBCQUU3QyxRQUFROzswQkFDUixNQUFNOzJCQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgSHR0cENsaWVudCxcclxuICBIdHRwRXZlbnQsXHJcbiAgSHR0cEhlYWRlcnMsXHJcbiAgSHR0cFBhcmFtcyxcclxuICBIdHRwUmVzcG9uc2UsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcGlSZXNwb25zZSwgQXJvbUFjY2VzcywgQ29uZmlndXJhdGlvbiwgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMsIEZpbGVNZXRhZGF0YUR0bywgR2FyZGlhbkFjY2VzcyB9IGZyb20gJy4uLy4uL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgeyBXcmFwcGVyRmlsZU1ldGFkYXRhIH0gZnJvbSAnLi9tb2RlbC9XcmFwcGVyRmlsZU1ldGFkYXRhJztcclxuaW1wb3J0IHsgSW5pdFVwbG9hZFJlcXVlc3REdG8gfSBmcm9tICcuL21vZGVsL2luaXRVcGxvYWRSZXF1ZXN0RHRvJztcclxuaW1wb3J0IHsgRVNOX0VOVklST05NRU5UX0NPTkZJRyB9IGZyb20gJy4uL2dsb2JhbC1jb25maWd1cmF0aW9uL2Vudmlyb25tZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVzbkZpbGVtYW5hZ2VyQ29udHJvbGxlciB7XHJcbiAgcHVibGljIGRlZmF1bHRIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgcHVibGljIGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbigpO1xyXG4gIHByb3RlY3RlZCBiYXNlUGF0aCA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QobmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2Jhc2VQYXRoJykpXHJcbiAgICBiYXNlUGF0aDogc3RyaW5nLFxyXG4gICAgQE9wdGlvbmFsKCkgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbixcclxuICAgIEBJbmplY3QoRVNOX0VOVklST05NRU5UX0NPTkZJRykgcHVibGljIGVudmlyb25tZW50OiBhbnksXHJcblxyXG4gICkge1xyXG4gICAgaWYoISFlbnZpcm9ubWVudC5ub3Rfc2V0KXtcclxuICAgICAgdGhyb3cgYEVzbkZpbGVtYW5hZ2VyTW9kdWxlIHJlcXVpcmVzIGFuIEVTTl9FTlZJUk9OTUVOVF9DT05GSUcuXHJcbiAgICAgIFBsZWFzZSBwcm92aWRlIG9uZSB3aXRoIFwieyBwcm92aWRlOiBFU05fRU5WSVJPTk1FTlRfQ09ORklHLCB1c2VWYWx1ZTogeW91cl9lbnZpcm9ubWVudF9maWxlIChmcm9tIHNyYy9lbnZpcm9ubWVudHMpIH1cImA7XHJcbiAgICB9XHJcblxyXG4gICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGggfHwgIGAke2Vudmlyb25tZW50LnNlcnZpY2VzLnByb3RvY29sfTovLyR7XHJcbiAgICAgICAgZW52aXJvbm1lbnQuc2VydmljZXMuaG9zdG5hbWVcclxuICAgICAgfSR7XHJcbiAgICAgICAgISFlbnZpcm9ubWVudC5zZXJ2aWNlcy5nYXRld2F5LnBvcnRcclxuICAgICAgICAgID8gJzonICsgZW52aXJvbm1lbnQuc2VydmljZXMuZ2F0ZXdheS5wb3J0XHJcbiAgICAgICAgICA6ICcnXHJcbiAgICAgIH0vJHtlbnZpcm9ubWVudC5zZXJ2aWNlcy5maWxlbWFuYWdlci5yb3V0ZX1gO1xyXG4gICAgXHJcbiAgICBpZiAoY29uZmlndXJhdGlvbikge1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGggfHwgY29uZmlndXJhdGlvbi5iYXNlUGF0aCB8fCB0aGlzLmJhc2VQYXRoO1xyXG4gICAgfVxyXG4gICAgaWYgKCEhZW52aXJvbm1lbnQuc2VydmljZXMubW9jaz8ubW9ja0FwaSkge1xyXG4gICAgICB0aGlzLmJhc2VQYXRoID0gYCR7ZW52aXJvbm1lbnQuc2VydmljZXMubW9jay51cmx9LyR7ZW52aXJvbm1lbnQuc2VydmljZXMuZ2RkLnJvdXRlfWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGlzIHNvZnQgZGVsZXRlIG1lYW5pbmcgb25seSBmaWxlbWV0YWRhIGlzIGRlbGV0ZWQsIHRoZSBiaW5hcnkgd2lsbCBiZSBkZWxldGVkIGJ5IGEgYmF0Y2hcclxuICAgKlxyXG4gICAqIEBwYXJhbSBGSUxFVVVJRFxyXG4gICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXHJcbiAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZWxldGVGaWxlKFxyXG4gICAgRklMRVVVSUQ6IHN0cmluZyxcclxuICAgIG9ic2VydmU/OiAnYm9keScsXHJcbiAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW5cclxuICApOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIHB1YmxpYyBkZWxldGVGaWxlKFxyXG4gICAgRklMRVVVSUQ6IHN0cmluZyxcclxuICAgIG9ic2VydmU/OiAncmVzcG9uc2UnLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj47XHJcblxyXG4gIHB1YmxpYyBkZWxldGVGaWxlKFxyXG4gICAgRklMRVVVSUQ6IHN0cmluZyxcclxuICAgIG9ic2VydmU/OiAnZXZlbnRzJyxcclxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhblxyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xyXG5cclxuICBwdWJsaWMgZGVsZXRlRmlsZShcclxuICAgIEZJTEVVVUlEOiBzdHJpbmcsXHJcbiAgICBvYnNlcnZlOiBhbnkgPSAnYm9keScsXHJcbiAgICByZXBvcnRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGlmIChGSUxFVVVJRCA9PT0gbnVsbCB8fCBGSUxFVVVJRCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnUmVxdWlyZWQgcGFyYW1ldGVyIEZJTEVVVUlEIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZGVsZXRlRmlsZS4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgIC8vIGF1dGhlbnRpY2F0aW9uIChhcm9tT2F1dGgyKSByZXF1aXJlZFxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbikge1xyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9XHJcbiAgICAgICAgdHlwZW9mIHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbiA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgPyB0aGlzLmNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW4oKVxyXG4gICAgICAgICAgOiB0aGlzLmNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW47XHJcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIGFjY2Vzc1Rva2VuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGFyb21BY2Nlc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJvbUFjY2VzcycpO1xyXG4gICAgICBjb25zdCBnYXJkaWFuQWNjZXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhcmRpYW5BY2Nlc3MnKTtcclxuXHJcbiAgICAgIGlmIChhcm9tQWNjZXNzICYmIGdhcmRpYW5BY2Nlc3MpIHtcclxuICAgICAgICBjb25zdCBhcm9tQWNjZXNzSnNvbjogQXJvbUFjY2VzcyA9IEpTT04ucGFyc2UoYXJvbUFjY2Vzcyk7XHJcbiAgICAgICAgY29uc3QgZ2FyZGlhbkFjY2Vzc0pzb246IEdhcmRpYW5BY2Nlc3MgPSBKU09OLnBhcnNlKGdhcmRpYW5BY2Nlc3MpO1xyXG5cclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbicsXHJcbiAgICAgICAgICAnQmVhcmVyICcgKyBnYXJkaWFuQWNjZXNzSnNvbi5pZF90b2tlblxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdPSURDX2FjY2Vzc190b2tlbicsIGFyb21BY2Nlc3NKc29uLmFjY2Vzc190b2tlbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcclxuICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXTtcclxuICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID1cclxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XHJcbiAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXHJcbiAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnJlcXVlc3Q8YW55PihcclxuICAgICAgJ2RlbGV0ZScsXHJcbiAgICAgIGAke3RoaXMuYmFzZVBhdGh9L2ZpbGVzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhGSUxFVVVJRCkpfWAsXHJcbiAgICAgIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzcyxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZpbGVzIC0gYWRkIHBhcnRzXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaW5kZXhcclxuICAgKiBAcGFyYW0gbGVuZ3RoXHJcbiAgICogQHBhcmFtIEZJTEVVVUlEXHJcbiAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cclxuICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXHJcbiAgICovXHJcbiAgcHVibGljIGZpbGVzQWRkcGFydHMoXHJcbiAgICBmb3JtRGF0YTogRm9ybURhdGEsXHJcbiAgICBpbmRleDogbnVtYmVyLFxyXG4gICAgbGVuZ3RoOiBudW1iZXIsXHJcbiAgICBGSUxFVVVJRDogc3RyaW5nLFxyXG4gICAgb2JzZXJ2ZT86ICdib2R5JyxcclxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhblxyXG4gICk6IE9ic2VydmFibGU8QXBpUmVzcG9uc2U8V3JhcHBlckZpbGVNZXRhZGF0YT4+O1xyXG5cclxuICBwdWJsaWMgZmlsZXNBZGRwYXJ0cyhcclxuICAgIGZvcm1EYXRhOiBGb3JtRGF0YSxcclxuICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICBsZW5ndGg6IG51bWJlcixcclxuICAgIEZJTEVVVUlEOiBzdHJpbmcsXHJcbiAgICBvYnNlcnZlPzogJ3Jlc3BvbnNlJyxcclxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhblxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEFwaVJlc3BvbnNlPFdyYXBwZXJGaWxlTWV0YWRhdGE+Pj47XHJcblxyXG4gIHB1YmxpYyBmaWxlc0FkZHBhcnRzKFxyXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxyXG4gICAgaW5kZXg6IG51bWJlcixcclxuICAgIGxlbmd0aDogbnVtYmVyLFxyXG4gICAgRklMRVVVSUQ6IHN0cmluZyxcclxuICAgIG9ic2VydmU/OiAnZXZlbnRzJyxcclxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhblxyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PEFwaVJlc3BvbnNlPFdyYXBwZXJGaWxlTWV0YWRhdGE+Pj47XHJcblxyXG4gIHB1YmxpYyBmaWxlc0FkZHBhcnRzKFxyXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxyXG4gICAgaW5kZXg6IG51bWJlcixcclxuICAgIGxlbmd0aDogbnVtYmVyLFxyXG4gICAgRklMRVVVSUQ6IHN0cmluZyxcclxuICAgIG9ic2VydmU6IGFueSA9ICdib2R5JyxcclxuICAgIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2VcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgaWYgKGZvcm1EYXRhID09PSBudWxsIHx8IGZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdSZXF1aXJlZCBwYXJhbWV0ZXIgYm9keSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGZpbGVzQWRkcGFydHMuJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbmRleCA9PT0gbnVsbCB8fCBpbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnUmVxdWlyZWQgcGFyYW1ldGVyIGluZGV4IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZmlsZXNBZGRwYXJ0cy4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbmd0aCA9PT0gbnVsbCB8fCBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ1JlcXVpcmVkIHBhcmFtZXRlciBsZW5ndGggd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBmaWxlc0FkZHBhcnRzLidcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoRklMRVVVSUQgPT09IG51bGwgfHwgRklMRVVVSUQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ1JlcXVpcmVkIHBhcmFtZXRlciBGSUxFVVVJRCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGZpbGVzQWRkcGFydHMuJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBxdWVyeVBhcmFtZXRlcnMgPSBuZXcgSHR0cFBhcmFtcyh7XHJcbiAgICAgIGVuY29kZXI6IG5ldyBDdXN0b21IdHRwVXJsRW5jb2RpbmdDb2RlYygpLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICBxdWVyeVBhcmFtZXRlcnMgPSBxdWVyeVBhcmFtZXRlcnMuc2V0KCdpbmRleCcsIDxhbnk+aW5kZXgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxlbmd0aCAhPT0gdW5kZWZpbmVkICYmIGxlbmd0aCAhPT0gbnVsbCkge1xyXG4gICAgICBxdWVyeVBhcmFtZXRlcnMgPSBxdWVyeVBhcmFtZXRlcnMuc2V0KCdsZW5ndGgnLCA8YW55Pmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgIC8vIGF1dGhlbnRpY2F0aW9uIChhcm9tT2F1dGgyKSByZXF1aXJlZFxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbikge1xyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9XHJcbiAgICAgICAgdHlwZW9mIHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbiA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgPyB0aGlzLmNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW4oKVxyXG4gICAgICAgICAgOiB0aGlzLmNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW47XHJcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIGFjY2Vzc1Rva2VuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGFyb21BY2Nlc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJvbUFjY2VzcycpO1xyXG4gICAgICBjb25zdCBnYXJkaWFuQWNjZXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhcmRpYW5BY2Nlc3MnKTtcclxuXHJcbiAgICAgIGlmIChhcm9tQWNjZXNzICYmIGdhcmRpYW5BY2Nlc3MpIHtcclxuICAgICAgICBjb25zdCBhcm9tQWNjZXNzSnNvbjogQXJvbUFjY2VzcyA9IEpTT04ucGFyc2UoYXJvbUFjY2Vzcyk7XHJcbiAgICAgICAgY29uc3QgZ2FyZGlhbkFjY2Vzc0pzb246IEdhcmRpYW5BY2Nlc3MgPSBKU09OLnBhcnNlKGdhcmRpYW5BY2Nlc3MpO1xyXG5cclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbicsXHJcbiAgICAgICAgICAnQmVhcmVyICcgKyBnYXJkaWFuQWNjZXNzSnNvbi5pZF90b2tlblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnT0lEQ19hY2Nlc3NfdG9rZW4nLCBhcm9tQWNjZXNzSnNvbi5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXHJcbiAgICBsZXQgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gWydhcHBsaWNhdGlvbi9qc29uJ107XHJcbiAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9XHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xyXG4gICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucmVxdWVzdDxGaWxlTWV0YWRhdGFEdG8+KFxyXG4gICAgICAncG9zdCcsXHJcbiAgICAgIGAke3RoaXMuYmFzZVBhdGh9L2ZpbGVzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhGSUxFVVVJRCkpfS9wYXJ0c2AsXHJcbiAgICAgIHtcclxuICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzcyxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuZCBvZiBVcGxvYWQsIGNvbXBsZXRlZCB3aWxsIGJlIG1lcmdlIGFsbCBwYXJ0cyBsaW5rZWQgdG8gZmlsZSAodXVpZCkuIEFib3J0IHdpbGwgYmUgZGVsZXRlZCBhbGwgcGFydHMgbGlua2VkIHRvIGZpbGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb21wbGV0aW9uXHJcbiAgICogQHBhcmFtIGNoZWNrc3VtIFRoZSBjb21wbGV0ZSBmaWxlIGNoZWNrc3VtIGZvciBjaGVjayBpbnRlZ3JpdHlcclxuICAgKiBAcGFyYW0gRklMRVVVSURcclxuICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxyXG4gICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cclxuICAgKi9cclxuICBwdWJsaWMgZmlsZXNDb21wbGV0aW9uKFxyXG4gICAgY29tcGxldGlvbjogc3RyaW5nLFxyXG4gICAgY2hlY2tzdW06IHN0cmluZyxcclxuICAgIEZJTEVVVUlEOiBzdHJpbmcsXHJcbiAgICBvYnNlcnZlPzogJ2JvZHknLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxBcGlSZXNwb25zZTxXcmFwcGVyRmlsZU1ldGFkYXRhPj47XHJcblxyXG4gIHB1YmxpYyBmaWxlc0NvbXBsZXRpb24oXHJcbiAgICBjb21wbGV0aW9uOiBzdHJpbmcsXHJcbiAgICBjaGVja3N1bTogc3RyaW5nLFxyXG4gICAgRklMRVVVSUQ6IHN0cmluZyxcclxuICAgIG9ic2VydmU/OiAncmVzcG9uc2UnLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QXBpUmVzcG9uc2U8V3JhcHBlckZpbGVNZXRhZGF0YT4+PjtcclxuXHJcbiAgcHVibGljIGZpbGVzQ29tcGxldGlvbihcclxuICAgIGNvbXBsZXRpb246IHN0cmluZyxcclxuICAgIGNoZWNrc3VtOiBzdHJpbmcsXHJcbiAgICBGSUxFVVVJRDogc3RyaW5nLFxyXG4gICAgb2JzZXJ2ZT86ICdldmVudHMnLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QXBpUmVzcG9uc2U8V3JhcHBlckZpbGVNZXRhZGF0YT4+PjtcclxuXHJcbiAgcHVibGljIGZpbGVzQ29tcGxldGlvbihcclxuICAgIGNvbXBsZXRpb246IHN0cmluZyxcclxuICAgIGNoZWNrc3VtOiBzdHJpbmcsXHJcbiAgICBGSUxFVVVJRDogc3RyaW5nLFxyXG4gICAgb2JzZXJ2ZTogYW55ID0gJ2JvZHknLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAoY29tcGxldGlvbiA9PT0gbnVsbCB8fCBjb21wbGV0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdSZXF1aXJlZCBwYXJhbWV0ZXIgY29tcGxldGlvbiB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGZpbGVzQ29tcGxldGlvbi4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoZWNrc3VtID09PSBudWxsIHx8IGNoZWNrc3VtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdSZXF1aXJlZCBwYXJhbWV0ZXIgY2hlY2tzdW0gd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBmaWxlc0NvbXBsZXRpb24uJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChGSUxFVVVJRCA9PT0gbnVsbCB8fCBGSUxFVVVJRCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnUmVxdWlyZWQgcGFyYW1ldGVyIEZJTEVVVUlEIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZmlsZXNDb21wbGV0aW9uLidcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcXVlcnlQYXJhbWV0ZXJzID0gbmV3IEh0dHBQYXJhbXMoe1xyXG4gICAgICBlbmNvZGVyOiBuZXcgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMoKSxcclxuICAgIH0pO1xyXG4gICAgaWYgKGNvbXBsZXRpb24gIT09IHVuZGVmaW5lZCAmJiBjb21wbGV0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHF1ZXJ5UGFyYW1ldGVycy5zZXQoJ2NvbXBsZXRpb24nLCA8YW55PmNvbXBsZXRpb24pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoZWNrc3VtICE9PSB1bmRlZmluZWQgJiYgY2hlY2tzdW0gIT09IG51bGwpIHtcclxuICAgICAgLy8gQ2hlY2tzdW0gY2FsY3VsYXRpb24gbWV0aG9kIGNoYW5nZWQgaW4gTWJhYXNcclxuICAgICAgLy9xdWVyeVBhcmFtZXRlcnMgPSBxdWVyeVBhcmFtZXRlcnMuc2V0KCdjaGVja3N1bScsIDxhbnk+Y2hlY2tzdW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcclxuXHJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID1cclxuICAgICAgICB0eXBlb2YgdGhpcy5jb25maWd1cmF0aW9uLmFjY2Vzc1Rva2VuID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgICA/IHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbigpXHJcbiAgICAgICAgICA6IHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbjtcclxuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgYWNjZXNzVG9rZW4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYXJvbUFjY2VzcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcm9tQWNjZXNzJyk7XHJcbiAgICAgIGNvbnN0IGdhcmRpYW5BY2Nlc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FyZGlhbkFjY2VzcycpO1xyXG5cclxuICAgICAgaWYgKGFyb21BY2Nlc3MgJiYgZ2FyZGlhbkFjY2Vzcykge1xyXG4gICAgICAgIGNvbnN0IGFyb21BY2Nlc3NKc29uOiBBcm9tQWNjZXNzID0gSlNPTi5wYXJzZShhcm9tQWNjZXNzKTtcclxuICAgICAgICBjb25zdCBnYXJkaWFuQWNjZXNzSnNvbjogR2FyZGlhbkFjY2VzcyA9IEpTT04ucGFyc2UoZ2FyZGlhbkFjY2Vzcyk7XHJcblxyXG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldChcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJyxcclxuICAgICAgICAgICdCZWFyZXIgJyArIGdhcmRpYW5BY2Nlc3NKc29uLmlkX3Rva2VuXHJcbiAgICAgICAgKTtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ09JRENfYWNjZXNzX3Rva2VuJywgYXJvbUFjY2Vzc0pzb24uYWNjZXNzX3Rva2VuKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRzOiBzdHJpbmdbXSA9IFsnYXBwbGljYXRpb24vanNvbiddO1xyXG4gICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPVxyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcclxuICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcclxuICAgIGNvbnN0IGNvbnN1bWVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucmVxdWVzdDxGaWxlTWV0YWRhdGFEdG8+KFxyXG4gICAgICAncGF0Y2gnLFxyXG4gICAgICBgJHt0aGlzLmJhc2VQYXRofS9maWxlcy8ke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoRklMRVVVSUQpKX1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcclxuICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3MsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBmaWxlcyAtIGRlYnVnXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0ZWNobmljYWwgaW5mb3NcclxuICAgKiBAcGFyYW0gZmlsZXV1aWQgRmlsZSB1dWlkXHJcbiAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cclxuICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXHJcbiAgICovXHJcbiAgcHVibGljIGZpbGVzRGVidWcoXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBmaWxldXVpZD86IHN0cmluZyxcclxuICAgIG9ic2VydmU/OiAnYm9keScsXHJcbiAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW5cclxuICApOiBPYnNlcnZhYmxlPEZpbGVNZXRhZGF0YUR0bz47XHJcblxyXG4gIHB1YmxpYyBmaWxlc0RlYnVnKFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgZmlsZXV1aWQ/OiBzdHJpbmcsXHJcbiAgICBvYnNlcnZlPzogJ3Jlc3BvbnNlJyxcclxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhblxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEZpbGVNZXRhZGF0YUR0bz4+O1xyXG5cclxuICBwdWJsaWMgZmlsZXNEZWJ1ZyhcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIGZpbGV1dWlkPzogc3RyaW5nLFxyXG4gICAgb2JzZXJ2ZT86ICdldmVudHMnLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8RmlsZU1ldGFkYXRhRHRvPj47XHJcblxyXG4gIHB1YmxpYyBmaWxlc0RlYnVnKFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgZmlsZXV1aWQ/OiBzdHJpbmcsXHJcbiAgICBvYnNlcnZlOiBhbnkgPSAnYm9keScsXHJcbiAgICByZXBvcnRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ1JlcXVpcmVkIHBhcmFtZXRlciB0eXBlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZmlsZXNEZWJ1Zy4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHF1ZXJ5UGFyYW1ldGVycyA9IG5ldyBIdHRwUGFyYW1zKHtcclxuICAgICAgZW5jb2RlcjogbmV3IEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjKCksXHJcbiAgICB9KTtcclxuICAgIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICBxdWVyeVBhcmFtZXRlcnMgPSBxdWVyeVBhcmFtZXRlcnMuc2V0KCd0eXBlJywgPGFueT50eXBlKTtcclxuICAgIH1cclxuICAgIGlmIChmaWxldXVpZCAhPT0gdW5kZWZpbmVkICYmIGZpbGV1dWlkICE9PSBudWxsKSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHF1ZXJ5UGFyYW1ldGVycy5zZXQoJ2ZpbGV1dWlkJywgPGFueT5maWxldXVpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgIC8vIGF1dGhlbnRpY2F0aW9uIChhcm9tT2F1dGgyKSByZXF1aXJlZFxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbikge1xyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9XHJcbiAgICAgICAgdHlwZW9mIHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbiA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgPyB0aGlzLmNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW4oKVxyXG4gICAgICAgICAgOiB0aGlzLmNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW47XHJcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIGFjY2Vzc1Rva2VuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGdhcmRpYW5BY2Nlc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FyZGlhbkFjY2VzcycpO1xyXG4gICAgICBjb25zdCBhcm9tQWNjZXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Fyb21BY2Nlc3MnKTtcclxuXHJcbiAgICAgIGlmIChhcm9tQWNjZXNzICYmIGdhcmRpYW5BY2Nlc3MpIHtcclxuICAgICAgICBjb25zdCBhcm9tQWNjZXNzSnNvbjogQXJvbUFjY2VzcyA9IEpTT04ucGFyc2UoYXJvbUFjY2Vzcyk7XHJcbiAgICAgICAgY29uc3QgZ2FyZGlhbkFjY2Vzc0pzb246IEdhcmRpYW5BY2Nlc3MgPSBKU09OLnBhcnNlKGdhcmRpYW5BY2Nlc3MpO1xyXG5cclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbicsXHJcbiAgICAgICAgICAnQmVhcmVyICcgKyBnYXJkaWFuQWNjZXNzSnNvbi5pZF90b2tlblxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdPSURDX2FjY2Vzc190b2tlbicsIGFyb21BY2Nlc3NKc29uLmFjY2Vzc190b2tlbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcclxuICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbJ2FwcGxpY2F0aW9uL2pzb24nXTtcclxuICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID1cclxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XHJcbiAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXHJcbiAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnJlcXVlc3Q8RmlsZU1ldGFkYXRhRHRvPihcclxuICAgICAgJ2dldCcsXHJcbiAgICAgIGAke3RoaXMuYmFzZVBhdGh9L2RlYnVnYCxcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgIG9ic2VydmU6IG9ic2VydmUsXHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZmlsZXMgLSBkb3dubG9hZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIEZJTEVVVUlEXHJcbiAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cclxuICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXHJcbiAgICovXHJcbiAgcHVibGljIGZpbGVzRG93bmxvYWQoXHJcbiAgICBGSUxFVVVJRDogc3RyaW5nLFxyXG4gICAgb2JzZXJ2ZT86ICdib2R5JyxcclxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhblxyXG4gICk6IE9ic2VydmFibGU8QmxvYj47XHJcblxyXG4gIHB1YmxpYyBmaWxlc0Rvd25sb2FkKFxyXG4gICAgRklMRVVVSUQ6IHN0cmluZyxcclxuICAgIG9ic2VydmU/OiAncmVzcG9uc2UnLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QmxvYj4+O1xyXG5cclxuICBwdWJsaWMgZmlsZXNEb3dubG9hZChcclxuICAgIEZJTEVVVUlEOiBzdHJpbmcsXHJcbiAgICBvYnNlcnZlPzogJ2V2ZW50cycsXHJcbiAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW5cclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxCbG9iPj47XHJcblxyXG4gIHB1YmxpYyBmaWxlc0Rvd25sb2FkKFxyXG4gICAgRklMRVVVSUQ6IHN0cmluZyxcclxuICAgIG9ic2VydmU6IGFueSA9ICdib2R5JyxcclxuICAgIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2VcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgaWYgKEZJTEVVVUlEID09PSBudWxsIHx8IEZJTEVVVUlEID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdSZXF1aXJlZCBwYXJhbWV0ZXIgRklMRVVVSUQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBmaWxlc0Rvd25sb2FkLidcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XHJcblxyXG4gICAgLy8gYXV0aGVudGljYXRpb24gKGFyb21PYXV0aDIpIHJlcXVpcmVkXHJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID1cclxuICAgICAgICB0eXBlb2YgdGhpcy5jb25maWd1cmF0aW9uLmFjY2Vzc1Rva2VuID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgICA/IHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbigpXHJcbiAgICAgICAgICA6IHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbjtcclxuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgYWNjZXNzVG9rZW4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZ2FyZGlhbkFjY2VzcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYXJkaWFuQWNjZXNzJyk7XHJcbiAgICAgIGNvbnN0IGFyb21BY2Nlc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJvbUFjY2VzcycpO1xyXG5cclxuICAgICAgaWYgKGFyb21BY2Nlc3MgJiYgZ2FyZGlhbkFjY2Vzcykge1xyXG4gICAgICAgIGNvbnN0IGFyb21BY2Nlc3NKc29uOiBBcm9tQWNjZXNzID0gSlNPTi5wYXJzZShhcm9tQWNjZXNzKTtcclxuICAgICAgICBjb25zdCBnYXJkaWFuQWNjZXNzSnNvbjogR2FyZGlhbkFjY2VzcyA9IEpTT04ucGFyc2UoZ2FyZGlhbkFjY2Vzcyk7XHJcblxyXG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldChcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJyxcclxuICAgICAgICAgICdCZWFyZXIgJyArIGdhcmRpYW5BY2Nlc3NKc29uLmlkX3Rva2VuXHJcbiAgICAgICAgKTtcclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ09JRENfYWNjZXNzX3Rva2VuJywgYXJvbUFjY2Vzc0pzb24uYWNjZXNzX3Rva2VuKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRzOiBzdHJpbmdbXSA9IFsnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ107XHJcbiAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9XHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xyXG4gICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXHJcbiAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChcclxuICAgICAgYCR7dGhpcy5iYXNlUGF0aH0vJHtcclxuICAgICAgICB0aGlzLmVudmlyb25tZW50LnNlcnZpY2VzLmZpbGVtYW5hZ2VyLmVuZHBvaW50cy5maWxlc1xyXG4gICAgICB9LyR7ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhGSUxFVVVJRCkpfS9iaW5hcnlgLFxyXG4gICAgICB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcclxuICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3MsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBmaWxlcyAtIGluaXRGaWxlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYm9keVxyXG4gICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXHJcbiAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBmaWxlc0luaXRGaWxlKFxyXG4gICAgYm9keTogSW5pdFVwbG9hZFJlcXVlc3REdG8sXHJcbiAgICBvYnNlcnZlPzogJ2JvZHknLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxBcGlSZXNwb25zZTxXcmFwcGVyRmlsZU1ldGFkYXRhPj47XHJcblxyXG4gIHB1YmxpYyBmaWxlc0luaXRGaWxlKFxyXG4gICAgYm9keTogSW5pdFVwbG9hZFJlcXVlc3REdG8sXHJcbiAgICBvYnNlcnZlPzogJ3Jlc3BvbnNlJyxcclxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhblxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEFwaVJlc3BvbnNlPFdyYXBwZXJGaWxlTWV0YWRhdGE+Pj47XHJcblxyXG4gIHB1YmxpYyBmaWxlc0luaXRGaWxlKFxyXG4gICAgYm9keTogSW5pdFVwbG9hZFJlcXVlc3REdG8sXHJcbiAgICBvYnNlcnZlPzogJ2V2ZW50cycsXHJcbiAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW5cclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxBcGlSZXNwb25zZTxXcmFwcGVyRmlsZU1ldGFkYXRhPj4+O1xyXG5cclxuICBwdWJsaWMgZmlsZXNJbml0RmlsZShcclxuICAgIGJvZHk6IEluaXRVcGxvYWRSZXF1ZXN0RHRvLFxyXG4gICAgb2JzZXJ2ZTogYW55ID0gJ2JvZHknLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAoYm9keSA9PT0gbnVsbCB8fCBib2R5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdSZXF1aXJlZCBwYXJhbWV0ZXIgYm9keSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGZpbGVzSW5pdEZpbGUuJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgIC8vIGF1dGhlbnRpY2F0aW9uIChhcm9tT2F1dGgyKSByZXF1aXJlZFxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbikge1xyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9XHJcbiAgICAgICAgdHlwZW9mIHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbiA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgPyB0aGlzLmNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW4oKVxyXG4gICAgICAgICAgOiB0aGlzLmNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW47XHJcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIGFjY2Vzc1Rva2VuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGdhcmRpYW5BY2Nlc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FyZGlhbkFjY2VzcycpO1xyXG4gICAgICBjb25zdCBhcm9tQWNjZXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Fyb21BY2Nlc3MnKTtcclxuXHJcbiAgICAgIGlmIChhcm9tQWNjZXNzICYmIGdhcmRpYW5BY2Nlc3MpIHtcclxuICAgICAgICBjb25zdCBhcm9tQWNjZXNzSnNvbjogQXJvbUFjY2VzcyA9IEpTT04ucGFyc2UoYXJvbUFjY2Vzcyk7XHJcbiAgICAgICAgY29uc3QgZ2FyZGlhbkFjY2Vzc0pzb246IEdhcmRpYW5BY2Nlc3MgPSBKU09OLnBhcnNlKGdhcmRpYW5BY2Nlc3MpO1xyXG5cclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbicsXHJcbiAgICAgICAgICAnQmVhcmVyICcgKyBnYXJkaWFuQWNjZXNzSnNvbi5pZF90b2tlblxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdPSURDX2FjY2Vzc190b2tlbicsIGFyb21BY2Nlc3NKc29uLmFjY2Vzc190b2tlbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcclxuICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbJ2FwcGxpY2F0aW9uL2pzb24nXTtcclxuICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID1cclxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XHJcbiAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXHJcbiAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbJ2FwcGxpY2F0aW9uL2pzb24nXTtcclxuICAgIGNvbnN0IGh0dHBDb250ZW50VHlwZVNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPVxyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQ29udGVudFR5cGUoY29uc3VtZXMpO1xyXG4gICAgaWYgKGh0dHBDb250ZW50VHlwZVNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsIGh0dHBDb250ZW50VHlwZVNlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnJlcXVlc3Q8RmlsZU1ldGFkYXRhRHRvPihcclxuICAgICAgJ3Bvc3QnLFxyXG4gICAgICBgJHt0aGlzLmJhc2VQYXRofS9maWxlc2AsXHJcbiAgICAgIHtcclxuICAgICAgICBib2R5OiBib2R5LFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgIG9ic2VydmU6IG9ic2VydmUsXHJcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgZmlsZSBtZXRhZGF0YSBieSAgdXVpZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIEZJTEVVVUlEXHJcbiAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cclxuICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXHJcbiAgICovXHJcbiAgcHVibGljIGdldEZpbGVNZXRhZGF0YShcclxuICAgIEZJTEVVVUlEOiBzdHJpbmcsXHJcbiAgICBvYnNlcnZlPzogJ2JvZHknLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxGaWxlTWV0YWRhdGFEdG8+O1xyXG5cclxuICBwdWJsaWMgZ2V0RmlsZU1ldGFkYXRhKFxyXG4gICAgRklMRVVVSUQ6IHN0cmluZyxcclxuICAgIG9ic2VydmU/OiAncmVzcG9uc2UnLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8RmlsZU1ldGFkYXRhRHRvPj47XHJcblxyXG4gIHB1YmxpYyBnZXRGaWxlTWV0YWRhdGEoXHJcbiAgICBGSUxFVVVJRDogc3RyaW5nLFxyXG4gICAgb2JzZXJ2ZT86ICdldmVudHMnLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8RmlsZU1ldGFkYXRhRHRvPj47XHJcblxyXG4gIHB1YmxpYyBnZXRGaWxlTWV0YWRhdGEoXHJcbiAgICBGSUxFVVVJRDogc3RyaW5nLFxyXG4gICAgb2JzZXJ2ZTogYW55ID0gJ2JvZHknLFxyXG4gICAgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAoRklMRVVVSUQgPT09IG51bGwgfHwgRklMRVVVSUQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ1JlcXVpcmVkIHBhcmFtZXRlciBGSUxFVVVJRCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldEZpbGVNZXRhZGF0YS4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgIC8vIGF1dGhlbnRpY2F0aW9uIChhcm9tT2F1dGgyKSByZXF1aXJlZFxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbikge1xyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9XHJcbiAgICAgICAgdHlwZW9mIHRoaXMuY29uZmlndXJhdGlvbi5hY2Nlc3NUb2tlbiA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgPyB0aGlzLmNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW4oKVxyXG4gICAgICAgICAgOiB0aGlzLmNvbmZpZ3VyYXRpb24uYWNjZXNzVG9rZW47XHJcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIGFjY2Vzc1Rva2VuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGdhcmRpYW5BY2Nlc3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FyZGlhbkFjY2VzcycpO1xyXG4gICAgICBjb25zdCBhcm9tQWNjZXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Fyb21BY2Nlc3MnKTtcclxuXHJcbiAgICAgIGlmIChhcm9tQWNjZXNzICYmIGdhcmRpYW5BY2Nlc3MpIHtcclxuICAgICAgICBjb25zdCBhcm9tQWNjZXNzSnNvbjogQXJvbUFjY2VzcyA9IEpTT04ucGFyc2UoYXJvbUFjY2Vzcyk7XHJcbiAgICAgICAgY29uc3QgZ2FyZGlhbkFjY2Vzc0pzb246IEdhcmRpYW5BY2Nlc3MgPSBKU09OLnBhcnNlKGdhcmRpYW5BY2Nlc3MpO1xyXG5cclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbicsXHJcbiAgICAgICAgICAnQmVhcmVyICcgKyBnYXJkaWFuQWNjZXNzSnNvbi5pZF90b2tlblxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdPSURDX2FjY2Vzc190b2tlbicsIGFyb21BY2Nlc3NKc29uLmFjY2Vzc190b2tlbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcclxuICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbJ2FwcGxpY2F0aW9uL2pzb24nXTtcclxuICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID1cclxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XHJcbiAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXHJcbiAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnJlcXVlc3Q8RmlsZU1ldGFkYXRhRHRvPihcclxuICAgICAgJ2dldCcsXHJcbiAgICAgIGAke3RoaXMuYmFzZVBhdGh9LyR7ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhGSUxFVVVJRCkpfWAsXHJcbiAgICAgIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxyXG4gICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzcyxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBjb25zdW1lcyBzdHJpbmdbXSBtaW1lLXR5cGVzXHJcbiAgICogQHJldHVybiB0cnVlOiBjb25zdW1lcyBjb250YWlucyAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIGZhbHNlOiBvdGhlcndpc2VcclxuICAgKi9cclxuICBwcml2YXRlIGNhbkNvbnN1bWVGb3JtKGNvbnN1bWVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZm9ybSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcclxuICAgIGZvciAoY29uc3QgY29uc3VtZSBvZiBjb25zdW1lcykge1xyXG4gICAgICBpZiAoZm9ybSA9PT0gY29uc3VtZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==