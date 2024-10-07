export interface InitUploadRequestDto {
    contentType?: string;
    filename?: string;
    size?: number;
    description?: string;
    checksum?: string;
    externalUuid?: string;
    fileProvider?: string;
}
