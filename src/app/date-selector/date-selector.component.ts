import { Component, Input } from '@angular/core';
import { orderBy } from 'lodash';
import { IDate } from 'src/interfaces/IDate';

@Component({
  selector: 'date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
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

  onChange(event: any): void {
    const name = event.target.value;
    this.selectedDate = [...this.birthdays, ...this.holidays, ...this.otherDates].find(date => date.name === name) as IDate;
  }
}
