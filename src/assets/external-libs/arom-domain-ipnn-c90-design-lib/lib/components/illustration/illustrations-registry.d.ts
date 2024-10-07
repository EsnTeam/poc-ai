import { EsnIllustrationObj } from './illustrations';
import * as i0 from "@angular/core";
export declare class EsnIllustrationsRegistry {
    private registry;
    registerIllustrations(illustrations: EsnIllustrationObj[]): void;
    getIllustration(name: string): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnIllustrationsRegistry, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EsnIllustrationsRegistry>;
}
