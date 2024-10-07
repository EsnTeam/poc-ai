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
import { CustomRendererLayoutStepperService } from './custom-renderer-layout-stepper.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-custom-layout-stepper',
  template: `
    <mat-stepper
      class="mb-3"
      dynamicHeight="true"
      [fxHide]="hidden"
      #customStepper
    >
      <mat-step
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
      </mat-step>
    </mat-stepper>
  `,
  styleUrls: ['custom-renderer-layout.component.scss'],
  styles: [
    `
      :host {
        .mat-stepper-horizontal {
          background: none;
        }

        ::ng-deep .mat-horizontal-content-container {
          padding: 0;
        }

        ::ng-deep .mat-horizontal-stepper-wrapper {
          gap: 24px;
        }
      }
    `,
  ],
})
export class CustomRendererLayoutStepper
  extends JsonFormsBaseRenderer<Categorization>
  implements OnInit, OnDestroy, AfterViewInit
{
  hidden: boolean;
  visibleCategories: (Category | Categorization)[];
  private subscription: Subscription;
  categoryLabels: string[];

  @ViewChild('customStepper') private customStepper: MatStepper;

  constructor(
    private jsonFormsService: JsonFormsAngularService,
    protected stepperService: CustomRendererLayoutStepperService
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
    this.stepperService.stepper$.next(this.customStepper);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
