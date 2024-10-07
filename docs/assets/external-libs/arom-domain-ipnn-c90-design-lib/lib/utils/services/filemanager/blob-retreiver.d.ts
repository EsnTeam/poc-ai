import { BlobItem } from "../../public-api";
import * as i0 from "@angular/core";
export declare abstract class EsnBlobRetreiverService {
    abstract getBlob(uuid: string): Promise<BlobItem>;
    abstract deleteBlobs(uuids: string[]): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnBlobRetreiverService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnBlobRetreiverService>;
}
export declare class EsnNoBlobRetreiverService implements EsnBlobRetreiverService {
    NOT_IMPLEMENTED_MESSAGE: string;
    getBlob(uuid: string): Promise<BlobItem>;
    deleteBlobs(uuids: string[]): Promise<boolean>;
}
