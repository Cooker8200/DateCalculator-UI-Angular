import { Component, Input } from '@angular/core';

@Component({
  selector: 'date-results',
  templateUrl: './date-results.component.html',
  styleUrls: ['./date-results.component.css']
})
export class DateResultsComponent {
  @Input() selectedDate?: string;
  daysToSelectedDate?: number;
  dateMessage?: string;

  ngOnInit (): void {
    this.daysToSelectedDate = 0;
    this.dateMessage = 'Happy Birthday!'
  }
}
