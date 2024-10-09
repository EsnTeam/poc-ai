import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { FirebaseController } from 'src/app/core/services/firebase-controller.service';
import { PatternExecutionService } from 'src/app/core/services/pattern-execution.service';
import { EsnAiUserConfigService } from 'src/app/core/services/user-config.service';
import {
  Pattern,
  PatternStep,
  PatternStepExecutionState,
  PatternStepType,
} from 'src/app/modules/shared/model/pattern';
import { PocUtils } from 'src/app/modules/shared/utils/utils';
import { ModalInputTextConfirmComponent } from '../../components/modal-input-text-confirm/modal-input-text-confirm.component';

@Component({
  selector: 'app-pattern-editor',
  templateUrl: './pattern-editor.component.html',
  styleUrls: ['./pattern-editor.component.scss', '../config-page.scss'],
  animations: [
    trigger('openingAnimation', [
      state(
        'opened',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateX(100%)',
        })
      ),
      transition('* => *', [animate('0.2s')]),
    ]),
  ],
})
export class PatternEditorComponent {
  public pattern: Pattern;
  public patternId: string;
  public stepTypes = PatternStepType;
  public testPanelOpened: 'opened' | 'closed' = 'closed';
  public executionState: {
    [key in string]: PatternStepExecutionState;
  } = {};
  public lastRanThreadId?: string;
  public patternNameEditionMode: boolean = false;
  constructor(
    public router: Router,
    public firebaseController: FirebaseController,
    public activatedRoute: ActivatedRoute,
    public patternService: PatternExecutionService,
    public locationStrategy: LocationStrategy,
    public userConfigService: EsnAiUserConfigService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.lastRanThreadId = this.userConfigService.getConfig().threadId;
    this.activatedRoute.params.subscribe(async (params) => {
      this.patternId = params['patternId'];
      this.refresh();
    });

    this.patternService.executionState$.subscribe(
      (val) => (this.executionState = val)
    );
  }

  public async refresh() {
    this.pattern = await lastValueFrom(
      this.firebaseController.getPatternById(this.patternId)
    );
  }

  public onDelete(step: PatternStep) {
    this.pattern.steps = this.pattern.steps.filter((s) => s != step);
    this.firebaseController
      .updatePattern(this.patternId, this.pattern)
      .subscribe(() => {});
  }

  public addStep(type: PatternStepType) {
    this.pattern.steps.push({ type, stepId: PocUtils.generateRandomUuid() });
  }
  public onUpdate() {
    this.firebaseController
      .updatePattern(this.patternId, this.pattern)
      .subscribe(() => {});
  }

  public back() {
    this.router.navigate([`/llm/patterns`]);
  }

  public openTestPanel() {
    this.testPanelOpened = 'opened';
  }
  public closeTestPanel() {
    this.testPanelOpened = 'closed';
  }

  public onExecuteClick(inputs: (string[] | string)[]) {
    this.lastRanThreadId = inputs[1] as string;
    this.patternService.executePattern(
      this.patternId,
      inputs[0] as string[],
      this.lastRanThreadId,
      this.pattern.startFrom
    );
  }

  public openThread() {
    const url = `${this.locationStrategy.getBaseHref()}#/llm/threads/${
      this.lastRanThreadId
    }/chat`;
    window.open(url, '_blank');
  }

  public duplicatePattern() {
    const newPattern = JSON.parse(JSON.stringify(this.pattern));

    this.dialog
      .open(ModalInputTextConfirmComponent, {
        width: '70vw',
        data: {
          title: `Duplicate pattern`,
          textFiedlLabel: `Pattern name`,
          confirmLabel: `Save`,
          callFunc: (val: string) => {
            delete newPattern.id;
            newPattern.name = val;
            return this.firebaseController.createPattern(newPattern);
          },
        },
      })
      .componentInstance.updated.subscribe((resp) => {
        console.log({ resp });
        this.router.navigate([`/llm/patterns/${resp.response}`]);
      });
  }

  public async onPatternNameEditClick() {
    if (this.patternNameEditionMode) {
      await this.updatePattern();
    }
    this.patternNameEditionMode = !this.patternNameEditionMode;
  }

  public moveUp(step: PatternStep) {
    const startingIndex = this.pattern.steps.findIndex((s) => s == step);
    this.move(this.pattern.steps, startingIndex, startingIndex - 1);
    this.updatePattern();
  }

  public moveDown(step: PatternStep) {
    const startingIndex = this.pattern.steps.findIndex((s) => s == step);
    this.move(this.pattern.steps, startingIndex, startingIndex + 1);
    this.updatePattern();
  }

  public startFrom(step: PatternStep) {
    if (this.pattern.startFrom == step.stepId) {
      this.pattern.startFrom = undefined;
    } else {
      this.pattern.startFrom = step.stepId;
    }
    this.updatePattern();
  }

  get startFromIndex() {
    return this.pattern.steps.findIndex(
      (s) => s.stepId == this.pattern.startFrom
    );
  }

  public move(input: any[], from: number, to: number) {
    let numberOfDeletedElm = 1;
    const elm = input.splice(from, numberOfDeletedElm)[0];
    numberOfDeletedElm = 0;
    input.splice(to, numberOfDeletedElm, elm);
  }

  public async updatePattern() {
    await lastValueFrom(
      this.firebaseController.updatePattern(this.pattern.id!, this.pattern)
    );
  }
}
