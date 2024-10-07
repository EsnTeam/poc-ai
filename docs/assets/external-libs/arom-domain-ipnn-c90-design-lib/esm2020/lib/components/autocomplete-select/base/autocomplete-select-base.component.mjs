import { Component, Input, ViewChild, } from '@angular/core';
import { FormControl, NgControl, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { EsnUtils } from '../../../utils/public-api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/autocomplete";
import * as i4 from "@angular/material/core";
import * as i5 from "../../input/input";
import * as i6 from "@angular/material/chips";
import * as i7 from "../../loader/loader.component";
export class EsnAutocompleteSelectBase {
    constructor(_injector, elementRef) {
        this._injector = _injector;
        this.elementRef = elementRef;
        this.multi = false;
        this.disabled = false;
        this.optionFilterFunc = (elm) => true;
        this.minChars = 3;
        this.noResultsLabel = 'Aucun résultat trouvé';
        this.inputted = new FormControl();
        this.separatorKeysCodes = [ENTER, COMMA];
        this.autocompleteChoices = new BehaviorSubject([]);
        this.addChipStream$ = new BehaviorSubject(null);
        this.selectedElems = [];
        this.onChangeSub = new Subscription();
        this.isMulti = false;
        this.noResults = false;
        this.searchingResults = false;
        this.isSearchInError = false;
        this.onChange = () => { };
        this.onTouch = () => { };
        this.removeLastChipOnBackspace = (e) => {
            if (e.keyCode === 8 &&
                !this.inputted.value &&
                !!this.selectedElems.length) {
                this.remove(this.selectedElems[this.selectedElems.length - 1]);
            }
            this.input?.nativeInput?.nativeElement?.focus();
        };
    }
    async ngOnInit() {
        try {
            this.parentControl = this._injector.get(NgControl);
            this.onChangeSub.add(this.parentControl.control?.valueChanges.subscribe(() => setTimeout(() => this.assignErrors())));
        }
        catch (e) { }
        this.removeFn = (elm) => this.remove(elm);
        if (!!this.multi || this.multi === '') {
            this.isMulti = true;
        }
        this.addChipStream$
            .pipe(filter((chip) => !!chip), debounceTime(20))
            .subscribe((chip) => {
            this.selectedElems.push(chip);
            this.onChangeWrapper(this.selectedElems);
        });
        this.previousInputValue = this.inputted.value;
        this.nextInputValue = this.inputted.value;
        this.inputted.valueChanges
            .pipe(tap((val) => {
            this.previousInputValue = this.nextInputValue;
            this.nextInputValue = val;
        }), debounceTime(250))
            .subscribe(async (txt) => {
            this.searchResults(txt);
        });
    }
    async searchResults(txt) {
        this.noResults = false;
        if ((!!txt || txt === '') && txt.length > this.minChars - 1) {
            this.searchingResults = true;
            let queryResults = null;
            try {
                queryResults = await this.queryFunc(txt);
            }
            catch (e) { }
            this.handleSearchResponse(queryResults);
            this.searchingResults = false;
        }
        else {
            this.autocompleteChoices.next([]);
        }
    }
    onFocus() {
        if (!this.minChars && !this.inputted.value && !this.autocompleteChoices.getValue().length) {
            this.searchResults('');
        }
    }
    ngAfterViewInit() {
        this.input?.nativeInput?.nativeElement?.addEventListener('keydown', this.removeLastChipOnBackspace);
    }
    ngOnChanges(changes) {
        if (!!changes['disabled']) {
            this.updateInputDisabled();
        }
    }
    handleSearchResponse(queryResults) {
        if (!!queryResults) {
            this.isSearchInError = false;
            this.autocompleteChoices.next(queryResults.filter((elem) => !this.selectedElems
                .map((u) => u[this.idField])
                .includes(elem[this.idField])));
            this.noResults = !this.autocompleteChoices.value.length;
        }
        else {
            this.isSearchInError = true;
        }
    }
    updateInputDisabled() {
        if (!!this.disabled || (!this.isMulti && !!this.selectedElems.length)) {
            this.inputted.disable();
        }
        else {
            this.inputted.enable();
        }
    }
    writeValue(value) {
        if (!this.isMulti) {
            this.selectedElems = !!value ? [value] : [];
        }
        else {
            this.selectedElems = !!value ? value : [];
        }
        this.updateInputDisabled();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(onTouched) {
        this.onTouch = onTouched;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.updateInputDisabled();
    }
    ngOnDestroy() {
        this.onChangeSub.unsubscribe();
        this.input?.nativeInput?.nativeElement?.removeEventListener('keydown', this.removeLastChipOnBackspace);
    }
    remove(elem) {
        if (this.disabled) {
            return;
        }
        const index = this.selectedElems
            .map((u) => u[this.idField])
            .indexOf(elem[this.idField]);
        if (index >= 0) {
            this.selectedElems.splice(index, 1);
            this.onChangeWrapper(this.selectedElems);
        }
    }
    selected(event) {
        this.addChipStream$.next(event.option.value);
        this.inputted.setValue(null);
        this.autocompleteChoices.next([]);
    }
    onChangeWrapper(value) {
        if (this.isMulti) {
            this.onChange(value);
        }
        else {
            this.onChange(value.length ? value[0] : null);
        }
        this.updateInputDisabled();
    }
    assignErrors() {
        EsnUtils.assignErrors(this.inputted, this.parentControl);
    }
    onInputBlur() {
        this.assignErrors();
    }
}
EsnAutocompleteSelectBase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAutocompleteSelectBase, deps: [{ token: i0.Injector }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
EsnAutocompleteSelectBase.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnAutocompleteSelectBase, selector: "esn-autocomplete-select-base", inputs: { queryFunc: "queryFunc", idField: "idField", multi: "multi", label: "label", hint: "hint", optionTemplate: "optionTemplate", chipTemplate: "chipTemplate", singleElemTemplate: "singleElemTemplate", disabled: "disabled", optionFilterFunc: "optionFilterFunc", error: "error", minChars: "minChars", noResultsLabel: "noResultsLabel" }, host: { properties: { "class.input-disabled": "inputted?.disabled" }, classAttribute: "esn-autocomplete-select-base" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: EsnAutocompleteSelectBase,
            multi: true,
        },
    ], viewQueries: [{ propertyName: "input", first: true, predicate: ["chipInput"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<mat-chip-grid #chipList role=\"grid\">\r\n  <esn-input-text\r\n    #chipInput\r\n    [label]=\"label\"\r\n    [ngClass]=\"{ disabled: inputted.disabled }\"\r\n    [formControl]=\"inputted\"\r\n    [chipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n    [chipInputFor]=\"chipList\"\r\n    [autocomplete]=\"autocomplete\"\r\n    [error]=\"error\"\r\n    [floatLabel]=\"!this.selectedElems.length ? 'auto' : 'always'\"\r\n    [searchIcon]=\"!inputted.disabled\"\r\n    (blur)=\"onInputBlur()\"\r\n    (focus)=\"onFocus()\"\r\n    [hint]=\"hint\"\r\n    hintAlign=\"start\"\r\n  >\r\n    <ng-container *ngIf=\"isMulti\">\r\n      <mat-chip-row *ngFor=\"let elem of selectedElems\" disableRipple>\r\n        <ng-template [ngIf]=\"chipTemplate\">\r\n          <ng-container\r\n            *ngTemplateOutlet=\"\r\n              chipTemplate;\r\n              context: { $implicit: elem, remove: removeFn, disabled }\r\n            \"\r\n          ></ng-container>\r\n        </ng-template>\r\n      </mat-chip-row>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!isMulti\">\r\n      <ng-container *ngFor=\"let elem of selectedElems\">\r\n        <ng-template [ngIf]=\"singleElemTemplate\">\r\n          <ng-container\r\n            *ngTemplateOutlet=\"\r\n              singleElemTemplate;\r\n              context: { $implicit: elem, remove: removeFn, disabled }\r\n            \"\r\n          ></ng-container>\r\n        </ng-template>\r\n      </ng-container>\r\n    </ng-container>\r\n  </esn-input-text>\r\n\r\n  <mat-autocomplete\r\n    #autocomplete=\"matAutocomplete\"\r\n    (optionSelected)=\"selected($event)\"\r\n  >\r\n    <mat-option *ngIf=\"noResults\" [value]=\"\" disabled\r\n      >{{noResultsLabel}}</mat-option\r\n    >\r\n\r\n    <mat-option *ngIf=\"isSearchInError && !searchingResults\" [value]=\"\" disabled\r\n      ><span class=\"esn-autocomplete-select-option-error-info\"\r\n        >Une erreur est survenue lors de la recherche</span\r\n      ></mat-option\r\n    >\r\n    <mat-option *ngIf=\"searchingResults\" [value]=\"\" disabled>\r\n      <esn-loader></esn-loader>\r\n    </mat-option>\r\n    <ng-container *ngIf=\"!searchingResults && !isSearchInError\">\r\n      <mat-option\r\n        *ngFor=\"let elem of autocompleteChoices | async\"\r\n        [value]=\"elem\"\r\n        [disabled]=\"!optionFilterFunc(elem)\"\r\n        [ngClass]=\"{ unselectable: !optionFilterFunc(elem) }\"\r\n      >\r\n        <ng-template [ngIf]=\"optionTemplate\">\r\n          <ng-container\r\n            *ngTemplateOutlet=\"optionTemplate; context: { $implicit: elem }\"\r\n          ></ng-container>\r\n        </ng-template>\r\n      </mat-option>\r\n    </ng-container>\r\n  </mat-autocomplete>\r\n</mat-chip-grid>\r\n\r\n", styles: [":host{display:block;min-width:300px}:host ::ng-deep .mat-mdc-standard-chip{padding-left:0;padding-right:0}:host.input-disabled ::ng-deep .esn-input input{visibility:hidden;position:absolute}:host.input-disabled ::ng-deep .esn-input .mdc-text-field--disabled{pointer-events:unset}:host ::ng-deep .esn-input mat-chip-row{margin-top:0;margin-bottom:0}:host ::ng-deep .esn-input mat-chip-row:first-child{margin-left:0}:host ::ng-deep .esn-input input{width:unset}:host ::ng-deep .esn-input .mat-mdc-chip-action{padding-left:0;padding-right:0}:host .chip-field{width:100%}:host .chip-field .chip-content-wrapper{display:flex;align-items:center}:host .chip-field .chip-content-wrapper .chip-content{display:flex;align-items:center}:host .chip-field .chip-content-wrapper.multi{justify-content:space-between;width:100%}:host input.disabled{display:none}.option-error-info{color:var(--color-red)}.unselectable{opacity:.7}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i5.EsnInputText, selector: "esn-input-text", inputs: ["autocomplete", "chipInputSeparatorKeyCodes", "chipInputFor", "searchIcon"] }, { kind: "component", type: i6.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "component", type: i6.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "component", type: i7.EsnLoader, selector: "esn-loader", inputs: ["type", "centered", "size"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAutocompleteSelectBase, decorators: [{
            type: Component,
            args: [{ selector: 'esn-autocomplete-select-base', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: EsnAutocompleteSelectBase,
                            multi: true,
                        },
                    ], host: {
                        class: 'esn-autocomplete-select-base',
                        '[class.input-disabled]': `inputted?.disabled`,
                    }, template: "<mat-chip-grid #chipList role=\"grid\">\r\n  <esn-input-text\r\n    #chipInput\r\n    [label]=\"label\"\r\n    [ngClass]=\"{ disabled: inputted.disabled }\"\r\n    [formControl]=\"inputted\"\r\n    [chipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n    [chipInputFor]=\"chipList\"\r\n    [autocomplete]=\"autocomplete\"\r\n    [error]=\"error\"\r\n    [floatLabel]=\"!this.selectedElems.length ? 'auto' : 'always'\"\r\n    [searchIcon]=\"!inputted.disabled\"\r\n    (blur)=\"onInputBlur()\"\r\n    (focus)=\"onFocus()\"\r\n    [hint]=\"hint\"\r\n    hintAlign=\"start\"\r\n  >\r\n    <ng-container *ngIf=\"isMulti\">\r\n      <mat-chip-row *ngFor=\"let elem of selectedElems\" disableRipple>\r\n        <ng-template [ngIf]=\"chipTemplate\">\r\n          <ng-container\r\n            *ngTemplateOutlet=\"\r\n              chipTemplate;\r\n              context: { $implicit: elem, remove: removeFn, disabled }\r\n            \"\r\n          ></ng-container>\r\n        </ng-template>\r\n      </mat-chip-row>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!isMulti\">\r\n      <ng-container *ngFor=\"let elem of selectedElems\">\r\n        <ng-template [ngIf]=\"singleElemTemplate\">\r\n          <ng-container\r\n            *ngTemplateOutlet=\"\r\n              singleElemTemplate;\r\n              context: { $implicit: elem, remove: removeFn, disabled }\r\n            \"\r\n          ></ng-container>\r\n        </ng-template>\r\n      </ng-container>\r\n    </ng-container>\r\n  </esn-input-text>\r\n\r\n  <mat-autocomplete\r\n    #autocomplete=\"matAutocomplete\"\r\n    (optionSelected)=\"selected($event)\"\r\n  >\r\n    <mat-option *ngIf=\"noResults\" [value]=\"\" disabled\r\n      >{{noResultsLabel}}</mat-option\r\n    >\r\n\r\n    <mat-option *ngIf=\"isSearchInError && !searchingResults\" [value]=\"\" disabled\r\n      ><span class=\"esn-autocomplete-select-option-error-info\"\r\n        >Une erreur est survenue lors de la recherche</span\r\n      ></mat-option\r\n    >\r\n    <mat-option *ngIf=\"searchingResults\" [value]=\"\" disabled>\r\n      <esn-loader></esn-loader>\r\n    </mat-option>\r\n    <ng-container *ngIf=\"!searchingResults && !isSearchInError\">\r\n      <mat-option\r\n        *ngFor=\"let elem of autocompleteChoices | async\"\r\n        [value]=\"elem\"\r\n        [disabled]=\"!optionFilterFunc(elem)\"\r\n        [ngClass]=\"{ unselectable: !optionFilterFunc(elem) }\"\r\n      >\r\n        <ng-template [ngIf]=\"optionTemplate\">\r\n          <ng-container\r\n            *ngTemplateOutlet=\"optionTemplate; context: { $implicit: elem }\"\r\n          ></ng-container>\r\n        </ng-template>\r\n      </mat-option>\r\n    </ng-container>\r\n  </mat-autocomplete>\r\n</mat-chip-grid>\r\n\r\n", styles: [":host{display:block;min-width:300px}:host ::ng-deep .mat-mdc-standard-chip{padding-left:0;padding-right:0}:host.input-disabled ::ng-deep .esn-input input{visibility:hidden;position:absolute}:host.input-disabled ::ng-deep .esn-input .mdc-text-field--disabled{pointer-events:unset}:host ::ng-deep .esn-input mat-chip-row{margin-top:0;margin-bottom:0}:host ::ng-deep .esn-input mat-chip-row:first-child{margin-left:0}:host ::ng-deep .esn-input input{width:unset}:host ::ng-deep .esn-input .mat-mdc-chip-action{padding-left:0;padding-right:0}:host .chip-field{width:100%}:host .chip-field .chip-content-wrapper{display:flex;align-items:center}:host .chip-field .chip-content-wrapper .chip-content{display:flex;align-items:center}:host .chip-field .chip-content-wrapper.multi{justify-content:space-between;width:100%}:host input.disabled{display:none}.option-error-info{color:var(--color-red)}.unselectable{opacity:.7}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i0.ElementRef }]; }, propDecorators: { queryFunc: [{
                type: Input
            }], idField: [{
                type: Input
            }], multi: [{
                type: Input
            }], label: [{
                type: Input
            }], hint: [{
                type: Input
            }], optionTemplate: [{
                type: Input
            }], chipTemplate: [{
                type: Input
            }], singleElemTemplate: [{
                type: Input
            }], disabled: [{
                type: Input
            }], optionFilterFunc: [{
                type: Input
            }], error: [{
                type: Input
            }], minChars: [{
                type: Input
            }], noResultsLabel: [{
                type: Input
            }], input: [{
                type: ViewChild,
                args: ['chipInput']
            }] } });
export class EsnAutocompleteSelectImplementationBase {
    constructor(_injector) {
        this._injector = _injector;
        this.multi = false;
        this.disabled = false;
        this.optionFilterFunc = (elm) => true;
        this.onChange = () => { };
        this.onTouch = () => { };
        this.onChangeSub = new Subscription();
        this.control = new FormControl(null);
    }
    ngAfterViewInit() {
        if (!!this.parentControl) {
            this.onChangeSub.add(this.parentControl.control?.valueChanges.subscribe(() => {
                this.assignErrors();
            }));
            setTimeout(() => this.assignErrors());
        }
    }
    ngOnInit() {
        try {
            this.parentControl = this._injector.get(NgControl);
        }
        catch (e) { }
        this.onChangeSub.add(this.control.valueChanges.subscribe((val) => {
            this.onChange(val);
        }));
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
    ngOnDestroy() {
        this.onChangeSub.unsubscribe();
    }
    assignErrors() {
        EsnUtils.assignErrors(this.control, this.parentControl);
    }
}
EsnAutocompleteSelectImplementationBase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAutocompleteSelectImplementationBase, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
EsnAutocompleteSelectImplementationBase.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnAutocompleteSelectImplementationBase, selector: "esn-autocomplete-impl-base", inputs: { queryFunc: "queryFunc", idField: "idField", multi: "multi", disabled: "disabled", optionFilterFunc: "optionFilterFunc", label: "label", placeholder: "placeholder", error: "error" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: EsnAutocompleteSelectImplementationBase,
            multi: true,
        },
    ], ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAutocompleteSelectImplementationBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'esn-autocomplete-impl-base',
                    template: '',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: EsnAutocompleteSelectImplementationBase,
                            multi: true,
                        },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; }, propDecorators: { queryFunc: [{
                type: Input
            }], idField: [{
                type: Input
            }], multi: [{
                type: Input
            }], disabled: [{
                type: Input
            }], optionFilterFunc: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], error: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXNlbGVjdC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS1zZWxlY3QvYmFzZS9hdXRvY29tcGxldGUtc2VsZWN0LWJhc2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLXNlbGVjdC9iYXNlL2F1dG9jb21wbGV0ZS1zZWxlY3QtYmFzZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULEtBQUssRUFNTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7OztBQW1CckQsTUFBTSxPQUFPLHlCQUF5QjtJQXlDcEMsWUFBb0IsU0FBbUIsRUFBUyxVQUFzQjtRQUFsRCxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXBDN0QsVUFBSyxHQUFzQixLQUFLLENBQUM7UUFNakMsYUFBUSxHQUFxQixL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QUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgRm9ybUJ1aWxkZXIsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgTmdDb250cm9sLFxyXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ09NTUEsIEVOVEVSIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEVzbklucHV0RXJyb3IsIEVzbklucHV0VGV4dCB9IGZyb20gJy4uLy4uL2lucHV0L2lucHV0JztcclxuaW1wb3J0IHsgVGl0bGVTdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRoaXNSZWNlaXZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcclxuaW1wb3J0IHsgRXNuVXRpbHMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9wdWJsaWMtYXBpJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1hdXRvY29tcGxldGUtc2VsZWN0LWJhc2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUtc2VsZWN0LWJhc2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS1zZWxlY3QtYmFzZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IEVzbkF1dG9jb21wbGV0ZVNlbGVjdEJhc2UsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnZXNuLWF1dG9jb21wbGV0ZS1zZWxlY3QtYmFzZScsXHJcbiAgICAnW2NsYXNzLmlucHV0LWRpc2FibGVkXSc6IGBpbnB1dHRlZD8uZGlzYWJsZWRgLFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkF1dG9jb21wbGV0ZVNlbGVjdEJhc2U8VD5cclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdFxyXG57XHJcbiAgQElucHV0KCkgcXVlcnlGdW5jOiAodHh0OiBzdHJpbmcpID0+IFByb21pc2U8VFtdIHwgbnVsbD47XHJcbiAgQElucHV0KCkgaWRGaWVsZDoga2V5b2YgVDtcclxuICBASW5wdXQoKSBtdWx0aT86IGJvb2xlYW4gfCBzdHJpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBvcHRpb25UZW1wbGF0ZT86IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KCkgY2hpcFRlbXBsYXRlPzogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKSBzaW5nbGVFbGVtVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuIHwgc3RyaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgb3B0aW9uRmlsdGVyRnVuYzogKGVsbTogVCkgPT4gYm9vbGVhbiA9IChlbG0pID0+IHRydWU7XHJcbiAgQElucHV0KCkgZXJyb3I/OiBFc25JbnB1dEVycm9yO1xyXG4gIEBJbnB1dCgpIG1pbkNoYXJzOiBudW1iZXIgPSAzO1xyXG4gIEBJbnB1dCgpIG5vUmVzdWx0c0xhYmVsOiBzdHJpbmcgPSAnQXVjdW4gcsOpc3VsdGF0IHRyb3V2w6knO1xyXG4gIHB1YmxpYyBpbnB1dHRlZDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICByZWFkb25seSBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BXSBhcyBjb25zdDtcclxuICBAVmlld0NoaWxkKCdjaGlwSW5wdXQnKSBpbnB1dDogRXNuSW5wdXRUZXh0O1xyXG4gIHB1YmxpYyBjaGlwSW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgcHVibGljIGF1dG9jb21wbGV0ZUNob2ljZXM6IEJlaGF2aW9yU3ViamVjdDxUW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUW10+KFxyXG4gICAgW11cclxuICApO1xyXG4gIHB1YmxpYyBhZGRDaGlwU3RyZWFtJDogQmVoYXZpb3JTdWJqZWN0PFQgfCBudWxsPiA9XHJcbiAgICBuZXcgQmVoYXZpb3JTdWJqZWN0PFQgfCBudWxsPihudWxsKTtcclxuICBwdWJsaWMgc2VsZWN0ZWRFbGVtczogVFtdID0gW107XHJcbiAgcHVibGljIG9uQ2hhbmdlU3ViOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgcHVibGljIGlzTXVsdGk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgbm9SZXN1bHRzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHNlYXJjaGluZ1Jlc3VsdHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaXNTZWFyY2hJbkVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyByZW1vdmVGbjogRnVuY3Rpb247XHJcblxyXG4gIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7fTtcclxuICBvblRvdWNoOiBhbnkgPSAoKSA9PiB7fTtcclxuXHJcbiAgcHJldmlvdXNJbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgbmV4dElucHV0VmFsdWU6IHN0cmluZztcclxuICBwYXJlbnRDb250cm9sOiBOZ0NvbnRyb2w7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvciwgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5wYXJlbnRDb250cm9sID0gdGhpcy5faW5qZWN0b3IuZ2V0KE5nQ29udHJvbCk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VTdWIuYWRkKFxyXG4gICAgICAgIHRoaXMucGFyZW50Q29udHJvbC5jb250cm9sPy52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYXNzaWduRXJyb3JzKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICB0aGlzLnJlbW92ZUZuID0gKGVsbTogVCkgPT4gdGhpcy5yZW1vdmUoZWxtKTtcclxuXHJcbiAgICBpZiAoISF0aGlzLm11bHRpIHx8IHRoaXMubXVsdGkgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuaXNNdWx0aSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRDaGlwU3RyZWFtJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIoKGNoaXA6IFQgfCBudWxsKSA9PiAhIWNoaXApLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgyMClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKChjaGlwKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEVsZW1zLnB1c2goY2hpcCEpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VXcmFwcGVyKHRoaXMuc2VsZWN0ZWRFbGVtcyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMucHJldmlvdXNJbnB1dFZhbHVlID0gdGhpcy5pbnB1dHRlZC52YWx1ZTtcclxuICAgIHRoaXMubmV4dElucHV0VmFsdWUgPSB0aGlzLmlucHV0dGVkLnZhbHVlO1xyXG5cclxuICAgIHRoaXMuaW5wdXR0ZWQudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcCgodmFsKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByZXZpb3VzSW5wdXRWYWx1ZSA9IHRoaXMubmV4dElucHV0VmFsdWU7XHJcbiAgICAgICAgICB0aGlzLm5leHRJbnB1dFZhbHVlID0gdmFsO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgyNTApXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShhc3luYyAodHh0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzKHR4dClcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzZWFyY2hSZXN1bHRzKHR4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5vUmVzdWx0cyA9IGZhbHNlO1xyXG4gICAgaWYgKCghIXR4dCB8fCB0eHQgPT09ICcnKSAmJiB0eHQubGVuZ3RoID4gdGhpcy5taW5DaGFycyAtIDEpIHtcclxuICAgICAgdGhpcy5zZWFyY2hpbmdSZXN1bHRzID0gdHJ1ZTtcclxuICAgICAgbGV0IHF1ZXJ5UmVzdWx0cyA9IG51bGxcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIHF1ZXJ5UmVzdWx0cyA9IGF3YWl0IHRoaXMucXVlcnlGdW5jKHR4dCk7XHJcbiAgICAgIH0gY2F0Y2goZSl7fVxyXG4gICAgICB0aGlzLmhhbmRsZVNlYXJjaFJlc3BvbnNlKHF1ZXJ5UmVzdWx0cyk7XHJcbiAgICAgIHRoaXMuc2VhcmNoaW5nUmVzdWx0cyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVDaG9pY2VzLm5leHQoW10pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRm9jdXMoKXtcclxuICAgIGlmKCF0aGlzLm1pbkNoYXJzICYmICF0aGlzLmlucHV0dGVkLnZhbHVlICYmICF0aGlzLmF1dG9jb21wbGV0ZUNob2ljZXMuZ2V0VmFsdWUoKS5sZW5ndGgpe1xyXG4gICAgICB0aGlzLnNlYXJjaFJlc3VsdHMoJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dD8ubmF0aXZlSW5wdXQ/Lm5hdGl2ZUVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdrZXlkb3duJyxcclxuICAgICAgdGhpcy5yZW1vdmVMYXN0Q2hpcE9uQmFja3NwYWNlXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTGFzdENoaXBPbkJhY2tzcGFjZSA9IChlOiBhbnkpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZS5rZXlDb2RlID09PSA4ICYmXHJcbiAgICAgICF0aGlzLmlucHV0dGVkLnZhbHVlICYmXHJcbiAgICAgICEhdGhpcy5zZWxlY3RlZEVsZW1zLmxlbmd0aFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKHRoaXMuc2VsZWN0ZWRFbGVtc1t0aGlzLnNlbGVjdGVkRWxlbXMubGVuZ3RoIC0gMV0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnB1dD8ubmF0aXZlSW5wdXQ/Lm5hdGl2ZUVsZW1lbnQ/LmZvY3VzKCk7XHJcbiAgfTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKCEhY2hhbmdlc1snZGlzYWJsZWQnXSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUlucHV0RGlzYWJsZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVNlYXJjaFJlc3BvbnNlKHF1ZXJ5UmVzdWx0czogVFtdIHwgbnVsbCkge1xyXG4gICAgaWYgKCEhcXVlcnlSZXN1bHRzKSB7XHJcbiAgICAgIHRoaXMuaXNTZWFyY2hJbkVycm9yID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hvaWNlcy5uZXh0KFxyXG4gICAgICAgIHF1ZXJ5UmVzdWx0cy5maWx0ZXIoXHJcbiAgICAgICAgICAoZWxlbSkgPT5cclxuICAgICAgICAgICAgIXRoaXMuc2VsZWN0ZWRFbGVtc1xyXG4gICAgICAgICAgICAgIC5tYXAoKHUpID0+IHVbdGhpcy5pZEZpZWxkXSlcclxuICAgICAgICAgICAgICAuaW5jbHVkZXMoZWxlbVt0aGlzLmlkRmllbGRdKVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5ub1Jlc3VsdHMgPSAhdGhpcy5hdXRvY29tcGxldGVDaG9pY2VzLnZhbHVlLmxlbmd0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNTZWFyY2hJbkVycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVJbnB1dERpc2FibGVkKCkge1xyXG4gICAgaWYgKCEhdGhpcy5kaXNhYmxlZCB8fCAoIXRoaXMuaXNNdWx0aSAmJiAhIXRoaXMuc2VsZWN0ZWRFbGVtcy5sZW5ndGgpKSB7XHJcbiAgICAgIHRoaXMuaW5wdXR0ZWQuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnB1dHRlZC5lbmFibGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmlzTXVsdGkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEVsZW1zID0gISF2YWx1ZSA/IFt2YWx1ZV0gOiBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRFbGVtcyA9ICEhdmFsdWUgPyB2YWx1ZSA6IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVJbnB1dERpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKG9uVG91Y2hlZDogRnVuY3Rpb24pIHtcclxuICAgIHRoaXMub25Ub3VjaCA9IG9uVG91Y2hlZDtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLnVwZGF0ZUlucHV0RGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5vbkNoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5pbnB1dD8ubmF0aXZlSW5wdXQ/Lm5hdGl2ZUVsZW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdrZXlkb3duJyxcclxuICAgICAgdGhpcy5yZW1vdmVMYXN0Q2hpcE9uQmFja3NwYWNlXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGVsZW06IFQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZEVsZW1zXHJcbiAgICAgIC5tYXAoKHUpID0+IHVbdGhpcy5pZEZpZWxkXSlcclxuICAgICAgLmluZGV4T2YoZWxlbVt0aGlzLmlkRmllbGRdKTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRFbGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlV3JhcHBlcih0aGlzLnNlbGVjdGVkRWxlbXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0ZWQoZXZlbnQ6IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkQ2hpcFN0cmVhbSQubmV4dChldmVudC5vcHRpb24udmFsdWUpO1xyXG4gICAgdGhpcy5pbnB1dHRlZC5zZXRWYWx1ZShudWxsKTtcclxuICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hvaWNlcy5uZXh0KFtdKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlV3JhcHBlcih2YWx1ZTogVFtdKSB7XHJcbiAgICBpZiAodGhpcy5pc011bHRpKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZS5sZW5ndGggPyB2YWx1ZVswXSA6IG51bGwpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVJbnB1dERpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICBhc3NpZ25FcnJvcnMoKSB7XHJcbiAgICBFc25VdGlscy5hc3NpZ25FcnJvcnModGhpcy5pbnB1dHRlZCwgdGhpcy5wYXJlbnRDb250cm9sKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbklucHV0Qmx1cigpIHtcclxuICAgIHRoaXMuYXNzaWduRXJyb3JzKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1hdXRvY29tcGxldGUtaW1wbC1iYXNlJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogRXNuQXV0b2NvbXBsZXRlU2VsZWN0SW1wbGVtZW50YXRpb25CYXNlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkF1dG9jb21wbGV0ZVNlbGVjdEltcGxlbWVudGF0aW9uQmFzZTxUPlxyXG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0XHJcbntcclxuICBASW5wdXQoKSBxdWVyeUZ1bmM6ICh0eHQ6IHN0cmluZykgPT4gUHJvbWlzZTxUW10gfCBudWxsPjtcclxuICBASW5wdXQoKSBpZEZpZWxkOiBrZXlvZiBUO1xyXG4gIEBJbnB1dCgpIG11bHRpPzogYm9vbGVhbiB8IHN0cmluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuIHwgc3RyaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgb3B0aW9uRmlsdGVyRnVuYzogKGVsbTogVCkgPT4gYm9vbGVhbiA9IChlbG0pID0+IHRydWU7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGVycm9yPzogRXNuSW5wdXRFcnJvcjtcclxuICBvbkNoYW5nZTogYW55ID0gKCkgPT4ge307XHJcbiAgb25Ub3VjaDogYW55ID0gKCkgPT4ge307XHJcblxyXG4gIHB1YmxpYyBjb250cm9sOiBGb3JtQ29udHJvbDtcclxuICBvbkNoYW5nZVN1YjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gIHBhcmVudENvbnRyb2w6IE5nQ29udHJvbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wobnVsbCk7XHJcbiAgfVxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghIXRoaXMucGFyZW50Q29udHJvbCkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlU3ViLmFkZChcclxuICAgICAgICB0aGlzLnBhcmVudENvbnRyb2wuY29udHJvbD8udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmFzc2lnbkVycm9ycygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hc3NpZ25FcnJvcnMoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMucGFyZW50Q29udHJvbCA9IHRoaXMuX2luamVjdG9yLmdldChOZ0NvbnRyb2wpO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlU3ViLmFkZChcclxuICAgICAgdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKG9uVG91Y2hlZDogRnVuY3Rpb24pIHtcclxuICAgIHRoaXMub25Ub3VjaCA9IG9uVG91Y2hlZDtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZURpc2FibGVTdGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGFzc2lnbkVycm9ycygpIHtcclxuICAgIEVzblV0aWxzLmFzc2lnbkVycm9ycyh0aGlzLmNvbnRyb2wsIHRoaXMucGFyZW50Q29udHJvbCk7XHJcbiAgfVxyXG59XHJcbiIsIjxtYXQtY2hpcC1ncmlkICNjaGlwTGlzdCByb2xlPVwiZ3JpZFwiPlxyXG4gIDxlc24taW5wdXQtdGV4dFxyXG4gICAgI2NoaXBJbnB1dFxyXG4gICAgW2xhYmVsXT1cImxhYmVsXCJcclxuICAgIFtuZ0NsYXNzXT1cInsgZGlzYWJsZWQ6IGlucHV0dGVkLmRpc2FibGVkIH1cIlxyXG4gICAgW2Zvcm1Db250cm9sXT1cImlucHV0dGVkXCJcclxuICAgIFtjaGlwSW5wdXRTZXBhcmF0b3JLZXlDb2Rlc109XCJzZXBhcmF0b3JLZXlzQ29kZXNcIlxyXG4gICAgW2NoaXBJbnB1dEZvcl09XCJjaGlwTGlzdFwiXHJcbiAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXHJcbiAgICBbZXJyb3JdPVwiZXJyb3JcIlxyXG4gICAgW2Zsb2F0TGFiZWxdPVwiIXRoaXMuc2VsZWN0ZWRFbGVtcy5sZW5ndGggPyAnYXV0bycgOiAnYWx3YXlzJ1wiXHJcbiAgICBbc2VhcmNoSWNvbl09XCIhaW5wdXR0ZWQuZGlzYWJsZWRcIlxyXG4gICAgKGJsdXIpPVwib25JbnB1dEJsdXIoKVwiXHJcbiAgICAoZm9jdXMpPVwib25Gb2N1cygpXCJcclxuICAgIFtoaW50XT1cImhpbnRcIlxyXG4gICAgaGludEFsaWduPVwic3RhcnRcIlxyXG4gID5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc011bHRpXCI+XHJcbiAgICAgIDxtYXQtY2hpcC1yb3cgKm5nRm9yPVwibGV0IGVsZW0gb2Ygc2VsZWN0ZWRFbGVtc1wiIGRpc2FibGVSaXBwbGU+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImNoaXBUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIlxyXG4gICAgICAgICAgICAgIGNoaXBUZW1wbGF0ZTtcclxuICAgICAgICAgICAgICBjb250ZXh0OiB7ICRpbXBsaWNpdDogZWxlbSwgcmVtb3ZlOiByZW1vdmVGbiwgZGlzYWJsZWQgfVxyXG4gICAgICAgICAgICBcIlxyXG4gICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbWF0LWNoaXAtcm93PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc011bHRpXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGVsZW0gb2Ygc2VsZWN0ZWRFbGVtc1wiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJzaW5nbGVFbGVtVGVtcGxhdGVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcclxuICAgICAgICAgICAgICBzaW5nbGVFbGVtVGVtcGxhdGU7XHJcbiAgICAgICAgICAgICAgY29udGV4dDogeyAkaW1wbGljaXQ6IGVsZW0sIHJlbW92ZTogcmVtb3ZlRm4sIGRpc2FibGVkIH1cclxuICAgICAgICAgICAgXCJcclxuICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZXNuLWlucHV0LXRleHQ+XHJcblxyXG4gIDxtYXQtYXV0b2NvbXBsZXRlXHJcbiAgICAjYXV0b2NvbXBsZXRlPVwibWF0QXV0b2NvbXBsZXRlXCJcclxuICAgIChvcHRpb25TZWxlY3RlZCk9XCJzZWxlY3RlZCgkZXZlbnQpXCJcclxuICA+XHJcbiAgICA8bWF0LW9wdGlvbiAqbmdJZj1cIm5vUmVzdWx0c1wiIFt2YWx1ZV09XCJcIiBkaXNhYmxlZFxyXG4gICAgICA+e3tub1Jlc3VsdHNMYWJlbH19PC9tYXQtb3B0aW9uXHJcbiAgICA+XHJcblxyXG4gICAgPG1hdC1vcHRpb24gKm5nSWY9XCJpc1NlYXJjaEluRXJyb3IgJiYgIXNlYXJjaGluZ1Jlc3VsdHNcIiBbdmFsdWVdPVwiXCIgZGlzYWJsZWRcclxuICAgICAgPjxzcGFuIGNsYXNzPVwiZXNuLWF1dG9jb21wbGV0ZS1zZWxlY3Qtb3B0aW9uLWVycm9yLWluZm9cIlxyXG4gICAgICAgID5VbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSBsb3JzIGRlIGxhIHJlY2hlcmNoZTwvc3BhblxyXG4gICAgICA+PC9tYXQtb3B0aW9uXHJcbiAgICA+XHJcbiAgICA8bWF0LW9wdGlvbiAqbmdJZj1cInNlYXJjaGluZ1Jlc3VsdHNcIiBbdmFsdWVdPVwiXCIgZGlzYWJsZWQ+XHJcbiAgICAgIDxlc24tbG9hZGVyPjwvZXNuLWxvYWRlcj5cclxuICAgIDwvbWF0LW9wdGlvbj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2VhcmNoaW5nUmVzdWx0cyAmJiAhaXNTZWFyY2hJbkVycm9yXCI+XHJcbiAgICAgIDxtYXQtb3B0aW9uXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IGVsZW0gb2YgYXV0b2NvbXBsZXRlQ2hvaWNlcyB8IGFzeW5jXCJcclxuICAgICAgICBbdmFsdWVdPVwiZWxlbVwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cIiFvcHRpb25GaWx0ZXJGdW5jKGVsZW0pXCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7IHVuc2VsZWN0YWJsZTogIW9wdGlvbkZpbHRlckZ1bmMoZWxlbSkgfVwiXHJcbiAgICAgID5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwib3B0aW9uVGVtcGxhdGVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJvcHRpb25UZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGVsZW0gfVwiXHJcbiAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9tYXQtYXV0b2NvbXBsZXRlPlxyXG48L21hdC1jaGlwLWdyaWQ+XHJcblxyXG4iXX0=