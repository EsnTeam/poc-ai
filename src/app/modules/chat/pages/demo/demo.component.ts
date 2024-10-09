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
import { EsnOpenaiService } from 'src/app/core/services/opeanai.service';
import { EsnExcelParsingService } from 'src/app/core/services/excel-parsing.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss', '../config-page.scss'],
})
export class DemoComponent {
  public parsingOk?: boolean = undefined;
  public objectName = 'Contrat';
  public objectSearchName = 'Contrat';
  public searchOngoing: boolean = false;
  public suggestNameOngoing: boolean = false;
  public generateJsonsOngoing: boolean = false;
  public patterns: Pattern[];
  public selectedPatternId: string;
  public execPatternOngoing: boolean = false;
  public threadId: string = THREADS.main;
  public threadIds: string[] = [];

  public files: any[];
  public selectedFile: File | null = null;
  public uploadedFile: any;
  public uploadFileOngoing: boolean = false;

  constructor(
    public umlService: UmlProcessingService,
    public router: Router,
    public patternService: PatternExecutionService,
    public locationStrategy: LocationStrategy,
    public excelService: EsnExcelService,
    public firebaseController: FirebaseController,
    public dialog: MatDialog,
    public threadsService: EsnThreadManagementService,
    public userConfigService: EsnAiUserConfigService,
    public excelParsingService: EsnExcelParsingService,
    public oaiService: EsnOpenaiService
  ) {}

  async ngOnInit() {
    this.initThread();
    this.patterns = await lastValueFrom(this.firebaseController.getPatterns());

    this.patternService.objectName$.subscribe((val) => {
      if (val) {
        this.objectName = val;
        console.log('new obj name ', this.objectName);
      }
    });

    const input = document.getElementById('input');
    input?.addEventListener('change', () => {
      this.excelParsingService.parse((input as any)['files'][0]);
    });
  }

  ngAfterViewInit() {
    const input = document.getElementById('input-uml');
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
          this.objectName = this.umlService.loadedObjects[0].name;
        }
      };
    });
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

    await this.patternService.executePattern(
      this.selectedPatternId,
      this.getInputs(),
      this.threadId
    );

    this.execPatternOngoing = false;
  }

  public getInputs() {
    this.execPatternOngoing = true;
    const schemas = this.getObjectsSchemas();

    return [
      JSON.stringify(schemas, null, 2),
      schemas[0].name,
      JSON.stringify(this.excelParsingService.parsedData, null, 2),
    ];
  }

  // public async suggestFieldNames() {
  //   this.suggestNameOngoing = true;
  //   const schemas = this.getObjectsSchemas();

  //   const suggestedNames = (
  //     await this.patternService.suggestFieldNames(schemas)
  //   ).attributes;

  //   this.umlService.loadedObjects.forEach((obj) => {
  //     obj.attributes.forEach((att) => {
  //       att.suggestedFieldName = suggestedNames.find(
  //         (o: any) => o.uuid == att.uuid
  //       )?.suggestedFieldName;
  //     });
  //   });
  //   this.suggestNameOngoing = false;
  // }

  // public async generateJSONSchema() {
  //   this.generateJsonsOngoing = true;
  //   const schemas = this.getObjectsSchemas(); //TEST_DATA.rawDataWithFieldNames; //
  //   await this.patternService.generateJsonSchema(schemas);
  //   this.generateJsonsOngoing = false;
  // }

  public search() {
    this.searchOngoing = true;
    this.objectName = this.objectSearchName;
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

  public onFileSelected(event: Event): void {
    console.log({ event });

    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.uploadFile();
    }
  }

  async uploadFile(): Promise<void> {
    if (!this.selectedFile) {
      console.log({ fileSel: this.selectedFile });
      console.error('No file selected!');
      return;
    }
    this.uploadFileOngoing = true;

    this.uploadedFile = await this.oaiService.createFile(this.selectedFile);
    console.log({ laaaaa: this.uploadedFile });
    this.uploadFileOngoing = false;
  }

  public openSaveDataModal() {
    const schemas = this.getObjectsSchemas();

    const inputs = this.getInputs();

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
