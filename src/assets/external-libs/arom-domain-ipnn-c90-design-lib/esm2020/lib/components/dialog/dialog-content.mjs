import { Directive, Input, Optional, Component, } from '@angular/core';
import { _closeDialogVia } from '@angular/material/dialog';
import { BehaviorSubject, debounceTime } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./dialogRef";
import * as i2 from "./dialog.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/cdk/observers";
export class EsnDialogClose {
    constructor(
    /**
     * Reference to the containing dialog.
     * @deprecated `dialogRef` property to become private.
     * @breaking-change 13.0.0
     */
    // The dialog title directive is always used in combination with a `MatDialogRef`.
    // tslint:disable-next-line: lightweight-tokens
    dialogRef, _elementRef, _dialog) {
        this.dialogRef = dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
    }
    ngOnInit() {
        if (!this.dialogRef) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the DialogRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the DialogRef by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            this.dialogRef = getClosestDialog(this._elementRef, this._dialog['_dialog'].openDialogs);
        }
    }
    ngOnChanges(changes) {
        const proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    }
    _onButtonClick(event) {
        // Determinate the focus origin using the click event, because using the FocusMonitor will
        // result in incorrect origins. Most of the time, close buttons will be auto focused in the
        // dialog, and therefore clicking the button won't result in a focus change. This means that
        // the FocusMonitor won't detect any origin change, and will always output `program`.
        _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
    }
}
EsnDialogClose.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogClose, deps: [{ token: i1.EsnDialogRef, optional: true }, { token: i0.ElementRef }, { token: i2.EsnDialog }], target: i0.ɵɵFactoryTarget.Directive });
EsnDialogClose.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnDialogClose, selector: "[esn-dialog-close], [esnDialogClose]", inputs: { ariaLabel: ["aria-label", "ariaLabel"], dialogResult: ["esn-dialog-close", "dialogResult"], _matDialogClose: ["esnDialogClose", "_matDialogClose"] }, host: { listeners: { "click": "_onButtonClick($event)" }, properties: { "attr.aria-label": "ariaLabel || null" } }, exportAs: ["esnDialogClose"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogClose, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esn-dialog-close], [esnDialogClose]',
                    exportAs: 'esnDialogClose',
                    host: {
                        '(click)': '_onButtonClick($event)',
                        '[attr.aria-label]': 'ariaLabel || null',
                    },
                }]
        }], ctorParameters: function () { return [{ type: i1.EsnDialogRef, decorators: [{
                    type: Optional
                }] }, { type: i0.ElementRef }, { type: i2.EsnDialog }]; }, propDecorators: { ariaLabel: [{
                type: Input,
                args: ['aria-label']
            }], dialogResult: [{
                type: Input,
                args: ['esn-dialog-close']
            }], _matDialogClose: [{
                type: Input,
                args: ['esnDialogClose']
            }] } });
function getClosestDialog(element, openDialogs) {
    let parent = element.nativeElement.parentElement;
    while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
    }
    return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
export class EsnDialogHeader {
    constructor() {
        this.divider = true;
        this.color = 'transparent';
    }
    ngOnInit() { }
}
EsnDialogHeader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogHeader, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnDialogHeader.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnDialogHeader, selector: "esn-dialog-header", inputs: { divider: "divider", color: "color" }, exportAs: ["esnDialogHeader"], ngImport: i0, template: `
    <div class="esn-dialog-header informative-{{this.color}}" [ngClass]="{ 'with-divider': divider}">
    	<ng-content></ng-content>
    </div>`, isInline: true, styles: [".mat-mdc-dialog-container{border-radius:15px}.esn-dialog-header{padding:1rem;display:flex;justify-content:space-between;align-items:center}.esn-dialog-header ::ng-deep h1,.esn-dialog-header ::ng-deep h2,.esn-dialog-header ::ng-deep h3,.esn-dialog-header ::ng-deep h4,.esn-dialog-header ::ng-deep h5,.esn-dialog-header ::ng-deep h6{margin:0}.esn-dialog-content{overflow:auto;padding:1rem}.esn-dialog-footer{font-size:.875rem;line-height:1.25rem;font-weight:400;display:flex;justify-content:flex-end;padding:1rem}.esn-dialog-footer.space-between{justify-content:space-between}.esn-dialog-footer.centered{justify-content:space-around}.esn-dialog-footer ::ng-deep .esn-btn:not(:last-child){margin-right:1.5rem}@media all and (max-width: 600px){.esn-dialog-footer.many-buttons{flex-direction:column;align-items:flex-end}.esn-dialog-footer.many-buttons ::ng-deep .esn-btn:not(:last-child){margin-bottom:1rem;margin-right:0}.esn-dialog-footer:not(.many-buttons) ::ng-deep .esn-btn:not(:last-child){margin-right:1rem}}\n"], dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogHeader, decorators: [{
            type: Component,
            args: [{ selector: 'esn-dialog-header', template: `
    <div class="esn-dialog-header informative-{{this.color}}" [ngClass]="{ 'with-divider': divider}">
    	<ng-content></ng-content>
    </div>`, exportAs: 'esnDialogHeader', styles: [".mat-mdc-dialog-container{border-radius:15px}.esn-dialog-header{padding:1rem;display:flex;justify-content:space-between;align-items:center}.esn-dialog-header ::ng-deep h1,.esn-dialog-header ::ng-deep h2,.esn-dialog-header ::ng-deep h3,.esn-dialog-header ::ng-deep h4,.esn-dialog-header ::ng-deep h5,.esn-dialog-header ::ng-deep h6{margin:0}.esn-dialog-content{overflow:auto;padding:1rem}.esn-dialog-footer{font-size:.875rem;line-height:1.25rem;font-weight:400;display:flex;justify-content:flex-end;padding:1rem}.esn-dialog-footer.space-between{justify-content:space-between}.esn-dialog-footer.centered{justify-content:space-around}.esn-dialog-footer ::ng-deep .esn-btn:not(:last-child){margin-right:1.5rem}@media all and (max-width: 600px){.esn-dialog-footer.many-buttons{flex-direction:column;align-items:flex-end}.esn-dialog-footer.many-buttons ::ng-deep .esn-btn:not(:last-child){margin-bottom:1rem;margin-right:0}.esn-dialog-footer:not(.many-buttons) ::ng-deep .esn-btn:not(:last-child){margin-right:1rem}}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { divider: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
export class EsnDialogContent {
    constructor(elementRef, renderer, zone) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        this.isFullScreen = false;
        this.heightUpdateTrigger$ = new BehaviorSubject(null);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.dialogContainer = _findDialogContainer(this.elementRef);
        this.isFullScreen = !!this.dialogContainer.parentElement?.classList.contains('esn-dialog-full-screen');
        const footer = _findFooter(this.dialogContainer);
        const header = _findHeader(this.dialogContainer);
        this.observer = new ResizeObserver(() => {
            this.heightUpdateTrigger$.next(null);
        });
        if (!!footer) {
            this.observer.observe(footer);
        }
        if (!!header) {
            this.observer.observe(header);
        }
        this._updateContentHeight();
        this.heightUpdateTrigger$.pipe(debounceTime(35)).subscribe(() => {
            this.zone.run(() => {
                this._updateContentHeight();
            });
        });
    }
    _updateContentHeight() {
        const height = this._getHeaderAndFooterHeight();
        const contentElm = this.elementRef.nativeElement.querySelector('.esn-dialog-content');
        this.renderer.setStyle(contentElm, `${!this.isFullScreen ? 'max-' : ''}height`, `calc(${this.isFullScreen ? 100 : 85}vh - ${height}px - 2rem)`);
    }
    _getHeaderAndFooterHeight() {
        const footer = _findFooter(this.dialogContainer);
        const header = _findHeader(this.dialogContainer);
        const footerHeight = !!footer ? footer['offsetHeight'] : 0;
        const headerHeight = !!header ? header['offsetHeight'] : 0;
        return footerHeight + headerHeight;
    }
    ngOnDestroy() {
        this.observer.disconnect();
    }
}
EsnDialogContent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogContent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
EsnDialogContent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnDialogContent, selector: "esn-dialog-content", exportAs: ["esnDialogContent"], ngImport: i0, template: `
    <div class="esn-dialog-content">
    	<ng-content></ng-content>
    </div>`, isInline: true, styles: [".mat-mdc-dialog-container{border-radius:15px}.esn-dialog-header{padding:1rem;display:flex;justify-content:space-between;align-items:center}.esn-dialog-header ::ng-deep h1,.esn-dialog-header ::ng-deep h2,.esn-dialog-header ::ng-deep h3,.esn-dialog-header ::ng-deep h4,.esn-dialog-header ::ng-deep h5,.esn-dialog-header ::ng-deep h6{margin:0}.esn-dialog-content{overflow:auto;padding:1rem}.esn-dialog-footer{font-size:.875rem;line-height:1.25rem;font-weight:400;display:flex;justify-content:flex-end;padding:1rem}.esn-dialog-footer.space-between{justify-content:space-between}.esn-dialog-footer.centered{justify-content:space-around}.esn-dialog-footer ::ng-deep .esn-btn:not(:last-child){margin-right:1.5rem}@media all and (max-width: 600px){.esn-dialog-footer.many-buttons{flex-direction:column;align-items:flex-end}.esn-dialog-footer.many-buttons ::ng-deep .esn-btn:not(:last-child){margin-bottom:1rem;margin-right:0}.esn-dialog-footer:not(.many-buttons) ::ng-deep .esn-btn:not(:last-child){margin-right:1rem}}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogContent, decorators: [{
            type: Component,
            args: [{ selector: 'esn-dialog-content', template: `
    <div class="esn-dialog-content">
    	<ng-content></ng-content>
    </div>`, exportAs: 'esnDialogContent', styles: [".mat-mdc-dialog-container{border-radius:15px}.esn-dialog-header{padding:1rem;display:flex;justify-content:space-between;align-items:center}.esn-dialog-header ::ng-deep h1,.esn-dialog-header ::ng-deep h2,.esn-dialog-header ::ng-deep h3,.esn-dialog-header ::ng-deep h4,.esn-dialog-header ::ng-deep h5,.esn-dialog-header ::ng-deep h6{margin:0}.esn-dialog-content{overflow:auto;padding:1rem}.esn-dialog-footer{font-size:.875rem;line-height:1.25rem;font-weight:400;display:flex;justify-content:flex-end;padding:1rem}.esn-dialog-footer.space-between{justify-content:space-between}.esn-dialog-footer.centered{justify-content:space-around}.esn-dialog-footer ::ng-deep .esn-btn:not(:last-child){margin-right:1.5rem}@media all and (max-width: 600px){.esn-dialog-footer.many-buttons{flex-direction:column;align-items:flex-end}.esn-dialog-footer.many-buttons ::ng-deep .esn-btn:not(:last-child){margin-bottom:1rem;margin-right:0}.esn-dialog-footer:not(.many-buttons) ::ng-deep .esn-btn:not(:last-child){margin-right:1rem}}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; } });
export class EsnDialogFooter {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.divider = true;
        this.align = 'right';
        this.nbButtons = 0;
    }
    ngAfterViewInit() {
        this._countButtons();
    }
    onContentChange() {
        this._countButtons();
    }
    _countButtons() {
        setTimeout(() => (this.nbButtons =
            this.elementRef.nativeElement.querySelectorAll('.esn-btn').length));
    }
}
EsnDialogFooter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogFooter, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
EsnDialogFooter.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnDialogFooter, selector: "esn-dialog-footer", inputs: { divider: "divider", align: "align" }, exportAs: ["esnDialogFooter"], ngImport: i0, template: `
    <div class="esn-dialog-footer" (cdkObserveContent)="onContentChange()" [ngClass]="{      'with-divider': divider,      centered: align === 'center',      'space-between': align === 'space-between',      'many-buttons': nbButtons > 2    }">
    	<ng-content></ng-content>
    </div>`, isInline: true, styles: [".mat-mdc-dialog-container{border-radius:15px}.esn-dialog-header{padding:1rem;display:flex;justify-content:space-between;align-items:center}.esn-dialog-header ::ng-deep h1,.esn-dialog-header ::ng-deep h2,.esn-dialog-header ::ng-deep h3,.esn-dialog-header ::ng-deep h4,.esn-dialog-header ::ng-deep h5,.esn-dialog-header ::ng-deep h6{margin:0}.esn-dialog-content{overflow:auto;padding:1rem}.esn-dialog-footer{font-size:.875rem;line-height:1.25rem;font-weight:400;display:flex;justify-content:flex-end;padding:1rem}.esn-dialog-footer.space-between{justify-content:space-between}.esn-dialog-footer.centered{justify-content:space-around}.esn-dialog-footer ::ng-deep .esn-btn:not(:last-child){margin-right:1.5rem}@media all and (max-width: 600px){.esn-dialog-footer.many-buttons{flex-direction:column;align-items:flex-end}.esn-dialog-footer.many-buttons ::ng-deep .esn-btn:not(:last-child){margin-bottom:1rem;margin-right:0}.esn-dialog-footer:not(.many-buttons) ::ng-deep .esn-btn:not(:last-child){margin-right:1rem}}\n"], dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDialogFooter, decorators: [{
            type: Component,
            args: [{ selector: 'esn-dialog-footer', template: `
    <div class="esn-dialog-footer" (cdkObserveContent)="onContentChange()" [ngClass]="{      'with-divider': divider,      centered: align === 'center',      'space-between': align === 'space-between',      'many-buttons': nbButtons > 2    }">
    	<ng-content></ng-content>
    </div>`, exportAs: 'esnDialogFooter', styles: [".mat-mdc-dialog-container{border-radius:15px}.esn-dialog-header{padding:1rem;display:flex;justify-content:space-between;align-items:center}.esn-dialog-header ::ng-deep h1,.esn-dialog-header ::ng-deep h2,.esn-dialog-header ::ng-deep h3,.esn-dialog-header ::ng-deep h4,.esn-dialog-header ::ng-deep h5,.esn-dialog-header ::ng-deep h6{margin:0}.esn-dialog-content{overflow:auto;padding:1rem}.esn-dialog-footer{font-size:.875rem;line-height:1.25rem;font-weight:400;display:flex;justify-content:flex-end;padding:1rem}.esn-dialog-footer.space-between{justify-content:space-between}.esn-dialog-footer.centered{justify-content:space-around}.esn-dialog-footer ::ng-deep .esn-btn:not(:last-child){margin-right:1.5rem}@media all and (max-width: 600px){.esn-dialog-footer.many-buttons{flex-direction:column;align-items:flex-end}.esn-dialog-footer.many-buttons ::ng-deep .esn-btn:not(:last-child){margin-bottom:1rem;margin-right:0}.esn-dialog-footer:not(.many-buttons) ::ng-deep .esn-btn:not(:last-child){margin-right:1rem}}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { divider: [{
                type: Input
            }], align: [{
                type: Input
            }] } });
function _findDialogContainer(element) {
    let parent = element.nativeElement.parentElement;
    while (parent && !parent.classList.contains('mat-mdc-dialog-container')) {
        parent = parent.parentElement;
    }
    return parent;
}
function _findFooter(element) {
    return element.querySelector('.esn-dialog-footer');
}
function _findHeader(element) {
    return element.querySelector('.esn-dialog-header');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLWNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBQ0wsUUFBUSxFQUdSLFNBQVMsR0FJVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQW1DLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFZdEYsTUFBTSxPQUFPLGNBQWM7SUFXekI7SUFDRTs7OztPQUlHO0lBQ0gsa0ZBQWtGO0lBQ2xGLCtDQUErQztJQUM1QixTQUE0QixFQUN2QyxXQUFvQyxFQUNwQyxPQUFrQjtRQUZQLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQ3ZDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxZQUFPLEdBQVAsT0FBTyxDQUFXO0lBQ3pCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsaUZBQWlGO1lBQ2pGLGdGQUFnRjtZQUNoRixnRkFBZ0Y7WUFDaEYsb0ZBQW9GO1lBQ3BGLG1DQUFtQztZQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUMvQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBRSxDQUFDLFdBQVcsQ0FDcEMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLGFBQWEsR0FDakIsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFakUsSUFB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QztJQUNKLENBQUM7OzZHQXRCVSxlQUFlO2lHQUFmLGVBQWUsd0lBUGhCOzs7V0FHRDs0RkFJRSxlQUFlO2tCQVQzQixTQUFTOytCQUNFLG1CQUFtQixZQUNuQjs7O1dBR0QsWUFFQyxpQkFBaUI7aUdBR2xCLE9BQU87c0JBQWYsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7O0FBdUJSLFNBQVMsb0JBQW9CLENBQUMsT0FBZ0M7SUFDNUQsSUFBSSxNQUFNLEdBQXVCLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBRXJFLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsRUFBRTtRQUN2RSxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztLQUMvQjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxPQUFvQjtJQUN2QyxPQUFPLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsT0FBb0I7SUFDdkMsT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIE9uSW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgRWxlbWVudFJlZixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIENvbXBvbmVudCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBOZ1pvbmUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IF9jbG9zZURpYWxvZ1ZpYSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZGVib3VuY2VUaW1lLCBkaXN0aW5jdCwgZnJvbUV2ZW50LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEVzbkRpYWxvZyB9IGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFc25EaWFsb2dSZWYgfSBmcm9tICcuL2RpYWxvZ1JlZic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlc24tZGlhbG9nLWNsb3NlXSwgW2VzbkRpYWxvZ0Nsb3NlXScsXHJcbiAgZXhwb3J0QXM6ICdlc25EaWFsb2dDbG9zZScsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhjbGljayknOiAnX29uQnV0dG9uQ2xpY2soJGV2ZW50KScsXHJcbiAgICAnW2F0dHIuYXJpYS1sYWJlbF0nOiAnYXJpYUxhYmVsIHx8IG51bGwnLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25EaWFsb2dDbG9zZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAvKiogU2NyZWVuIHJlYWRlciBsYWJlbCBmb3IgdGhlIGJ1dHRvbi4gKi9cclxuICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIERlZmF1bHQgdG8gXCJidXR0b25cIiB0byBwcmV2ZW50cyBhY2NpZGVudGFsIGZvcm0gc3VibWl0cy4gKi9cclxuXHJcbiAgLyoqIERpYWxvZyBjbG9zZSBpbnB1dC4gKi9cclxuICBASW5wdXQoJ2Vzbi1kaWFsb2ctY2xvc2UnKSBkaWFsb2dSZXN1bHQ6IGFueTtcclxuXHJcbiAgQElucHV0KCdlc25EaWFsb2dDbG9zZScpIF9tYXREaWFsb2dDbG9zZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKlxyXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBjb250YWluaW5nIGRpYWxvZy5cclxuICAgICAqIEBkZXByZWNhdGVkIGBkaWFsb2dSZWZgIHByb3BlcnR5IHRvIGJlY29tZSBwcml2YXRlLlxyXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSAxMy4wLjBcclxuICAgICAqL1xyXG4gICAgLy8gVGhlIGRpYWxvZyB0aXRsZSBkaXJlY3RpdmUgaXMgYWx3YXlzIHVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBhIGBNYXREaWFsb2dSZWZgLlxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBsaWdodHdlaWdodC10b2tlbnNcclxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBkaWFsb2dSZWY6IEVzbkRpYWxvZ1JlZjxhbnk+LFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBwcml2YXRlIF9kaWFsb2c6IEVzbkRpYWxvZ1xyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlhbG9nUmVmKSB7XHJcbiAgICAgIC8vIFdoZW4gdGhpcyBkaXJlY3RpdmUgaXMgaW5jbHVkZWQgaW4gYSBkaWFsb2cgdmlhIFRlbXBsYXRlUmVmIChyYXRoZXIgdGhhbiBiZWluZ1xyXG4gICAgICAvLyBpbiBhIENvbXBvbmVudCksIHRoZSBEaWFsb2dSZWYgaXNuJ3QgYXZhaWxhYmxlIHZpYSBpbmplY3Rpb24gYmVjYXVzZSBlbWJlZGRlZFxyXG4gICAgICAvLyB2aWV3cyBjYW5ub3QgYmUgZ2l2ZW4gYSBjdXN0b20gaW5qZWN0b3IuIEluc3RlYWQsIHdlIGxvb2sgdXAgdGhlIERpYWxvZ1JlZiBieVxyXG4gICAgICAvLyBJRC4gVGhpcyBtdXN0IG9jY3VyIGluIGBvbkluaXRgLCBhcyB0aGUgSUQgYmluZGluZyBmb3IgdGhlIGRpYWxvZyBjb250YWluZXIgd29uJ3RcclxuICAgICAgLy8gYmUgcmVzb2x2ZWQgYXQgY29uc3RydWN0b3IgdGltZS5cclxuICAgICAgdGhpcy5kaWFsb2dSZWYgPSBnZXRDbG9zZXN0RGlhbG9nKFxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYsXHJcbiAgICAgICAgdGhpcy5fZGlhbG9nWydfZGlhbG9nJ10hLm9wZW5EaWFsb2dzXHJcbiAgICAgICkhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgcHJveGllZENoYW5nZSA9XHJcbiAgICAgIGNoYW5nZXNbJ19tYXREaWFsb2dDbG9zZSddIHx8IGNoYW5nZXNbJ19tYXREaWFsb2dDbG9zZVJlc3VsdCddO1xyXG5cclxuICAgIGlmIChwcm94aWVkQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuZGlhbG9nUmVzdWx0ID0gcHJveGllZENoYW5nZS5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb25CdXR0b25DbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgLy8gRGV0ZXJtaW5hdGUgdGhlIGZvY3VzIG9yaWdpbiB1c2luZyB0aGUgY2xpY2sgZXZlbnQsIGJlY2F1c2UgdXNpbmcgdGhlIEZvY3VzTW9uaXRvciB3aWxsXHJcbiAgICAvLyByZXN1bHQgaW4gaW5jb3JyZWN0IG9yaWdpbnMuIE1vc3Qgb2YgdGhlIHRpbWUsIGNsb3NlIGJ1dHRvbnMgd2lsbCBiZSBhdXRvIGZvY3VzZWQgaW4gdGhlXHJcbiAgICAvLyBkaWFsb2csIGFuZCB0aGVyZWZvcmUgY2xpY2tpbmcgdGhlIGJ1dHRvbiB3b24ndCByZXN1bHQgaW4gYSBmb2N1cyBjaGFuZ2UuIFRoaXMgbWVhbnMgdGhhdFxyXG4gICAgLy8gdGhlIEZvY3VzTW9uaXRvciB3b24ndCBkZXRlY3QgYW55IG9yaWdpbiBjaGFuZ2UsIGFuZCB3aWxsIGFsd2F5cyBvdXRwdXQgYHByb2dyYW1gLlxyXG4gICAgX2Nsb3NlRGlhbG9nVmlhKFxyXG4gICAgICB0aGlzLmRpYWxvZ1JlZixcclxuICAgICAgZXZlbnQuc2NyZWVuWCA9PT0gMCAmJiBldmVudC5zY3JlZW5ZID09PSAwID8gJ2tleWJvYXJkJyA6ICdtb3VzZScsXHJcbiAgICAgIHRoaXMuZGlhbG9nUmVzdWx0XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2xvc2VzdERpYWxvZyhcclxuICBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICBvcGVuRGlhbG9nczogRXNuRGlhbG9nUmVmPGFueT5bXVxyXG4pIHtcclxuICBsZXQgcGFyZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgd2hpbGUgKHBhcmVudCAmJiAhcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbWF0LWRpYWxvZy1jb250YWluZXInKSkge1xyXG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFyZW50ID8gb3BlbkRpYWxvZ3MuZmluZCgoZGlhbG9nKSA9PiBkaWFsb2cuaWQgPT09IHBhcmVudCEuaWQpIDogbnVsbDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tZGlhbG9nLWhlYWRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJlc24tZGlhbG9nLWhlYWRlciBpbmZvcm1hdGl2ZS17e3RoaXMuY29sb3J9fVwiIFtuZ0NsYXNzXT1cInsgJ3dpdGgtZGl2aWRlcic6IGRpdmlkZXJ9XCI+XHJcbiAgICBcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PmAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLWNvbnRlbnQuc2NzcyddLFxyXG4gIGV4cG9ydEFzOiAnZXNuRGlhbG9nSGVhZGVyJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkRpYWxvZ0hlYWRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGl2aWRlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgY29sb3I6IFwicHJpbWFyeVwiIHwgXCJhY2NlbnRcIiB8IFwiZXJyb3JcIiB8IFwic3VjY2Vzc1wiIHwgXCJuZXV0cmFsXCIgfCBcInRyYW5zcGFyZW50XCIgPSAndHJhbnNwYXJlbnQnO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1kaWFsb2ctY29udGVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJlc24tZGlhbG9nLWNvbnRlbnRcIj5cclxuICAgIFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+YCxcclxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctY29udGVudC5zY3NzJ10sXHJcbiAgZXhwb3J0QXM6ICdlc25EaWFsb2dDb250ZW50JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkRpYWxvZ0NvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIHB1YmxpYyBvYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXI7XHJcbiAgcHVibGljIGRpYWxvZ0NvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHVibGljIGlzRnVsbFNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgaGVpZ2h0VXBkYXRlVHJpZ2dlciQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ0NvbnRhaW5lciA9IF9maW5kRGlhbG9nQ29udGFpbmVyKHRoaXMuZWxlbWVudFJlZikhO1xyXG4gICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSAhIXRoaXMuZGlhbG9nQ29udGFpbmVyLnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5jb250YWlucygnZXNuLWRpYWxvZy1mdWxsLXNjcmVlbicpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gX2ZpbmRGb290ZXIodGhpcy5kaWFsb2dDb250YWluZXIpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gX2ZpbmRIZWFkZXIodGhpcy5kaWFsb2dDb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLmhlaWdodFVwZGF0ZVRyaWdnZXIkLm5leHQobnVsbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoISFmb290ZXIpIHtcclxuICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGZvb3RlciEpO1xyXG4gICAgfVxyXG4gICAgaWYgKCEhaGVhZGVyKSB7XHJcbiAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShoZWFkZXIhKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3VwZGF0ZUNvbnRlbnRIZWlnaHQoKTtcclxuXHJcbiAgICB0aGlzLmhlaWdodFVwZGF0ZVRyaWdnZXIkLnBpcGUoZGVib3VuY2VUaW1lKDM1KSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29udGVudEhlaWdodCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgX3VwZGF0ZUNvbnRlbnRIZWlnaHQoKSB7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLl9nZXRIZWFkZXJBbmRGb290ZXJIZWlnaHQoKTtcclxuICAgIGNvbnN0IGNvbnRlbnRFbG0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLmVzbi1kaWFsb2ctY29udGVudCdcclxuICAgICk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICBjb250ZW50RWxtLFxyXG4gICAgICBgJHshdGhpcy5pc0Z1bGxTY3JlZW4gPyAnbWF4LScgOiAnJ31oZWlnaHRgLFxyXG4gICAgICBgY2FsYygke3RoaXMuaXNGdWxsU2NyZWVuID8gMTAwIDogODV9dmggLSAke2hlaWdodH1weCAtIDJyZW0pYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9nZXRIZWFkZXJBbmRGb290ZXJIZWlnaHQoKSB7XHJcbiAgICBjb25zdCBmb290ZXIgPSBfZmluZEZvb3Rlcih0aGlzLmRpYWxvZ0NvbnRhaW5lcik7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBfZmluZEhlYWRlcih0aGlzLmRpYWxvZ0NvbnRhaW5lcik7XHJcbiAgICBjb25zdCBmb290ZXJIZWlnaHQgPSAhIWZvb3RlciA/IChmb290ZXIgYXMgYW55KVsnb2Zmc2V0SGVpZ2h0J10gOiAwO1xyXG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gISFoZWFkZXIgPyAoaGVhZGVyIGFzIGFueSlbJ29mZnNldEhlaWdodCddIDogMDtcclxuXHJcbiAgICByZXR1cm4gZm9vdGVySGVpZ2h0ICsgaGVhZGVySGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLWRpYWxvZy1mb290ZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZXNuLWRpYWxvZy1mb290ZXJcIiAoY2RrT2JzZXJ2ZUNvbnRlbnQpPVwib25Db250ZW50Q2hhbmdlKClcIiBbbmdDbGFzc109XCJ7ICAgICAgJ3dpdGgtZGl2aWRlcic6IGRpdmlkZXIsICAgICAgY2VudGVyZWQ6IGFsaWduID09PSAnY2VudGVyJywgICAgICAnc3BhY2UtYmV0d2Vlbic6IGFsaWduID09PSAnc3BhY2UtYmV0d2VlbicsICAgICAgJ21hbnktYnV0dG9ucyc6IG5iQnV0dG9ucyA+IDIgICAgfVwiPlxyXG4gICAgXHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5gLFxyXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy1jb250ZW50LnNjc3MnXSxcclxuICBleHBvcnRBczogJ2VzbkRpYWxvZ0Zvb3RlcicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25EaWFsb2dGb290ZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBkaXZpZGVyOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBhbGlnbjogJ3JpZ2h0JyB8ICdjZW50ZXInIHwgJ3NwYWNlLWJldHdlZW4nID0gJ3JpZ2h0JztcclxuXHJcbiAgcHVibGljIG5iQnV0dG9uczogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NvdW50QnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ29udGVudENoYW5nZSgpIHtcclxuICAgIHRoaXMuX2NvdW50QnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgX2NvdW50QnV0dG9ucygpIHtcclxuICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICgpID0+XHJcbiAgICAgICAgKHRoaXMubmJCdXR0b25zID1cclxuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lc24tYnRuJykubGVuZ3RoKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9maW5kRGlhbG9nQ29udGFpbmVyKGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XHJcbiAgbGV0IHBhcmVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gIHdoaWxlIChwYXJlbnQgJiYgIXBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21hdC1tZGMtZGlhbG9nLWNvbnRhaW5lcicpKSB7XHJcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9maW5kRm9vdGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVzbi1kaWFsb2ctZm9vdGVyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9maW5kSGVhZGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVzbi1kaWFsb2ctaGVhZGVyJyk7XHJcbn1cclxuIl19