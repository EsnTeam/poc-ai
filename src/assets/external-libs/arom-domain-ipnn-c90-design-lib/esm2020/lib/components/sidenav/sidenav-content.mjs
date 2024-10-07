import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../button/button.component";
import * as i3 from "@angular/router";
export class EsnSidenavButton {
    constructor() {
        this.routerLinkActiveOptions = { exact: false };
    }
}
EsnSidenavButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavButton, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnSidenavButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnSidenavButton, selector: "esn-sidenav-button", inputs: { link: "link", active: "active", routerLinkActiveOptions: "routerLinkActiveOptions" }, exportAs: ["esnSidenavButton"], ngImport: i0, template: "<esn-button \r\n    class=\"esn-sidenav-button\" \r\n    [routerLink]=\"link\"\r\n    routerLinkActive=\"esn-sidenav-button--active\"\r\n    [ngClass]=\"{'esn-sidenav-button--active': active}\"\r\n    [routerLinkActiveOptions]=\"routerLinkActiveOptions\"\r\n>\r\n  <ng-content></ng-content>\r\n</esn-button>\r\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i2.EsnButton, selector: "esn-button", inputs: ["type", "size", "disabled", "round", "iconOnly", "color"], outputs: ["click"] }, { kind: "directive", type: i3.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavButton, decorators: [{
            type: Component,
            args: [{ selector: 'esn-sidenav-button', exportAs: 'esnSidenavButton', template: "<esn-button \r\n    class=\"esn-sidenav-button\" \r\n    [routerLink]=\"link\"\r\n    routerLinkActive=\"esn-sidenav-button--active\"\r\n    [ngClass]=\"{'esn-sidenav-button--active': active}\"\r\n    [routerLinkActiveOptions]=\"routerLinkActiveOptions\"\r\n>\r\n  <ng-content></ng-content>\r\n</esn-button>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { link: [{
                type: Input
            }], active: [{
                type: Input
            }], routerLinkActiveOptions: [{
                type: Input
            }] } });
export class EsnSidenavFooter {
    constructor() { }
}
EsnSidenavFooter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavFooter, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnSidenavFooter.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnSidenavFooter, selector: "esn-sidenav-footer", host: { classAttribute: "esn-sidenav-footer" }, exportAs: ["esnSidenavFooter"], ngImport: i0, template: `<div class="esn-sidenav-footer-inner">
    <ng-content></ng-content>
  </div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavFooter, decorators: [{
            type: Component,
            args: [{
                    selector: 'esn-sidenav-footer',
                    exportAs: 'esnSidenavFooter',
                    template: `<div class="esn-sidenav-footer-inner">
    <ng-content></ng-content>
  </div>`,
                    host: { 'class': 'esn-sidenav-footer' }
                }]
        }], ctorParameters: function () { return []; } });
export class EsnSidenavSection {
    constructor() { }
}
EsnSidenavSection.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavSection, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnSidenavSection.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnSidenavSection, selector: "esn-sidenav-section", host: { classAttribute: "esn-sidenav-section" }, exportAs: ["esnSidenavSection"], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavSection, decorators: [{
            type: Component,
            args: [{
                    selector: 'esn-sidenav-section',
                    exportAs: 'esnSidenavSection',
                    template: `<ng-content></ng-content>`,
                    host: { 'class': 'esn-sidenav-section' }
                }]
        }], ctorParameters: function () { return []; } });
export class EsnSidenavHeader {
    constructor() { }
}
EsnSidenavHeader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavHeader, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnSidenavHeader.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnSidenavHeader, selector: "esn-sidenav-header", host: { classAttribute: "esn-sidenav-header" }, exportAs: ["esnSidenavHeader"], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSidenavHeader, decorators: [{
            type: Component,
            args: [{
                    selector: 'esn-sidenav-header',
                    exportAs: 'esnSidenavHeader',
                    template: `<ng-content></ng-content>`,
                    host: { 'class': 'esn-sidenav-header' }
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1jb250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LWNvbnRlbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYtYnV0dG9uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUWpELE1BQU0sT0FBTyxnQkFBZ0I7SUFJM0I7UUFEUyw0QkFBdUIsR0FBK0MsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDbEYsQ0FBQzs7OEdBSkosZ0JBQWdCO2tHQUFoQixnQkFBZ0IsMExDUjdCLHlUQVNBOzRGRERhLGdCQUFnQjtrQkFMNUIsU0FBUzsrQkFDRSxvQkFBb0IsWUFDcEIsa0JBQWtCOzBFQUluQixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLHVCQUF1QjtzQkFBL0IsS0FBSzs7QUFhUixNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLGdCQUFjLENBQUM7OzhHQURKLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLDBJQUxqQjs7U0FFSDs0RkFHSSxnQkFBZ0I7a0JBUjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFOztTQUVIO29CQUNQLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBQztpQkFDdEM7O0FBWUQsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixnQkFBYyxDQUFDOzsrR0FESixpQkFBaUI7bUdBQWpCLGlCQUFpQiw2SUFIbEIsMkJBQTJCOzRGQUcxQixpQkFBaUI7a0JBTjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFDO2lCQUN2Qzs7QUFZRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLGdCQUFjLENBQUM7OzhHQURKLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLDBJQUhqQiwyQkFBMkI7NEZBRzFCLGdCQUFnQjtrQkFONUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUM7aUJBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IElzQWN0aXZlTWF0Y2hPcHRpb25zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tc2lkZW5hdi1idXR0b24nLFxyXG4gIGV4cG9ydEFzOiAnZXNuU2lkZW5hdkJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGVuYXYtYnV0dG9uLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuU2lkZW5hdkJ1dHRvbiB7XHJcbiAgQElucHV0KCkgbGluazogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZT86IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcm91dGVyTGlua0FjdGl2ZU9wdGlvbnM6IHsgZXhhY3Q6IGJvb2xlYW47IH0gfCBJc0FjdGl2ZU1hdGNoT3B0aW9ucyA9IHsgZXhhY3Q6IGZhbHNlIH07XHJcbiAgY29uc3RydWN0b3IoKXt9XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1zaWRlbmF2LWZvb3RlcicsXHJcbiAgZXhwb3J0QXM6ICdlc25TaWRlbmF2Rm9vdGVyJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJlc24tc2lkZW5hdi1mb290ZXItaW5uZXJcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2Rpdj5gLFxyXG4gIGhvc3Q6IHsnY2xhc3MnOiAnZXNuLXNpZGVuYXYtZm9vdGVyJ31cclxufSlcclxuZXhwb3J0IGNsYXNzIEVzblNpZGVuYXZGb290ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCl7fVxyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tc2lkZW5hdi1zZWN0aW9uJyxcclxuICBleHBvcnRBczogJ2VzblNpZGVuYXZTZWN0aW9uJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIGhvc3Q6IHsnY2xhc3MnOiAnZXNuLXNpZGVuYXYtc2VjdGlvbid9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25TaWRlbmF2U2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoKXt9XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1zaWRlbmF2LWhlYWRlcicsXHJcbiAgZXhwb3J0QXM6ICdlc25TaWRlbmF2SGVhZGVyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIGhvc3Q6IHsnY2xhc3MnOiAnZXNuLXNpZGVuYXYtaGVhZGVyJ31cclxufSlcclxuZXhwb3J0IGNsYXNzIEVzblNpZGVuYXZIZWFkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCl7fVxyXG59IiwiPGVzbi1idXR0b24gXHJcbiAgICBjbGFzcz1cImVzbi1zaWRlbmF2LWJ1dHRvblwiIFxyXG4gICAgW3JvdXRlckxpbmtdPVwibGlua1wiXHJcbiAgICByb3V0ZXJMaW5rQWN0aXZlPVwiZXNuLXNpZGVuYXYtYnV0dG9uLS1hY3RpdmVcIlxyXG4gICAgW25nQ2xhc3NdPVwieydlc24tc2lkZW5hdi1idXR0b24tLWFjdGl2ZSc6IGFjdGl2ZX1cIlxyXG4gICAgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cInJvdXRlckxpbmtBY3RpdmVPcHRpb25zXCJcclxuPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9lc24tYnV0dG9uPlxyXG4iXX0=