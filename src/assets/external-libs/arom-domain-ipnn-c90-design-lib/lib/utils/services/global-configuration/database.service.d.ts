import * as i0 from "@angular/core";
export declare abstract class EsnDatabaseService {
    abstract getValueByKey(store: string, key: any, decrypt: boolean): Promise<any>;
    abstract setValueByKey(store: string, key: any, value: any, encrypt: boolean): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDatabaseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnDatabaseService>;
}
export declare class EsnInMemoryDatabaseService implements EsnDatabaseService {
    db: any;
    getValueByKey(store: string, key: any, decrypt: boolean): Promise<any>;
    setValueByKey(store: string, key: any, value: any, encrypt: boolean): Promise<any>;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnInMemoryDatabaseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnInMemoryDatabaseService>;
}
