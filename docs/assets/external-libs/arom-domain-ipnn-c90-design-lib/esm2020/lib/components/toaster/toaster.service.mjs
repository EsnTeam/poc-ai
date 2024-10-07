import { Injectable } from '@angular/core';
import { EsnToasterModule } from "./toaster.module";
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
const INFO_TOASTER_CONFIG = {
    timeOut: 2500,
    enableHtml: true,
};
const ERROR_TOASTER_CONFIG = {
    disableTimeOut: true,
    enableHtml: true,
    closeButton: true,
};
const SUCCESS_TOASTER_CONFIG = INFO_TOASTER_CONFIG;
export class ToasterService {
    constructor(toasterService) {
        this.toasterService = toasterService;
    }
    showToaster(type, title, message, config) {
        switch (type) {
            case 'info':
                return this.toasterService.info(message, title, {
                    ...INFO_TOASTER_CONFIG,
                    ...config,
                });
            case 'error':
                return this.toasterService.error(message, title, {
                    ...ERROR_TOASTER_CONFIG,
                    ...config,
                });
            case 'success':
                return this.toasterService.success(message, title, {
                    ...INFO_TOASTER_CONFIG,
                    ...config,
                });
            default:
                throw 'This toaster type is not implemented yet';
        }
    }
    clearAll() {
        this.toasterService.clear();
    }
}
ToasterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ToasterService, deps: [{ token: i1.ToastrService }], target: i0.ɵɵFactoryTarget.Injectable });
ToasterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ToasterService, providedIn: EsnToasterModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ToasterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: EsnToasterModule,
                }]
        }], ctorParameters: function () { return [{ type: i1.ToastrService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3Rlci90b2FzdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRXBELE1BQU0sbUJBQW1CLEdBQThCO0lBQ3JELE9BQU8sRUFBRSxJQUFJO0lBQ2IsVUFBVSxFQUFFLElBQUk7Q0FDakIsQ0FBQztBQUVGLE1BQU0sb0JBQW9CLEdBQThCO0lBQ3RELGNBQWMsRUFBRSxJQUFJO0lBQ3BCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFdBQVcsRUFBRSxJQUFJO0NBQ2xCLENBQUM7QUFDRixNQUFNLHNCQUFzQixHQUE4QixtQkFBbUIsQ0FBQztBQU05RSxNQUFNLE9BQU8sY0FBYztJQUN6QixZQUFvQixjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtJQUFHLENBQUM7SUFFOUMsV0FBVyxDQUNoQixJQUFrQyxFQUNsQyxLQUFjLEVBQ2QsT0FBZ0IsRUFDaEIsTUFBa0M7UUFFbEMsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO29CQUM5QyxHQUFHLG1CQUFtQjtvQkFDdEIsR0FBRyxNQUFNO2lCQUNWLENBQUMsQ0FBQztZQUNMLEtBQUssT0FBTztnQkFDVixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7b0JBQy9DLEdBQUcsb0JBQW9CO29CQUN2QixHQUFHLE1BQU07aUJBQ1YsQ0FBQyxDQUFDO1lBQ0wsS0FBSyxTQUFTO2dCQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtvQkFDakQsR0FBRyxtQkFBbUI7b0JBQ3RCLEdBQUcsTUFBTTtpQkFDVixDQUFDLENBQUM7WUFDTDtnQkFDRSxNQUFNLDBDQUEwQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7OzRHQWhDVSxjQUFjO2dIQUFkLGNBQWMsY0FIYixnQkFBZ0I7NEZBR2pCLGNBQWM7a0JBSjFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLGdCQUFnQjtpQkFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2ZVRvYXN0LCBJbmRpdmlkdWFsQ29uZmlnLCBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvYXN0cic7XHJcbmltcG9ydCB7IEVzblRvYXN0ZXJNb2R1bGUgfSBmcm9tIFwiLi90b2FzdGVyLm1vZHVsZVwiO1xyXG5cclxuY29uc3QgSU5GT19UT0FTVEVSX0NPTkZJRzogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHtcclxuICB0aW1lT3V0OiAyNTAwLFxyXG4gIGVuYWJsZUh0bWw6IHRydWUsXHJcbn07XHJcblxyXG5jb25zdCBFUlJPUl9UT0FTVEVSX0NPTkZJRzogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHtcclxuICBkaXNhYmxlVGltZU91dDogdHJ1ZSxcclxuICBlbmFibGVIdG1sOiB0cnVlLFxyXG4gIGNsb3NlQnV0dG9uOiB0cnVlLFxyXG59O1xyXG5jb25zdCBTVUNDRVNTX1RPQVNURVJfQ09ORklHOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0gSU5GT19UT0FTVEVSX0NPTkZJRztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBFc25Ub2FzdGVyTW9kdWxlLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvYXN0ZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvYXN0ZXJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlKSB7fVxyXG5cclxuICBwdWJsaWMgc2hvd1RvYXN0ZXIoXHJcbiAgICB0eXBlOiAnaW5mbycgfCAnZXJyb3InIHwgJ3N1Y2Nlc3MnLFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxyXG4gICAgY29uZmlnPzogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPlxyXG4gICk6IEFjdGl2ZVRvYXN0PGFueT4gfCB2b2lkIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdpbmZvJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50b2FzdGVyU2VydmljZS5pbmZvKG1lc3NhZ2UsIHRpdGxlLCB7XHJcbiAgICAgICAgICAuLi5JTkZPX1RPQVNURVJfQ09ORklHLFxyXG4gICAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9hc3RlclNlcnZpY2UuZXJyb3IobWVzc2FnZSwgdGl0bGUsIHtcclxuICAgICAgICAgIC4uLkVSUk9SX1RPQVNURVJfQ09ORklHLFxyXG4gICAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICByZXR1cm4gdGhpcy50b2FzdGVyU2VydmljZS5zdWNjZXNzKG1lc3NhZ2UsIHRpdGxlLCB7XHJcbiAgICAgICAgICAuLi5JTkZPX1RPQVNURVJfQ09ORklHLFxyXG4gICAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93ICdUaGlzIHRvYXN0ZXIgdHlwZSBpcyBub3QgaW1wbGVtZW50ZWQgeWV0JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhckFsbCgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9hc3RlclNlcnZpY2UuY2xlYXIoKTtcclxuICB9XHJcbn1cclxuIl19