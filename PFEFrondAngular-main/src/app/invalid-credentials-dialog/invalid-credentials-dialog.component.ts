import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invalid-credentials-dialog',
  templateUrl: './invalid-credentials-dialog.component.html',
  styleUrls: ['./invalid-credentials-dialog.component.scss'] // Vérifiez que le chemin est correct ici
})
export class InvalidCredentialsDialogComponent {
  constructor(private dialogRef: MatDialogRef<InvalidCredentialsDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}

