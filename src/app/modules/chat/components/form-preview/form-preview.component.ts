import { Component, Input, SimpleChanges } from '@angular/core';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { JsonFormsI18nState, createAjv } from '@jsonforms/core';
import { I18nJsonFormsService } from 'src/app/core/services/i18n-json-forms.service';
import { ESN_RENDERER } from 'src/app/modules/shared/renderers/custom-renderer.constant';
import { jsonSchema } from 'src/assets/data/jsonSchema';
import { uiSchema } from 'src/assets/data/uiSchema';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss'],
})
export class FormPreviewComponent {
  constructor(public i18nService: I18nJsonFormsService) {}
  public renderers = ESN_RENDERER;
  @Input() schema: any; //= jsonSchema;
  @Input() uischema: any; // = uiSchema;
  @Input() i18n: any;
  @Input() locale: string = 'fr';
  public hide: boolean = false;
  public i18nConf: JsonFormsI18nState;

  public validation: string = 'ValidateAndShow';
  public ajv = createAjv({
    schemaId: 'id',
    allErrors: true,
    useDefaults: true,
  });

  ngOnChanges(changes: SimpleChanges) {
    if (changes['locale']) {
      console.log('Changes !!');
      this.hide = true;
      this.i18nConf = this.i18nService.getI18n(this.i18n, this.locale);
      setTimeout(() => (this.hide = false));
    }
  }
}
