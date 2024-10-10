import { inject, Injectable } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import {
  ErrorTranslator,
  JsonFormsI18nState,
  Translator,
} from '@jsonforms/core';
import type { UISchemaElement } from '@jsonforms/core/src/models';
// import { CLIState, LanguageState } from '@shared/store/store.model';
// import { StoreService } from '@shared/store/store.service';
import type { ErrorObject } from 'ajv';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class I18nJsonFormsService extends JsonFormsControl {
  // readonly #storeService = inject(StoreService);
  #currentDefaultLang = 'fr';

  constructor(
    protected override readonly jsonFormsService: JsonFormsAngularService
  ) {
    super(jsonFormsService);

    // this.#storeService.select$((state: CLIState) => state?.language, (languageState: LanguageState) => languageState.value)
    //   .pipe(
    //     tap((lang: string) => this.#currentDefaultLang = lang)
    //   )
    //   .subscribe();
  }

  getI18n(i18nSchema: any, locale = this.#defaultLocale): JsonFormsI18nState {
    return {
      locale: locale,
      translate: this.#getTranslate(i18nSchema, locale),
      translateError: this.#getTranslateError(locale),
    };
  }

  getLanguages(i18nSchema: any): { key: string; label?: string }[] {
    return Object.keys(i18nSchema).map((key: string) => ({
      key,
      label: this.#i18nLanguages.find((l) => l.key === key)?.label,
    }));
  }

  getVerboseError(error: any, locale = this.#currentDefaultLang): string {
    if (((this.#i18nErrors as any)?.[locale] as any)?.[error?.keyword]) {
      return (this.#i18nErrors as any)?.[locale]?.[error?.keyword](error);
    }

    return error.message;
  }

  #getTranslate(i18nSchema: any, locale = this.#defaultLocale): Translator {
    const dictionary = i18nSchema?.[locale];

    return ((id: string, defaultMessage: string, values?: any): string => {
      const path: string[] = id.split('.');
      const translatedMessage: string = path.reduce(
        (currentObject: any, key: string): string => (currentObject || {})[key],
        dictionary
      );

      return translatedMessage || defaultMessage;
    }) as Translator;
  }

  #getTranslateError(locale: string = this.#defaultLocale): ErrorTranslator {
    return (
      error: ErrorObject,
      translate: Translator,
      uiSchema?: UISchemaElement
    ): string => {
      return this.getVerboseError(error, locale);
    };
  }

  readonly #defaultLocale = 'fr';

  readonly #i18nLanguages = [
    { key: 'fr', label: 'France' },
    { key: 'en', label: 'Royaume-Uni' },
    { key: 'es', label: 'Espagne' },
    { key: 'de', label: 'Allemagne' },
    { key: 'it', label: 'Italie' },
    { key: 'zh', label: 'Chine' },
    { key: 'ja', label: 'Japon' },
    { key: 'ar', label: 'Égypte' },
    { key: 'ru', label: 'Fédération De Russie' },
  ];

  readonly #i18nErrors = {
    // French
    fr: {
      required: (error: ErrorObject): string =>
        `Ce champ est obligatoire (${error.params['missingProperty']}).`,
      maximum: (error: ErrorObject): string =>
        `Maximum attendu : ${error.params['limit']} (actuellemnt ${error.data}/${error.params['limit']}).`,
      minimum: (error: ErrorObject): string =>
        `Minimum attendu : ${error.params['limit']} (actuellemnt ${error.data}/${error.params['limit']}).`,
      maxLength: (error: ErrorObject): string =>
        `${error.params['limit']} caractères maximum (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      minLength: (error: ErrorObject): string =>
        `${error.params['limit']} caractères minimum (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      pattern: (error: ErrorObject): string =>
        `Format invalide (attendu: ${error.params['pattern']}).`,
      type: (error: ErrorObject): string =>
        `Format invalide (attendu: ${error.params['type']}).`,
    },
    // English
    en: {
      required: (error: ErrorObject): string =>
        `Required field (${error.params['missingProperty']})`,
      maximum: (error: ErrorObject): string =>
        `Maximum attendu : ${error.params['limit']} (actuellemnt ${error.data}/${error.params['limit']}).`,
      maxLength: (error: ErrorObject): string =>
        `${error.params['limit']} characters maximum (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      minLength: (error: ErrorObject): string =>
        `${error.params['limit']} characters minimum (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      pattern: (error: ErrorObject): string =>
        `Invalid format (expected: ${error.params['pattern']}).`,
      type: (error: ErrorObject): string =>
        `Invalid format (expected: ${error.params['type']}).`,
    },
    // Spanish
    es: {
      required: (error: ErrorObject): string =>
        `Campo requerido (${error.params['missingProperty']})`,
      maximum: (error: ErrorObject): string =>
        `Máximo esperado: ${error.params['limit']} (actualmente ${error.data}/${error.params['limit']}).`,
      minimum: (error: ErrorObject): string =>
        `Mínimo esperado: ${error.params['limit']} (actualmente ${error.data}/${error.params['limit']}).`,
      maxLength: (error: ErrorObject): string =>
        `${error.params['limit']} caracteres máximo (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      minLength: (error: ErrorObject): string =>
        `${error.params['limit']} caracteres mínimo (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      pattern: (error: ErrorObject): string =>
        `Formato inválido (esperado: ${error.params['pattern']}).`,
      type: (error: ErrorObject): string =>
        `Formato inválido (esperado: ${error.params['type']}).`,
    },
    // German
    de: {
      required: (error: ErrorObject): string =>
        `Erforderliches Feld (${error.params['missingProperty']})`,
      maximum: (error: ErrorObject): string =>
        `Erwartetes Maximum: ${error.params['limit']} (aktuell ${error.data}/${error.params['limit']}).`,
      minimum: (error: ErrorObject): string =>
        `Erwartetes Minimum: ${error.params['limit']} (aktuell ${error.data}/${error.params['limit']}).`,
      maxLength: (error: ErrorObject): string =>
        `${error.params['limit']} Zeichen maximal (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      minLength: (error: ErrorObject): string =>
        `${error.params['limit']} Zeichen minimum (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      pattern: (error: ErrorObject): string =>
        `Ungültiges Format (erwartet: ${error.params['pattern']}).`,
      type: (error: ErrorObject): string =>
        `Ungültiges Format (erwartet: ${error.params['type']}).`,
    },
    // Italy
    it: {
      required: (error: ErrorObject): string =>
        `Campo obbligatorio (${error.params['missingProperty']})`,
      maximum: (error: ErrorObject): string =>
        `Massimo atteso: ${error.params['limit']} (attualmente ${error.data}/${error.params['limit']}).`,
      minimum: (error: ErrorObject): string =>
        `Minimo atteso: ${error.params['limit']} (attualmente ${error.data}/${error.params['limit']}).`,
      maxLength: (error: ErrorObject): string =>
        `Massimo ${error.params['limit']} caratteri (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      minLength: (error: ErrorObject): string =>
        `Minimo ${error.params['limit']} caratteri (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      pattern: (error: ErrorObject): string =>
        `Formato non valido (previsto: ${error.params['pattern']}).`,
      type: (error: ErrorObject): string =>
        `Formato non valido (previsto: ${error.params['type']}).`,
    },
    // Chinese
    zh: {
      required: (error: ErrorObject): string =>
        `必填字段 (${error.params['missingProperty']})`,
      maximum: (error: ErrorObject): string =>
        `预期最大值：${error.params['limit']}（当前为 ${error.data}/${error.params['limit']}）。`,
      minimum: (error: ErrorObject): string =>
        `预期最小值：${error.params['limit']}（当前为 ${error.data}/${error.params['limit']}）。`,
      maxLength: (error: ErrorObject): string =>
        `最多 ${error.params['limit']} 个字符（${
          (error.data as string)?.length
        }/${error.params['limit']}）.`,
      minLength: (error: ErrorObject): string =>
        `最少 ${error.params['limit']} 个字符（${
          (error.data as string)?.length
        }/${error.params['limit']}）.`,
      pattern: (error: ErrorObject): string =>
        `无效格式（期望: ${error.params['pattern']}）.`,
      type: (error: ErrorObject): string =>
        `无效格式（期望: ${error.params['type']}）。`,
    },
    // Japanese
    ja: {
      required: (error: ErrorObject): string =>
        `必須フィールド (${error.params['missingProperty']})`,
      maximum: (error: ErrorObject): string =>
        `期待される最大値: ${error.params['limit']}（現在 ${error.data}/${error.params['limit']}）。`,
      minimum: (error: ErrorObject): string =>
        `期待される最小値: ${error.params['limit']}（現在 ${error.data}/${error.params['limit']}）。`,
      maxLength: (error: ErrorObject): string =>
        `最大 ${error.params['limit']} 文字 (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      minLength: (error: ErrorObject): string =>
        `最小 ${error.params['limit']} 文字 (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      pattern: (error: ErrorObject): string =>
        `無効な形式（期待: ${error.params['pattern']}）.`,
      type: (error: ErrorObject): string =>
        `無効な形式（期待: ${error.params['type']}）。`,
    },
    // Arab
    ar: {
      required: (error: ErrorObject): string =>
        `الحقل مطلوب (${error.params['missingProperty']})`,
      maximum: (error: ErrorObject): string =>
        `الحد الأقصى المتوقع: ${error.params['limit']} (الحالي ${error.data}/${error.params['limit']}).`,
      minimum: (error: ErrorObject): string =>
        `الحد الأدنى المتوقع: ${error.params['limit']} (الحالي ${error.data}/${error.params['limit']}).`,
      maxLength: (error: ErrorObject): string =>
        `الحد الأقصى ${error.params['limit']} حرف (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      minLength: (error: ErrorObject): string =>
        `الحد الأدنى ${error.params['limit']} حرف (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      pattern: (error: ErrorObject): string =>
        `التنسيق غير صالح (المتوقع: ${error.params['pattern']}).`,
      type: (error: ErrorObject): string =>
        `التنسيق غير صالح (المتوقع: ${error.params['type']}).`,
    },
    // Russian
    ru: {
      required: (error: ErrorObject): string =>
        `Обязательное поле (${error.params['missingProperty']})`,
      maximum: (error: ErrorObject): string =>
        `Ожидаемое максимальное значение: ${error.params['limit']} (текущее ${error.data}/${error.params['limit']}).`,
      minimum: (error: ErrorObject): string =>
        `Ожидаемое минимальное значение: ${error.params['limit']} (текущее ${error.data}/${error.params['limit']}).`,
      maxLength: (error: ErrorObject): string =>
        `Максимум ${error.params['limit']} символов (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      minLength: (error: ErrorObject): string =>
        `Минимум ${error.params['limit']} символов (${
          (error.data as string)?.length
        }/${error.params['limit']}).`,
      pattern: (error: ErrorObject): string =>
        `Недопустимый формат (ожидается: ${error.params['pattern']}).`,
      type: (error: ErrorObject): string =>
        `Неверный формат (ожидаемый: ${error.params['type']}).`,
    },
  };
}
