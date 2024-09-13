import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assistant } from 'openai/resources/beta/assistants';
import { DataStoreService } from 'src/app/core/services/store.service';
import {
  INPUT_FORMATTING_LABELS,
  InputFormattingEnum,
  PatternStep,
  PatternStepExecutionState,
  PatternStepType,
  RUN_FORMAT_LABELS,
  STEP_ACTION_LABELS,
  StepActionType,
} from 'src/app/modules/shared/model/pattern';

@Component({
  selector: 'app-pattern-step',
  templateUrl: './pattern-step.component.html',
  styleUrls: ['./pattern-step.component.scss'],
  host: {
    '[class.pattern-step--ongoing]': `state?.state ==  'ONGOING' && !step.pause`,
    '[class.pattern-step--success]': `state?.state ==  'SUCCESS' && !step.pause`,
    '[class.pattern-step--paused]': `step.pause`,
  },
})
export class PatternStepComponent {
  @Input() step: PatternStep;
  @Input() state: PatternStepExecutionState;
  @Input() isFirst: boolean = true;
  @Input() isLast: boolean = true;
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
  @Output() update: EventEmitter<void> = new EventEmitter<void>();
  @Output() moveUp: EventEmitter<void> = new EventEmitter<void>();
  @Output() moveDown: EventEmitter<void> = new EventEmitter<void>();
  public isFileAttached: boolean = false;
  public editionMode: boolean = false;
  public assistants: Assistant[] = [];
  public formatLabels = RUN_FORMAT_LABELS;
  public formatLabelsEntries = Object.entries(RUN_FORMAT_LABELS);
  public actionTypes = Object.keys(StepActionType) as StepActionType[];
  public actionTypeLabels = STEP_ACTION_LABELS;
  public formattingLabels = INPUT_FORMATTING_LABELS;
  public formattingEnum = Object.keys(
    InputFormattingEnum
  ) as InputFormattingEnum[];

  constructor(public storeService: DataStoreService) {}

  async ngOnInit() {
    if (!this.isStepValid) {
      this.editionMode = true;
    }
    this.assistants = await this.storeService.getAssistants();
    this.isFileAttached = !!this.step.attachedFileId;
    console.log(this.isFileAttached);
  }

  public togglePause() {
    this.step.pause = !this.step.pause;
    this.update.emit();
  }

  public onFileAttachChange() {
    if (!this.isFileAttached) {
      this.step.attachedFileId = '';
    }
  }

  public toggleEditionMode() {
    if (this.editionMode) {
      this.update.emit();
    }
    this.editionMode = !this.editionMode;
  }

  public deleteClick() {
    this.delete.emit();
  }

  public onMoveUp() {
    this.moveUp.emit();
  }

  public onMoveDown() {
    this.moveDown.emit();
  }

  get assistantSelected() {
    return this.assistants?.find((a) => a.id == this.step.assistantId);
  }

  get isStepValid() {
    switch (this.step.type) {
      case PatternStepType.MESSAGE:
        return !!this.step.prompt;
      case PatternStepType.RUN:
        return !!this.step.assistantId;
      case PatternStepType.ACTION:
        return (
          !!this.step.actionType &&
          (this.step.actionType != StepActionType.DOWNLOAD ||
            this.step.fileName)
        );
      default:
        return true;
    }
  }
}
