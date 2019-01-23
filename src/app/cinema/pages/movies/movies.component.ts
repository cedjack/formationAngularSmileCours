import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../shared/cinema.service';
import { Movies } from '../../shared/movies';

@Component({
  selector: 'app-movies',
  template: `
    <app-movies-list *ngIf="movies" [movies]= "movies"></app-movies-list>
  `,
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movies[];

  constructor(private cinemaService: CinemaService) { }

  ngOnInit() {
    this.cinemaService.getMovies().subscribe(
      (result) => {
        this.movies = result;
      },
      (error) => {
        console.log('HORS Ligne, JSON invalid');
      });
  }
}
