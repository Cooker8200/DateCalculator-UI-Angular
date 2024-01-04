import { Component } from '@angular/core';

@Component({
  selector: 'date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent {
  selectedOption: string = '';

  onChange(event: any): void {
    const name = event.target.value;
    this.selectedOption = name;
    console.log(name);
  }
}
