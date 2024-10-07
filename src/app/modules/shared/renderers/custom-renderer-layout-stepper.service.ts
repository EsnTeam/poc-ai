import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';

@Injectable({
  providedIn: 'root',
})
export class CustomRendererLayoutStepperService {
  public stepper$: BehaviorSubject<MatStepper | null> =
    new BehaviorSubject<MatStepper | null>(null);
}
