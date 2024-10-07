import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class EsnBlobRetreiverService {
}
EsnBlobRetreiverService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnBlobRetreiverService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EsnBlobRetreiverService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnBlobRetreiverService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnBlobRetreiverService, decorators: [{
            type: Injectable
        }] });
export class EsnNoBlobRetreiverService {
    constructor() {
        this.NOT_IMPLEMENTED_MESSAGE = `No implementation of 'EsnBlobRetreiverService' was provided`;
    }
    async getBlob(uuid) {
        throw this.NOT_IMPLEMENTED_MESSAGE;
    }
    async deleteBlobs(uuids) {
        throw this.NOT_IMPLEMENTED_MESSAGE;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvYi1yZXRyZWl2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvdXRpbHMvc2VydmljZXMvZmlsZW1hbmFnZXIvYmxvYi1yZXRyZWl2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPM0MsTUFBTSxPQUFnQix1QkFBdUI7O3FIQUF2Qix1QkFBdUI7eUhBQXZCLHVCQUF1Qjs0RkFBdkIsdUJBQXVCO2tCQUQ1QyxVQUFVOztBQU1YLE1BQU0sT0FBTyx5QkFBeUI7SUFBdEM7UUFHRSw0QkFBdUIsR0FBRyw2REFBNkQsQ0FBQztJQVMxRixDQUFDO0lBUEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFZO1FBQ3hCLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3JDLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQWU7UUFDL0IsTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDckMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdG9hc3Rlci9wdWJsaWMtYXBpXCI7XHJcbmltcG9ydCB7IEVzbkdsb2JhbENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vcHVibGljLWFwaVwiO1xyXG5pbXBvcnQgeyBCbG9iSXRlbSB9IGZyb20gXCIuLi8uLi9wdWJsaWMtYXBpXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXNuQmxvYlJldHJlaXZlclNlcnZpY2Uge1xyXG4gIGFic3RyYWN0IGdldEJsb2IodXVpZDogc3RyaW5nKTogUHJvbWlzZTxCbG9iSXRlbT47XHJcbiAgYWJzdHJhY3QgZGVsZXRlQmxvYnModXVpZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxib29sZWFuPjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVzbk5vQmxvYlJldHJlaXZlclNlcnZpY2VcclxuICBpbXBsZW1lbnRzIEVzbkJsb2JSZXRyZWl2ZXJTZXJ2aWNlXHJcbntcclxuICBOT1RfSU1QTEVNRU5URURfTUVTU0FHRSA9IGBObyBpbXBsZW1lbnRhdGlvbiBvZiAnRXNuQmxvYlJldHJlaXZlclNlcnZpY2UnIHdhcyBwcm92aWRlZGA7XHJcblxyXG4gIGFzeW5jIGdldEJsb2IodXVpZDogc3RyaW5nKTogUHJvbWlzZTxCbG9iSXRlbT4ge1xyXG4gICAgdGhyb3cgdGhpcy5OT1RfSU1QTEVNRU5URURfTUVTU0FHRTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGRlbGV0ZUJsb2JzKHV1aWRzOiBzdHJpbmdbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgdGhyb3cgdGhpcy5OT1RfSU1QTEVNRU5URURfTUVTU0FHRTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0=