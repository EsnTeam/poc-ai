import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { EsnAsyncDataSourceAdapter } from './esnAsyncTableAdapter';
export declare class EsnAsyncDataSource<T> implements DataSource<T> {
    funcToCall: Function;
    private elementsSubject;
    private loadingSubject;
    private nbOfResultsSubject;
    private errorDisplaySubject;
    loading$: Observable<boolean>;
    numberOfResults$: Observable<number>;
    errorDisplay$: Observable<any>;
    _adapter: EsnAsyncDataSourceAdapter;
    load$: BehaviorSubject<any[]>;
    constructor(funcToCall: Function, adapter?: EsnAsyncDataSourceAdapter);
    connect(collectionViewer: CollectionViewer): Observable<readonly T[]>;
    disconnect(collectionViewer: CollectionViewer): void;
    load(...args: any[]): void;
}
