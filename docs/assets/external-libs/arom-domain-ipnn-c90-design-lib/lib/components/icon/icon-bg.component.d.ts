import * as i0 from "@angular/core";
export declare type EsnIconBgShape = 'circle' | 'square' | 'rings' | undefined;
export declare type EsnIconBgType = 'flat' | 'stroked' | 'mono' | 'duo' | 'basic' | undefined;
export declare type EsnIconBgShade = 'lighter' | 'darker' | undefined;
export declare type EsnIconBgColor = 'primary' | 'accent' | 'info' | 'warning' | 'success' | 'error' | 'neutral' | 'purple' | undefined;
export declare class EsnIconBg {
    shape: EsnIconBgShape;
    type: EsnIconBgType;
    color: EsnIconBgColor;
    shade: EsnIconBgShade;
    rings: boolean;
    theme: 'always-dark' | 'always-light' | null;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnIconBg, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnIconBg, "esn-icon-bg", never, { "shape": "shape"; "type": "type"; "color": "color"; "shade": "shade"; "rings": "rings"; "theme": "theme"; }, {}, never, ["*"], false, never>;
}
