import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl: string = 'https://my-json-server.typicode.com/P1er0VL/TicketingDB';
  private http: HttpClient = inject(HttpClient);

  getTickets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tickets`);
  }

  constructor() { }
}
