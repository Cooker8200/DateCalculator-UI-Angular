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
  constructor(private dataService: DataService) { }

  title: string = 'Date Calculator';
  dates: IDate[] = [];

  ngOnInit(): void {
    this.dataService.getAllDates().subscribe(resp => {
      this.dates = JSON.parse(resp.body);
    })
  }
}
