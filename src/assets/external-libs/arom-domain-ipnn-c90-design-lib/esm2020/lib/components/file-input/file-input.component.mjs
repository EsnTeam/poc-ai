import { Component, EventEmitter, Inject, Input, Output, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DocumentEventType, } from '../../utils/model/documents';
import { EsnFileConverter, EsnUtils } from '../../utils/utils/public-api';
import { FILE_MANAGER_PROVIDER } from '../../utils/services/filemanager/filemanager-configuration';
import * as i0 from "@angular/core";
import * as i1 from "./document-retrieval.service";
import * as i2 from "./file-input-notification.service";
import * as i3 from "./file-size.pipe";
import * as i4 from "./fileInputConfig";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/progress-bar";
import * as i7 from "./file-list/file-list.component";
import * as i8 from "./file-selector/file-selector.component";
export class EsnFileInput {
    constructor(docRetrievalService, notificationService, fileSizePipe, elementRef, config, PROVIDER) {
        this.docRetrievalService = docRetrievalService;
        this.notificationService = notificationService;
        this.fileSizePipe = fileSizePipe;
        this.elementRef = elementRef;
        this.config = config;
        this.PROVIDER = PROVIDER;
        this.selectorNumber = '';
        this.cardMode = true;
        this.multi = true;
        this.processAddedBlobs = () => Promise.resolve(true);
        this.processDeletedDoc = () => Promise.resolve(true);
        this.documentDelete = new EventEmitter();
        this.documentsAdd = new EventEmitter();
        this.onTouch = () => { };
        this.onChange = () => { };
        this._documents = [];
        this.documents = [];
        this.readOnly = false;
        this._loading = false;
    }
    writeValue(obj) {
        this.documents = !this.multi ? obj : obj || [];
        this._updateConvertedDocs();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.readOnly = isDisabled;
        this._updateActionsPermissions();
    }
    async onDocumentsAdd(docs) {
        this.documentsAdd.emit(docs);
        this._loading = true;
        const blobItems = await EsnFileConverter.customMetadataDtosToBlobItems(docs);
        docs.forEach((fm) => delete fm.blob);
        const processingOk = await this.processAddedBlobs(blobItems, docs);
        if (processingOk) {
            this.addDocsToValue(docs);
            this._updateConvertedDocs();
            this.onChange(this.documents);
        }
        this._loading = false;
    }
    async onDocumentsDelete(deletedDoc) {
        this.documentDelete.emit(deletedDoc);
        this._loading = true;
        const processingOk = await this.processDeletedDoc(deletedDoc);
        if (processingOk) {
            this.removeDocFromValue(deletedDoc);
            this._updateConvertedDocs();
            this.onChange(this.documents);
        }
        this._loading = false;
    }
    get _maxSize() {
        return this.maxSize || this.config.FILE_MAX_SIZE;
    }
    get _maxCount() {
        return this.multi ? (this.maxCount || this.config.MAX_NB_FILES) : 1;
    }
    set disabled(value) {
        if (value === null) {
            return;
        }
        this.readOnly = value;
        this._updateActionsPermissions();
    }
    set loading(value) {
        if (value === null) {
            return;
        }
        this._loading = value;
    }
    onDocumentEvent(e) {
        switch (e.event) {
            case DocumentEventType.DOWNLOAD:
            case DocumentEventType.VIEW:
                this.handleDocumentDownload(e);
                break;
            case DocumentEventType.DELETE:
                this.onDocumentsDelete(e.document.metadata);
                break;
        }
    }
    async onFilesAdd(files) {
        let fileArray = this.convertToFileArray(files);
        if (fileArray.some((file) => !this.checkFileType(file))) {
            this.notificationService.showNotif('info', 'Format incorrect', `Certains documents n'avaient pas le format attendu (${this.acceptedFileTypesLabel}), les documents n'ont pas été ajoutés`);
            return;
        }
        if (fileArray.length + this._documents.length > this._maxCount) {
            this.notificationService.showNotif('info', 'Nombre de document dépassé', `Le nombre maximal de document (${this._maxCount}) est dépassé, les documents n'ont pas été ajoutés`);
            return;
        }
        let filesTooBig = [];
        let convertedFiles = [];
        for (const file of fileArray) {
            if (file.size > this._maxSize) {
                filesTooBig.push(file);
            }
            else {
                convertedFiles.push({
                    externalUuid: EsnUtils.generateRandomUuid(),
                    size: file.size,
                    filename: file.name,
                    contentType: file.type,
                    fileProvider: this.PROVIDER || this.config.FILE_PROVIDER,
                    blob: file,
                });
            }
        }
        if (convertedFiles.length > 0) {
            this.onDocumentsAdd(convertedFiles);
        }
        if (filesTooBig.length > 0) {
            let errorMessage = '';
            errorMessage += filesTooBig.reduce((acc, val) => acc +
                `- ${val.name} (${this.fileSizePipe.transform(val.size)}) </br>`, `Les fichiers suivants dépassent la taille maximale autorisée (${this.fileSizePipe.transform(this._maxSize)}) : </br>`);
            this.notificationService.showNotif('info', 'Fichiers volumineux', errorMessage);
        }
    }
    get acceptedFileTypesLabel() {
        return (this.acceptedTypes || [])
            .map((t) => this.config.FileTypesMap[t].label)
            .join(', ');
    }
    _updateConvertedDocs() {
        this._documents = this.getDocsValAsList().map((x) => EsnFileConverter.convertFileMetaDataToDocument(x, false, {
            delete: !this.readOnly,
            download: true,
            view: false,
            upload: false,
        }));
    }
    _updateActionsPermissions() {
        this._documents.forEach((doc) => {
            doc.actions = {
                delete: !this.readOnly,
                download: true,
                view: false,
                upload: false,
            };
        });
    }
    handleDocumentDownload(e) {
        this.docRetrievalService.documentDownload(e.document);
    }
    getAcceptedFileTypes() {
        return this.acceptedTypes
            ? this.acceptedTypes.reduce((acc, curr) => {
                this.config.FileTypesMap[curr].type.forEach((t) => acc.push(t));
                return acc;
            }, [])
            : [];
    }
    get acceptedFileTypes() {
        return !!this.acceptedTypes && !!this.acceptedTypes.length
            ? this.getAcceptedFileTypes().join(',')
            : '*';
    }
    checkFileType(file) {
        if (!this.acceptedTypes) {
            return true;
        }
        return this.getAcceptedFileTypes().includes(file.type);
    }
    _checkAcceptedTypesValidity() {
        const validTypes = Object.keys(this.config.FileTypesMap);
        const invalidTypes = this.acceptedTypes?.filter((t) => !validTypes.includes(t));
        if (!!invalidTypes?.length) {
            console.error(`Le(s) type(s) de document(s): '${invalidTypes.join(', ')}' ne sont pas définis dans la configuration. Aucun contrôle sur le type des documents ne sera réalisé.`);
            this.acceptedTypes = [];
        }
    }
    convertToFileArray(files) {
        const array = [];
        for (const file of files) {
            array.push(file);
        }
        return array;
    }
    getDocsValAsList() {
        if (!this.documents) {
            return [];
        }
        return this.multi ? this.documents : [this.documents];
    }
    addDocsToValue(docs) {
        if (this.multi) {
            this.documents.push(...docs);
        }
        else {
            !docs.length || (this.documents = docs[0]);
        }
    }
    removeDocFromValue(doc) {
        if (this.multi) {
            this.documents = this.documents.filter((mtd) => !(!!mtd.externalUuid && mtd.externalUuid == doc.externalUuid) && !(!!mtd.uuid && mtd.uuid == doc.uuid));
        }
        else {
            this.documents = null;
        }
    }
}
EsnFileInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFileInput, deps: [{ token: i1.EsnDocumentRetrievalService }, { token: i2.EsnFileInputNotificationService }, { token: i3.FileSizePipe }, { token: i0.ElementRef }, { token: i4.EsnFileInputConfig }, { token: FILE_MANAGER_PROVIDER }], target: i0.ɵɵFactoryTarget.Component });
EsnFileInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnFileInput, selector: "esn-file-input", inputs: { maxSize: "maxSize", maxCount: "maxCount", acceptedTypes: "acceptedTypes", cardMode: "cardMode", selectorText: "selectorText", multi: "multi", processAddedBlobs: "processAddedBlobs", processDeletedDoc: "processDeletedDoc", disabled: "disabled", loading: "loading" }, outputs: { documentDelete: "documentDelete", documentsAdd: "documentsAdd" }, host: { properties: { "class.esn-file-input-disabled": "_disabled" }, classAttribute: "esn-file-input" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: EsnFileInput,
            multi: true,
        },
    ], ngImport: i0, template: "<esn-file-selector\r\n  *ngIf=\"!readOnly\"\r\n  [disabled]=\"_loading\"\r\n  [accept]=\"acceptedFileTypes\"\r\n  [multiple]=\"_maxCount > 1\"\r\n  [text]=\"selectorText\"\r\n  [fileTypesLabel]=\"acceptedFileTypesLabel\"\r\n  [maxSize]=\"_maxSize\"\r\n  (filesAdded)=\"onFilesAdd($event)\"\r\n>\r\n  <ng-content></ng-content>\r\n</esn-file-selector>\r\n\r\n<div *ngIf=\"_loading\" class=\"progress-bar-container\">\r\n  <mat-progress-bar mode=\"buffer\"></mat-progress-bar>\r\n</div>\r\n\r\n<esn-file-list\r\n  [documents]=\"_documents\"\r\n  [disabled]=\"_loading\"\r\n  [readOnly]=\"readOnly\"\r\n  (event)=\"onDocumentEvent($event)\"\r\n></esn-file-list>\r\n", styles: [":host{display:block;border-radius:8px;min-width:min-content}:host .progress-bar-container{padding:.5rem}\n"], dependencies: [{ kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { kind: "component", type: i7.EsnFileList, selector: "esn-file-list", inputs: ["documents", "disabled", "readOnly"], outputs: ["event"] }, { kind: "component", type: i8.EsnFileSelector, selector: "esn-file-selector", inputs: ["multiple", "disabled", "accept", "fileTypesLabel", "text", "maxSize"], outputs: ["filesAdded"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFileInput, decorators: [{
            type: Component,
            args: [{ selector: 'esn-file-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: EsnFileInput,
                            multi: true,
                        },
                    ], host: {
                        class: 'esn-file-input',
                        '[class.esn-file-input-disabled]': `_disabled`
                    }, template: "<esn-file-selector\r\n  *ngIf=\"!readOnly\"\r\n  [disabled]=\"_loading\"\r\n  [accept]=\"acceptedFileTypes\"\r\n  [multiple]=\"_maxCount > 1\"\r\n  [text]=\"selectorText\"\r\n  [fileTypesLabel]=\"acceptedFileTypesLabel\"\r\n  [maxSize]=\"_maxSize\"\r\n  (filesAdded)=\"onFilesAdd($event)\"\r\n>\r\n  <ng-content></ng-content>\r\n</esn-file-selector>\r\n\r\n<div *ngIf=\"_loading\" class=\"progress-bar-container\">\r\n  <mat-progress-bar mode=\"buffer\"></mat-progress-bar>\r\n</div>\r\n\r\n<esn-file-list\r\n  [documents]=\"_documents\"\r\n  [disabled]=\"_loading\"\r\n  [readOnly]=\"readOnly\"\r\n  (event)=\"onDocumentEvent($event)\"\r\n></esn-file-list>\r\n", styles: [":host{display:block;border-radius:8px;min-width:min-content}:host .progress-bar-container{padding:.5rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.EsnDocumentRetrievalService }, { type: i2.EsnFileInputNotificationService }, { type: i3.FileSizePipe }, { type: i0.ElementRef }, { type: i4.EsnFileInputConfig }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [FILE_MANAGER_PROVIDER]
                }] }]; }, propDecorators: { maxSize: [{
                type: Input
            }], maxCount: [{
                type: Input
            }], acceptedTypes: [{
                type: Input
            }], cardMode: [{
                type: Input
            }], selectorText: [{
                type: Input
            }], multi: [{
                type: Input
            }], processAddedBlobs: [{
                type: Input
            }], processDeletedDoc: [{
                type: Input
            }], documentDelete: [{
                type: Output
            }], documentsAdd: [{
                type: Output
            }], disabled: [{
                type: Input
            }], loading: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9maWxlLWlucHV0L2ZpbGUtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBSUwsaUJBQWlCLEdBR2xCLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDOzs7Ozs7Ozs7O0FBa0JuRyxNQUFNLE9BQU8sWUFBWTtJQXlCdkIsWUFDUyxtQkFBZ0QsRUFDaEQsbUJBQW9ELEVBQ3BELFlBQTBCLEVBQzFCLFVBQXNCLEVBQ3RCLE1BQTBCLEVBQ0ssUUFBYztRQUw3Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTZCO1FBQ2hELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBaUM7UUFDcEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUNLLGFBQVEsR0FBUixRQUFRLENBQU07UUE5Qi9DLG1CQUFjLEdBQVcsRUFB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cUJBQy9DOzswQkFpQ0UsTUFBTTsyQkFBQyxxQkFBcUI7NENBN0J0QixPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUVHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFJSSxjQUFjO3NCQUF2QixNQUFNO2dCQUVHLFlBQVk7c0JBQXJCLE1BQU07Z0JBZ0ZNLFFBQVE7c0JBQXBCLEtBQUs7Z0JBVU8sT0FBTztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7XHJcbiAgQmxvYkl0ZW0sXHJcbiAgQ3VzdG9tRmlsZU1ldGFkYXRhRHRvLFxyXG4gIERvY3VtZW50RXZlbnRFbWl0dGVyLFxyXG4gIERvY3VtZW50RXZlbnRUeXBlLFxyXG4gIERvY3VtZW50SXRlbSxcclxuICBGaWxlTWV0YWRhdGFEdG8sXHJcbn0gZnJvbSAnLi4vLi4vdXRpbHMvbW9kZWwvZG9jdW1lbnRzJztcclxuaW1wb3J0IHsgRXNuRmlsZUNvbnZlcnRlciwgRXNuVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy91dGlscy9wdWJsaWMtYXBpJztcclxuXHJcbmltcG9ydCB7IEVzbkRvY3VtZW50UmV0cmlldmFsU2VydmljZSB9IGZyb20gJy4vZG9jdW1lbnQtcmV0cmlldmFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFc25GaWxlSW5wdXROb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9maWxlLWlucHV0LW5vdGlmaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmlsZVNpemVQaXBlIH0gZnJvbSAnLi9maWxlLXNpemUucGlwZSc7XHJcbmltcG9ydCB7IEVzbkZpbGVJbnB1dENvbmZpZyB9IGZyb20gJy4vZmlsZUlucHV0Q29uZmlnJztcclxuaW1wb3J0IHsgRklMRV9NQU5BR0VSX1BST1ZJREVSIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2VydmljZXMvZmlsZW1hbmFnZXIvZmlsZW1hbmFnZXItY29uZmlndXJhdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1maWxlLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IEVzbkZpbGVJbnB1dCxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdlc24tZmlsZS1pbnB1dCcsXHJcbiAgICAnW2NsYXNzLmVzbi1maWxlLWlucHV0LWRpc2FibGVkXSc6IGBfZGlzYWJsZWRgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuRmlsZUlucHV0IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIHB1YmxpYyBzZWxlY3Rvck51bWJlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbWF4U2l6ZT86IG51bWJlcjtcclxuICBASW5wdXQoKSBtYXhDb3VudD86IG51bWJlcjtcclxuICBASW5wdXQoKSBhY2NlcHRlZFR5cGVzPzogc3RyaW5nW107XHJcbiAgQElucHV0KCkgY2FyZE1vZGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdG9yVGV4dD86IHN0cmluZztcclxuICBASW5wdXQoKSBtdWx0aTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgcHJvY2Vzc0FkZGVkQmxvYnM6IChibG9iSXRlbXM6IEJsb2JJdGVtW10sIGZpbGVNZXRhZGF0YTogRmlsZU1ldGFkYXRhRHRvW10pID0+IFByb21pc2U8Ym9vbGVhbj4gPVxyXG4gICAgKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xyXG4gIEBJbnB1dCgpIHByb2Nlc3NEZWxldGVkRG9jOiAoXHJcbiAgICBkZWxldGVkRG9jOiBDdXN0b21GaWxlTWV0YWRhdGFEdG9cclxuICApID0+IFByb21pc2U8Ym9vbGVhbj4gPSAoKSA9PiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XHJcblxyXG4gIEBPdXRwdXQoKSBkb2N1bWVudERlbGV0ZTogRXZlbnRFbWl0dGVyPEN1c3RvbUZpbGVNZXRhZGF0YUR0bz4gPVxyXG4gICAgbmV3IEV2ZW50RW1pdHRlcjxDdXN0b21GaWxlTWV0YWRhdGFEdG8+KCk7XHJcbiAgQE91dHB1dCgpIGRvY3VtZW50c0FkZDogRXZlbnRFbWl0dGVyPEN1c3RvbUZpbGVNZXRhZGF0YUR0b1tdPiA9XHJcbiAgICBuZXcgRXZlbnRFbWl0dGVyPEN1c3RvbUZpbGVNZXRhZGF0YUR0b1tdPigpO1xyXG5cclxuICBvblRvdWNoOiBhbnkgPSAoKSA9PiB7fTtcclxuICBvbkNoYW5nZTogYW55ID0gKCkgPT4ge307XHJcblxyXG4gIHB1YmxpYyBfZG9jdW1lbnRzOiBEb2N1bWVudEl0ZW1bXSA9IFtdO1xyXG4gIHB1YmxpYyBkb2N1bWVudHM6IEZpbGVNZXRhZGF0YUR0b1tdIHwgRmlsZU1ldGFkYXRhRHRvIHwgbnVsbCA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkb2NSZXRyaWV2YWxTZXJ2aWNlOiBFc25Eb2N1bWVudFJldHJpZXZhbFNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbm90aWZpY2F0aW9uU2VydmljZTogRXNuRmlsZUlucHV0Tm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgIHB1YmxpYyBmaWxlU2l6ZVBpcGU6IEZpbGVTaXplUGlwZSxcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIGNvbmZpZzogRXNuRmlsZUlucHV0Q29uZmlnLFxyXG4gICAgQEluamVjdChGSUxFX01BTkFHRVJfUFJPVklERVIpIHB1YmxpYyBQUk9WSURFUj86IGFueSxcclxuICApIHt9XHJcblxyXG4gIFxyXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuZG9jdW1lbnRzID0gIXRoaXMubXVsdGkgPyBvYmogOiAgb2JqIHx8IFtdO1xyXG4gICAgdGhpcy5fdXBkYXRlQ29udmVydGVkRG9jcygpO1xyXG4gIH1cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoID0gZm47XHJcbiAgfVxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5yZWFkT25seSA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLl91cGRhdGVBY3Rpb25zUGVybWlzc2lvbnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBvbkRvY3VtZW50c0FkZChkb2NzOiBDdXN0b21GaWxlTWV0YWRhdGFEdG9bXSkge1xyXG4gICAgdGhpcy5kb2N1bWVudHNBZGQuZW1pdChkb2NzKTtcclxuXHJcbiAgICB0aGlzLl9sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IGJsb2JJdGVtczogQmxvYkl0ZW1bXSA9XHJcbiAgICAgIGF3YWl0IEVzbkZpbGVDb252ZXJ0ZXIuY3VzdG9tTWV0YWRhdGFEdG9zVG9CbG9iSXRlbXMoZG9jcyk7XHJcblxyXG4gICAgZG9jcy5mb3JFYWNoKChmbSkgPT4gZGVsZXRlIGZtLmJsb2IpO1xyXG4gICAgY29uc3QgcHJvY2Vzc2luZ09rID0gYXdhaXQgdGhpcy5wcm9jZXNzQWRkZWRCbG9icyhibG9iSXRlbXMsIGRvY3MpO1xyXG5cclxuICAgIGlmIChwcm9jZXNzaW5nT2spIHtcclxuICAgICAgdGhpcy5hZGREb2NzVG9WYWx1ZShkb2NzKTtcclxuICAgICAgdGhpcy5fdXBkYXRlQ29udmVydGVkRG9jcygpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuZG9jdW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgb25Eb2N1bWVudHNEZWxldGUoZGVsZXRlZERvYzogRmlsZU1ldGFkYXRhRHRvKSB7XHJcbiAgICB0aGlzLmRvY3VtZW50RGVsZXRlLmVtaXQoZGVsZXRlZERvYyk7XHJcblxyXG4gICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgcHJvY2Vzc2luZ09rID0gYXdhaXQgdGhpcy5wcm9jZXNzRGVsZXRlZERvYyhkZWxldGVkRG9jKTtcclxuXHJcbiAgICBpZiAocHJvY2Vzc2luZ09rKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRG9jRnJvbVZhbHVlKGRlbGV0ZWREb2MpO1xyXG4gICAgICB0aGlzLl91cGRhdGVDb252ZXJ0ZWREb2NzKCk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5kb2N1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBnZXQgX21heFNpemUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXhTaXplIHx8IHRoaXMuY29uZmlnLkZJTEVfTUFYX1NJWkU7XHJcbiAgfVxyXG5cclxuICBnZXQgX21heENvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMubXVsdGkgPyAodGhpcy5tYXhDb3VudCB8fCB0aGlzLmNvbmZpZy5NQVhfTkJfRklMRVMpIDogMTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWFkT25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlYWRPbmx5ID0gdmFsdWU7XHJcbiAgICB0aGlzLl91cGRhdGVBY3Rpb25zUGVybWlzc2lvbnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBfbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBzZXQgbG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2xvYWRpbmcgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkRvY3VtZW50RXZlbnQoZTogRG9jdW1lbnRFdmVudEVtaXR0ZXIpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAoZS5ldmVudCkge1xyXG4gICAgICBjYXNlIERvY3VtZW50RXZlbnRUeXBlLkRPV05MT0FEOlxyXG4gICAgICBjYXNlIERvY3VtZW50RXZlbnRUeXBlLlZJRVc6XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEb2N1bWVudERvd25sb2FkKGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERvY3VtZW50RXZlbnRUeXBlLkRFTEVURTpcclxuICAgICAgICB0aGlzLm9uRG9jdW1lbnRzRGVsZXRlKGUuZG9jdW1lbnQubWV0YWRhdGEgYXMgQ3VzdG9tRmlsZU1ldGFkYXRhRHRvKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBvbkZpbGVzQWRkKGZpbGVzOiBGaWxlW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGxldCBmaWxlQXJyYXkgPSB0aGlzLmNvbnZlcnRUb0ZpbGVBcnJheShmaWxlcyk7XHJcblxyXG4gICAgaWYgKGZpbGVBcnJheS5zb21lKChmaWxlKSA9PiAhdGhpcy5jaGVja0ZpbGVUeXBlKGZpbGUpKSkge1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd05vdGlmKFxyXG4gICAgICAgICdpbmZvJyxcclxuICAgICAgICAnRm9ybWF0IGluY29ycmVjdCcsXHJcbiAgICAgICAgYENlcnRhaW5zIGRvY3VtZW50cyBuJ2F2YWllbnQgcGFzIGxlIGZvcm1hdCBhdHRlbmR1ICgke3RoaXMuYWNjZXB0ZWRGaWxlVHlwZXNMYWJlbH0pLCBsZXMgZG9jdW1lbnRzIG4nb250IHBhcyDDqXTDqSBham91dMOpc2BcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWxlQXJyYXkubGVuZ3RoICsgdGhpcy5fZG9jdW1lbnRzLmxlbmd0aCA+IHRoaXMuX21heENvdW50KSB7XHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zaG93Tm90aWYoXHJcbiAgICAgICAgJ2luZm8nLFxyXG4gICAgICAgICdOb21icmUgZGUgZG9jdW1lbnQgZMOpcGFzc8OpJyxcclxuICAgICAgICBgTGUgbm9tYnJlIG1heGltYWwgZGUgZG9jdW1lbnQgKCR7dGhpcy5fbWF4Q291bnR9KSBlc3QgZMOpcGFzc8OpLCBsZXMgZG9jdW1lbnRzIG4nb250IHBhcyDDqXTDqSBham91dMOpc2BcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsZXQgZmlsZXNUb29CaWc6IEZpbGVbXSA9IFtdO1xyXG4gICAgbGV0IGNvbnZlcnRlZEZpbGVzOiBDdXN0b21GaWxlTWV0YWRhdGFEdG9bXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlQXJyYXkpIHtcclxuICAgICAgaWYgKGZpbGUuc2l6ZSA+IHRoaXMuX21heFNpemUpIHtcclxuICAgICAgICBmaWxlc1Rvb0JpZy5wdXNoKGZpbGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnZlcnRlZEZpbGVzLnB1c2goe1xyXG4gICAgICAgICAgZXh0ZXJuYWxVdWlkOiBFc25VdGlscy5nZW5lcmF0ZVJhbmRvbVV1aWQoKSxcclxuICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcclxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICBjb250ZW50VHlwZTogZmlsZS50eXBlLFxyXG4gICAgICAgICAgZmlsZVByb3ZpZGVyOiB0aGlzLlBST1ZJREVSIHx8IHRoaXMuY29uZmlnLkZJTEVfUFJPVklERVIsXHJcbiAgICAgICAgICBibG9iOiBmaWxlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnZlcnRlZEZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5vbkRvY3VtZW50c0FkZChjb252ZXJ0ZWRGaWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbGVzVG9vQmlnLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gZmlsZXNUb29CaWcucmVkdWNlKFxyXG4gICAgICAgIChhY2M6IHN0cmluZywgdmFsOiBGaWxlKSA9PlxyXG4gICAgICAgICAgYWNjICtcclxuICAgICAgICAgIGAtICR7dmFsLm5hbWV9ICgke3RoaXMuZmlsZVNpemVQaXBlLnRyYW5zZm9ybSh2YWwuc2l6ZSl9KSA8L2JyPmAsXHJcbiAgICAgICAgYExlcyBmaWNoaWVycyBzdWl2YW50cyBkw6lwYXNzZW50IGxhIHRhaWxsZSBtYXhpbWFsZSBhdXRvcmlzw6llICgke3RoaXMuZmlsZVNpemVQaXBlLnRyYW5zZm9ybShcclxuICAgICAgICAgIHRoaXMuX21heFNpemVcclxuICAgICAgICApfSkgOiA8L2JyPmBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zaG93Tm90aWYoXHJcbiAgICAgICAgJ2luZm8nLFxyXG4gICAgICAgICdGaWNoaWVycyB2b2x1bWluZXV4JyxcclxuICAgICAgICBlcnJvck1lc3NhZ2VcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBhY2NlcHRlZEZpbGVUeXBlc0xhYmVsKCk6IHN0cmluZ3tcclxuICAgIHJldHVybiAgKHRoaXMuYWNjZXB0ZWRUeXBlcyB8fCBbXSlcclxuICAgICAgLm1hcCgodCkgPT4gdGhpcy5jb25maWcuRmlsZVR5cGVzTWFwW3RdLmxhYmVsKVxyXG4gICAgICAuam9pbignLCAnKVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgX3VwZGF0ZUNvbnZlcnRlZERvY3MoKSB7XHJcbiAgICB0aGlzLl9kb2N1bWVudHMgPSB0aGlzLmdldERvY3NWYWxBc0xpc3QoKS5tYXAoXHJcbiAgICAgICh4OiBDdXN0b21GaWxlTWV0YWRhdGFEdG8gfCBGaWxlTWV0YWRhdGFEdG8pID0+XHJcbiAgICAgIEVzbkZpbGVDb252ZXJ0ZXIuY29udmVydEZpbGVNZXRhRGF0YVRvRG9jdW1lbnQoeCwgZmFsc2UsIHtcclxuICAgICAgICAgIGRlbGV0ZTogIXRoaXMucmVhZE9ubHksXHJcbiAgICAgICAgICBkb3dubG9hZDogdHJ1ZSxcclxuICAgICAgICAgIHZpZXc6IGZhbHNlLFxyXG4gICAgICAgICAgdXBsb2FkOiBmYWxzZSxcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBfdXBkYXRlQWN0aW9uc1Blcm1pc3Npb25zKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZG9jdW1lbnRzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICBkb2MuYWN0aW9ucyA9IHtcclxuICAgICAgICBkZWxldGU6ICF0aGlzLnJlYWRPbmx5LFxyXG4gICAgICAgIGRvd25sb2FkOiB0cnVlLFxyXG4gICAgICAgIHZpZXc6IGZhbHNlLFxyXG4gICAgICAgIHVwbG9hZDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVEb2N1bWVudERvd25sb2FkKGU6IERvY3VtZW50RXZlbnRFbWl0dGVyKSB7XHJcbiAgICB0aGlzLmRvY1JldHJpZXZhbFNlcnZpY2UuZG9jdW1lbnREb3dubG9hZChlLmRvY3VtZW50KTtcclxuICB9XHJcblxyXG4gIGdldEFjY2VwdGVkRmlsZVR5cGVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmFjY2VwdGVkVHlwZXNcclxuICAgICAgPyB0aGlzLmFjY2VwdGVkVHlwZXMucmVkdWNlKChhY2M6IHN0cmluZ1tdLCBjdXJyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIHRoaXMuY29uZmlnLkZpbGVUeXBlc01hcFtjdXJyXS50eXBlLmZvckVhY2goKHQpID0+IGFjYy5wdXNoKHQpKTtcclxuICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSwgW10pXHJcbiAgICAgIDogW107XHJcbiAgfVxyXG5cclxuICBnZXQgYWNjZXB0ZWRGaWxlVHlwZXMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAhIXRoaXMuYWNjZXB0ZWRUeXBlcyAmJiAhIXRoaXMuYWNjZXB0ZWRUeXBlcy5sZW5ndGhcclxuICAgICAgPyB0aGlzLmdldEFjY2VwdGVkRmlsZVR5cGVzKCkuam9pbignLCcpXHJcbiAgICAgIDogJyonO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoZWNrRmlsZVR5cGUoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmFjY2VwdGVkVHlwZXMpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBY2NlcHRlZEZpbGVUeXBlcygpLmluY2x1ZGVzKGZpbGUudHlwZSk7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tBY2NlcHRlZFR5cGVzVmFsaWRpdHkoKSB7XHJcbiAgICBjb25zdCB2YWxpZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5jb25maWcuRmlsZVR5cGVzTWFwKTtcclxuICAgIGNvbnN0IGludmFsaWRUeXBlcyA9IHRoaXMuYWNjZXB0ZWRUeXBlcz8uZmlsdGVyKFxyXG4gICAgICAodCkgPT4gIXZhbGlkVHlwZXMuaW5jbHVkZXModClcclxuICAgICk7XHJcbiAgICBpZiAoISFpbnZhbGlkVHlwZXM/Lmxlbmd0aCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgIGBMZShzKSB0eXBlKHMpIGRlIGRvY3VtZW50KHMpOiAnJHtpbnZhbGlkVHlwZXMuam9pbihcclxuICAgICAgICAgICcsICdcclxuICAgICAgICApfScgbmUgc29udCBwYXMgZMOpZmluaXMgZGFucyBsYSBjb25maWd1cmF0aW9uLiBBdWN1biBjb250csO0bGUgc3VyIGxlIHR5cGUgZGVzIGRvY3VtZW50cyBuZSBzZXJhIHLDqWFsaXPDqS5gXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYWNjZXB0ZWRUeXBlcyA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29udmVydFRvRmlsZUFycmF5KGZpbGVzOiBGaWxlW10pOiBGaWxlW10ge1xyXG4gICAgY29uc3QgYXJyYXkgPSBbXTtcclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgICBhcnJheS5wdXNoKGZpbGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgZ2V0RG9jc1ZhbEFzTGlzdCgpOiBGaWxlTWV0YWRhdGFEdG9bXSB7XHJcbiAgICBpZighdGhpcy5kb2N1bWVudHMpe1xyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLm11bHRpID8gdGhpcy5kb2N1bWVudHMgYXMgRmlsZU1ldGFkYXRhRHRvW10gOiBbdGhpcy5kb2N1bWVudHMgYXMgRmlsZU1ldGFkYXRhRHRvXVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZERvY3NUb1ZhbHVlKGRvY3M6IEZpbGVNZXRhZGF0YUR0b1tdKTogdm9pZCB7XHJcbiAgICBpZih0aGlzLm11bHRpKXtcclxuICAgICAgKHRoaXMuZG9jdW1lbnRzIGFzIEZpbGVNZXRhZGF0YUR0b1tdKS5wdXNoKC4uLmRvY3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIWRvY3MubGVuZ3RoIHx8ICh0aGlzLmRvY3VtZW50cyA9IGRvY3NbMF0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlRG9jRnJvbVZhbHVlKGRvYzogRmlsZU1ldGFkYXRhRHRvKTogdm9pZCB7XHJcbiAgICBpZih0aGlzLm11bHRpKXtcclxuICAgICAgdGhpcy5kb2N1bWVudHMgPSAodGhpcy5kb2N1bWVudHMgYXMgRmlsZU1ldGFkYXRhRHRvW10pLmZpbHRlcihcclxuICAgICAgICAobXRkOiBGaWxlTWV0YWRhdGFEdG8pID0+ICEoISFtdGQuZXh0ZXJuYWxVdWlkICYmIG10ZC5leHRlcm5hbFV1aWQgPT0gZG9jLmV4dGVybmFsVXVpZCkgJiYgISghIW10ZC51dWlkICYmIG10ZC51dWlkID09IGRvYy51dWlkKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kb2N1bWVudHMgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZXNuLWZpbGUtc2VsZWN0b3JcclxuICAqbmdJZj1cIiFyZWFkT25seVwiXHJcbiAgW2Rpc2FibGVkXT1cIl9sb2FkaW5nXCJcclxuICBbYWNjZXB0XT1cImFjY2VwdGVkRmlsZVR5cGVzXCJcclxuICBbbXVsdGlwbGVdPVwiX21heENvdW50ID4gMVwiXHJcbiAgW3RleHRdPVwic2VsZWN0b3JUZXh0XCJcclxuICBbZmlsZVR5cGVzTGFiZWxdPVwiYWNjZXB0ZWRGaWxlVHlwZXNMYWJlbFwiXHJcbiAgW21heFNpemVdPVwiX21heFNpemVcIlxyXG4gIChmaWxlc0FkZGVkKT1cIm9uRmlsZXNBZGQoJGV2ZW50KVwiXHJcbj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZXNuLWZpbGUtc2VsZWN0b3I+XHJcblxyXG48ZGl2ICpuZ0lmPVwiX2xvYWRpbmdcIiBjbGFzcz1cInByb2dyZXNzLWJhci1jb250YWluZXJcIj5cclxuICA8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiYnVmZmVyXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxyXG48L2Rpdj5cclxuXHJcbjxlc24tZmlsZS1saXN0XHJcbiAgW2RvY3VtZW50c109XCJfZG9jdW1lbnRzXCJcclxuICBbZGlzYWJsZWRdPVwiX2xvYWRpbmdcIlxyXG4gIFtyZWFkT25seV09XCJyZWFkT25seVwiXHJcbiAgKGV2ZW50KT1cIm9uRG9jdW1lbnRFdmVudCgkZXZlbnQpXCJcclxuPjwvZXNuLWZpbGUtbGlzdD5cclxuIl19