import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { DraftTmpElement } from './model/draft-elements';
import { EsnBlobRetreiverService } from '../filemanager';
import { EsnElementDatabaseService } from './element-database.service';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare abstract class EsnDraftService<T extends DraftTmpElement> {
    filesService: EsnBlobRetreiverService;
    dbService: EsnElementDatabaseService;
    router: Router;
    forms: {
        [key: string]: FormGroup;
    };
    initialDocumentsUuids: string[];
    initialElement?: T;
    elementDoesntExist: boolean;
    initialized: boolean;
    goBackSubject$: BehaviorSubject<boolean>;
    initialElement$: BehaviorSubject<T | undefined>;
    element?: T;
    elementIdName: string;
    creationBasePath: string;
    constructor(filesService: EsnBlobRetreiverService, dbService: EsnElementDatabaseService, router: Router);
    initForm(): void;
    populateFormFromElement(): void;
    updateElementFromForm(): void;
    getDocumentsUuids(element: T): string[];
    postElementsWithFiles(el: T): Observable<any>;
    init(uuid: string): Promise<void>;
    initFormFromDb(uuid: string): Promise<void>;
    updateAndSave(step?: string): Promise<void>;
    goBack(): void;
    getGoBack(): Observable<boolean>;
    saveChanges(step?: string): Promise<void>;
    discardChanges(): Promise<void>;
    noChangesMade(): any;
    sendElementToServer(): Promise<string | boolean>;
    deleteWithFiles(element: T): Promise<void>;
    getFirstIncompleteStep(): string | null;
    _resetData(): void;
    createDraft(additionalFields?: {
        [key in string]: string;
    }): Promise<void>;
    openDraft(draftUuid: string): void;
    initElementInDb(additionalFields?: {
        [key in string]: string;
    }): Promise<{
        externalUuid: string;
        creationDate: Date;
        initialCreation: boolean;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDraftService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnDraftService<any>>;
}
