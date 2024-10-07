import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { NG_VALUE_ACCESSOR, } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/checkbox";
export class EsnCheckboxChange {
}
const COLORS_MAP = {
    primary: 'primary',
    accent: 'accent',
    error: 'warn',
    success: 'primary',
    neutral: 'primary', // a dark material palette that will be overridden by CSS
};
const DEFAULT_COLOR = 'primary';
export class EsnCheckboxComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.name = null;
        this.checked = false;
        this.required = false;
        this.disabled = false;
        this.indeterminate = false;
        this.disableRipple = false;
        this.labelPosition = 'after';
        this.change = new EventEmitter();
        this.indeterminateChange = new EventEmitter();
        this.form = this._formBuilder.group({
            control: this.checked,
        });
        this.onChangeSub = new Subscription();
        this._color = DEFAULT_COLOR;
        this._matColor = COLORS_MAP[DEFAULT_COLOR];
        this.onChange = () => { };
        this.onTouch = () => { };
    }
    set color(value) {
        this._color = value;
        this._matColor = COLORS_MAP[this._color];
    }
    get color() {
        return this._color;
    }
    ngOnChanges(changes) {
        if (!!changes['disabled']) {
            this.updateDisableState();
        }
        if (!!changes['checked'] && this.checked !== null) {
            this.form.controls['control'].setValue(this.checked);
        }
    }
    onChanges($event) {
        this.change.emit($event);
    }
    onIndeterminateChange($event) {
        this.indeterminateChange.emit($event);
    }
    writeValue(value) {
        if (!!value) {
            this.form.controls['control'].setValue(value);
        }
    }
    registerOnChange(fn) {
        this.onChangeSub.add(this.form.controls['control'].valueChanges.subscribe(fn));
    }
    registerOnTouched(onTouched) {
        this.onTouch = onTouched;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.updateDisableState();
    }
    updateDisableState() {
        this.disabled ? this.form.disable() : this.form.enable();
    }
}
EsnCheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnCheckboxComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
EsnCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnCheckboxComponent, selector: "esn-checkbox", inputs: { id: "id", name: "name", value: "value", checked: "checked", required: "required", disabled: "disabled", indeterminate: "indeterminate", disableRipple: "disableRipple", labelPosition: "labelPosition", color: "color", tabIndex: "tabIndex" }, outputs: { change: "change", indeterminateChange: "indeterminateChange" }, host: { properties: { "class.esn-checkbox-primary": "_color === 'primary'", "class.esn-checkbox-accent": "_color === 'accent'", "class.esn-checkbox-success": "_color === 'success'", "class.esn-checkbox-error": "_color === 'error'", "class.esn-checkbox-neutral": "_color === 'neutral'", "class.esn-checkbox-disabled": "disabled || null" }, classAttribute: "esn-checkbox" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: EsnCheckboxComponent,
            multi: true,
        },
    ], usesOnChanges: true, ngImport: i0, template: "<form [formGroup]=\"form\">\r\n  <mat-checkbox\r\n    formControlName=\"control\"\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [value]=\"value\"\r\n    [color]=\"_matColor\"\r\n    [tabIndex]=\"tabIndex\"\r\n    [checked]=\"checked\"\r\n    [required]=\"required\"\r\n    [indeterminate]=\"indeterminate\"\r\n    [labelPosition]=\"labelPosition\"\r\n    [disableRipple]=\"disableRipple\"\r\n    (change)=\"onChanges($event)\"\r\n    (indeterminateChange)=\"onIndeterminateChange($event)\"\r\n  >\r\n    <ng-content class=\"label\" select=\"[label]\"></ng-content>\r\n    <ng-content class=\"subtitle\" select=\"[subtitle]\"></ng-content>\r\n    <ng-content></ng-content>\r\n  </mat-checkbox>\r\n\r\n</form>\r\n", styles: [":host.esn-checkbox{display:inline-block}:host.esn-checkbox:not(:last-child){margin-bottom:1rem}:host.esn-checkbox ::ng-deep .mdc-form-field{align-items:start}:host.esn-checkbox ::ng-deep .mdc-form-field label{font-size:1rem;line-height:1.5rem;font-weight:500;margin-top:.5rem}:host.esn-checkbox ::ng-deep .mdc-form-field .mdc-checkbox__background{border-radius:4px}:host.esn-checkbox ::ng-deep [label]{font-size:1rem;line-height:1.5rem;font-weight:500;display:inline-flex;align-items:center}:host.esn-checkbox ::ng-deep [label]:not(:last-child):not(:empty){margin-bottom:.25rem}:host.esn-checkbox ::ng-deep [label].esn-checkbox-label-sm{font-size:.875rem;line-height:1.25rem;font-weight:500}:host.esn-checkbox ::ng-deep [label] .esn-badge{margin-left:1rem}:host.esn-checkbox ::ng-deep [subtitle]{font-size:.875rem;line-height:1.25rem;font-weight:400}:host.esn-checkbox ::ng-deep [subtitle]:not(:last-child):not(:empty){margin-bottom:1rem}:host.esn-checkbox-disabled ::ng-deep label{opacity:.5}\n"], dependencies: [{ kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i2.MatCheckboxRequiredValidator, selector: "mat-checkbox[required][formControlName],             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]" }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'esn-checkbox', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: EsnCheckboxComponent,
                            multi: true,
                        },
                    ], host: {
                        class: 'esn-checkbox',
                        '[class.esn-checkbox-primary]': `_color === 'primary'`,
                        '[class.esn-checkbox-accent]': `_color === 'accent'`,
                        '[class.esn-checkbox-success]': `_color === 'success'`,
                        '[class.esn-checkbox-error]': `_color === 'error'`,
                        '[class.esn-checkbox-neutral]': `_color === 'neutral'`,
                        '[class.esn-checkbox-disabled]': `disabled || null`,
                    }, template: "<form [formGroup]=\"form\">\r\n  <mat-checkbox\r\n    formControlName=\"control\"\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [value]=\"value\"\r\n    [color]=\"_matColor\"\r\n    [tabIndex]=\"tabIndex\"\r\n    [checked]=\"checked\"\r\n    [required]=\"required\"\r\n    [indeterminate]=\"indeterminate\"\r\n    [labelPosition]=\"labelPosition\"\r\n    [disableRipple]=\"disableRipple\"\r\n    (change)=\"onChanges($event)\"\r\n    (indeterminateChange)=\"onIndeterminateChange($event)\"\r\n  >\r\n    <ng-content class=\"label\" select=\"[label]\"></ng-content>\r\n    <ng-content class=\"subtitle\" select=\"[subtitle]\"></ng-content>\r\n    <ng-content></ng-content>\r\n  </mat-checkbox>\r\n\r\n</form>\r\n", styles: [":host.esn-checkbox{display:inline-block}:host.esn-checkbox:not(:last-child){margin-bottom:1rem}:host.esn-checkbox ::ng-deep .mdc-form-field{align-items:start}:host.esn-checkbox ::ng-deep .mdc-form-field label{font-size:1rem;line-height:1.5rem;font-weight:500;margin-top:.5rem}:host.esn-checkbox ::ng-deep .mdc-form-field .mdc-checkbox__background{border-radius:4px}:host.esn-checkbox ::ng-deep [label]{font-size:1rem;line-height:1.5rem;font-weight:500;display:inline-flex;align-items:center}:host.esn-checkbox ::ng-deep [label]:not(:last-child):not(:empty){margin-bottom:.25rem}:host.esn-checkbox ::ng-deep [label].esn-checkbox-label-sm{font-size:.875rem;line-height:1.25rem;font-weight:500}:host.esn-checkbox ::ng-deep [label] .esn-badge{margin-left:1rem}:host.esn-checkbox ::ng-deep [subtitle]{font-size:.875rem;line-height:1.25rem;font-weight:400}:host.esn-checkbox ::ng-deep [subtitle]:not(:last-child):not(:empty){margin-bottom:1rem}:host.esn-checkbox-disabled ::ng-deep label{opacity:.5}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { id: [{
                type: Input
            }], name: [{
                type: Input
            }], value: [{
                type: Input
            }], checked: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }], disableRipple: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], color: [{
                type: Input
            }], tabIndex: [{
                type: Input
            }], change: [{
                type: Output
            }], indeterminateChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBS0wsaUJBQWlCLEdBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQVdwQyxNQUFNLE9BQU8saUJBQWlCO0NBSzdCO0FBRUQsTUFBTSxVQUFVLEdBQThEO0lBQzVFLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxNQUFNO0lBQ2IsT0FBTyxFQUFFLFNBQVM7SUFDbEIsT0FBTyxFQUFFLFNBQVMsRUFBRSx5REFBeUQ7Q0FDOUUsQ0FBQztBQUNGLE1BQU0sYUFBYSxHQUFxQixTQUFTLENBQUM7QUF1QmxELE1BQU0sT0FBTyxvQkFBb0I7SUFpQy9CLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBL0JwQyxTQUFJLEdBQWtCLElBQUksQ0FBQztRQUUzQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixrQkFB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NEZEeUNhLG9CQUFvQjtrQkFyQmhDLFNBQVM7K0JBQ0UsY0FBYyxhQUdiO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsc0JBQXNCOzRCQUNqQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRixRQUNLO3dCQUNKLEtBQUssRUFBRSxjQUFjO3dCQUNyQiw4QkFBOEIsRUFBRSxzQkFBc0I7d0JBQ3RELDZCQUE2QixFQUFFLHFCQUFxQjt3QkFDcEQsOEJBQThCLEVBQUUsc0JBQXNCO3dCQUN0RCw0QkFBNEIsRUFBRSxvQkFBb0I7d0JBQ2xELDhCQUE4QixFQUFFLHNCQUFzQjt3QkFDdEQsK0JBQStCLEVBQUUsa0JBQWtCO3FCQUNwRDtrR0FHUSxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUVGLEtBQUs7c0JBRFIsS0FBSztnQkFRRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVJLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxtQkFBbUI7c0JBQTVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94Q2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQge1xyXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gIEZvcm1CdWlsZGVyLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1Hcm91cCxcclxuICBOR19WQUxVRV9BQ0NFU1NPUixcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxudHlwZSBNYXRDaGVja2JveENvbG9yID0gJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgfCB1bmRlZmluZWQ7XHJcbmV4cG9ydCB0eXBlIEVzbkNoZWNrYm94Q29sb3IgPVxyXG4gIHwgJ3ByaW1hcnknXHJcbiAgfCAnYWNjZW50J1xyXG4gIHwgJ3N1Y2Nlc3MnXHJcbiAgfCAnZXJyb3InXHJcbiAgfCAnbmV1dHJhbCdcclxuICB8IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBFc25DaGVja2JveENoYW5nZSB7XHJcbiAgLyoqIFRoZSBzb3VyY2UgY2hlY2tib3ggb2YgdGhlIGV2ZW50LiAqL1xyXG4gIHNvdXJjZTogRXNuQ2hlY2tib3hDb21wb25lbnQ7XHJcbiAgLyoqIFRoZSBuZXcgYGNoZWNrZWRgIHZhbHVlIG9mIHRoZSBjaGVja2JveC4gKi9cclxuICBjaGVja2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBDT0xPUlNfTUFQOiB7IFtrZXkgaW4gTWF0Q2hlY2tib3hDb2xvciBhcyBzdHJpbmddOiBNYXRDaGVja2JveENvbG9yIH0gPSB7XHJcbiAgcHJpbWFyeTogJ3ByaW1hcnknLFxyXG4gIGFjY2VudDogJ2FjY2VudCcsXHJcbiAgZXJyb3I6ICd3YXJuJyxcclxuICBzdWNjZXNzOiAncHJpbWFyeScsIC8vIGEgZGFyayBtYXRlcmlhbCBwYWxldHRlIHRoYXQgd2lsbCBiZSBvdmVycmlkZGVuIGJ5IENTU1xyXG4gIG5ldXRyYWw6ICdwcmltYXJ5JywgLy8gYSBkYXJrIG1hdGVyaWFsIHBhbGV0dGUgdGhhdCB3aWxsIGJlIG92ZXJyaWRkZW4gYnkgQ1NTXHJcbn07XHJcbmNvbnN0IERFRkFVTFRfQ09MT1I6IEVzbkNoZWNrYm94Q29sb3IgPSAncHJpbWFyeSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1jaGVja2JveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IEVzbkNoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2Vzbi1jaGVja2JveCcsXHJcbiAgICAnW2NsYXNzLmVzbi1jaGVja2JveC1wcmltYXJ5XSc6IGBfY29sb3IgPT09ICdwcmltYXJ5J2AsXHJcbiAgICAnW2NsYXNzLmVzbi1jaGVja2JveC1hY2NlbnRdJzogYF9jb2xvciA9PT0gJ2FjY2VudCdgLFxyXG4gICAgJ1tjbGFzcy5lc24tY2hlY2tib3gtc3VjY2Vzc10nOiBgX2NvbG9yID09PSAnc3VjY2VzcydgLFxyXG4gICAgJ1tjbGFzcy5lc24tY2hlY2tib3gtZXJyb3JdJzogYF9jb2xvciA9PT0gJ2Vycm9yJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1jaGVja2JveC1uZXV0cmFsXSc6IGBfY29sb3IgPT09ICduZXV0cmFsJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1jaGVja2JveC1kaXNhYmxlZF0nOiBgZGlzYWJsZWQgfHwgbnVsbGAsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkNoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjaGVja2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlUmlwcGxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbGFiZWxQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInID0gJ2FmdGVyJztcclxuICBASW5wdXQoKVxyXG4gIHNldCBjb2xvcih2YWx1ZTogRXNuQ2hlY2tib3hDb2xvcikge1xyXG4gICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcclxuICAgIHRoaXMuX21hdENvbG9yID0gQ09MT1JTX01BUFt0aGlzLl9jb2xvciBhcyBzdHJpbmddO1xyXG4gIH1cclxuICBnZXQgY29sb3IoKTogRXNuQ2hlY2tib3hDb2xvciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIHRhYkluZGV4OiBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgaW5kZXRlcm1pbmF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBmb3JtOiBGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICBjb250cm9sOiB0aGlzLmNoZWNrZWQsXHJcbiAgfSk7XHJcblxyXG4gIHB1YmxpYyBvbkNoYW5nZVN1YjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gIHB1YmxpYyBfY29sb3I6IEVzbkNoZWNrYm94Q29sb3IgPSBERUZBVUxUX0NPTE9SO1xyXG4gIHB1YmxpYyBfbWF0Q29sb3I6IE1hdENoZWNrYm94Q29sb3IgPSBDT0xPUlNfTUFQW0RFRkFVTFRfQ09MT1IgYXMgc3RyaW5nXTtcclxuXHJcbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHt9O1xyXG4gIG9uVG91Y2g6IGFueSA9ICgpID0+IHt9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICghIWNoYW5nZXNbJ2Rpc2FibGVkJ10pIHtcclxuICAgICAgdGhpcy51cGRhdGVEaXNhYmxlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoISFjaGFuZ2VzWydjaGVja2VkJ10gJiYgdGhpcy5jaGVja2VkICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29udHJvbCddLnNldFZhbHVlKHRoaXMuY2hlY2tlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZXMoJGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uSW5kZXRlcm1pbmF0ZUNoYW5nZSgkZXZlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaW5kZXRlcm1pbmF0ZUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICghIXZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29udHJvbCddLnNldFZhbHVlKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZVN1Yi5hZGQoXHJcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29udHJvbCddLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZm4pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQob25Ub3VjaGVkOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy5vblRvdWNoID0gb25Ub3VjaGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMudXBkYXRlRGlzYWJsZVN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRGlzYWJsZVN0YXRlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA/IHRoaXMuZm9ybS5kaXNhYmxlKCkgOiB0aGlzLmZvcm0uZW5hYmxlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gIDxtYXQtY2hlY2tib3hcclxuICAgIGZvcm1Db250cm9sTmFtZT1cImNvbnRyb2xcIlxyXG4gICAgW2lkXT1cImlkXCJcclxuICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgIFtjb2xvcl09XCJfbWF0Q29sb3JcIlxyXG4gICAgW3RhYkluZGV4XT1cInRhYkluZGV4XCJcclxuICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxyXG4gICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgIFtpbmRldGVybWluYXRlXT1cImluZGV0ZXJtaW5hdGVcIlxyXG4gICAgW2xhYmVsUG9zaXRpb25dPVwibGFiZWxQb3NpdGlvblwiXHJcbiAgICBbZGlzYWJsZVJpcHBsZV09XCJkaXNhYmxlUmlwcGxlXCJcclxuICAgIChjaGFuZ2UpPVwib25DaGFuZ2VzKCRldmVudClcIlxyXG4gICAgKGluZGV0ZXJtaW5hdGVDaGFuZ2UpPVwib25JbmRldGVybWluYXRlQ2hhbmdlKCRldmVudClcIlxyXG4gID5cclxuICAgIDxuZy1jb250ZW50IGNsYXNzPVwibGFiZWxcIiBzZWxlY3Q9XCJbbGFiZWxdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPG5nLWNvbnRlbnQgY2xhc3M9XCJzdWJ0aXRsZVwiIHNlbGVjdD1cIltzdWJ0aXRsZV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9tYXQtY2hlY2tib3g+XHJcblxyXG48L2Zvcm0+XHJcbiJdfQ==