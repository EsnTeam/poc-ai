import { Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';

@Component({
  selector: 'app-custom-input-enum',
  template: `
    <esn-select
      class="role-selector"
      [fxHide]="hidden"
      (selectionChange)="onChange($event)"
      [appearance]="'outline'"
      [formControl]="form"
      [label]="label"
      [error]="error!"
    >
      <esn-option *ngFor="let option of options" [value]="option"
        >{{ option }}
      </esn-option>
    </esn-select>
  `,
})
export class CustomRendererInputEnum extends JsonFormsControl {
  get options(): string[] {
    return this.scopedSchema.enum!;
  }

  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }

  override getEventValue = (value: any) => value || undefined;
}
