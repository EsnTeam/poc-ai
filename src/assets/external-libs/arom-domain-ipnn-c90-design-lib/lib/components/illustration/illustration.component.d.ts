import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { EsnIllustrationsRegistry } from './illustrations-registry';
import { EsnIllustrationName } from './illustrations';
import * as i0 from "@angular/core";
export declare class EsnIllustration implements OnChanges {
    element: ElementRef;
    illustrationsRegistry: EsnIllustrationsRegistry;
    document: any;
    name: EsnIllustrationName;
    boxed: boolean;
    size: 'xs' | 'sm' | 'md';
    _svgIllustration: SVGElement;
    constructor(element: ElementRef, illustrationsRegistry: EsnIllustrationsRegistry, document: any);
    ngOnChanges(changes: SimpleChanges): void;
    _svgElementFromString(svgContent: string): SVGElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnIllustration, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnIllustration, "esn-illustration", never, { "name": "name"; "boxed": "boxed"; "size": "size"; }, {}, never, ["*"], false, never>;
}
