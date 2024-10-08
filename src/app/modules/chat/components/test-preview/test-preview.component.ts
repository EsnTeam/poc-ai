import { Component } from '@angular/core';
import { jsonSchema } from 'src/assets/data/jsonSchema';
import { uiSchema } from 'src/assets/data/uiSchema';

@Component({
  selector: 'app-test-preview',
  templateUrl: './test-preview.component.html',
  styleUrls: ['./test-preview.component.scss'],
})
export class TestPreviewComponent {
  public schema = jsonSchema;
  public uischema = uiSchema;
}
