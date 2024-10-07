/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input, ContentChildren, QueryList, } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CdkAccordion } from '@angular/cdk/accordion';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { startWith } from 'rxjs/operators';
import { ESN_ACCORDION, } from './accordion-base';
import { EsnExpansionPanelHeader } from './expansion-panel-header';
import * as i0 from "@angular/core";
/**
 * Directive for a Esnerial Design Accordion.
 */
export class EsnAccordion extends CdkAccordion {
    constructor() {
        super(...arguments);
        /** Headers belonging to this accordion. */
        this._ownHeaders = new QueryList();
        this._hideToggle = false;
        /**
         * Display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the rest of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */
        this.displayMode = 'default';
        /** The position of the expansion indicator. */
        this.togglePosition = 'after';
    }
    /** Whether the expansion indicator should be hidden. */
    get hideToggle() {
        return this._hideToggle;
    }
    set hideToggle(show) {
        this._hideToggle = coerceBooleanProperty(show);
    }
    ngAfterContentInit() {
        this._headers.changes
            .pipe(startWith(this._headers))
            .subscribe((headers) => {
            this._ownHeaders.reset(headers.filter(header => header.panel.accordion === this));
            this._ownHeaders.notifyOnChanges();
        });
        this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
    }
    /** Handles keyboard events coming in from the panel headers. */
    _handleHeaderKeydown(event) {
        this._keyManager.onKeydown(event);
    }
    _handleHeaderFocus(header) {
        this._keyManager.updateActiveItem(header);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._keyManager?.destroy();
        this._ownHeaders.destroy();
    }
}
EsnAccordion.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAccordion, deps: null, target: i0.ɵɵFactoryTarget.Directive });
EsnAccordion.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnAccordion, selector: "esn-accordion", inputs: { multi: "multi", hideToggle: "hideToggle", displayMode: "displayMode", togglePosition: "togglePosition" }, host: { properties: { "class.mat-accordion-multi": "this.multi" }, classAttribute: "esn-accordion mat-accordion" }, providers: [
        {
            provide: ESN_ACCORDION,
            useExisting: EsnAccordion,
        },
    ], queries: [{ propertyName: "_headers", predicate: EsnExpansionPanelHeader, descendants: true }], exportAs: ["esnAccordion"], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAccordion, decorators: [{
            type: Directive,
            args: [{
                    selector: 'esn-accordion',
                    exportAs: 'esnAccordion',
                    inputs: ['multi'],
                    providers: [
                        {
                            provide: ESN_ACCORDION,
                            useExisting: EsnAccordion,
                        },
                    ],
                    host: {
                        class: 'esn-accordion mat-accordion',
                        // Class binding which is only used by the test harness as there is no other
                        // way for the harness to detect if multiple panel support is enabled.
                        '[class.mat-accordion-multi]': 'this.multi',
                    },
                }]
        }], propDecorators: { _headers: [{
                type: ContentChildren,
                args: [EsnExpansionPanelHeader, { descendants: true }]
            }], hideToggle: [{
                type: Input
            }], displayMode: [{
                type: Input
            }], togglePosition: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZXhwYW5zaW9uL21hdGVyaWFsIGZvcmsvYWNjb3JkaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLGVBQWUsRUFDZixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUNMLGFBQWEsR0FJZCxNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDOztBQUVqRTs7R0FFRztBQWtCSCxNQUFNLE9BQU8sWUFDWCxTQUFRLFlBQVk7SUFsQnRCOztRQXVCRSwyQ0FBMkM7UUFDbkMsZ0JBQVcsR0FBRyxJQUFJLFNBQVMsRUFBMkIsQ0FBQztRQWN2RCxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUVyQzs7Ozs7OztXQU9HO1FBQ00sZ0JBQVcsR0FBNEIsU0FBUyxDQUFDO1FBRTFELCtDQUErQztRQUN0QyxtQkFBYyxHQUErQixPQUFPLENBQUM7S0EyQi9EO0lBaERDLHdEQUF3RDtJQUN4RCxJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLElBQWtCO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQWdCRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO2FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxDQUFDLE9BQTJDLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkYsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSxvQkFBb0IsQ0FBQyxLQUFvQjtRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBK0I7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRVEsV0FBVztRQUNsQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7OzBHQTVEVSxZQUFZOzhGQUFaLFlBQVksZ1JBYlo7UUFDVDtZQUNFLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLFdBQVcsRUFBRSxZQUFZO1NBQzFCO0tBQ0YsbURBa0JnQix1QkFBdUI7NEZBVjdCLFlBQVk7a0JBakJ4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsY0FBYztvQkFDeEIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNqQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsY0FBYzt5QkFDMUI7cUJBQ0Y7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSw2QkFBNkI7d0JBQ3BDLDRFQUE0RTt3QkFDNUUsc0VBQXNFO3dCQUN0RSw2QkFBNkIsRUFBRSxZQUFZO3FCQUM1QztpQkFDRjs4QkFZQyxRQUFRO3NCQURQLGVBQWU7dUJBQUMsdUJBQXVCLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDO2dCQUt6RCxVQUFVO3NCQURiLEtBQUs7Z0JBaUJHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBR0csY0FBYztzQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHtDZGtBY2NvcmRpb259IGZyb20gJ0Bhbmd1bGFyL2Nkay9hY2NvcmRpb24nO1xyXG5pbXBvcnQge0ZvY3VzS2V5TWFuYWdlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQge3N0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIEVTTl9BQ0NPUkRJT04sXHJcbiAgRXNuQWNjb3JkaW9uQmFzZSxcclxuICBFc25BY2NvcmRpb25EaXNwbGF5TW9kZSxcclxuICBFc25BY2NvcmRpb25Ub2dnbGVQb3NpdGlvbixcclxufSBmcm9tICcuL2FjY29yZGlvbi1iYXNlJztcclxuaW1wb3J0IHtFc25FeHBhbnNpb25QYW5lbEhlYWRlcn0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtaGVhZGVyJztcclxuXHJcbi8qKlxyXG4gKiBEaXJlY3RpdmUgZm9yIGEgRXNuZXJpYWwgRGVzaWduIEFjY29yZGlvbi5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLWFjY29yZGlvbicsXHJcbiAgZXhwb3J0QXM6ICdlc25BY2NvcmRpb24nLFxyXG4gIGlucHV0czogWydtdWx0aSddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBFU05fQUNDT1JESU9OLFxyXG4gICAgICB1c2VFeGlzdGluZzogRXNuQWNjb3JkaW9uLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnZXNuLWFjY29yZGlvbiBtYXQtYWNjb3JkaW9uJyxcclxuICAgIC8vIENsYXNzIGJpbmRpbmcgd2hpY2ggaXMgb25seSB1c2VkIGJ5IHRoZSB0ZXN0IGhhcm5lc3MgYXMgdGhlcmUgaXMgbm8gb3RoZXJcclxuICAgIC8vIHdheSBmb3IgdGhlIGhhcm5lc3MgdG8gZGV0ZWN0IGlmIG11bHRpcGxlIHBhbmVsIHN1cHBvcnQgaXMgZW5hYmxlZC5cclxuICAgICdbY2xhc3MubWF0LWFjY29yZGlvbi1tdWx0aV0nOiAndGhpcy5tdWx0aScsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkFjY29yZGlvblxyXG4gIGV4dGVuZHMgQ2RrQWNjb3JkaW9uXHJcbiAgaW1wbGVtZW50cyBFc25BY2NvcmRpb25CYXNlLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3lcclxue1xyXG4gIHByaXZhdGUgX2tleU1hbmFnZXI6IEZvY3VzS2V5TWFuYWdlcjxFc25FeHBhbnNpb25QYW5lbEhlYWRlcj47XHJcblxyXG4gIC8qKiBIZWFkZXJzIGJlbG9uZ2luZyB0byB0aGlzIGFjY29yZGlvbi4gKi9cclxuICBwcml2YXRlIF9vd25IZWFkZXJzID0gbmV3IFF1ZXJ5TGlzdDxFc25FeHBhbnNpb25QYW5lbEhlYWRlcj4oKTtcclxuXHJcbiAgLyoqIEFsbCBoZWFkZXJzIGluc2lkZSB0aGUgYWNjb3JkaW9uLiBJbmNsdWRlcyBoZWFkZXJzIGluc2lkZSBuZXN0ZWQgYWNjb3JkaW9ucy4gKi9cclxuICBAQ29udGVudENoaWxkcmVuKEVzbkV4cGFuc2lvblBhbmVsSGVhZGVyLCB7ZGVzY2VuZGFudHM6IHRydWV9KVxyXG4gIF9oZWFkZXJzOiBRdWVyeUxpc3Q8RXNuRXhwYW5zaW9uUGFuZWxIZWFkZXI+O1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgZXhwYW5zaW9uIGluZGljYXRvciBzaG91bGQgYmUgaGlkZGVuLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGhpZGVUb2dnbGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZVRvZ2dsZTtcclxuICB9XHJcbiAgc2V0IGhpZGVUb2dnbGUoc2hvdzogQm9vbGVhbklucHV0KSB7XHJcbiAgICB0aGlzLl9oaWRlVG9nZ2xlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNob3cpO1xyXG4gIH1cclxuICBwcml2YXRlIF9oaWRlVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXkgbW9kZSB1c2VkIGZvciBhbGwgZXhwYW5zaW9uIHBhbmVscyBpbiB0aGUgYWNjb3JkaW9uLiBDdXJyZW50bHkgdHdvIGRpc3BsYXlcclxuICAgKiBtb2RlcyBleGlzdDpcclxuICAgKiAgZGVmYXVsdCAtIGEgZ3V0dGVyLWxpa2Ugc3BhY2luZyBpcyBwbGFjZWQgYXJvdW5kIGFueSBleHBhbmRlZCBwYW5lbCwgcGxhY2luZyB0aGUgZXhwYW5kZWRcclxuICAgKiAgICAgcGFuZWwgYXQgYSBkaWZmZXJlbnQgZWxldmF0aW9uIGZyb20gdGhlIHJlc3Qgb2YgdGhlIGFjY29yZGlvbi5cclxuICAgKiAgZmxhdCAtIG5vIHNwYWNpbmcgaXMgcGxhY2VkIGFyb3VuZCBleHBhbmRlZCBwYW5lbHMsIHNob3dpbmcgYWxsIHBhbmVscyBhdCB0aGUgc2FtZVxyXG4gICAqICAgICBlbGV2YXRpb24uXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGlzcGxheU1vZGU6IEVzbkFjY29yZGlvbkRpc3BsYXlNb2RlID0gJ2RlZmF1bHQnO1xyXG5cclxuICAvKiogVGhlIHBvc2l0aW9uIG9mIHRoZSBleHBhbnNpb24gaW5kaWNhdG9yLiAqL1xyXG4gIEBJbnB1dCgpIHRvZ2dsZVBvc2l0aW9uOiBFc25BY2NvcmRpb25Ub2dnbGVQb3NpdGlvbiA9ICdhZnRlcic7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX2hlYWRlcnMuY2hhbmdlc1xyXG4gICAgICAucGlwZShzdGFydFdpdGgodGhpcy5faGVhZGVycykpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGhlYWRlcnM6IFF1ZXJ5TGlzdDxFc25FeHBhbnNpb25QYW5lbEhlYWRlcj4pID0+IHtcclxuICAgICAgICB0aGlzLl9vd25IZWFkZXJzLnJlc2V0KGhlYWRlcnMuZmlsdGVyKGhlYWRlciA9PiBoZWFkZXIucGFuZWwuYWNjb3JkaW9uID09PSB0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5fb3duSGVhZGVycy5ub3RpZnlPbkNoYW5nZXMoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5fa2V5TWFuYWdlciA9IG5ldyBGb2N1c0tleU1hbmFnZXIodGhpcy5fb3duSGVhZGVycykud2l0aFdyYXAoKS53aXRoSG9tZUFuZEVuZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMga2V5Ym9hcmQgZXZlbnRzIGNvbWluZyBpbiBmcm9tIHRoZSBwYW5lbCBoZWFkZXJzLiAqL1xyXG4gIF9oYW5kbGVIZWFkZXJLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICB0aGlzLl9rZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlSGVhZGVyRm9jdXMoaGVhZGVyOiBFc25FeHBhbnNpb25QYW5lbEhlYWRlcikge1xyXG4gICAgdGhpcy5fa2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKGhlYWRlcik7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSBuZ09uRGVzdHJveSgpIHtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgICB0aGlzLl9rZXlNYW5hZ2VyPy5kZXN0cm95KCk7XHJcbiAgICB0aGlzLl9vd25IZWFkZXJzLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19