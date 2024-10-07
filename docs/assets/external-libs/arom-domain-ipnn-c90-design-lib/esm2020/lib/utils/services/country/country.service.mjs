import { Injectable } from '@angular/core';
import countriesJson from '../../../assets/iso-3166_country_french.json';
import * as i0 from "@angular/core";
export class CountryService {
    constructor() {
        this.countries = Object.values(countriesJson);
        this.countriesNameCode = new Map(Object.entries(countriesJson).map(([key, value]) => [value, key.toLowerCase()]));
    }
    getCountryCode(countryName) {
        return this.countriesNameCode.get(countryName);
    }
    getCountriesList() {
        return this.countries.sort((a, b) => a.localeCompare(b));
    }
    searchCountry(query, highlight) {
        let tmp_countries = [...this.countries].sort((a, b) => a.localeCompare(b));
        console.log({ highlight });
        if (!!highlight) {
            tmp_countries = [highlight, ...this.countries.filter(c => c !== highlight)];
        }
        return tmp_countries.filter(c => c.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()));
    }
}
CountryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CountryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CountryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CountryService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CountryService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXJvbS1kb21haW4taXBubi1jOTAtZGVzaWduLWxpYi9zcmMvbGliL3V0aWxzL3NlcnZpY2VzL2NvdW50cnkvY291bnRyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxhQUFhLE1BQU0sOENBQThDLENBQUM7O0FBR3pFLE1BQU0sT0FBTyxjQUFjO0lBRDNCO1FBRW1CLGNBQVMsR0FBYSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELHNCQUFpQixHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQWtCL0g7SUFoQkMsY0FBYyxDQUFDLFdBQW1CO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWEsRUFBRSxTQUFpQjtRQUM1QyxJQUFJLGFBQWEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQTtRQUN4QixJQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDZCxhQUFhLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQzdFO1FBQ0QsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs0R0FuQlUsY0FBYztnSEFBZCxjQUFjOzRGQUFkLGNBQWM7a0JBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBjb3VudHJpZXNKc29uIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pc28tMzE2Nl9jb3VudHJ5X2ZyZW5jaC5qc29uJzsgIFxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ291bnRyeVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY291bnRyaWVzOiBzdHJpbmdbXSA9IE9iamVjdC52YWx1ZXMoY291bnRyaWVzSnNvbik7IFxyXG4gIHByaXZhdGUgcmVhZG9ubHkgY291bnRyaWVzTmFtZUNvZGUgPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKGNvdW50cmllc0pzb24pLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBbdmFsdWUsIGtleS50b0xvd2VyQ2FzZSgpXSkpO1xyXG5cclxuICBnZXRDb3VudHJ5Q29kZShjb3VudHJ5TmFtZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLmNvdW50cmllc05hbWVDb2RlLmdldChjb3VudHJ5TmFtZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENvdW50cmllc0xpc3QoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY291bnRyaWVzLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSk7XHJcbiAgfVxyXG4gIFxyXG4gIHNlYXJjaENvdW50cnkocXVlcnk6IHN0cmluZywgaGlnaGxpZ2h0OiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICBsZXQgdG1wX2NvdW50cmllcyA9IFsuLi50aGlzLmNvdW50cmllc10uc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKTtcclxuICAgIGNvbnNvbGUubG9nKHtoaWdobGlnaHR9KVxyXG4gICAgaWYoISFoaWdobGlnaHQpIHtcclxuICAgICAgdG1wX2NvdW50cmllcyA9IFtoaWdobGlnaHQsIC4uLnRoaXMuY291bnRyaWVzLmZpbHRlcihjID0+IGMgIT09IGhpZ2hsaWdodCldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRtcF9jb3VudHJpZXMuZmlsdGVyKGMgPT4gYy50b0xvY2FsZUxvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgocXVlcnkudG9Mb2NhbGVMb3dlckNhc2UoKSkpO1xyXG4gIH1cclxufVxyXG4iXX0=