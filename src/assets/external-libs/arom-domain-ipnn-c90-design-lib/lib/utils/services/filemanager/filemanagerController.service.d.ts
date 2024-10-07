import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Configuration, FileMetadataDto } from '../../public-api';
import { WrapperFileMetadata } from './model/WrapperFileMetadata';
import { InitUploadRequestDto } from './model/initUploadRequestDto';
import * as i0 from "@angular/core";
export declare class EsnFilemanagerController {
    protected httpClient: HttpClient;
    environment: any;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    protected basePath: string;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration, environment: any);
    /**
     * This is soft delete meaning only filemetada is deleted, the binary will be deleted by a batch
     *
     * @param FILEUUID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteFile(FILEUUID: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    deleteFile(FILEUUID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    deleteFile(FILEUUID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * files - add parts
     *
     * @param index
     * @param length
     * @param FILEUUID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    filesAddparts(formData: FormData, index: number, length: number, FILEUUID: string, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse<WrapperFileMetadata>>;
    filesAddparts(formData: FormData, index: number, length: number, FILEUUID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse<WrapperFileMetadata>>>;
    filesAddparts(formData: FormData, index: number, length: number, FILEUUID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse<WrapperFileMetadata>>>;
    /**
     * End of Upload, completed will be merge all parts linked to file (uuid). Abort will be deleted all parts linked to file
     *
     * @param completion
     * @param checksum The complete file checksum for check integrity
     * @param FILEUUID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    filesCompletion(completion: string, checksum: string, FILEUUID: string, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse<WrapperFileMetadata>>;
    filesCompletion(completion: string, checksum: string, FILEUUID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse<WrapperFileMetadata>>>;
    filesCompletion(completion: string, checksum: string, FILEUUID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse<WrapperFileMetadata>>>;
    /**
     * files - debug
     *
     * @param type The type of technical infos
     * @param fileuuid File uuid
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    filesDebug(type: string, fileuuid?: string, observe?: 'body', reportProgress?: boolean): Observable<FileMetadataDto>;
    filesDebug(type: string, fileuuid?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FileMetadataDto>>;
    filesDebug(type: string, fileuuid?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FileMetadataDto>>;
    /**
     * files - download
     *
     * @param FILEUUID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    filesDownload(FILEUUID: string, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    filesDownload(FILEUUID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    filesDownload(FILEUUID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    /**
     * files - initFile
     *
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    filesInitFile(body: InitUploadRequestDto, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse<WrapperFileMetadata>>;
    filesInitFile(body: InitUploadRequestDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse<WrapperFileMetadata>>>;
    filesInitFile(body: InitUploadRequestDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse<WrapperFileMetadata>>>;
    /**
     * Retrieve file metadata by  uuid
     *
     * @param FILEUUID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getFileMetadata(FILEUUID: string, observe?: 'body', reportProgress?: boolean): Observable<FileMetadataDto>;
    getFileMetadata(FILEUUID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FileMetadataDto>>;
    getFileMetadata(FILEUUID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FileMetadataDto>>;
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnFilemanagerController, [null, { optional: true; }, { optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnFilemanagerController>;
}
