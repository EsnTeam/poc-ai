import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { EsnExcelService } from 'src/app/core/services/excel.service';
import { FirebaseController } from 'src/app/core/services/firebase-controller.service';
import { PatternExecutionService } from 'src/app/core/services/pattern-execution.service';
import { UmlProcessingService } from 'src/app/core/services/uml-processing.service';
import { THREADS } from 'src/app/modules/shared/model/constants';
import { ObjectSchema } from 'src/app/modules/shared/model/object-schema';
import { Pattern } from 'src/app/modules/shared/model/pattern';
import { TEST_DATA } from 'src/app/modules/shared/prompts/test-data/test-data';
import { Schema } from 'zod';
import { ModalInputTextConfirmComponent } from '../../components/modal-input-text-confirm/modal-input-text-confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { PocUtils } from 'src/app/modules/shared/utils/utils';
import { EsnThreadManagementService } from 'src/app/core/services/thread-management.service';
import { EsnAiUserConfigService } from 'src/app/core/services/user-config.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss', '../config-page.scss'],
})
export class DemoComponent {
  public objectName = 'Contrat';
  public searchOngoing: boolean = false;
  public suggestNameOngoing: boolean = false;
  public generateJsonsOngoing: boolean = false;
  public patterns: Pattern[];
  public selectedPatternId: string;
  public execPatternOngoing: boolean = false;
  public threadId: string = THREADS.main;
  public threadIds: string[] = [];

  constructor(
    public umlService: UmlProcessingService,
    public router: Router,
    public patternService: PatternExecutionService,
    public locationStrategy: LocationStrategy,
    public excelService: EsnExcelService,
    public firebaseController: FirebaseController,
    public dialog: MatDialog,
    public threadsService: EsnThreadManagementService,
    public userConfigService: EsnAiUserConfigService
  ) {}

  async ngOnInit() {
    this.initThread();
    this.patterns = await lastValueFrom(this.firebaseController.getPatterns());
  }

  public getObjectsSchemas() {
    const objs = JSON.parse(JSON.stringify(this.umlService.loadedObjects));
    objs.forEach((o: ObjectSchema) => {
      o.attributes = o.attributes.filter(
        (att) => att.isIncluded || att.isSubObjectIncluded
      );

      o.attributes.forEach((att) => {
        if (att.isIncluded && !att.isPrimitiveType) {
          att.name = `${att.name || ''} ${att.type}`;
          att.type = 'String';
        }
      });
    });
    console.log({ objs });
    return objs;
  }

  public async executePattern() {
    this.execPatternOngoing = true;
    const schemas = this.getObjectsSchemas();

    await this.patternService.executePattern(
      this.selectedPatternId,
      [JSON.stringify(schemas, null, 2), schemas[0].name],
      THREADS.main
    );

    this.execPatternOngoing = false;
  }

  public async suggestFieldNames() {
    this.suggestNameOngoing = true;
    const schemas = this.getObjectsSchemas();

    const suggestedNames = (
      await this.patternService.suggestFieldNames(schemas)
    ).attributes;

    this.umlService.loadedObjects.forEach((obj) => {
      obj.attributes.forEach((att) => {
        att.suggestedFieldName = suggestedNames.find(
          (o: any) => o.uuid == att.uuid
        )?.suggestedFieldName;
      });
    });
    this.suggestNameOngoing = false;
  }

  public async generateJSONSchema() {
    this.generateJsonsOngoing = true;
    const schemas = this.getObjectsSchemas(); //TEST_DATA.rawDataWithFieldNames; //
    await this.patternService.generateJsonSchema(schemas);
    this.generateJsonsOngoing = false;
  }

  public search() {
    this.searchOngoing = true;
    this.umlService.resetLoadedObjects();
    setTimeout(() => (this.searchOngoing = false));
  }

  public back() {
    this.router.navigate([`/llm/`]);
  }

  public generateCI() {
    const schemas = this.getObjectsSchemas();
    this.excelService.generateCI(schemas);
  }

  public openThread() {
    const url = `${this.locationStrategy.getBaseHref()}#/llm/threads/${
      THREADS.main
    }/chat`;
    window.open(url, '_blank');
  }

  public openSaveDataModal() {
    const schemas = this.getObjectsSchemas();

    const inputs = [JSON.stringify(schemas, null, 2), schemas[0].name];

    this.dialog
      .open(ModalInputTextConfirmComponent, {
        width: '70vw',
        data: {
          title: `Save as test data`,
          textFiedlLabel: `Test data label`,
          confirmLabel: `Save`,
          callFunc: (val: string) =>
            this.firebaseController.createTestData({
              name: val,
              inputs,
            }),
        },
      })
      .componentInstance.updated.subscribe((resp) => {
        console.log('UPDATED');
      });
  }

  public initThread() {
    this.threadIds = this.threadsService.getThreadIds();
    if (this.threadIds.length) {
      const config = this.userConfigService.getConfig();
      if (config.threadId) {
        this.threadId = config.threadId;
      } else {
        this.threadId = this.threadIds[0];
        this.userConfigService.saveConfig({ threadId: this.threadId });
      }
    }
  }

  public onThreadChange() {
    this.userConfigService.saveConfig({ threadId: this.threadId });
  }
}
