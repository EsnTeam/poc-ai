import { Directive, Inject, Input } from '@angular/core';
import { ESN_TOOLTIP_DEFAULT_OPTIONS, ESN_TOOLTIP_SCROLL_STRATEGY } from "./tooltip";
import { _MatTooltipBase, TooltipComponent } from "@angular/material/tooltip";
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/cdk/scrolling";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "@angular/cdk/a11y";
import * as i5 from "@angular/cdk/bidi";
export class TooltipDirective extends _MatTooltipBase {
    constructor(overlay, elementRef, scrollDispatcher, viewContainerRef, ngZone, platform, ariaDescriber, focusMonitor, scrollStrategy, dir, defaultOptions) {
        super(overlay, elementRef, scrollDispatcher, viewContainerRef, ngZone, platform, ariaDescriber, focusMonitor, scrollStrategy, dir, defaultOptions, document);
        this._tooltipComponent = TooltipComponent;
    }
    ngOnChanges(changes) {
        if (!!this.esnTooltip) {
            this.disabled = false;
            if (typeof this.esnTooltip === 'string') {
                this.message = this.esnTooltip;
            }
            else {
                if (this.esnTooltip.esnTooltipMessage) {
                    this.message = this.esnTooltip.esnTooltipMessage;
                }
                if (this.esnTooltip.esnTooltipDisable) {
                    this.disabled = this.esnTooltip.esnTooltipDisable;
                }
                if (this.esnTooltip.esnTooltipPosition) {
                    this.position = this.esnTooltip.esnTooltipPosition;
                }
                if (this.esnTooltip.esnTooltipClass) {
                    this.tooltipClass = this.esnTooltip.esnTooltipClass;
                }
                if (this.esnTooltip.esnTooltipTouchGestures) {
                    this.touchGestures = this.esnTooltip.esnTooltipTouchGestures;
                }
                if (this.esnTooltip.esnTooltipHideDelay) {
                    this.hideDelay = this.esnTooltip.esnTooltipHideDelay;
                }
                if (this.esnTooltip.esnTooltipShowDelay) {
                    this.showDelay = this.esnTooltip.esnTooltipShowDelay;
                }
            }
        }
        else {
            this.message = '';
        }
    }
}
TooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TooltipDirective, deps: [{ token: i1.Overlay }, { token: i0.ElementRef }, { token: i2.ScrollDispatcher }, { token: i0.ViewContainerRef }, { token: i0.NgZone }, { token: i3.Platform }, { token: i4.AriaDescriber }, { token: i4.FocusMonitor }, { token: ESN_TOOLTIP_SCROLL_STRATEGY }, { token: i5.Directionality }, { token: ESN_TOOLTIP_DEFAULT_OPTIONS }], target: i0.ɵɵFactoryTarget.Directive });
TooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: TooltipDirective, selector: "[esnTooltip]", inputs: { esnTooltip: "esnTooltip" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esnTooltip]',
                }]
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.ElementRef }, { type: i2.ScrollDispatcher }, { type: i0.ViewContainerRef }, { type: i0.NgZone }, { type: i3.Platform }, { type: i4.AriaDescriber }, { type: i4.FocusMonitor }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ESN_TOOLTIP_SCROLL_STRATEGY]
                }] }, { type: i5.Directionality }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ESN_TOOLTIP_DEFAULT_OPTIONS]
                }] }]; }, propDecorators: { esnTooltip: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWMsTUFBTSxFQUFFLEtBQUssRUFBcUQsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUFDLDJCQUEyQixFQUFFLDJCQUEyQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxlQUFlLEVBQTRCLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7QUFZdEcsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGVBQWlDO0lBS3JFLFlBQVksT0FBZ0IsRUFDaEIsVUFBbUMsRUFDbkMsZ0JBQWtDLEVBQ2xDLGdCQUFrQyxFQUNsQyxNQUFjLEVBQUUsUUFBa0IsRUFDbEMsYUFBNEIsRUFDNUIsWUFBMEIsRUFDVyxjQUE4QixFQUNuRSxHQUFtQixFQUNrQixjQUF3QztRQUV2RixLQUFLLENBQ0gsT0FBTyxFQUNQLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixRQUFRLEVBQ1IsYUFBYSxFQUNiLFlBQVksRUFDWixjQUFjLEVBQ2QsR0FBRyxFQUNILGNBQWMsRUFDZCxRQUFRLENBQ1QsQ0FBQTtRQTVCZ0Isc0JBQWlCLEdBQW9DLGdCQUFnQixDQUFDO0lBNkJ6RixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXFCO1FBQy9CLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBRyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFO29CQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7aUJBQ2xEO2dCQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTtvQkFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO2lCQUNuRDtnQkFDRCxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDcEQ7Z0JBQ0QsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztpQkFDckQ7Z0JBQ0QsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixFQUFFO29CQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7aUJBQzlEO2dCQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO2lCQUN0RDtnQkFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDdEQ7YUFDRjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7OzhHQS9EVSxnQkFBZ0IsME9BWVAsMkJBQTJCLDJDQUUzQiwyQkFBMkI7a0dBZHBDLGdCQUFnQjs0RkFBaEIsZ0JBQWdCO2tCQUo1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7MEJBY2MsTUFBTTsyQkFBQywyQkFBMkI7OzBCQUVsQyxNQUFNOzJCQUFDLDJCQUEyQjs0Q0FYdEMsVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RVNOX1RPT0xUSVBfREVGQVVMVF9PUFRJT05TLCBFU05fVE9PTFRJUF9TQ1JPTExfU1RSQVRFR1l9IGZyb20gXCIuL3Rvb2x0aXBcIjtcclxuaW1wb3J0IHtfTWF0VG9vbHRpcEJhc2UsIE1hdFRvb2x0aXBEZWZhdWx0T3B0aW9ucywgVG9vbHRpcENvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXBcIjtcclxuaW1wb3J0IHtDb21wb25lbnRUeXBlLCBPdmVybGF5LCBTY3JvbGxTdHJhdGVneX0gZnJvbSBcIkBhbmd1bGFyL2Nkay9vdmVybGF5XCI7XHJcbmltcG9ydCB7U2Nyb2xsRGlzcGF0Y2hlcn0gZnJvbSBcIkBhbmd1bGFyL2Nkay9zY3JvbGxpbmdcIjtcclxuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSBcIkBhbmd1bGFyL2Nkay9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQge0FyaWFEZXNjcmliZXIsIEZvY3VzTW9uaXRvcn0gZnJvbSBcIkBhbmd1bGFyL2Nkay9hMTF5XCI7XHJcbmltcG9ydCB7RGlyZWN0aW9uYWxpdHl9IGZyb20gXCJAYW5ndWxhci9jZGsvYmlkaVwiO1xyXG5pbXBvcnQge0VzblRvb2x0aXB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZXNuVG9vbHRpcF0nLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXJlY3RpdmUgZXh0ZW5kcyBfTWF0VG9vbHRpcEJhc2U8VG9vbHRpcENvbXBvbmVudD4gIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3Rvb2x0aXBDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VG9vbHRpcENvbXBvbmVudD4gPSBUb29sdGlwQ29tcG9uZW50O1xyXG5cclxuICBASW5wdXQoKSBlc25Ub29sdGlwOiBzdHJpbmcgfCBFc25Ub29sdGlwIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3Iob3ZlcmxheTogT3ZlcmxheSxcclxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICBzY3JvbGxEaXNwYXRjaGVyOiBTY3JvbGxEaXNwYXRjaGVyLFxyXG4gICAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgbmdab25lOiBOZ1pvbmUsIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgICAgICAgICAgICBhcmlhRGVzY3JpYmVyOiBBcmlhRGVzY3JpYmVyLFxyXG4gICAgICAgICAgICAgIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoRVNOX1RPT0xUSVBfU0NST0xMX1NUUkFURUdZKSBzY3JvbGxTdHJhdGVneTogU2Nyb2xsU3RyYXRlZ3ksXHJcbiAgICAgICAgICAgICAgZGlyOiBEaXJlY3Rpb25hbGl0eSxcclxuICAgICAgICAgICAgICBASW5qZWN0KEVTTl9UT09MVElQX0RFRkFVTFRfT1BUSU9OUykgZGVmYXVsdE9wdGlvbnM6IE1hdFRvb2x0aXBEZWZhdWx0T3B0aW9ucyxcclxuICApIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBvdmVybGF5LFxyXG4gICAgICBlbGVtZW50UmVmLFxyXG4gICAgICBzY3JvbGxEaXNwYXRjaGVyLFxyXG4gICAgICB2aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICBuZ1pvbmUsXHJcbiAgICAgIHBsYXRmb3JtLFxyXG4gICAgICBhcmlhRGVzY3JpYmVyLFxyXG4gICAgICBmb2N1c01vbml0b3IsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5LFxyXG4gICAgICBkaXIsXHJcbiAgICAgIGRlZmF1bHRPcHRpb25zLFxyXG4gICAgICBkb2N1bWVudFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczpTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZighIXRoaXMuZXNuVG9vbHRpcCkge1xyXG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIGlmKHR5cGVvZiB0aGlzLmVzblRvb2x0aXAgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5lc25Ub29sdGlwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmVzblRvb2x0aXAuZXNuVG9vbHRpcE1lc3NhZ2UpIHtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZXNuVG9vbHRpcC5lc25Ub29sdGlwTWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZXNuVG9vbHRpcC5lc25Ub29sdGlwRGlzYWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZXNuVG9vbHRpcC5lc25Ub29sdGlwRGlzYWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5lc25Ub29sdGlwLmVzblRvb2x0aXBQb3NpdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuZXNuVG9vbHRpcC5lc25Ub29sdGlwUG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZXNuVG9vbHRpcC5lc25Ub29sdGlwQ2xhc3MpIHtcclxuICAgICAgICAgIHRoaXMudG9vbHRpcENsYXNzID0gdGhpcy5lc25Ub29sdGlwLmVzblRvb2x0aXBDbGFzcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5lc25Ub29sdGlwLmVzblRvb2x0aXBUb3VjaEdlc3R1cmVzKSB7XHJcbiAgICAgICAgICB0aGlzLnRvdWNoR2VzdHVyZXMgPSB0aGlzLmVzblRvb2x0aXAuZXNuVG9vbHRpcFRvdWNoR2VzdHVyZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVzblRvb2x0aXAuZXNuVG9vbHRpcEhpZGVEZWxheSkge1xyXG4gICAgICAgICAgdGhpcy5oaWRlRGVsYXkgPSB0aGlzLmVzblRvb2x0aXAuZXNuVG9vbHRpcEhpZGVEZWxheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZXNuVG9vbHRpcC5lc25Ub29sdGlwU2hvd0RlbGF5KSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dEZWxheSA9IHRoaXMuZXNuVG9vbHRpcC5lc25Ub29sdGlwU2hvd0RlbGF5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=