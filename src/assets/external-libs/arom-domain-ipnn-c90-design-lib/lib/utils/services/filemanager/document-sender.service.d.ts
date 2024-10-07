import { BlobItem, FileMetadataDto } from '../../public-api';
import { UploadItem } from './model/uploadState';
import { EsnUploadStateService } from './upload-state.service';
import { EsnBlobRetreiverService } from './blob-retreiver';
import { EsnFilemanagerController } from './filemanagerController.service';
import * as i0 from "@angular/core";
export declare class EsnDocumentSenderService {
    PROVIDER: any;
    FILE_CHUNK_MAX_SIZE: any;
    filesService: EsnBlobRetreiverService;
    fmService: EsnFilemanagerController;
    uploadStateService: EsnUploadStateService;
    uploadItems: UploadItem[];
    constructor(PROVIDER: any, FILE_CHUNK_MAX_SIZE: any, filesService: EsnBlobRetreiverService, fmService: EsnFilemanagerController, uploadStateService: EsnUploadStateService);
    uploadDocumentsToFM(documents: FileMetadataDto[], blobs?: BlobItem[], showUploadToaster?: boolean): Promise<void>;
    uploadDocumentToFM(doc: FileMetadataDto, blob?: BlobItem, uploadId?: string, showUploadToaster?: boolean): Promise<void>;
    makeInitialUploadRequestCall(doc: FileMetadataDto): Promise<any>;
    sendChunks(chunks: Blob[], fm: FileMetadataDto, uploadId?: string): Promise<void>;
    sendChunk(chunk: Blob, fm: FileMetadataDto, index: number, sparkMd5: any): Promise<any>;
    sendCompletion(fm: FileMetadataDto): Promise<any>;
    chunkUploadComplete(uploadId: string): void;
    getBlobChunks(uuid: string): Promise<Blob[]>;
    deleteFile(uuid: string): Promise<any>;
    deleteFiles(uuids: string[]): Promise<any[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDocumentSenderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnDocumentSenderService>;
}
