import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../../../components/toaster/public-api";
import * as i2 from "../public-api";
export class EsnApiCallWrapperNotificationService {
}
EsnApiCallWrapperNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnApiCallWrapperNotificationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EsnApiCallWrapperNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnApiCallWrapperNotificationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnApiCallWrapperNotificationService, decorators: [{
            type: Injectable
        }] });
export class ApiCallWrapperToasterNotificationService {
    constructor(toasterService) {
        this.toasterService = toasterService;
    }
    showNotif(type, title, message) {
        this.toasterService.showToaster(type, title, message);
    }
}
ApiCallWrapperToasterNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ApiCallWrapperToasterNotificationService, deps: [{ token: i1.ToasterService }], target: i0.ɵɵFactoryTarget.Injectable });
ApiCallWrapperToasterNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ApiCallWrapperToasterNotificationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ApiCallWrapperToasterNotificationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ToasterService }]; } });
export class ApiCallWrapperConsoleNotificationService {
    showNotif(type, title, message) {
        console.warn(`${title}: ${message}\n\nConsider providing an implementation of EsnApiCallWrapperNotificationService to display this message to the user`);
    }
}
export class ApiCallWrapperGlobalConfigNotificationService {
    constructor(globalConf) {
        this.globalConf = globalConf;
    }
    showNotif(type, title, message) {
        this.globalConf.notificationService.showNotif(type, title, message);
    }
}
ApiCallWrapperGlobalConfigNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ApiCallWrapperGlobalConfigNotificationService, deps: [{ token: i2.EsnGlobalConfiguration }], target: i0.ɵɵFactoryTarget.Injectable });
ApiCallWrapperGlobalConfigNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ApiCallWrapperGlobalConfigNotificationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ApiCallWrapperGlobalConfigNotificationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.EsnGlobalConfiguration }]; } });
export const ESN_API_CALL_WRAPPER_DEFAULT_NOTIFICATION_SERVICE = ApiCallWrapperGlobalConfigNotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWNhbGwtd3JhcHBlci1ub3RpZmljYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL3V0aWxzL3NlcnZpY2VzL2NhbGwtd3JhcHBlci9hcGktY2FsbC13cmFwcGVyLW5vdGlmaWNhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU8zQyxNQUFNLE9BQWdCLG9DQUFvQzs7a0lBQXBDLG9DQUFvQztzSUFBcEMsb0NBQW9DOzRGQUFwQyxvQ0FBb0M7a0JBRHpELFVBQVU7O0FBTVgsTUFBTSxPQUFPLHdDQUF3QztJQUduRCxZQUFtQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDO0lBRXJELFNBQVMsQ0FBQyxJQUFnQyxFQUFFLEtBQWEsRUFBRSxPQUFlO1FBQ3hFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7c0lBUFUsd0NBQXdDOzBJQUF4Qyx3Q0FBd0M7NEZBQXhDLHdDQUF3QztrQkFEcEQsVUFBVTs7QUFXWCxNQUFNLE9BQU8sd0NBQXdDO0lBR25ELFNBQVMsQ0FBQyxJQUFnQyxFQUFFLEtBQWEsRUFBRSxPQUFlO1FBQ3hFLE9BQU8sQ0FBQyxJQUFJLENBQ1YsR0FBRyxLQUFLLEtBQUssT0FBTyxzSEFBc0gsQ0FDM0ksQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUdELE1BQU0sT0FBTyw2Q0FBNkM7SUFHeEQsWUFBbUIsVUFBa0M7UUFBbEMsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7SUFBRSxDQUFDO0lBQ3hELFNBQVMsQ0FBQyxJQUFnQyxFQUFFLEtBQWEsRUFBRSxPQUFlO1FBQ3hFLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7MklBTlUsNkNBQTZDOytJQUE3Qyw2Q0FBNkM7NEZBQTdDLDZDQUE2QztrQkFEekQsVUFBVTs7QUFVWCxNQUFNLENBQUMsTUFBTSxpREFBaUQsR0FDOUQsNkNBQTZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy90b2FzdGVyL3B1YmxpYy1hcGlcIjtcclxuaW1wb3J0IHsgRXNuR2xvYmFsQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9wdWJsaWMtYXBpXCI7XHJcblxyXG5leHBvcnQgdHlwZSBFc25BcGlDYWxsV3JhcHBlck5vdGlmVHlwZSA9ICdpbmZvJyB8ICdlcnJvcicgfCAnc3VjY2Vzcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFc25BcGlDYWxsV3JhcHBlck5vdGlmaWNhdGlvblNlcnZpY2Uge1xyXG4gIGFic3RyYWN0IHNob3dOb3RpZih0eXBlOiBFc25BcGlDYWxsV3JhcHBlck5vdGlmVHlwZSwgdGl0bGU6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwaUNhbGxXcmFwcGVyVG9hc3Rlck5vdGlmaWNhdGlvblNlcnZpY2VcclxuICBpbXBsZW1lbnRzIEVzbkFwaUNhbGxXcmFwcGVyTm90aWZpY2F0aW9uU2VydmljZVxyXG57XHJcbiAgY29uc3RydWN0b3IocHVibGljIHRvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSkge31cclxuXHJcbiAgc2hvd05vdGlmKHR5cGU6IEVzbkFwaUNhbGxXcmFwcGVyTm90aWZUeXBlLCB0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudG9hc3RlclNlcnZpY2Uuc2hvd1RvYXN0ZXIodHlwZSwgdGl0bGUsIG1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwaUNhbGxXcmFwcGVyQ29uc29sZU5vdGlmaWNhdGlvblNlcnZpY2VcclxuICBpbXBsZW1lbnRzIEVzbkFwaUNhbGxXcmFwcGVyTm90aWZpY2F0aW9uU2VydmljZVxyXG57XHJcbiAgc2hvd05vdGlmKHR5cGU6IEVzbkFwaUNhbGxXcmFwcGVyTm90aWZUeXBlLCB0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUud2FybihcclxuICAgICAgYCR7dGl0bGV9OiAke21lc3NhZ2V9XFxuXFxuQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGltcGxlbWVudGF0aW9uIG9mIEVzbkFwaUNhbGxXcmFwcGVyTm90aWZpY2F0aW9uU2VydmljZSB0byBkaXNwbGF5IHRoaXMgbWVzc2FnZSB0byB0aGUgdXNlcmBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGlDYWxsV3JhcHBlckdsb2JhbENvbmZpZ05vdGlmaWNhdGlvblNlcnZpY2VcclxuICBpbXBsZW1lbnRzIEVzbkFwaUNhbGxXcmFwcGVyTm90aWZpY2F0aW9uU2VydmljZVxyXG57XHJcbiAgY29uc3RydWN0b3IocHVibGljIGdsb2JhbENvbmY6IEVzbkdsb2JhbENvbmZpZ3VyYXRpb24pe31cclxuICBzaG93Tm90aWYodHlwZTogRXNuQXBpQ2FsbFdyYXBwZXJOb3RpZlR5cGUsIHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5nbG9iYWxDb25mLm5vdGlmaWNhdGlvblNlcnZpY2Uuc2hvd05vdGlmKHR5cGUsIHRpdGxlLCBtZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFU05fQVBJX0NBTExfV1JBUFBFUl9ERUZBVUxUX05PVElGSUNBVElPTl9TRVJWSUNFID1cclxuQXBpQ2FsbFdyYXBwZXJHbG9iYWxDb25maWdOb3RpZmljYXRpb25TZXJ2aWNlO1xyXG4iXX0=