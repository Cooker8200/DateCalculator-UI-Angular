import { Component, Input } from '@angular/core';
import { IDate } from 'src/interfaces/IDate';

@Component({
  selector: 'date-results',
  templateUrl: './date-results.component.html',
  styleUrls: ['./date-results.component.css']
})
export class DateResultsComponent {
  @Input() selectedDate?: IDate;
  daysToSelectedDate?: number;
  dateMessage?: string;

  ngOnChanges(): void {
    this.daysToSelectedDate = this.calculateDayDifference(this.selectedDate as IDate);
    this.dateMessage = 'Happy Birthday!'
  }

  calculateDayDifference = (dateObject: IDate): number => {
    const parsedDate = new Date(dateObject.date);
    const currentDay = new Date().setHours(0,0,0,0);
    const birthDay = parsedDate.getDate();
    const birthMonth = parsedDate.getMonth();
    const currentBirthday = new Date(new Date().getFullYear(), birthMonth, birthDay).getTime();
    if (currentDay > currentBirthday) {
      // day has already passed in the current year
      const nextOccuringDate = new Date(new Date().getFullYear() + 1, birthMonth, birthDay);
      // @ts-ignore
      return Math.round((nextOccuringDate - currentDay) / (1000 * 60 * 60 * 24));
    } else if (currentDay < currentBirthday) {
      // day has not passed in the current year
      return Math.round((currentBirthday - currentDay) / (1000 * 60 * 60 * 24));
    } else {
      // day is today
      return 0;
    }
  }

}
