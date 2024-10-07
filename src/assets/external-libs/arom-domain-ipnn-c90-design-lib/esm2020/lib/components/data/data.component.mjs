import { Component, Directive, ViewEncapsulation, ContentChild, ElementRef, Input, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/observers";
/*****************/
/* DATA AVATAR
/*****************/
export class EsnDataAvatar {
}
EsnDataAvatar.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataAvatar, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EsnDataAvatar.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnDataAvatar, selector: "[esn-data-avatar], [esnDataAvatar]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataAvatar, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esn-data-avatar], [esnDataAvatar]',
                }]
        }] });
/*****************/
/* DATA TITLE
/*****************/
export class EsnDataTitle {
}
EsnDataTitle.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataTitle, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EsnDataTitle.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnDataTitle, selector: "[esn-data-title], [esnDataTitle]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataTitle, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esn-data-title], [esnDataTitle]',
                }]
        }] });
/*****************/
/* DATA INFO
/*****************/
export class EsnDataInfo {
}
EsnDataInfo.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataInfo, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EsnDataInfo.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnDataInfo, selector: "[esn-data-info], [esnDataInfo]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataInfo, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esn-data-info], [esnDataInfo]',
                }]
        }] });
/*****************/
/* DATA ACTIONS
/*****************/
export class EsnDataActions {
}
EsnDataActions.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataActions, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EsnDataActions.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: EsnDataActions, selector: "[esn-data-actions], [esnDataActions]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataActions, decorators: [{
            type: Directive,
            args: [{
                    selector: '[esn-data-actions], [esnDataActions]',
                }]
        }] });
/*****************/
/* DATA HEADER
/*****************/
export class EsnDataHeader {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.breakOnMobile = 'info';
    }
    adjustIfNeeded() {
        //if (this._isTitleWrapped()) return;
        this.adjustHorizontalAlignment();
        //this.adjustInfoLeftPosition();
    }
    adjustHorizontalAlignment() {
        if (this.el.nativeElement.clientHeight > 80) {
            this.addTopAlignment();
        }
        else {
            this.removeTopAlignment();
        }
        // if (!this.title) return;
        // const titleHeight: number = this.title.nativeElement.clientHeight;
        // const maxHeight: number = 48;
        // if (titleHeight > maxHeight) {
        //   this.addTopAlignment();
        // } else {
        //   this.removeTopAlignment();
        // }
    }
    addTopAlignment() {
        this.el.nativeElement.classList.add('esn-data__header--aligned-top');
    }
    removeTopAlignment() {
        this.el.nativeElement.classList.remove('esn-data__header--aligned-top');
    }
}
EsnDataHeader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataHeader, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
EsnDataHeader.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnDataHeader, selector: "esn-data-header", inputs: { breakOnMobile: "breakOnMobile" }, host: { properties: { "class.break-title": "breakOnMobile === 'title'", "class.break-info": "breakOnMobile === 'info'", "class.break-both": "breakOnMobile === 'both'" }, classAttribute: "esn-data__header" }, queries: [{ propertyName: "avatar", first: true, predicate: EsnDataAvatar, descendants: true, read: ElementRef }, { propertyName: "title", first: true, predicate: EsnDataTitle, descendants: true, read: ElementRef }, { propertyName: "info", first: true, predicate: EsnDataInfo, descendants: true, read: ElementRef }], ngImport: i0, template: "<!-- <ng-content select=\"[esn-data-avatar], [esnDataAvatar]\"></ng-content>\r\n<ng-content select=\"[esn-data-title], [esnDataTitle]\"></ng-content>\r\n<ng-content select=\"[esn-data-info], [esnDataInfo]\"></ng-content>\r\n<ng-content select=\"[esn-data-actions], [esnDataActions]\"></ng-content> -->\r\n\r\n<div class=\"esn-data__avatar\">\r\n  <ng-content select=\"[esn-data-avatar], [esnDataAvatar]\"></ng-content>\r\n</div>\r\n<div class=\"esn-data__title\">\r\n  <ng-content select=\"[esn-data-title], [esnDataTitle]\"></ng-content>\r\n</div>\r\n<div class=\"esn-data__info\">\r\n  <ng-content select=\"[esn-data-info], [esnDataInfo]\"></ng-content>\r\n</div>\r\n<div class=\"esn-data__actions\">\r\n  <ng-content select=\"[esn-data-actions], [esnDataActions]\"></ng-content>\r\n</div>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataHeader, decorators: [{
            type: Component,
            args: [{ selector: 'esn-data-header', host: {
                        class: 'esn-data__header',
                        '[class.break-title]': `breakOnMobile === 'title'`,
                        '[class.break-info]': `breakOnMobile === 'info'`,
                        '[class.break-both]': `breakOnMobile === 'both'`,
                    }, template: "<!-- <ng-content select=\"[esn-data-avatar], [esnDataAvatar]\"></ng-content>\r\n<ng-content select=\"[esn-data-title], [esnDataTitle]\"></ng-content>\r\n<ng-content select=\"[esn-data-info], [esnDataInfo]\"></ng-content>\r\n<ng-content select=\"[esn-data-actions], [esnDataActions]\"></ng-content> -->\r\n\r\n<div class=\"esn-data__avatar\">\r\n  <ng-content select=\"[esn-data-avatar], [esnDataAvatar]\"></ng-content>\r\n</div>\r\n<div class=\"esn-data__title\">\r\n  <ng-content select=\"[esn-data-title], [esnDataTitle]\"></ng-content>\r\n</div>\r\n<div class=\"esn-data__info\">\r\n  <ng-content select=\"[esn-data-info], [esnDataInfo]\"></ng-content>\r\n</div>\r\n<div class=\"esn-data__actions\">\r\n  <ng-content select=\"[esn-data-actions], [esnDataActions]\"></ng-content>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { breakOnMobile: [{
                type: Input
            }], avatar: [{
                type: ContentChild,
                args: [EsnDataAvatar, { read: ElementRef }]
            }], title: [{
                type: ContentChild,
                args: [EsnDataTitle, { read: ElementRef }]
            }], info: [{
                type: ContentChild,
                args: [EsnDataInfo, { read: ElementRef }]
            }] } });
/*****************/
/* DATA BODY
/*****************/
export class EsnDataBody {
    constructor() { }
}
EsnDataBody.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataBody, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnDataBody.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnDataBody, selector: "esn-data-body", ngImport: i0, template: "" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataBody, decorators: [{
            type: Component,
            args: [{ selector: 'esn-data-body', template: "" }]
        }], ctorParameters: function () { return []; } });
/*****************/
/* DATA STRUCTURE
/*****************/
export class EsnDataStructure {
    constructor(el) {
        this.el = el;
    }
    ngAfterContentInit() {
        this.handleResponsiveness();
    }
    onContentChange() {
        this.handleStructure();
    }
    handleResponsiveness() {
        this.resizeObserver = new ResizeObserver(() => {
            this.handleStructure();
        });
        this.resizeObserver.observe(this.el.nativeElement.querySelector('.esn-data__structure'));
    }
    handleStructure() {
        // TO CONSIDER : align header content top if :
        // a) There's a body, and
        // b) Title has more than one child
        if (this.header)
            this.header.adjustIfNeeded();
    }
    ngOnDestroy() {
        this.resizeObserver.disconnect();
    }
}
EsnDataStructure.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataStructure, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
EsnDataStructure.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnDataStructure, selector: "esn-data-structure", queries: [{ propertyName: "header", first: true, predicate: EsnDataHeader, descendants: true }, { propertyName: "body", first: true, predicate: EsnDataBody, descendants: true }], ngImport: i0, template: "<div class=\"esn-data__structure\" (cdkObserveContent)=\"onContentChange()\">\r\n    <ng-content></ng-content>\r\n</div>", styles: [".esn-data__structure{display:block;container-type:inline-size;container-name:datastructure}.esn-data__header{background:white;display:grid;align-items:center;grid-template-columns:minmax(auto,auto) 1fr auto minmax(auto,auto);grid-template-rows:repeat(3,minmax(auto,auto));padding:1rem 1.5rem}.esn-data__header--aligned-top{align-items:start}.esn-data__avatar:not(:empty){margin-right:1rem}.esn-data__title{overflow-wrap:break-word;word-wrap:break-word;hyphens:auto}.esn-data__title:not(:empty){margin-right:1rem}.esn-data__info{grid-column:3/4;text-align:right}.esn-data__actions{grid-column:4/-1}.esn-data__actions:not(:empty){margin-left:1rem}@container datastructure (max-width: 600px){.esn-data__header.break-info .esn-data__info:not(:empty),.esn-data__header.break-title .esn-data__title:not(:empty),.esn-data__header.break-both .esn-data__title:not(:empty),.esn-data__header.break-both .esn-data__info:not(:empty){margin-top:1rem;text-align:left}.esn-data__header.break-info .esn-data__info{grid-row:2/-1;grid-column:2/-1}.esn-data__header.break-title .esn-data__title,.esn-data__header.break-both .esn-data__title{grid-row:2/3;grid-column:1/-1}.esn-data__header.break-both .esn-data__info{grid-row:3/-1;grid-column:1/-1}}\n"], dependencies: [{ kind: "directive", type: i1.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnDataStructure, decorators: [{
            type: Component,
            args: [{ selector: 'esn-data-structure', encapsulation: ViewEncapsulation.None, template: "<div class=\"esn-data__structure\" (cdkObserveContent)=\"onContentChange()\">\r\n    <ng-content></ng-content>\r\n</div>", styles: [".esn-data__structure{display:block;container-type:inline-size;container-name:datastructure}.esn-data__header{background:white;display:grid;align-items:center;grid-template-columns:minmax(auto,auto) 1fr auto minmax(auto,auto);grid-template-rows:repeat(3,minmax(auto,auto));padding:1rem 1.5rem}.esn-data__header--aligned-top{align-items:start}.esn-data__avatar:not(:empty){margin-right:1rem}.esn-data__title{overflow-wrap:break-word;word-wrap:break-word;hyphens:auto}.esn-data__title:not(:empty){margin-right:1rem}.esn-data__info{grid-column:3/4;text-align:right}.esn-data__actions{grid-column:4/-1}.esn-data__actions:not(:empty){margin-left:1rem}@container datastructure (max-width: 600px){.esn-data__header.break-info .esn-data__info:not(:empty),.esn-data__header.break-title .esn-data__title:not(:empty),.esn-data__header.break-both .esn-data__title:not(:empty),.esn-data__header.break-both .esn-data__info:not(:empty){margin-top:1rem;text-align:left}.esn-data__header.break-info .esn-data__info{grid-row:2/-1;grid-column:2/-1}.esn-data__header.break-title .esn-data__title,.esn-data__header.break-both .esn-data__title{grid-row:2/3;grid-column:1/-1}.esn-data__header.break-both .esn-data__info{grid-row:3/-1;grid-column:1/-1}}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { header: [{
                type: ContentChild,
                args: [EsnDataHeader]
            }], body: [{
                type: ContentChild,
                args: [EsnDataBody]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9kYXRhL2RhdGEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZGF0YS9kYXRhLWhlYWRlci5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZGF0YS9kYXRhLWJvZHkuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2RhdGEvZGF0YS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixZQUFZLEVBRVosVUFBVSxFQUVWLEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQzs7O0FBRXZCLG1CQUFtQjtBQUNuQjttQkFDbUI7QUFJbkIsTUFBTSxPQUFPLGFBQWE7OzJHQUFiLGFBQWE7K0ZBQWIsYUFBYTs0RkFBYixhQUFhO2tCQUh6QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQ0FBb0M7aUJBQy9DOztBQUdELG1CQUFtQjtBQUNuQjttQkFDbUI7QUFJbkIsTUFBTSxPQUFPLFlBQVk7OzBHQUFaLFlBQVk7OEZBQVosWUFBWTs0RkFBWixZQUFZO2tCQUh4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7aUJBQzdDOztBQUdELG1CQUFtQjtBQUNuQjttQkFDbUI7QUFJbkIsTUFBTSxPQUFPLFdBQVc7O3lHQUFYLFdBQVc7NkZBQVgsV0FBVzs0RkFBWCxXQUFXO2tCQUh2QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7aUJBQzNDOztBQUdELG1CQUFtQjtBQUNuQjttQkFDbUI7QUFJbkIsTUFBTSxPQUFPLGNBQWM7OzRHQUFkLGNBQWM7Z0dBQWQsY0FBYzs0RkFBZCxjQUFjO2tCQUgxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEOztBQUdELG1CQUFtQjtBQUNuQjttQkFDbUI7QUFXbkIsTUFBTSxPQUFPLGFBQWE7SUFNeEIsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTHRELGtCQUFhLEdBQWdELE1BQU0sQ0FBQztJQUtYLENBQUM7SUFFNUQsY0FBYztRQUNuQixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsZ0NBQWdDO0lBQ2xDLENBQUM7SUFFTSx5QkFBeUI7UUFDOUIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7UUFDRCwyQkFBMkI7UUFFM0IscUVBQXFFO1FBQ3JFLGdDQUFnQztRQUVoQyxpQ0FBaUM7UUFDakMsNEJBQTRCO1FBQzVCLFdBQVc7UUFDWCwrQkFBK0I7UUFDL0IsSUFBSTtJQUNOLENBQUM7SUFFTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU0sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUMxRSxDQUFDOzsyR0F0Q1UsYUFBYTsrRkFBYixhQUFhLHVWQUVWLGFBQWEsMkJBQVUsVUFBVSxxREFDakMsWUFBWSwyQkFBVSxVQUFVLG9EQUNoQyxXQUFXLDJCQUFVLFVBQVUsNkJDN0QvQyw2eEJBaUJBOzRGRHdDYSxhQUFhO2tCQVZ6QixTQUFTOytCQUNFLGlCQUFpQixRQUVyQjt3QkFDSixLQUFLLEVBQUUsa0JBQWtCO3dCQUN6QixxQkFBcUIsRUFBRSwyQkFBMkI7d0JBQ2xELG9CQUFvQixFQUFFLDBCQUEwQjt3QkFDaEQsb0JBQW9CLEVBQUUsMEJBQTBCO3FCQUNqRDt5SEFHUSxhQUFhO3NCQUFyQixLQUFLO2dCQUM2QyxNQUFNO3NCQUF4RCxZQUFZO3VCQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Z0JBQ0MsS0FBSztzQkFBdEQsWUFBWTt1QkFBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUNDLElBQUk7c0JBQXBELFlBQVk7dUJBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7QUFvRWpELG1CQUFtQjtBQUNuQjttQkFDbUI7QUFLbkIsTUFBTSxPQUFPLFdBQVc7SUFDdEIsZ0JBQWUsQ0FBQzs7eUdBREwsV0FBVzs2RkFBWCxXQUFXLHFERXhJeEIsRUFBQTs0RkZ3SWEsV0FBVztrQkFKdkIsU0FBUzsrQkFDRSxlQUFlOztBQU8zQixtQkFBbUI7QUFDbkI7bUJBQ21CO0FBT25CLE1BQU0sT0FBTyxnQkFBZ0I7SUFPM0IsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRyxDQUFDO0lBRXRDLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sZUFBZTtRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLG9CQUFvQjtRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLEdBQUcsRUFBRTtZQUM1QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQzVELENBQUM7SUFDSixDQUFDO0lBRU0sZUFBZTtRQUNwQiw4Q0FBOEM7UUFDOUMseUJBQXlCO1FBQ3pCLG1DQUFtQztRQUVuQyxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25DLENBQUM7OzhHQXBDVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQiw4RkFDYixhQUFhLHVFQUNiLFdBQVcsZ0RHdkozQiwwSEFFTTs0RkhtSk8sZ0JBQWdCO2tCQU41QixTQUFTOytCQUNFLG9CQUFvQixpQkFHZixpQkFBaUIsQ0FBQyxJQUFJO2lHQUdSLE1BQU07c0JBQWxDLFlBQVk7dUJBQUMsYUFBYTtnQkFDQSxJQUFJO3NCQUE5QixZQUFZO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBEaXJlY3RpdmUsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqL1xyXG4vKiBEQVRBIEFWQVRBUlxyXG4vKioqKioqKioqKioqKioqKiovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Vzbi1kYXRhLWF2YXRhcl0sIFtlc25EYXRhQXZhdGFyXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25EYXRhQXZhdGFyIHt9XHJcblxyXG4vKioqKioqKioqKioqKioqKiovXHJcbi8qIERBVEEgVElUTEVcclxuLyoqKioqKioqKioqKioqKioqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlc24tZGF0YS10aXRsZV0sIFtlc25EYXRhVGl0bGVdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVzbkRhdGFUaXRsZSB7fVxyXG5cclxuLyoqKioqKioqKioqKioqKioqL1xyXG4vKiBEQVRBIElORk9cclxuLyoqKioqKioqKioqKioqKioqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlc24tZGF0YS1pbmZvXSwgW2VzbkRhdGFJbmZvXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25EYXRhSW5mbyB7fVxyXG5cclxuLyoqKioqKioqKioqKioqKioqL1xyXG4vKiBEQVRBIEFDVElPTlNcclxuLyoqKioqKioqKioqKioqKioqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlc24tZGF0YS1hY3Rpb25zXSwgW2VzbkRhdGFBY3Rpb25zXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25EYXRhQWN0aW9ucyB7fVxyXG5cclxuLyoqKioqKioqKioqKioqKioqL1xyXG4vKiBEQVRBIEhFQURFUlxyXG4vKioqKioqKioqKioqKioqKiovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLWRhdGEtaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1oZWFkZXIuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdlc24tZGF0YV9faGVhZGVyJyxcclxuICAgICdbY2xhc3MuYnJlYWstdGl0bGVdJzogYGJyZWFrT25Nb2JpbGUgPT09ICd0aXRsZSdgLFxyXG4gICAgJ1tjbGFzcy5icmVhay1pbmZvXSc6IGBicmVha09uTW9iaWxlID09PSAnaW5mbydgLFxyXG4gICAgJ1tjbGFzcy5icmVhay1ib3RoXSc6IGBicmVha09uTW9iaWxlID09PSAnYm90aCdgLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25EYXRhSGVhZGVyIHtcclxuICBASW5wdXQoKSBicmVha09uTW9iaWxlOiAndGl0bGUnIHwgJ2luZm8nIHwgJ2JvdGgnIHwgJ25vbmUnIHwgc3RyaW5nID0gJ2luZm8nO1xyXG4gIEBDb250ZW50Q2hpbGQoRXNuRGF0YUF2YXRhciwgeyByZWFkOiBFbGVtZW50UmVmIH0pIGF2YXRhcjogRWxlbWVudFJlZjtcclxuICBAQ29udGVudENoaWxkKEVzbkRhdGFUaXRsZSwgeyByZWFkOiBFbGVtZW50UmVmIH0pIHRpdGxlOiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGQoRXNuRGF0YUluZm8sIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbmZvOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XHJcblxyXG4gIHB1YmxpYyBhZGp1c3RJZk5lZWRlZCgpOiB2b2lkIHtcclxuICAgIC8vaWYgKHRoaXMuX2lzVGl0bGVXcmFwcGVkKCkpIHJldHVybjtcclxuICAgIHRoaXMuYWRqdXN0SG9yaXpvbnRhbEFsaWdubWVudCgpO1xyXG4gICAgLy90aGlzLmFkanVzdEluZm9MZWZ0UG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGp1c3RIb3Jpem9udGFsQWxpZ25tZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgPiA4MCkge1xyXG4gICAgICB0aGlzLmFkZFRvcEFsaWdubWVudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVUb3BBbGlnbm1lbnQoKTtcclxuICAgIH1cclxuICAgIC8vIGlmICghdGhpcy50aXRsZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGNvbnN0IHRpdGxlSGVpZ2h0OiBudW1iZXIgPSB0aGlzLnRpdGxlLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgLy8gY29uc3QgbWF4SGVpZ2h0OiBudW1iZXIgPSA0ODtcclxuXHJcbiAgICAvLyBpZiAodGl0bGVIZWlnaHQgPiBtYXhIZWlnaHQpIHtcclxuICAgIC8vICAgdGhpcy5hZGRUb3BBbGlnbm1lbnQoKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIHRoaXMucmVtb3ZlVG9wQWxpZ25tZW50KCk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkVG9wQWxpZ25tZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Vzbi1kYXRhX19oZWFkZXItLWFsaWduZWQtdG9wJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlVG9wQWxpZ25tZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Vzbi1kYXRhX19oZWFkZXItLWFsaWduZWQtdG9wJyk7XHJcbiAgfVxyXG5cclxuICAvLyBwdWJsaWMgYWRqdXN0SW5mb0xlZnRQb3NpdGlvbigpOiB2b2lkIHtcclxuICAvLyAgIGlmICghdGhpcy5pbmZvIHx8ICF0aGlzLmF2YXRhciB8fCAhdGhpcy50aXRsZSkgcmV0dXJuO1xyXG5cclxuICAvLyAgIGNvbnN0IGhlYWRlcldpZHRoOiBudW1iZXIgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgLy8gICBjb25zdCB0aXRsZUxlZnRPZmZzZXQ6IG51bWJlciA9IHRoaXMudGl0bGUubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0O1xyXG4gIC8vICAgY29uc3QgaGVhZGVyUmlnaHRQYWRkaW5nOiBudW1iZXIgPSBwYXJzZUludChcclxuICAvLyAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5wYWRkaW5nUmlnaHRcclxuICAvLyAgICk7XHJcblxyXG4gIC8vICAgY29uc3QgaW5mb0xlZnRQb3NpdGlvbjogbnVtYmVyID1cclxuICAvLyAgICAgdGhpcy5faXNJbmZvV3JhcHBlZCgpICYmIHRpdGxlTGVmdE9mZnNldCA+IGhlYWRlclJpZ2h0UGFkZGluZ1xyXG4gIC8vICAgICAgID8gdGl0bGVMZWZ0T2Zmc2V0IC0gaGVhZGVyUmlnaHRQYWRkaW5nXHJcbiAgLy8gICAgICAgOiAwO1xyXG5cclxuICAvLyAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgLy8gICAgIHRoaXMuaW5mby5uYXRpdmVFbGVtZW50LFxyXG4gIC8vICAgICAnbGVmdCcsXHJcbiAgLy8gICAgIGluZm9MZWZ0UG9zaXRpb24gKyAncHgnXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gcHVibGljIF9pc1RpdGxlV3JhcHBlZCgpOiBib29sZWFuIHtcclxuICAvLyAgIGNvbnN0IG1heFBvc3NpYmxlVG9wUGFkZGluZzogbnVtYmVyID0gMjQ7XHJcbiAgLy8gICByZXR1cm4gdGhpcy50aXRsZS5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCA+IG1heFBvc3NpYmxlVG9wUGFkZGluZztcclxuICAvLyB9XHJcblxyXG4gIC8vIHB1YmxpYyBfaXNJbmZvV3JhcHBlZCgpOiBib29sZWFuIHtcclxuICAvLyAgIGNvbnN0IG1heFBvc3NpYmxlVG9wUGFkZGluZzogbnVtYmVyID0gNTY7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5pbmZvLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wID4gbWF4UG9zc2libGVUb3BQYWRkaW5nO1xyXG4gIC8vIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqL1xyXG4vKiBEQVRBIEJPRFlcclxuLyoqKioqKioqKioqKioqKioqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vzbi1kYXRhLWJvZHknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWJvZHkuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25EYXRhQm9keSB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKiovXHJcbi8qIERBVEEgU1RSVUNUVVJFXHJcbi8qKioqKioqKioqKioqKioqKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc24tZGF0YS1zdHJ1Y3R1cmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGEuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25EYXRhU3RydWN0dXJlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICBAQ29udGVudENoaWxkKEVzbkRhdGFIZWFkZXIpIGhlYWRlcjogRXNuRGF0YUhlYWRlcjtcclxuICBAQ29udGVudENoaWxkKEVzbkRhdGFCb2R5KSBib2R5OiBFc25EYXRhQm9keTtcclxuICAvL0BDb250ZW50Q2hpbGQoRXNuRGF0YUZvb3RlcikgZm9vdGVyOiBFc25EYXRhRm9vdGVyO1xyXG5cclxuICBwdWJsaWMgcmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZVJlc3BvbnNpdmVuZXNzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Db250ZW50Q2hhbmdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVTdHJ1Y3R1cmUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVSZXNwb25zaXZlbmVzcygpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLmhhbmRsZVN0cnVjdHVyZSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoXHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZXNuLWRhdGFfX3N0cnVjdHVyZScpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZVN0cnVjdHVyZSgpIHtcclxuICAgIC8vIFRPIENPTlNJREVSIDogYWxpZ24gaGVhZGVyIGNvbnRlbnQgdG9wIGlmIDpcclxuICAgIC8vIGEpIFRoZXJlJ3MgYSBib2R5LCBhbmRcclxuICAgIC8vIGIpIFRpdGxlIGhhcyBtb3JlIHRoYW4gb25lIGNoaWxkXHJcblxyXG4gICAgaWYgKHRoaXMuaGVhZGVyKSB0aGlzLmhlYWRlci5hZGp1c3RJZk5lZWRlZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG59XHJcbiIsIjwhLS0gPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Vzbi1kYXRhLWF2YXRhcl0sIFtlc25EYXRhQXZhdGFyXVwiPjwvbmctY29udGVudD5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Vzbi1kYXRhLXRpdGxlXSwgW2VzbkRhdGFUaXRsZV1cIj48L25nLWNvbnRlbnQ+XHJcbjxuZy1jb250ZW50IHNlbGVjdD1cIltlc24tZGF0YS1pbmZvXSwgW2VzbkRhdGFJbmZvXVwiPjwvbmctY29udGVudD5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Vzbi1kYXRhLWFjdGlvbnNdLCBbZXNuRGF0YUFjdGlvbnNdXCI+PC9uZy1jb250ZW50PiAtLT5cclxuXHJcbjxkaXYgY2xhc3M9XCJlc24tZGF0YV9fYXZhdGFyXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Vzbi1kYXRhLWF2YXRhcl0sIFtlc25EYXRhQXZhdGFyXVwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJlc24tZGF0YV9fdGl0bGVcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbZXNuLWRhdGEtdGl0bGVdLCBbZXNuRGF0YVRpdGxlXVwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJlc24tZGF0YV9faW5mb1wiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltlc24tZGF0YS1pbmZvXSwgW2VzbkRhdGFJbmZvXVwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJlc24tZGF0YV9fYWN0aW9uc1wiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltlc24tZGF0YS1hY3Rpb25zXSwgW2VzbkRhdGFBY3Rpb25zXVwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiIsIiIsIjxkaXYgY2xhc3M9XCJlc24tZGF0YV9fc3RydWN0dXJlXCIgKGNka09ic2VydmVDb250ZW50KT1cIm9uQ29udGVudENoYW5nZSgpXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PiJdfQ==