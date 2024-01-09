import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IDate } from 'src/interfaces/IDate';

@Component({
  selector: 'date-results',
  templateUrl: './date-results.component.html',
  styleUrls: ['./date-results.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DateResultsComponent {
  @Input() selectedDate?: IDate;
  daysToSelectedDate?: number;
  dateMessage?: string;

  ngOnChanges(): void {
    const days = this.calculateDayDifference(this.selectedDate as IDate);
    this.daysToSelectedDate = days
    this.dateMessage = this.renderDateMessage(days);
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

  renderDateMessage(days: number): string {
    if (days === 0) {
      return this.selectedDate?.type === 'birthday' ?
        `It is ${this.selectedDate.name}'s birthday!  HAPPY BIRTHDAY!!!`
        :
        `It is ${this.selectedDate?.name}!  Let's Celebrate!!!`
    } else {
      return this.selectedDate?.type === 'birthday' ?
      `${this.selectedDate.name} has ${days} days until their birthday on ${this.selectedDate.date.substring(0, this.selectedDate.date.lastIndexOf(' '))}!`
      :
      `${this.selectedDate?.name} is ${days} days away on ${this.selectedDate?.date}!`
    }
  }

}
