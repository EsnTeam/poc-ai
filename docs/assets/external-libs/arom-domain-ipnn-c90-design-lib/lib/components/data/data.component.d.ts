import { AfterContentInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/*****************/
export declare class EsnDataAvatar {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDataAvatar, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnDataAvatar, "[esn-data-avatar], [esnDataAvatar]", never, {}, {}, never, never, false, never>;
}
/*****************/
export declare class EsnDataTitle {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDataTitle, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnDataTitle, "[esn-data-title], [esnDataTitle]", never, {}, {}, never, never, false, never>;
}
/*****************/
export declare class EsnDataInfo {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDataInfo, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnDataInfo, "[esn-data-info], [esnDataInfo]", never, {}, {}, never, never, false, never>;
}
/*****************/
export declare class EsnDataActions {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDataActions, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnDataActions, "[esn-data-actions], [esnDataActions]", never, {}, {}, never, never, false, never>;
}
/*****************/
export declare class EsnDataHeader {
    private el;
    private renderer;
    breakOnMobile: 'title' | 'info' | 'both' | 'none' | string;
    avatar: ElementRef;
    title: ElementRef;
    info: ElementRef;
    constructor(el: ElementRef, renderer: Renderer2);
    adjustIfNeeded(): void;
    adjustHorizontalAlignment(): void;
    addTopAlignment(): void;
    removeTopAlignment(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDataHeader, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnDataHeader, "esn-data-header", never, { "breakOnMobile": "breakOnMobile"; }, {}, ["avatar", "title", "info"], ["[esn-data-avatar], [esnDataAvatar]", "[esn-data-title], [esnDataTitle]", "[esn-data-info], [esnDataInfo]", "[esn-data-actions], [esnDataActions]"], false, never>;
}
/*****************/
export declare class EsnDataBody {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDataBody, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnDataBody, "esn-data-body", never, {}, {}, never, never, false, never>;
}
/*****************/
export declare class EsnDataStructure implements AfterContentInit, OnDestroy {
    private el;
    header: EsnDataHeader;
    body: EsnDataBody;
    resizeObserver: ResizeObserver;
    constructor(el: ElementRef);
    ngAfterContentInit(): void;
    onContentChange(): void;
    handleResponsiveness(): void;
    handleStructure(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnDataStructure, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnDataStructure, "esn-data-structure", never, {}, {}, ["header", "body"], ["*"], false, never>;
}
