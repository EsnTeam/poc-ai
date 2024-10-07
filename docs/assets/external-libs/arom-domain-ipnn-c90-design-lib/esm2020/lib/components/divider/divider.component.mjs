import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import * as i0 from "@angular/core";
export class EsnDivider {
    constructor() {
        this._vertical = false;
        this._inset = false;
    }
    /** Whether the divider is vertically aligned. */
    get vertical() {
        return this._vertical;
    }
    set vertical(value) {
        this._vertical = coerceBooleanProperty(value);
    }
    /** Whether the divider is an inset divider. */
    get inset() {
        return this._inset;
    }
    set inset(value) {
        this._inset = coerceBooleanProperty(value);
    }
}
EsnDivider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDivider, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnDivider.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnDivider, selector: "esn-divider", inputs: { vertical: "vertical", inset: "inset" }, host: { attributes: { "role": "separator" }, properties: { "attr.aria-orientation": "vertical ? \"vertical\" : \"horizontal\"", "class.esn-divider-vertical": "vertical", "class.esn-divider-horizontal": "!vertical", "class.esn-divider-inset": "inset" }, classAttribute: "esn-divider" }, ngImport: i0, template: "", styles: [".esn-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.esn-divider.esn-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.esn-divider.esn-divider-inset{margin-left:80px}[dir=rtl] .esn-divider.esn-divider-inset{margin-left:auto;margin-right:80px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDivider, decorators: [{
            type: Component,
            args: [{ selector: 'esn-divider', host: {
                        'role': 'separator',
                        '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
                        '[class.esn-divider-vertical]': 'vertical',
                        '[class.esn-divider-horizontal]': '!vertical',
                        '[class.esn-divider-inset]': 'inset',
                        'class': 'esn-divider',
                    }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "", styles: [".esn-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.esn-divider.esn-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.esn-divider.esn-divider-inset{margin-left:80px}[dir=rtl] .esn-divider.esn-divider-inset{margin-left:auto;margin-right:80px}\n"] }]
        }], propDecorators: { vertical: [{
                type: Input
            }], inset: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9kaXZpZGVyL2RpdmlkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZGl2aWRlci9kaXZpZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTNGLE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDOztBQWlCMUUsTUFBTSxPQUFPLFVBQVU7SUFmdkI7UUF3QlUsY0FBUyxHQUFZLEtBQUssQ0FBQztRQVUzQixXQUFNLEdBQVksS0FBSyxDQUFDO0tBQ2pDO0lBbkJDLGlEQUFpRDtJQUNqRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQW1CO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUdELCtDQUErQztJQUMvQyxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQW1CO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7d0dBbEJVLFVBQVU7NEZBQVYsVUFBVSxtWUNuQnZCLEVBQUE7NEZEbUJhLFVBQVU7a0JBZnRCLFNBQVM7K0JBQ0UsYUFBYSxRQUdqQjt3QkFDSixNQUFNLEVBQUUsV0FBVzt3QkFDbkIseUJBQXlCLEVBQUUsc0NBQXNDO3dCQUNqRSw4QkFBOEIsRUFBRSxVQUFVO3dCQUMxQyxnQ0FBZ0MsRUFBRSxXQUFXO3dCQUM3QywyQkFBMkIsRUFBRSxPQUFPO3dCQUNwQyxPQUFPLEVBQUUsYUFBYTtxQkFDdkIsaUJBQ2MsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTs4QkFLM0MsUUFBUTtzQkFEWCxLQUFLO2dCQVdGLEtBQUs7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXREaXZpZGVyfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlclwiO1xyXG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvZXJjaW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1kaXZpZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGl2aWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGl2aWRlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGhvc3Q6IHtcclxuICAgICdyb2xlJzogJ3NlcGFyYXRvcicsXHJcbiAgICAnW2F0dHIuYXJpYS1vcmllbnRhdGlvbl0nOiAndmVydGljYWwgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIicsXHJcbiAgICAnW2NsYXNzLmVzbi1kaXZpZGVyLXZlcnRpY2FsXSc6ICd2ZXJ0aWNhbCcsXHJcbiAgICAnW2NsYXNzLmVzbi1kaXZpZGVyLWhvcml6b250YWxdJzogJyF2ZXJ0aWNhbCcsXHJcbiAgICAnW2NsYXNzLmVzbi1kaXZpZGVyLWluc2V0XSc6ICdpbnNldCcsXHJcbiAgICAnY2xhc3MnOiAnZXNuLWRpdmlkZXInLFxyXG4gIH0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkRpdmlkZXIge1xyXG4gIC8qKiBXaGV0aGVyIHRoZSBkaXZpZGVyIGlzIHZlcnRpY2FsbHkgYWxpZ25lZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB2ZXJ0aWNhbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcclxuICB9XHJcbiAgc2V0IHZlcnRpY2FsKHZhbHVlOiBCb29sZWFuSW5wdXQpIHtcclxuICAgIHRoaXMuX3ZlcnRpY2FsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGRpdmlkZXIgaXMgYW4gaW5zZXQgZGl2aWRlci4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBpbnNldCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnNldDtcclxuICB9XHJcbiAgc2V0IGluc2V0KHZhbHVlOiBCb29sZWFuSW5wdXQpIHtcclxuICAgIHRoaXMuX2luc2V0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfaW5zZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxufVxyXG4iLCIiXX0=