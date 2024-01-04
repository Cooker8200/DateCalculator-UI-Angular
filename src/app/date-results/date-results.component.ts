import { Component, Input } from '@angular/core';

@Component({
  selector: 'date-results',
  templateUrl: './date-results.component.html',
  styleUrls: ['./date-results.component.css']
})
export class DateResultsComponent {
  @Input() selectedOption?: string;
}
