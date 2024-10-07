import { NgModule } from '@angular/core';
import { EsnBrowserErrorComponent } from './browser-error.component';
import { EsnIconsRegistry } from '../icon/icons-registry';
import { ErrorIcon } from '../icon/icons';
import { EsnIconModule } from '../icon/icon.module';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icons-registry";
export class EsnBrowserErrorModule {
    constructor(esnIconsRegistry) {
        this.esnIconsRegistry = esnIconsRegistry;
        this.esnIconsRegistry.registerIcons([ErrorIcon]);
    }
}
EsnBrowserErrorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnBrowserErrorModule, deps: [{ token: i1.EsnIconsRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
EsnBrowserErrorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: EsnBrowserErrorModule, declarations: [EsnBrowserErrorComponent], imports: [EsnIconModule], exports: [EsnBrowserErrorComponent] });
EsnBrowserErrorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnBrowserErrorModule, providers: [EsnIconsRegistry], imports: [EsnIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: EsnBrowserErrorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [EsnBrowserErrorComponent],
                    imports: [EsnIconModule],
                    providers: [EsnIconsRegistry],
                    exports: [EsnBrowserErrorComponent],
                }]
        }], ctorParameters: function () { return [{ type: i1.EsnIconsRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1lcnJvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcm9tLWRvbWFpbi1pcG5uLWM5MC1kZXNpZ24tbGliL3NyYy9saWIvY29tcG9uZW50cy9icm93c2VyLWVycm9yL2Jyb3dzZXItZXJyb3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQVFwRCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O21IQUhVLHFCQUFxQjtvSEFBckIscUJBQXFCLGlCQUxqQix3QkFBd0IsYUFDN0IsYUFBYSxhQUViLHdCQUF3QjtvSEFFdkIscUJBQXFCLGFBSHJCLENBQUMsZ0JBQWdCLENBQUMsWUFEbkIsYUFBYTs0RkFJWixxQkFBcUI7a0JBTmpDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDeEIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdCLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVzbkJyb3dzZXJFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vYnJvd3Nlci1lcnJvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFc25JY29uc1JlZ2lzdHJ5IH0gZnJvbSAnLi4vaWNvbi9pY29ucy1yZWdpc3RyeSc7XHJcbmltcG9ydCB7IENsb2NrSWNvbiwgRXJyb3JJY29uIH0gZnJvbSAnLi4vaWNvbi9pY29ucyc7XHJcbmltcG9ydCB7IEVzbkljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRXNuQnJvd3NlckVycm9yQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbRXNuSWNvbk1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbRXNuSWNvbnNSZWdpc3RyeV0sXHJcbiAgZXhwb3J0czogW0VzbkJyb3dzZXJFcnJvckNvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFc25Ccm93c2VyRXJyb3JNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXNuSWNvbnNSZWdpc3RyeTogRXNuSWNvbnNSZWdpc3RyeSkge1xyXG4gICAgdGhpcy5lc25JY29uc1JlZ2lzdHJ5LnJlZ2lzdGVySWNvbnMoW0Vycm9ySWNvbl0pO1xyXG4gIH1cclxufVxyXG4iXX0=