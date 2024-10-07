import { MatDialogConfig } from '@angular/material/dialog';
export interface EsnDialogConfig<D> extends MatDialogConfig<D> {
    fullScreenDialog?: boolean;
}
