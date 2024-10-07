import {
  Categorization,
  Category,
  defaultJsonFormsI18nState,
  deriveLabelForUISchemaElement,
  getAjv,
  isVisible,
  JsonFormsState,
  Labelable,
  mapStateToLayoutProps,
} from '@jsonforms/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  JsonFormsAngularService,
  JsonFormsBaseRenderer,
} from '@jsonforms/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-layout-expansion',
  template: `
    <mat-accordion dynamicHeight="true" [fxHide]="hidden">
      <mat-expansion-panel
        *ngFor="let category of visibleCategories; let i = index"
      >
        <mat-expansion-panel-header class="p-0">
          <mat-panel-title class="custom-layout__step">{{
            categoryLabels[i]
          }}</mat-panel-title>
          <mat-panel-description></mat-panel-description>
        </mat-expansion-panel-header>
        <div *ngFor="let element of category.elements">
          <jsonforms-outlet
            [uischema]="element"
            [path]="path"
            [schema]="schema"
          ></jsonforms-outlet>
        </div>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [
    `
      :host ::ng-deep .mat-expansion-panel-header-title {
        line-height: 2rem;
        font-size: 16px !important;
        font-weight: 600;
      }

      :host ::ng-deep .mat-expansion-panel-content h2 {
        font-size: 14px !important;
      }
    `,
  ],
  styleUrls: ['custom-renderer-layout.component.scss'],
})
export class CustomRendererLayoutExpansion
  extends JsonFormsBaseRenderer<Categorization>
  implements OnInit, OnDestroy
{
  hidden: boolean;
  visibleCategories: (Category | Categorization)[];
  private subscription: Subscription;
  categoryLabels: string[];

  constructor(private jsonFormsService: JsonFormsAngularService) {
    super();
  }

  ngOnInit() {
    this.subscription = this.jsonFormsService.$state.subscribe({
      next: (state: JsonFormsState) => {
        const props = mapStateToLayoutProps(state, this.getOwnProps());
        this.hidden = !props.visible;
        this.visibleCategories = this.uischema.elements.filter(
          (category: Category | Categorization) =>
            isVisible(category, props.data, '', getAjv(state))
        );
        this.categoryLabels = this.visibleCategories.map(
          (element) =>
            deriveLabelForUISchemaElement(
              element as Labelable<boolean>,
              state.jsonforms.i18n?.translate ??
                defaultJsonFormsI18nState.translate
            )!
        );
      },
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
