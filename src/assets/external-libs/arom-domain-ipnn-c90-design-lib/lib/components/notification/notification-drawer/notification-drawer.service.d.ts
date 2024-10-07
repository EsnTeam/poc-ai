import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class EsnNotificationDrawerService {
    private overlay;
    isOpen$: BehaviorSubject<boolean>;
    markAllAsRead$: BehaviorSubject<boolean>;
    private overlayRef;
    constructor(overlay: Overlay);
    openDrawer(): void;
    closeDrawer(): void;
    toggleDrawer(): void;
    _createOverlay(): OverlayRef;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnNotificationDrawerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnNotificationDrawerService>;
}
