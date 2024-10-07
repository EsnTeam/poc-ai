import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/slide-toggle";
/*****************************************************/
/* A whole tag selector is needed in order to
/* render a button with mat-button attribute.
/* But we won't be able to use esn-button on <a> tags
/* https://github.com/angular/angular/issues/8785
/*****************************************************/
export class EsnSlideToggle {
    constructor() {
        this.disabled = false;
        this.required = false;
        this.change = new EventEmitter();
        this.toggleChange = new EventEmitter();
        this.onChangeSub = new Subscription();
        this.onChange = () => { };
        this.onTouch = () => { };
        this.control = new FormControl([false, null]);
    }
    set background(value) {
        this._background = value;
        this.color = value;
    }
    get background() {
        return this._background;
    }
    set color(value) {
        this._color = value;
    }
    get color() {
        return this._color;
    }
    ngOnInit() {
        this.onChangeSub.add(this.control.valueChanges.subscribe((val) => {
            this.onChange(val);
        }));
    }
    ngOnChanges(changes) {
        console.log({ changes });
        if (!!changes['disabled']) {
            this.updateDisableState();
        }
    }
    writeValue(value) {
        this.control.setValue(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(onTouched) {
        this.onTouch = onTouched;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.updateDisableState();
    }
    updateDisableState() {
        if (this.disabled) {
            this.control.disable();
        }
        else {
            this.control.enable();
        }
    }
    processBooleanInputs() {
        // In order to be able to use them like that: <esn-input readonly></esn-input>
        this.disabled = this.disabled || this.disabled === '';
        this.required = this.required || this.required === '';
    }
    ngOnDestroy() {
        this.onChangeSub.unsubscribe();
    }
}
EsnSlideToggle.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSlideToggle, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnSlideToggle.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnSlideToggle, selector: "esn-slide-toggle", inputs: { checked: "checked", disabled: "disabled", required: "required", labelPosition: "labelPosition", id: "id", background: "background", color: "color" }, outputs: { change: "change", toggleChange: "toggleChange" }, host: { properties: { "class.esn-slide-toggle-disabled": "disabled", "class.esn-slide-toggle-primary": "_color === 'primary'", "class.esn-slide-toggle-accent": "_color === 'accent'", "class.esn-slide-toggle-success": "_color === 'success'", "class.esn-slide-toggle-error": "_color === 'error'", "class.esn-slide-toggle-warning": "_color === 'warning'", "class.esn-slide-toggle-info": "_color === 'info'", "class.esn-slide-toggle-neutral": "_color === 'neutral'", "class.esn-slide-toggle-background-primary": "_background === 'primary'", "class.esn-slide-toggle-background-accent": "_background === 'accent'", "class.esn-slide-toggle-background-success": "_background === 'success'", "class.esn-slide-toggle-background-error": "_background === 'error'", "class.esn-slide-toggle-background-warning": "_background === 'warning'", "class.esn-slide-toggle-background-info": "_background === 'info'", "class.esn-slide-toggle-background-neutral": "_background === 'neutral'", "class.esn-slide-toggle-label-before": "labelPosition === 'before'", "class.esn-slide-toggle-label-after": "labelPosition === 'after'" }, classAttribute: "esn-slide-toggle" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: EsnSlideToggle,
            multi: true,
        },
    ], usesOnChanges: true, ngImport: i0, template: "\r\n    <mat-slide-toggle\r\n      [formControl]=\"control\"     \r\n      [checked]=\"checked\"\r\n      [required]=\"!!required\"\r\n      [labelPosition]=\"labelPosition\"\r\n      [id]=\"id\"\r\n      (change)=\"change.emit($event)\"\r\n      (toggleChange)=\"toggleChange.emit($event)\"\r\n    >\r\n      <ng-content class=\"label\" select=\"[label]\"></ng-content>\r\n      <ng-content class=\"subtitle\" select=\"[subtitle]\"></ng-content>\r\n      <ng-content></ng-content>\r\n    </mat-slide-toggle>\r\n", styles: [":host.esn-slide-toggle{display:inline-block}:host.esn-slide-toggle:not(:last-child){margin-bottom:1rem}:host.esn-slide-toggle ::ng-deep .mdc-form-field{align-items:start}:host.esn-slide-toggle ::ng-deep .mdc-form-field label{font-size:1rem;line-height:1.5rem;font-weight:500;margin-top:0}:host.esn-slide-toggle ::ng-deep .mdc-form-field button:first-child{margin-top:.5rem}:host.esn-slide-toggle ::ng-deep [label]{font-size:1rem;line-height:1.5rem;font-weight:500;display:inline-flex;align-items:center}:host.esn-slide-toggle ::ng-deep [label]:not(:last-child):not(:empty){margin-bottom:.25rem}:host.esn-slide-toggle ::ng-deep [label].esn-checkbox-label-sm{font-size:.875rem;line-height:1.25rem;font-weight:500}:host.esn-slide-toggle ::ng-deep [label] .esn-badge{margin-left:1rem}:host.esn-slide-toggle ::ng-deep [subtitle]{font-size:.875rem;line-height:1.25rem;font-weight:400}:host.esn-slide-toggle ::ng-deep [subtitle]:not(:last-child):not(:empty){margin-bottom:1rem}:host.esn-slide-toggle-label-before ::ng-deep .mdc-form-field label{padding-right:.75rem}:host.esn-slide-toggle-label-after ::ng-deep .mdc-form-field label{padding-left:.75rem}\n"], dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.MatSlideToggleRequiredValidator, selector: "mat-slide-toggle[required][formControlName],             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]" }, { kind: "component", type: i2.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSlideToggle, decorators: [{
            type: Component,
            args: [{ selector: 'esn-slide-toggle', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: EsnSlideToggle,
                            multi: true,
                        },
                    ], host: {
                        class: 'esn-slide-toggle',
                        '[class.esn-slide-toggle-disabled]': `disabled`,
                        '[class.esn-slide-toggle-primary]': `_color === 'primary'`,
                        '[class.esn-slide-toggle-accent]': `_color === 'accent'`,
                        '[class.esn-slide-toggle-success]': `_color === 'success'`,
                        '[class.esn-slide-toggle-error]': `_color === 'error'`,
                        '[class.esn-slide-toggle-warning]': `_color === 'warning'`,
                        '[class.esn-slide-toggle-info]': `_color === 'info'`,
                        '[class.esn-slide-toggle-neutral]': `_color === 'neutral'`,
                        '[class.esn-slide-toggle-background-primary]': `_background === 'primary'`,
                        '[class.esn-slide-toggle-background-accent]': `_background === 'accent'`,
                        '[class.esn-slide-toggle-background-success]': `_background === 'success'`,
                        '[class.esn-slide-toggle-background-error]': `_background === 'error'`,
                        '[class.esn-slide-toggle-background-warning]': `_background === 'warning'`,
                        '[class.esn-slide-toggle-background-info]': `_background === 'info'`,
                        '[class.esn-slide-toggle-background-neutral]': `_background === 'neutral'`,
                        '[class.esn-slide-toggle-label-before]': `labelPosition === 'before'`,
                        '[class.esn-slide-toggle-label-after]': `labelPosition === 'after'`,
                    }, template: "\r\n    <mat-slide-toggle\r\n      [formControl]=\"control\"     \r\n      [checked]=\"checked\"\r\n      [required]=\"!!required\"\r\n      [labelPosition]=\"labelPosition\"\r\n      [id]=\"id\"\r\n      (change)=\"change.emit($event)\"\r\n      (toggleChange)=\"toggleChange.emit($event)\"\r\n    >\r\n      <ng-content class=\"label\" select=\"[label]\"></ng-content>\r\n      <ng-content class=\"subtitle\" select=\"[subtitle]\"></ng-content>\r\n      <ng-content></ng-content>\r\n    </mat-slide-toggle>\r\n", styles: [":host.esn-slide-toggle{display:inline-block}:host.esn-slide-toggle:not(:last-child){margin-bottom:1rem}:host.esn-slide-toggle ::ng-deep .mdc-form-field{align-items:start}:host.esn-slide-toggle ::ng-deep .mdc-form-field label{font-size:1rem;line-height:1.5rem;font-weight:500;margin-top:0}:host.esn-slide-toggle ::ng-deep .mdc-form-field button:first-child{margin-top:.5rem}:host.esn-slide-toggle ::ng-deep [label]{font-size:1rem;line-height:1.5rem;font-weight:500;display:inline-flex;align-items:center}:host.esn-slide-toggle ::ng-deep [label]:not(:last-child):not(:empty){margin-bottom:.25rem}:host.esn-slide-toggle ::ng-deep [label].esn-checkbox-label-sm{font-size:.875rem;line-height:1.25rem;font-weight:500}:host.esn-slide-toggle ::ng-deep [label] .esn-badge{margin-left:1rem}:host.esn-slide-toggle ::ng-deep [subtitle]{font-size:.875rem;line-height:1.25rem;font-weight:400}:host.esn-slide-toggle ::ng-deep [subtitle]:not(:last-child):not(:empty){margin-bottom:1rem}:host.esn-slide-toggle-label-before ::ng-deep .mdc-form-field label{padding-right:.75rem}:host.esn-slide-toggle-label-after ::ng-deep .mdc-form-field label{padding-left:.75rem}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], id: [{
                type: Input
            }], background: [{
                type: Input
            }], color: [{
                type: Input
            }], change: [{
                type: Output
            }], toggleChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxXQUFXLEVBQ1gsaUJBQWlCLEdBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQWNwQyx1REFBdUQ7QUFDdkQ7Ozs7dURBSXVEO0FBa0N2RCxNQUFNLE9BQU8sY0FBYztJQW9DekI7UUFoQ1MsYUFBUSxHQUFzQixLQUFLLENBQUM7UUFDcEMsYUFBUSxHQUFzQixLQUFLLENBQUM7UUFxQm5DLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRzdELGdCQUFXLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsYUFBUSxHQUFRLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUN6QixZQUFPLEdBQVEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBR3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBOUJELElBQ0ksVUFBVSxDQUFDLEtBQTBCO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQ0ksS0FBSyxDQUFDLEtBQTBCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQWdCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxTQUFtQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFTSxvQkFBb0I7UUFDekIsOEVBQThFO1FBQzlFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7OzRHQXhGVSxjQUFjO2dHQUFkLGNBQWMsaTRDQTdCZDtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsY0FBYztZQUMzQixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBRUYsK0NDN0NILGtnQkFjQTs0RkRxRGEsY0FBYztrQkFqQzFCLFNBQVM7K0JBQ0Usa0JBQWtCLGFBR2pCO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsZ0JBQWdCOzRCQUMzQixLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFFRixRQUNLO3dCQUNKLEtBQUssRUFBRSxrQkFBa0I7d0JBQ3pCLG1DQUFtQyxFQUFFLFVBQVU7d0JBQy9DLGtDQUFrQyxFQUFFLHNCQUFzQjt3QkFDMUQsaUNBQWlDLEVBQUUscUJBQXFCO3dCQUN4RCxrQ0FBa0MsRUFBRSxzQkFBc0I7d0JBQzFELGdDQUFnQyxFQUFFLG9CQUFvQjt3QkFDdEQsa0NBQWtDLEVBQUUsc0JBQXNCO3dCQUMxRCwrQkFBK0IsRUFBRSxtQkFBbUI7d0JBQ3BELGtDQUFrQyxFQUFFLHNCQUFzQjt3QkFDMUQsNkNBQTZDLEVBQUUsMkJBQTJCO3dCQUMxRSw0Q0FBNEMsRUFBRSwwQkFBMEI7d0JBQ3hFLDZDQUE2QyxFQUFFLDJCQUEyQjt3QkFDMUUsMkNBQTJDLEVBQUUseUJBQXlCO3dCQUN0RSw2Q0FBNkMsRUFBRSwyQkFBMkI7d0JBQzFFLDBDQUEwQyxFQUFFLHdCQUF3Qjt3QkFDcEUsNkNBQTZDLEVBQUUsMkJBQTJCO3dCQUMxRSx1Q0FBdUMsRUFBRSw0QkFBNEI7d0JBQ3JFLHNDQUFzQyxFQUFFLDJCQUEyQjtxQkFDcEU7MEVBS1EsT0FBTztzQkFBZixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFFRixVQUFVO3NCQURiLEtBQUs7Z0JBVUYsS0FBSztzQkFEUixLQUFLO2dCQVNJLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxZQUFZO3NCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5leHBvcnQgdHlwZSBFc25CdXR0b25TaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcyeGwnIHwgdW5kZWZpbmVkO1xyXG5leHBvcnQgdHlwZSBFc25TbGlkZVRvZ2dsZUNvbG9yID1cclxuICB8ICdwcmltYXJ5J1xyXG4gIHwgJ2FjY2VudCdcclxuICB8ICdzdWNjZXNzJ1xyXG4gIHwgJ2Vycm9yJ1xyXG4gIHwgJ3dhcm5pbmcnXHJcbiAgfCAnaW5mbydcclxuICB8ICduZXV0cmFsJ1xyXG4gIHwgdW5kZWZpbmVkO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiBBIHdob2xlIHRhZyBzZWxlY3RvciBpcyBuZWVkZWQgaW4gb3JkZXIgdG9cclxuLyogcmVuZGVyIGEgYnV0dG9uIHdpdGggbWF0LWJ1dHRvbiBhdHRyaWJ1dGUuXHJcbi8qIEJ1dCB3ZSB3b24ndCBiZSBhYmxlIHRvIHVzZSBlc24tYnV0dG9uIG9uIDxhPiB0YWdzXHJcbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzg3ODVcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1zbGlkZS10b2dnbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZS10b2dnbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IEVzblNsaWRlVG9nZ2xlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnZXNuLXNsaWRlLXRvZ2dsZScsXHJcbiAgICAnW2NsYXNzLmVzbi1zbGlkZS10b2dnbGUtZGlzYWJsZWRdJzogYGRpc2FibGVkYCxcclxuICAgICdbY2xhc3MuZXNuLXNsaWRlLXRvZ2dsZS1wcmltYXJ5XSc6IGBfY29sb3IgPT09ICdwcmltYXJ5J2AsXHJcbiAgICAnW2NsYXNzLmVzbi1zbGlkZS10b2dnbGUtYWNjZW50XSc6IGBfY29sb3IgPT09ICdhY2NlbnQnYCxcclxuICAgICdbY2xhc3MuZXNuLXNsaWRlLXRvZ2dsZS1zdWNjZXNzXSc6IGBfY29sb3IgPT09ICdzdWNjZXNzJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1zbGlkZS10b2dnbGUtZXJyb3JdJzogYF9jb2xvciA9PT0gJ2Vycm9yJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1zbGlkZS10b2dnbGUtd2FybmluZ10nOiBgX2NvbG9yID09PSAnd2FybmluZydgLFxyXG4gICAgJ1tjbGFzcy5lc24tc2xpZGUtdG9nZ2xlLWluZm9dJzogYF9jb2xvciA9PT0gJ2luZm8nYCxcclxuICAgICdbY2xhc3MuZXNuLXNsaWRlLXRvZ2dsZS1uZXV0cmFsXSc6IGBfY29sb3IgPT09ICduZXV0cmFsJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1zbGlkZS10b2dnbGUtYmFja2dyb3VuZC1wcmltYXJ5XSc6IGBfYmFja2dyb3VuZCA9PT0gJ3ByaW1hcnknYCxcclxuICAgICdbY2xhc3MuZXNuLXNsaWRlLXRvZ2dsZS1iYWNrZ3JvdW5kLWFjY2VudF0nOiBgX2JhY2tncm91bmQgPT09ICdhY2NlbnQnYCxcclxuICAgICdbY2xhc3MuZXNuLXNsaWRlLXRvZ2dsZS1iYWNrZ3JvdW5kLXN1Y2Nlc3NdJzogYF9iYWNrZ3JvdW5kID09PSAnc3VjY2VzcydgLFxyXG4gICAgJ1tjbGFzcy5lc24tc2xpZGUtdG9nZ2xlLWJhY2tncm91bmQtZXJyb3JdJzogYF9iYWNrZ3JvdW5kID09PSAnZXJyb3InYCxcclxuICAgICdbY2xhc3MuZXNuLXNsaWRlLXRvZ2dsZS1iYWNrZ3JvdW5kLXdhcm5pbmddJzogYF9iYWNrZ3JvdW5kID09PSAnd2FybmluZydgLFxyXG4gICAgJ1tjbGFzcy5lc24tc2xpZGUtdG9nZ2xlLWJhY2tncm91bmQtaW5mb10nOiBgX2JhY2tncm91bmQgPT09ICdpbmZvJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1zbGlkZS10b2dnbGUtYmFja2dyb3VuZC1uZXV0cmFsXSc6IGBfYmFja2dyb3VuZCA9PT0gJ25ldXRyYWwnYCxcclxuICAgICdbY2xhc3MuZXNuLXNsaWRlLXRvZ2dsZS1sYWJlbC1iZWZvcmVdJzogYGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnYCxcclxuICAgICdbY2xhc3MuZXNuLXNsaWRlLXRvZ2dsZS1sYWJlbC1hZnRlcl0nOiBgbGFiZWxQb3NpdGlvbiA9PT0gJ2FmdGVyJ2AsXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuU2xpZGVUb2dnbGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIF9jb2xvcjogRXNuU2xpZGVUb2dnbGVDb2xvcjtcclxuICBfYmFja2dyb3VuZDogRXNuU2xpZGVUb2dnbGVDb2xvcjsgXHJcbiAgQElucHV0KCkgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBib29sZWFuIHwgc3RyaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVxdWlyZWQ/OiBib29sZWFuIHwgc3RyaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbGFiZWxQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInO1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmdcclxuICBASW5wdXQoKVxyXG4gIHNldCBiYWNrZ3JvdW5kKHZhbHVlOiBFc25TbGlkZVRvZ2dsZUNvbG9yKSB7XHJcbiAgICB0aGlzLl9iYWNrZ3JvdW5kID0gdmFsdWU7XHJcbiAgICB0aGlzLmNvbG9yID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBiYWNrZ3JvdW5kKCl7XHJcbiAgICByZXR1cm4gdGhpcy5fYmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbG9yKHZhbHVlOiBFc25TbGlkZVRvZ2dsZUNvbG9yKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCl7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSB0b2dnbGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHB1YmxpYyBjb250cm9sOiBGb3JtQ29udHJvbDtcclxuICBwdWJsaWMgb25DaGFuZ2VTdWI6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICBcclxuXHJcbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHt9O1xyXG4gIG9uVG91Y2g6IGFueSA9ICgpID0+IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChbZmFsc2UsIG51bGxdKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZVN1Yi5hZGQoXHJcbiAgICAgIHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygge2NoYW5nZXN9KVxyXG4gICAgaWYgKCEhY2hhbmdlc1snZGlzYWJsZWQnXSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVTdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChvblRvdWNoZWQ6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLm9uVG91Y2ggPSBvblRvdWNoZWQ7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy51cGRhdGVEaXNhYmxlU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc2FibGVTdGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJvY2Vzc0Jvb2xlYW5JbnB1dHMoKSB7XHJcbiAgICAvLyBJbiBvcmRlciB0byBiZSBhYmxlIHRvIHVzZSB0aGVtIGxpa2UgdGhhdDogPGVzbi1pbnB1dCByZWFkb25seT48L2Vzbi1pbnB1dD5cclxuICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkIHx8IHRoaXMuZGlzYWJsZWQgPT09ICcnO1xyXG4gICAgdGhpcy5yZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQgfHwgdGhpcy5yZXF1aXJlZCA9PT0gJyc7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25DaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiXHJcbiAgICA8bWF0LXNsaWRlLXRvZ2dsZVxyXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiICAgICBcclxuICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgICAgIFtyZXF1aXJlZF09XCIhIXJlcXVpcmVkXCJcclxuICAgICAgW2xhYmVsUG9zaXRpb25dPVwibGFiZWxQb3NpdGlvblwiXHJcbiAgICAgIFtpZF09XCJpZFwiXHJcbiAgICAgIChjaGFuZ2UpPVwiY2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICh0b2dnbGVDaGFuZ2UpPVwidG9nZ2xlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICAgIDxuZy1jb250ZW50IGNsYXNzPVwibGFiZWxcIiBzZWxlY3Q9XCJbbGFiZWxdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8bmctY29udGVudCBjbGFzcz1cInN1YnRpdGxlXCIgc2VsZWN0PVwiW3N1YnRpdGxlXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4iXX0=