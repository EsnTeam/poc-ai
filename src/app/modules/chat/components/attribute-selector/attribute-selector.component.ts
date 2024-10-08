import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { UmlProcessingService } from 'src/app/core/services/uml-processing.service';
import {
  ObjectSchema,
  ObjectSchemaAttribute,
} from 'src/app/modules/shared/model/object-schema';

@Component({
  selector: 'app-attribute-selector',
  templateUrl: './attribute-selector.component.html',
  styleUrls: ['./attribute-selector.component.scss'],
})
export class AttributeSelectorComponent {
  @Input() parents: string[] = [];
  @Input() objectName: string;

  public currentlyEditing: string[] = [];

  public objectSchema: ObjectSchema;
  public totalColumns = 8;

  constructor(public umlService: UmlProcessingService) {}

  async ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (!!changes['objectName']) {
      this.objectSchema = await this.umlService.processUML(this.objectName);
    }
  }

  public onIncludeAllClick(att: ObjectSchemaAttribute, e: any) {
    if (e.target.checked) {
      att.isIncluded = false;
    } else {
      this.umlService.unloadIfNeeded(att.type);
    }
  }

  public onIncludeClick(att: ObjectSchemaAttribute, e: any) {
    if (e.target.checked) {
      att.isSubObjectIncluded = false;
    }
  }

  public editMode(attrUuid: string, modeOn: boolean) {
    if (modeOn) {
      this.currentlyEditing.push(attrUuid);
    } else {
      this.currentlyEditing = this.currentlyEditing.filter(
        (uuid) => uuid != attrUuid
      );
    }
  }

  public drop(e: any) {
    console.log('DROPED !');
    console.log({ e });

    moveItemInArray(
      this.objectSchema.attributes,
      e.previousIndex,
      e.currentIndex
    );
  }
}
