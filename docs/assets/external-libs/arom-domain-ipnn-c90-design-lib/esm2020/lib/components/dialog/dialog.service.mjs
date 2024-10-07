import { ANIMATION_MODULE_TYPE, Inject, Injectable, Optional, SkipSelf, } from '@angular/core';
import { MatDialogContainer, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, _MatDialogBase, } from '@angular/material/dialog';
import { EsnDialogRef } from './dialogRef';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/services/responsive/public-api";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/material/dialog";
export const ESN_DIALOG_DATA = MAT_DIALOG_DATA;
export const ESN_DIALOG_DEFAULT_OPTIONS = MAT_DIALOG_DEFAULT_OPTIONS;
export const ESN_DIALOG_SCROLL_STRATEGY = MAT_DIALOG_SCROLL_STRATEGY;
export class EsnDialog extends _MatDialogBase {
    constructor(responsiveService, overlay, injector, location, defaultOptions, scrollStrategy, parentDialog, overlayContainer, animationMode) {
        super(overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy, EsnDialogRef, MatDialogContainer, ESN_DIALOG_DATA, animationMode);
        this.responsiveService = responsiveService;
        this.isMobile$ = this.responsiveService.isMobile$;
        this._idPrefix = 'mat-mdc-dialog-';
    }
    open(componentOrTemplateRef, config) {
        const matConfig = config || {};
        let panelClasses = matConfig.panelClass || [];
        if (!Array.isArray(panelClasses)) {
            panelClasses = [panelClasses];
        }
        panelClasses.push('esn-dialog');
        if (!!matConfig?.fullScreenDialog) {
            this.setFullScreen(matConfig, panelClasses);
        }
        this.isMobile$.subscribe(isMobile => {
            if (isMobile) {
                this.setFullScreen(matConfig, panelClasses);
            }
        });
        matConfig.panelClass = panelClasses;
        // Set autoFocus to false by default
        matConfig.autoFocus = !!matConfig.autoFocus;
        return super.open(componentOrTemplateRef, matConfig);
    }
    setFullScreen(matConfig, panelClasses) {
        matConfig.width = '100vw';
        matConfig.maxWidth = 'none';
        matConfig.height = '100vh';
        if (Array.isArray(panelClasses)) {
            panelClasses.push('esn-dialog-full-screen');
        }
    }
}
EsnDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialog, deps: [{ token: i1.ResponsiveService }, { token: i2.Overlay }, { token: i0.Injector }, { token: Location, optional: true }, { token: ESN_DIALOG_DEFAULT_OPTIONS, optional: true }, { token: ESN_DIALOG_SCROLL_STRATEGY }, { token: i3.MatDialog, optional: true, skipSelf: true }, { token: i2.OverlayContainer }, { token: ANIMATION_MODULE_TYPE, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
EsnDialog.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialog });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialog, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ResponsiveService }, { type: i2.Overlay }, { type: i0.Injector }, { type: Location, decorators: [{
                    type: Optional
                }] }, { type: i3.MatDialogConfig, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ESN_DIALOG_DEFAULT_OPTIONS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ESN_DIALOG_SCROLL_STRATEGY]
                }] }, { type: i3.MatDialog, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }, { type: i2.OverlayContainer }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ANIMATION_MODULE_TYPE]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixNQUFNLEVBQ04sVUFBVSxFQUVWLFFBQVEsRUFDUixRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsMEJBQTBCLEVBQzFCLDBCQUEwQixFQUMxQixjQUFjLEdBQ2YsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUkzQyxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHLDBCQUEwQixDQUFDO0FBQ3JFLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHLDBCQUEwQixDQUFDO0FBR3JFLE1BQU0sT0FBTyxTQUFVLFNBQVEsY0FBa0M7SUFHL0QsWUFDVSxpQkFBb0MsRUFDNUMsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDTixRQUFrQixFQUc5QixjQUErQixFQUNLLGNBQW1CLEVBQy9CLFlBQXVCLEVBQy9DLGdCQUFrQyxFQUdsQyxhQUFzRDtRQUV0RCxLQUFLLENBQ0gsT0FBTyxFQUNQLFFBQVEsRUFDUixjQUFjLEVBQ2QsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsYUFBYSxDQUNkLENBQUM7UUF6Qk0sc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUg5QyxjQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztRQThCM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztJQUNyQyxDQUFDO0lBY1EsSUFBSSxDQUNYLHNCQUF5RCxFQUN6RCxNQUEyQjtRQUUzQixNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBRS9CLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQzlDLElBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQy9CLFlBQVksR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1NBQzlCO1FBQ0QsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNsQyxJQUFHLFFBQVEsRUFBRTtnQkFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQzthQUM3QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7UUFDcEMsb0NBQW9DO1FBQ3BDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUE7UUFFM0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxhQUFhLENBQUMsU0FBK0IsRUFBRSxZQUErQjtRQUMxRSxTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMxQixTQUFTLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUM1QixTQUFTLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUMzQixJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDOUIsWUFBWSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQzs7dUdBbEZVLFNBQVMsdUlBU1YsMEJBQTBCLDZCQUUxQiwwQkFBMEIsc0dBSTFCLHFCQUFxQjsyR0FmcEIsU0FBUzs0RkFBVCxTQUFTO2tCQURyQixVQUFVOzswQkFRTixRQUFROzswQkFDUixRQUFROzswQkFDUixNQUFNOzJCQUFDLDBCQUEwQjs7MEJBRWpDLE1BQU07MkJBQUMsMEJBQTBCOzswQkFDakMsUUFBUTs7MEJBQUksUUFBUTs7MEJBRXBCLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSwgT3ZlcmxheSwgT3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBBTklNQVRJT05fTU9EVUxFX1RZUEUsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGFibGUsXHJcbiAgSW5qZWN0b3IsXHJcbiAgT3B0aW9uYWwsXHJcbiAgU2tpcFNlbGYsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgTWF0RGlhbG9nLFxyXG4gIE1hdERpYWxvZ0NvbmZpZyxcclxuICBNYXREaWFsb2dDb250YWluZXIsXHJcbiAgTUFUX0RJQUxPR19EQVRBLFxyXG4gIE1BVF9ESUFMT0dfREVGQVVMVF9PUFRJT05TLFxyXG4gIE1BVF9ESUFMT0dfU0NST0xMX1NUUkFURUdZLFxyXG4gIF9NYXREaWFsb2dCYXNlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IEVzbkRpYWxvZ1JlZiB9IGZyb20gJy4vZGlhbG9nUmVmJztcclxuaW1wb3J0IHsgRXNuRGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2VydmljZXMvcmVzcG9uc2l2ZS9wdWJsaWMtYXBpJztcclxuXHJcbmV4cG9ydCBjb25zdCBFU05fRElBTE9HX0RBVEEgPSBNQVRfRElBTE9HX0RBVEE7XHJcbmV4cG9ydCBjb25zdCBFU05fRElBTE9HX0RFRkFVTFRfT1BUSU9OUyA9IE1BVF9ESUFMT0dfREVGQVVMVF9PUFRJT05TO1xyXG5leHBvcnQgY29uc3QgRVNOX0RJQUxPR19TQ1JPTExfU1RSQVRFR1kgPSBNQVRfRElBTE9HX1NDUk9MTF9TVFJBVEVHWTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVzbkRpYWxvZyBleHRlbmRzIF9NYXREaWFsb2dCYXNlPE1hdERpYWxvZ0NvbnRhaW5lcj4ge1xyXG4gIGlzTW9iaWxlJCA9IHRoaXMucmVzcG9uc2l2ZVNlcnZpY2UuaXNNb2JpbGUkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVzcG9uc2l2ZVNlcnZpY2U6IFJlc3BvbnNpdmVTZXJ2aWNlLFxyXG4gICAgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIEBPcHRpb25hbCgpIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASW5qZWN0KEVTTl9ESUFMT0dfREVGQVVMVF9PUFRJT05TKVxyXG4gICAgZGVmYXVsdE9wdGlvbnM6IE1hdERpYWxvZ0NvbmZpZyxcclxuICAgIEBJbmplY3QoRVNOX0RJQUxPR19TQ1JPTExfU1RSQVRFR1kpIHNjcm9sbFN0cmF0ZWd5OiBhbnksXHJcbiAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnREaWFsb2c6IE1hdERpYWxvZyxcclxuICAgIG92ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpXHJcbiAgICBhbmltYXRpb25Nb2RlPzogJ05vb3BBbmltYXRpb25zJyB8ICdCcm93c2VyQW5pbWF0aW9ucycsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgb3ZlcmxheSxcclxuICAgICAgaW5qZWN0b3IsXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zLFxyXG4gICAgICBwYXJlbnREaWFsb2csXHJcbiAgICAgIG92ZXJsYXlDb250YWluZXIsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5LFxyXG4gICAgICBFc25EaWFsb2dSZWYsXHJcbiAgICAgIE1hdERpYWxvZ0NvbnRhaW5lcixcclxuICAgICAgRVNOX0RJQUxPR19EQVRBLFxyXG4gICAgICBhbmltYXRpb25Nb2RlXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2lkUHJlZml4ID0gJ21hdC1tZGMtZGlhbG9nLSc7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSBvcGVuPFQsIEQgPSBhbnksIFIgPSBhbnk+KFxyXG4gICAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+LFxyXG4gICAgY29uZmlnPzogRXNuRGlhbG9nQ29uZmlnPEQ+XHJcbiAgKTogRXNuRGlhbG9nUmVmPFQsIFI+O1xyXG4gIG92ZXJyaWRlIG9wZW48VCwgRCA9IGFueSwgUiA9IGFueT4oXHJcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8VD4sXHJcbiAgICBjb25maWc/OiBFc25EaWFsb2dDb25maWc8RD5cclxuICApOiBFc25EaWFsb2dSZWY8VCwgUj47XHJcbiAgb3ZlcnJpZGUgb3BlbjxULCBEID0gYW55LCBSID0gYW55PihcclxuICAgIHRlbXBsYXRlOiBDb21wb25lbnRUeXBlPFQ+IHwgVGVtcGxhdGVSZWY8VD4sXHJcbiAgICBjb25maWc/OiBFc25EaWFsb2dDb25maWc8RD5cclxuICApOiBFc25EaWFsb2dSZWY8VCwgUj47XHJcbiAgb3ZlcnJpZGUgb3BlbjxULCBEID0gYW55LCBSID0gYW55PihcclxuICAgIGNvbXBvbmVudE9yVGVtcGxhdGVSZWY6IENvbXBvbmVudFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxUPixcclxuICAgIGNvbmZpZz86IEVzbkRpYWxvZ0NvbmZpZzxEPlxyXG4gICk6IEVzbkRpYWxvZ1JlZjxULCBSPiB7XHJcbiAgICBjb25zdCBtYXRDb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG4gICAgbGV0IHBhbmVsQ2xhc3NlcyA9IG1hdENvbmZpZy5wYW5lbENsYXNzIHx8IFtdO1xyXG4gICAgaWYoIUFycmF5LmlzQXJyYXkocGFuZWxDbGFzc2VzKSkge1xyXG4gICAgICBwYW5lbENsYXNzZXMgPSBbcGFuZWxDbGFzc2VzXVxyXG4gICAgfVxyXG4gICAgcGFuZWxDbGFzc2VzLnB1c2goJ2Vzbi1kaWFsb2cnKTtcclxuICAgIFxyXG4gICAgaWYgKCEhbWF0Q29uZmlnPy5mdWxsU2NyZWVuRGlhbG9nKSB7XHJcbiAgICAgIHRoaXMuc2V0RnVsbFNjcmVlbihtYXRDb25maWcsIHBhbmVsQ2xhc3Nlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc01vYmlsZSQuc3Vic2NyaWJlKGlzTW9iaWxlID0+IHtcclxuICAgICAgaWYoaXNNb2JpbGUpIHtcclxuICAgICAgICB0aGlzLnNldEZ1bGxTY3JlZW4obWF0Q29uZmlnLCBwYW5lbENsYXNzZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXRDb25maWcucGFuZWxDbGFzcyA9IHBhbmVsQ2xhc3NlcztcclxuICAgIC8vIFNldCBhdXRvRm9jdXMgdG8gZmFsc2UgYnkgZGVmYXVsdFxyXG4gICAgbWF0Q29uZmlnLmF1dG9Gb2N1cyA9ICEhbWF0Q29uZmlnLmF1dG9Gb2N1c1xyXG5cclxuICAgIHJldHVybiBzdXBlci5vcGVuKGNvbXBvbmVudE9yVGVtcGxhdGVSZWYsIG1hdENvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBzZXRGdWxsU2NyZWVuKG1hdENvbmZpZzogRXNuRGlhbG9nQ29uZmlnPGFueT4sIHBhbmVsQ2xhc3Nlczogc3RyaW5nIHwgc3RyaW5nW10pICB7XHJcbiAgICAgIG1hdENvbmZpZy53aWR0aCA9ICcxMDB2dyc7XHJcbiAgICAgIG1hdENvbmZpZy5tYXhXaWR0aCA9ICdub25lJztcclxuICAgICAgbWF0Q29uZmlnLmhlaWdodCA9ICcxMDB2aCc7XHJcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkocGFuZWxDbGFzc2VzKSkge1xyXG4gICAgICAgIHBhbmVsQ2xhc3Nlcy5wdXNoKCdlc24tZGlhbG9nLWZ1bGwtc2NyZWVuJyk7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuIl19