import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import isoCountries from 'src/assets/external-libs/arom-domain-ipnn-c90-design-lib/esm2020/lib/assets/iso-3166_country_french.json';

export const LANGS = [
  { key: 'fr', label: 'Français', countryCode: 'fr' },
  { key: 'en', label: 'English', countryCode: 'gb' },
  { key: 'es', label: 'Espanol', countryCode: 'es' },
  { key: 'ru', label: 'Russia', countryCode: 'ru' },
  { key: 'es', label: 'Espagne' },
  { key: 'de', countryCode: 'de' },
  { key: 'it', countryCode: 'it' },
  { key: 'zh', countryCode: 'cn' },
  { key: 'ja', countryCode: 'jp' },
  { key: 'ar', countryCode: 'eg' },
];

@Component({
  selector: 'app-language-selector',
  templateUrl: 'language-selector.component.html',
  styleUrls: ['language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  // readonly #storeService = inject(StoreService);
  @Input() languages: string[];
  @Input() currentLanguage: string = 'fr';
  @Output() onLanguageSelected = new EventEmitter<string>();
  stateDropdown = false;

  public getCountryNameFromCode(code: string) {
    return Object.entries(isoCountries).find(
      ([key, val]) => key.toLocaleLowerCase() == code
    )?.[1]!;
  }

  public getCountryNameFromLanguageCode(languageCode: string) {
    return this.getCountryNameFromCode(
      LANGS.find((l) => l.key.toLocaleLowerCase() == languageCode)?.countryCode!
    );
  }

  ngOnInit() {
    // this.#storeService.select$((state) => state.language, (s) => s.value)
    //   .pipe(
    //     filter(globalLanguage => !!this.itemModel && !this.selectedLanguage && this.languages.some(l => l.key === globalLanguage)),
    //     tap((globalLanguage: string) => this.clickOnLanguage(this.itemModel, globalLanguage)),
    //     this.takeUntilDestroyed(),
    //   )
    //   .subscribe();
  }

  clickOnLanguage(languageKey: string): void {
    this.currentLanguage = languageKey;
    this.onLanguageSelected.emit(languageKey);
  }
}
