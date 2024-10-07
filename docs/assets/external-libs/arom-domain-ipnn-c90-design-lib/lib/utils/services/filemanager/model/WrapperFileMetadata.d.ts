import { FileMetadataDto } from "../../../public-api";
export interface WrapperFileMetadata {
    fileMetadata?: FileMetadataDto;
    links?: Links;
}
export interface Links {
    href?: string;
}
