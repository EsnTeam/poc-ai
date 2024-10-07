import * as i0 from "@angular/core";
export declare type EsnBadgeSize = 'sm' | 'md' | 'lg' | undefined;
export declare type EsnBadgeType = 'flat' | 'stroked' | 'light' | undefined;
export declare type EsnBadgeShade = 'lighter' | 'darker' | undefined;
export declare type EsnBadgeColor = 'primary' | 'accent' | 'info' | 'warning' | 'success' | 'error' | 'neutral' | 'purple' | undefined;
export declare class EsnBadge {
    size: EsnBadgeSize;
    type: EsnBadgeType;
    color: EsnBadgeColor;
    shade: EsnBadgeShade;
    round: boolean;
    disabled: boolean;
    bicolor: boolean;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnBadge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnBadge, "esn-badge", never, { "size": "size"; "type": "type"; "color": "color"; "shade": "shade"; "round": "round"; "disabled": "disabled"; "bicolor": "bicolor"; }, {}, never, ["*"], false, never>;
}
