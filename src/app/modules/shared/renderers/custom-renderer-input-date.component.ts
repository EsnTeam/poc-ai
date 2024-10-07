import { Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-custom-input-date',
  template: `
    <esn-datepicker
      [fxHide]="hidden"
      (change)="onChange($event)"
      [formControl]="form"
      [appearance]="'outline'"
      [label]="label"
      [error]="error!"
    ></esn-datepicker>
  `,
})
export class CustomRendererInputDate extends JsonFormsControl {
  constructor(
    jsonformsService: JsonFormsAngularService,
    protected datePipe: DatePipe
  ) {
    super(jsonformsService);
  }

  override getEventValue = (event: any) => {
    const value = event.target.value;
    return value
      ? this.datePipe.transform(event.target.value, 'yyyy-MM-dd')
      : undefined;
  };
}
