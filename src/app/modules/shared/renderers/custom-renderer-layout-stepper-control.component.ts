import { AfterViewInit, Component, HostBinding } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { CustomRendererLayoutStepperService } from './custom-renderer-layout-stepper.service';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-custom-layout-stepper-control',
  template: `
    <esn-button
      [iconOnly]="false"
      [disabled]="stepIndex <= 0"
      class="mr-1"
      color="neutral"
      type="stroked"
      (click)="previousStep()"
    >
      <esn-icon name="chevron-left"></esn-icon>
      {{ 'CREATE_ITEM.BUTTON.PREVIOUS' }}
    </esn-button>
    <esn-button
      [iconOnly]="false"
      [disabled]="stepIndex >= stepCount - 1"
      class="mr-1"
      color="neutral"
      type="stroked"
      (click)="nextStep()"
    >
      {{ 'CREATE_ITEM.BUTTON.NEXT' }}
      <esn-icon
        style="margin-left: 10px;"
        class="mr-0"
        name="chevron-right"
      ></esn-icon>
    </esn-button>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        vertical-align: top;
      }
    `,
    `
      :host-context(.control--hidden) {
        display: none;
      }
    `,
  ],
})
// extends Destroyable
export class CustomRendererLayoutStepperControl implements AfterViewInit {
  @HostBinding('class.control--hidden')
  public get hiddenClass() {
    return (this.#stepper?.steps?.length || 0) <= 1;
  }

  #stepper: MatStepper;

  get stepIndex(): number {
    return this.#stepper?.selectedIndex;
  }

  get stepCount(): number {
    return this.#stepper?.steps?.length;
  }

  constructor(protected stepperService: CustomRendererLayoutStepperService) {
    // super();
  }

  ngAfterViewInit() {
    this.stepperService.stepper$
      // .pipe(
      //   filter((stepper) => !!stepper),
      //   tap((stepper: MatStepper) => (this.#stepper = stepper)),
      //   this.takeUntilDestroyed()
      // )
      .subscribe();
  }

  public nextStep(): void {
    this.#stepper.selectedIndex = this.#stepper?.selectedIndex + 1;
  }

  public previousStep(): void {
    this.#stepper.selectedIndex = this.#stepper?.selectedIndex - 1;
  }
}
