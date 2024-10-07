import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, Optional, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./illustrations-registry";
const DEFAULT_BOXED = true;
export class EsnIllustration {
    constructor(element, illustrationsRegistry, document) {
        this.element = element;
        this.illustrationsRegistry = illustrationsRegistry;
        this.document = document;
        this.boxed = DEFAULT_BOXED;
        this.size = 'md';
    }
    ngOnChanges(changes) {
        const svgData = this.illustrationsRegistry.getIllustration(this.name);
        if (!svgData)
            return;
        if (this._svgIllustration)
            this.element.nativeElement.removeChild(this._svgIllustration);
        this._svgIllustration = this._svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this._svgIllustration);
    }
    _svgElementFromString(svgContent) {
        const div = this.document.createElement('DIV');
        div.innerHTML = svgContent;
        return (div.querySelector('svg') ||
            this.document.createElementNS('http://www.w3.org/2000/svg', 'path'));
    }
}
EsnIllustration.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnIllustration, deps: [{ token: i0.ElementRef }, { token: i1.EsnIllustrationsRegistry }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Component });
EsnIllustration.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnIllustration, selector: "esn-illustration", inputs: { name: "name", boxed: "boxed", size: "size" }, host: { classAttribute: "esn-illustration" }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:inline-flex;align-items:center;justify-content:center;fill:currentColor}:host.esn-icon-boxed.esn-icon-xs{width:.5rem;height:.5rem}:host.esn-icon-boxed.esn-icon-sm{width:1rem;height:1rem}:host.esn-icon-boxed.esn-icon-md{width:1.5rem;height:1.5rem}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnIllustration, decorators: [{
            type: Component,
            args: [{ selector: 'esn-illustration', template: '<ng-content></ng-content>', host: {
                        class: 'esn-illustration',
                    }, styles: [":host{display:inline-flex;align-items:center;justify-content:center;fill:currentColor}:host.esn-icon-boxed.esn-icon-xs{width:.5rem;height:.5rem}:host.esn-icon-boxed.esn-icon-sm{width:1rem;height:1rem}:host.esn-icon-boxed.esn-icon-md{width:1.5rem;height:1.5rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.EsnIllustrationsRegistry }, { type: undefined, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWxsdXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2lsbHVzdHJhdGlvbi9pbGx1c3RyYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsU0FBUyxFQUVULE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDOzs7QUFJdkIsTUFBTSxhQUFhLEdBQVksSUFBSSxDQUFDO0FBVXBDLE1BQU0sT0FBTyxlQUFlO0lBTzFCLFlBQ1MsT0FBbUIsRUFDbkIscUJBQStDLEVBQ2pCLFFBQWE7UUFGM0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQTBCO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFSM0MsVUFBSyxHQUFZLGFBQWEsQ0FBQztRQUMvQixTQUFJLEdBQXVCLElBQUksQ0FBQztJQVF0QyxDQUFDO0lBRUosV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUVyQixJQUFJLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxxQkFBcUIsQ0FBQyxVQUFrQjtRQUM3QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUMzQixPQUFPLENBQ0wsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLENBQ3BFLENBQUM7SUFDSixDQUFDOzs2R0EvQlUsZUFBZSxvRkFVSixRQUFRO2lHQVZuQixlQUFlLG1MQU5oQiwyQkFBMkI7NEZBTTFCLGVBQWU7a0JBUjNCLFNBQVM7K0JBQ0Usa0JBQWtCLFlBQ2xCLDJCQUEyQixRQUUvQjt3QkFDSixLQUFLLEVBQUUsa0JBQWtCO3FCQUMxQjs7MEJBWUUsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxRQUFROzRDQVRyQixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9wdGlvbmFsLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVzbklsbHVzdHJhdGlvbnNSZWdpc3RyeSB9IGZyb20gJy4vaWxsdXN0cmF0aW9ucy1yZWdpc3RyeSc7XHJcbmltcG9ydCB7IEVzbklsbHVzdHJhdGlvbk5hbWUgfSBmcm9tICcuL2lsbHVzdHJhdGlvbnMnO1xyXG5cclxuY29uc3QgREVGQVVMVF9CT1hFRDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1pbGx1c3RyYXRpb24nLFxyXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaWxsdXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdlc24taWxsdXN0cmF0aW9uJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuSWxsdXN0cmF0aW9uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuYW1lOiBFc25JbGx1c3RyYXRpb25OYW1lO1xyXG4gIEBJbnB1dCgpIGJveGVkOiBib29sZWFuID0gREVGQVVMVF9CT1hFRDtcclxuICBASW5wdXQoKSBzaXplOiAneHMnIHwgJ3NtJyB8ICdtZCcgPSAnbWQnO1xyXG5cclxuICBwdWJsaWMgX3N2Z0lsbHVzdHJhdGlvbjogU1ZHRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyBpbGx1c3RyYXRpb25zUmVnaXN0cnk6IEVzbklsbHVzdHJhdGlvbnNSZWdpc3RyeSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHB1YmxpYyBkb2N1bWVudDogYW55XHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCBzdmdEYXRhID0gdGhpcy5pbGx1c3RyYXRpb25zUmVnaXN0cnkuZ2V0SWxsdXN0cmF0aW9uKHRoaXMubmFtZSk7XHJcbiAgICBpZiAoIXN2Z0RhdGEpIHJldHVybjtcclxuXHJcbiAgICBpZiAodGhpcy5fc3ZnSWxsdXN0cmF0aW9uKVxyXG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9zdmdJbGx1c3RyYXRpb24pO1xyXG5cclxuICAgIHRoaXMuX3N2Z0lsbHVzdHJhdGlvbiA9IHRoaXMuX3N2Z0VsZW1lbnRGcm9tU3RyaW5nKHN2Z0RhdGEpO1xyXG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fc3ZnSWxsdXN0cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBfc3ZnRWxlbWVudEZyb21TdHJpbmcoc3ZnQ29udGVudDogc3RyaW5nKTogU1ZHRWxlbWVudCB7XHJcbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IHN2Z0NvbnRlbnQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgfHxcclxuICAgICAgdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19