import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { isStringControl, RankedTester, rankWith } from '@jsonforms/core';

@Component({
  selector: 'EsnTextInputRendrer',
  template: `
    <!-- <mat-form-field fxFlex [fxHide]="hidden">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        [type]="getType()"
        (input)="onChange($event)"
        [id]="id"
        [formControl]="form"
        (focus)="focused = true"
        (focusout)="focused = false" />
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field> -->
    <esn-input-text
      [formControl]="form"
      (input)="onChange($event)"
      [id]="id"
      [hint]="description"
      (focus)="(true)"
      (focusout)="(false)"
      [label]="label"
    >
    </esn-input-text>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsnTextInputRendrer extends JsonFormsControl {
  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }
  override getEventValue = (event: any) => event.target.value || undefined;
  getType = (): string => {
    if (this.uischema.options && this.uischema.options['format']) {
      return this.uischema.options['format'];
    }
    if (this.scopedSchema && this.scopedSchema.format) {
      switch (this.scopedSchema.format) {
        case 'email':
          return 'email';
        case 'tel':
          return 'tel';
        default:
          return 'text';
      }
    }
    return 'text';
  };
  override onChange(e: any) {
    // this.mapToProps(this.jsonFormsService.getState());
    // this.handleChange("");

    var state = this.jsonFormsService.getState();
    var obj = state.jsonforms.core!.data;
    let pathArray: any = this.uischema.scope.split('/');
    let pList = [] as any[];
    // let path:string='';
    pathArray.forEach((p: any) => {
      if (p != '#' && p != 'properties') {
        pList.push(p);
      }
    });
    var len = pList.length;
    //resolveValue(state.jsonforms.core.data,pList.join('.')
    for (var i = 0; i < len - 1; i++) {
      var elem = pList[i];
      if (!obj[elem]) {
        obj[elem] = {};
      }
      obj = obj[elem];
    }

    obj[pList[len - 1]] = e.value;
    this.jsonFormsService.setData(state.jsonforms.core!.data);
    //state.jsonforms.core.data = { textA: 'cccc', textB: 'zzzz' };

    //this.updateData(e.target.value);
  }
}
export const TextControlRendererTester: RankedTester = rankWith(
  1,
  isStringControl
);
