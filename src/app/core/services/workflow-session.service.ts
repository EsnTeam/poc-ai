import { Injectable } from '@angular/core';
import { WorkflowSession } from 'src/app/modules/shared/model/workflow';
import { FirebaseController } from './firebase-controller.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { ExecutionStateEnum } from 'src/app/modules/shared/model/pattern';

@Injectable({
  providedIn: 'root',
})
export class WorkflowSessionService {
  public session: WorkflowSession;
  public session$: BehaviorSubject<WorkflowSession | undefined> =
    new BehaviorSubject<WorkflowSession | undefined>(undefined);

  public jsonSchema: any;
  public uiSchema: any;
  constructor(public firebaseController: FirebaseController) {}

  public async loadSession(sessionId: string) {
    this.session = await lastValueFrom(
      this.firebaseController.getWorkflowSessionById(sessionId)
    );
    this.session$.next(this.session);
  }

  public async updateSession() {
    await lastValueFrom(
      this.firebaseController.updateWorkflowSession(
        this.session.id,
        this.session
      )
    );
  }

  public getCurrentStep() {
    return this.session.steps.find(
      (s) => s.stepId == this.session.activeStepId
    );
  }

  public goToNextStep() {
    const currentIndex = this.session.steps.findIndex(
      (s) => s.stepId == this.session.activeStepId
    );
    const currentStep = this.session.steps[currentIndex];
    const nextStep = this.session.steps[currentIndex + 1];

    currentStep.state = ExecutionStateEnum.SUCCESS;
    nextStep.state = ExecutionStateEnum.ONGOING;

    this.session.activeStepId = nextStep.stepId;
    this.updateSession();
  }

  public goToStep(stepId: string) {
    const currentStep = this.getCurrentStep()!;
    const nextStep = this.session.steps.find((s) => s.stepId == stepId)!;

    currentStep.state = ExecutionStateEnum.NOT_EXECUTED;
    nextStep.state = ExecutionStateEnum.ONGOING;

    this.session.activeStepId = nextStep.stepId;
    this.updateSession();
  }

  public getJsonSchema() {
    return this.jsonSchema;
  }

  public getUiSchema() {
    return this.uiSchema;
  }
}
