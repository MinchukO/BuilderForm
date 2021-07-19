import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class EventService {
  private _eventsUrl = 'http://localhost:3000/api/main';
  private _speciaEventslUrl = 'http://localhost:3000/api/special';

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.post<any>(this._eventsUrl, null);
  }
  getSpecialEvents() {
    return this.http.post<any>(this._speciaEventslUrl, null);
  }
}
