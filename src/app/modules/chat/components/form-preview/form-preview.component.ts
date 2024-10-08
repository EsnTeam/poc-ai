import { Component, Input } from '@angular/core';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { JsonFormsI18nState, createAjv } from '@jsonforms/core';
import { ESN_RENDERER } from 'src/app/modules/shared/renderers/custom-renderer.constant';
import { jsonSchema } from 'src/assets/data/jsonSchema';
import { uiSchema } from 'src/assets/data/uiSchema';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss'],
})
export class FormPreviewComponent {
  public renderers = ESN_RENDERER;
  @Input() schema: any; //= jsonSchema;
  @Input() uischema: any; // = uiSchema;
  public i18n: JsonFormsI18nState;
  public validation: string = 'ValidateAndShow';
  public ajv = createAjv({
    schemaId: 'id',
    allErrors: true,
    useDefaults: true,
  });
}
