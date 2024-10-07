import { Component } from '@angular/core';
import { JsonFormsControl } from '@jsonforms/angular';

@Component({
  selector: 'app-custom-input-date-time',
  template: `
    <esn-datetimepicker
      (change)="onChange($event)"
      [formControl]="form"
      [fxHide]="hidden"
      [appearance]="'outline'"
      [label]="label"
      [error]="error!"
    ></esn-datetimepicker>
  `,
})
export class CustomRendererInputDateTime extends JsonFormsControl {
  private readonly frenchDateTimeRegex: RegExp =
    /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4} (?:[01][0-9]|2[0-3]):[0-5][0-9]$/;

  public override getEventValue = (e: any): string => {
    return e?.value?.toISOString();
  };

  public override onChange(ev: any): void {
    if (ev.value) {
      super.onChange(ev);
    } else if (
      !ev.value &&
      ev?.target?.value &&
      this.frenchDateTimeRegex.test(ev.target.value)
    ) {
      super.onChange({ value: this.parseFrenshDateString(ev.target.value) });
    } else if (ev?.target?.value === '') {
      super.onChange({ value: undefined });
    }
  }

  private parseFrenshDateString(dateString: string): Date | undefined {
    const regex: RegExp = /^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})$/;
    const match: RegExpMatchArray = dateString.match(regex)!;

    if (!match) {
      return undefined;
    }

    const day: number = parseInt(match[1], 10);
    const month: number = parseInt(match[2], 10) - 1; // Les mois dans l'objet Date sont indexés à 0
    const year: number = parseInt(match[3], 10);
    const hours: number = parseInt(match[4], 10);
    const minutes: number = parseInt(match[5], 10);

    const dateObject = new Date(year, month, day, hours, minutes);

    if (isNaN(dateObject.getTime())) {
      return undefined;
    }

    return dateObject;
  }
}
