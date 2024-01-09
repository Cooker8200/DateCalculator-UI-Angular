import { Component, Input } from '@angular/core';
import { orderBy } from 'lodash';
import { IDate } from 'src/interfaces/IDate';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateResultsComponent } from '../date-results/date-results.component';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, DateResultsComponent, CommonModule, MatIconModule]
})
export class DateSelectorComponent {
  @Input() dates: IDate[] = [];
  birthdays: IDate[] = [];
  holidays: IDate[] = [];
  otherDates: IDate[] = [];
  selectedDate?: IDate;

  ngOnChanges(): void {
    const birthdays = orderBy(this.dates.filter(date => date.type === 'birthday'), 'name');
    const holidays = orderBy(this.dates.filter(date => date.type === 'holiday'), 'name');
    const otherDates = orderBy(this.dates.filter(date => date.type === 'other'), 'name');

    this.birthdays = birthdays;
    this.holidays = holidays;
    this.otherDates = otherDates;
  }

  handleDateSelectionChange(event: any): void {
    const name = event.value;
    this.selectedDate = [...this.birthdays, ...this.holidays, ...this.otherDates].find(date => date.name === name) as IDate;
  }

  handleShowDialogClick(): void {
    console.log('set global state here')
  }
}
