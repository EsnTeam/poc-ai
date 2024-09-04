import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { FirebaseController } from 'src/app/core/services/firebase-controller.service';

@Component({
  selector: 'app-pattern-creation-dialog',
  templateUrl: './pattern-creation-dialog.component.html',
  styleUrls: ['./pattern-creation-dialog.component.scss'],
})
export class PatternCreationDialogComponent {
  @Output() updated = new EventEmitter();

  public patternName: string = '';
  constructor(
    public dialogRef: MatDialogRef<PatternCreationDialogComponent>,
    public firebaseApi: FirebaseController
  ) {}

  public async createPattern() {
    const resp = await lastValueFrom(
      this.firebaseApi.createPattern({
        name: this.patternName,
        steps: [],
      })
    );
    this.updated.emit(resp);
    this.dialogRef.close();
  }
}
