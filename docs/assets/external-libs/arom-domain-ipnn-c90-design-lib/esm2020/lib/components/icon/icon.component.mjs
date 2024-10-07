import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, Optional, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./icons-registry";
const DEFAULT_BOXED = true;
export class EsnIcon {
    constructor(element, iconsRegistry, document) {
        this.element = element;
        this.iconsRegistry = iconsRegistry;
        this.document = document;
        this.boxed = DEFAULT_BOXED;
        this.size = 'md';
    }
    ngOnChanges(changes) {
        const svgData = this.iconsRegistry.getIcon(this.name);
        if (!svgData)
            return;
        if (this._svgIcon)
            this.element.nativeElement.removeChild(this._svgIcon);
        this._svgIcon = this._svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this._svgIcon);
    }
    _svgElementFromString(svgContent) {
        const div = this.document.createElement('DIV');
        div.innerHTML = svgContent;
        return (div.querySelector('svg') ||
            this.document.createElementNS('http://www.w3.org/2000/svg', 'path'));
    }
}
EsnIcon.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnIcon, deps: [{ token: i0.ElementRef }, { token: i1.EsnIconsRegistry }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Component });
EsnIcon.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnIcon, selector: "esn-icon", inputs: { name: "name", boxed: "boxed", size: "size" }, host: { properties: { "class.esn-icon-boxed": "boxed", "class.esn-icon-xs": "size === 'xs'", "class.esn-icon-sm": "size === 'sm'", "class.esn-icon-md": "size === 'md'" }, classAttribute: "esn-icon" }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:inline-flex;align-items:center;justify-content:center;fill:currentColor}:host.esn-icon-boxed.esn-icon-xs{width:.5rem;height:.5rem}:host.esn-icon-boxed.esn-icon-sm{width:1rem;height:1rem}:host.esn-icon-boxed.esn-icon-md{width:1.5rem;height:1.5rem}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnIcon, decorators: [{
            type: Component,
            args: [{ selector: 'esn-icon', template: '<ng-content></ng-content>', host: {
                        class: 'esn-icon',
                        '[class.esn-icon-boxed]': `boxed`,
                        '[class.esn-icon-xs]': `size === 'xs'`,
                        '[class.esn-icon-sm]': `size === 'sm'`,
                        '[class.esn-icon-md]': `size === 'md'`,
                    }, styles: [":host{display:inline-flex;align-items:center;justify-content:center;fill:currentColor}:host.esn-icon-boxed.esn-icon-xs{width:.5rem;height:.5rem}:host.esn-icon-boxed.esn-icon-sm{width:1rem;height:1rem}:host.esn-icon-boxed.esn-icon-md{width:1.5rem;height:1.5rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.EsnIconsRegistry }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { name: [{
                type: Input
            }], boxed: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsU0FBUyxFQUVULE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDOzs7QUFHdkIsTUFBTSxhQUFhLEdBQVksSUFBSSxDQUFDO0FBZXBDLE1BQU0sT0FBTyxPQUFPO0lBT2xCLFlBQ1MsT0FBbUIsRUFDbkIsYUFBK0IsRUFDRCxRQUFhO1FBRjNDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQ0QsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVIzQyxVQUFLLEdBQVksYUFBYSxDQUFDO1FBQy9CLFNBQUksR0FBd0IsSUFBSSxDQUFDO0lBUXZDLENBQUM7SUFFSixXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUVyQixJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxxQkFBcUIsQ0FBQyxVQUFrQjtRQUM3QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUMzQixPQUFPLENBQ0wsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLENBQ3BFLENBQUM7SUFDSixDQUFDOztxR0E5QlUsT0FBTyw0RUFVSSxRQUFRO3lGQVZuQixPQUFPLHNVQVZSLDJCQUEyQjs0RkFVMUIsT0FBTztrQkFabkIsU0FBUzsrQkFDRSxVQUFVLFlBQ1YsMkJBQTJCLFFBRS9CO3dCQUNKLEtBQUssRUFBRSxVQUFVO3dCQUNqQix3QkFBd0IsRUFBRSxPQUFPO3dCQUNqQyxxQkFBcUIsRUFBRSxlQUFlO3dCQUN0QyxxQkFBcUIsRUFBRSxlQUFlO3dCQUN0QyxxQkFBcUIsRUFBRSxlQUFlO3FCQUN2Qzs7MEJBWUUsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxRQUFROzRDQVRyQixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPcHRpb25hbCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFc25JY29uc1JlZ2lzdHJ5IH0gZnJvbSAnLi9pY29ucy1yZWdpc3RyeSc7XHJcblxyXG5jb25zdCBERUZBVUxUX0JPWEVEOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1pY29uJyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gIHN0eWxlVXJsczogWycuL2ljb24uY29tcG9uZW50LnNjc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2Vzbi1pY29uJyxcclxuICAgICdbY2xhc3MuZXNuLWljb24tYm94ZWRdJzogYGJveGVkYCxcclxuICAgICdbY2xhc3MuZXNuLWljb24teHNdJzogYHNpemUgPT09ICd4cydgLFxyXG4gICAgJ1tjbGFzcy5lc24taWNvbi1zbV0nOiBgc2l6ZSA9PT0gJ3NtJ2AsXHJcbiAgICAnW2NsYXNzLmVzbi1pY29uLW1kXSc6IGBzaXplID09PSAnbWQnYCxcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25JY29uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYm94ZWQ6IGJvb2xlYW4gPSBERUZBVUxUX0JPWEVEO1xyXG4gIEBJbnB1dCgpIHNpemU6ICd4cycgfCAnc20nIHwgJ21kJyAgPSAnbWQnO1xyXG4gXHJcbiAgcHVibGljIF9zdmdJY29uOiBTVkdFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIGljb25zUmVnaXN0cnk6IEVzbkljb25zUmVnaXN0cnksXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwdWJsaWMgZG9jdW1lbnQ6IGFueVxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3ZnRGF0YSA9IHRoaXMuaWNvbnNSZWdpc3RyeS5nZXRJY29uKHRoaXMubmFtZSk7XHJcbiAgICBpZiAoIXN2Z0RhdGEpIHJldHVybjtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuX3N2Z0ljb24pIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX3N2Z0ljb24pO1xyXG5cclxuICAgIHRoaXMuX3N2Z0ljb24gPSB0aGlzLl9zdmdFbGVtZW50RnJvbVN0cmluZyhzdmdEYXRhKTtcclxuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX3N2Z0ljb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIF9zdmdFbGVtZW50RnJvbVN0cmluZyhzdmdDb250ZW50OiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcclxuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gc3ZnQ29udGVudDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKSB8fFxyXG4gICAgICB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=