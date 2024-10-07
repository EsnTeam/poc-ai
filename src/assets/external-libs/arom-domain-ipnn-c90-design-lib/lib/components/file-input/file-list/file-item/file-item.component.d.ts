import { EventEmitter, OnInit } from '@angular/core';
import { DocumentEventEmitter, DocumentItem, FileMetadataDto } from '../../../../utils/model/documents';
import * as i0 from "@angular/core";
export declare class EsnFileItem implements OnInit {
    event: EventEmitter<DocumentEventEmitter>;
    _fileType: any;
    isDownloadableFromRemote: boolean;
    constructor();
    _document: DocumentItem;
    set document(value: DocumentItem | FileMetadataDto);
    disabled: boolean;
    ngOnInit(): void;
    onDeleteClick(): void;
    onDownloadClick(): void;
    onUploadClick(): void;
    roundValue(value: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnFileItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnFileItem, "esn-file-item", never, { "document": "document"; "disabled": "disabled"; }, { "event": "event"; }, never, never, false, never>;
}
