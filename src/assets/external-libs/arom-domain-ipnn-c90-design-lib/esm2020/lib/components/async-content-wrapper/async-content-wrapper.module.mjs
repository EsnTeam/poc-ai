import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EsnAsyncContentWrapper } from './async-content-wrapper.component';
import { EsnEmptyStateModule } from '../empty-state';
import { EsnErrorStateModule } from "../error-state/error-state.module";
import { EsnLoaderModule } from "../loader/loader.module";
import * as i0 from "@angular/core";
export class EsnAsyncContentWrapperModule {
}
EsnAsyncContentWrapperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncContentWrapperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EsnAsyncContentWrapperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncContentWrapperModule, declarations: [EsnAsyncContentWrapper], imports: [CommonModule,
        EsnErrorStateModule,
        EsnEmptyStateModule,
        MatProgressSpinnerModule,
        EsnLoaderModule], exports: [EsnAsyncContentWrapper] });
EsnAsyncContentWrapperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncContentWrapperModule, imports: [CommonModule,
        EsnErrorStateModule,
        EsnEmptyStateModule,
        MatProgressSpinnerModule,
        EsnLoaderModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnAsyncContentWrapperModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        EsnErrorStateModule,
                        EsnEmptyStateModule,
                        MatProgressSpinnerModule,
                        EsnLoaderModule,
                    ],
                    declarations: [EsnAsyncContentWrapper],
                    exports: [EsnAsyncContentWrapper],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtY29udGVudC13cmFwcGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fyb20tZG9tYWluLWlwbm4tYzkwLWRlc2lnbi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2FzeW5jLWNvbnRlbnQtd3JhcHBlci9hc3luYy1jb250ZW50LXdyYXBwZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7QUFheEQsTUFBTSxPQUFPLDRCQUE0Qjs7MEhBQTVCLDRCQUE0QjsySEFBNUIsNEJBQTRCLGlCQUh4QixzQkFBc0IsYUFObkMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsd0JBQXdCO1FBQ3hCLGVBQWUsYUFHUCxzQkFBc0I7MkhBRXJCLDRCQUE0QixZQVRyQyxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQix3QkFBd0I7UUFDeEIsZUFBZTs0RkFLTiw0QkFBNEI7a0JBWHhDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIsZUFBZTtxQkFDaEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xyXG5pbXBvcnQgeyBFc25Bc3luY0NvbnRlbnRXcmFwcGVyIH0gZnJvbSAnLi9hc3luYy1jb250ZW50LXdyYXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXNuRW1wdHlTdGF0ZU1vZHVsZSB9IGZyb20gJy4uL2VtcHR5LXN0YXRlJztcclxuaW1wb3J0IHtFc25FcnJvclN0YXRlTW9kdWxlfSBmcm9tIFwiLi4vZXJyb3Itc3RhdGUvZXJyb3Itc3RhdGUubW9kdWxlXCI7XHJcbmltcG9ydCB7RXNuTG9hZGVyTW9kdWxlfSBmcm9tIFwiLi4vbG9hZGVyL2xvYWRlci5tb2R1bGVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRXNuRXJyb3JTdGF0ZU1vZHVsZSxcclxuICAgIEVzbkVtcHR5U3RhdGVNb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXHJcbiAgICBFc25Mb2FkZXJNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtFc25Bc3luY0NvbnRlbnRXcmFwcGVyXSxcclxuICBleHBvcnRzOiBbRXNuQXN5bmNDb250ZW50V3JhcHBlcl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25Bc3luY0NvbnRlbnRXcmFwcGVyTW9kdWxlIHt9XHJcbiJdfQ==