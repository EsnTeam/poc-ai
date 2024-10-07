import { Component, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../error-state/error-state.component";
import * as i3 from "../empty-state/empty-state.component";
import * as i4 from "../loader/loader.component";
export class EsnAsyncContentWrapper {
    constructor() {
        this.isLoading = false;
        this.isEmpty = false;
        this.emptyStateText = 'Aucun élément';
        this.errorText = 'Une erreur est survenue';
        this.errorActionText = 'Réessayer';
        this.errorActionClick = new EventEmitter();
        this.contentDisplayed = new EventEmitter();
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (!this.isLoading && !this.errorDisplay && !this.isEmpty) {
            this.contentDisplayed.emit();
        }
    }
    onErrorActionClick() {
        this.errorActionClick.emit();
    }
}
EsnAsyncContentWrapper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncContentWrapper, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnAsyncContentWrapper.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnAsyncContentWrapper, selector: "esn-async-content-wrapper", inputs: { isLoading: "isLoading", errorDisplay: "errorDisplay", isEmpty: "isEmpty", emptyStateText: "emptyStateText", errorText: "errorText", errorActionText: "errorActionText" }, outputs: { errorActionClick: "errorActionClick", contentDisplayed: "contentDisplayed" }, usesOnChanges: true, ngImport: i0, template: "<!-- Content -->\r\n<ng-content *ngIf=\"!isLoading && !errorDisplay && !isEmpty\"></ng-content>\r\n\r\n<!-- Error state -->\r\n<esn-error-state\r\n  (btnClicked)=\"onErrorActionClick()\"\r\n  *ngIf=\"!!errorDisplay\"\r\n  [retryPossible]=\"!!errorDisplay.retryable\"\r\n  btnText=\"{{ errorActionText }}\"\r\n  [retryOngoing]=\"isLoading\"\r\n>\r\n  {{ errorText }}<br *ngIf=\"!!errorDisplay.message\" />{{\r\n    errorDisplay.message || \"\"\r\n  }}\r\n</esn-error-state>\r\n\r\n<!-- Loading state -->\r\n<div *ngIf=\"isLoading && !errorDisplay\" class=\"spinner-container\">\r\n  <esn-loader [type]=\"'spinner'\" [size]=\"'md'\"></esn-loader>\r\n</div>\r\n\r\n<!-- Empty state -->\r\n<esn-empty-state\r\n  *ngIf=\"isEmpty && !errorDisplay && !isLoading\"\r\n  illustrationType=\"documents\"\r\n  >{{ emptyStateText }}</esn-empty-state\r\n>\r\n", styles: [".spinner-container{width:100%;display:flex;justify-content:space-around;padding-top:.5rem}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.EsnErrorState, selector: "esn-error-state", inputs: ["retryPossible", "retryOngoing", "btnText"], outputs: ["btnClicked"] }, { kind: "component", type: i3.EsnEmptyState, selector: "esn-empty-state", inputs: ["illustrationType"] }, { kind: "component", type: i4.EsnLoader, selector: "esn-loader", inputs: ["type", "centered", "size"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncContentWrapper, decorators: [{
            type: Component,
            args: [{ selector: 'esn-async-content-wrapper', template: "<!-- Content -->\r\n<ng-content *ngIf=\"!isLoading && !errorDisplay && !isEmpty\"></ng-content>\r\n\r\n<!-- Error state -->\r\n<esn-error-state\r\n  (btnClicked)=\"onErrorActionClick()\"\r\n  *ngIf=\"!!errorDisplay\"\r\n  [retryPossible]=\"!!errorDisplay.retryable\"\r\n  btnText=\"{{ errorActionText }}\"\r\n  [retryOngoing]=\"isLoading\"\r\n>\r\n  {{ errorText }}<br *ngIf=\"!!errorDisplay.message\" />{{\r\n    errorDisplay.message || \"\"\r\n  }}\r\n</esn-error-state>\r\n\r\n<!-- Loading state -->\r\n<div *ngIf=\"isLoading && !errorDisplay\" class=\"spinner-container\">\r\n  <esn-loader [type]=\"'spinner'\" [size]=\"'md'\"></esn-loader>\r\n</div>\r\n\r\n<!-- Empty state -->\r\n<esn-empty-state\r\n  *ngIf=\"isEmpty && !errorDisplay && !isLoading\"\r\n  illustrationType=\"documents\"\r\n  >{{ emptyStateText }}</esn-empty-state\r\n>\r\n", styles: [".spinner-container{width:100%;display:flex;justify-content:space-around;padding-top:.5rem}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { isLoading: [{
                type: Input
            }], errorDisplay: [{
                type: Input
            }], isEmpty: [{
                type: Input
            }], emptyStateText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], errorActionText: [{
                type: Input
            }], errorActionClick: [{
                type: Output
            }], contentDisplayed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtY29udGVudC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2FzeW5jLWNvbnRlbnQtd3JhcHBlci9hc3luYy1jb250ZW50LXdyYXBwZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYXN5bmMtY29udGVudC13cmFwcGVyL2FzeW5jLWNvbnRlbnQtd3JhcHBlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFRdkIsTUFBTSxPQUFPLHNCQUFzQjtJQVdqQztRQVZTLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixtQkFBYyxHQUFXLGVBQWUsQ0FBQztRQUN6QyxjQUFTLEdBQVcseUJBQXlCLENBQUM7UUFDOUMsb0JBQWUsR0FBVyxXQUFXLENBQUM7UUFFckMscUJBQWdCLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDaEUscUJBQWdCLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7SUFFM0QsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQztJQUVuQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMxRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRU0sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDOztvSEF2QlUsc0JBQXNCO3dHQUF0QixzQkFBc0IsbVdDaEJuQywrMEJBMkJBOzRGRFhhLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSwyQkFBMkI7MEVBSzVCLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBRUksZ0JBQWdCO3NCQUF6QixNQUFNO2dCQUNHLGdCQUFnQjtzQkFBekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcGlFcnJvckRpc3BsYXkgfSBmcm9tICcuLi8uLi91dGlscy9tb2RlbC9wdWJsaWMtYXBpJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLWFzeW5jLWNvbnRlbnQtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FzeW5jLWNvbnRlbnQtd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXN5bmMtY29udGVudC13cmFwcGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25Bc3luY0NvbnRlbnRXcmFwcGVyIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGVycm9yRGlzcGxheT86IEFwaUVycm9yRGlzcGxheTtcclxuICBASW5wdXQoKSBpc0VtcHR5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZW1wdHlTdGF0ZVRleHQ6IHN0cmluZyA9ICdBdWN1biDDqWzDqW1lbnQnO1xyXG4gIEBJbnB1dCgpIGVycm9yVGV4dDogc3RyaW5nID0gJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlJztcclxuICBASW5wdXQoKSBlcnJvckFjdGlvblRleHQ6IHN0cmluZyA9ICdSw6llc3NheWVyJztcclxuXHJcbiAgQE91dHB1dCgpIGVycm9yQWN0aW9uQ2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgY29udGVudERpc3BsYXllZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzTG9hZGluZyAmJiAhdGhpcy5lcnJvckRpc3BsYXkgJiYgIXRoaXMuaXNFbXB0eSkge1xyXG4gICAgICB0aGlzLmNvbnRlbnREaXNwbGF5ZWQuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRXJyb3JBY3Rpb25DbGljaygpIHtcclxuICAgIHRoaXMuZXJyb3JBY3Rpb25DbGljay5lbWl0KCk7XHJcbiAgfVxyXG59XHJcbiIsIjwhLS0gQ29udGVudCAtLT5cclxuPG5nLWNvbnRlbnQgKm5nSWY9XCIhaXNMb2FkaW5nICYmICFlcnJvckRpc3BsYXkgJiYgIWlzRW1wdHlcIj48L25nLWNvbnRlbnQ+XHJcblxyXG48IS0tIEVycm9yIHN0YXRlIC0tPlxyXG48ZXNuLWVycm9yLXN0YXRlXHJcbiAgKGJ0bkNsaWNrZWQpPVwib25FcnJvckFjdGlvbkNsaWNrKClcIlxyXG4gICpuZ0lmPVwiISFlcnJvckRpc3BsYXlcIlxyXG4gIFtyZXRyeVBvc3NpYmxlXT1cIiEhZXJyb3JEaXNwbGF5LnJldHJ5YWJsZVwiXHJcbiAgYnRuVGV4dD1cInt7IGVycm9yQWN0aW9uVGV4dCB9fVwiXHJcbiAgW3JldHJ5T25nb2luZ109XCJpc0xvYWRpbmdcIlxyXG4+XHJcbiAge3sgZXJyb3JUZXh0IH19PGJyICpuZ0lmPVwiISFlcnJvckRpc3BsYXkubWVzc2FnZVwiIC8+e3tcclxuICAgIGVycm9yRGlzcGxheS5tZXNzYWdlIHx8IFwiXCJcclxuICB9fVxyXG48L2Vzbi1lcnJvci1zdGF0ZT5cclxuXHJcbjwhLS0gTG9hZGluZyBzdGF0ZSAtLT5cclxuPGRpdiAqbmdJZj1cImlzTG9hZGluZyAmJiAhZXJyb3JEaXNwbGF5XCIgY2xhc3M9XCJzcGlubmVyLWNvbnRhaW5lclwiPlxyXG4gIDxlc24tbG9hZGVyIFt0eXBlXT1cIidzcGlubmVyJ1wiIFtzaXplXT1cIidtZCdcIj48L2Vzbi1sb2FkZXI+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSBFbXB0eSBzdGF0ZSAtLT5cclxuPGVzbi1lbXB0eS1zdGF0ZVxyXG4gICpuZ0lmPVwiaXNFbXB0eSAmJiAhZXJyb3JEaXNwbGF5ICYmICFpc0xvYWRpbmdcIlxyXG4gIGlsbHVzdHJhdGlvblR5cGU9XCJkb2N1bWVudHNcIlxyXG4gID57eyBlbXB0eVN0YXRlVGV4dCB9fTwvZXNuLWVtcHR5LXN0YXRlXHJcbj5cclxuIl19