import { Component } from '@angular/core';
import { DateService } from '../persistence/date.service';
import { IDate } from 'src/interfaces/IDate';
import { DateSelectorComponent } from '../date-selector/date-selector.component';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [DateSelectorComponent, AdminDialogComponent, MatIconModule]
})
export class AppComponent {
  constructor(private dateService: DateService, public dialog: MatDialog) { }

  title: string = 'Date Calculator';
  dates: IDate[] = [];

  ngOnInit(): void {
    this.dateService.getAllDates().subscribe(resp => {
      this.dates = JSON.parse(resp.body);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
      data: {
        dates: this.dates,
      }
    })

    dialogRef.afterClosed().subscribe(() => {
      this.dateService.getAllDates().subscribe(resp => {
        this.dates = JSON.parse((resp.body))
      })
    });
  };
}
