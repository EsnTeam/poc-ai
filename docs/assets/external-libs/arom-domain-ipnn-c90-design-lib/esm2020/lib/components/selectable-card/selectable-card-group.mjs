import { Component, ContentChildren, Input, } from '@angular/core';
import { EsnSelectableCard } from './selectable-card/selectable-card';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EsnUtils } from '../../utils/utils/utils';
import * as i0 from "@angular/core";
export class EsnSelectableCardGroup {
    constructor() {
        this.multiple = false;
        this.radioBtnMode = false;
        this.onChange = () => { };
        this.onTouch = () => { };
        this.subs = new Subscription();
        this.contentInitialized = false;
        this.multi = false;
    }
    ngOnChanges(changes) {
        if (!!changes['multiple']) {
            this.multi = !!this.multiple || this.multiple === '';
        }
        if (!!changes['radioBtnMode']) {
            this.cards?.forEach((card) => {
                card.radioBtnModeByCardGroup = this.radioBtnMode;
            });
        }
    }
    ngAfterContentInit() {
        this.contentInitialized = true;
        this.cards.forEach((card) => {
            this._listenForCardSelectionChanges(card);
        });
        if (this.radioBtnMode != null) {
            this.cards.forEach((card) => {
                card.radioBtnModeByCardGroup = this.radioBtnMode;
            });
        }
    }
    async writeValue(val) {
        await this._waitUntilContentInit();
        this.value = this.multi ? val || [] : val;
        this.cards.forEach((card) => (card.selected = this.multi
            ? this.value.includes(card.value)
            : card.value === this.value));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(onTouched) {
        this.onTouch = onTouched;
    }
    async setDisabledState(isDisabled) {
        await this._waitUntilContentInit();
        this.cards.forEach((card) => (card.disabledByCardGroup = isDisabled));
    }
    _listenForCardSelectionChanges(card) {
        this.subs.add(card.selectionChange.subscribe((selected) => {
            let newValue;
            if (!this.multi) {
                newValue = selected ? card.value : null;
            }
            else if (selected) {
                newValue = [...this.value];
                newValue.push(card.value);
            }
            else {
                newValue = this.value.filter((val) => val !== card.value);
            }
            this.writeValue(newValue);
            this.onChange(newValue);
        }));
    }
    async _waitUntilContentInit() {
        while (!this.contentInitialized) {
            await EsnUtils.sleep(10);
        }
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
EsnSelectableCardGroup.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectableCardGroup, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnSelectableCardGroup.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnSelectableCardGroup, selector: "esn-selectable-card-group", inputs: { multiple: "multiple", radioBtnMode: "radioBtnMode" }, host: { classAttribute: "esn-selectable-card-group" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: EsnSelectableCardGroup,
            multi: true,
        },
    ], queries: [{ propertyName: "cards", predicate: EsnSelectableCard, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<ng-content></ng-content>", styles: [":host.esn-selectable-card{display:inline-flex;justify-content:space-around;flex-grow:1;padding:1rem;border-radius:10px;-webkit-user-select:none;user-select:none}:host.esn-selectable-card.esn-selectable-card--radio-mode{padding:2rem}:host.esn-selectable-card:not(.esn-selectable-card--disabled){cursor:pointer}:host.esn-selectable-card.esn-selectable-card--disabled{opacity:.7}:host.esn-selectable-card:not(:last-child){margin-right:1rem}:host.esn-selectable-card .esn-selectable-card__content{display:flex;flex-direction:column;align-items:center;justify-content:space-around}:host.esn-selectable-card .esn-selectable-card__content .esn-selectable-card__illustration{margin-bottom:12px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnSelectableCardGroup, decorators: [{
            type: Component,
            args: [{ selector: 'esn-selectable-card-group', host: {
                        class: 'esn-selectable-card-group',
                    }, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: EsnSelectableCardGroup,
                            multi: true,
                        },
                    ], template: "<ng-content></ng-content>", styles: [":host.esn-selectable-card{display:inline-flex;justify-content:space-around;flex-grow:1;padding:1rem;border-radius:10px;-webkit-user-select:none;user-select:none}:host.esn-selectable-card.esn-selectable-card--radio-mode{padding:2rem}:host.esn-selectable-card:not(.esn-selectable-card--disabled){cursor:pointer}:host.esn-selectable-card.esn-selectable-card--disabled{opacity:.7}:host.esn-selectable-card:not(:last-child){margin-right:1rem}:host.esn-selectable-card .esn-selectable-card__content{display:flex;flex-direction:column;align-items:center;justify-content:space-around}:host.esn-selectable-card .esn-selectable-card__content .esn-selectable-card__illustration{margin-bottom:12px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { multiple: [{
                type: Input
            }], radioBtnMode: [{
                type: Input
            }], cards: [{
                type: ContentChildren,
                args: [EsnSelectableCard, { descendants: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1jYXJkLWdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2VsZWN0YWJsZS1jYXJkL3NlbGVjdGFibGUtY2FyZC1ncm91cC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdGFibGUtY2FyZC9zZWxlY3RhYmxlLWNhcmQtZ3JvdXAuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEdBTU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQWlCbkQsTUFBTSxPQUFPLHNCQUFzQjtJQWdCakM7UUFiUyxhQUFRLEdBQXFCLEtBQUssQ0FBQztRQUNuQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQU12QyxhQUFRLEdBQVEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3pCLFlBQU8sR0FBUSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDeEIsU0FBSSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyxVQUFLLEdBQVksS0FBSyxDQUFDO0lBRVIsQ0FBQztJQUVoQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUM7U0FDdEQ7UUFFRCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQVE7UUFDdkIsTUFBTSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNQLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSztZQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQ2pDLENBQUM7SUFDSixDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsU0FBbUI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUVELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUN4QyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCw4QkFBOEIsQ0FBQyxJQUF1QjtRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDWCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzFDLElBQUksUUFBUSxDQUFDO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ3pDO2lCQUFNLElBQUksUUFBUSxFQUFFO2dCQUNuQixRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hFO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLHFCQUFxQjtRQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQy9CLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQixDQUFDOztvSEE1RlUsc0JBQXNCO3dHQUF0QixzQkFBc0IsMktBUnRCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLGdEQVFnQixpQkFBaUIscUVDckNwQywyQkFBeUI7NEZEK0JaLHNCQUFzQjtrQkFmbEMsU0FBUzsrQkFDRSwyQkFBMkIsUUFHL0I7d0JBQ0osS0FBSyxFQUFFLDJCQUEyQjtxQkFDbkMsYUFDVTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLHdCQUF3Qjs0QkFDbkMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7MEVBS1EsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUdOLEtBQUs7c0JBREosZUFBZTt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXNuU2VsZWN0YWJsZUNhcmQgfSBmcm9tICcuL3NlbGVjdGFibGUtY2FyZC9zZWxlY3RhYmxlLWNhcmQnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFc25VdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLXNlbGVjdGFibGUtY2FyZC1ncm91cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdGFibGUtY2FyZC1ncm91cC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3RhYmxlLWNhcmQuc2NzcyddLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnZXNuLXNlbGVjdGFibGUtY2FyZC1ncm91cCcsXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBFc25TZWxlY3RhYmxlQ2FyZEdyb3VwLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzblNlbGVjdGFibGVDYXJkR3JvdXBcclxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveVxyXG57XHJcbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW4gfCBzdHJpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSByYWRpb0J0bk1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihFc25TZWxlY3RhYmxlQ2FyZCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxyXG4gIGNhcmRzOiBRdWVyeUxpc3Q8RXNuU2VsZWN0YWJsZUNhcmQ+O1xyXG5cclxuICB2YWx1ZTogYW55O1xyXG4gIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7fTtcclxuICBvblRvdWNoOiBhbnkgPSAoKSA9PiB7fTtcclxuICBzdWJzOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgY29udGVudEluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbXVsdGk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoISFjaGFuZ2VzWydtdWx0aXBsZSddKSB7XHJcbiAgICAgIHRoaXMubXVsdGkgPSAhIXRoaXMubXVsdGlwbGUgfHwgdGhpcy5tdWx0aXBsZSA9PT0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEhY2hhbmdlc1sncmFkaW9CdG5Nb2RlJ10pIHtcclxuICAgICAgdGhpcy5jYXJkcz8uZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgICAgIGNhcmQucmFkaW9CdG5Nb2RlQnlDYXJkR3JvdXAgPSB0aGlzLnJhZGlvQnRuTW9kZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRlbnRJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgICAgdGhpcy5fbGlzdGVuRm9yQ2FyZFNlbGVjdGlvbkNoYW5nZXMoY2FyZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5yYWRpb0J0bk1vZGUgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgICAgICBjYXJkLnJhZGlvQnRuTW9kZUJ5Q2FyZEdyb3VwID0gdGhpcy5yYWRpb0J0bk1vZGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgd3JpdGVWYWx1ZSh2YWw6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgYXdhaXQgdGhpcy5fd2FpdFVudGlsQ29udGVudEluaXQoKTtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm11bHRpID8gdmFsIHx8IFtdIDogdmFsO1xyXG4gICAgdGhpcy5jYXJkcy5mb3JFYWNoKFxyXG4gICAgICAoY2FyZCkgPT5cclxuICAgICAgICAoY2FyZC5zZWxlY3RlZCA9IHRoaXMubXVsdGlcclxuICAgICAgICAgID8gdGhpcy52YWx1ZS5pbmNsdWRlcyhjYXJkLnZhbHVlKVxyXG4gICAgICAgICAgOiBjYXJkLnZhbHVlID09PSB0aGlzLnZhbHVlKVxyXG4gICAgKTtcclxuICB9XHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChvblRvdWNoZWQ6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLm9uVG91Y2ggPSBvblRvdWNoZWQ7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGF3YWl0IHRoaXMuX3dhaXRVbnRpbENvbnRlbnRJbml0KCk7XHJcbiAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IChjYXJkLmRpc2FibGVkQnlDYXJkR3JvdXAgPSBpc0Rpc2FibGVkKSk7XHJcbiAgfVxyXG5cclxuICBfbGlzdGVuRm9yQ2FyZFNlbGVjdGlvbkNoYW5nZXMoY2FyZDogRXNuU2VsZWN0YWJsZUNhcmQpIHtcclxuICAgIHRoaXMuc3Vicy5hZGQoXHJcbiAgICAgIGNhcmQuc2VsZWN0aW9uQ2hhbmdlLnN1YnNjcmliZSgoc2VsZWN0ZWQpID0+IHtcclxuICAgICAgICBsZXQgbmV3VmFsdWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpKSB7XHJcbiAgICAgICAgICBuZXdWYWx1ZSA9IHNlbGVjdGVkID8gY2FyZC52YWx1ZSA6IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICAgICAgbmV3VmFsdWUgPSBbLi4udGhpcy52YWx1ZV07XHJcbiAgICAgICAgICBuZXdWYWx1ZS5wdXNoKGNhcmQudmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMudmFsdWUuZmlsdGVyKCh2YWw6IGFueSkgPT4gdmFsICE9PSBjYXJkLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53cml0ZVZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBfd2FpdFVudGlsQ29udGVudEluaXQoKSB7XHJcbiAgICB3aGlsZSAoIXRoaXMuY29udGVudEluaXRpYWxpemVkKSB7XHJcbiAgICAgIGF3YWl0IEVzblV0aWxzLnNsZWVwKDEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD4iXX0=