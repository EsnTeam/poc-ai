import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class EsnDatabaseService {
}
EsnDatabaseService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDatabaseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EsnDatabaseService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDatabaseService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDatabaseService, decorators: [{
            type: Injectable
        }] });
export class EsnInMemoryDatabaseService {
    constructor() {
        this.db = {};
    }
    getValueByKey(store, key, decrypt) {
        return Promise.resolve(this.db[store]?.[key]);
    }
    ;
    setValueByKey(store, key, value, encrypt) {
        if (!this.db[store]) {
            this.db[store] = {};
        }
        this.db[store][key] = value;
        return Promise.resolve(key);
    }
    ;
    reset() {
        this.db = {};
    }
}
EsnInMemoryDatabaseService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnInMemoryDatabaseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EsnInMemoryDatabaseService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnInMemoryDatabaseService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnInMemoryDatabaseService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi91dGlscy9zZXJ2aWNlcy9nbG9iYWwtY29uZmlndXJhdGlvbi9kYXRhYmFzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBZ0Isa0JBQWtCOztnSEFBbEIsa0JBQWtCO29IQUFsQixrQkFBa0I7NEZBQWxCLGtCQUFrQjtrQkFEdkMsVUFBVTs7QUFrQlgsTUFBTSxPQUFPLDBCQUEwQjtJQUR2QztRQUVTLE9BQUUsR0FBUSxFQUFFLENBQUM7S0F5QnJCO0lBeEJRLGFBQWEsQ0FDbEIsS0FBYSxFQUNiLEdBQVEsRUFDUixPQUFnQjtRQUVoQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUFBLENBQUM7SUFFTSxhQUFhLENBQ25CLEtBQWEsRUFDYixHQUFRLEVBQ1IsS0FBVSxFQUNWLE9BQWdCO1FBRWhCLElBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDNUIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFBQSxDQUFDO0lBRUssS0FBSztRQUNWLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7d0hBekJVLDBCQUEwQjs0SEFBMUIsMEJBQTBCOzRGQUExQiwwQkFBMEI7a0JBRHRDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVzbkRhdGFiYXNlU2VydmljZSB7XHJcbiAgYWJzdHJhY3QgZ2V0VmFsdWVCeUtleShcclxuICAgIHN0b3JlOiBzdHJpbmcsXHJcbiAgICBrZXk6IGFueSxcclxuICAgIGRlY3J5cHQ6IGJvb2xlYW5cclxuICApOiBQcm9taXNlPGFueT47XHJcblxyXG4gIGFic3RyYWN0IHNldFZhbHVlQnlLZXkoXHJcbiAgICBzdG9yZTogc3RyaW5nLFxyXG4gICAga2V5OiBhbnksXHJcbiAgICB2YWx1ZTogYW55LFxyXG4gICAgZW5jcnlwdDogYm9vbGVhblxyXG4gICk6IFByb21pc2U8YW55PjtcclxufVxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVzbkluTWVtb3J5RGF0YWJhc2VTZXJ2aWNlIGltcGxlbWVudHMgRXNuRGF0YWJhc2VTZXJ2aWNle1xyXG4gIHB1YmxpYyBkYjogYW55ID0ge307XHJcbiAgcHVibGljIGdldFZhbHVlQnlLZXkoXHJcbiAgICBzdG9yZTogc3RyaW5nLFxyXG4gICAga2V5OiBhbnksXHJcbiAgICBkZWNyeXB0OiBib29sZWFuXHJcbiAgKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmRiW3N0b3JlXT8uW2tleV0pO1xyXG4gIH07XHJcblxyXG4gICBwdWJsaWMgc2V0VmFsdWVCeUtleShcclxuICAgIHN0b3JlOiBzdHJpbmcsXHJcbiAgICBrZXk6IGFueSxcclxuICAgIHZhbHVlOiBhbnksXHJcbiAgICBlbmNyeXB0OiBib29sZWFuXHJcbiAgKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgaWYoIXRoaXMuZGJbc3RvcmVdKXtcclxuICAgICAgdGhpcy5kYltzdG9yZV0gPSB7fTtcclxuICAgIH1cclxuICAgIHRoaXMuZGJbc3RvcmVdW2tleV0gPSB2YWx1ZTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoa2V5KVxyXG4gIH07XHJcblxyXG4gIHB1YmxpYyByZXNldCgpe1xyXG4gICAgdGhpcy5kYiA9IHt9O1xyXG4gIH1cclxufVxyXG4iXX0=