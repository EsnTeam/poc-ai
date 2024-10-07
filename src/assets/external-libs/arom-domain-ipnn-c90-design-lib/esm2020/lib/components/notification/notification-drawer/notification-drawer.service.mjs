import { OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EsnNotificationDrawer } from './notification-drawer.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class EsnNotificationDrawerService {
    constructor(overlay) {
        this.overlay = overlay;
        this.isOpen$ = new BehaviorSubject(false);
        this.markAllAsRead$ = new BehaviorSubject(false);
    }
    openDrawer() {
        this.overlayRef = this._createOverlay();
        const drawerPortal = new ComponentPortal(EsnNotificationDrawer);
        this.overlayRef.attach(drawerPortal);
        this.overlayRef.backdropClick().subscribe(_ => this.closeDrawer());
        this.isOpen$.next(true);
    }
    closeDrawer() {
        this.isOpen$.next(false);
        this.overlayRef.backdropElement?.classList.add('dark-backdrop-fading');
        setTimeout(() => this.overlayRef.dispose(), 200);
    }
    toggleDrawer() {
        if (this.isOpen$.value) {
            this.closeDrawer();
        }
        else {
            this.openDrawer();
        }
    }
    _createOverlay() {
        const positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        const overlayConfig = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'dark-backdrop',
            panelClass: 'esn-notification-drawer-overlay-panel',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy,
        });
        return this.overlay.create(overlayConfig);
    }
}
EsnNotificationDrawerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationDrawerService, deps: [{ token: i1.Overlay }], target: i0.ɵɵFactoryTarget.Injectable });
EsnNotificationDrawerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationDrawerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnNotificationDrawerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Overlay }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWRyYXdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi1kcmF3ZXIvbm90aWZpY2F0aW9uLWRyYXdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBVyxhQUFhLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFHeEUsTUFBTSxPQUFPLDRCQUE0QjtJQVV2QyxZQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBVDdCLFlBQU8sR0FBNkIsSUFBSSxlQUFlLENBQzVELEtBQUssQ0FDTixDQUFDO1FBQ0ssbUJBQWMsR0FBNkIsSUFBSSxlQUFlLENBQ25FLEtBQUssQ0FDTixDQUFDO0lBSXFDLENBQUM7SUFFakMsVUFBVTtRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sWUFBWSxHQUFHLElBQUksZUFBZSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBR00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDdkUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBQztZQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCxjQUFjO1FBQ1osTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNsQyxRQUFRLEVBQUU7YUFDVixNQUFNLEVBQUU7YUFDUixrQkFBa0IsRUFBRTthQUNwQixnQkFBZ0IsRUFBRSxDQUFDO1FBRXRCLE1BQU0sYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDO1lBQ3RDLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGFBQWEsRUFBRSxlQUFlO1lBQzlCLFVBQVUsRUFBRSx1Q0FBdUM7WUFDbkQsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQ3JELGdCQUFnQjtTQUNqQixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OzBIQW5EVSw0QkFBNEI7OEhBQTVCLDRCQUE0Qjs0RkFBNUIsNEJBQTRCO2tCQUR4QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEVzbk5vdGlmaWNhdGlvbkRyYXdlciB9IGZyb20gJy4vbm90aWZpY2F0aW9uLWRyYXdlci5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXNuTm90aWZpY2F0aW9uRHJhd2VyU2VydmljZSB7XHJcbiAgcHVibGljIGlzT3BlbiQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oXHJcbiAgICBmYWxzZVxyXG4gICk7XHJcbiAgcHVibGljIG1hcmtBbGxBc1JlYWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cclxuXHJcbiAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLl9jcmVhdGVPdmVybGF5KCk7XHJcbiAgICBjb25zdCBkcmF3ZXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKEVzbk5vdGlmaWNhdGlvbkRyYXdlcik7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKGRyYXdlclBvcnRhbCk7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZShfID0+IHRoaXMuY2xvc2VEcmF3ZXIoKSk7XHJcbiAgICB0aGlzLmlzT3BlbiQubmV4dCh0cnVlKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgY2xvc2VEcmF3ZXIoKSB7XHJcbiAgICB0aGlzLmlzT3BlbiQubmV4dChmYWxzZSk7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdkYXJrLWJhY2tkcm9wLWZhZGluZycpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpLCAyMDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcclxuICAgIGlmKHRoaXMuaXNPcGVuJC52YWx1ZSl7XHJcbiAgICAgIHRoaXMuY2xvc2VEcmF3ZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3BlbkRyYXdlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZU92ZXJsYXkoKTogT3ZlcmxheVJlZiB7XHJcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XHJcbiAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgIC5nbG9iYWwoKVxyXG4gICAgICAuY2VudGVySG9yaXpvbnRhbGx5KClcclxuICAgICAgLmNlbnRlclZlcnRpY2FsbHkoKTtcclxuXHJcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgYmFja2Ryb3BDbGFzczogJ2RhcmstYmFja2Ryb3AnLFxyXG4gICAgICBwYW5lbENsYXNzOiAnZXNuLW5vdGlmaWNhdGlvbi1kcmF3ZXItb3ZlcmxheS1wYW5lbCcsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==