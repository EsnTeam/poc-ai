import { OnChanges, SimpleChanges } from '@angular/core';
import { CountryService } from '../../utils/services/country/country.service';
import * as i0 from "@angular/core";
export declare class EsnFlagComponent implements OnChanges {
    private countryService;
    shape: 'square' | 'circle' | 'rectangle';
    size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    country: string;
    countriesList: string[];
    countryCode: string | undefined;
    constructor(countryService: CountryService);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EsnFlagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EsnFlagComponent, "esn-flag", never, { "shape": "shape"; "size": "size"; "country": "country"; }, {}, never, never, false, never>;
}
