import { Component } from '@angular/core';
import { UmlProcessingService } from 'src/app/core/services/uml-processing.service';
import { WorkflowSessionService } from 'src/app/core/services/workflow-session.service';
import { WorkflowStepElementType } from 'src/app/modules/shared/model/workflow';
import { PocUtils } from 'src/app/modules/shared/utils/utils';

@Component({
  selector: 'app-wf-select-uml',
  templateUrl: './wf-select-uml.component.html',
  styleUrls: ['./wf-select-uml.component.scss'],
})
export class WfSelectUmlComponent {
  public parsingOk?: boolean = undefined;
  constructor(
    public umlService: UmlProcessingService,
    public sessionService: WorkflowSessionService
  ) {}

  ngAfterViewInit() {
    const input = document.getElementById('input');
    input?.addEventListener('change', () => {
      const file = (input as any)['files'][0];
      console.log(file);

      var reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = async (evt: any) => {
        const content = evt['target'].result;
        this.umlService.loadUmlString(content);
        this.parsingOk = await this.umlService.isParsingOk();
        if (this.parsingOk) {
          this.sessionService.getCurrentStep()!.stepElements = [
            {
              type: WorkflowStepElementType.FILE,
              fileMetadata: {
                uuid: PocUtils.generateRandomUuid(),
                filename: file.name,
              },
            },
          ];
        }
      };
    });
  }

  public goToNextStep() {
    this.sessionService.goToNextStep();
  }
}
