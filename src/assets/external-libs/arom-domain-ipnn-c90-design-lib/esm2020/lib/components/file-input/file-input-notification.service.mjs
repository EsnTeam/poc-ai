import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../toaster/toaster.service";
import * as i2 from "../../utils/public-api";
export class EsnFileInputNotificationService {
}
EsnFileInputNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFileInputNotificationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EsnFileInputNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFileInputNotificationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFileInputNotificationService, decorators: [{
            type: Injectable
        }] });
export class FileInputToasterNotificationService {
    constructor(toasterService) {
        this.toasterService = toasterService;
    }
    showNotif(type, title, message) {
        this.toasterService.showToaster(type, title, message);
    }
}
FileInputToasterNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FileInputToasterNotificationService, deps: [{ token: i1.ToasterService }], target: i0.ɵɵFactoryTarget.Injectable });
FileInputToasterNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FileInputToasterNotificationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FileInputToasterNotificationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ToasterService }]; } });
export class FileInputConsoleNotificationService {
    showNotif(type, title, message) {
        console.warn(`${title}: ${message}\n\nConsider providing an implementation of EsnFileInputNotificationService to display this message to the user`);
    }
}
export class EsnFileInputGlobalConfigNotificationService {
    constructor(globalConf) {
        this.globalConf = globalConf;
    }
    showNotif(type, title, message) {
        this.globalConf.notificationService.showNotif(type, title, message);
    }
}
EsnFileInputGlobalConfigNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFileInputGlobalConfigNotificationService, deps: [{ token: i2.EsnGlobalConfiguration }], target: i0.ɵɵFactoryTarget.Injectable });
EsnFileInputGlobalConfigNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFileInputGlobalConfigNotificationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnFileInputGlobalConfigNotificationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.EsnGlobalConfiguration }]; } });
export const ESN_FILE_SELECTOR_DEFAULT_NOTIFICATION_SERVICE = FileInputToasterNotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC1ub3RpZmljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC1ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTTNDLE1BQU0sT0FBZ0IsK0JBQStCOzs2SEFBL0IsK0JBQStCO2lJQUEvQiwrQkFBK0I7NEZBQS9CLCtCQUErQjtrQkFEcEQsVUFBVTs7QUFNWCxNQUFNLE9BQU8sbUNBQW1DO0lBRzlDLFlBQW1CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7SUFFckQsU0FBUyxDQUFDLElBQXlCLEVBQUUsS0FBYSxFQUFFLE9BQWU7UUFDakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDOztpSUFQVSxtQ0FBbUM7cUlBQW5DLG1DQUFtQzs0RkFBbkMsbUNBQW1DO2tCQUQvQyxVQUFVOztBQVdYLE1BQU0sT0FBTyxtQ0FBbUM7SUFHOUMsU0FBUyxDQUFDLElBQXlCLEVBQUUsS0FBYSxFQUFFLE9BQWU7UUFDakUsT0FBTyxDQUFDLElBQUksQ0FDVixHQUFHLEtBQUssS0FBSyxPQUFPLGlIQUFpSCxDQUN0SSxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBR0QsTUFBTSxPQUFPLDJDQUEyQztJQUd0RCxZQUFtQixVQUFrQztRQUFsQyxlQUFVLEdBQVYsVUFBVSxDQUF3QjtJQUFFLENBQUM7SUFDeEQsU0FBUyxDQUFDLElBQXlCLEVBQUUsS0FBYSxFQUFFLE9BQWU7UUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RSxDQUFDOzt5SUFOVSwyQ0FBMkM7NklBQTNDLDJDQUEyQzs0RkFBM0MsMkNBQTJDO2tCQUR2RCxVQUFVOztBQVVYLE1BQU0sQ0FBQyxNQUFNLDhDQUE4QyxHQUN6RCxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gXCIuLi90b2FzdGVyL3RvYXN0ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFc25HbG9iYWxDb25maWd1cmF0aW9uLCBFc25Ob3RpZmljYXRpb25UeXBlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3B1YmxpYy1hcGlcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFc25GaWxlSW5wdXROb3RpZmljYXRpb25TZXJ2aWNlIHtcclxuICBhYnN0cmFjdCBzaG93Tm90aWYodHlwZTogRXNuTm90aWZpY2F0aW9uVHlwZSwgdGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlsZUlucHV0VG9hc3Rlck5vdGlmaWNhdGlvblNlcnZpY2VcclxuICBpbXBsZW1lbnRzIEVzbkZpbGVJbnB1dE5vdGlmaWNhdGlvblNlcnZpY2Vcclxue1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UpIHt9XHJcblxyXG4gIHNob3dOb3RpZih0eXBlOiBFc25Ob3RpZmljYXRpb25UeXBlLCB0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudG9hc3RlclNlcnZpY2Uuc2hvd1RvYXN0ZXIodHlwZSwgdGl0bGUsIG1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVJbnB1dENvbnNvbGVOb3RpZmljYXRpb25TZXJ2aWNlXHJcbiAgaW1wbGVtZW50cyBFc25GaWxlSW5wdXROb3RpZmljYXRpb25TZXJ2aWNlXHJcbntcclxuICBzaG93Tm90aWYodHlwZTogRXNuTm90aWZpY2F0aW9uVHlwZSwgdGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgIGAke3RpdGxlfTogJHttZXNzYWdlfVxcblxcbkNvbnNpZGVyIHByb3ZpZGluZyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBFc25GaWxlSW5wdXROb3RpZmljYXRpb25TZXJ2aWNlIHRvIGRpc3BsYXkgdGhpcyBtZXNzYWdlIHRvIHRoZSB1c2VyYFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVzbkZpbGVJbnB1dEdsb2JhbENvbmZpZ05vdGlmaWNhdGlvblNlcnZpY2VcclxuICBpbXBsZW1lbnRzIEVzbkZpbGVJbnB1dE5vdGlmaWNhdGlvblNlcnZpY2Vcclxue1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBnbG9iYWxDb25mOiBFc25HbG9iYWxDb25maWd1cmF0aW9uKXt9XHJcbiAgc2hvd05vdGlmKHR5cGU6IEVzbk5vdGlmaWNhdGlvblR5cGUsIHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5nbG9iYWxDb25mLm5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd05vdGlmKHR5cGUsIHRpdGxlLCBtZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFU05fRklMRV9TRUxFQ1RPUl9ERUZBVUxUX05PVElGSUNBVElPTl9TRVJWSUNFID1cclxuICBGaWxlSW5wdXRUb2FzdGVyTm90aWZpY2F0aW9uU2VydmljZTtcclxuIl19