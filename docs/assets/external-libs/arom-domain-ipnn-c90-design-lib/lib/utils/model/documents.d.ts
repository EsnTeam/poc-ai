export interface FileMetadataDto {
    aip?: FileMetadataDto.AipEnum;
    checksum?: string;
    commonReference?: string;
    physicalFilename?: string;
    contentType?: string;
    description?: string;
    documentGDDType?: FileMetadataDto.DocumentGDDTypeEnum;
    documentGddIdentifier?: string;
    extension?: string;
    externalUuid?: string;
    fileNature?: string;
    fileProvider?: string;
    filename?: string;
    id?: number;
    initialReference?: string;
    partNumber?: number;
    parts?: Array<FileMetadataDto>;
    size?: number;
    uuid?: string;
    version?: number;
    completionState?: FileMetadataDto.CompletionStateEnum;
    isDeletable?: boolean;
}
export declare namespace FileMetadataDto {
    type AipEnum = 'OUI' | 'NON';
    const AipEnum: {
        OUI: AipEnum;
        NON: AipEnum;
    };
    type DocumentGDDTypeEnum = 'SWT_DOC_GDD';
    const DocumentGDDTypeEnum: {
        SWTDOCGDD: "SWT_DOC_GDD";
    };
    type CompletionStateEnum = 'COMPLETED' | 'PARTIALY_COMPLETED' | 'IN_PROGRESS' | 'ABORTED';
    const CompletionStateEnum: {
        COMPLETED: CompletionStateEnum;
        PARTIALYCOMPLETED: CompletionStateEnum;
        INPROGRESS: CompletionStateEnum;
        ABORTED: CompletionStateEnum;
    };
}
export interface CustomFileMetadataDto extends FileMetadataDto {
    blob?: Blob;
}
export interface DocumentItem {
    metadata: FileMetadataDto | CustomFileMetadataDto;
    blobUuid: string;
    thumbnailBase64?: string;
    loading: boolean;
    uploading: boolean;
    uploadingProgress: number;
    msg: string;
    actions: DocumentActions;
}
export interface BlobItem {
    uuid: string;
    filename: string;
    size: number;
    contentType: string;
    blobString: string;
}
export interface Thumbnail {
    uuid: string;
    url: string;
}
export declare enum DocumentReplicationStatus {
    NOTREPLICATED = "NOTREPLICATED",
    REPLICATING = "REPLICATING",
    REPLICATED = "REPLICATED",
    ERROR = "ERROR"
}
export interface DocumentEventEmitter {
    event: DocumentEventType;
    document: DocumentItem;
}
export declare enum DocumentEventType {
    DELETE = "DELETE",
    DOWNLOAD = "DOWNLOAD",
    UPLOAD = "UPLOAD",
    VIEW = "VIEW",
    REPLICATE = "REPLICATE"
}
export interface DocumentActions {
    delete: boolean;
    download: boolean;
    upload: boolean;
    view?: boolean;
}
export interface Image {
    dataUrl: string;
    width: number;
    height: number;
}
export declare type BannerTypeEnum = 'info' | 'pending' | 'warning' | 'error' | 'success';
export declare const CONTENT_TYPES_MAP: any;
