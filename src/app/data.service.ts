import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datesUrl } from 'src/constants/Urls';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {

  }

  dates: any[] = [];

  getAllDates(): Observable<any> {
    console.log('getting data');
    return this.http.get(datesUrl);
  }
}
