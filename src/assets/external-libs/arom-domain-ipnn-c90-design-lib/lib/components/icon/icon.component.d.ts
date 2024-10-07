import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { EsnIconsRegistry } from './icons-registry';
import * as i0 from "@angular/core";
export declare class EsnIcon implements OnChanges {
    element: ElementRef;
    iconsRegistry: EsnIconsRegistry;
    document: any;
    name: string;
    boxed: boolean;
    size: 'xs' | 'sm' | 'md';
    _svgIcon: SVGElement;
    constructor(element: ElementRef, iconsRegistry: EsnIconsRegistry, document: any);
    ngOnChanges(changes: SimpleChanges): void;
    _svgElementFromString(svgContent: string): SVGElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnIcon, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnIcon, "esn-icon", never, { "name": "name"; "boxed": "boxed"; "size": "size"; }, {}, never, ["*"], false, never>;
}
