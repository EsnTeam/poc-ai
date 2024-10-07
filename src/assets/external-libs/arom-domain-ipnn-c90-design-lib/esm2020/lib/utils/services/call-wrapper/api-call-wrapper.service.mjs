import { Injectable, Optional } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EsnApiUtils, EsnUtils, } from '../../public-api';
import * as i0 from "@angular/core";
import * as i1 from "./api-call-wrapper-notifications";
import * as i2 from "../filemanager/upload-state.service";
export class EsnApiCallWrapper {
    constructor(notificationService, uploadStateService) {
        this.notificationService = notificationService;
        this.uploadStateService = uploadStateService;
    }
    async makeApiCall(apiCall, options = {}) {
        const usedOptions = {
            callLabel: '',
            notifyError: false,
            notifySuccess: false,
            successLabel: '',
            uploadToaster: false,
        };
        Object.assign(usedOptions, options);
        const shouldTriggerUploadStateChange = !!usedOptions.uploadToaster && !!this.uploadStateService;
        if (usedOptions.uploadToaster && !this.uploadStateService) {
            console.warn('Option "uploadToaster" was passed to the ApiCallWrapper, but this option is supposed to be used with the EsnFilemanagerModule which is not imported.');
        }
        return new Promise((resolve) => {
            this.uploadStateService.uploadStarts(shouldTriggerUploadStateChange);
            apiCall
                .pipe(catchError((err) => {
                const error = EsnApiUtils.getErrorMessage(err, usedOptions.callLabel);
                if (usedOptions.notifyError) {
                    this.notificationService.showNotif('error', `Erreur lors de l${['a', 'e', 'i', 'o', 'u', 'y'].includes(usedOptions.callLabel.charAt(0))
                        ? "'"
                        : 'a '}${usedOptions.callLabel}`, error.message);
                }
                resolve({
                    error,
                });
                this.uploadStateService.uploadEnds(shouldTriggerUploadStateChange);
                throw err;
            }))
                .subscribe((resp) => {
                if (usedOptions.notifySuccess) {
                    this.notificationService.showNotif('success', options.successLabel ||
                        `${EsnUtils.capitalize(usedOptions.callLabel)} réussie`, '');
                }
                resolve({ resp: resp?.content || resp });
                this.uploadStateService.uploadEnds(shouldTriggerUploadStateChange);
            });
        });
    }
}
EsnApiCallWrapper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnApiCallWrapper, deps: [{ token: i1.EsnApiCallWrapperNotificationService }, { token: i2.EsnUploadStateService, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
EsnApiCallWrapper.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnApiCallWrapper });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnApiCallWrapper, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.EsnApiCallWrapperNotificationService }, { type: i2.EsnUploadStateService, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWNhbGwtd3JhcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL3V0aWxzL3NlcnZpY2VzL2NhbGwtd3JhcHBlci9hcGktY2FsbC13cmFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFHTCxXQUFXLEVBQ1gsUUFBUSxHQUNULE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFLMUIsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUNTLG1CQUF5RCxFQUM3QyxrQkFBeUM7UUFEckQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFzQztRQUM3Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO0lBQzNELENBQUM7SUFFRyxLQUFLLENBQUMsV0FBVyxDQUN0QixPQUF3QixFQUN4QixVQUFpQyxFQUFFO1FBRW5DLE1BQU0sV0FBVyxHQUEwQjtZQUN6QyxTQUFTLEVBQUUsRUFBRTtZQUNiLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGFBQWEsRUFBRSxLQUFLO1NBQ3JCLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVwQyxNQUFNLDhCQUE4QixHQUNsQyxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQzNELElBQUksV0FBVyxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN6RCxPQUFPLENBQUMsSUFBSSxDQUNWLHNKQUFzSixDQUN2SixDQUFDO1NBQ0g7UUFFRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBRXJFLE9BQU87aUJBQ0osSUFBSSxDQUNILFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNqQixNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsZUFBZSxDQUN2QyxHQUFHLEVBQ0gsV0FBVyxDQUFDLFNBQVMsQ0FDdEIsQ0FBQztnQkFDRixJQUFJLFdBQVcsQ0FBQyxXQUFXLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQ2hDLE9BQU8sRUFDUCxtQkFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUNyQyxXQUFXLENBQUMsU0FBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDakM7d0JBQ0MsQ0FBQyxDQUFDLEdBQUc7d0JBQ0wsQ0FBQyxDQUFDLElBQ04sR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFLEVBQzFCLEtBQUssQ0FBQyxPQUFPLENBQ2QsQ0FBQztpQkFDSDtnQkFDRCxPQUFPLENBQUM7b0JBQ04sS0FBSztpQkFDTixDQUFDLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2dCQUVyRSxNQUFNLEdBQUcsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUNIO2lCQUNBLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNsQixJQUFJLFdBQVcsQ0FBQyxhQUFhLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQ2hDLFNBQVMsRUFDVCxPQUFPLENBQUMsWUFBWTt3QkFDbEIsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFVLENBQUMsVUFBVSxFQUMxRCxFQUFFLENBQ0gsQ0FBQztpQkFDSDtnQkFFRCxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFFdkUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OytHQXpFVSxpQkFBaUI7bUhBQWpCLGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOzswQkFJTixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIEFwaUNhbGxXcmFwcGVyLFxyXG4gIEFwaUNhbGxXcmFwcGVyT3B0aW9ucyxcclxuICBFc25BcGlVdGlscyxcclxuICBFc25VdGlscyxcclxufSBmcm9tICcuLi8uLi9wdWJsaWMtYXBpJztcclxuaW1wb3J0IHsgRXNuQXBpQ2FsbFdyYXBwZXJOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9hcGktY2FsbC13cmFwcGVyLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBFc25VcGxvYWRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9maWxlbWFuYWdlci91cGxvYWQtc3RhdGUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFc25BcGlDYWxsV3JhcHBlciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbm90aWZpY2F0aW9uU2VydmljZTogRXNuQXBpQ2FsbFdyYXBwZXJOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHVwbG9hZFN0YXRlU2VydmljZTogRXNuVXBsb2FkU3RhdGVTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgYXN5bmMgbWFrZUFwaUNhbGwoXHJcbiAgICBhcGlDYWxsOiBPYnNlcnZhYmxlPGFueT4sXHJcbiAgICBvcHRpb25zOiBBcGlDYWxsV3JhcHBlck9wdGlvbnMgPSB7fVxyXG4gICk6IFByb21pc2U8QXBpQ2FsbFdyYXBwZXI+IHtcclxuICAgIGNvbnN0IHVzZWRPcHRpb25zOiBBcGlDYWxsV3JhcHBlck9wdGlvbnMgPSB7XHJcbiAgICAgIGNhbGxMYWJlbDogJycsXHJcbiAgICAgIG5vdGlmeUVycm9yOiBmYWxzZSxcclxuICAgICAgbm90aWZ5U3VjY2VzczogZmFsc2UsXHJcbiAgICAgIHN1Y2Nlc3NMYWJlbDogJycsXHJcbiAgICAgIHVwbG9hZFRvYXN0ZXI6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIE9iamVjdC5hc3NpZ24odXNlZE9wdGlvbnMsIG9wdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IHNob3VsZFRyaWdnZXJVcGxvYWRTdGF0ZUNoYW5nZSA9XHJcbiAgICAgICEhdXNlZE9wdGlvbnMudXBsb2FkVG9hc3RlciAmJiAhIXRoaXMudXBsb2FkU3RhdGVTZXJ2aWNlO1xyXG4gICAgaWYgKHVzZWRPcHRpb25zLnVwbG9hZFRvYXN0ZXIgJiYgIXRoaXMudXBsb2FkU3RhdGVTZXJ2aWNlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAnT3B0aW9uIFwidXBsb2FkVG9hc3RlclwiIHdhcyBwYXNzZWQgdG8gdGhlIEFwaUNhbGxXcmFwcGVyLCBidXQgdGhpcyBvcHRpb24gaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCB3aXRoIHRoZSBFc25GaWxlbWFuYWdlck1vZHVsZSB3aGljaCBpcyBub3QgaW1wb3J0ZWQuJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLnVwbG9hZFN0YXRlU2VydmljZS51cGxvYWRTdGFydHMoc2hvdWxkVHJpZ2dlclVwbG9hZFN0YXRlQ2hhbmdlKTtcclxuICAgICAgXHJcbiAgICAgIGFwaUNhbGxcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IEVzbkFwaVV0aWxzLmdldEVycm9yTWVzc2FnZShcclxuICAgICAgICAgICAgICBlcnIsXHJcbiAgICAgICAgICAgICAgdXNlZE9wdGlvbnMuY2FsbExhYmVsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICh1c2VkT3B0aW9ucy5ub3RpZnlFcnJvcikge1xyXG4gICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zaG93Tm90aWYoXHJcbiAgICAgICAgICAgICAgICAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgYEVycmV1ciBsb3JzIGRlIGwke1xyXG4gICAgICAgICAgICAgICAgICBbJ2EnLCAnZScsICdpJywgJ28nLCAndScsICd5J10uaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlZE9wdGlvbnMuY2FsbExhYmVsIS5jaGFyQXQoMClcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCInXCJcclxuICAgICAgICAgICAgICAgICAgICA6ICdhICdcclxuICAgICAgICAgICAgICAgIH0ke3VzZWRPcHRpb25zLmNhbGxMYWJlbH1gLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHRoaXMudXBsb2FkU3RhdGVTZXJ2aWNlLnVwbG9hZEVuZHMoc2hvdWxkVHJpZ2dlclVwbG9hZFN0YXRlQ2hhbmdlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3ApID0+IHtcclxuICAgICAgICAgIGlmICh1c2VkT3B0aW9ucy5ub3RpZnlTdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zaG93Tm90aWYoXHJcbiAgICAgICAgICAgICAgJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgIG9wdGlvbnMuc3VjY2Vzc0xhYmVsIHx8XHJcbiAgICAgICAgICAgICAgICBgJHtFc25VdGlscy5jYXBpdGFsaXplKHVzZWRPcHRpb25zLmNhbGxMYWJlbCEpfSByw6l1c3NpZWAsXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXNvbHZlKHsgcmVzcDogcmVzcD8uY29udGVudCB8fCByZXNwIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZFN0YXRlU2VydmljZS51cGxvYWRFbmRzKHNob3VsZFRyaWdnZXJVcGxvYWRTdGF0ZUNoYW5nZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=