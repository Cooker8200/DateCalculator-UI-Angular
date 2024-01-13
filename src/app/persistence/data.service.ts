import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datesUrl } from 'src/constants/Urls';
import { IDate } from 'src/interfaces/IDate';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {

  }

  dates: any[] = [];

  getAllDates(): Observable<any> {
    return this.http.get(datesUrl);
  };

  putNewDate(newDate: IDate): Observable<any> {
    return this.http.put(datesUrl, JSON.stringify(newDate));
  };

  deleteDate(dateName: string): Observable<any> {
    const payload = {
      name: dateName,
    };
    return this.http.post(datesUrl, JSON.stringify(payload));
  }
}
