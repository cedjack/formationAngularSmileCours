import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../../shared/movies';

@Component({
  selector: 'app-movies-list',
  template: `
    <div *ngFor="let movie of movies">
      <img [src]="movie.imgSrc">
      <h2><a [routerLink]="['../movie', movie.id]">{{movie.title}}</a></h2>
    </div>
  `,
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @Input() movies: Movies[];

  constructor() { }

  ngOnInit() {
  }

}
