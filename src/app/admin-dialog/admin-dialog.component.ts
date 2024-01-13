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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { orderBy } from 'lodash';

@Component({
  selector: 'admin-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule, MatTabsModule, FormsModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, ],
  templateUrl: './admin-dialog.component.html',
  styleUrl: './admin-dialog.component.css'
})

export class AdminDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { dates: IDate[] },
    public dialogRef: MatDialogRef<AdminDialogComponent>
  ) {
    this.birthdays = orderBy(data.dates.filter(date => date.type === 'birthday'), 'name');
    this.holidays = orderBy(data.dates.filter(date => date.type === 'holiday'), 'name');
    this.otherDates = orderBy(data.dates.filter(date => date.type === 'other'), 'name');
    console.log('data: ', data);
  }

  dateAction: string = 'add'
  dateToRemove: string = ''
  birthdays: IDate[] = [];
  holidays: IDate[] = [];
  otherDates: IDate[] = [];

  setDateAction(): void {
    // this.dateAction = action;
    // console.log(action);
    console.log('hit');
  };

  handleRemoveDateSelection(event: any): void {
    const date = event.value;
    this.dateToRemove = date;
  };

  onClose(): void {
    this.dialogRef.close();
  };

  onSave(): void {
    console.log('saving data');
  };
}
