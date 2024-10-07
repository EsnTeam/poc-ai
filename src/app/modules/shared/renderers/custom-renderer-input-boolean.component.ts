import { Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';

@Component({
  selector: 'app-custom-input-boolean',
  template: `
    <esn-checkbox
      [fxHide]="hidden"
      [id]="id"
      [formControl]="form"
      (input)="onChange($event)"
    >
      <div label>{{ label }}</div>
      <div class="text-error" *ngIf="error">{{ error }}</div>
    </esn-checkbox>
  `,
})
export class CustomRendererInputBoolean extends JsonFormsControl {
  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }

  override getEventValue = (event: any) => this.form.value || undefined;
}
