import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-modal-input-text-confirm',
  templateUrl: './modal-input-text-confirm.component.html',
  styleUrls: ['./modal-input-text-confirm.component.scss'],
})
export class ModalInputTextConfirmComponent {
  @Output() updated = new EventEmitter();

  public textFieldValue: string = '';
  constructor(
    public dialogRef: MatDialogRef<ModalInputTextConfirmComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      textFiedlLabel: string;
      confirmLabel: string;
      callFunc: (val: string) => Observable<any>;
    }
  ) {}

  public async onConfirm() {
    const resp = await lastValueFrom(this.data.callFunc(this.textFieldValue));
    this.updated.emit(resp);
    this.dialogRef.close();
  }
}
