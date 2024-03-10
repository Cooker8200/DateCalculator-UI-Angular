import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDate } from 'src/interfaces/IDate';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  constructor(private http: HttpClient) {

  }

  dates: any[] = [];

  getAllDates(): Observable<any> {
    return this.http.get(environment.datesUrl);
  };

  putNewDate(newDate: IDate): Observable<any> {
    return this.http.put(environment.datesUrl, JSON.stringify(newDate));
  };

  deleteDate(dateName: string): Observable<any> {
    const payload = {
      name: dateName,
    };
    return this.http.delete(environment.datesUrl, { body: JSON.stringify(payload) });
  }
}
