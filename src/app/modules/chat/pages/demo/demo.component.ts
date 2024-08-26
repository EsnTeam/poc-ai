import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EsnExcelService } from 'src/app/core/services/excel.service';
import { PatternExecutionService } from 'src/app/core/services/pattern-execution.service';
import { UmlProcessingService } from 'src/app/core/services/uml-processing.service';
import { THREADS } from 'src/app/modules/shared/model/constants';
import { ObjectSchema } from 'src/app/modules/shared/model/object-schema';
import { TEST_DATA } from 'src/app/modules/shared/prompts/test-data/test-data';
import { Schema } from 'zod';

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

  constructor(
    public umlService: UmlProcessingService,
    public router: Router,
    public patternService: PatternExecutionService,
    public locationStrategy: LocationStrategy,
    public excelService: EsnExcelService
  ) {}

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
    this.router.navigate([`/poc-ai/`]);
  }

  public generateCI() {
    const schemas = this.getObjectsSchemas();
    this.excelService.generateCI(schemas);
  }

  public openThread() {
    const url = `${this.locationStrategy.getBaseHref()}poc-ai/threads/${
      THREADS.main
    }/chat`;
    window.open(url, '_blank');
  }
}
