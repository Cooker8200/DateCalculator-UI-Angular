import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IDate } from 'src/interfaces/IDate';

@Component({
  selector: 'admin-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dialog.component.html',
  styleUrl: './admin-dialog.component.css'
})
export class AdminDialogComponent {
  @Input() dates: IDate[] = []
  @Input() showDialog: boolean = false;

}
