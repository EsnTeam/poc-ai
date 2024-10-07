import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, EventEmitter, Inject, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from "@angular/material/form-field";
import { MAT_OPTION_PARENT_COMPONENT } from "@angular/material/core";
import { FormControl, NG_VALUE_ACCESSOR, NgControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { matSelectAnimations } from "@angular/material/select";
import { EsnOption } from "../option/option.component";
import { EsnOptionGroup } from "../option-group/option-group.component";
import { EsnSelectTrigger } from "../select-trigger/select-trigger.component";
import { EsnUtils } from '../../../utils/public-api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/cdk/overlay";
export class EsnSelect {
    constructor(_injector, _parentFormField, cdr, elementRef) {
        this._injector = _injector;
        this._parentFormField = _parentFormField;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.appearance = 'outline';
        this.disabled = false;
        this.required = false;
        this.multiple = false;
        this.hint = '';
        this.size = 'sm';
        this.theme = null;
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.openedChange = new EventEmitter();
        this.onChangeSub = new Subscription();
        this.errorsList = [];
        this.onChange = () => {
        };
        this.onTouch = () => {
        };
        this.control = new FormControl(['', null]);
    }
    ngOnChanges(changes) {
        if (!!changes['disabled']) {
            this.updateDisableState();
        }
        if (typeof this.error === 'object') {
            const err = EsnUtils.cloneDeep(this.error);
            this.defaultError = err['default'];
            delete err.default;
            this.errorsList = Object.entries(err);
        }
        else {
            this.defaultError = this.error;
        }
    }
    ngOnInit() {
        this.handleMatAppearance();
        this.onChangeSub.add(this.control.valueChanges.subscribe((val) => {
            this.onChange(val);
            this.assignErrors();
            this.computeErrorMessage();
        }));
        try {
            this.parentControl = this._injector.get(NgControl);
        }
        catch (e) {
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
    handleMatAppearance() {
        if (this.appearance === 'underline') {
            this._matAppearance = 'fill';
        }
        else if (this.appearance === 'fill') {
            this._matAppearance = 'outline';
        }
        else {
            this._matAppearance = this.appearance;
        }
    }
    updateDisableState() {
        if (this.disabled) {
            this.control.disable();
        }
        else {
            this.control.enable();
        }
    }
    assignErrors() {
        if (!this.parentControl) {
            return;
        }
        const localErrs = this.control?.errors;
        const parentErrors = this.parentControl?.control?.errors;
        if (!!localErrs || !!parentErrors) {
            const errors = {};
            Object.assign(errors, localErrs || {}, parentErrors || {});
            this.control?.setErrors(errors);
        }
    }
    computeErrorMessage() {
        const errObj = this.control?.errors;
        if (!errObj) {
            this.errorMessage = '';
        }
        else {
            const errs = Object.keys(errObj).filter((key) => !!errObj[key]);
            this.errorMessage = (this.errorsList.find((e) => errs.includes(e[0])) || [
                null,
                this.defaultError,
            ])[1];
        }
    }
    ngOnDestroy() {
        this.onChangeSub.unsubscribe();
        if (!!this.observer) {
            this.observer.disconnect();
        }
    }
    ngAfterViewInit() {
        this.initData();
        this.subscribeToChanges();
        if (this._matAppearance === 'outline' && this.label) {
            const notchClass = '.mdc-notched-outline__notch';
            this.observer = new ResizeObserver(() => {
                this.formField._refreshOutlineNotchWidth();
                const notchElm = this.elementRef.nativeElement.querySelector(notchClass);
                notchElm.style.width = this._getNotchWidth();
            });
            const labelClass = '.mdc-floating-label';
            this.observer.observe(this.elementRef.nativeElement.querySelector(labelClass));
        }
    }
    _selectionChange($event) {
        this.selectionChange.emit($event.value);
    }
    _openedChange($event) {
        this.openedChange.emit($event);
    }
    subscribeToChanges() {
        this.onChangeSub.add(this.optionsList.changes.subscribe((EsnOptions) => {
            this.options = EsnOptions.map(EsnOption => {
                return { value: EsnOption.value, viewValue: EsnOption.viewValue, disabled: EsnOption.disabled };
            });
        }));
        this.onChangeSub.add(this.optionGroupsList.changes.subscribe((EsnOptionGroups) => {
            this.optionGroups = EsnOptionGroups.map(EsnOptionGroup => {
                return { label: EsnOptionGroup.label, options: EsnOptionGroup.options, disabled: EsnOptionGroup.disabled, viewValue: EsnOptionGroup.viewValue };
            });
        }));
    }
    initData() {
        if (!this.optionGroupsList || !this.optionGroupsList.length) {
            this.options = this.optionsList.map(EsnOption => {
                return { value: EsnOption.value, viewValue: EsnOption.viewValue, disabled: EsnOption.disabled };
            });
        }
        else {
            this.optionGroups = this.optionGroupsList.map(EsnOptionGroup => {
                return { label: EsnOptionGroup.label, options: EsnOptionGroup.options, disabled: EsnOptionGroup.disabled, viewValue: EsnOptionGroup.viewValue };
            });
        }
        this.cdr.detectChanges();
    }
    _getNotchWidth() {
        if (this.formField._notchedOutline?.open) {
            const NOTCH_ELEMENT_PADDING = 8;
            const NOTCH_ELEMENT_BORDER = 1;
            return this.formField._labelWidth > 0
                ? `calc(${this.formField._labelWidth}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + ${NOTCH_ELEMENT_PADDING + NOTCH_ELEMENT_BORDER}px)`
                : '0px';
        }
        return null;
    }
}
EsnSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelect, deps: [{ token: i0.Injector }, { token: MAT_FORM_FIELD, optional: true }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
EsnSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnSelect, selector: "esn-select", inputs: { disabled: "disabled", disableRipple: "disableRipple", tabIndex: "tabIndex", appearance: "appearance", label: "label", placeholder: "placeholder", required: "required", multiple: "multiple", hint: "hint", error: "error", size: "size", theme: "theme" }, outputs: { focus: "focus", blur: "blur", selectionChange: "selectionChange", openedChange: "openedChange" }, host: { properties: { "class.esn-select-sm": "size === 'sm'", "class.esn-select-md": "size === 'md'", "class.esn-select-fill": "appearance === 'fill'", "class.esn-select-outline": "appearance === 'outline'", "class.esn-select-underline": "appearance === 'underline'", "class.esn-select-dark": "theme === 'dark'", "class.esn-select-light": "theme === 'light'" }, classAttribute: "esn-select" }, providers: [
        { provide: MatFormFieldControl, useExisting: EsnSelect },
        { provide: MAT_OPTION_PARENT_COMPONENT, useExisting: EsnSelect },
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: EsnSelect,
            multi: true,
        },
    ], queries: [{ propertyName: "customTrigger", first: true, predicate: EsnSelectTrigger, descendants: true }, { propertyName: "optionsList", predicate: EsnOption, descendants: true }, { propertyName: "optionGroupsList", predicate: EsnOptionGroup, descendants: true }], viewQueries: [{ propertyName: "formField", first: true, predicate: MatFormField, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<mat-form-field [appearance]=\"_matAppearance\">\r\n  <mat-label *ngIf=\"label\">{{label}}</mat-label>\r\n  <div cdk-overlay-origin>\r\n    <mat-select\r\n      [required]=\"required\"\r\n      [placeholder]=\"placeholder\"\r\n      [multiple]=\"multiple\"\r\n      [formControl]=\"control\"\r\n      [disableRipple]=\"disableRipple\"\r\n      [tabIndex]=\"tabIndex\"\r\n      (selectionChange)=\"_selectionChange($event)\"\r\n      (openedChange)=\"_openedChange($event)\"\r\n      (focus)=\"focus.emit()\"\r\n      (blur)=\"blur.emit()\">\r\n      <mat-select-trigger *ngIf=\"this.customTrigger?.viewValue\" [class]=\"this.customTrigger.viewValue?.elementRef?.nativeElement?.parentNode?.className\">\r\n        <template [ngTemplateOutlet]=\"this.customTrigger.viewValue\" [ngTemplateOutletContext]=\"{}\"></template>\r\n      </mat-select-trigger>\r\n      <ng-container *ngIf=\"!this.optionGroupsList || !this.optionGroupsList.length\">\r\n        <mat-option class=\"esn-option-{{size}}\" *ngFor=\"let opt of options\" [value]=\"opt.value\"\r\n                    [disabled]=\"opt.disabled\"\r\n                    [class]=\"opt.viewValue?.elementRef?.nativeElement?.parentNode?.className\">\r\n          <template [ngTemplateOutlet]=\"opt.viewValue\" [ngTemplateOutletContext]=\"{}\"></template>\r\n        </mat-option>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!!this.optionGroupsList?.length\">\r\n        <mat-optgroup class=\"esn-option-{{size}}\" *ngFor=\"let optGrp of optionGroups\" [label]=\"optGrp.label\"\r\n                      [disabled]=\"optGrp.disabled\"\r\n                      [class]=\"optGrp.viewValue?.elementRef?.nativeElement?.parentNode?.className\">\r\n          <mat-option class=\"esn-option-{{size}}\" *ngFor=\"let opt of optGrp.options\" [value]=\"opt.value\"\r\n                      [disabled]=\"opt.disabled\"\r\n                      [class]=\"opt.viewValue?.elementRef?.nativeElement?.parentNode?.className\">\r\n            <template [ngTemplateOutlet]=\"opt.viewValue\" [ngTemplateOutletContext]=\"{}\"></template>\r\n          </mat-option>\r\n        </mat-optgroup>\r\n      </ng-container>\r\n    </mat-select>\r\n  </div>\r\n  <mat-hint *ngIf=\"!!hint\">{{hint}}</mat-hint>\r\n  <mat-error>{{ errorMessage }}</mat-error>\r\n</mat-form-field>\r\n\r\n", styles: [".esn-select .mat-mdc-select-value{z-index:1}.esn-select.esn-select-outline{border-top:5px solid rgba(0,0,0,0)}.esn-select ::ng-deep .mat-mdc-form-field-infix{z-index:1}.esn-select .mat-mdc-select-arrow{z-index:2}.esn-select.esn-select-sm.esn-select-outline .mat-mdc-form-field-infix{min-height:3rem;padding-top:.75rem;padding-bottom:.75rem}.esn-select.esn-select-sm.esn-select-outline .mat-mdc-floating-label{top:1.3rem}.esn-select.esn-select-sm.esn-select-outline .mdc-floating-label--float-above{font-size:.875rem;line-height:1.25rem;font-weight:400;--mat-mdc-form-field-label-transform: translateY(-28px) scale( var(--mat-mdc-form-field-floating-label-scale, .75) ) !important}.esn-select.esn-select-sm.esn-select-fill .mat-mdc-form-field-infix{min-height:3rem;padding-top:.75rem;padding-bottom:.75rem}.esn-select.esn-select-sm.esn-select-fill .mat-mdc-floating-label{top:1.3rem}.esn-select.esn-select-sm.esn-select-fill .mdc-floating-label--float-above{font-size:.875rem;line-height:1.25rem;font-weight:400;--mat-mdc-form-field-label-transform: translateY(-28px) scale( var(--mat-mdc-form-field-floating-label-scale, .75) ) !important}.esn-select.esn-select-sm.esn-select-underline .mat-mdc-form-field-infix{min-height:3rem;padding-top:1.1rem;padding-bottom:.4rem}.esn-select.esn-select-sm.esn-select-underline .mat-mdc-floating-label{top:1.5rem}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "directive", type: i3.MatSelectTrigger, selector: "mat-select-trigger" }, { kind: "component", type: i4.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i4.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i6.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }], animations: [matSelectAnimations.transformPanel], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelect, decorators: [{
            type: Component,
            args: [{ selector: 'esn-select', inputs: ['disabled', 'disableRipple', 'tabIndex'], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [matSelectAnimations.transformPanel], providers: [
                        { provide: MatFormFieldControl, useExisting: EsnSelect },
                        { provide: MAT_OPTION_PARENT_COMPONENT, useExisting: EsnSelect },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: EsnSelect,
                            multi: true,
                        },
                    ], host: {
                        class: 'esn-select',
                        '[class.esn-select-sm]': `size === 'sm'`,
                        '[class.esn-select-md]': `size === 'md'`,
                        '[class.esn-select-fill]': `appearance === 'fill'`,
                        '[class.esn-select-outline]': `appearance === 'outline'`,
                        '[class.esn-select-underline]': `appearance === 'underline'`,
                        '[class.esn-select-dark]': `theme === 'dark'`,
                        '[class.esn-select-light]': `theme === 'light'`
                    }, template: "<mat-form-field [appearance]=\"_matAppearance\">\r\n  <mat-label *ngIf=\"label\">{{label}}</mat-label>\r\n  <div cdk-overlay-origin>\r\n    <mat-select\r\n      [required]=\"required\"\r\n      [placeholder]=\"placeholder\"\r\n      [multiple]=\"multiple\"\r\n      [formControl]=\"control\"\r\n      [disableRipple]=\"disableRipple\"\r\n      [tabIndex]=\"tabIndex\"\r\n      (selectionChange)=\"_selectionChange($event)\"\r\n      (openedChange)=\"_openedChange($event)\"\r\n      (focus)=\"focus.emit()\"\r\n      (blur)=\"blur.emit()\">\r\n      <mat-select-trigger *ngIf=\"this.customTrigger?.viewValue\" [class]=\"this.customTrigger.viewValue?.elementRef?.nativeElement?.parentNode?.className\">\r\n        <template [ngTemplateOutlet]=\"this.customTrigger.viewValue\" [ngTemplateOutletContext]=\"{}\"></template>\r\n      </mat-select-trigger>\r\n      <ng-container *ngIf=\"!this.optionGroupsList || !this.optionGroupsList.length\">\r\n        <mat-option class=\"esn-option-{{size}}\" *ngFor=\"let opt of options\" [value]=\"opt.value\"\r\n                    [disabled]=\"opt.disabled\"\r\n                    [class]=\"opt.viewValue?.elementRef?.nativeElement?.parentNode?.className\">\r\n          <template [ngTemplateOutlet]=\"opt.viewValue\" [ngTemplateOutletContext]=\"{}\"></template>\r\n        </mat-option>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!!this.optionGroupsList?.length\">\r\n        <mat-optgroup class=\"esn-option-{{size}}\" *ngFor=\"let optGrp of optionGroups\" [label]=\"optGrp.label\"\r\n                      [disabled]=\"optGrp.disabled\"\r\n                      [class]=\"optGrp.viewValue?.elementRef?.nativeElement?.parentNode?.className\">\r\n          <mat-option class=\"esn-option-{{size}}\" *ngFor=\"let opt of optGrp.options\" [value]=\"opt.value\"\r\n                      [disabled]=\"opt.disabled\"\r\n                      [class]=\"opt.viewValue?.elementRef?.nativeElement?.parentNode?.className\">\r\n            <template [ngTemplateOutlet]=\"opt.viewValue\" [ngTemplateOutletContext]=\"{}\"></template>\r\n          </mat-option>\r\n        </mat-optgroup>\r\n      </ng-container>\r\n    </mat-select>\r\n  </div>\r\n  <mat-hint *ngIf=\"!!hint\">{{hint}}</mat-hint>\r\n  <mat-error>{{ errorMessage }}</mat-error>\r\n</mat-form-field>\r\n\r\n", styles: [".esn-select .mat-mdc-select-value{z-index:1}.esn-select.esn-select-outline{border-top:5px solid rgba(0,0,0,0)}.esn-select ::ng-deep .mat-mdc-form-field-infix{z-index:1}.esn-select .mat-mdc-select-arrow{z-index:2}.esn-select.esn-select-sm.esn-select-outline .mat-mdc-form-field-infix{min-height:3rem;padding-top:.75rem;padding-bottom:.75rem}.esn-select.esn-select-sm.esn-select-outline .mat-mdc-floating-label{top:1.3rem}.esn-select.esn-select-sm.esn-select-outline .mdc-floating-label--float-above{font-size:.875rem;line-height:1.25rem;font-weight:400;--mat-mdc-form-field-label-transform: translateY(-28px) scale( var(--mat-mdc-form-field-floating-label-scale, .75) ) !important}.esn-select.esn-select-sm.esn-select-fill .mat-mdc-form-field-infix{min-height:3rem;padding-top:.75rem;padding-bottom:.75rem}.esn-select.esn-select-sm.esn-select-fill .mat-mdc-floating-label{top:1.3rem}.esn-select.esn-select-sm.esn-select-fill .mdc-floating-label--float-above{font-size:.875rem;line-height:1.25rem;font-weight:400;--mat-mdc-form-field-label-transform: translateY(-28px) scale( var(--mat-mdc-form-field-floating-label-scale, .75) ) !important}.esn-select.esn-select-sm.esn-select-underline .mat-mdc-form-field-infix{min-height:3rem;padding-top:1.1rem;padding-bottom:.4rem}.esn-select.esn-select-sm.esn-select-underline .mat-mdc-floating-label{top:1.5rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i2.MatFormField, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_FORM_FIELD]
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, propDecorators: { optionsList: [{
                type: ContentChildren,
                args: [EsnOption, { descendants: true }]
            }], optionGroupsList: [{
                type: ContentChildren,
                args: [EsnOptionGroup, { descendants: true }]
            }], customTrigger: [{
                type: ContentChild,
                args: [EsnSelectTrigger]
            }], appearance: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], multiple: [{
                type: Input
            }], hint: [{
                type: Input
            }], disableRipple: [{
                type: Input
            }], tabIndex: [{
                type: Input
            }], error: [{
                type: Input
            }], size: [{
                type: Input
            }], theme: [{
                type: Input
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], selectionChange: [{
                type: Output
            }], openedChange: [{
                type: Output
            }], formField: [{
                type: ViewChild,
                args: [MatFormField]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBRWYsWUFBWSxFQUNaLE1BQU0sRUFFTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFJTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxjQUFjLEVBQUUsWUFBWSxFQUEwQixtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZILE9BQU8sRUFBZSwyQkFBMkIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pGLE9BQU8sRUFBdUIsV0FBVyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQy9GLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFxQixtQkFBbUIsRUFBa0IsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7QUFxQ3JELE1BQU0sT0FBTyxTQUFTO0lBc0NwQixZQUFvQixTQUFtQixFQUNtQixnQkFBOEIsRUFDcEUsR0FBc0IsRUFBUyxVQUFzQjtRQUZyRCxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ21CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBYztRQUNwRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFuQ2hFLGVBQVUsR0FBcUMsU0FBUyxDQUFDO1FBR3pELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFJbEIsU0FBSSxHQUFnQixJQUFJLENBQUM7UUFDekIsVUFBSyxHQUE0QixJQUFJLENBQUM7UUFFckMsVUFBSyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3JELFNBQUksR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNwRCxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdELGlCQUFZLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFTcEUsZ0JBQVcsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUkvQyxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBd0NwQyxhQUFRLEdBQVEsR0FBRyxFQUFFO1FBQ3JCLENBQUMsQ0FBQztRQUNGLFlBQU8sR0FBUSxHQUFHLEVBQUU7UUFDcEIsQ0FBQyxDQUFDO1FBcENBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtTQUMxQjtRQUVELElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUNsQyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFlLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRU4sSUFBSTtZQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEQ7UUFBQyxPQUFPLENBQUMsRUFBRTtTQUNYO0lBQ0gsQ0FBQztJQU9ELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxTQUFtQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUE7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxFQUFFO1lBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1NBQzlCO2FBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLE1BQU0sRUFBRTtZQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUNELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1FBQ3ZDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQztRQUN6RCxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRTtZQUNqQyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxJQUFJLEVBQUUsRUFBRSxZQUFZLElBQUksRUFBRSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsTUFBTyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRU0sbUJBQW1CO1FBQ3hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDdkUsSUFBSTtnQkFDSixJQUFJLENBQUMsWUFBWTthQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFXLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFBO1NBQzNCO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQ3BELE1BQU0sVUFBVSxHQUFFLDZCQUE2QixDQUFBO1lBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsR0FBRyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixFQUFFLENBQUM7Z0JBQzNDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDeEUsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxVQUFVLEdBQUUscUJBQXFCLENBQUE7WUFFdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7U0FDL0U7SUFFSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBdUI7UUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBZTtRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBdUIsRUFBRSxFQUFFO1lBQ2xGLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUMsRUFBRTtnQkFDekMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEcsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFpQyxFQUFFLEVBQUU7WUFDakcsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUN2RCxPQUFPLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxTQUFTLEVBQUMsQ0FBQTtZQUNoSixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRU8sUUFBUTtRQUNkLElBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFDO1lBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUUsU0FBUyxDQUFDLEVBQUU7Z0JBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JHLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBRSxjQUFjLENBQUMsRUFBRTtnQkFDOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRyxjQUFjLENBQUMsU0FBUyxFQUFDLENBQUE7WUFDakosQ0FBQyxDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRTtZQUN4QyxNQUFNLHFCQUFxQixHQUFHLENBQUMsQ0FBQztZQUNoQyxNQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQztZQUMvQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FDakIsK0RBQ0UscUJBQXFCLEdBQUcsb0JBQzFCLEtBQUs7Z0JBQ1AsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNYO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzt1R0FyTlUsU0FBUywwQ0F1Q1ksY0FBYzsyRkF2Q25DLFNBQVMsa3lCQXJCVDtRQUNULEVBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUM7UUFDdEQsRUFBQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBQztRQUM5RDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLHFFQWdCYSxnQkFBZ0IsaUVBRmIsU0FBUyxzRUFDVCxjQUFjLDJGQXFCcEIsWUFBWSxxRUMzRnpCLDB3RUF5Q0Esb3lHREtjLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDOzRGQXNCckMsU0FBUztrQkE3QnJCLFNBQVM7K0JBQ0UsWUFBWSxVQUdkLENBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxVQUFVLENBQUMsaUJBQ2xDLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sY0FDbkMsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsYUFDckM7d0JBQ1QsRUFBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxXQUFXLEVBQUM7d0JBQ3RELEVBQUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFdBQVcsV0FBVyxFQUFDO3dCQUM5RDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLFdBQVc7NEJBQ3RCLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGLFFBQ0s7d0JBQ0osS0FBSyxFQUFFLFlBQVk7d0JBQ25CLHVCQUF1QixFQUFFLGVBQWU7d0JBQ3hDLHVCQUF1QixFQUFFLGVBQWU7d0JBQ3hDLHlCQUF5QixFQUFFLHVCQUF1Qjt3QkFDbEQsNEJBQTRCLEVBQUUsMEJBQTBCO3dCQUN4RCw4QkFBOEIsRUFBRSw0QkFBNEI7d0JBQzVELHlCQUF5QixFQUFFLGtCQUFrQjt3QkFDN0MsMEJBQTBCLEVBQUUsbUJBQW1CO3FCQUNoRDs7MEJBMENZLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsY0FBYztxR0F0Q0csV0FBVztzQkFBM0QsZUFBZTt1QkFBQyxTQUFTLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDO2dCQUNPLGdCQUFnQjtzQkFBckUsZUFBZTt1QkFBQyxjQUFjLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDO2dCQUNwQixhQUFhO3NCQUE1QyxZQUFZO3VCQUFDLGdCQUFnQjtnQkFFckIsVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUVJLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csZUFBZTtzQkFBeEIsTUFBTTtnQkFDRyxZQUFZO3NCQUFyQixNQUFNO2dCQUV5QixTQUFTO3NCQUF4QyxTQUFTO3VCQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNQVRfRk9STV9GSUVMRCwgTWF0Rm9ybUZpZWxkLCBNYXRGb3JtRmllbGRBcHBlYXJhbmNlLCBNYXRGb3JtRmllbGRDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xyXG5pbXBvcnQge01BVF9PUFRHUk9VUCwgTUFUX09QVElPTl9QQVJFTlRfQ09NUE9ORU5UfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1IsIE5nQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge01BVF9TRUxFQ1RfVFJJR0dFUiwgbWF0U2VsZWN0QW5pbWF0aW9ucywgTWF0U2VsZWN0Q2hhbmdlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0XCI7XHJcbmltcG9ydCB7RXNuT3B0aW9ufSBmcm9tIFwiLi4vb3B0aW9uL29wdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFc25PcHRpb25Hcm91cH0gZnJvbSBcIi4uL29wdGlvbi1ncm91cC9vcHRpb24tZ3JvdXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RXNuU2VsZWN0VHJpZ2dlcn0gZnJvbSBcIi4uL3NlbGVjdC10cmlnZ2VyL3NlbGVjdC10cmlnZ2VyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFc25VdGlscyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3B1YmxpYy1hcGknO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0aW9uUmVmTW9kZWwge1xyXG4gIHZhbHVlOiBhbnk7XHJcbiAgdmlld1ZhbHVlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIGRpc2FibGVkOiBib29sZWFuXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2Rpc2FibGVSaXBwbGUnLCAndGFiSW5kZXgnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGFuaW1hdGlvbnM6IFttYXRTZWxlY3RBbmltYXRpb25zLnRyYW5zZm9ybVBhbmVsXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtwcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogRXNuU2VsZWN0fSxcclxuICAgIHtwcm92aWRlOiBNQVRfT1BUSU9OX1BBUkVOVF9DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBFc25TZWxlY3R9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IEVzblNlbGVjdCxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdlc24tc2VsZWN0JyxcclxuICAgICdbY2xhc3MuZXNuLXNlbGVjdC1zbV0nOiBgc2l6ZSA9PT0gJ3NtJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1zZWxlY3QtbWRdJzogYHNpemUgPT09ICdtZCdgLFxyXG4gICAgJ1tjbGFzcy5lc24tc2VsZWN0LWZpbGxdJzogYGFwcGVhcmFuY2UgPT09ICdmaWxsJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1zZWxlY3Qtb3V0bGluZV0nOiBgYXBwZWFyYW5jZSA9PT0gJ291dGxpbmUnYCxcclxuICAgICdbY2xhc3MuZXNuLXNlbGVjdC11bmRlcmxpbmVdJzogYGFwcGVhcmFuY2UgPT09ICd1bmRlcmxpbmUnYCxcclxuICAgICdbY2xhc3MuZXNuLXNlbGVjdC1kYXJrXSc6IGB0aGVtZSA9PT0gJ2RhcmsnYCxcclxuICAgICdbY2xhc3MuZXNuLXNlbGVjdC1saWdodF0nOiBgdGhlbWUgPT09ICdsaWdodCdgXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVzblNlbGVjdCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKEVzbk9wdGlvbiwge2Rlc2NlbmRhbnRzOiB0cnVlfSkgb3B0aW9uc0xpc3Q6IFF1ZXJ5TGlzdDxFc25PcHRpb24+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oRXNuT3B0aW9uR3JvdXAsIHtkZXNjZW5kYW50czogdHJ1ZX0pIG9wdGlvbkdyb3Vwc0xpc3Q6IFF1ZXJ5TGlzdDxFc25PcHRpb25Hcm91cD47XHJcbiAgQENvbnRlbnRDaGlsZChFc25TZWxlY3RUcmlnZ2VyKSBjdXN0b21UcmlnZ2VyOiBFc25TZWxlY3RUcmlnZ2VyO1xyXG5cclxuICBASW5wdXQoKSBhcHBlYXJhbmNlOiAnZmlsbCcgfCAnb3V0bGluZScgfCAndW5kZXJsaW5lJyA9ICdvdXRsaW5lJztcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGludDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZGlzYWJsZVJpcHBsZTogYm9vbGVhbiA7XHJcbiAgQElucHV0KCkgdGFiSW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nIHwgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBzaXplOiAnc20nIHwgJ21kJyA9ICdzbSc7XHJcbiAgQElucHV0KCkgdGhlbWU6ICdkYXJrJyB8ICdsaWdodCcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvcGVuZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZChNYXRGb3JtRmllbGQpIHB1YmxpYyBmb3JtRmllbGQ6IE1hdEZvcm1GaWVsZDtcclxuXHJcblxyXG4gIHB1YmxpYyBvYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXI7XHJcblxyXG4gIF9tYXRBcHBlYXJhbmNlOiBNYXRGb3JtRmllbGRBcHBlYXJhbmNlO1xyXG4gIGNvbnRyb2w6IEZvcm1Db250cm9sXHJcbiAgcHJpdmF0ZSBvbkNoYW5nZVN1YjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gIHByaXZhdGUgcGFyZW50Q29udHJvbDogTmdDb250cm9sO1xyXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgZGVmYXVsdEVycm9yPzogc3RyaW5nO1xyXG4gIHByaXZhdGUgZXJyb3JzTGlzdDogc3RyaW5nW11bXSA9IFtdO1xyXG4gIG9wdGlvbnM6IFByb2plY3Rpb25SZWZNb2RlbFtdO1xyXG4gIG9wdGlvbkdyb3VwczogeyBsYWJlbDogYW55LCBvcHRpb25zOiBQcm9qZWN0aW9uUmVmTW9kZWxbXSwgZGlzYWJsZWQ6IGJvb2xlYW4sIHZpZXdWYWx1ZTogVGVtcGxhdGVSZWY8YW55PiB9W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9GT1JNX0ZJRUxEKSBwcm90ZWN0ZWQgX3BhcmVudEZvcm1GaWVsZDogTWF0Rm9ybUZpZWxkLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChbJycsIG51bGxdKVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKCEhY2hhbmdlc1snZGlzYWJsZWQnXSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVTdGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmVycm9yID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBjb25zdCBlcnIgPSBFc25VdGlscy5jbG9uZURlZXAodGhpcy5lcnJvcik7XHJcbiAgICAgIHRoaXMuZGVmYXVsdEVycm9yID0gZXJyWydkZWZhdWx0J107XHJcbiAgICAgIGRlbGV0ZSBlcnIuZGVmYXVsdDtcclxuICAgICAgdGhpcy5lcnJvcnNMaXN0ID0gT2JqZWN0LmVudHJpZXMoZXJyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdEVycm9yID0gdGhpcy5lcnJvciBhcyBzdHJpbmc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlTWF0QXBwZWFyYW5jZSgpO1xyXG4gICAgdGhpcy5vbkNoYW5nZVN1Yi5hZGQoXHJcbiAgICAgIHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWwpID0+IHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbCk7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25FcnJvcnMoKTtcclxuICAgICAgICB0aGlzLmNvbXB1dGVFcnJvck1lc3NhZ2UoKTtcclxuICAgICAgfSkpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMucGFyZW50Q29udHJvbCA9IHRoaXMuX2luamVjdG9yLmdldChOZ0NvbnRyb2wpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHtcclxuICB9O1xyXG4gIG9uVG91Y2g6IGFueSA9ICgpID0+IHtcclxuICB9O1xyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKG9uVG91Y2hlZDogRnVuY3Rpb24pIHtcclxuICAgIHRoaXMub25Ub3VjaCA9IG9uVG91Y2hlZDtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWRcclxuICAgIHRoaXMudXBkYXRlRGlzYWJsZVN0YXRlKClcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTWF0QXBwZWFyYW5jZSgpIHtcclxuICAgIGlmICh0aGlzLmFwcGVhcmFuY2UgPT09ICd1bmRlcmxpbmUnKSB7XHJcbiAgICAgIHRoaXMuX21hdEFwcGVhcmFuY2UgPSAnZmlsbCc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwZWFyYW5jZSA9PT0gJ2ZpbGwnKSB7XHJcbiAgICAgIHRoaXMuX21hdEFwcGVhcmFuY2UgPSAnb3V0bGluZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9tYXRBcHBlYXJhbmNlID0gdGhpcy5hcHBlYXJhbmNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVEaXNhYmxlU3RhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb250cm9sLmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3NpZ25FcnJvcnMoKSB7XHJcbiAgICBpZiAoIXRoaXMucGFyZW50Q29udHJvbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2NhbEVycnMgPSB0aGlzLmNvbnRyb2w/LmVycm9ycztcclxuICAgIGNvbnN0IHBhcmVudEVycm9ycyA9IHRoaXMucGFyZW50Q29udHJvbD8uY29udHJvbD8uZXJyb3JzO1xyXG4gICAgaWYgKCEhbG9jYWxFcnJzIHx8ICEhcGFyZW50RXJyb3JzKSB7XHJcbiAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gICAgICBPYmplY3QuYXNzaWduKGVycm9ycywgbG9jYWxFcnJzIHx8IHt9LCBwYXJlbnRFcnJvcnMgfHwge30pO1xyXG4gICAgICB0aGlzLmNvbnRyb2w/LnNldEVycm9ycyhlcnJvcnMhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wdXRlRXJyb3JNZXNzYWdlKCkge1xyXG4gICAgY29uc3QgZXJyT2JqID0gdGhpcy5jb250cm9sPy5lcnJvcnM7XHJcbiAgICBpZiAoIWVyck9iaikge1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXJycyA9IE9iamVjdC5rZXlzKGVyck9iaikuZmlsdGVyKChrZXkpID0+ICEhZXJyT2JqW2tleV0pO1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICh0aGlzLmVycm9yc0xpc3QuZmluZCgoZSkgPT4gZXJycy5pbmNsdWRlcyhlWzBdKSkgfHwgW1xyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0RXJyb3IsXHJcbiAgICAgIF0pWzFdIGFzIHN0cmluZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5vbkNoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgaWYoISF0aGlzLm9ic2VydmVyKXtcclxuICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgIHRoaXMuc3Vic2NyaWJlVG9DaGFuZ2VzKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5fbWF0QXBwZWFyYW5jZSA9PT0gJ291dGxpbmUnICYmIHRoaXMubGFiZWwpe1xyXG4gICAgICBjb25zdCBub3RjaENsYXNzPSAnLm1kYy1ub3RjaGVkLW91dGxpbmVfX25vdGNoJ1xyXG4gICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5mb3JtRmllbGQuX3JlZnJlc2hPdXRsaW5lTm90Y2hXaWR0aCgpO1xyXG4gICAgICAgIGNvbnN0IG5vdGNoRWxtID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcihub3RjaENsYXNzKVxyXG4gICAgICAgIG5vdGNoRWxtLnN0eWxlLndpZHRoID0gdGhpcy5fZ2V0Tm90Y2hXaWR0aCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgbGFiZWxDbGFzcz0gJy5tZGMtZmxvYXRpbmctbGFiZWwnXHJcbiAgXHJcbiAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGxhYmVsQ2xhc3MpKVxyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgX3NlbGVjdGlvbkNoYW5nZSgkZXZlbnQ6IE1hdFNlbGVjdENoYW5nZSkge1xyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCgkZXZlbnQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBfb3BlbmVkQ2hhbmdlKCRldmVudDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5vcGVuZWRDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlVG9DaGFuZ2VzKCkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlU3ViLmFkZCh0aGlzLm9wdGlvbnNMaXN0LmNoYW5nZXMuc3Vic2NyaWJlKChFc25PcHRpb25zOiBFc25PcHRpb25bXSkgPT4ge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IEVzbk9wdGlvbnMubWFwKCBFc25PcHRpb24gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IEVzbk9wdGlvbi52YWx1ZSwgdmlld1ZhbHVlOiBFc25PcHRpb24udmlld1ZhbHVlLCBkaXNhYmxlZDogRXNuT3B0aW9uLmRpc2FibGVkIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZVN1Yi5hZGQodGhpcy5vcHRpb25Hcm91cHNMaXN0LmNoYW5nZXMuc3Vic2NyaWJlKChFc25PcHRpb25Hcm91cHM6IEVzbk9wdGlvbkdyb3VwW10pID0+IHtcclxuICAgICAgICB0aGlzLm9wdGlvbkdyb3VwcyA9IEVzbk9wdGlvbkdyb3Vwcy5tYXAoRXNuT3B0aW9uR3JvdXAgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgbGFiZWw6IEVzbk9wdGlvbkdyb3VwLmxhYmVsLCBvcHRpb25zOiBFc25PcHRpb25Hcm91cC5vcHRpb25zLCBkaXNhYmxlZDogRXNuT3B0aW9uR3JvdXAuZGlzYWJsZWQsIHZpZXdWYWx1ZTogRXNuT3B0aW9uR3JvdXAudmlld1ZhbHVlfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdERhdGEoKSB7XHJcbiAgICBpZighdGhpcy5vcHRpb25Hcm91cHNMaXN0IHx8ICF0aGlzLm9wdGlvbkdyb3Vwc0xpc3QubGVuZ3RoKXtcclxuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zTGlzdC5tYXAoIEVzbk9wdGlvbiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICBFc25PcHRpb24udmFsdWUsIHZpZXdWYWx1ZTogIEVzbk9wdGlvbi52aWV3VmFsdWUsIGRpc2FibGVkOiAgRXNuT3B0aW9uLmRpc2FibGVkIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vcHRpb25Hcm91cHMgPSB0aGlzLm9wdGlvbkdyb3Vwc0xpc3QubWFwKCBFc25PcHRpb25Hcm91cCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgbGFiZWw6IEVzbk9wdGlvbkdyb3VwLmxhYmVsLCBvcHRpb25zOiBFc25PcHRpb25Hcm91cC5vcHRpb25zLCBkaXNhYmxlZDogRXNuT3B0aW9uR3JvdXAuZGlzYWJsZWQsIHZpZXdWYWx1ZTogIEVzbk9wdGlvbkdyb3VwLnZpZXdWYWx1ZX1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIF9nZXROb3RjaFdpZHRoKCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybUZpZWxkLl9ub3RjaGVkT3V0bGluZT8ub3Blbikge1xyXG4gICAgICBjb25zdCBOT1RDSF9FTEVNRU5UX1BBRERJTkcgPSA4O1xyXG4gICAgICBjb25zdCBOT1RDSF9FTEVNRU5UX0JPUkRFUiA9IDE7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm1GaWVsZC5fbGFiZWxXaWR0aCA+IDBcclxuICAgICAgICA/IGBjYWxjKCR7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybUZpZWxkLl9sYWJlbFdpZHRoXHJcbiAgICAgICAgICB9cHggKiB2YXIoLS1tYXQtbWRjLWZvcm0tZmllbGQtZmxvYXRpbmctbGFiZWwtc2NhbGUsIDAuNzUpICsgJHtcclxuICAgICAgICAgICAgTk9UQ0hfRUxFTUVOVF9QQURESU5HICsgTk9UQ0hfRUxFTUVOVF9CT1JERVJcclxuICAgICAgICAgIH1weClgXHJcbiAgICAgICAgOiAnMHB4JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cIl9tYXRBcHBlYXJhbmNlXCI+XHJcbiAgPG1hdC1sYWJlbCAqbmdJZj1cImxhYmVsXCI+e3tsYWJlbH19PC9tYXQtbGFiZWw+XHJcbiAgPGRpdiBjZGstb3ZlcmxheS1vcmlnaW4+XHJcbiAgICA8bWF0LXNlbGVjdFxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIlxyXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXHJcbiAgICAgIFtkaXNhYmxlUmlwcGxlXT1cImRpc2FibGVSaXBwbGVcIlxyXG4gICAgICBbdGFiSW5kZXhdPVwidGFiSW5kZXhcIlxyXG4gICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIl9zZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIChvcGVuZWRDaGFuZ2UpPVwiX29wZW5lZENoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKGZvY3VzKT1cImZvY3VzLmVtaXQoKVwiXHJcbiAgICAgIChibHVyKT1cImJsdXIuZW1pdCgpXCI+XHJcbiAgICAgIDxtYXQtc2VsZWN0LXRyaWdnZXIgKm5nSWY9XCJ0aGlzLmN1c3RvbVRyaWdnZXI/LnZpZXdWYWx1ZVwiIFtjbGFzc109XCJ0aGlzLmN1c3RvbVRyaWdnZXIudmlld1ZhbHVlPy5lbGVtZW50UmVmPy5uYXRpdmVFbGVtZW50Py5wYXJlbnROb2RlPy5jbGFzc05hbWVcIj5cclxuICAgICAgICA8dGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGhpcy5jdXN0b21UcmlnZ2VyLnZpZXdWYWx1ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7fVwiPjwvdGVtcGxhdGU+XHJcbiAgICAgIDwvbWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRoaXMub3B0aW9uR3JvdXBzTGlzdCB8fCAhdGhpcy5vcHRpb25Hcm91cHNMaXN0Lmxlbmd0aFwiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIGNsYXNzPVwiZXNuLW9wdGlvbi17e3NpemV9fVwiICpuZ0Zvcj1cImxldCBvcHQgb2Ygb3B0aW9uc1wiIFt2YWx1ZV09XCJvcHQudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJvcHQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJvcHQudmlld1ZhbHVlPy5lbGVtZW50UmVmPy5uYXRpdmVFbGVtZW50Py5wYXJlbnROb2RlPy5jbGFzc05hbWVcIj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJvcHQudmlld1ZhbHVlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInt9XCI+PC90ZW1wbGF0ZT5cclxuICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiISF0aGlzLm9wdGlvbkdyb3Vwc0xpc3Q/Lmxlbmd0aFwiPlxyXG4gICAgICAgIDxtYXQtb3B0Z3JvdXAgY2xhc3M9XCJlc24tb3B0aW9uLXt7c2l6ZX19XCIgKm5nRm9yPVwibGV0IG9wdEdycCBvZiBvcHRpb25Hcm91cHNcIiBbbGFiZWxdPVwib3B0R3JwLmxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJvcHRHcnAuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cIm9wdEdycC52aWV3VmFsdWU/LmVsZW1lbnRSZWY/Lm5hdGl2ZUVsZW1lbnQ/LnBhcmVudE5vZGU/LmNsYXNzTmFtZVwiPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gY2xhc3M9XCJlc24tb3B0aW9uLXt7c2l6ZX19XCIgKm5nRm9yPVwibGV0IG9wdCBvZiBvcHRHcnAub3B0aW9uc1wiIFt2YWx1ZV09XCJvcHQudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIm9wdC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwib3B0LnZpZXdWYWx1ZT8uZWxlbWVudFJlZj8ubmF0aXZlRWxlbWVudD8ucGFyZW50Tm9kZT8uY2xhc3NOYW1lXCI+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJvcHQudmlld1ZhbHVlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInt9XCI+PC90ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8L21hdC1vcHRncm91cD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L21hdC1zZWxlY3Q+XHJcbiAgPC9kaXY+XHJcbiAgPG1hdC1oaW50ICpuZ0lmPVwiISFoaW50XCI+e3toaW50fX08L21hdC1oaW50PlxyXG4gIDxtYXQtZXJyb3I+e3sgZXJyb3JNZXNzYWdlIH19PC9tYXQtZXJyb3I+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4iXX0=