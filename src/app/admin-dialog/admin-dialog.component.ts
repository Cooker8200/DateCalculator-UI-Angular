import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { IDate } from 'src/interfaces/IDate';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'admin-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule],
  templateUrl: './admin-dialog.component.html',
  styleUrl: './admin-dialog.component.css'
})

export class AdminDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { dates: IDate[] },
    public dialogRef: MatDialogRef<AdminDialogComponent>
  ) {
    console.log('data: ', data);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    console.log('saving data');
  }
}
