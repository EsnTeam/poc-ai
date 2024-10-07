import { Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';

@Component({
  selector: 'app-custom-renderer-input-textarea',
  template: `
    <esn-input-textarea
      [fxHide]="hidden"
      [appearance]="'outline'"
      [formControl]="form"
      (input)="onChange($event)"
      [label]="label"
      [error]="error!"
    ></esn-input-textarea>
  `,
  styles: [],
})
export class CustomRendererInputTextarea extends JsonFormsControl {
  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }

  override onChange(ev: any) {
    super.onChange({ value: ev?.target?.value || '' });
  }
}
