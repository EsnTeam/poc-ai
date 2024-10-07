import { Observable } from 'rxjs';
import { BlobItem, DocumentItem } from '../../utils/model/documents';
import { EsnFileInputNotificationService } from './file-input-notification.service';
import * as i0 from "@angular/core";
export declare abstract class EsnFileInputRemoteFMService {
    abstract filesDownload(uuid: string): Observable<Blob>;
}
export declare abstract class EsnFileInputLocalDBFilesService {
    abstract doesBlobExist(uuid: string): Promise<boolean>;
    abstract getBlob(uuid: string): Promise<BlobItem>;
}
export declare class EsnFileInputNoLocalDBFilesService implements EsnFileInputLocalDBFilesService {
    doesBlobExist(uuid: string): Promise<boolean>;
    getBlob(uuid: string): Promise<BlobItem>;
}
export declare class EsnFileInputNoRemoteFMService implements EsnFileInputRemoteFMService {
    filesDownload(uuid: string): Observable<Blob>;
}
export declare abstract class EsnDocumentRetrievalService {
    abstract documentDownload(document: DocumentItem): void;
}
export declare class EsnLocalOrRemoteDocumentRetrievalService implements EsnDocumentRetrievalService {
    filesManagerController: EsnFileInputRemoteFMService;
    filesService: EsnFileInputLocalDBFilesService;
    notifService: EsnFileInputNotificationService;
    constructor(filesManagerController: EsnFileInputRemoteFMService, filesService: EsnFileInputLocalDBFilesService, notifService: EsnFileInputNotificationService);
    documentDownload(document: DocumentItem): Promise<void>;
    dowloadFromLocalBase(document: DocumentItem): Promise<void>;
    dowloadFromRemote(document: DocumentItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnLocalOrRemoteDocumentRetrievalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnLocalOrRemoteDocumentRetrievalService>;
}
