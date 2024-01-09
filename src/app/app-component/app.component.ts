import { Component } from '@angular/core';
import { DataService } from '../persistence/data.service';
import { IDate } from 'src/interfaces/IDate';
import { DateSelectorComponent } from '../date-selector/date-selector.component';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [DateSelectorComponent, AdminDialogComponent]
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
