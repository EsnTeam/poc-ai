import { EventEmitter } from '@angular/core';
import { DocumentEventEmitter, DocumentItem, FileMetadataDto } from '../../../utils/model/documents';
import * as i0 from "@angular/core";
export declare class EsnFileList {
    documents: (DocumentItem | FileMetadataDto)[];
    disabled: boolean;
    readOnly: boolean;
    event: EventEmitter<DocumentEventEmitter>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnFileList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnFileList, "esn-file-list", never, { "documents": "documents"; "disabled": "disabled"; "readOnly": "readOnly"; }, { "event": "event"; }, never, never, false, never>;
}
