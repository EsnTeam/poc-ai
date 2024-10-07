import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  JsonFormsAngularService,
  JsonFormsBaseRenderer,
} from '@jsonforms/angular';
import {
  GroupLayout,
  JsonFormsState,
  OwnPropsOfRenderer,
  UISchemaElement,
} from '@jsonforms/core';
import { Subject, tap } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-custom-layout-group',
  template: `
    <h2 class="custom-layout__title" *ngIf="uischema?.label">
      {{ label }}
    </h2>
    <div *ngFor="let group of groups" [class.custom-group__child]="group.label">
      <jsonforms-outlet
        [uischema]="group"
        [path]="path"
        [schema]="schema"
      ></jsonforms-outlet>
    </div>
  `,
  styleUrls: ['./custom-renderer-layout.component.scss'],
})
export class CustomRendererLayoutGroup
  extends JsonFormsBaseRenderer<GroupLayout>
  implements OnInit, OnDestroy
{
  readonly #destroy$: Subject<void> = new Subject<void>();
  readonly #jsonFormsAngularService = inject(JsonFormsAngularService);
  public groups: Array<UISchemaElement & { label?: string }> = [];
  public label: string;

  protected override getOwnProps(): OwnPropsOfRenderer {
    return super.getOwnProps();
  }

  ngOnInit() {
    this.label = this.uischema.label!;
    this.groups = this.uischema?.elements;

    this.#jsonFormsAngularService.$state
      .pipe(tap(this.#setI18nLabel.bind(this)), takeUntil(this.#destroy$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }

  #setI18nLabel() {
    if (this.uischema.i18n) {
      const state: JsonFormsState = this.#jsonFormsAngularService.getState();
      this.label =
        state.jsonforms?.i18n?.translate!(this.uischema.i18n + '.label') ||
        this.label;
    }
  }
}
