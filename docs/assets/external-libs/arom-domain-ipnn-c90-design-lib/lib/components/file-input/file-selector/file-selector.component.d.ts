import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class EsnFileSelector implements AfterViewInit, OnInit, OnChanges {
    elementRef: ElementRef;
    multiple: boolean;
    disabled: boolean;
    accept: string;
    fileTypesLabel?: string;
    text?: string;
    maxSize?: number;
    filesAdded: EventEmitter<File[]>;
    identifier: string;
    acceptedExtensions: string | undefined;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): Promise<void>;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnFileSelector, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnFileSelector, "esn-file-selector", never, { "multiple": "multiple"; "disabled": "disabled"; "accept": "accept"; "fileTypesLabel": "fileTypesLabel"; "text": "text"; "maxSize": "maxSize"; }, { "filesAdded": "filesAdded"; }, never, ["*"], false, never>;
}
