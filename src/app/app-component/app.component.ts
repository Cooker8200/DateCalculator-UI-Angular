import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { IDate } from 'src/interfaces/IDate';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: DataService) {

  }

  title: string = 'Date Calculator';
  birthdays: IDate[] = [];
  holidays: IDate[] = [];
  otherDates: IDate[] = [];

  ngOnInit(): void {
    this.dataService.getAllDates().subscribe(resp => {
      const dates: IDate[] = JSON.parse(resp.body);
      const birthdays = orderBy(dates.filter(date => date.type === 'birthday'), 'name');
      const holidays = orderBy(dates.filter(date => date.type === 'holiday'), 'name');
      const otherDates = orderBy(dates.filter(date => date.type === 'other'), 'name');

      this.birthdays = birthdays;
      this.holidays = holidays;
      this.otherDates = otherDates;
    })
  }
}
