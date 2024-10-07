import { Component, ContentChild, Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../icon/icon.component";
export class EsnSelectableCardText {
}
EsnSelectableCardText.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectableCardText, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EsnSelectableCardText.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnSelectableCardText, selector: "[esn-selectable-card-text], [esnSelectableCardText]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectableCardText, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esn-selectable-card-text], [esnSelectableCardText]',
                }]
        }] });
export class EsnSelectableCardIllustration {
}
EsnSelectableCardIllustration.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectableCardIllustration, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EsnSelectableCardIllustration.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnSelectableCardIllustration, selector: "[esn-selectable-card-illustration], [esnSelectableCardIllustration]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectableCardIllustration, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esn-selectable-card-illustration], [esnSelectableCardIllustration]',
                }]
        }] });
export class EsnSelectableCard {
    constructor() {
        this.selected = false;
        this.disabled = false;
        this.disabledByCardGroup = false;
        this.radioBtnModeByCardGroup = false;
        this.selectionChange = new EventEmitter();
    }
    onClick() {
        if (this.disabled || this.disabledByCardGroup) {
            return;
        }
        this.selected = !this.selected;
        this.selectionChange.emit(this.selected);
    }
}
EsnSelectableCard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectableCard, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnSelectableCard.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnSelectableCard, selector: "esn-selectable-card", inputs: { selected: "selected", disabled: "disabled", disabledByCardGroup: "disabledByCardGroup", value: "value", radioBtnModeByCardGroup: "radioBtnModeByCardGroup" }, outputs: { selectionChange: "selectionChange" }, host: { listeners: { "click": "onClick()" }, properties: { "class.esn-selectable-card--selected": "selected", "class.esn-selectable-card--disabled": "disabled || disabledByCardGroup", "class.esn-selectable-card--radio-mode": "radioBtnModeByCardGroup" }, classAttribute: "esn-selectable-card" }, queries: [{ propertyName: "cardText", first: true, predicate: EsnSelectableCardText, descendants: true }, { propertyName: "cardIllustration", first: true, predicate: EsnSelectableCardIllustration, descendants: true }], ngImport: i0, template: "<div class=\"esn-selectable-card__content\">\r\n  <div *ngIf=\"radioBtnModeByCardGroup\" class=\"esn-selectable-card__dot\">\r\n    <esn-icon *ngIf=\"selected\" name=\"check-circle-fill\"></esn-icon>\r\n  </div>\r\n  <div class=\"esn-selectable-card__illustration\" *ngIf=\"!!cardIllustration\">\r\n    <ng-content\r\n      select=\"[esn-selectable-card-illustration], [esnSelectableCardIllustration]\"\r\n    ></ng-content>\r\n  </div>\r\n  <div class=\"esn-selectable-card__text\">\r\n    <ng-content *ngIf=\"!cardText && !cardIllustration\"></ng-content>\r\n    <ng-content\r\n      select=\"[esn-selectable-card-text], [esnSelectableCardText]\"\r\n    ></ng-content>\r\n  </div>\r\n</div>\r\n", styles: [":host.esn-selectable-card{display:inline-flex;justify-content:space-around;flex-grow:1;padding:1rem;border-radius:10px;-webkit-user-select:none;user-select:none}:host.esn-selectable-card.esn-selectable-card--radio-mode{padding:2rem}:host.esn-selectable-card:not(.esn-selectable-card--disabled){cursor:pointer}:host.esn-selectable-card.esn-selectable-card--disabled{opacity:.7}:host.esn-selectable-card:not(:last-child){margin-right:1rem}:host.esn-selectable-card .esn-selectable-card__content{display:flex;flex-direction:column;align-items:center;justify-content:space-around}:host.esn-selectable-card .esn-selectable-card__content .esn-selectable-card__illustration{margin-bottom:12px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.EsnIcon, selector: "esn-icon", inputs: ["name", "boxed", "size"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectableCard, decorators: [{
            type: Component,
            args: [{ selector: 'esn-selectable-card', host: {
                        class: 'esn-selectable-card',
                        '[class.esn-selectable-card--selected]': `selected`,
                        '[class.esn-selectable-card--disabled]': `disabled || disabledByCardGroup`,
                        '[class.esn-selectable-card--radio-mode]': `radioBtnModeByCardGroup`,
                    }, template: "<div class=\"esn-selectable-card__content\">\r\n  <div *ngIf=\"radioBtnModeByCardGroup\" class=\"esn-selectable-card__dot\">\r\n    <esn-icon *ngIf=\"selected\" name=\"check-circle-fill\"></esn-icon>\r\n  </div>\r\n  <div class=\"esn-selectable-card__illustration\" *ngIf=\"!!cardIllustration\">\r\n    <ng-content\r\n      select=\"[esn-selectable-card-illustration], [esnSelectableCardIllustration]\"\r\n    ></ng-content>\r\n  </div>\r\n  <div class=\"esn-selectable-card__text\">\r\n    <ng-content *ngIf=\"!cardText && !cardIllustration\"></ng-content>\r\n    <ng-content\r\n      select=\"[esn-selectable-card-text], [esnSelectableCardText]\"\r\n    ></ng-content>\r\n  </div>\r\n</div>\r\n", styles: [":host.esn-selectable-card{display:inline-flex;justify-content:space-around;flex-grow:1;padding:1rem;border-radius:10px;-webkit-user-select:none;user-select:none}:host.esn-selectable-card.esn-selectable-card--radio-mode{padding:2rem}:host.esn-selectable-card:not(.esn-selectable-card--disabled){cursor:pointer}:host.esn-selectable-card.esn-selectable-card--disabled{opacity:.7}:host.esn-selectable-card:not(:last-child){margin-right:1rem}:host.esn-selectable-card .esn-selectable-card__content{display:flex;flex-direction:column;align-items:center;justify-content:space-around}:host.esn-selectable-card .esn-selectable-card__content .esn-selectable-card__illustration{margin-bottom:12px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { selected: [{
                type: Input
            }], disabled: [{
                type: Input
            }], disabledByCardGroup: [{
                type: Input
            }], value: [{
                type: Input
            }], radioBtnModeByCardGroup: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }], cardText: [{
                type: ContentChild,
                args: [EsnSelectableCardText]
            }], cardIllustration: [{
                type: ContentChild,
                args: [EsnSelectableCardIllustration]
            }], onClick: [{
                type: HostListener,
                args: ["click"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1jYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2VsZWN0YWJsZS1jYXJkL3NlbGVjdGFibGUtY2FyZC9zZWxlY3RhYmxlLWNhcmQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9zZWxlY3RhYmxlLWNhcmQvc2VsZWN0YWJsZS1jYXJkL3NlbGVjdGFibGUtY2FyZC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTWhJLE1BQU0sT0FBTyxxQkFBcUI7O21IQUFyQixxQkFBcUI7dUdBQXJCLHFCQUFxQjs0RkFBckIscUJBQXFCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxREFBcUQ7aUJBQ2hFOztBQU1ELE1BQU0sT0FBTyw2QkFBNkI7OzJIQUE3Qiw2QkFBNkI7K0dBQTdCLDZCQUE2Qjs0RkFBN0IsNkJBQTZCO2tCQUh6QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxRUFBcUU7aUJBQ2hGOztBQWVELE1BQU0sT0FBTyxpQkFBaUI7SUFvQjVCO1FBbkJTLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFFckMsNEJBQXVCLEdBQVksS0FBSyxDQUFDO1FBR3hDLG9CQUFlLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFZaEUsQ0FBQztJQVBPLE9BQU87UUFDNUIsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBQztZQUMzQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDMUMsQ0FBQzs7K0dBbkJVLGlCQUFpQjttR0FBakIsaUJBQWlCLGltQkFVZCxxQkFBcUIsbUZBQ3JCLDZCQUE2QixnRENwQzdDLDByQkFnQkE7NEZEU2EsaUJBQWlCO2tCQVo3QixTQUFTOytCQUNFLHFCQUFxQixRQUd6Qjt3QkFDSixLQUFLLEVBQUUscUJBQXFCO3dCQUM1Qix1Q0FBdUMsRUFBRSxVQUFVO3dCQUNuRCx1Q0FBdUMsRUFBRSxpQ0FBaUM7d0JBQzFFLHlDQUF5QyxFQUFFLHlCQUF5QjtxQkFFckU7MEVBR1EsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csdUJBQXVCO3NCQUEvQixLQUFLO2dCQUdJLGVBQWU7c0JBQXhCLE1BQU07Z0JBRThCLFFBQVE7c0JBQTVDLFlBQVk7dUJBQUMscUJBQXFCO2dCQUNVLGdCQUFnQjtzQkFBNUQsWUFBWTt1QkFBQyw2QkFBNkI7Z0JBRXBCLE9BQU87c0JBQTdCLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZXNuLXNlbGVjdGFibGUtY2FyZC10ZXh0XSwgW2VzblNlbGVjdGFibGVDYXJkVGV4dF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuU2VsZWN0YWJsZUNhcmRUZXh0IHt9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlc24tc2VsZWN0YWJsZS1jYXJkLWlsbHVzdHJhdGlvbl0sIFtlc25TZWxlY3RhYmxlQ2FyZElsbHVzdHJhdGlvbl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXNuU2VsZWN0YWJsZUNhcmRJbGx1c3RyYXRpb24ge31cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLXNlbGVjdGFibGUtY2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdGFibGUtY2FyZC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi4vc2VsZWN0YWJsZS1jYXJkLnNjc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2Vzbi1zZWxlY3RhYmxlLWNhcmQnLFxyXG4gICAgJ1tjbGFzcy5lc24tc2VsZWN0YWJsZS1jYXJkLS1zZWxlY3RlZF0nOiBgc2VsZWN0ZWRgLFxyXG4gICAgJ1tjbGFzcy5lc24tc2VsZWN0YWJsZS1jYXJkLS1kaXNhYmxlZF0nOiBgZGlzYWJsZWQgfHwgZGlzYWJsZWRCeUNhcmRHcm91cGAsXHJcbiAgICAnW2NsYXNzLmVzbi1zZWxlY3RhYmxlLWNhcmQtLXJhZGlvLW1vZGVdJzogYHJhZGlvQnRuTW9kZUJ5Q2FyZEdyb3VwYCxcclxuXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzblNlbGVjdGFibGVDYXJkIHtcclxuICBASW5wdXQoKSBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWRCeUNhcmRHcm91cDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHZhbHVlPzogYW55O1xyXG4gIEBJbnB1dCgpIHJhZGlvQnRuTW9kZUJ5Q2FyZEdyb3VwOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRXNuU2VsZWN0YWJsZUNhcmRUZXh0KSBjYXJkVGV4dDogRXNuU2VsZWN0YWJsZUNhcmRUZXh0O1xyXG4gIEBDb250ZW50Q2hpbGQoRXNuU2VsZWN0YWJsZUNhcmRJbGx1c3RyYXRpb24pIGNhcmRJbGx1c3RyYXRpb246IEVzblNlbGVjdGFibGVDYXJkSWxsdXN0cmF0aW9uO1xyXG5cclxuICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIikgb25DbGljaygpe1xyXG4gICAgaWYodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmRpc2FibGVkQnlDYXJkR3JvdXApe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWRcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZClcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZXNuLXNlbGVjdGFibGUtY2FyZF9fY29udGVudFwiPlxyXG4gIDxkaXYgKm5nSWY9XCJyYWRpb0J0bk1vZGVCeUNhcmRHcm91cFwiIGNsYXNzPVwiZXNuLXNlbGVjdGFibGUtY2FyZF9fZG90XCI+XHJcbiAgICA8ZXNuLWljb24gKm5nSWY9XCJzZWxlY3RlZFwiIG5hbWU9XCJjaGVjay1jaXJjbGUtZmlsbFwiPjwvZXNuLWljb24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImVzbi1zZWxlY3RhYmxlLWNhcmRfX2lsbHVzdHJhdGlvblwiICpuZ0lmPVwiISFjYXJkSWxsdXN0cmF0aW9uXCI+XHJcbiAgICA8bmctY29udGVudFxyXG4gICAgICBzZWxlY3Q9XCJbZXNuLXNlbGVjdGFibGUtY2FyZC1pbGx1c3RyYXRpb25dLCBbZXNuU2VsZWN0YWJsZUNhcmRJbGx1c3RyYXRpb25dXCJcclxuICAgID48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImVzbi1zZWxlY3RhYmxlLWNhcmRfX3RleHRcIj5cclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIWNhcmRUZXh0ICYmICFjYXJkSWxsdXN0cmF0aW9uXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPG5nLWNvbnRlbnRcclxuICAgICAgc2VsZWN0PVwiW2Vzbi1zZWxlY3RhYmxlLWNhcmQtdGV4dF0sIFtlc25TZWxlY3RhYmxlQ2FyZFRleHRdXCJcclxuICAgID48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=