import { Injectable } from '@angular/core';
import { EsnAsyncDataSource } from './esn-async-datasource';
import * as i0 from "@angular/core";
import * as i1 from "./esnAsyncTableAdapter";
export class EsnAsyncDataSourceFactory {
    constructor(adapter) {
        this.adapter = adapter;
    }
    createDataSource(funcToCall) {
        return new EsnAsyncDataSource(funcToCall, this.adapter);
    }
}
EsnAsyncDataSourceFactory.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncDataSourceFactory, deps: [{ token: i1.EsnAsyncDataSourceAdapter }], target: i0.ɵɵFactoryTarget.Injectable });
EsnAsyncDataSourceFactory.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncDataSourceFactory });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncDataSourceFactory, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.EsnAsyncDataSourceAdapter }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNuQXN5bmNEYXRhU291cmNlRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2FzeW5jLXRhYmxlL2VzbkFzeW5jRGF0YVNvdXJjZUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBSzVELE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsWUFBbUIsT0FBa0M7UUFBbEMsWUFBTyxHQUFQLE9BQU8sQ0FBMkI7SUFFckQsQ0FBQztJQUVNLGdCQUFnQixDQUFJLFVBQW9CO1FBQzdDLE9BQU8sSUFBSSxrQkFBa0IsQ0FBSSxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdELENBQUM7O3VIQVBVLHlCQUF5QjsySEFBekIseUJBQXlCOzRGQUF6Qix5QkFBeUI7a0JBRHJDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uVmlld2VyLCBEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRXNuQXN5bmNEYXRhU291cmNlIH0gZnJvbSAnLi9lc24tYXN5bmMtZGF0YXNvdXJjZSc7XHJcbmltcG9ydCB7IEVzbkFzeW5jRGF0YVNvdXJjZUFkYXB0ZXIgfSBmcm9tICcuL2VzbkFzeW5jVGFibGVBZGFwdGVyJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFc25Bc3luY0RhdGFTb3VyY2VGYWN0b3J5IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWRhcHRlcjogRXNuQXN5bmNEYXRhU291cmNlQWRhcHRlcikge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlRGF0YVNvdXJjZTxUPihmdW5jVG9DYWxsOiBGdW5jdGlvbikge1xyXG4gICAgcmV0dXJuIG5ldyBFc25Bc3luY0RhdGFTb3VyY2U8VD4oZnVuY1RvQ2FsbCwgdGhpcy5hZGFwdGVyKTtcclxuICB9XHJcbn1cclxuIl19