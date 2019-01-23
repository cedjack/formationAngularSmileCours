import { Injectable } from '@angular/core';
import { Movies } from './movies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<Movies[]>(`/api/cinema/movies`);
  }

  getMovie(id: number) {
    return this.http.get<Movies>(`/api/cinema/movie/${id}`);
  }
}
