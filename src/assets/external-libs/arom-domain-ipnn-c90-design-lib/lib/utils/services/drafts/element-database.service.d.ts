import { EsnDatabaseService, EsnInMemoryDatabaseService } from '../global-configuration';
import * as i0 from "@angular/core";
export declare abstract class EsnElementDatabaseService {
    idbService: EsnDatabaseService;
    elements?: any[];
    storeName: string;
    idName: string;
    constructor(idbService: EsnDatabaseService);
    getAllElements(): Promise<any[]>;
    getElementById(id: string): Promise<any | undefined>;
    getFirstThatExists(ids: string[]): Promise<any | undefined>;
    getElements(ids: string[]): Promise<any | undefined>;
    saveElement(element: any): Promise<string>;
    deleteElementById(id: string): Promise<void>;
    saveElements(elements: any[]): Promise<void>;
    _fetchElements(): Promise<void>;
    _save(): Promise<string>;
    _updateOrAdd(element: any): void;
    _delete(id: string): void;
    _fetchOrCreateElements(retries: number): Promise<any[]>;
    _saveOrRetry(retries: number): Promise<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnElementDatabaseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnElementDatabaseService>;
}
export declare class EsnInMemoryDraftDbService extends EsnElementDatabaseService {
    inMemoryDbService: EsnInMemoryDatabaseService;
    storeName: string;
    idName: string;
    constructor(inMemoryDbService: EsnInMemoryDatabaseService);
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnInMemoryDraftDbService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnInMemoryDraftDbService>;
}
