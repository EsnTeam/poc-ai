import { Component, HostListener, TemplateRef, ViewChild, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../dialog/dialog.service";
import * as i2 from "@angular/router";
;
export class EsnDialogEntry {
    constructor(dialog, activatedRoute, 
    //public routerState: RouterStateService, // TODO: allow providing a service to store the previous router state
    viewContainerRef) {
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.viewContainerRef = viewContainerRef;
    }
    onPopState() {
        // Browser back/forward button pressed
        this.openDialog(this.data);
    }
    ngOnInit() {
        // TODO: allow providing a service to store the previous router state
        // this.routerState.dialogEntryRouterParams$ = this.activatedRoute.params;
        this.activatedRoute.data.subscribe((data) => {
            this.data = data;
            this.openDialog(data);
        });
    }
    openDialog(data) {
        const dialogRef = this.dialog.open(data.child, {
            viewContainerRef: this.viewContainerRef,
            panelClass: data.panelClass,
            fullScreenDialog: data.fullScreenDialog,
            autoFocus: false,
            data: {},
        });
        dialogRef.componentInstance['contentTemplate'] = this.templateRef;
    }
}
EsnDialogEntry.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogEntry, deps: [{ token: i1.EsnDialog }, { token: i2.ActivatedRoute }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
EsnDialogEntry.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnDialogEntry, selector: "esn-dialog-entry", host: { listeners: { "window:popstate": "onPopState($event)" } }, viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: "<ng-template>\r\n  <router-outlet></router-outlet>\r\n</ng-template>", dependencies: [{ kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogEntry, decorators: [{
            type: Component,
            args: [{ selector: 'esn-dialog-entry', template: "<ng-template>\r\n  <router-outlet></router-outlet>\r\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i1.EsnDialog }, { type: i2.ActivatedRoute }, { type: i0.ViewContainerRef }]; }, propDecorators: { templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], onPopState: [{
                type: HostListener,
                args: ['window:popstate', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWVudHJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2RpYWxvZy1lbnRyeS9kaWFsb2ctZW50cnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZGlhbG9nLWVudHJ5L2RpYWxvZy1lbnRyeS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFFWixXQUFXLEVBQ1gsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDOzs7O0FBS2lDLENBQUM7QUFNekQsTUFBTSxPQUFPLGNBQWM7SUFJekIsWUFDUyxNQUFpQixFQUNqQixjQUE4QjtJQUNyQywrR0FBK0c7SUFDdkcsZ0JBQWtDO1FBSG5DLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRTdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDekMsQ0FBQztJQUdKLFVBQVU7UUFDUixzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFFBQVE7UUFDTixxRUFBcUU7UUFDckUsMEVBQTBFO1FBRTFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sVUFBVSxDQUFDLElBQVM7UUFDekIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM3QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQyxDQUFDO1FBQ0YsU0FBUyxDQUFDLGlCQUE2QyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNqRyxDQUFDOzs0R0FwQ1UsY0FBYztnR0FBZCxjQUFjLHVLQUNkLFdBQVcsOERDbkJ4QixzRUFFYzs0RkRnQkQsY0FBYztrQkFKMUIsU0FBUzsrQkFDRSxrQkFBa0I7NEpBSWMsV0FBVztzQkFBcEQsU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQVd4QyxVQUFVO3NCQURULFlBQVk7dUJBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgT25Jbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIERhdGEgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBFc25EaWFsb2cgfSBmcm9tICcuLi9kaWFsb2cvZGlhbG9nLnNlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIERhdGFXaXRoQ29udGVudFRlbXBsYXRlIHtjb250ZW50VGVtcGxhdGU6IGFueX07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1kaWFsb2ctZW50cnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2ctZW50cnkuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuRGlhbG9nRW50cnkgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIGRhdGE6IERhdGE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZzogRXNuRGlhbG9nLFxyXG4gICAgcHVibGljIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIC8vcHVibGljIHJvdXRlclN0YXRlOiBSb3V0ZXJTdGF0ZVNlcnZpY2UsIC8vIFRPRE86IGFsbG93IHByb3ZpZGluZyBhIHNlcnZpY2UgdG8gc3RvcmUgdGhlIHByZXZpb3VzIHJvdXRlciBzdGF0ZVxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXHJcbiAgKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cG9wc3RhdGUnLCBbJyRldmVudCddKVxyXG4gIG9uUG9wU3RhdGUoKTogdm9pZCB7XHJcbiAgICAvLyBCcm93c2VyIGJhY2svZm9yd2FyZCBidXR0b24gcHJlc3NlZFxyXG4gICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIFRPRE86IGFsbG93IHByb3ZpZGluZyBhIHNlcnZpY2UgdG8gc3RvcmUgdGhlIHByZXZpb3VzIHJvdXRlciBzdGF0ZVxyXG4gICAgLy8gdGhpcy5yb3V0ZXJTdGF0ZS5kaWFsb2dFbnRyeVJvdXRlclBhcmFtcyQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtcztcclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgIHRoaXMub3BlbkRpYWxvZyhkYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5EaWFsb2coZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKGRhdGEuY2hpbGQsIHtcclxuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICBwYW5lbENsYXNzOiBkYXRhLnBhbmVsQ2xhc3MsXHJcbiAgICAgIGZ1bGxTY3JlZW5EaWFsb2c6IGRhdGEuZnVsbFNjcmVlbkRpYWxvZyxcclxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgICAgZGF0YToge30sXHJcbiAgICB9KTtcclxuICAgIChkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UgYXMgRGF0YVdpdGhDb250ZW50VGVtcGxhdGUpWydjb250ZW50VGVtcGxhdGUnXSA9IHRoaXMudGVtcGxhdGVSZWY7XHJcbiAgfVxyXG59XHJcblxyXG4iLCI8bmctdGVtcGxhdGU+XHJcbiAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L25nLXRlbXBsYXRlPiJdfQ==