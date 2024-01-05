import { Component, Input } from '@angular/core';
import { IDate } from 'src/interfaces/IDate';

@Component({
  selector: 'date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent {
  @Input() dates?: IDate[];
  selectedDate: string = '';

  onChange(event: any): void {
    const name = event.target.value;
    this.selectedDate = name;
  }
}
