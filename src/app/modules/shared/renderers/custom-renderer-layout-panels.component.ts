import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  JsonFormsAngularService,
  JsonFormsBaseRenderer,
} from '@jsonforms/angular';
import {
  Categorization,
  Category,
  JsonFormsState,
  Labelable,
  defaultJsonFormsI18nState,
  deriveLabelForUISchemaElement,
  getAjv,
  isVisible,
  mapStateToLayoutProps,
} from '@jsonforms/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-layout-panels',
  template: `
    <!-- CARD -->
    <div
      class="layout-card"
      *ngFor="let category of visibleCategories; let i = index"
    >
      <!-- CARD HEADER -->
      <div class="layout-card__header">
        <div class="layout-card__header__content">
          <div class="layout-card__header__content--title">
            {{ categoryLabels[i] }}
          </div>
        </div>
      </div>
      <!--/ CARD HEADER -->
      <!-- CARD BODY -->
      <div class="layout-card__body">
        <div *ngFor="let element of category.elements">
          <jsonforms-outlet
            [uischema]="element"
            [path]="path"
            [schema]="schema"
          ></jsonforms-outlet>
        </div>
      </div>
      <!--/ CARD BODY -->
    </div>
    <!--/ CARD -->
  `,
  styles: [
    `
      @use 'src/assets/scss/variables' as utils;
      @mixin divider($margin-right: 16px, $margin-left: 0px) {
        display: inline-block;
        content: '';
        border-radius: 50%;
        background-color: utils.$bg-default;
        transform: translateY(-1px);
        height: 9px;
        width: 9px;
        margin-right: $margin-right;
        margin-left: $margin-left;
      }

      :host {
        .custom-layout {
          &__card {
            background-color: utils.$bg-card;
            box-shadow: 0 3px 18px utils.$shadow;
            border-radius: 20px;
            padding: 24px;
            margin-bottom: 24px;

            &:last-of-type {
              margin-bottom: 0;
            }
          }

          &__step {
            color: utils.$text-primary;
            font-size: 20px;
          }

          &__title {
            color: utils.$text-primary;
            margin-bottom: 8px;
          }

          &__child {
            padding: 4px 0 0 8px;
          }

          &__item-array {
            border: 1px solid utils.$text-light;
            box-shadow: 0 3px 18px utils.$shadow;
            border-radius: 20px;
          }
        }

        ::ng-deep .mdc-notched-outline__leading,
        ::ng-deep .mdc-notched-outline__notch,
        ::ng-deep .mdc-notched-outline__trailing {
          background-color: utils.$bg-input;
        }

        ::ng-deep .mat-expansion-indicator {
          margin-right: 15px;
        }
        display: block;

        &:hover {
          box-shadow: 0 3px 18px utils.$shadow;
        }

        .layout-card {
          display: flex;
          flex-direction: column;

          background-color: utils.$bg-card;
          border-radius: 8px;
          overflow: auto;

          color: utils.$text-neutral;

          // border: solid 1px #dcdfeaa6;

          &__header {
            display: flex;
            gap: 12px;
            align-items: center;
            padding: 12px 24px;
            // background-color: utils.$bg-card--accent;
            border-bottom: solid 1px #dcdfeaa6;

            &__selected {
              background-color: utils.$shadow-blue-dark;
            }

            &__content {
              flex-grow: 1;
              font-size: 14px;

              &--title {
                font-weight: 700;
                font-size: 20px;
                text-transform: uppercase;
                margin-bottom: 4px;
              }

              &--subtitle {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
              }
            }

            &__aside {
              display: flex;
              gap: 8px;
              flex-wrap: wrap;
              justify-content: right;
              align-items: center;
            }

            .aside {
              &__tag {
                display: flex;
                gap: 5px;
                flex-direction: row;
                align-items: center;
                height: 30px;
                padding: 5px 8px;
                border-radius: 6px;
                font-size: 12px;

                mat-icon {
                  font-size: 12px;
                  height: 12px;
                  width: 12px;
                }

                &--error {
                  background-color: utils.$bg-error;
                  color: utils.$error;
                }

                &--obsolete {
                  background-color: rgb(226, 229, 240);
                  font-weight: 500;
                }

                &--info {
                  border: 1px solid utils.$bg-default;
                  background-color: transparent;
                  color: utils.$default;
                  text-wrap: nowrap;
                }

                &--warning {
                  border: 1px solid utils.$warning;
                  background-color: utils.$warning;
                  color: utils.$text-white;
                  text-wrap: nowrap;
                }
              }
            }

            .deletable {
              margin-left: 20px;
              font-weight: 600;
              height: 30px;
              width: 30px;
              display: flex;
              align-items: center;
              justify-content: center;

              &:hover {
                cursor: pointer;
              }
            }
          }

          &__body {
            padding: 12px 24px;
            font-size: 16px;

            &__title {
              font-weight: 700;
              margin-bottom: 12px;
            }

            &__content {
              display: flex;
              flex-direction: row;
              gap: 6px;
              align-items: end;

              &__data {
                display: flex;
                flex-direction: column;
              }

              .selectable {
                margin-left: auto;
                margin-right: 16px;
                font-weight: 600;
                color: var(--color-primary-1);

                &__is-blocked {
                  color: utils.$default;
                }
              }
            }
          }

          &__children {
            border-top: 2px solid utils.$divider;
          }

          &__footer {
            display: flex;
            align-items: center;
            justify-content: flex-end;

            min-height: 64px;
            padding: 12px 24px;
            color: utils.$primary;

            border-top: 2px solid utils.$divider;
          }
        }

        .linear-layout {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;

          &__item {
            &--icon {
              margin-right: 8px;
              color: utils.$bg-default;

              .icon {
                font-size: 20px;
                height: 20px;
                width: 20px;
                transform: translateY(4px);
              }
            }
          }
        }

        .icon-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 100%;

          mat-icon {
            cursor: pointer;
            width: 20px;
            color: var(--color-bg-default);
          }

          .attach-file-icon {
            font-size: 24px;
            color: var(--color-bg-default);
            height: 24px;
            align-items: center;
          }
        }

        .dot-divider:not(:first-of-type) {
          &:before {
            @include divider();
          }
        }

        .dot-divider-custom-margin:not(:first-of-type) {
          &:before {
            @include divider(6px, 4px);
          }
        }
      }
    `,
  ],
})
export class CustomRendererLayoutPanels
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
