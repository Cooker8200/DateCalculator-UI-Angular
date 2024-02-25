import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { localGoAwsUrl } from 'src/constants/Urls';
import { IDate } from 'src/interfaces/IDate';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {

  }

  dates: any[] = [];

  getAllDates(): Observable<any> {
    return this.http.get(localGoAwsUrl, { headers: {"Access-Control-Allow-Origin": "http://localhost:3001/"} });
  };

  putNewDate(newDate: IDate): Observable<any> {
    return this.http.put(localGoAwsUrl, JSON.stringify(newDate));
  };

  deleteDate(dateName: string): Observable<any> {
    const payload = {
      name: dateName,
    };
    return this.http.delete(localGoAwsUrl, { body: JSON.stringify(payload) });
  }
}
