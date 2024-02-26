import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
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
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DataService } from '../persistence/data.service';

@Component({
  selector: 'admin-dialog',
  standalone: true,
  imports: [CommonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [ {provide: DateAdapter, useClass: NativeDateAdapter}, {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS}, ],
  templateUrl: './admin-dialog.component.html',
  styleUrl: './admin-dialog.component.css'
})

export class AdminDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { dates: IDate[] },
    public dialogRef: MatDialogRef<AdminDialogComponent>,
    private dataService: DataService,
  ) {
    this.birthdays = orderBy(data.dates.filter(date => date.type === 'birthday'), 'name');
    this.holidays = orderBy(data.dates.filter(date => date.type === 'holiday'), 'name');
    this.otherDates = orderBy(data.dates.filter(date => date.type === 'other'), 'name');
  }

  dateAction: string = 'add';
  dateToRemove: string = '';
  dateToAdd: string = '';
  dateTypeToAdd: string = '';
  dateNameToAdd: string = '';
  birthdays: IDate[] = [];
  holidays: IDate[] = [];
  otherDates: IDate[] = [];

  setDateAction(event: any): void {
    switch (event.index) {
      case 0:
        this.dateAction = 'add';
        break;
      case 1:
        this.dateAction = 'remove';
        break;
      default:
        console.error('something broke');
    }
  };

  handleDateTypeSelectionChange(event: any): void {
    this.dateTypeToAdd = event.value;
  };

  handleDateNameChange(event: any): void {
    this.dateNameToAdd = event.target.value;
  };

  handleRemoveDateSelection(event: any): void {
    this.dateToRemove = event.value;
  };

  onClose(): void {
    this.dialogRef.close();
  };

  onSave(): void {
    switch (this.dateAction) {
      case 'add':
        const composedNewDate = {
          date: this.dateToAdd,
          name: this.dateNameToAdd,
          type: this.dateTypeToAdd,
        }
        this.dataService.putNewDate(composedNewDate).subscribe();
        this.onClose();
        break;
      case 'remove':
        this.dataService.deleteDate(this.dateToRemove).subscribe();
        this.onClose();
        break;
      default:
        console.error('attempting invalid operation');
    }
  };
}
