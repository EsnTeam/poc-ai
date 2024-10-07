import { CdkAccordionItem } from '@angular/cdk/accordion';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Inject, InjectionToken, Input, Optional, Output, SkipSelf, ViewChild, ViewEncapsulation, } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { Subject } from 'rxjs';
import { distinctUntilChanged, filter, startWith, take } from 'rxjs/operators';
import { ESN_ACCORDION } from './accordion-base';
import { matExpansionAnimations } from './expansion-animations';
import { ESN_EXPANSION_PANEL } from './expansion-panel-base';
import { EsnExpansionPanelContent } from './expansion-panel-content';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/collections";
import * as i2 from "@angular/cdk/portal";
/** Counter for generating unique element ids. */
let uniqueId = 0;
/**
 * Injection token that can be used to configure the default
 * options for the expansion panel component.
 */
export const ESN_EXPANSION_PANEL_DEFAULT_OPTIONS = new InjectionToken('ESN_EXPANSION_PANEL_DEFAULT_OPTIONS');
/**
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the EsnAccordion directive attached.
 */
export class EsnExpansionPanel extends CdkAccordionItem {
    constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
        super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
        this._viewContainerRef = _viewContainerRef;
        this._animationMode = _animationMode;
        this._hideToggle = false;
        /** An event emitted after the body's expansion animation happens. */
        this.afterExpand = new EventEmitter();
        /** An event emitted after the body's collapse animation happens. */
        this.afterCollapse = new EventEmitter();
        /** Stream that emits for changes in `@Input` properties. */
        this._inputChanges = new Subject();
        /** ID for the associated header element. Used for a11y labelling. */
        this._headerId = `mat-expansion-panel-header-${uniqueId++}`;
        /** Stream of body animation done events. */
        this._bodyAnimationDone = new Subject();
        this.accordion = accordion;
        this._document = _document;
        // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
        this._bodyAnimationDone
            .pipe(distinctUntilChanged((x, y) => {
            return x.fromState === y.fromState && x.toState === y.toState;
        }))
            .subscribe(event => {
            if (event.fromState !== 'void') {
                if (event.toState === 'expanded') {
                    this.afterExpand.emit();
                }
                else if (event.toState === 'collapsed') {
                    this.afterCollapse.emit();
                }
            }
        });
        if (defaultOptions) {
            this.hideToggle = defaultOptions.hideToggle;
        }
    }
    /** Whether the toggle indicator should be hidden. */
    get hideToggle() {
        return this._hideToggle || (this.accordion && this.accordion.hideToggle);
    }
    set hideToggle(value) {
        this._hideToggle = coerceBooleanProperty(value);
    }
    /** The position of the expansion indicator. */
    get togglePosition() {
        return this._togglePosition || (this.accordion && this.accordion.togglePosition);
    }
    set togglePosition(value) {
        this._togglePosition = value;
    }
    /** Determines whether the expansion panel should have spacing between it and its siblings. */
    _hasSpacing() {
        if (this.accordion) {
            return this.expanded && this.accordion.displayMode === 'default';
        }
        return false;
    }
    /** Gets the expanded state string. */
    _getExpandedState() {
        return this.expanded ? 'expanded' : 'collapsed';
    }
    /** Toggles the expanded state of the expansion panel. */
    toggle() {
        this.expanded = !this.expanded;
    }
    /** Sets the expanded state of the expansion panel to false. */
    close() {
        this.expanded = false;
    }
    /** Sets the expanded state of the expansion panel to true. */
    open() {
        this.expanded = true;
    }
    ngAfterContentInit() {
        if (this._lazyContent && this._lazyContent._expansionPanel === this) {
            // Render the content as soon as the panel becomes open.
            this.opened
                .pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1))
                .subscribe(() => {
                this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
            });
        }
    }
    ngOnChanges(changes) {
        this._inputChanges.next(changes);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._bodyAnimationDone.complete();
        this._inputChanges.complete();
    }
    /** Checks whether the expansion panel's content contains the currently-focused element. */
    _containsFocus() {
        if (this._body) {
            const focusedElement = this._document.activeElement;
            const bodyElement = this._body.nativeElement;
            return focusedElement === bodyElement || bodyElement.contains(focusedElement);
        }
        return false;
    }
}
EsnExpansionPanel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnExpansionPanel, deps: [{ token: ESN_ACCORDION, optional: true, skipSelf: true }, { token: i0.ChangeDetectorRef }, { token: i1.UniqueSelectionDispatcher }, { token: i0.ViewContainerRef }, { token: DOCUMENT }, { token: ANIMATION_MODULE_TYPE, optional: true }, { token: ESN_EXPANSION_PANEL_DEFAULT_OPTIONS, optional: true }], target: i0.ɵɵFactoryTarget.Component });
EsnExpansionPanel.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnExpansionPanel, selector: "esn-expansion-panel", inputs: { disabled: "disabled", expanded: "expanded", hideToggle: "hideToggle", togglePosition: "togglePosition" }, outputs: { opened: "opened", closed: "closed", expandedChange: "expandedChange", afterExpand: "afterExpand", afterCollapse: "afterCollapse" }, host: { properties: { "class.mat-expanded": "expanded", "class._mat-animation-noopable": "_animationMode === \"NoopAnimations\"", "class.mat-expansion-panel-spacing": "_hasSpacing()" }, classAttribute: "esn-expansion-panel mat-expansion-panel" }, providers: [
        // Provide EsnAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        { provide: ESN_ACCORDION, useValue: undefined },
        { provide: ESN_EXPANSION_PANEL, useExisting: EsnExpansionPanel },
    ], queries: [{ propertyName: "_lazyContent", first: true, predicate: EsnExpansionPanelContent, descendants: true }], viewQueries: [{ propertyName: "_body", first: true, predicate: ["body"], descendants: true }], exportAs: ["esnExpansionPanel"], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-content select=\"esn-expansion-panel-header\"></ng-content>\r\n<div class=\"mat-expansion-panel-content\"\r\n     role=\"region\"\r\n     [@bodyExpansion]=\"_getExpandedState()\"\r\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\r\n     [attr.aria-labelledby]=\"_headerId\"\r\n     [id]=\"id\"\r\n     #body>\r\n  <div class=\"mat-expansion-panel-body\">\r\n    <ng-content></ng-content>\r\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\r\n  </div>\r\n  <ng-content select=\"mat-action-row\"></ng-content>\r\n</div>\r\n", styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(.4,0,.2,1),box-shadow .28s cubic-bezier(.4,0,.2,1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*=\"visibility: hidden\"] *{visibility:hidden!important}.mat-expansion-panel-body{padding:0 1.5rem 1rem}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n", ".esn-accordion{--border-radius: 8px}.esn-accordion .esn-expansion-panel:not([class*=mat-elevation-z]){box-shadow:none!important}.esn-accordion .esn-expansion-panel:first-of-type{border-top-right-radius:var(--border-radius)!important;border-top-left-radius:var(--border-radius)!important}.esn-accordion .esn-expansion-panel:last-of-type{border-bottom-right-radius:var(--border-radius)!important;border-bottom-left-radius:var(--border-radius)!important}.esn-accordion .esn-expansion-panel.mat-expanded{border-radius:var(--border-radius)!important}.esn-accordion .esn-expansion-panel .mat-expansion-panel-body{padding:1rem 1.5rem}\n"], dependencies: [{ kind: "directive", type: i2.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], animations: [matExpansionAnimations.bodyExpansion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnExpansionPanel, decorators: [{
            type: Component,
            args: [{ selector: 'esn-expansion-panel', exportAs: 'esnExpansionPanel', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, inputs: ['disabled', 'expanded'], outputs: ['opened', 'closed', 'expandedChange'], animations: [matExpansionAnimations.bodyExpansion], providers: [
                        // Provide EsnAccordion as undefined to prevent nested expansion panels from registering
                        // to the same accordion.
                        { provide: ESN_ACCORDION, useValue: undefined },
                        { provide: ESN_EXPANSION_PANEL, useExisting: EsnExpansionPanel },
                    ], host: {
                        'class': 'esn-expansion-panel mat-expansion-panel',
                        '[class.mat-expanded]': 'expanded',
                        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                        '[class.mat-expansion-panel-spacing]': '_hasSpacing()',
                    }, template: "<ng-content select=\"esn-expansion-panel-header\"></ng-content>\r\n<div class=\"mat-expansion-panel-content\"\r\n     role=\"region\"\r\n     [@bodyExpansion]=\"_getExpandedState()\"\r\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\r\n     [attr.aria-labelledby]=\"_headerId\"\r\n     [id]=\"id\"\r\n     #body>\r\n  <div class=\"mat-expansion-panel-body\">\r\n    <ng-content></ng-content>\r\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\r\n  </div>\r\n  <ng-content select=\"mat-action-row\"></ng-content>\r\n</div>\r\n", styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(.4,0,.2,1),box-shadow .28s cubic-bezier(.4,0,.2,1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*=\"visibility: hidden\"] *{visibility:hidden!important}.mat-expansion-panel-body{padding:0 1.5rem 1rem}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n", ".esn-accordion{--border-radius: 8px}.esn-accordion .esn-expansion-panel:not([class*=mat-elevation-z]){box-shadow:none!important}.esn-accordion .esn-expansion-panel:first-of-type{border-top-right-radius:var(--border-radius)!important;border-top-left-radius:var(--border-radius)!important}.esn-accordion .esn-expansion-panel:last-of-type{border-bottom-right-radius:var(--border-radius)!important;border-bottom-left-radius:var(--border-radius)!important}.esn-accordion .esn-expansion-panel.mat-expanded{border-radius:var(--border-radius)!important}.esn-accordion .esn-expansion-panel .mat-expansion-panel-body{padding:1rem 1.5rem}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }, {
                    type: Inject,
                    args: [ESN_ACCORDION]
                }] }, { type: i0.ChangeDetectorRef }, { type: i1.UniqueSelectionDispatcher }, { type: i0.ViewContainerRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ANIMATION_MODULE_TYPE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ESN_EXPANSION_PANEL_DEFAULT_OPTIONS]
                }, {
                    type: Optional
                }] }]; }, propDecorators: { hideToggle: [{
                type: Input
            }], togglePosition: [{
                type: Input
            }], afterExpand: [{
                type: Output
            }], afterCollapse: [{
                type: Output
            }], _lazyContent: [{
                type: ContentChild,
                args: [EsnExpansionPanelContent]
            }], _body: [{
                type: ViewChild,
                args: ['body']
            }] } });
/**
 * Actions of a `<esn-expansion-panel>`.
 */
export class EsnExpansionPanelActionRow {
}
EsnExpansionPanelActionRow.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnExpansionPanelActionRow, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EsnExpansionPanelActionRow.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnExpansionPanelActionRow, selector: "esn-action-row", host: { classAttribute: "mat-action-row" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnExpansionPanelActionRow, decorators: [{
            type: Directive,
            args: [{
                    selector: 'esn-action-row',
                    host: {
                        class: 'mat-action-row',
                    },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZXhwYW5zaW9uL21hdGVyaWFsIGZvcmsvZXhwYW5zaW9uLXBhbmVsLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZXhwYW5zaW9uL21hdGVyaWFsIGZvcmsvZXhwYW5zaW9uLXBhbmVsLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0EsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFMUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUVULFlBQVksRUFDWixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFFBQVEsRUFDUixTQUFTLEVBRVQsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUErQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RixP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dCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7QW5pbWF0aW9uRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge0Nka0FjY29yZGlvbkl0ZW19IGZyb20gJ0Bhbmd1bGFyL2Nkay9hY2NvcmRpb24nO1xyXG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xyXG5pbXBvcnQge1VuaXF1ZVNlbGVjdGlvbkRpc3BhdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7VGVtcGxhdGVQb3J0YWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGlvblRva2VuLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgU2tpcFNlbGYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QU5JTUFUSU9OX01PRFVMRV9UWVBFfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIHN0YXJ0V2l0aCwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge0VzbkFjY29yZGlvbkJhc2UsIEVzbkFjY29yZGlvblRvZ2dsZVBvc2l0aW9uLCBFU05fQUNDT1JESU9OfSBmcm9tICcuL2FjY29yZGlvbi1iYXNlJztcclxuaW1wb3J0IHttYXRFeHBhbnNpb25BbmltYXRpb25zfSBmcm9tICcuL2V4cGFuc2lvbi1hbmltYXRpb25zJztcclxuaW1wb3J0IHtFU05fRVhQQU5TSU9OX1BBTkVMfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC1iYXNlJztcclxuaW1wb3J0IHtFc25FeHBhbnNpb25QYW5lbENvbnRlbnR9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQnO1xyXG5cclxuLyoqIEVzbkV4cGFuc2lvblBhbmVsJ3Mgc3RhdGVzLiAqL1xyXG5leHBvcnQgdHlwZSBFc25FeHBhbnNpb25QYW5lbFN0YXRlID0gJ2V4cGFuZGVkJyB8ICdjb2xsYXBzZWQnO1xyXG5cclxuLyoqIENvdW50ZXIgZm9yIGdlbmVyYXRpbmcgdW5pcXVlIGVsZW1lbnQgaWRzLiAqL1xyXG5sZXQgdW5pcXVlSWQgPSAwO1xyXG5cclxuLyoqXHJcbiAqIE9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9wdGlvbnNcclxuICogZm9yIGFsbCBvZiB0aGUgZXhwYW5zaW9uIHBhbmVscyBpbiBhIG1vZHVsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXNuRXhwYW5zaW9uUGFuZWxEZWZhdWx0T3B0aW9ucyB7XHJcbiAgLyoqIEhlaWdodCBvZiB0aGUgaGVhZGVyIHdoaWxlIHRoZSBwYW5lbCBpcyBleHBhbmRlZC4gKi9cclxuICBleHBhbmRlZEhlaWdodDogc3RyaW5nO1xyXG5cclxuICAvKiogSGVpZ2h0IG9mIHRoZSBoZWFkZXIgd2hpbGUgdGhlIHBhbmVsIGlzIGNvbGxhcHNlZC4gKi9cclxuICBjb2xsYXBzZWRIZWlnaHQ6IHN0cmluZztcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIHRvZ2dsZSBpbmRpY2F0b3Igc2hvdWxkIGJlIGhpZGRlbi4gKi9cclxuICBoaWRlVG9nZ2xlOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogSW5qZWN0aW9uIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIHRoZSBkZWZhdWx0XHJcbiAqIG9wdGlvbnMgZm9yIHRoZSBleHBhbnNpb24gcGFuZWwgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEVTTl9FWFBBTlNJT05fUEFORUxfREVGQVVMVF9PUFRJT05TID1cclxuICBuZXcgSW5qZWN0aW9uVG9rZW48RXNuRXhwYW5zaW9uUGFuZWxEZWZhdWx0T3B0aW9ucz4oJ0VTTl9FWFBBTlNJT05fUEFORUxfREVGQVVMVF9PUFRJT05TJyk7XHJcblxyXG4vKipcclxuICogVGhpcyBjb21wb25lbnQgY2FuIGJlIHVzZWQgYXMgYSBzaW5nbGUgZWxlbWVudCB0byBzaG93IGV4cGFuZGFibGUgY29udGVudCwgb3IgYXMgb25lIG9mXHJcbiAqIG11bHRpcGxlIGNoaWxkcmVuIG9mIGFuIGVsZW1lbnQgd2l0aCB0aGUgRXNuQWNjb3JkaW9uIGRpcmVjdGl2ZSBhdHRhY2hlZC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHN0eWxlVXJsczogWydleHBhbnNpb24tcGFuZWwuc2NzcycsICcuLi9leHBhbnNpb24uc2NzcyddLFxyXG4gIHNlbGVjdG9yOiAnZXNuLWV4cGFuc2lvbi1wYW5lbCcsXHJcbiAgZXhwb3J0QXM6ICdlc25FeHBhbnNpb25QYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdleHBhbnNpb24tcGFuZWwuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZXhwYW5kZWQnXSxcclxuICBvdXRwdXRzOiBbJ29wZW5lZCcsICdjbG9zZWQnLCAnZXhwYW5kZWRDaGFuZ2UnXSxcclxuICBhbmltYXRpb25zOiBbbWF0RXhwYW5zaW9uQW5pbWF0aW9ucy5ib2R5RXhwYW5zaW9uXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIC8vIFByb3ZpZGUgRXNuQWNjb3JkaW9uIGFzIHVuZGVmaW5lZCB0byBwcmV2ZW50IG5lc3RlZCBleHBhbnNpb24gcGFuZWxzIGZyb20gcmVnaXN0ZXJpbmdcclxuICAgIC8vIHRvIHRoZSBzYW1lIGFjY29yZGlvbi5cclxuICAgIHtwcm92aWRlOiBFU05fQUNDT1JESU9OLCB1c2VWYWx1ZTogdW5kZWZpbmVkfSxcclxuICAgIHtwcm92aWRlOiBFU05fRVhQQU5TSU9OX1BBTkVMLCB1c2VFeGlzdGluZzogRXNuRXhwYW5zaW9uUGFuZWx9LFxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ2NsYXNzJzogJ2Vzbi1leHBhbnNpb24tcGFuZWwgbWF0LWV4cGFuc2lvbi1wYW5lbCcsXHJcbiAgICAnW2NsYXNzLm1hdC1leHBhbmRlZF0nOiAnZXhwYW5kZWQnLFxyXG4gICAgJ1tjbGFzcy5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZV0nOiAnX2FuaW1hdGlvbk1vZGUgPT09IFwiTm9vcEFuaW1hdGlvbnNcIicsXHJcbiAgICAnW2NsYXNzLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZ10nOiAnX2hhc1NwYWNpbmcoKScsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkV4cGFuc2lvblBhbmVsXHJcbiAgZXh0ZW5kcyBDZGtBY2NvcmRpb25JdGVtXHJcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveVxyXG57XHJcbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50O1xyXG4gIHByaXZhdGUgX2hpZGVUb2dnbGUgPSBmYWxzZTtcclxuICBwcml2YXRlIF90b2dnbGVQb3NpdGlvbjogRXNuQWNjb3JkaW9uVG9nZ2xlUG9zaXRpb247XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSB0b2dnbGUgaW5kaWNhdG9yIHNob3VsZCBiZSBoaWRkZW4uICovXHJcbiAgQElucHV0KClcclxuICBnZXQgaGlkZVRvZ2dsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oaWRlVG9nZ2xlIHx8ICh0aGlzLmFjY29yZGlvbiAmJiB0aGlzLmFjY29yZGlvbi5oaWRlVG9nZ2xlKTtcclxuICB9XHJcbiAgc2V0IGhpZGVUb2dnbGUodmFsdWU6IEJvb2xlYW5JbnB1dCkge1xyXG4gICAgdGhpcy5faGlkZVRvZ2dsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIHBvc2l0aW9uIG9mIHRoZSBleHBhbnNpb24gaW5kaWNhdG9yLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHRvZ2dsZVBvc2l0aW9uKCk6IEVzbkFjY29yZGlvblRvZ2dsZVBvc2l0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLl90b2dnbGVQb3NpdGlvbiB8fCAodGhpcy5hY2NvcmRpb24gJiYgdGhpcy5hY2NvcmRpb24udG9nZ2xlUG9zaXRpb24pO1xyXG4gIH1cclxuICBzZXQgdG9nZ2xlUG9zaXRpb24odmFsdWU6IEVzbkFjY29yZGlvblRvZ2dsZVBvc2l0aW9uKSB7XHJcbiAgICB0aGlzLl90b2dnbGVQb3NpdGlvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFuIGV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGJvZHkncyBleHBhbnNpb24gYW5pbWF0aW9uIGhhcHBlbnMuICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFmdGVyRXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKiogQW4gZXZlbnQgZW1pdHRlZCBhZnRlciB0aGUgYm9keSdzIGNvbGxhcHNlIGFuaW1hdGlvbiBoYXBwZW5zLiAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBhZnRlckNvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgZm9yIGNoYW5nZXMgaW4gYEBJbnB1dGAgcHJvcGVydGllcy4gKi9cclxuICByZWFkb25seSBfaW5wdXRDaGFuZ2VzID0gbmV3IFN1YmplY3Q8U2ltcGxlQ2hhbmdlcz4oKTtcclxuXHJcbiAgLyoqIE9wdGlvbmFsbHkgZGVmaW5lZCBhY2NvcmRpb24gdGhlIGV4cGFuc2lvbiBwYW5lbCBiZWxvbmdzIHRvLiAqL1xyXG4gIG92ZXJyaWRlIGFjY29yZGlvbjogRXNuQWNjb3JkaW9uQmFzZTtcclxuXHJcbiAgLyoqIENvbnRlbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIGxhemlseS4gKi9cclxuICBAQ29udGVudENoaWxkKEVzbkV4cGFuc2lvblBhbmVsQ29udGVudCkgX2xhenlDb250ZW50OiBFc25FeHBhbnNpb25QYW5lbENvbnRlbnQ7XHJcblxyXG4gIC8qKiBFbGVtZW50IGNvbnRhaW5pbmcgdGhlIHBhbmVsJ3MgdXNlci1wcm92aWRlZCBjb250ZW50LiAqL1xyXG4gIEBWaWV3Q2hpbGQoJ2JvZHknKSBfYm9keTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gIC8qKiBQb3J0YWwgaG9sZGluZyB0aGUgdXNlcidzIGNvbnRlbnQuICovXHJcbiAgX3BvcnRhbDogVGVtcGxhdGVQb3J0YWw7XHJcblxyXG4gIC8qKiBJRCBmb3IgdGhlIGFzc29jaWF0ZWQgaGVhZGVyIGVsZW1lbnQuIFVzZWQgZm9yIGExMXkgbGFiZWxsaW5nLiAqL1xyXG4gIF9oZWFkZXJJZCA9IGBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci0ke3VuaXF1ZUlkKyt9YDtcclxuXHJcbiAgLyoqIFN0cmVhbSBvZiBib2R5IGFuaW1hdGlvbiBkb25lIGV2ZW50cy4gKi9cclxuICByZWFkb25seSBfYm9keUFuaW1hdGlvbkRvbmUgPSBuZXcgU3ViamVjdDxBbmltYXRpb25FdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBASW5qZWN0KEVTTl9BQ0NPUkRJT04pIGFjY29yZGlvbjogRXNuQWNjb3JkaW9uQmFzZSxcclxuICAgIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBfdW5pcXVlU2VsZWN0aW9uRGlzcGF0Y2hlcjogVW5pcXVlU2VsZWN0aW9uRGlzcGF0Y2hlcixcclxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwdWJsaWMgX2FuaW1hdGlvbk1vZGU6IHN0cmluZyxcclxuICAgIEBJbmplY3QoRVNOX0VYUEFOU0lPTl9QQU5FTF9ERUZBVUxUX09QVElPTlMpXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgZGVmYXVsdE9wdGlvbnM/OiBFc25FeHBhbnNpb25QYW5lbERlZmF1bHRPcHRpb25zLFxyXG4gICkge1xyXG4gICAgc3VwZXIoYWNjb3JkaW9uLCBfY2hhbmdlRGV0ZWN0b3JSZWYsIF91bmlxdWVTZWxlY3Rpb25EaXNwYXRjaGVyKTtcclxuICAgIHRoaXMuYWNjb3JkaW9uID0gYWNjb3JkaW9uO1xyXG4gICAgdGhpcy5fZG9jdW1lbnQgPSBfZG9jdW1lbnQ7XHJcblxyXG4gICAgLy8gV2UgbmVlZCBhIFN1YmplY3Qgd2l0aCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgYmVjYXVzZSB0aGUgYGRvbmVgIGV2ZW50XHJcbiAgICAvLyBmaXJlcyB0d2ljZSBvbiBzb21lIGJyb3dzZXJzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjQwODRcclxuICAgIHRoaXMuX2JvZHlBbmltYXRpb25Eb25lXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCh4LCB5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geC5mcm9tU3RhdGUgPT09IHkuZnJvbVN0YXRlICYmIHgudG9TdGF0ZSA9PT0geS50b1N0YXRlO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdleHBhbmRlZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5hZnRlckV4cGFuZC5lbWl0KCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdjb2xsYXBzZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJDb2xsYXBzZS5lbWl0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAoZGVmYXVsdE9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5oaWRlVG9nZ2xlID0gZGVmYXVsdE9wdGlvbnMuaGlkZVRvZ2dsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGV4cGFuc2lvbiBwYW5lbCBzaG91bGQgaGF2ZSBzcGFjaW5nIGJldHdlZW4gaXQgYW5kIGl0cyBzaWJsaW5ncy4gKi9cclxuICBfaGFzU3BhY2luZygpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmFjY29yZGlvbikge1xyXG4gICAgICByZXR1cm4gdGhpcy5leHBhbmRlZCAmJiB0aGlzLmFjY29yZGlvbi5kaXNwbGF5TW9kZSA9PT0gJ2RlZmF1bHQnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldHMgdGhlIGV4cGFuZGVkIHN0YXRlIHN0cmluZy4gKi9cclxuICBfZ2V0RXhwYW5kZWRTdGF0ZSgpOiBFc25FeHBhbnNpb25QYW5lbFN0YXRlIHtcclxuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRvZ2dsZXMgdGhlIGV4cGFuZGVkIHN0YXRlIG9mIHRoZSBleHBhbnNpb24gcGFuZWwuICovXHJcbiAgb3ZlcnJpZGUgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldHMgdGhlIGV4cGFuZGVkIHN0YXRlIG9mIHRoZSBleHBhbnNpb24gcGFuZWwgdG8gZmFsc2UuICovXHJcbiAgb3ZlcnJpZGUgY2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKiogU2V0cyB0aGUgZXhwYW5kZWQgc3RhdGUgb2YgdGhlIGV4cGFuc2lvbiBwYW5lbCB0byB0cnVlLiAqL1xyXG4gIG92ZXJyaWRlIG9wZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmV4cGFuZGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLl9sYXp5Q29udGVudCAmJiB0aGlzLl9sYXp5Q29udGVudC5fZXhwYW5zaW9uUGFuZWwgPT09IHRoaXMpIHtcclxuICAgICAgLy8gUmVuZGVyIHRoZSBjb250ZW50IGFzIHNvb24gYXMgdGhlIHBhbmVsIGJlY29tZXMgb3Blbi5cclxuICAgICAgdGhpcy5vcGVuZWRcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHN0YXJ0V2l0aChudWxsKSxcclxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmV4cGFuZGVkICYmICF0aGlzLl9wb3J0YWwpLFxyXG4gICAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5fbGF6eUNvbnRlbnQuX3RlbXBsYXRlLCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMuX2lucHV0Q2hhbmdlcy5uZXh0KGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gICAgdGhpcy5fYm9keUFuaW1hdGlvbkRvbmUuY29tcGxldGUoKTtcclxuICAgIHRoaXMuX2lucHV0Q2hhbmdlcy5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENoZWNrcyB3aGV0aGVyIHRoZSBleHBhbnNpb24gcGFuZWwncyBjb250ZW50IGNvbnRhaW5zIHRoZSBjdXJyZW50bHktZm9jdXNlZCBlbGVtZW50LiAqL1xyXG4gIF9jb250YWluc0ZvY3VzKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuX2JvZHkpIHtcclxuICAgICAgY29uc3QgZm9jdXNlZEVsZW1lbnQgPSB0aGlzLl9kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICBjb25zdCBib2R5RWxlbWVudCA9IHRoaXMuX2JvZHkubmF0aXZlRWxlbWVudDtcclxuICAgICAgcmV0dXJuIGZvY3VzZWRFbGVtZW50ID09PSBib2R5RWxlbWVudCB8fCBib2R5RWxlbWVudC5jb250YWlucyhmb2N1c2VkRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFjdGlvbnMgb2YgYSBgPGVzbi1leHBhbnNpb24tcGFuZWw+YC5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLWFjdGlvbi1yb3cnLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbWF0LWFjdGlvbi1yb3cnLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25FeHBhbnNpb25QYW5lbEFjdGlvblJvdyB7fVxyXG4iLCI8bmctY29udGVudCBzZWxlY3Q9XCJlc24tZXhwYW5zaW9uLXBhbmVsLWhlYWRlclwiPjwvbmctY29udGVudD5cclxuPGRpdiBjbGFzcz1cIm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudFwiXHJcbiAgICAgcm9sZT1cInJlZ2lvblwiXHJcbiAgICAgW0Bib2R5RXhwYW5zaW9uXT1cIl9nZXRFeHBhbmRlZFN0YXRlKClcIlxyXG4gICAgIChAYm9keUV4cGFuc2lvbi5kb25lKT1cIl9ib2R5QW5pbWF0aW9uRG9uZS5uZXh0KCRldmVudClcIlxyXG4gICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJfaGVhZGVySWRcIlxyXG4gICAgIFtpZF09XCJpZFwiXHJcbiAgICAgI2JvZHk+XHJcbiAgPGRpdiBjbGFzcz1cIm1hdC1leHBhbnNpb24tcGFuZWwtYm9keVwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwiX3BvcnRhbFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibWF0LWFjdGlvbi1yb3dcIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=