import { OnInit, OnChanges, ElementRef, SimpleChanges, AfterViewInit, Renderer2, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EsnDialog } from './dialog.service';
import { EsnDialogRef } from './dialogRef';
import * as i0 from "@angular/core";
export declare class EsnDialogClose implements OnInit, OnChanges {
    /**
     * Reference to the containing dialog.
     * @deprecated `dialogRef` property to become private.
     * @breaking-change 13.0.0
     */
    dialogRef: EsnDialogRef<any>;
    private _elementRef;
    private _dialog;
    /** Screen reader label for the button. */
    ariaLabel: string;
    /** Default to "button" to prevents accidental form submits. */
    /** Dialog close input. */
    dialogResult: any;
    _matDialogClose: any;
    constructor(
    /**
     * Reference to the containing dialog.
     * @deprecated `dialogRef` property to become private.
     * @breaking-change 13.0.0
     */
    dialogRef: EsnDialogRef<any>, _elementRef: ElementRef<HTMLElement>, _dialog: EsnDialog);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    _onButtonClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDialogClose, [{ optional: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnDialogClose, "[esn-dialog-close], [esnDialogClose]", ["esnDialogClose"], { "ariaLabel": "aria-label"; "dialogResult": "esn-dialog-close"; "_matDialogClose": "esnDialogClose"; }, {}, never, never, false, never>;
}
export declare class EsnDialogHeader implements OnInit {
    divider: boolean;
    color: "primary" | "accent" | "error" | "success" | "neutral" | "transparent";
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDialogHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnDialogHeader, "esn-dialog-header", ["esnDialogHeader"], { "divider": "divider"; "color": "color"; }, {}, never, ["*"], false, never>;
}
export declare class EsnDialogContent implements OnInit, AfterViewInit {
    elementRef: ElementRef;
    renderer: Renderer2;
    private zone;
    observer: ResizeObserver;
    dialogContainer: HTMLElement;
    isFullScreen: boolean;
    heightUpdateTrigger$: BehaviorSubject<any>;
    constructor(elementRef: ElementRef, renderer: Renderer2, zone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    _updateContentHeight(): void;
    _getHeaderAndFooterHeight(): any;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDialogContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnDialogContent, "esn-dialog-content", ["esnDialogContent"], {}, {}, never, ["*"], false, never>;
}
export declare class EsnDialogFooter implements AfterViewInit {
    elementRef: ElementRef;
    divider: boolean;
    align: 'right' | 'center' | 'space-between';
    nbButtons: number;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    onContentChange(): void;
    _countButtons(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDialogFooter, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnDialogFooter, "esn-dialog-footer", ["esnDialogFooter"], { "divider": "divider"; "align": "align"; }, {}, never, ["*"], false, never>;
}
