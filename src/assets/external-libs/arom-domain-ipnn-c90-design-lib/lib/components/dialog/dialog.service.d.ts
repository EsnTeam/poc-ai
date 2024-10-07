import { ComponentType, Overlay, OverlayContainer } from '@angular/cdk/overlay';
import { Injector, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogContainer, _MatDialogBase } from '@angular/material/dialog';
import { EsnDialogRef } from './dialogRef';
import { EsnDialogConfig } from './model';
import { ResponsiveService } from '../../utils/services/responsive/public-api';
import * as i0 from "@angular/core";
export declare const ESN_DIALOG_DATA: import("@angular/core").InjectionToken<any>;
export declare const ESN_DIALOG_DEFAULT_OPTIONS: import("@angular/core").InjectionToken<MatDialogConfig<any>>;
export declare const ESN_DIALOG_SCROLL_STRATEGY: import("@angular/core").InjectionToken<() => import("@angular/cdk/overlay").ScrollStrategy>;
export declare class EsnDialog extends _MatDialogBase<MatDialogContainer> {
    private responsiveService;
    isMobile$: import("rxjs").BehaviorSubject<boolean>;
    constructor(responsiveService: ResponsiveService, overlay: Overlay, injector: Injector, location: Location, defaultOptions: MatDialogConfig, scrollStrategy: any, parentDialog: MatDialog, overlayContainer: OverlayContainer, animationMode?: 'NoopAnimations' | 'BrowserAnimations');
    open<T, D = any, R = any>(component: ComponentType<T>, config?: EsnDialogConfig<D>): EsnDialogRef<T, R>;
    open<T, D = any, R = any>(template: TemplateRef<T>, config?: EsnDialogConfig<D>): EsnDialogRef<T, R>;
    open<T, D = any, R = any>(template: ComponentType<T> | TemplateRef<T>, config?: EsnDialogConfig<D>): EsnDialogRef<T, R>;
    setFullScreen(matConfig: EsnDialogConfig<any>, panelClasses: string | string[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDialog, [null, null, null, { optional: true; }, { optional: true; }, null, { optional: true; skipSelf: true; }, null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnDialog>;
}
