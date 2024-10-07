import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../../../components/toaster/public-api";
export class EsnNotificationService {
}
EsnNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EsnNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationService, decorators: [{
            type: Injectable
        }] });
export class EsnToasterNotificationService {
    constructor(toasterService) {
        this.toasterService = toasterService;
    }
    showNotif(type, title, message) {
        this.toasterService.showToaster(type, title, message);
    }
}
EsnToasterNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnToasterNotificationService, deps: [{ token: i1.ToasterService }], target: i0.ɵɵFactoryTarget.Injectable });
EsnToasterNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnToasterNotificationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnToasterNotificationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ToasterService }]; } });
export class EsnConsoleNotificationService {
    showNotif(type, title, message) {
        console.warn(`${title}: ${message}\n\nConsider providing an implementation of EsnApiCallWrapperNotificationService to display this message to the user`);
    }
}
export const ESN_GLOBAL_CONFIGURATION_DEFAULT_NOTIFICATION_SERVICE = EsnToasterNotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi91dGlscy9zZXJ2aWNlcy9nbG9iYWwtY29uZmlndXJhdGlvbi9ub3RpZmljYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0zQyxNQUFNLE9BQWdCLHNCQUFzQjs7b0hBQXRCLHNCQUFzQjt3SEFBdEIsc0JBQXNCOzRGQUF0QixzQkFBc0I7a0JBRDNDLFVBQVU7O0FBTVgsTUFBTSxPQUFPLDZCQUE2QjtJQUd4QyxZQUFtQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDO0lBRXJELFNBQVMsQ0FBQyxJQUF5QixFQUFFLEtBQWEsRUFBRSxPQUFlO1FBQ2pFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7MkhBUFUsNkJBQTZCOytIQUE3Qiw2QkFBNkI7NEZBQTdCLDZCQUE2QjtrQkFEekMsVUFBVTs7QUFXWCxNQUFNLE9BQU8sNkJBQTZCO0lBR3hDLFNBQVMsQ0FBQyxJQUF5QixFQUFFLEtBQWEsRUFBRSxPQUFlO1FBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQ1YsR0FBRyxLQUFLLEtBQUssT0FBTyxzSEFBc0gsQ0FDM0ksQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVELE1BQU0sQ0FBQyxNQUFNLHFEQUFxRCxHQUNsRSw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3RvYXN0ZXIvcHVibGljLWFwaVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgRXNuTm90aWZpY2F0aW9uVHlwZSA9ICdpbmZvJyB8ICdlcnJvcicgfCAnc3VjY2Vzcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFc25Ob3RpZmljYXRpb25TZXJ2aWNlIHtcclxuICBhYnN0cmFjdCBzaG93Tm90aWYodHlwZTogRXNuTm90aWZpY2F0aW9uVHlwZSwgdGl0bGU6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVzblRvYXN0ZXJOb3RpZmljYXRpb25TZXJ2aWNlXHJcbiAgaW1wbGVtZW50cyBFc25Ob3RpZmljYXRpb25TZXJ2aWNlXHJcbntcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBzaG93Tm90aWYodHlwZTogRXNuTm90aWZpY2F0aW9uVHlwZSwgdGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLnNob3dUb2FzdGVyKHR5cGUsIHRpdGxlLCBtZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFc25Db25zb2xlTm90aWZpY2F0aW9uU2VydmljZVxyXG4gIGltcGxlbWVudHMgRXNuTm90aWZpY2F0aW9uU2VydmljZVxyXG57XHJcbiAgc2hvd05vdGlmKHR5cGU6IEVzbk5vdGlmaWNhdGlvblR5cGUsIHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc29sZS53YXJuKFxyXG4gICAgICBgJHt0aXRsZX06ICR7bWVzc2FnZX1cXG5cXG5Db25zaWRlciBwcm92aWRpbmcgYW4gaW1wbGVtZW50YXRpb24gb2YgRXNuQXBpQ2FsbFdyYXBwZXJOb3RpZmljYXRpb25TZXJ2aWNlIHRvIGRpc3BsYXkgdGhpcyBtZXNzYWdlIHRvIHRoZSB1c2VyYFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFU05fR0xPQkFMX0NPTkZJR1VSQVRJT05fREVGQVVMVF9OT1RJRklDQVRJT05fU0VSVklDRSA9XHJcbkVzblRvYXN0ZXJOb3RpZmljYXRpb25TZXJ2aWNlO1xyXG4iXX0=