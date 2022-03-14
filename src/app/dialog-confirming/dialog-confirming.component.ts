import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-confirming',
    templateUrl: './dialog-confirming.component.html',
})
export class DialogConfirmingComponent  {

    constructor(private dialogRef: MatDialogRef<DialogConfirmingComponent>) { }

    cancel() {
        this.dialogRef.close(false);
    }

    delete() {
        this.dialogRef.close(true);
    }
}
