import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class EsnSelectableCardText {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnSelectableCardText, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnSelectableCardText, "[esn-selectable-card-text], [esnSelectableCardText]", never, {}, {}, never, never, false, never>;
}
export declare class EsnSelectableCardIllustration {
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnSelectableCardIllustration, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EsnSelectableCardIllustration, "[esn-selectable-card-illustration], [esnSelectableCardIllustration]", never, {}, {}, never, never, false, never>;
}
export declare class EsnSelectableCard {
    selected: boolean;
    disabled: boolean;
    disabledByCardGroup: boolean;
    value?: any;
    radioBtnModeByCardGroup: boolean;
    selectionChange: EventEmitter<boolean>;
    cardText: EsnSelectableCardText;
    cardIllustration: EsnSelectableCardIllustration;
    onClick(): void;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnSelectableCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnSelectableCard, "esn-selectable-card", never, { "selected": "selected"; "disabled": "disabled"; "disabledByCardGroup": "disabledByCardGroup"; "value": "value"; "radioBtnModeByCardGroup": "radioBtnModeByCardGroup"; }, { "selectionChange": "selectionChange"; }, ["cardText", "cardIllustration"], ["[esn-selectable-card-illustration], [esnSelectableCardIllustration]", "*", "[esn-selectable-card-text], [esnSelectableCardText]"], false, never>;
}
