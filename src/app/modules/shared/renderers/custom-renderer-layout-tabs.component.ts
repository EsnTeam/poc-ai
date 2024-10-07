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
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  JsonFormsAngularService,
  JsonFormsBaseRenderer,
} from '@jsonforms/angular';
import { Subscription } from 'rxjs';
import { CustomRendererLayoutTabsService } from './custom-renderer-layout-tabs.service';
import { MatTab } from '@angular/material/tabs';

@Component({
  selector: 'app-custom-layout-tabs',
  template: `
    <mat-tab-group
      class="mb-3"
      dynamicHeight="true"
      [fxHide]="hidden"
      #customTab
    >
      <mat-tab
        *ngFor="let category of visibleCategories; let i = index"
        [label]="categoryLabels[i]"
      >
        <div
          *ngFor="let element of category.elements"
          class="custom-layout__card"
        >
          <jsonforms-outlet
            [uischema]="element"
            [path]="path"
            [schema]="schema"
          ></jsonforms-outlet>
        </div>
      </mat-tab>
    </mat-tab-group>
  `,
  styleUrls: ['custom-renderer-layout.component.scss'],
  styles: [
    `
      :host {
        ::ng-deep .mat-mdc-tab-group {
          gap: 24px;
        }
      }
    `,
  ],
})
export class CustomRendererLayoutTabs
  extends JsonFormsBaseRenderer<Categorization>
  implements OnInit, OnDestroy, AfterViewInit
{
  hidden: boolean;
  visibleCategories: (Category | Categorization)[];
  private subscription: Subscription;
  categoryLabels: string[];

  @ViewChild('customTab') private customTab: MatTab;

  constructor(
    private jsonFormsService: JsonFormsAngularService,
    protected tabsService: CustomRendererLayoutTabsService
  ) {
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

  ngAfterViewInit() {
    this.tabsService.tabs$.next(this.customTab);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
