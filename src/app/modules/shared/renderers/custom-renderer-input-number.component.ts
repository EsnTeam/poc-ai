import { Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';

@Component({
  selector: 'app-custom-input-number',
  template: `
    <esn-input-number
      [fxHide]="hidden"
      [appearance]="'outline'"
      [formControl]="form"
      [showButtons]="false"
      [label]="label"
      (input)="onChange($event)"
      [error]="error!"
    >
    </esn-input-number>
  `,
})
export class CustomRendererInputNumber extends JsonFormsControl {
  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }

  override getEventValue = (event: any) => this.form.value || undefined;
}
