import { BlobItem, CustomFileMetadataDto, DocumentItem, FileMetadataDto, Image } from '../public-api';
export declare class EsnFileConverter {
    static cutBlobIntoChunks(item: BlobItem, fileChunkMaxSize: number): Promise<Blob[]>;
    static getFileBuffer(file: any): Promise<ArrayBuffer>;
    static getFileBase64(file: File): Promise<string>;
    static getImgFromBlob(file: File, maxWidth?: number, maxHeight?: number): Promise<Image>;
    static getImgDimensions(file: File): Promise<{
        width: number;
        height: number;
    }>;
    static roundValue(value: number | null | undefined): number;
    /*******************/
    static bufferToBase64(buffer: Uint8Array): string;
    static base64ToBuffer(b64: string): Uint8Array;
    static blobToBase64(blob: Blob): Promise<string>;
    static base64ToBlob(b64: string): Promise<Blob>;
    static buildBlob(dataURL: string): Promise<Blob>;
    static blobToFile: (theBlob: Blob, fileName: string) => File;
    static getImageFromBlobItem(item: BlobItem, maxWidth?: number, maxHeight?: number): Promise<Image>;
    static getThumbnailUrlFromBlob(item: BlobItem): Promise<string>;
    static customMetadataDtoToBlobItem(customMetadata: CustomFileMetadataDto): Promise<BlobItem>;
    static customMetadataDtosToBlobItems(customMetadata: CustomFileMetadataDto[]): Promise<BlobItem[]>;
    static saveFile(blob: Blob, fileName: string, fileType: string): void;
    static convertFileMetaDataToDocument(file: FileMetadataDto | CustomFileMetadataDto, loading?: boolean, actions?: any): DocumentItem;
}
