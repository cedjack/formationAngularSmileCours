import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { MoviesComponent } from './pages/movies/movies.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TheatersComponent } from './pages/theaters/theaters.component';
import { TheaterComponent } from './pages/theater/theater.component';
import { TheatersListComponent } from './components/theaters-list/theaters-list.component';
import { TheaterDetailsComponent } from './components/theater-details/theater-details.component';

@NgModule({
  declarations: [MoviesComponent,
    MoviesListComponent,
    MovieComponent,
    MovieDetailsComponent,
    TheatersComponent,
    TheaterComponent,
    TheatersListComponent,
    TheaterDetailsComponent],
  imports: [
    CommonModule,
    CinemaRoutingModule
  ],
  exports: [MoviesComponent]
})
export class CinemaModule { }
