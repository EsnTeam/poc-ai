import { animate, state, style, transition, trigger, } from '@angular/animations';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/services/filemanager/upload-state.service";
import * as i2 from "@angular/common";
import * as i3 from "../loader/loader.component";
export class EsnUploadProgressToasterComponent {
    constructor(uploadStateService) {
        this.uploadStateService = uploadStateService;
        this.progress = 0;
        this.displayed = 'not-displayed';
    }
    ngOnInit() {
        this.uploadStateService.documentsUploadProgress$.subscribe((val) => (this.progress = val));
        this.uploadStateService
            .getDisplayUpload()
            .subscribe((val) => {
            this.displayed = val ? 'displayed' : 'not-displayed';
        });
    }
}
EsnUploadProgressToasterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnUploadProgressToasterComponent, deps: [{ token: i1.EsnUploadStateService }], target: i0.ɵɵFactoryTarget.Component });
EsnUploadProgressToasterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnUploadProgressToasterComponent, selector: "esn-upload-progress-toaster", host: { classAttribute: "esn-upload-progress-toaster" }, ngImport: i0, template: "<div class=\"upload-progress-toaster\" [@enteringAnimation]=\"displayed\">\r\n  <div class=\"upload-progress-toaster__text\">Chargement en cours</div>\r\n  <div class=\"upload-progress-toaster__progress\">\r\n    <div\r\n      *ngIf=\"progress !== null\"\r\n      class=\"upload-progress-toaster__progress__text\"\r\n    >\r\n      {{ progress }}%\r\n    </div>\r\n    <esn-loader class=\"upload-progress-toaster__progress__spinner\">\r\n    </esn-loader>\r\n  </div>\r\n</div>\r\n", styles: [".upload-progress-toaster{box-shadow:0 3px 16px #394e9840;position:fixed;bottom:95px;right:30px;z-index:10000000000;height:100px;width:300px;display:flex;justify-content:space-between;align-items:center;padding:0 1.5rem;border-radius:4px}.upload-progress-toaster__progress{display:flex;align-items:center}.upload-progress-toaster__progress__text{margin-right:1rem}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.EsnLoader, selector: "esn-loader", inputs: ["type", "centered", "size"] }], animations: [
        trigger('enteringAnimation', [
            state('displayed', style({
                opacity: 1,
                transform: 'translateX(0)',
            })),
            state('not-displayed', style({
                opacity: 0,
                transform: 'translateX(100%)',
            })),
            transition('* => displayed', [animate('0.2s')]),
        ]),
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnUploadProgressToasterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'esn-upload-progress-toaster', animations: [
                        trigger('enteringAnimation', [
                            state('displayed', style({
                                opacity: 1,
                                transform: 'translateX(0)',
                            })),
                            state('not-displayed', style({
                                opacity: 0,
                                transform: 'translateX(100%)',
                            })),
                            transition('* => displayed', [animate('0.2s')]),
                        ]),
                    ], host: {
                        class: 'esn-upload-progress-toaster',
                    }, template: "<div class=\"upload-progress-toaster\" [@enteringAnimation]=\"displayed\">\r\n  <div class=\"upload-progress-toaster__text\">Chargement en cours</div>\r\n  <div class=\"upload-progress-toaster__progress\">\r\n    <div\r\n      *ngIf=\"progress !== null\"\r\n      class=\"upload-progress-toaster__progress__text\"\r\n    >\r\n      {{ progress }}%\r\n    </div>\r\n    <esn-loader class=\"upload-progress-toaster__progress__spinner\">\r\n    </esn-loader>\r\n  </div>\r\n</div>\r\n", styles: [".upload-progress-toaster{box-shadow:0 3px 16px #394e9840;position:fixed;bottom:95px;right:30px;z-index:10000000000;height:100px;width:300px;display:flex;justify-content:space-between;align-items:center;padding:0 1.5rem;border-radius:4px}.upload-progress-toaster__progress{display:flex;align-items:center}.upload-progress-toaster__progress__text{margin-right:1rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.EsnUploadStateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXByb2dyZXNzLXRvYXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdXBsb2FkLXByb2dyZXNzLXRvYXN0ZXIvdXBsb2FkLXByb2dyZXNzLXRvYXN0ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdXBsb2FkLXByb2dyZXNzLXRvYXN0ZXIvdXBsb2FkLXByb2dyZXNzLXRvYXN0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEdBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7OztBQThCbEQsTUFBTSxPQUFPLGlDQUFpQztJQUk1QyxZQUFtQixrQkFBeUM7UUFBekMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF1QjtRQUhyRCxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLGNBQVMsR0FBa0MsZUFBZSxDQUFDO0lBQ0gsQ0FBQztJQUVoRSxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FDeEQsQ0FBQyxHQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBSSxDQUFDLENBQy9DLENBQUM7UUFFRixJQUFJLENBQUMsa0JBQWtCO2FBQ3BCLGdCQUFnQixFQUFFO2FBQ2xCLFNBQVMsQ0FBQyxDQUFDLEdBQW1CLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzsrSEFoQlUsaUNBQWlDO21IQUFqQyxpQ0FBaUMsNEhDckM5QyxtZUFhQSxzbUJEQ2M7UUFDVixPQUFPLENBQUMsbUJBQW1CLEVBQUU7WUFDM0IsS0FBSyxDQUNILFdBQVcsRUFDWCxLQUFLLENBQUM7Z0JBQ0osT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLGVBQWU7YUFDM0IsQ0FBQyxDQUNIO1lBQ0QsS0FBSyxDQUNILGVBQWUsRUFDZixLQUFLLENBQUM7Z0JBQ0osT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLGtCQUFrQjthQUM5QixDQUFDLENBQ0g7WUFDRCxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoRCxDQUFDO0tBQ0g7NEZBS1UsaUNBQWlDO2tCQTNCN0MsU0FBUzsrQkFDRSw2QkFBNkIsY0FHM0I7d0JBQ1YsT0FBTyxDQUFDLG1CQUFtQixFQUFFOzRCQUMzQixLQUFLLENBQ0gsV0FBVyxFQUNYLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQUUsQ0FBQztnQ0FDVixTQUFTLEVBQUUsZUFBZTs2QkFDM0IsQ0FBQyxDQUNIOzRCQUNELEtBQUssQ0FDSCxlQUFlLEVBQ2YsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBRSxDQUFDO2dDQUNWLFNBQVMsRUFBRSxrQkFBa0I7NkJBQzlCLENBQUMsQ0FDSDs0QkFDRCxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt5QkFDaEQsQ0FBQztxQkFDSCxRQUNLO3dCQUNKLEtBQUssRUFBRSw2QkFBNkI7cUJBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIHN0YXRlLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXNuVXBsb2FkU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2VydmljZXMvZmlsZW1hbmFnZXIvdXBsb2FkLXN0YXRlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tdXBsb2FkLXByb2dyZXNzLXRvYXN0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi91cGxvYWQtcHJvZ3Jlc3MtdG9hc3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdXBsb2FkLXByb2dyZXNzLXRvYXN0ZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdlbnRlcmluZ0FuaW1hdGlvbicsIFtcclxuICAgICAgc3RhdGUoXHJcbiAgICAgICAgJ2Rpc3BsYXllZCcsXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgICAgIHN0YXRlKFxyXG4gICAgICAgICdub3QtZGlzcGxheWVkJyxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsXHJcbiAgICAgICAgfSlcclxuICAgICAgKSxcclxuICAgICAgdHJhbnNpdGlvbignKiA9PiBkaXNwbGF5ZWQnLCBbYW5pbWF0ZSgnMC4ycycpXSksXHJcbiAgICBdKSxcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnZXNuLXVwbG9hZC1wcm9ncmVzcy10b2FzdGVyJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuVXBsb2FkUHJvZ3Jlc3NUb2FzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgcHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcblxyXG4gIHB1YmxpYyBkaXNwbGF5ZWQ6ICdkaXNwbGF5ZWQnIHwgJ25vdC1kaXNwbGF5ZWQnID0gJ25vdC1kaXNwbGF5ZWQnO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1cGxvYWRTdGF0ZVNlcnZpY2U6IEVzblVwbG9hZFN0YXRlU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwbG9hZFN0YXRlU2VydmljZS5kb2N1bWVudHNVcGxvYWRQcm9ncmVzcyQuc3Vic2NyaWJlKFxyXG4gICAgICAodmFsOiBudW1iZXIgfCBudWxsKSA9PiAodGhpcy5wcm9ncmVzcyA9IHZhbCEpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMudXBsb2FkU3RhdGVTZXJ2aWNlXHJcbiAgICAgIC5nZXREaXNwbGF5VXBsb2FkKClcclxuICAgICAgLnN1YnNjcmliZSgodmFsOiBib29sZWFuIHwgbnVsbCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlzcGxheWVkID0gdmFsID8gJ2Rpc3BsYXllZCcgOiAnbm90LWRpc3BsYXllZCc7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwidXBsb2FkLXByb2dyZXNzLXRvYXN0ZXJcIiBbQGVudGVyaW5nQW5pbWF0aW9uXT1cImRpc3BsYXllZFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJ1cGxvYWQtcHJvZ3Jlc3MtdG9hc3Rlcl9fdGV4dFwiPkNoYXJnZW1lbnQgZW4gY291cnM8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidXBsb2FkLXByb2dyZXNzLXRvYXN0ZXJfX3Byb2dyZXNzXCI+XHJcbiAgICA8ZGl2XHJcbiAgICAgICpuZ0lmPVwicHJvZ3Jlc3MgIT09IG51bGxcIlxyXG4gICAgICBjbGFzcz1cInVwbG9hZC1wcm9ncmVzcy10b2FzdGVyX19wcm9ncmVzc19fdGV4dFwiXHJcbiAgICA+XHJcbiAgICAgIHt7IHByb2dyZXNzIH19JVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZXNuLWxvYWRlciBjbGFzcz1cInVwbG9hZC1wcm9ncmVzcy10b2FzdGVyX19wcm9ncmVzc19fc3Bpbm5lclwiPlxyXG4gICAgPC9lc24tbG9hZGVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19