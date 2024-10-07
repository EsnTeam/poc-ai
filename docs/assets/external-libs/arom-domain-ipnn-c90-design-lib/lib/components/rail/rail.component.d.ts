import { EsnIconName } from "../icon/icons";
import * as i0 from "@angular/core";
export interface RailIconConfig {
    name: EsnIconName;
    tooltip?: string;
    onClick: Function;
}
export declare class EsnRail {
    logoSrc: string;
    activeIndex: number;
    iconsConfig: RailIconConfig[];
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnRail, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnRail, "esn-rail", never, { "logoSrc": "logoSrc"; "activeIndex": "activeIndex"; "iconsConfig": "iconsConfig"; }, {}, never, ["[bottom-content]"], false, never>;
}
