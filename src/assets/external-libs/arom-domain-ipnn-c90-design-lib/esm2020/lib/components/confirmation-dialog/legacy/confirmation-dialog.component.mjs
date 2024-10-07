import { Component, EventEmitter, Inject } from '@angular/core';
import { ESN_DIALOG_DATA } from "../../dialog/dialog.service";
import * as i0 from "@angular/core";
import * as i1 from "../../dialog/dialogRef";
import * as i2 from "@angular/common";
import * as i3 from "../../dialog/dialog-content";
import * as i4 from "../../loader/loader.component";
import * as i5 from "../../button/button.component";
export class ConfirmationDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.decision = new EventEmitter();
        this.thirdButtonClick = new EventEmitter();
        this.loading = false;
    }
    confirm() {
        this.decision.emit(true);
        this.dialogRef.close();
    }
    cancel() {
        this.decision.emit(false);
        this.dialogRef.close();
    }
    thirdButtonClicked() {
        this.thirdButtonClick.emit();
        this.dialogRef.close();
    }
}
ConfirmationDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ConfirmationDialogComponent, deps: [{ token: i1.EsnDialogRef }, { token: ESN_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
ConfirmationDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: ConfirmationDialogComponent, selector: "lib-confirmation-dialog", ngImport: i0, template: "<div class=\"confirmation-modal\">\r\n  <esn-loader *ngIf=\"loading; else modal\" [centered]=\"true\"></esn-loader>\r\n  <ng-template #modal>\r\n    <esn-dialog-header>\r\n      <h3>{{ data.title }}</h3>\r\n      <esn-button class=\"close-btn\" type=\"basic\" esnDialogClose>X</esn-button>\r\n    </esn-dialog-header>\r\n\r\n    <esn-dialog-content>\r\n      {{ data.message || \"\" }}\r\n      <p *ngIf=\"data.importantMessage\" class=\"important-paragraph\">\r\n        {{ data.importantMessage }}\r\n      </p>\r\n      <p *ngFor=\"let paragraph of data.paragraphs\" class=\"paragraph\">\r\n        {{ paragraph }}\r\n      </p>\r\n    </esn-dialog-content>\r\n    <esn-dialog-footer>\r\n      <esn-button\r\n        (click)=\"thirdButtonClicked()\"\r\n        *ngIf=\"!!data.thirdButton\"\r\n        [color]=\"'neutral'\"\r\n        [type]=\"'basic'\"\r\n        >{{ data.thirdButtonLabel || \"Annuler\" }}</esn-button\r\n      >\r\n      <esn-button\r\n        (click)=\"cancel()\"\r\n        *ngIf=\"!data.noCancelBtn\"\r\n        [color]=\"'neutral'\"\r\n        [type]=\"'basic'\"\r\n        cdkFocusInitial\r\n        class=\"cancel-button\"\r\n        >{{ data.cancelLabel || \"NON\" }}</esn-button\r\n      >\r\n      <esn-button (click)=\"confirm()\" class=\"confirm-button\">{{\r\n        data.confirmLabel || \"OUI\"\r\n      }}</esn-button>\r\n    </esn-dialog-footer>\r\n  </ng-template>\r\n</div>\r\n", styles: [".confirmation-modal{display:block;width:auto;min-width:50vw;white-space:pre-line}@media all and (max-width: 600px){.confirmation-modal{width:100%;max-width:unset}}.confirmation-modal__header{margin-bottom:2rem;font-weight:700}.confirmation-modal__body{margin-bottom:2rem}.confirmation-modal__footer{display:flex;float:right;font-weight:700}.confirmation-modal__action-btn__left{margin-right:1rem}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.EsnDialogClose, selector: "[esn-dialog-close], [esnDialogClose]", inputs: ["aria-label", "esn-dialog-close", "esnDialogClose"], exportAs: ["esnDialogClose"] }, { kind: "component", type: i3.EsnDialogHeader, selector: "esn-dialog-header", inputs: ["divider", "color"], exportAs: ["esnDialogHeader"] }, { kind: "component", type: i3.EsnDialogContent, selector: "esn-dialog-content", exportAs: ["esnDialogContent"] }, { kind: "component", type: i3.EsnDialogFooter, selector: "esn-dialog-footer", inputs: ["divider", "align"], exportAs: ["esnDialogFooter"] }, { kind: "component", type: i4.EsnLoader, selector: "esn-loader", inputs: ["type", "centered", "size"] }, { kind: "component", type: i5.EsnButton, selector: "esn-button", inputs: ["type", "size", "disabled", "round", "iconOnly", "color"], outputs: ["click"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ConfirmationDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-confirmation-dialog', template: "<div class=\"confirmation-modal\">\r\n  <esn-loader *ngIf=\"loading; else modal\" [centered]=\"true\"></esn-loader>\r\n  <ng-template #modal>\r\n    <esn-dialog-header>\r\n      <h3>{{ data.title }}</h3>\r\n      <esn-button class=\"close-btn\" type=\"basic\" esnDialogClose>X</esn-button>\r\n    </esn-dialog-header>\r\n\r\n    <esn-dialog-content>\r\n      {{ data.message || \"\" }}\r\n      <p *ngIf=\"data.importantMessage\" class=\"important-paragraph\">\r\n        {{ data.importantMessage }}\r\n      </p>\r\n      <p *ngFor=\"let paragraph of data.paragraphs\" class=\"paragraph\">\r\n        {{ paragraph }}\r\n      </p>\r\n    </esn-dialog-content>\r\n    <esn-dialog-footer>\r\n      <esn-button\r\n        (click)=\"thirdButtonClicked()\"\r\n        *ngIf=\"!!data.thirdButton\"\r\n        [color]=\"'neutral'\"\r\n        [type]=\"'basic'\"\r\n        >{{ data.thirdButtonLabel || \"Annuler\" }}</esn-button\r\n      >\r\n      <esn-button\r\n        (click)=\"cancel()\"\r\n        *ngIf=\"!data.noCancelBtn\"\r\n        [color]=\"'neutral'\"\r\n        [type]=\"'basic'\"\r\n        cdkFocusInitial\r\n        class=\"cancel-button\"\r\n        >{{ data.cancelLabel || \"NON\" }}</esn-button\r\n      >\r\n      <esn-button (click)=\"confirm()\" class=\"confirm-button\">{{\r\n        data.confirmLabel || \"OUI\"\r\n      }}</esn-button>\r\n    </esn-dialog-footer>\r\n  </ng-template>\r\n</div>\r\n", styles: [".confirmation-modal{display:block;width:auto;min-width:50vw;white-space:pre-line}@media all and (max-width: 600px){.confirmation-modal{width:100%;max-width:unset}}.confirmation-modal__header{margin-bottom:2rem;font-weight:700}.confirmation-modal__body{margin-bottom:2rem}.confirmation-modal__footer{display:flex;float:right;font-weight:700}.confirmation-modal__action-btn__left{margin-right:1rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.EsnDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ESN_DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9jb25maXJtYXRpb24tZGlhbG9nL2xlZ2FjeS9jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi1kaWFsb2cvbGVnYWN5L2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSTlELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7OztBQU81RCxNQUFNLE9BQU8sMkJBQTJCO0lBTXRDLFlBQ1UsU0FBb0QsRUFFckQsSUFBaUM7UUFGaEMsY0FBUyxHQUFULFNBQVMsQ0FBMkM7UUFFckQsU0FBSSxHQUFKLElBQUksQ0FBNkI7UUFQbkMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELHFCQUFnQixHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFELFlBQU8sR0FBWSxLQUFLLENBQUM7SUFLYSxDQUFDO0lBRXJDLE9BQU87UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O3lIQXhCUSwyQkFBMkIsOENBUTVCLGVBQWU7NkdBUmQsMkJBQTJCLCtEQ1h4QywyNENBd0NBOzRGRDdCYSwyQkFBMkI7a0JBTHZDLFNBQVM7K0JBQ0UseUJBQXlCOzswQkFZaEMsTUFBTTsyQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb25maXJtYXRpb25EaWFsb2dEYXRhTW9kZWx9IGZyb20gXCIuLi9tb2RlbHMvY29uZmlybWF0aW9uRGlhbG9nRGF0YU1vZGVsXCI7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtFc25EaWFsb2dSZWZ9IGZyb20gXCIuLi8uLi9kaWFsb2cvZGlhbG9nUmVmXCI7XHJcbmltcG9ydCB7RVNOX0RJQUxPR19EQVRBfSBmcm9tIFwiLi4vLi4vZGlhbG9nL2RpYWxvZy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1jb25maXJtYXRpb24tZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25EaWFsb2dDb21wb25lbnQge1xyXG5cclxuICBwdWJsaWMgZGVjaXNpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHB1YmxpYyB0aGlyZEJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogRXNuRGlhbG9nUmVmPENvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KEVTTl9ESUFMT0dfREFUQSlcclxuICAgIHB1YmxpYyBkYXRhOiBDb25maXJtYXRpb25EaWFsb2dEYXRhTW9kZWwpIHt9XHJcblxyXG4gICAgcHVibGljIGNvbmZpcm0oKSB7XHJcbiAgICAgIHRoaXMuZGVjaXNpb24uZW1pdCh0cnVlKTtcclxuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgIH1cclxuICBcclxuICAgIHB1YmxpYyBjYW5jZWwoKSB7XHJcbiAgICAgIHRoaXMuZGVjaXNpb24uZW1pdChmYWxzZSk7XHJcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgdGhpcmRCdXR0b25DbGlja2VkKCkge1xyXG4gICAgICB0aGlzLnRoaXJkQnV0dG9uQ2xpY2suZW1pdCgpO1xyXG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjb25maXJtYXRpb24tbW9kYWxcIj5cclxuICA8ZXNuLWxvYWRlciAqbmdJZj1cImxvYWRpbmc7IGVsc2UgbW9kYWxcIiBbY2VudGVyZWRdPVwidHJ1ZVwiPjwvZXNuLWxvYWRlcj5cclxuICA8bmctdGVtcGxhdGUgI21vZGFsPlxyXG4gICAgPGVzbi1kaWFsb2ctaGVhZGVyPlxyXG4gICAgICA8aDM+e3sgZGF0YS50aXRsZSB9fTwvaDM+XHJcbiAgICAgIDxlc24tYnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuXCIgdHlwZT1cImJhc2ljXCIgZXNuRGlhbG9nQ2xvc2U+WDwvZXNuLWJ1dHRvbj5cclxuICAgIDwvZXNuLWRpYWxvZy1oZWFkZXI+XHJcblxyXG4gICAgPGVzbi1kaWFsb2ctY29udGVudD5cclxuICAgICAge3sgZGF0YS5tZXNzYWdlIHx8IFwiXCIgfX1cclxuICAgICAgPHAgKm5nSWY9XCJkYXRhLmltcG9ydGFudE1lc3NhZ2VcIiBjbGFzcz1cImltcG9ydGFudC1wYXJhZ3JhcGhcIj5cclxuICAgICAgICB7eyBkYXRhLmltcG9ydGFudE1lc3NhZ2UgfX1cclxuICAgICAgPC9wPlxyXG4gICAgICA8cCAqbmdGb3I9XCJsZXQgcGFyYWdyYXBoIG9mIGRhdGEucGFyYWdyYXBoc1wiIGNsYXNzPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAge3sgcGFyYWdyYXBoIH19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZXNuLWRpYWxvZy1jb250ZW50PlxyXG4gICAgPGVzbi1kaWFsb2ctZm9vdGVyPlxyXG4gICAgICA8ZXNuLWJ1dHRvblxyXG4gICAgICAgIChjbGljayk9XCJ0aGlyZEJ1dHRvbkNsaWNrZWQoKVwiXHJcbiAgICAgICAgKm5nSWY9XCIhIWRhdGEudGhpcmRCdXR0b25cIlxyXG4gICAgICAgIFtjb2xvcl09XCInbmV1dHJhbCdcIlxyXG4gICAgICAgIFt0eXBlXT1cIidiYXNpYydcIlxyXG4gICAgICAgID57eyBkYXRhLnRoaXJkQnV0dG9uTGFiZWwgfHwgXCJBbm51bGVyXCIgfX08L2Vzbi1idXR0b25cclxuICAgICAgPlxyXG4gICAgICA8ZXNuLWJ1dHRvblxyXG4gICAgICAgIChjbGljayk9XCJjYW5jZWwoKVwiXHJcbiAgICAgICAgKm5nSWY9XCIhZGF0YS5ub0NhbmNlbEJ0blwiXHJcbiAgICAgICAgW2NvbG9yXT1cIiduZXV0cmFsJ1wiXHJcbiAgICAgICAgW3R5cGVdPVwiJ2Jhc2ljJ1wiXHJcbiAgICAgICAgY2RrRm9jdXNJbml0aWFsXHJcbiAgICAgICAgY2xhc3M9XCJjYW5jZWwtYnV0dG9uXCJcclxuICAgICAgICA+e3sgZGF0YS5jYW5jZWxMYWJlbCB8fCBcIk5PTlwiIH19PC9lc24tYnV0dG9uXHJcbiAgICAgID5cclxuICAgICAgPGVzbi1idXR0b24gKGNsaWNrKT1cImNvbmZpcm0oKVwiIGNsYXNzPVwiY29uZmlybS1idXR0b25cIj57e1xyXG4gICAgICAgIGRhdGEuY29uZmlybUxhYmVsIHx8IFwiT1VJXCJcclxuICAgICAgfX08L2Vzbi1idXR0b24+XHJcbiAgICA8L2Vzbi1kaWFsb2ctZm9vdGVyPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG4iXX0=