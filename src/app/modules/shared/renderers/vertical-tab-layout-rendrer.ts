import {
  and,
  Categorization,
  categorizationHasCategory,
  Category,
  defaultJsonFormsI18nState,
  deriveLabelForUISchemaElement,
  getAjv,
  isVisible,
  JsonFormsState,
  Labelable,
  mapStateToLayoutProps,
  RankedTester,
  rankWith,
  uiTypeIs,
} from '@jsonforms/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  JsonFormsAngularService,
  JsonFormsBaseRenderer,
} from '@jsonforms/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'VerticalTabLayoutRendrer',
  template: `
    <mat-tab-group dynamicHeight="true" [fxHide]="hidden">
      <mat-tab
        *ngFor="let category of visibleCategories; let i = index"
        [label]="categoryLabels[i]"
      >
        <div *ngFor="let element of category.elements">
          <jsonforms-outlet
            [uischema]="element"
            [path]="path"
            [schema]="schema"
          ></jsonforms-outlet>
        </div>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [
    `
      :host ::ng-deep .mat-mdc-tab-group {
        flex-direction: row;
      }
      :host ::ng-deep .mat-mdc-tab-header {
        border-bottom: none;
      }
      :host ::ng-deep .mat-mdc-tab-header-pagination {
        display: none !important;
      }
      :host ::ng-deep .mat-mdc-tab-labels {
        flex-direction: column;
      }
      :host ::ng-deep .mat-mdc-ink-bar {
        height: 100%;
        left: 98% !important;
      }
      :host ::ng-deep .mat-mdc-tab-body-wrapper {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class VerticalTabLayoutRendrer
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

export const categorizationTester: RankedTester = rankWith(
  2,
  and(uiTypeIs('Categorization'), categorizationHasCategory)
);
