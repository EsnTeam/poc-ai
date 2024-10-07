import { Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';

@Component({
  selector: 'app-custom-input-string',
  template: `
    <esn-input-text
      [fxHide]="hidden"
      [appearance]="'outline'"
      [formControl]="form"
      (input)="onChange($event)"
      [label]="label"
      [error]="error!"
    >
    </esn-input-text>
  `,
})
export class CustomRendererInputString extends JsonFormsControl {
  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }

  override getEventValue = (event: any) => event.target.value || undefined;
}
