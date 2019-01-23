import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theater } from './theater.model';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  constructor(private http: HttpClient) { }

  getTheaters() {
    return this.http.get<Theater[]>(`/api/cinema/theaters`);
  }

  getTheater(id: number) {
    return this.http.get<Theater>(`/api/cinema/theater/${id}`);
  }
}
