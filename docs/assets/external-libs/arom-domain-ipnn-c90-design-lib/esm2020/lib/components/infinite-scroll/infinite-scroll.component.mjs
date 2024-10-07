import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { BehaviorSubject, Subscription, debounceTime, distinct, fromEvent, merge, } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../loader/loader.component";
export class EsnInfiniteScroll {
    constructor() {
        this.pageSize = 20;
        // We'll want to display the spinner with the async-content-wrapper component
        // most of the time
        this.showLoaderOnRefresh = false;
        this.elmsUpdated = new EventEmitter();
        this.elements = [];
        this.nbPageLoaded = 0;
        this.isLoading = true;
        this.subscriptions = new Subscription();
        this.manualTrigger$ = new BehaviorSubject(null);
    }
    ngOnInit() {
        if (!!this.refreshElementsSubject) {
            this.subscriptions.add(this.refreshElementsSubject.pipe(debounceTime(200)).subscribe(() => {
                this.refreshElements();
            }));
        }
    }
    ngOnChanges(changes) {
        if (changes['scrollElement'] && !!this.scrollElement) {
            this.handleScroll();
        }
    }
    async refreshElements() {
        this.nbPageLoaded = 0;
        this.elements.length = 0;
        await this.loadNextPage(true);
        setTimeout(() => this.manualTrigger$.next(null));
    }
    async loadNextPage(force = false) {
        if (this.isLoading && !force) {
            return;
        }
        this.isLoading = true;
        const nbPageLoadedBefore = this.nbPageLoaded;
        const newElms = await this.callFunc(this.nbPageLoaded, this.pageSize);
        if (this.nbPageLoaded === nbPageLoadedBefore) {
            this.nbPageLoaded = this.nbPageLoaded + 1;
            console.log({ newElms });
            if (!!newElms) {
                this.elements.push(...newElms);
            }
            this.elmsUpdated.emit(this.elements);
            this.isLoading = false;
        }
    }
    handleScroll() {
        const scrollArea = this.scrollElement;
        console.log(scrollArea);
        this.scroll$ = fromEvent(scrollArea, 'scroll').pipe(debounceTime(100), distinct());
        this.resize$ = fromEvent(window, 'resize').pipe(debounceTime(200), distinct());
        this.subscriptions.add(merge(this.scroll$, this.resize$, this.manualTrigger$).subscribe(() => {
            setTimeout(async () => {
                if (!!scrollArea.scrollHeight &&
                    scrollArea.scrollTop + scrollArea.offsetHeight >
                        scrollArea.scrollHeight - 25) {
                    if (!this.isLoading &&
                        this.totalNumberOfResults > this.elements.length) {
                        await this.loadNextPage();
                        setTimeout(() => this.manualTrigger$.next(null));
                    }
                }
            });
        }));
    }
}
EsnInfiniteScroll.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnInfiniteScroll, deps: [], target: i0.ɵɵFactoryTarget.Component });
EsnInfiniteScroll.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: EsnInfiniteScroll, selector: "esn-infinite-scroll", inputs: { callFunc: "callFunc", totalNumberOfResults: "totalNumberOfResults", scrollElement: "scrollElement", refreshElementsSubject: "refreshElementsSubject", pageSize: "pageSize", showLoaderOnRefresh: "showLoaderOnRefresh" }, outputs: { elmsUpdated: "elmsUpdated" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"paginated-scroll-container\">\r\n  <ng-content></ng-content>\r\n  <esn-loader *ngIf=\"isLoading && (showLoaderOnRefresh || !!elements.length)\" [centered]=\"true\"></esn-loader>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.EsnLoader, selector: "esn-loader", inputs: ["type", "centered", "size"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnInfiniteScroll, decorators: [{
            type: Component,
            args: [{ selector: 'esn-infinite-scroll', template: "<div class=\"paginated-scroll-container\">\r\n  <ng-content></ng-content>\r\n  <esn-loader *ngIf=\"isLoading && (showLoaderOnRefresh || !!elements.length)\" [centered]=\"true\"></esn-loader>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { callFunc: [{
                type: Input
            }], totalNumberOfResults: [{
                type: Input
            }], scrollElement: [{
                type: Input
            }], refreshElementsSubject: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], showLoaderOnRefresh: [{
                type: Input
            }], elmsUpdated: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2luZmluaXRlLXNjcm9sbC9pbmZpbml0ZS1zY3JvbGwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaW5maW5pdGUtc2Nyb2xsL2luZmluaXRlLXNjcm9sbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxlQUFlLEVBRWYsWUFBWSxFQUNaLFlBQVksRUFDWixRQUFRLEVBQ1IsU0FBUyxFQUNULEtBQUssR0FDTixNQUFNLE1BQU0sQ0FBQzs7OztBQU9kLE1BQU0sT0FBTyxpQkFBaUI7SUF3QjVCO1FBbEJTLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFL0IsNkVBQTZFO1FBQzdFLG1CQUFtQjtRQUNWLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUVwQyxnQkFBVyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBRWhFLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixrQkFBYSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2pELG1CQUFjLEdBQTBCLElBQUksZUFBZSxDQUNoRSxJQUFJLENBQ0wsQ0FBQztJQUVhLENBQUM7SUFFaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUNqQyxJ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QUMsSUFBSSxDQUFDLFNBQVM7d0JBQ2YsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUNoRDt3QkFDQSxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDMUIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQ2xEO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7K0dBbkdVLGlCQUFpQjttR0FBakIsaUJBQWlCLDZWQ3hCOUIsOE1BSUE7NEZEb0JhLGlCQUFpQjtrQkFMN0IsU0FBUzsrQkFDRSxxQkFBcUI7MEVBS3RCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csb0JBQW9CO3NCQUE1QixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBRUcsc0JBQXNCO3NCQUE5QixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBSUcsbUJBQW1CO3NCQUEzQixLQUFLO2dCQUVJLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBCZWhhdmlvclN1YmplY3QsXHJcbiAgT2JzZXJ2YWJsZSxcclxuICBTdWJzY3JpcHRpb24sXHJcbiAgZGVib3VuY2VUaW1lLFxyXG4gIGRpc3RpbmN0LFxyXG4gIGZyb21FdmVudCxcclxuICBtZXJnZSxcclxufSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNuLWluZmluaXRlLXNjcm9sbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2luZmluaXRlLXNjcm9sbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5maW5pdGUtc2Nyb2xsLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25JbmZpbml0ZVNjcm9sbCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBjYWxsRnVuYzogKHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcikgPT4gUHJvbWlzZTxhbnlbXT47XHJcbiAgQElucHV0KCkgdG90YWxOdW1iZXJPZlJlc3VsdHM6IG51bWJlcjtcclxuICBASW5wdXQoKSBzY3JvbGxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgQElucHV0KCkgcmVmcmVzaEVsZW1lbnRzU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PG51bGw+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplOiBudW1iZXIgPSAyMDtcclxuXHJcbiAgLy8gV2UnbGwgd2FudCB0byBkaXNwbGF5IHRoZSBzcGlubmVyIHdpdGggdGhlIGFzeW5jLWNvbnRlbnQtd3JhcHBlciBjb21wb25lbnRcclxuICAvLyBtb3N0IG9mIHRoZSB0aW1lXHJcbiAgQElucHV0KCkgc2hvd0xvYWRlck9uUmVmcmVzaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgZWxtc1VwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG5cclxuICBwdWJsaWMgZWxlbWVudHM6IGFueVtdID0gW107XHJcbiAgcHVibGljIG5iUGFnZUxvYWRlZDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gIHB1YmxpYyBzY3JvbGwkITogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHB1YmxpYyByZXNpemUkITogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHB1YmxpYyBtYW51YWxUcmlnZ2VyJDogQmVoYXZpb3JTdWJqZWN0PG51bGw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudWxsPihcclxuICAgIG51bGxcclxuICApO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCEhdGhpcy5yZWZyZXNoRWxlbWVudHNTdWJqZWN0KSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoRWxlbWVudHNTdWJqZWN0LnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlZnJlc2hFbGVtZW50cygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlc1snc2Nyb2xsRWxlbWVudCddICYmICEhdGhpcy5zY3JvbGxFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgcmVmcmVzaEVsZW1lbnRzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5uYlBhZ2VMb2FkZWQgPSAwO1xyXG4gICAgdGhpcy5lbGVtZW50cy5sZW5ndGggPSAwO1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkTmV4dFBhZ2UodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubWFudWFsVHJpZ2dlciQubmV4dChudWxsKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgbG9hZE5leHRQYWdlKGZvcmNlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0aGlzLmlzTG9hZGluZyAmJiAhZm9yY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgY29uc3QgbmJQYWdlTG9hZGVkQmVmb3JlID0gdGhpcy5uYlBhZ2VMb2FkZWQ7XHJcbiAgICBjb25zdCBuZXdFbG1zID0gYXdhaXQgdGhpcy5jYWxsRnVuYyh0aGlzLm5iUGFnZUxvYWRlZCwgdGhpcy5wYWdlU2l6ZSk7XHJcbiAgICBpZiAodGhpcy5uYlBhZ2VMb2FkZWQgPT09IG5iUGFnZUxvYWRlZEJlZm9yZSkge1xyXG4gICAgICB0aGlzLm5iUGFnZUxvYWRlZCA9IHRoaXMubmJQYWdlTG9hZGVkICsgMTtcclxuICAgICAgY29uc29sZS5sb2coeyBuZXdFbG1zIH0pO1xyXG4gICAgICBpZiAoISFuZXdFbG1zKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKC4uLm5ld0VsbXMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZWxtc1VwZGF0ZWQuZW1pdCh0aGlzLmVsZW1lbnRzKTtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVTY3JvbGwoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzY3JvbGxBcmVhID0gdGhpcy5zY3JvbGxFbGVtZW50O1xyXG4gICAgY29uc29sZS5sb2coc2Nyb2xsQXJlYSk7XHJcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQoc2Nyb2xsQXJlYSwgJ3Njcm9sbCcpLnBpcGUoXHJcbiAgICAgIGRlYm91bmNlVGltZSgxMDApLFxyXG4gICAgICBkaXN0aW5jdCgpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcclxuICAgICAgZGlzdGluY3QoKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxyXG4gICAgICBtZXJnZSh0aGlzLnNjcm9sbCQsIHRoaXMucmVzaXplJCwgdGhpcy5tYW51YWxUcmlnZ2VyJCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgISFzY3JvbGxBcmVhLnNjcm9sbEhlaWdodCAmJiBcclxuICAgICAgICAgICAgc2Nyb2xsQXJlYS5zY3JvbGxUb3AgKyBzY3JvbGxBcmVhLm9mZnNldEhlaWdodCA+XHJcbiAgICAgICAgICAgIHNjcm9sbEFyZWEuc2Nyb2xsSGVpZ2h0IC0gMjVcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgIXRoaXMuaXNMb2FkaW5nICYmXHJcbiAgICAgICAgICAgICAgdGhpcy50b3RhbE51bWJlck9mUmVzdWx0cyA+IHRoaXMuZWxlbWVudHMubGVuZ3RoXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZE5leHRQYWdlKCk7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm1hbnVhbFRyaWdnZXIkLm5leHQobnVsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicGFnaW5hdGVkLXNjcm9sbC1jb250YWluZXJcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPGVzbi1sb2FkZXIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgKHNob3dMb2FkZXJPblJlZnJlc2ggfHwgISFlbGVtZW50cy5sZW5ndGgpXCIgW2NlbnRlcmVkXT1cInRydWVcIj48L2Vzbi1sb2FkZXI+XHJcbjwvZGl2PlxyXG4iXX0=