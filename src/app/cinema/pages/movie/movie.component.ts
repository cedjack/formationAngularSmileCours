import { Component, OnInit } from '@angular/core';
import { Movies } from '../../shared/movies';
import { CinemaService } from '../../shared/cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  template: `
    <app-movie-details *ngIf="movies" [movie]="movies"></app-movie-details>
  `,
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movies;

  constructor(private cinemaService: CinemaService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id') || '1', 10);

    this.cinemaService.getMovie(id).subscribe(
      (result) => {
        this.movies = result;
      },
      (error) => {
        console.log('HORS Ligne, JSON invalid');
      });
  }

}
