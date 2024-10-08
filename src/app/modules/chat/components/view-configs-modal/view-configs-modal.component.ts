import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-configs-modal',
  templateUrl: './view-configs-modal.component.html',
  styleUrls: ['./view-configs-modal.component.scss'],
})
export class ViewConfigsModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewConfigsModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      jsonSchema: any;
      uiSchema: any;
    }
  ) {}
}
