import * as i0 from "@angular/core";
export declare class CountryService {
    private readonly countries;
    private readonly countriesNameCode;
    getCountryCode(countryName: string): string | undefined;
    getCountriesList(): string[];
    searchCountry(query: string, highlight: string): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CountryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CountryService>;
}
