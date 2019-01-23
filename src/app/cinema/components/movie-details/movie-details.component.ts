import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../../shared/movies';

@Component({
  selector: 'app-movie-details',
  template: `
    <h1>{{movie.title}}</h1>
    <p>{{movie.summary}}</p>
  `,
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: Movies;

  constructor() { }

  ngOnInit() {
  }

}
