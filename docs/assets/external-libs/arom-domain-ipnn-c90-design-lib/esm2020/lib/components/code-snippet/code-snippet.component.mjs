import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-highlightjs";
export class EsnCodeSnippetComponent {
    constructor() {
        this.lineNumbers = true;
    }
}
EsnCodeSnippetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnCodeSnippetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnCodeSnippetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnCodeSnippetComponent, selector: "esn-code-snippet", inputs: { code: "code", language: "language", lineNumbers: "lineNumbers" }, host: { classAttribute: "esn-code-snippet" }, ngImport: i0, template: "<pre><code [highlight]=\"code\" [languages]=\"language\" [lineNumbers]=\"true\"></code></pre>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.Highlight, selector: "[highlight]", inputs: ["highlight", "languages", "lineNumbers"], outputs: ["highlighted"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnCodeSnippetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'esn-code-snippet', host: {
                        class: 'esn-code-snippet'
                    }, template: "<pre><code [highlight]=\"code\" [languages]=\"language\" [lineNumbers]=\"true\"></code></pre>\r\n" }]
        }], propDecorators: { code: [{
                type: Input
            }], language: [{
                type: Input
            }], lineNumbers: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1zbmlwcGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NvZGUtc25pcHBldC9jb2RlLXNuaXBwZXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY29kZS1zbmlwcGV0L2NvZGUtc25pcHBldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBVWpELE1BQU0sT0FBTyx1QkFBdUI7SUFScEM7UUFXVyxnQkFBVyxHQUFZLElBQUksQ0FBQztLQUN0Qzs7cUhBSlksdUJBQXVCO3lHQUF2Qix1QkFBdUIsa0xDVnBDLG1HQUNBOzRGRFNhLHVCQUF1QjtrQkFSbkMsU0FBUzsrQkFDRSxrQkFBa0IsUUFHdkI7d0JBQ0gsS0FBSyxFQUFFLGtCQUFrQjtxQkFDMUI7OEJBR1EsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLWNvZGUtc25pcHBldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvZGUtc25pcHBldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29kZS1zbmlwcGV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgaG9zdDp7XHJcbiAgICBjbGFzczogJ2Vzbi1jb2RlLXNuaXBwZXQnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuQ29kZVNuaXBwZXRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNvZGU6IHN0cmluZztcclxuICBASW5wdXQoKSBsYW5ndWFnZTogc3RyaW5nW107XHJcbiAgQElucHV0KCkgbGluZU51bWJlcnM6IGJvb2xlYW4gPSB0cnVlO1xyXG59XHJcbiIsIjxwcmU+PGNvZGUgW2hpZ2hsaWdodF09XCJjb2RlXCIgW2xhbmd1YWdlc109XCJsYW5ndWFnZVwiIFtsaW5lTnVtYmVyc109XCJ0cnVlXCI+PC9jb2RlPjwvcHJlPlxyXG4iXX0=