import { Injectable } from '@angular/core';
import { ConfirmationDialogComponent } from "../legacy/confirmation-dialog.component";
import { ConfirmationDialogModule } from "../confirmation-dialog.module";
import * as i0 from "@angular/core";
import * as i1 from "../../dialog/dialog.service";
import * as i2 from "../../../utils/services/responsive/responsive.service";
export class ConfirmationDialogService {
    constructor(dialog, responsiveService) {
        this.dialog = dialog;
        this.responsiveService = responsiveService;
        this.isMobile$ = this.responsiveService.isMobile$;
    }
    show(data) {
        return this.dialog.open(ConfirmationDialogComponent, {
            data,
            fullScreenDialog: this.isMobile$.getValue() // fullscreen if mobile device
        });
    }
    setLoading(esnDialogRef, loading) {
        esnDialogRef.componentInstance.loading = loading;
    }
    onDecision(esnDialogRef) {
        return esnDialogRef.componentInstance.decision.asObservable();
    }
}
ConfirmationDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ConfirmationDialogService, deps: [{ token: i1.EsnDialog }, { token: i2.ResponsiveService }], target: i0.ɵɵFactoryTarget.Injectable });
ConfirmationDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ConfirmationDialogService, providedIn: ConfirmationDialogModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ConfirmationDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: ConfirmationDialogModule
                }]
        }], ctorParameters: function () { return [{ type: i1.EsnDialog }, { type: i2.ResponsiveService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY29uZmlybWF0aW9uLWRpYWxvZy9zZXJ2aWNlcy9jb25maXJtYXRpb24tZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUd0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQVF6RSxNQUFNLE9BQU8seUJBQXlCO0lBR3BDLFlBQW9CLE1BQWlCLEVBQVUsaUJBQW9DO1FBQS9ELFdBQU0sR0FBTixNQUFNLENBQVc7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRjVFLGNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDO0lBRWtDLENBQUM7SUFFdkYsSUFBSSxDQUFDLElBQWlDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUU7WUFDbkQsSUFBSTtZQUNKLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsOEJBQThCO1NBQzNFLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsWUFBdUQsRUFBRSxPQUFnQjtRQUNsRixZQUFZLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNuRCxDQUFDO0lBR0QsVUFBVSxDQUFDLFlBQXVEO1FBQ2hFLE9BQU8sWUFBWSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRSxDQUFDOzt1SEFuQlUseUJBQXlCOzJIQUF6Qix5QkFBeUIsY0FGeEIsd0JBQXdCOzRGQUV6Qix5QkFBeUI7a0JBSHJDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLHdCQUF3QjtpQkFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9sZWdhY3kvY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uRGlhbG9nRGF0YU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9jb25maXJtYXRpb25EaWFsb2dEYXRhTW9kZWxcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbkRpYWxvZ01vZHVsZSB9IGZyb20gXCIuLi9jb25maXJtYXRpb24tZGlhbG9nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBFc25EaWFsb2dSZWYgfSBmcm9tIFwiLi4vLi4vZGlhbG9nL2RpYWxvZ1JlZlwiO1xyXG5pbXBvcnQgeyBFc25EaWFsb2cgfSBmcm9tIFwiLi4vLi4vZGlhbG9nL2RpYWxvZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvc2VydmljZXMvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IENvbmZpcm1hdGlvbkRpYWxvZ01vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uRGlhbG9nU2VydmljZSB7XHJcbiAgcHVibGljIGlzTW9iaWxlJCA9IHRoaXMucmVzcG9uc2l2ZVNlcnZpY2UuaXNNb2JpbGUkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZzogRXNuRGlhbG9nLCBwcml2YXRlIHJlc3BvbnNpdmVTZXJ2aWNlOiBSZXNwb25zaXZlU2VydmljZSkge31cclxuXHJcbiAgc2hvdyhkYXRhOiBDb25maXJtYXRpb25EaWFsb2dEYXRhTW9kZWwpOiBFc25EaWFsb2dSZWY8Q29uZmlybWF0aW9uRGlhbG9nQ29tcG9uZW50PiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaWFsb2cub3BlbihDb25maXJtYXRpb25EaWFsb2dDb21wb25lbnQsIHtcclxuICAgICAgZGF0YSxcclxuICAgICAgZnVsbFNjcmVlbkRpYWxvZzogdGhpcy5pc01vYmlsZSQuZ2V0VmFsdWUoKSAvLyBmdWxsc2NyZWVuIGlmIG1vYmlsZSBkZXZpY2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0TG9hZGluZyhlc25EaWFsb2dSZWY6IEVzbkRpYWxvZ1JlZjxDb25maXJtYXRpb25EaWFsb2dDb21wb25lbnQ+LCBsb2FkaW5nOiBib29sZWFuKSB7XHJcbiAgICBlc25EaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UubG9hZGluZyA9IGxvYWRpbmc7XHJcbiAgfVxyXG5cclxuXHJcbiAgb25EZWNpc2lvbihlc25EaWFsb2dSZWY6IEVzbkRpYWxvZ1JlZjxDb25maXJtYXRpb25EaWFsb2dDb21wb25lbnQ+KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gZXNuRGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLmRlY2lzaW9uLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=