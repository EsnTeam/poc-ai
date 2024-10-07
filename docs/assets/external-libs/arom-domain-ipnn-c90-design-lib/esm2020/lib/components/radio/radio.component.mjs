/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Attribute, ChangeDetectionStrategy, Component, ContentChildren, Directive, EventEmitter, forwardRef, Inject, InjectionToken, Input, Optional, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { mixinDisableRipple, mixinTabIndex, } from '@angular/material/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/collections";
import * as i3 from "@angular/material/core";
// Increasing integer for generating unique ids for radio components.
let nextUniqueId = 0;
/** Change event object emitted by radio button and radio group. */
export class EsnRadioChange {
    constructor(
    /** The radio button that emits the change event. */
    source, 
    /** The value of the radio button. */
    value) {
        this.source = source;
        this.value = value;
    }
}
/**
 * Provider Expression that allows esn-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */
export const ESN_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EsnRadioGroup),
    multi: true,
};
/**
 * Injection token that can be used to inject instances of `EsnRadioGroup`. It serves as
 * alternative token to the actual `EsnRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
export const ESN_RADIO_GROUP = new InjectionToken('EsnRadioGroup');
export const ESN_RADIO_DEFAULT_OPTIONS = new InjectionToken('esn-radio-default-options', {
    providedIn: 'root',
    factory: ESN_RADIO_DEFAULT_OPTIONS_FACTORY,
});
export function ESN_RADIO_DEFAULT_OPTIONS_FACTORY() {
    return {
        color: 'primary',
        size: 'md'
    };
}
/**
 * Base class with all of the `EsnRadioGroup` functionality.
 * @docs-private
 */
export class _EsnRadioGroupBase {
    constructor(_changeDetector) {
        this._changeDetector = _changeDetector;
        /** Selected value for the radio group. */
        this._value = null;
        /** The HTML name attribute applied to radio buttons in this group. */
        this._name = `esn-radio-group-${nextUniqueId++}`;
        /** The currently selected radio button. Should match value. */
        this._selected = null;
        /** Whether the `value` has been set to its initial value. */
        this._isInitialized = false;
        /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
        this._labelPosition = 'after';
        /** Whether the radio group is disabled. */
        this._disabled = false;
        /** Whether the radio group is required. */
        this._required = false;
        /** The method to be called in order to update ngModel */
        this._controlValueAccessorChangeFn = () => { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * @docs-private
         */
        this.onTouched = () => { };
        /**
         * Event emitted when the group value changes.
         * Change events are only emitted when the value changes due to user interaction with
         * a radio button (the same behavior as `<input type-"radio">`).
         */
        this.change = new EventEmitter();
    }
    /** Name of the radio button group. All radio buttons inside this group will use this name. */
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
        this._updateRadioButtonNames();
    }
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    get labelPosition() {
        return this._labelPosition;
    }
    set labelPosition(v) {
        this._labelPosition = v === 'before' ? 'before' : 'after';
        this._markRadiosForCheck();
    }
    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value. If there is not such a corresponding
     * radio button, this value persists to be applied in case a new radio button is added with a
     * matching value.
     */
    get value() {
        return this._value;
    }
    set value(newValue) {
        if (this._value !== newValue) {
            // Set this before proceeding to ensure no circular loop occurs with selection.
            this._value = newValue;
            this._updateSelectedRadioFromValue();
            this._checkSelectedRadioButton();
        }
    }
    _checkSelectedRadioButton() {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    }
    /**
     * The currently selected radio button. If set to a new radio button, the radio group value
     * will be updated to match the new selected button.
     */
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this._selected = selected;
        this.value = selected ? selected.value : null;
        this._checkSelectedRadioButton();
    }
    /** Whether the radio group is disabled */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this._markRadiosForCheck();
    }
    /** Whether the radio group is required */
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this._markRadiosForCheck();
    }
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    ngAfterContentInit() {
        // Mark this component as initialized in AfterContentInit because the initial value can
        // possibly be set by NgModel on EsnRadioGroup, and it is possible that the OnInit of the
        // NgModel occurs *after* the OnInit of the EsnRadioGroup.
        this._isInitialized = true;
    }
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    _touch() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    _updateRadioButtonNames() {
        if (this._radios) {
            this._radios.forEach(radio => {
                radio.name = this.name;
                radio._markForCheck();
            });
        }
    }
    /** Updates the `selected` radio button from the internal _value state. */
    _updateSelectedRadioFromValue() {
        // If the value already matches the selected radio, do nothing.
        const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
        if (this._radios && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach(radio => {
                radio.checked = this.value === radio.value;
                if (radio.checked) {
                    this._selected = radio;
                }
            });
        }
    }
    /** Dispatch change event with current selection and group value. */
    _emitChangeEvent() {
        if (this._isInitialized) {
            this.change.emit(new EsnRadioChange(this._selected, this._value));
        }
    }
    _markRadiosForCheck() {
        if (this._radios) {
            this._radios.forEach(radio => radio._markForCheck());
        }
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value) {
        this.value = value;
        this._changeDetector.markForCheck();
    }
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetector.markForCheck();
    }
}
_EsnRadioGroupBase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: _EsnRadioGroupBase, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
_EsnRadioGroupBase.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: _EsnRadioGroupBase, inputs: { color: "color", size: "size", name: "name", labelPosition: "labelPosition", value: "value", selected: "selected", disabled: "disabled", required: "required" }, outputs: { change: "change" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: _EsnRadioGroupBase, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { change: [{
                type: Output
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }], name: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], value: [{
                type: Input
            }], selected: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }] } });
// Boilerplate for applying mixins to EsnRadioButton.
/** @docs-private */
class EsnRadioButtonBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _EsnRadioButtonMixinBase = mixinDisableRipple(mixinTabIndex(EsnRadioButtonBase));
/**
 * Base class with all of the `EsnRadioButton` functionality.
 * @docs-private
 */
export class _EsnRadioButtonBase extends _EsnRadioButtonMixinBase {
    constructor(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _providerOverride, tabIndex) {
        super(elementRef);
        this._changeDetector = _changeDetector;
        this._focusMonitor = _focusMonitor;
        this._radioDispatcher = _radioDispatcher;
        this._providerOverride = _providerOverride;
        this._uniqueId = `esn-radio-${++nextUniqueId}`;
        /** The unique ID for the radio button. */
        this.id = this._uniqueId;
        /**
         * Event emitted when the checked state of this radio button changes.
         * Change events are only emitted when the value changes due to user interaction with
         * the radio button (the same behavior as `<input type-"radio">`).
         */
        this.change = new EventEmitter();
        /** Whether this radio is checked. */
        this._checked = false;
        /** Value assigned to this radio. */
        this._value = null;
        /** Unregister function for _radioDispatcher */
        this._removeUniqueSelectionListener = () => { };
        // Assertions. Ideally these should be stripped out by the compiler.
        // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
        this.radioGroup = radioGroup;
        this._noopAnimations = animationMode === 'NoopAnimations';
        if (tabIndex) {
            this.tabIndex = coerceNumberProperty(tabIndex, 0);
        }
    }
    /** Whether this radio button is checked. */
    get checked() {
        return this._checked;
    }
    set checked(value) {
        const newCheckedState = coerceBooleanProperty(value);
        if (this._checked !== newCheckedState) {
            this._checked = newCheckedState;
            if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                this.radioGroup.selected = this;
            }
            else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                // When unchecking the selected radio button, update the selected radio
                // property on the group.
                this.radioGroup.selected = null;
            }
            if (newCheckedState) {
                // Notify all radio buttons with the same name to un-check.
                this._radioDispatcher.notify(this.id, this.name);
            }
            this._changeDetector.markForCheck();
        }
    }
    /** The value of this radio button. */
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            if (this.radioGroup !== null) {
                if (!this.checked) {
                    // Update checked when the value changed to match the radio group's value
                    this.checked = this.radioGroup.value === value;
                }
                if (this.checked) {
                    this.radioGroup.selected = this;
                }
            }
        }
    }
    /** Whether the label should appear after or before the radio button. Defaults to 'after' */
    get labelPosition() {
        return this._labelPosition || (this.radioGroup && this.radioGroup.labelPosition) || 'after';
    }
    set labelPosition(value) {
        this._labelPosition = value;
    }
    /** Whether the radio button is disabled. */
    get disabled() {
        return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
    }
    set disabled(value) {
        this._setDisabled(coerceBooleanProperty(value));
    }
    /** Whether the radio button is required. */
    get required() {
        return this._required || (this.radioGroup && this.radioGroup.required);
    }
    set required(value) {
        this._required = coerceBooleanProperty(value);
    }
    /** Theme color of the radio button. */
    get color() {
        // As per Material design specifications the selection control radio should use the accent color
        // palette by default. https://material.io/guidelines/components/selection-controls.html
        return (this._color ||
            (this.radioGroup && this.radioGroup.color) ||
            (this._providerOverride && this._providerOverride.color) ||
            'accent');
    }
    set color(newValue) {
        this._color = newValue;
    }
    /** Theme color of the radio button. */
    get size() {
        // As per Material design specifications the selection control radio should use the accent color
        // palette by default. https://material.io/guidelines/components/selection-controls.html
        return (this._size ||
            (this.radioGroup && this.radioGroup.size) ||
            (this._providerOverride && this._providerOverride.size) ||
            'md');
    }
    set size(newValue) {
        this._size = newValue;
    }
    /** ID of the native input element inside `<esn-radio-button>` */
    get inputId() {
        return `${this.id || this._uniqueId}-input`;
    }
    /** Focuses the radio button. */
    focus(options, origin) {
        if (origin) {
            this._focusMonitor.focusVia(this._inputElement, origin, options);
        }
        else {
            this._inputElement.nativeElement.focus(options);
        }
    }
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     */
    _markForCheck() {
        // When group value changes, the button will not be notified. Use `markForCheck` to explicit
        // update radio button's status
        this._changeDetector.markForCheck();
    }
    ngOnInit() {
        if (this.radioGroup) {
            // If the radio is inside a radio group, determine if it should be checked
            this.checked = this.radioGroup.value === this._value;
            if (this.checked) {
                this.radioGroup.selected = this;
            }
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
        this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
            if (id !== this.id && name === this.name) {
                this.checked = false;
            }
        });
    }
    ngDoCheck() {
        this._updateTabIndex();
    }
    ngAfterViewInit() {
        this._updateTabIndex();
        this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin && this.radioGroup) {
                this.radioGroup._touch();
            }
        });
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._removeUniqueSelectionListener();
    }
    /** Dispatch change event with current value. */
    _emitChangeEvent() {
        this.change.emit(new EsnRadioChange(this, this._value));
    }
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `radio-button` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    /** Triggered when the radio button receives an interaction from the user. */
    _onInputInteraction(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
        if (!this.checked && !this.disabled) {
            const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
            this.checked = true;
            this._emitChangeEvent();
            if (this.radioGroup) {
                this.radioGroup._controlValueAccessorChangeFn(this.value);
                if (groupValueChanged) {
                    this.radioGroup._emitChangeEvent();
                }
            }
        }
    }
    /** Sets the disabled state and marks for check if a change occurred. */
    _setDisabled(value) {
        if (this._disabled !== value) {
            this._disabled = value;
            this._changeDetector.markForCheck();
        }
    }
    /** Gets the tabindex for the underlying input element. */
    _updateTabIndex() {
        const group = this.radioGroup;
        let value;
        // Implement a roving tabindex if the button is inside a group. For most cases this isn't
        // necessary, because the browser handles the tab order for inputs inside a group automatically,
        // but we need an explicitly higher tabindex for the selected button in order for things like
        // the focus trap to pick it up correctly.
        if (!group || !group.selected || this.disabled) {
            value = this.tabIndex;
        }
        else {
            value = group.selected === this ? this.tabIndex : -1;
        }
        if (value !== this._previousTabIndex) {
            // We have to set the tabindex directly on the DOM node, because it depends on
            // the selected state which is prone to "changed after checked errors".
            const input = this._inputElement?.nativeElement;
            if (input) {
                input.setAttribute('tabindex', value + '');
                this._previousTabIndex = value;
            }
        }
    }
}
_EsnRadioButtonBase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: _EsnRadioButtonBase, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive });
_EsnRadioButtonBase.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: _EsnRadioButtonBase, inputs: { id: "id", name: "name", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"], checked: "checked", value: "value", labelPosition: "labelPosition", disabled: "disabled", required: "required", color: "color", size: "size" }, outputs: { change: "change" }, viewQueries: [{ propertyName: "_inputElement", first: true, predicate: ["input"], descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: _EsnRadioButtonBase, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: _EsnRadioGroupBase }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }, { type: i2.UniqueSelectionDispatcher }, { type: undefined }, { type: undefined }, { type: undefined }]; }, propDecorators: { id: [{
                type: Input
            }], name: [{
                type: Input
            }], ariaLabel: [{
                type: Input,
                args: ['aria-label']
            }], ariaLabelledby: [{
                type: Input,
                args: ['aria-labelledby']
            }], ariaDescribedby: [{
                type: Input,
                args: ['aria-describedby']
            }], checked: [{
                type: Input
            }], value: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }], change: [{
                type: Output
            }], _inputElement: [{
                type: ViewChild,
                args: ['input']
            }] } });
/**
 * A group of radio buttons. May contain one or more `<esn-radio-button>` elements.
 */
export class EsnRadioGroup extends _EsnRadioGroupBase {
}
EsnRadioGroup.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnRadioGroup, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnRadioGroup.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnRadioGroup, selector: "esn-radio-group", host: { attributes: { "role": "radiogroup" }, classAttribute: "esn-mdc-radio-group" }, providers: [
        ESN_RADIO_GROUP_CONTROL_VALUE_ACCESSOR,
        { provide: ESN_RADIO_GROUP, useExisting: EsnRadioGroup },
    ], queries: [{ propertyName: "_radios", predicate: i0.forwardRef(function () { return EsnRadioButton; }), descendants: true }], exportAs: ["EsnRadioGroup"], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnRadioGroup, decorators: [{
            type: Directive,
            args: [{
                    selector: 'esn-radio-group',
                    exportAs: 'EsnRadioGroup',
                    providers: [
                        ESN_RADIO_GROUP_CONTROL_VALUE_ACCESSOR,
                        { provide: ESN_RADIO_GROUP, useExisting: EsnRadioGroup },
                    ],
                    host: {
                        'role': 'radiogroup',
                        'class': 'esn-mdc-radio-group',
                    },
                }]
        }], propDecorators: { _radios: [{
                type: ContentChildren,
                args: [forwardRef(() => EsnRadioButton), { descendants: true }]
            }] } });
export class EsnRadioButton extends _EsnRadioButtonBase {
    constructor(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _providerOverride, tabIndex) {
        super(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _providerOverride, tabIndex);
    }
}
EsnRadioButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnRadioButton, deps: [{ token: ESN_RADIO_GROUP, optional: true }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.FocusMonitor }, { token: i2.UniqueSelectionDispatcher }, { token: ANIMATION_MODULE_TYPE, optional: true }, { token: ESN_RADIO_DEFAULT_OPTIONS, optional: true }, { token: 'tabindex', attribute: true }], target: i0.ɵɵFactoryTarget.Component });
EsnRadioButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnRadioButton, selector: "esn-radio-button", inputs: { disableRipple: "disableRipple", tabIndex: "tabIndex" }, host: { listeners: { "focus": "_inputElement.nativeElement.focus()" }, properties: { "attr.id": "id", "class.esn-radio-button-primary": "color === \"primary\" || color === undefined", "class.esn-radio-button-accent": "color === \"accent\"", "class.esn-radio-button-error": "color === \"error\"", "class.esn-radio-button-success": "color === \"success\"", "class.esn-radio-button-neutral": "color === \"neutral\"", "class.esn-radio-button-xs": "size === \"xs\"", "class.esn-radio-button-sm": "size === \"sm\"", "class.esn-radio-button-md": "size === \"md\"", "class.esn-radio-button-lg": "size === \"lg\"", "class.esn-radio-button-xl": "size === \"xl\"", "class.esn-mdc-radio-checked": "checked", "class._esn-animation-noopable": "_noopAnimations", "attr.tabindex": "null", "attr.aria-label": "null", "attr.aria-labelledby": "null", "attr.aria-describedby": "null" }, classAttribute: "esn-mdc-radio-button" }, exportAs: ["EsnRadioButton"], usesInheritance: true, ngImport: i0, template: "<div class=\"mdc-form-field esn-radio-button\" #formField\r\n     [class.mdc-form-field--align-end]=\"labelPosition == 'before'\">\r\n  <div class=\"mdc-radio\" [class.mdc-radio--disabled]=\"disabled\">\r\n    <!-- Render this element first so the input is on top. -->\r\n    <div class=\"esn-mdc-radio-touch-target\" (click)=\"_onInputInteraction($event)\"></div>\r\n    <input #input class=\"mdc-radio__native-control\" type=\"radio\"\r\n           [id]=\"inputId\"\r\n           [checked]=\"checked\"\r\n           [disabled]=\"disabled\"\r\n           [attr.name]=\"name\"\r\n           [attr.value]=\"value\"\r\n           [required]=\"required\"\r\n           [attr.aria-label]=\"ariaLabel\"\r\n           [attr.aria-labelledby]=\"ariaLabelledby\"\r\n           [attr.aria-describedby]=\"ariaDescribedby\"\r\n           (change)=\"_onInputInteraction($event)\">\r\n    <div class=\"mdc-radio__background\">\r\n      <div class=\"mdc-radio__outer-circle\"></div>\r\n      <div class=\"mdc-radio__inner-circle\"></div>\r\n    </div>\r\n    <div mat-ripple class=\"esn-radio-ripple mat-mdc-focus-indicator\"\r\n         [matRippleTrigger]=\"formField\"\r\n         [matRippleDisabled]=\"_isRippleDisabled()\"\r\n         [matRippleCentered]=\"true\">\r\n      <div class=\"esn-ripple-element mat-radio-persistent-ripple\"></div>\r\n    </div>\r\n  </div>\r\n  <label [for]=\"inputId\">\r\n    <ng-content class=\"label\" select=\"[label]\"></ng-content>\r\n    <ng-content class=\"subtitle\" select=\"[subtitle]\"></ng-content>\r\n    <ng-content></ng-content>  </label>\r\n</div>\r\n", styles: [".mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio[hidden]{display:none}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background:before{position:absolute;transform:scale(0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";transition:opacity .12s 0ms cubic-bezier(.4,0,.6,1),transform .12s 0ms cubic-bezier(.4,0,.6,1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color .12s 0ms cubic-bezier(.4,0,.6,1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0);border-width:10px;border-style:solid;border-radius:50%;transition:transform .12s 0ms cubic-bezier(.4,0,.6,1),border-color .12s 0ms cubic-bezier(.4,0,.6,1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin:4px}.mdc-radio--touch .mdc-radio__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring:after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring:after{content:\"\";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring:after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring:after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity .12s 0ms cubic-bezier(0,0,.2,1),transform .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform .12s 0ms cubic-bezier(0,0,.2,1),border-color .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(.5);transition:transform .12s 0ms cubic-bezier(0,0,.2,1),border-color .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background:before{transform:scale(1);opacity:.12;transition:opacity .12s 0ms cubic-bezier(0,0,.2,1),transform .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.esn-mdc-radio-button{-webkit-tap-highlight-color:transparent}.esn-mdc-radio-button .mdc-radio{padding:calc((var(--mdc-radio-state-layer-size, 40px) - 20px) / 2)}.esn-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, #000)}.esn-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, #000)}.esn-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity, .38)}.esn-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity, .38)}.esn-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, #000)}.esn-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-unselected-icon-opacity, .38)}.esn-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.esn-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle,.esn-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-focus-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-hover-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, #000)}.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, #000)}.esn-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, #000)}.esn-mdc-radio-button .mdc-radio .mdc-radio__background:before{top:calc(-1 * (var(--mdc-radio-state-layer-size, 40px) - 20px) / 2);left:calc(-1 * (var(--mdc-radio-state-layer-size, 40px) - 20px) / 2);width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px)}.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control{top:calc((var(--mdc-radio-state-layer-size, 40px) - var(--mdc-radio-state-layer-size, 40px)) / 2);right:calc((var(--mdc-radio-state-layer-size, 40px) - var(--mdc-radio-state-layer-size, 40px)) / 2);left:calc((var(--mdc-radio-state-layer-size, 40px) - var(--mdc-radio-state-layer-size, 40px)) / 2);width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px)}.esn-mdc-radio-button .mdc-radio .mdc-radio__background:before{background-color:var(--esn-mdc-radio-ripple-color, transparent)}.esn-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background:before{opacity:.04;transform:scale(1)}.esn-mdc-radio-button.esn-mdc-radio-checked .mdc-radio__background:before{background-color:var(--esn-mdc-radio-checked-ripple-color, transparent)}.esn-mdc-radio-button.esn-mdc-radio-checked .mat-ripple-element{background-color:var(--mat-mdc-radio-checked-ripple-color, transparent)}.esn-mdc-radio-button .mat-radio-ripple{inset:0;position:absolute;pointer-events:none;border-radius:50%}.esn-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.esn-mdc-radio-button .mat-radio-ripple:before{border-radius:50%}.esn-mdc-radio-button._esn-animation-noopable .mdc-radio__background:before,.esn-mdc-radio-button._esn-animation-noopable .mdc-radio__outer-circle,.esn-mdc-radio-button._esn-animation-noopable .mdc-radio__inner-circle{transition:none!important}.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, black)}.esn-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator:before{content:\"\"}.esn-mdc-radio-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}[dir=rtl] .esn-mdc-radio-touch-target{left:0;right:50%;transform:translate(50%,-50%)}.esn-radio-button,.esn-mdc-radio-button{display:inline-flex;align-items:start}.esn-radio-button label,.esn-mdc-radio-button label{font-size:1rem;line-height:1.5rem;font-weight:500;margin-top:.5rem}.esn-radio-button .mdc-radio__background,.esn-mdc-radio-button .mdc-radio__background{border-radius:4px}.esn-radio-button:not(:last-child),.esn-mdc-radio-button:not(:last-child){margin-bottom:1rem}.esn-radio-button [label],.esn-mdc-radio-button [label]{font-size:1rem;line-height:1.5rem;font-weight:500;display:inline-flex;align-items:center}.esn-radio-button [label]:not(:last-child):not(:empty),.esn-mdc-radio-button [label]:not(:last-child):not(:empty){margin-bottom:.25rem}.esn-radio-button [label].esn-radio-label-sm,.esn-mdc-radio-button [label].esn-radio-label-sm{font-size:.875rem;line-height:1.25rem;font-weight:500}.esn-radio-button [label] .esn-badge,.esn-mdc-radio-button [label] .esn-badge{margin-left:1rem}.esn-radio-button [subtitle],.esn-mdc-radio-button [subtitle]{font-size:.875rem;line-height:1.25rem;font-weight:400}.esn-radio-button [subtitle]:not(:last-child):not(:empty),.esn-mdc-radio-button [subtitle]:not(:last-child):not(:empty){margin-bottom:1rem}.esn-radio-button-disabled label,.esn-mdc-radio-button-disabled label{opacity:.5}\n"], dependencies: [{ kind: "directive", type: i3.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnRadioButton, decorators: [{
            type: Component,
            args: [{ selector: 'esn-radio-button', host: {
                        'class': 'esn-mdc-radio-button',
                        '[attr.id]': 'id',
                        '[class.esn-radio-button-primary]': 'color === "primary" || color === undefined',
                        '[class.esn-radio-button-accent]': 'color === "accent"',
                        '[class.esn-radio-button-error]': 'color === "error"',
                        '[class.esn-radio-button-success]': 'color === "success"',
                        '[class.esn-radio-button-neutral]': 'color === "neutral"',
                        '[class.esn-radio-button-xs]': 'size === "xs"',
                        '[class.esn-radio-button-sm]': 'size === "sm"',
                        '[class.esn-radio-button-md]': 'size === "md"',
                        '[class.esn-radio-button-lg]': 'size === "lg"',
                        '[class.esn-radio-button-xl]': 'size === "xl"',
                        '[class.esn-mdc-radio-checked]': 'checked',
                        '[class._esn-animation-noopable]': '_noopAnimations',
                        // Needs to be removed since it causes some a11y issues (see #21266).
                        '[attr.tabindex]': 'null',
                        '[attr.aria-label]': 'null',
                        '[attr.aria-labelledby]': 'null',
                        '[attr.aria-describedby]': 'null',
                        // Note: under normal conditions focus shouldn't land on this element, however it may be
                        // programmatically set, for example inside of a focus trap, in this case we want to forward
                        // the focus to the native element.
                        '(focus)': '_inputElement.nativeElement.focus()',
                    }, inputs: ['disableRipple', 'tabIndex'], exportAs: 'EsnRadioButton', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mdc-form-field esn-radio-button\" #formField\r\n     [class.mdc-form-field--align-end]=\"labelPosition == 'before'\">\r\n  <div class=\"mdc-radio\" [class.mdc-radio--disabled]=\"disabled\">\r\n    <!-- Render this element first so the input is on top. -->\r\n    <div class=\"esn-mdc-radio-touch-target\" (click)=\"_onInputInteraction($event)\"></div>\r\n    <input #input class=\"mdc-radio__native-control\" type=\"radio\"\r\n           [id]=\"inputId\"\r\n           [checked]=\"checked\"\r\n           [disabled]=\"disabled\"\r\n           [attr.name]=\"name\"\r\n           [attr.value]=\"value\"\r\n           [required]=\"required\"\r\n           [attr.aria-label]=\"ariaLabel\"\r\n           [attr.aria-labelledby]=\"ariaLabelledby\"\r\n           [attr.aria-describedby]=\"ariaDescribedby\"\r\n           (change)=\"_onInputInteraction($event)\">\r\n    <div class=\"mdc-radio__background\">\r\n      <div class=\"mdc-radio__outer-circle\"></div>\r\n      <div class=\"mdc-radio__inner-circle\"></div>\r\n    </div>\r\n    <div mat-ripple class=\"esn-radio-ripple mat-mdc-focus-indicator\"\r\n         [matRippleTrigger]=\"formField\"\r\n         [matRippleDisabled]=\"_isRippleDisabled()\"\r\n         [matRippleCentered]=\"true\">\r\n      <div class=\"esn-ripple-element mat-radio-persistent-ripple\"></div>\r\n    </div>\r\n  </div>\r\n  <label [for]=\"inputId\">\r\n    <ng-content class=\"label\" select=\"[label]\"></ng-content>\r\n    <ng-content class=\"subtitle\" select=\"[subtitle]\"></ng-content>\r\n    <ng-content></ng-content>  </label>\r\n</div>\r\n", styles: [".mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio[hidden]{display:none}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background:before{position:absolute;transform:scale(0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";transition:opacity .12s 0ms cubic-bezier(.4,0,.6,1),transform .12s 0ms cubic-bezier(.4,0,.6,1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color .12s 0ms cubic-bezier(.4,0,.6,1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0);border-width:10px;border-style:solid;border-radius:50%;transition:transform .12s 0ms cubic-bezier(.4,0,.6,1),border-color .12s 0ms cubic-bezier(.4,0,.6,1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin:4px}.mdc-radio--touch .mdc-radio__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring:after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring:after{content:\"\";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring:after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring:after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity .12s 0ms cubic-bezier(0,0,.2,1),transform .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform .12s 0ms cubic-bezier(0,0,.2,1),border-color .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(.5);transition:transform .12s 0ms cubic-bezier(0,0,.2,1),border-color .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background:before{transform:scale(1);opacity:.12;transition:opacity .12s 0ms cubic-bezier(0,0,.2,1),transform .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.esn-mdc-radio-button{-webkit-tap-highlight-color:transparent}.esn-mdc-radio-button .mdc-radio{padding:calc((var(--mdc-radio-state-layer-size, 40px) - 20px) / 2)}.esn-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, #000)}.esn-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, #000)}.esn-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity, .38)}.esn-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity, .38)}.esn-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, #000)}.esn-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-unselected-icon-opacity, .38)}.esn-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.esn-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle,.esn-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-focus-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-hover-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, #6200ee)}.esn-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, #000)}.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, #000)}.esn-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, #000)}.esn-mdc-radio-button .mdc-radio .mdc-radio__background:before{top:calc(-1 * (var(--mdc-radio-state-layer-size, 40px) - 20px) / 2);left:calc(-1 * (var(--mdc-radio-state-layer-size, 40px) - 20px) / 2);width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px)}.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control{top:calc((var(--mdc-radio-state-layer-size, 40px) - var(--mdc-radio-state-layer-size, 40px)) / 2);right:calc((var(--mdc-radio-state-layer-size, 40px) - var(--mdc-radio-state-layer-size, 40px)) / 2);left:calc((var(--mdc-radio-state-layer-size, 40px) - var(--mdc-radio-state-layer-size, 40px)) / 2);width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px)}.esn-mdc-radio-button .mdc-radio .mdc-radio__background:before{background-color:var(--esn-mdc-radio-ripple-color, transparent)}.esn-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background:before{opacity:.04;transform:scale(1)}.esn-mdc-radio-button.esn-mdc-radio-checked .mdc-radio__background:before{background-color:var(--esn-mdc-radio-checked-ripple-color, transparent)}.esn-mdc-radio-button.esn-mdc-radio-checked .mat-ripple-element{background-color:var(--mat-mdc-radio-checked-ripple-color, transparent)}.esn-mdc-radio-button .mat-radio-ripple{inset:0;position:absolute;pointer-events:none;border-radius:50%}.esn-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.esn-mdc-radio-button .mat-radio-ripple:before{border-radius:50%}.esn-mdc-radio-button._esn-animation-noopable .mdc-radio__background:before,.esn-mdc-radio-button._esn-animation-noopable .mdc-radio__outer-circle,.esn-mdc-radio-button._esn-animation-noopable .mdc-radio__inner-circle{transition:none!important}.esn-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, black)}.esn-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator:before{content:\"\"}.esn-mdc-radio-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}[dir=rtl] .esn-mdc-radio-touch-target{left:0;right:50%;transform:translate(50%,-50%)}.esn-radio-button,.esn-mdc-radio-button{display:inline-flex;align-items:start}.esn-radio-button label,.esn-mdc-radio-button label{font-size:1rem;line-height:1.5rem;font-weight:500;margin-top:.5rem}.esn-radio-button .mdc-radio__background,.esn-mdc-radio-button .mdc-radio__background{border-radius:4px}.esn-radio-button:not(:last-child),.esn-mdc-radio-button:not(:last-child){margin-bottom:1rem}.esn-radio-button [label],.esn-mdc-radio-button [label]{font-size:1rem;line-height:1.5rem;font-weight:500;display:inline-flex;align-items:center}.esn-radio-button [label]:not(:last-child):not(:empty),.esn-mdc-radio-button [label]:not(:last-child):not(:empty){margin-bottom:.25rem}.esn-radio-button [label].esn-radio-label-sm,.esn-mdc-radio-button [label].esn-radio-label-sm{font-size:.875rem;line-height:1.25rem;font-weight:500}.esn-radio-button [label] .esn-badge,.esn-mdc-radio-button [label] .esn-badge{margin-left:1rem}.esn-radio-button [subtitle],.esn-mdc-radio-button [subtitle]{font-size:.875rem;line-height:1.25rem;font-weight:400}.esn-radio-button [subtitle]:not(:last-child):not(:empty),.esn-mdc-radio-button [subtitle]:not(:last-child):not(:empty){margin-bottom:1rem}.esn-radio-button-disabled label,.esn-mdc-radio-button-disabled label{opacity:.5}\n"] }]
        }], ctorParameters: function () { return [{ type: EsnRadioGroup, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ESN_RADIO_GROUP]
                }] }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }, { type: i2.UniqueSelectionDispatcher }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ANIMATION_MODULE_TYPE]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ESN_RADIO_DEFAULT_OPTIONS]
                }] }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: ['tabindex']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUdMLFNBQVMsRUFDVCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBR1QsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLGtCQUFrQixFQUNsQixhQUFhLEdBQ2QsTUFBTSx3QkFBd0IsQ0FBQztBQUVoQyxPQUFPLEVBQWUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRXZFLHFFQUFxRTtBQUNyRSxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFJckIsbUVBQW1FO0FBQ25FLE1BQU0sT0FBTyxjQUFjO0lBQ3pCO0lBQ0Usb0RBQW9EO0lBQzdDLE1BQTJCO0lBQ2xDLHFDQUFxQztJQUM5QixLQUFVO1FBRlYsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUFFM0IsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUNoQixDQUFDO0NB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VUFBVSxDQUFDLFlBQzNCLGdCQUFnQixpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNOzswQkFJNUMsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxlQUFlOzswQkFLbEMsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxxQkFBcUI7OzBCQUN4QyxRQUFROzswQkFDUixNQUFNOzJCQUFDLHlCQUF5Qjs7MEJBRWhDLFNBQVM7MkJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQXR0cmlidXRlLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIERvQ2hlY2ssXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0aW9uVG9rZW4sXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDYW5EaXNhYmxlUmlwcGxlLFxyXG4gIEhhc1RhYkluZGV4LFxyXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcclxuICBtaXhpblRhYkluZGV4LFxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQge0ZvY3VzTW9uaXRvciwgRm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlTnVtYmVyUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcbmltcG9ydCB7VW5pcXVlU2VsZWN0aW9uRGlzcGF0Y2hlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcclxuaW1wb3J0IHtBTklNQVRJT05fTU9EVUxFX1RZUEV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vLyBJbmNyZWFzaW5nIGludGVnZXIgZm9yIGdlbmVyYXRpbmcgdW5pcXVlIGlkcyBmb3IgcmFkaW8gY29tcG9uZW50cy5cclxubGV0IG5leHRVbmlxdWVJZCA9IDA7XHJcbmV4cG9ydCB0eXBlIEVzblJhZGlvU2l6ZSA9ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgdW5kZWZpbmVkO1xyXG5leHBvcnQgdHlwZSBFc25DaGVja2JveENvbG9yID0gJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ25ldXRyYWwnIHwgdW5kZWZpbmVkO1xyXG5cclxuLyoqIENoYW5nZSBldmVudCBvYmplY3QgZW1pdHRlZCBieSByYWRpbyBidXR0b24gYW5kIHJhZGlvIGdyb3VwLiAqL1xyXG5leHBvcnQgY2xhc3MgRXNuUmFkaW9DaGFuZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIFRoZSByYWRpbyBidXR0b24gdGhhdCBlbWl0cyB0aGUgY2hhbmdlIGV2ZW50LiAqL1xyXG4gICAgcHVibGljIHNvdXJjZTogX0VzblJhZGlvQnV0dG9uQmFzZSxcclxuICAgIC8qKiBUaGUgdmFsdWUgb2YgdGhlIHJhZGlvIGJ1dHRvbi4gKi9cclxuICAgIHB1YmxpYyB2YWx1ZTogYW55LFxyXG4gICkge31cclxufVxyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVyIEV4cHJlc3Npb24gdGhhdCBhbGxvd3MgZXNuLXJhZGlvLWdyb3VwIHRvIHJlZ2lzdGVyIGFzIGEgQ29udHJvbFZhbHVlQWNjZXNzb3IuIFRoaXNcclxuICogYWxsb3dzIGl0IHRvIHN1cHBvcnQgWyhuZ01vZGVsKV0gYW5kIG5nQ29udHJvbC5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEVTTl9SQURJT19HUk9VUF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXNuUmFkaW9Hcm91cCksXHJcbiAgbXVsdGk6IHRydWUsXHJcbn07XHJcblxyXG4vKipcclxuICogSW5qZWN0aW9uIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gaW5qZWN0IGluc3RhbmNlcyBvZiBgRXNuUmFkaW9Hcm91cGAuIEl0IHNlcnZlcyBhc1xyXG4gKiBhbHRlcm5hdGl2ZSB0b2tlbiB0byB0aGUgYWN0dWFsIGBFc25SYWRpb0dyb3VwYCBjbGFzcyB3aGljaCBjb3VsZCBjYXVzZSB1bm5lY2Vzc2FyeVxyXG4gKiByZXRlbnRpb24gb2YgdGhlIGNsYXNzIGFuZCBpdHMgY29tcG9uZW50IG1ldGFkYXRhLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEVTTl9SQURJT19HUk9VUCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxfRXNuUmFkaW9Hcm91cEJhc2U8X0VzblJhZGlvQnV0dG9uQmFzZT4+KFxyXG4gICdFc25SYWRpb0dyb3VwJyxcclxuKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXNuUmFkaW9EZWZhdWx0T3B0aW9ucyB7XHJcbiAgY29sb3I6IEVzbkNoZWNrYm94Q29sb3I7XHJcbiAgc2l6ZTogRXNuUmFkaW9TaXplO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRVNOX1JBRElPX0RFRkFVTFRfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxFc25SYWRpb0RlZmF1bHRPcHRpb25zPihcclxuICAnZXNuLXJhZGlvLWRlZmF1bHQtb3B0aW9ucycsXHJcbiAge1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG4gICAgZmFjdG9yeTogRVNOX1JBRElPX0RFRkFVTFRfT1BUSU9OU19GQUNUT1JZLFxyXG4gIH0sXHJcbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRVNOX1JBRElPX0RFRkFVTFRfT1BUSU9OU19GQUNUT1JZKCk6IEVzblJhZGlvRGVmYXVsdE9wdGlvbnMge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgc2l6ZTogJ21kJ1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIHdpdGggYWxsIG9mIHRoZSBgRXNuUmFkaW9Hcm91cGAgZnVuY3Rpb25hbGl0eS5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfRXNuUmFkaW9Hcm91cEJhc2U8VCBleHRlbmRzIF9Fc25SYWRpb0J1dHRvbkJhc2U+XHJcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG57XHJcbiAgLyoqIFNlbGVjdGVkIHZhbHVlIGZvciB0aGUgcmFkaW8gZ3JvdXAuICovXHJcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueSA9IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgSFRNTCBuYW1lIGF0dHJpYnV0ZSBhcHBsaWVkIHRvIHJhZGlvIGJ1dHRvbnMgaW4gdGhpcyBncm91cC4gKi9cclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgPSBgZXNuLXJhZGlvLWdyb3VwLSR7bmV4dFVuaXF1ZUlkKyt9YDtcclxuXHJcbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcmFkaW8gYnV0dG9uLiBTaG91bGQgbWF0Y2ggdmFsdWUuICovXHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IFQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGB2YWx1ZWAgaGFzIGJlZW4gc2V0IHRvIGl0cyBpbml0aWFsIHZhbHVlLiAqL1xyXG4gIHByaXZhdGUgX2lzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGxhYmVscyBzaG91bGQgYXBwZWFyIGFmdGVyIG9yIGJlZm9yZSB0aGUgcmFkaW8tYnV0dG9ucy4gRGVmYXVsdHMgdG8gJ2FmdGVyJyAqL1xyXG4gIHByaXZhdGUgX2xhYmVsUG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdhZnRlcic7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSByYWRpbyBncm91cCBpcyBkaXNhYmxlZC4gKi9cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgcmFkaW8gZ3JvdXAgaXMgcmVxdWlyZWQuICovXHJcbiAgcHJpdmF0ZSBfcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIFRoZSBtZXRob2QgdG8gYmUgY2FsbGVkIGluIG9yZGVyIHRvIHVwZGF0ZSBuZ01vZGVsICovXHJcbiAgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIG9uVG91Y2ggZnVuY3Rpb24gcmVnaXN0ZXJlZCB2aWEgcmVnaXN0ZXJPblRvdWNoIChDb250cm9sVmFsdWVBY2Nlc3NvcikuXHJcbiAgICogQGRvY3MtcHJpdmF0ZVxyXG4gICAqL1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgZ3JvdXAgdmFsdWUgY2hhbmdlcy5cclxuICAgKiBDaGFuZ2UgZXZlbnRzIGFyZSBvbmx5IGVtaXR0ZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnRlcmFjdGlvbiB3aXRoXHJcbiAgICogYSByYWRpbyBidXR0b24gKHRoZSBzYW1lIGJlaGF2aW9yIGFzIGA8aW5wdXQgdHlwZS1cInJhZGlvXCI+YCkuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPEVzblJhZGlvQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXNuUmFkaW9DaGFuZ2U+KCk7XHJcblxyXG4gIC8qKiBDaGlsZCByYWRpbyBidXR0b25zLiAqL1xyXG4gIGFic3RyYWN0IF9yYWRpb3M6IFF1ZXJ5TGlzdDxUPjtcclxuXHJcbiAgLyoqIFRoZW1lIGNvbG9yIGZvciBhbGwgb2YgdGhlIHJhZGlvIGJ1dHRvbnMgaW4gdGhlIGdyb3VwLiAqL1xyXG4gIEBJbnB1dCgpIGNvbG9yOiBFc25DaGVja2JveENvbG9yO1xyXG5cclxuICAvKiogVGhlbWUgY29sb3IgZm9yIGFsbCBvZiB0aGUgcmFkaW8gYnV0dG9ucyBpbiB0aGUgZ3JvdXAuICovXHJcbiAgQElucHV0KCkgc2l6ZTogRXNuUmFkaW9TaXplO1xyXG5cclxuICAvKiogTmFtZSBvZiB0aGUgcmFkaW8gYnV0dG9uIGdyb3VwLiBBbGwgcmFkaW8gYnV0dG9ucyBpbnNpZGUgdGhpcyBncm91cCB3aWxsIHVzZSB0aGlzIG5hbWUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuX3VwZGF0ZVJhZGlvQnV0dG9uTmFtZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBsYWJlbHMgc2hvdWxkIGFwcGVhciBhZnRlciBvciBiZWZvcmUgdGhlIHJhZGlvLWJ1dHRvbnMuIERlZmF1bHRzIHRvICdhZnRlcicgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBsYWJlbFBvc2l0aW9uKCk6ICdiZWZvcmUnIHwgJ2FmdGVyJyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGFiZWxQb3NpdGlvbjtcclxuICB9XHJcbiAgc2V0IGxhYmVsUG9zaXRpb24odikge1xyXG4gICAgdGhpcy5fbGFiZWxQb3NpdGlvbiA9IHYgPT09ICdiZWZvcmUnID8gJ2JlZm9yZScgOiAnYWZ0ZXInO1xyXG4gICAgdGhpcy5fbWFya1JhZGlvc0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWx1ZSBmb3IgdGhlIHJhZGlvLWdyb3VwLiBTaG91bGQgZXF1YWwgdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3RlZCByYWRpbyBidXR0b24gaWYgdGhlcmUgaXNcclxuICAgKiBhIGNvcnJlc3BvbmRpbmcgcmFkaW8gYnV0dG9uIHdpdGggYSBtYXRjaGluZyB2YWx1ZS4gSWYgdGhlcmUgaXMgbm90IHN1Y2ggYSBjb3JyZXNwb25kaW5nXHJcbiAgICogcmFkaW8gYnV0dG9uLCB0aGlzIHZhbHVlIHBlcnNpc3RzIHRvIGJlIGFwcGxpZWQgaW4gY2FzZSBhIG5ldyByYWRpbyBidXR0b24gaXMgYWRkZWQgd2l0aCBhXHJcbiAgICogbWF0Y2hpbmcgdmFsdWUuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdmFsdWUoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcbiAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gbmV3VmFsdWUpIHtcclxuICAgICAgLy8gU2V0IHRoaXMgYmVmb3JlIHByb2NlZWRpbmcgdG8gZW5zdXJlIG5vIGNpcmN1bGFyIGxvb3Agb2NjdXJzIHdpdGggc2VsZWN0aW9uLlxyXG4gICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5fdXBkYXRlU2VsZWN0ZWRSYWRpb0Zyb21WYWx1ZSgpO1xyXG4gICAgICB0aGlzLl9jaGVja1NlbGVjdGVkUmFkaW9CdXR0b24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jaGVja1NlbGVjdGVkUmFkaW9CdXR0b24oKSB7XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWQgJiYgIXRoaXMuX3NlbGVjdGVkLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIHJhZGlvIGJ1dHRvbi4gSWYgc2V0IHRvIGEgbmV3IHJhZGlvIGJ1dHRvbiwgdGhlIHJhZGlvIGdyb3VwIHZhbHVlXHJcbiAgICogd2lsbCBiZSB1cGRhdGVkIHRvIG1hdGNoIHRoZSBuZXcgc2VsZWN0ZWQgYnV0dG9uLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHNlbGVjdGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQ6IFQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG4gICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkID8gc2VsZWN0ZWQudmFsdWUgOiBudWxsO1xyXG4gICAgdGhpcy5fY2hlY2tTZWxlY3RlZFJhZGlvQnV0dG9uKCk7XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGUgcmFkaW8gZ3JvdXAgaXMgZGlzYWJsZWQgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBCb29sZWFuSW5wdXQpIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICAgIHRoaXMuX21hcmtSYWRpb3NGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIHJhZGlvIGdyb3VwIGlzIHJlcXVpcmVkICovXHJcbiAgQElucHV0KClcclxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XHJcbiAgfVxyXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogQm9vbGVhbklucHV0KSB7XHJcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgICB0aGlzLl9tYXJrUmFkaW9zRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBwcm9wZXJ0aWVzIG9uY2UgY29udGVudCBjaGlsZHJlbiBhcmUgYXZhaWxhYmxlLlxyXG4gICAqIFRoaXMgYWxsb3dzIHVzIHRvIHByb3BhZ2F0ZSByZWxldmFudCBhdHRyaWJ1dGVzIHRvIGFzc29jaWF0ZWQgYnV0dG9ucy5cclxuICAgKi9cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAvLyBNYXJrIHRoaXMgY29tcG9uZW50IGFzIGluaXRpYWxpemVkIGluIEFmdGVyQ29udGVudEluaXQgYmVjYXVzZSB0aGUgaW5pdGlhbCB2YWx1ZSBjYW5cclxuICAgIC8vIHBvc3NpYmx5IGJlIHNldCBieSBOZ01vZGVsIG9uIEVzblJhZGlvR3JvdXAsIGFuZCBpdCBpcyBwb3NzaWJsZSB0aGF0IHRoZSBPbkluaXQgb2YgdGhlXHJcbiAgICAvLyBOZ01vZGVsIG9jY3VycyAqYWZ0ZXIqIHRoZSBPbkluaXQgb2YgdGhlIEVzblJhZGlvR3JvdXAuXHJcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcmsgdGhpcyBncm91cCBhcyBiZWluZyBcInRvdWNoZWRcIiAoZm9yIG5nTW9kZWwpLiBNZWFudCB0byBiZSBjYWxsZWQgYnkgdGhlIGNvbnRhaW5lZFxyXG4gICAqIHJhZGlvIGJ1dHRvbnMgdXBvbiB0aGVpciBibHVyLlxyXG4gICAqL1xyXG4gIF90b3VjaCgpIHtcclxuICAgIGlmICh0aGlzLm9uVG91Y2hlZCkge1xyXG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXBkYXRlUmFkaW9CdXR0b25OYW1lcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9yYWRpb3MpIHtcclxuICAgICAgdGhpcy5fcmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgIHJhZGlvLm5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgcmFkaW8uX21hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBVcGRhdGVzIHRoZSBgc2VsZWN0ZWRgIHJhZGlvIGJ1dHRvbiBmcm9tIHRoZSBpbnRlcm5hbCBfdmFsdWUgc3RhdGUuICovXHJcbiAgcHJpdmF0ZSBfdXBkYXRlU2VsZWN0ZWRSYWRpb0Zyb21WYWx1ZSgpOiB2b2lkIHtcclxuICAgIC8vIElmIHRoZSB2YWx1ZSBhbHJlYWR5IG1hdGNoZXMgdGhlIHNlbGVjdGVkIHJhZGlvLCBkbyBub3RoaW5nLlxyXG4gICAgY29uc3QgaXNBbHJlYWR5U2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3RlZCAhPT0gbnVsbCAmJiB0aGlzLl9zZWxlY3RlZC52YWx1ZSA9PT0gdGhpcy5fdmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuX3JhZGlvcyAmJiAhaXNBbHJlYWR5U2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgcmFkaW8uY2hlY2tlZCA9IHRoaXMudmFsdWUgPT09IHJhZGlvLnZhbHVlO1xyXG4gICAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XHJcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHJhZGlvO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogRGlzcGF0Y2ggY2hhbmdlIGV2ZW50IHdpdGggY3VycmVudCBzZWxlY3Rpb24gYW5kIGdyb3VwIHZhbHVlLiAqL1xyXG4gIF9lbWl0Q2hhbmdlRXZlbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5faXNJbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KG5ldyBFc25SYWRpb0NoYW5nZSh0aGlzLl9zZWxlY3RlZCEsIHRoaXMuX3ZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfbWFya1JhZGlvc0ZvckNoZWNrKCkge1xyXG4gICAgaWYgKHRoaXMuX3JhZGlvcykge1xyXG4gICAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChyYWRpbyA9PiByYWRpby5fbWFya0ZvckNoZWNrKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgbW9kZWwgdmFsdWUuIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXHJcbiAgICogQHBhcmFtIHZhbHVlXHJcbiAgICovXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBtb2RlbCB2YWx1ZSBjaGFuZ2VzLlxyXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXHJcbiAgICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHJlZ2lzdGVyZWQuXHJcbiAgICovXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcclxuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGlzIHRvdWNoZWQuXHJcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cclxuICAgKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgcmVnaXN0ZXJlZC5cclxuICAgKi9cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2wuIEltcGxlbWVudGVkIGFzIGEgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cclxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZCBXaGV0aGVyIHRoZSBjb250cm9sIHNob3VsZCBiZSBkaXNhYmxlZC5cclxuICAgKi9cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIEVzblJhZGlvQnV0dG9uLlxyXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xyXG5hYnN0cmFjdCBjbGFzcyBFc25SYWRpb0J1dHRvbkJhc2Uge1xyXG4gIC8vIFNpbmNlIHRoZSBkaXNhYmxlZCBwcm9wZXJ0eSBpcyBtYW51YWxseSBkZWZpbmVkIGZvciB0aGUgRXNuUmFkaW9CdXR0b24gYW5kIGlzbid0IHNldCB1cCBpblxyXG4gIC8vIHRoZSBtaXhpbiBiYXNlIGNsYXNzLiBUbyBiZSBhYmxlIHRvIHVzZSB0aGUgdGFiaW5kZXggbWl4aW4sIGEgZGlzYWJsZWQgcHJvcGVydHkgbXVzdCBiZVxyXG4gIC8vIGRlZmluZWQgdG8gcHJvcGVybHkgd29yay5cclxuICBhYnN0cmFjdCBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XHJcbn1cclxuXHJcbmNvbnN0IF9Fc25SYWRpb0J1dHRvbk1peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShtaXhpblRhYkluZGV4KEVzblJhZGlvQnV0dG9uQmFzZSkpO1xyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3Mgd2l0aCBhbGwgb2YgdGhlIGBFc25SYWRpb0J1dHRvbmAgZnVuY3Rpb25hbGl0eS5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfRXNuUmFkaW9CdXR0b25CYXNlXHJcbiAgZXh0ZW5kcyBfRXNuUmFkaW9CdXR0b25NaXhpbkJhc2VcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25EZXN0cm95LCBDYW5EaXNhYmxlUmlwcGxlLCBIYXNUYWJJbmRleFxyXG57XHJcbiAgcHJpdmF0ZSBfdW5pcXVlSWQ6IHN0cmluZyA9IGBlc24tcmFkaW8tJHsrK25leHRVbmlxdWVJZH1gO1xyXG5cclxuICAvKiogVGhlIHVuaXF1ZSBJRCBmb3IgdGhlIHJhZGlvIGJ1dHRvbi4gKi9cclxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gdGhpcy5fdW5pcXVlSWQ7XHJcblxyXG4gIC8qKiBBbmFsb2cgdG8gSFRNTCAnbmFtZScgYXR0cmlidXRlIHVzZWQgdG8gZ3JvdXAgcmFkaW9zIGZvciB1bmlxdWUgc2VsZWN0aW9uLiAqL1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcclxuXHJcbiAgLyoqIFVzZWQgdG8gc2V0IHRoZSAnYXJpYS1sYWJlbCcgYXR0cmlidXRlIG9uIHRoZSB1bmRlcmx5aW5nIGlucHV0IGVsZW1lbnQuICovXHJcbiAgQElucHV0KCdhcmlhLWxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGUgJ2FyaWEtbGFiZWxsZWRieScgYXR0cmlidXRlIHRha2VzIHByZWNlZGVuY2UgYXMgdGhlIGVsZW1lbnQncyB0ZXh0IGFsdGVybmF0aXZlLiAqL1xyXG4gIEBJbnB1dCgnYXJpYS1sYWJlbGxlZGJ5JykgYXJpYUxhYmVsbGVkYnk6IHN0cmluZztcclxuXHJcbiAgLyoqIFRoZSAnYXJpYS1kZXNjcmliZWRieScgYXR0cmlidXRlIGlzIHJlYWQgYWZ0ZXIgdGhlIGVsZW1lbnQncyBsYWJlbCBhbmQgZmllbGQgdHlwZS4gKi9cclxuICBASW5wdXQoJ2FyaWEtZGVzY3JpYmVkYnknKSBhcmlhRGVzY3JpYmVkYnk6IHN0cmluZztcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhpcyByYWRpbyBidXR0b24gaXMgY2hlY2tlZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBjaGVja2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XHJcbiAgfVxyXG4gIHNldCBjaGVja2VkKHZhbHVlOiBCb29sZWFuSW5wdXQpIHtcclxuICAgIGNvbnN0IG5ld0NoZWNrZWRTdGF0ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy5fY2hlY2tlZCAhPT0gbmV3Q2hlY2tlZFN0YXRlKSB7XHJcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBuZXdDaGVja2VkU3RhdGU7XHJcbiAgICAgIGlmIChuZXdDaGVja2VkU3RhdGUgJiYgdGhpcy5yYWRpb0dyb3VwICYmIHRoaXMucmFkaW9Hcm91cC52YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMucmFkaW9Hcm91cC5zZWxlY3RlZCA9IHRoaXM7XHJcbiAgICAgIH0gZWxzZSBpZiAoIW5ld0NoZWNrZWRTdGF0ZSAmJiB0aGlzLnJhZGlvR3JvdXAgJiYgdGhpcy5yYWRpb0dyb3VwLnZhbHVlID09PSB0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgLy8gV2hlbiB1bmNoZWNraW5nIHRoZSBzZWxlY3RlZCByYWRpbyBidXR0b24sIHVwZGF0ZSB0aGUgc2VsZWN0ZWQgcmFkaW9cclxuICAgICAgICAvLyBwcm9wZXJ0eSBvbiB0aGUgZ3JvdXAuXHJcbiAgICAgICAgdGhpcy5yYWRpb0dyb3VwLnNlbGVjdGVkID0gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5ld0NoZWNrZWRTdGF0ZSkge1xyXG4gICAgICAgIC8vIE5vdGlmeSBhbGwgcmFkaW8gYnV0dG9ucyB3aXRoIHRoZSBzYW1lIG5hbWUgdG8gdW4tY2hlY2suXHJcbiAgICAgICAgdGhpcy5fcmFkaW9EaXNwYXRjaGVyLm5vdGlmeSh0aGlzLmlkLCB0aGlzLm5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSB2YWx1ZSBvZiB0aGlzIHJhZGlvIGJ1dHRvbi4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICBpZiAodGhpcy5yYWRpb0dyb3VwICE9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgIC8vIFVwZGF0ZSBjaGVja2VkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZWQgdG8gbWF0Y2ggdGhlIHJhZGlvIGdyb3VwJ3MgdmFsdWVcclxuICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMucmFkaW9Hcm91cC52YWx1ZSA9PT0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgIHRoaXMucmFkaW9Hcm91cC5zZWxlY3RlZCA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGUgbGFiZWwgc2hvdWxkIGFwcGVhciBhZnRlciBvciBiZWZvcmUgdGhlIHJhZGlvIGJ1dHRvbi4gRGVmYXVsdHMgdG8gJ2FmdGVyJyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGxhYmVsUG9zaXRpb24oKTogJ2JlZm9yZScgfCAnYWZ0ZXInIHtcclxuICAgIHJldHVybiB0aGlzLl9sYWJlbFBvc2l0aW9uIHx8ICh0aGlzLnJhZGlvR3JvdXAgJiYgdGhpcy5yYWRpb0dyb3VwLmxhYmVsUG9zaXRpb24pIHx8ICdhZnRlcic7XHJcbiAgfVxyXG4gIHNldCBsYWJlbFBvc2l0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9sYWJlbFBvc2l0aW9uID0gdmFsdWU7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2xhYmVsUG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJztcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIHJhZGlvIGJ1dHRvbiBpcyBkaXNhYmxlZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCB8fCAodGhpcy5yYWRpb0dyb3VwICE9PSBudWxsICYmIHRoaXMucmFkaW9Hcm91cC5kaXNhYmxlZCk7XHJcbiAgfVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogQm9vbGVhbklucHV0KSB7XHJcbiAgICB0aGlzLl9zZXREaXNhYmxlZChjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSByYWRpbyBidXR0b24gaXMgcmVxdWlyZWQuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQgfHwgKHRoaXMucmFkaW9Hcm91cCAmJiB0aGlzLnJhZGlvR3JvdXAucmVxdWlyZWQpO1xyXG4gIH1cclxuICBzZXQgcmVxdWlyZWQodmFsdWU6IEJvb2xlYW5JbnB1dCkge1xyXG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoZW1lIGNvbG9yIG9mIHRoZSByYWRpbyBidXR0b24uICovXHJcbiAgQElucHV0KClcclxuICBnZXQgY29sb3IoKTogRXNuQ2hlY2tib3hDb2xvciB7XHJcbiAgICAvLyBBcyBwZXIgTWF0ZXJpYWwgZGVzaWduIHNwZWNpZmljYXRpb25zIHRoZSBzZWxlY3Rpb24gY29udHJvbCByYWRpbyBzaG91bGQgdXNlIHRoZSBhY2NlbnQgY29sb3JcclxuICAgIC8vIHBhbGV0dGUgYnkgZGVmYXVsdC4gaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWxcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuX2NvbG9yIHx8XHJcbiAgICAgICh0aGlzLnJhZGlvR3JvdXAgJiYgdGhpcy5yYWRpb0dyb3VwLmNvbG9yKSB8fFxyXG4gICAgICAodGhpcy5fcHJvdmlkZXJPdmVycmlkZSAmJiB0aGlzLl9wcm92aWRlck92ZXJyaWRlLmNvbG9yKSB8fFxyXG4gICAgICAnYWNjZW50J1xyXG4gICAgKTtcclxuICB9XHJcbiAgc2V0IGNvbG9yKG5ld1ZhbHVlOiBFc25DaGVja2JveENvbG9yKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IG5ld1ZhbHVlO1xyXG4gIH1cclxuICBwcml2YXRlIF9jb2xvcjogRXNuQ2hlY2tib3hDb2xvcjtcclxuICAvKiogVGhlbWUgY29sb3Igb2YgdGhlIHJhZGlvIGJ1dHRvbi4gKi9cclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgc2l6ZSgpOiBFc25SYWRpb1NpemUge1xyXG4gICAgLy8gQXMgcGVyIE1hdGVyaWFsIGRlc2lnbiBzcGVjaWZpY2F0aW9ucyB0aGUgc2VsZWN0aW9uIGNvbnRyb2wgcmFkaW8gc2hvdWxkIHVzZSB0aGUgYWNjZW50IGNvbG9yXHJcbiAgICAvLyBwYWxldHRlIGJ5IGRlZmF1bHQuIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLl9zaXplIHx8XHJcbiAgICAgICh0aGlzLnJhZGlvR3JvdXAgJiYgdGhpcy5yYWRpb0dyb3VwLnNpemUpIHx8XHJcbiAgICAgICh0aGlzLl9wcm92aWRlck92ZXJyaWRlICYmIHRoaXMuX3Byb3ZpZGVyT3ZlcnJpZGUuc2l6ZSkgfHxcclxuICAgICAgJ21kJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgc2V0IHNpemUobmV3VmFsdWU6IEVzblJhZGlvU2l6ZSkge1xyXG4gICAgdGhpcy5fc2l6ZSA9IG5ld1ZhbHVlO1xyXG4gIH1cclxuICBwcml2YXRlIF9zaXplOiBFc25SYWRpb1NpemU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY2hlY2tlZCBzdGF0ZSBvZiB0aGlzIHJhZGlvIGJ1dHRvbiBjaGFuZ2VzLlxyXG4gICAqIENoYW5nZSBldmVudHMgYXJlIG9ubHkgZW1pdHRlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uIHdpdGhcclxuICAgKiB0aGUgcmFkaW8gYnV0dG9uICh0aGUgc2FtZSBiZWhhdmlvciBhcyBgPGlucHV0IHR5cGUtXCJyYWRpb1wiPmApLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxFc25SYWRpb0NoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPEVzblJhZGlvQ2hhbmdlPigpO1xyXG5cclxuICAvKiogVGhlIHBhcmVudCByYWRpbyBncm91cC4gTWF5IG9yIG1heSBub3QgYmUgcHJlc2VudC4gKi9cclxuICByYWRpb0dyb3VwOiBfRXNuUmFkaW9Hcm91cEJhc2U8X0VzblJhZGlvQnV0dG9uQmFzZT47XHJcblxyXG4gIC8qKiBJRCBvZiB0aGUgbmF0aXZlIGlucHV0IGVsZW1lbnQgaW5zaWRlIGA8ZXNuLXJhZGlvLWJ1dHRvbj5gICovXHJcbiAgZ2V0IGlucHV0SWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmlkIHx8IHRoaXMuX3VuaXF1ZUlkfS1pbnB1dGA7XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGlzIHJhZGlvIGlzIGNoZWNrZWQuICovXHJcbiAgcHJpdmF0ZSBfY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogV2hldGhlciB0aGlzIHJhZGlvIGlzIGRpc2FibGVkLiAqL1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAvKiogV2hldGhlciB0aGlzIHJhZGlvIGlzIHJlcXVpcmVkLiAqL1xyXG4gIHByaXZhdGUgX3JlcXVpcmVkOiBib29sZWFuO1xyXG5cclxuICAvKiogVmFsdWUgYXNzaWduZWQgdG8gdGhpcyByYWRpby4gKi9cclxuICBwcml2YXRlIF92YWx1ZTogYW55ID0gbnVsbDtcclxuXHJcbiAgLyoqIFVucmVnaXN0ZXIgZnVuY3Rpb24gZm9yIF9yYWRpb0Rpc3BhdGNoZXIgKi9cclxuICBwcml2YXRlIF9yZW1vdmVVbmlxdWVTZWxlY3Rpb25MaXN0ZW5lcjogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG5cclxuICAvKiogUHJldmlvdXMgdmFsdWUgb2YgdGhlIGlucHV0J3MgdGFiaW5kZXguICovXHJcbiAgcHJpdmF0ZSBfcHJldmlvdXNUYWJJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICAvKiogVGhlIG5hdGl2ZSBgPGlucHV0IHR5cGU9cmFkaW8+YCBlbGVtZW50ICovXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBfaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG5cclxuICAvKiogV2hldGhlciBhbmltYXRpb25zIGFyZSBkaXNhYmxlZC4gKi9cclxuICBfbm9vcEFuaW1hdGlvbnM6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcmFkaW9Hcm91cDogX0VzblJhZGlvR3JvdXBCYXNlPF9Fc25SYWRpb0J1dHRvbkJhc2U+LFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByb3RlY3RlZCBfY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXHJcbiAgICBwcml2YXRlIF9yYWRpb0Rpc3BhdGNoZXI6IFVuaXF1ZVNlbGVjdGlvbkRpc3BhdGNoZXIsXHJcbiAgICBhbmltYXRpb25Nb2RlPzogc3RyaW5nLFxyXG4gICAgcHJpdmF0ZSBfcHJvdmlkZXJPdmVycmlkZT86IEVzblJhZGlvRGVmYXVsdE9wdGlvbnMsXHJcbiAgICB0YWJJbmRleD86IHN0cmluZyxcclxuICApIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xyXG5cclxuICAgIC8vIEFzc2VydGlvbnMuIElkZWFsbHkgdGhlc2Ugc2hvdWxkIGJlIHN0cmlwcGVkIG91dCBieSB0aGUgY29tcGlsZXIuXHJcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogQXNzZXJ0IHRoYXQgdGhlcmUncyBubyBuYW1lIGJpbmRpbmcgQU5EIGEgcGFyZW50IHJhZGlvIGdyb3VwLlxyXG4gICAgdGhpcy5yYWRpb0dyb3VwID0gcmFkaW9Hcm91cDtcclxuICAgIHRoaXMuX25vb3BBbmltYXRpb25zID0gYW5pbWF0aW9uTW9kZSA9PT0gJ05vb3BBbmltYXRpb25zJztcclxuXHJcbiAgICBpZiAodGFiSW5kZXgpIHtcclxuICAgICAgdGhpcy50YWJJbmRleCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHRhYkluZGV4LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBGb2N1c2VzIHRoZSByYWRpbyBidXR0b24uICovXHJcbiAgZm9jdXMob3B0aW9ucz86IEZvY3VzT3B0aW9ucywgb3JpZ2luPzogRm9jdXNPcmlnaW4pOiB2b2lkIHtcclxuICAgIGlmIChvcmlnaW4pIHtcclxuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuX2lucHV0RWxlbWVudCwgb3JpZ2luLCBvcHRpb25zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFya3MgdGhlIHJhZGlvIGJ1dHRvbiBhcyBuZWVkaW5nIGNoZWNraW5nIGZvciBjaGFuZ2UgZGV0ZWN0aW9uLlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIGV4cG9zZWQgYmVjYXVzZSB0aGUgcGFyZW50IHJhZGlvIGdyb3VwIHdpbGwgZGlyZWN0bHlcclxuICAgKiB1cGRhdGUgYm91bmQgcHJvcGVydGllcyBvZiB0aGUgcmFkaW8gYnV0dG9uLlxyXG4gICAqL1xyXG4gIF9tYXJrRm9yQ2hlY2soKSB7XHJcbiAgICAvLyBXaGVuIGdyb3VwIHZhbHVlIGNoYW5nZXMsIHRoZSBidXR0b24gd2lsbCBub3QgYmUgbm90aWZpZWQuIFVzZSBgbWFya0ZvckNoZWNrYCB0byBleHBsaWNpdFxyXG4gICAgLy8gdXBkYXRlIHJhZGlvIGJ1dHRvbidzIHN0YXR1c1xyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnJhZGlvR3JvdXApIHtcclxuICAgICAgLy8gSWYgdGhlIHJhZGlvIGlzIGluc2lkZSBhIHJhZGlvIGdyb3VwLCBkZXRlcm1pbmUgaWYgaXQgc2hvdWxkIGJlIGNoZWNrZWRcclxuICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5yYWRpb0dyb3VwLnZhbHVlID09PSB0aGlzLl92YWx1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLnJhZGlvR3JvdXAuc2VsZWN0ZWQgPSB0aGlzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDb3B5IG5hbWUgZnJvbSBwYXJlbnQgcmFkaW8gZ3JvdXBcclxuICAgICAgdGhpcy5uYW1lID0gdGhpcy5yYWRpb0dyb3VwLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcmVtb3ZlVW5pcXVlU2VsZWN0aW9uTGlzdGVuZXIgPSB0aGlzLl9yYWRpb0Rpc3BhdGNoZXIubGlzdGVuKChpZCwgbmFtZSkgPT4ge1xyXG4gICAgICBpZiAoaWQgIT09IHRoaXMuaWQgJiYgbmFtZSA9PT0gdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdXBkYXRlVGFiSW5kZXgoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuX3VwZGF0ZVRhYkluZGV4KCk7XHJcbiAgICB0aGlzLl9mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLl9lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICBpZiAoIWZvY3VzT3JpZ2luICYmIHRoaXMucmFkaW9Hcm91cCkge1xyXG4gICAgICAgIHRoaXMucmFkaW9Hcm91cC5fdG91Y2goKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50UmVmKTtcclxuICAgIHRoaXMuX3JlbW92ZVVuaXF1ZVNlbGVjdGlvbkxpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICAvKiogRGlzcGF0Y2ggY2hhbmdlIGV2ZW50IHdpdGggY3VycmVudCB2YWx1ZS4gKi9cclxuICBwcml2YXRlIF9lbWl0Q2hhbmdlRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KG5ldyBFc25SYWRpb0NoYW5nZSh0aGlzLCB0aGlzLl92YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgX2lzUmlwcGxlRGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlUmlwcGxlIHx8IHRoaXMuZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBfb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgLy8gV2UgaGF2ZSB0byBzdG9wIHByb3BhZ2F0aW9uIGZvciBjbGljayBldmVudHMgb24gdGhlIHZpc3VhbCBoaWRkZW4gaW5wdXQgZWxlbWVudC5cclxuICAgIC8vIEJ5IGRlZmF1bHQsIHdoZW4gYSB1c2VyIGNsaWNrcyBvbiBhIGxhYmVsIGVsZW1lbnQsIGEgZ2VuZXJhdGVkIGNsaWNrIGV2ZW50IHdpbGwgYmVcclxuICAgIC8vIGRpc3BhdGNoZWQgb24gdGhlIGFzc29jaWF0ZWQgaW5wdXQgZWxlbWVudC4gU2luY2Ugd2UgYXJlIHVzaW5nIGEgbGFiZWwgZWxlbWVudCBhcyBvdXJcclxuICAgIC8vIHJvb3QgY29udGFpbmVyLCB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIGByYWRpby1idXR0b25gIHdpbGwgYmUgZXhlY3V0ZWQgdHdpY2UuXHJcbiAgICAvLyBUaGUgcmVhbCBjbGljayBldmVudCB3aWxsIGJ1YmJsZSB1cCwgYW5kIHRoZSBnZW5lcmF0ZWQgY2xpY2sgZXZlbnQgYWxzbyB0cmllcyB0byBidWJibGUgdXAuXHJcbiAgICAvLyBUaGlzIHdpbGwgbGVhZCB0byBtdWx0aXBsZSBjbGljayBldmVudHMuXHJcbiAgICAvLyBQcmV2ZW50aW5nIGJ1YmJsaW5nIGZvciB0aGUgc2Vjb25kIGV2ZW50IHdpbGwgc29sdmUgdGhhdCBpc3N1ZS5cclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRyaWdnZXJlZCB3aGVuIHRoZSByYWRpbyBidXR0b24gcmVjZWl2ZXMgYW4gaW50ZXJhY3Rpb24gZnJvbSB0aGUgdXNlci4gKi9cclxuICBfb25JbnB1dEludGVyYWN0aW9uKGV2ZW50OiBFdmVudCkge1xyXG4gICAgLy8gV2UgYWx3YXlzIGhhdmUgdG8gc3RvcCBwcm9wYWdhdGlvbiBvbiB0aGUgY2hhbmdlIGV2ZW50LlxyXG4gICAgLy8gT3RoZXJ3aXNlIHRoZSBjaGFuZ2UgZXZlbnQsIGZyb20gdGhlIGlucHV0IGVsZW1lbnQsIHdpbGwgYnViYmxlIHVwIGFuZFxyXG4gICAgLy8gZW1pdCBpdHMgZXZlbnQgb2JqZWN0IHRvIHRoZSBgY2hhbmdlYCBvdXRwdXQuXHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuY2hlY2tlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBjb25zdCBncm91cFZhbHVlQ2hhbmdlZCA9IHRoaXMucmFkaW9Hcm91cCAmJiB0aGlzLnZhbHVlICE9PSB0aGlzLnJhZGlvR3JvdXAudmFsdWU7XHJcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuX2VtaXRDaGFuZ2VFdmVudCgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucmFkaW9Hcm91cCkge1xyXG4gICAgICAgIHRoaXMucmFkaW9Hcm91cC5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLnZhbHVlKTtcclxuICAgICAgICBpZiAoZ3JvdXBWYWx1ZUNoYW5nZWQpIHtcclxuICAgICAgICAgIHRoaXMucmFkaW9Hcm91cC5fZW1pdENoYW5nZUV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgYW5kIG1hcmtzIGZvciBjaGVjayBpZiBhIGNoYW5nZSBvY2N1cnJlZC4gKi9cclxuICBwcm90ZWN0ZWQgX3NldERpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEdldHMgdGhlIHRhYmluZGV4IGZvciB0aGUgdW5kZXJseWluZyBpbnB1dCBlbGVtZW50LiAqL1xyXG4gIHByaXZhdGUgX3VwZGF0ZVRhYkluZGV4KCkge1xyXG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLnJhZGlvR3JvdXA7XHJcbiAgICBsZXQgdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICAvLyBJbXBsZW1lbnQgYSByb3ZpbmcgdGFiaW5kZXggaWYgdGhlIGJ1dHRvbiBpcyBpbnNpZGUgYSBncm91cC4gRm9yIG1vc3QgY2FzZXMgdGhpcyBpc24ndFxyXG4gICAgLy8gbmVjZXNzYXJ5LCBiZWNhdXNlIHRoZSBicm93c2VyIGhhbmRsZXMgdGhlIHRhYiBvcmRlciBmb3IgaW5wdXRzIGluc2lkZSBhIGdyb3VwIGF1dG9tYXRpY2FsbHksXHJcbiAgICAvLyBidXQgd2UgbmVlZCBhbiBleHBsaWNpdGx5IGhpZ2hlciB0YWJpbmRleCBmb3IgdGhlIHNlbGVjdGVkIGJ1dHRvbiBpbiBvcmRlciBmb3IgdGhpbmdzIGxpa2VcclxuICAgIC8vIHRoZSBmb2N1cyB0cmFwIHRvIHBpY2sgaXQgdXAgY29ycmVjdGx5LlxyXG4gICAgaWYgKCFncm91cCB8fCAhZ3JvdXAuc2VsZWN0ZWQgfHwgdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB2YWx1ZSA9IHRoaXMudGFiSW5kZXg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZSA9IGdyb3VwLnNlbGVjdGVkID09PSB0aGlzID8gdGhpcy50YWJJbmRleCA6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcHJldmlvdXNUYWJJbmRleCkge1xyXG4gICAgICAvLyBXZSBoYXZlIHRvIHNldCB0aGUgdGFiaW5kZXggZGlyZWN0bHkgb24gdGhlIERPTSBub2RlLCBiZWNhdXNlIGl0IGRlcGVuZHMgb25cclxuICAgICAgLy8gdGhlIHNlbGVjdGVkIHN0YXRlIHdoaWNoIGlzIHByb25lIHRvIFwiY2hhbmdlZCBhZnRlciBjaGVja2VkIGVycm9yc1wiLlxyXG4gICAgICBjb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZCA9IHRoaXMuX2lucHV0RWxlbWVudD8ubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB2YWx1ZSArICcnKTtcclxuICAgICAgICB0aGlzLl9wcmV2aW91c1RhYkluZGV4ID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGdyb3VwIG9mIHJhZGlvIGJ1dHRvbnMuIE1heSBjb250YWluIG9uZSBvciBtb3JlIGA8ZXNuLXJhZGlvLWJ1dHRvbj5gIGVsZW1lbnRzLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdlc24tcmFkaW8tZ3JvdXAnLFxyXG4gIGV4cG9ydEFzOiAnRXNuUmFkaW9Hcm91cCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBFU05fUkFESU9fR1JPVVBfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUixcclxuICAgIHtwcm92aWRlOiBFU05fUkFESU9fR1JPVVAsIHVzZUV4aXN0aW5nOiBFc25SYWRpb0dyb3VwfSxcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdyb2xlJzogJ3JhZGlvZ3JvdXAnLFxyXG4gICAgJ2NsYXNzJzogJ2Vzbi1tZGMtcmFkaW8tZ3JvdXAnLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25SYWRpb0dyb3VwIGV4dGVuZHMgX0VzblJhZGlvR3JvdXBCYXNlPEVzblJhZGlvQnV0dG9uPiB7XHJcbiAgLyoqIENoaWxkIHJhZGlvIGJ1dHRvbnMuICovXHJcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEVzblJhZGlvQnV0dG9uKSwge2Rlc2NlbmRhbnRzOiB0cnVlfSlcclxuICBfcmFkaW9zOiBRdWVyeUxpc3Q8RXNuUmFkaW9CdXR0b24+O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1yYWRpby1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAncmFkaW8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydyYWRpby5jb21wb25lbnQuc2NzcyddLFxyXG4gIGhvc3Q6IHtcclxuICAgICdjbGFzcyc6ICdlc24tbWRjLXJhZGlvLWJ1dHRvbicsXHJcbiAgICAnW2F0dHIuaWRdJzogJ2lkJyxcclxuICAgICdbY2xhc3MuZXNuLXJhZGlvLWJ1dHRvbi1wcmltYXJ5XSc6ICdjb2xvciA9PT0gXCJwcmltYXJ5XCIgfHwgY29sb3IgPT09IHVuZGVmaW5lZCcsXHJcbiAgICAnW2NsYXNzLmVzbi1yYWRpby1idXR0b24tYWNjZW50XSc6ICdjb2xvciA9PT0gXCJhY2NlbnRcIicsXHJcbiAgICAnW2NsYXNzLmVzbi1yYWRpby1idXR0b24tZXJyb3JdJzogJ2NvbG9yID09PSBcImVycm9yXCInLFxyXG4gICAgJ1tjbGFzcy5lc24tcmFkaW8tYnV0dG9uLXN1Y2Nlc3NdJzogJ2NvbG9yID09PSBcInN1Y2Nlc3NcIicsXHJcbiAgICAnW2NsYXNzLmVzbi1yYWRpby1idXR0b24tbmV1dHJhbF0nOiAnY29sb3IgPT09IFwibmV1dHJhbFwiJyxcclxuICAgICdbY2xhc3MuZXNuLXJhZGlvLWJ1dHRvbi14c10nOiAnc2l6ZSA9PT0gXCJ4c1wiJyxcclxuICAgICdbY2xhc3MuZXNuLXJhZGlvLWJ1dHRvbi1zbV0nOiAnc2l6ZSA9PT0gXCJzbVwiJyxcclxuICAgICdbY2xhc3MuZXNuLXJhZGlvLWJ1dHRvbi1tZF0nOiAnc2l6ZSA9PT0gXCJtZFwiJyxcclxuICAgICdbY2xhc3MuZXNuLXJhZGlvLWJ1dHRvbi1sZ10nOiAnc2l6ZSA9PT0gXCJsZ1wiJyxcclxuICAgICdbY2xhc3MuZXNuLXJhZGlvLWJ1dHRvbi14bF0nOiAnc2l6ZSA9PT0gXCJ4bFwiJyxcclxuICAgICdbY2xhc3MuZXNuLW1kYy1yYWRpby1jaGVja2VkXSc6ICdjaGVja2VkJyxcclxuICAgICdbY2xhc3MuX2Vzbi1hbmltYXRpb24tbm9vcGFibGVdJzogJ19ub29wQW5pbWF0aW9ucycsXHJcbiAgICAvLyBOZWVkcyB0byBiZSByZW1vdmVkIHNpbmNlIGl0IGNhdXNlcyBzb21lIGExMXkgaXNzdWVzIChzZWUgIzIxMjY2KS5cclxuICAgICdbYXR0ci50YWJpbmRleF0nOiAnbnVsbCcsXHJcbiAgICAnW2F0dHIuYXJpYS1sYWJlbF0nOiAnbnVsbCcsXHJcbiAgICAnW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XSc6ICdudWxsJyxcclxuICAgICdbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XSc6ICdudWxsJyxcclxuICAgIC8vIE5vdGU6IHVuZGVyIG5vcm1hbCBjb25kaXRpb25zIGZvY3VzIHNob3VsZG4ndCBsYW5kIG9uIHRoaXMgZWxlbWVudCwgaG93ZXZlciBpdCBtYXkgYmVcclxuICAgIC8vIHByb2dyYW1tYXRpY2FsbHkgc2V0LCBmb3IgZXhhbXBsZSBpbnNpZGUgb2YgYSBmb2N1cyB0cmFwLCBpbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBmb3J3YXJkXHJcbiAgICAvLyB0aGUgZm9jdXMgdG8gdGhlIG5hdGl2ZSBlbGVtZW50LlxyXG4gICAgJyhmb2N1cyknOiAnX2lucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCknLFxyXG4gIH0sXHJcbiAgaW5wdXRzOiBbJ2Rpc2FibGVSaXBwbGUnLCAndGFiSW5kZXgnXSxcclxuICBleHBvcnRBczogJ0VzblJhZGlvQnV0dG9uJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuUmFkaW9CdXR0b24gZXh0ZW5kcyBfRXNuUmFkaW9CdXR0b25CYXNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRVNOX1JBRElPX0dST1VQKSByYWRpb0dyb3VwOiBFc25SYWRpb0dyb3VwLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIF9jaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXHJcbiAgICBfcmFkaW9EaXNwYXRjaGVyOiBVbmlxdWVTZWxlY3Rpb25EaXNwYXRjaGVyLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIGFuaW1hdGlvbk1vZGU/OiBzdHJpbmcsXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChFU05fUkFESU9fREVGQVVMVF9PUFRJT05TKVxyXG4gICAgICBfcHJvdmlkZXJPdmVycmlkZT86IEVzblJhZGlvRGVmYXVsdE9wdGlvbnMsXHJcbiAgICBAQXR0cmlidXRlKCd0YWJpbmRleCcpIHRhYkluZGV4Pzogc3RyaW5nLFxyXG4gICkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIHJhZGlvR3JvdXAsXHJcbiAgICAgIGVsZW1lbnRSZWYsXHJcbiAgICAgIF9jaGFuZ2VEZXRlY3RvcixcclxuICAgICAgX2ZvY3VzTW9uaXRvcixcclxuICAgICAgX3JhZGlvRGlzcGF0Y2hlcixcclxuICAgICAgYW5pbWF0aW9uTW9kZSxcclxuICAgICAgX3Byb3ZpZGVyT3ZlcnJpZGUsXHJcbiAgICAgIHRhYkluZGV4LFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1kYy1mb3JtLWZpZWxkIGVzbi1yYWRpby1idXR0b25cIiAjZm9ybUZpZWxkXHJcbiAgICAgW2NsYXNzLm1kYy1mb3JtLWZpZWxkLS1hbGlnbi1lbmRdPVwibGFiZWxQb3NpdGlvbiA9PSAnYmVmb3JlJ1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJtZGMtcmFkaW9cIiBbY2xhc3MubWRjLXJhZGlvLS1kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxyXG4gICAgPCEtLSBSZW5kZXIgdGhpcyBlbGVtZW50IGZpcnN0IHNvIHRoZSBpbnB1dCBpcyBvbiB0b3AuIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImVzbi1tZGMtcmFkaW8tdG91Y2gtdGFyZ2V0XCIgKGNsaWNrKT1cIl9vbklucHV0SW50ZXJhY3Rpb24oJGV2ZW50KVwiPjwvZGl2PlxyXG4gICAgPGlucHV0ICNpbnB1dCBjbGFzcz1cIm1kYy1yYWRpb19fbmF0aXZlLWNvbnRyb2xcIiB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgIFtpZF09XCJpbnB1dElkXCJcclxuICAgICAgICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcclxuICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXHJcbiAgICAgICAgICAgW2F0dHIudmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRieVwiXHJcbiAgICAgICAgICAgW2F0dHIuYXJpYS1kZXNjcmliZWRieV09XCJhcmlhRGVzY3JpYmVkYnlcIlxyXG4gICAgICAgICAgIChjaGFuZ2UpPVwiX29uSW5wdXRJbnRlcmFjdGlvbigkZXZlbnQpXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWRjLXJhZGlvX19iYWNrZ3JvdW5kXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtcmFkaW9fX291dGVyLWNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLXJhZGlvX19pbm5lci1jaXJjbGVcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBtYXQtcmlwcGxlIGNsYXNzPVwiZXNuLXJhZGlvLXJpcHBsZSBtYXQtbWRjLWZvY3VzLWluZGljYXRvclwiXHJcbiAgICAgICAgIFttYXRSaXBwbGVUcmlnZ2VyXT1cImZvcm1GaWVsZFwiXHJcbiAgICAgICAgIFttYXRSaXBwbGVEaXNhYmxlZF09XCJfaXNSaXBwbGVEaXNhYmxlZCgpXCJcclxuICAgICAgICAgW21hdFJpcHBsZUNlbnRlcmVkXT1cInRydWVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVzbi1yaXBwbGUtZWxlbWVudCBtYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGVcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxsYWJlbCBbZm9yXT1cImlucHV0SWRcIj5cclxuICAgIDxuZy1jb250ZW50IGNsYXNzPVwibGFiZWxcIiBzZWxlY3Q9XCJbbGFiZWxdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPG5nLWNvbnRlbnQgY2xhc3M9XCJzdWJ0aXRsZVwiIHNlbGVjdD1cIltzdWJ0aXRsZV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+ICA8L2xhYmVsPlxyXG48L2Rpdj5cclxuIl19