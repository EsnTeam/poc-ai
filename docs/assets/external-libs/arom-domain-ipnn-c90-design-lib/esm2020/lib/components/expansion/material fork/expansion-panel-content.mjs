/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Inject, Optional } from '@angular/core';
import { ESN_EXPANSION_PANEL } from './expansion-panel-base';
import * as i0 from "@angular/core";
/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */
export class EsnExpansionPanelContent {
    constructor(_template, _expansionPanel) {
        this._template = _template;
        this._expansionPanel = _expansionPanel;
    }
}
EsnExpansionPanelContent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnExpansionPanelContent, deps: [{ token: i0.TemplateRef }, { token: ESN_EXPANSION_PANEL, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
EsnExpansionPanelContent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnExpansionPanelContent, selector: "ng-template[esnExpansionPanelContent]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnExpansionPanelContent, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-template[esnExpansionPanelContent]',
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ESN_EXPANSION_PANEL]
                }, {
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9leHBhbnNpb24vbWF0ZXJpYWwgZm9yay9leHBhbnNpb24tcGFuZWwtY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFlLE1BQU0sRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFDLG1CQUFtQixFQUF3QixNQUFNLHdCQUF3QixDQUFDOztBQUVsRjs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFlBQ1MsU0FBMkIsRUFDYyxlQUF1QztRQURoRixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUNjLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtJQUN0RixDQUFDOztzSEFKTyx3QkFBd0IsNkNBR3pCLG1CQUFtQjswR0FIbEIsd0JBQXdCOzRGQUF4Qix3QkFBd0I7a0JBSHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztpQkFDbEQ7OzBCQUlJLE1BQU07MkJBQUMsbUJBQW1COzswQkFBRyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIEluamVjdCwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0VTTl9FWFBBTlNJT05fUEFORUwsIEVzbkV4cGFuc2lvblBhbmVsQmFzZX0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtYmFzZSc7XHJcblxyXG4vKipcclxuICogRXhwYW5zaW9uIHBhbmVsIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIGxhemlseVxyXG4gKiBhZnRlciB0aGUgcGFuZWwgaXMgb3BlbmVkIGZvciB0aGUgZmlyc3QgdGltZS5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbZXNuRXhwYW5zaW9uUGFuZWxDb250ZW50XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25FeHBhbnNpb25QYW5lbENvbnRlbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIF90ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PixcclxuICAgIEBJbmplY3QoRVNOX0VYUEFOU0lPTl9QQU5FTCkgQE9wdGlvbmFsKCkgcHVibGljIF9leHBhbnNpb25QYW5lbD86IEVzbkV4cGFuc2lvblBhbmVsQmFzZSxcclxuICApIHt9XHJcbn1cclxuIl19