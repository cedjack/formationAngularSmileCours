import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-slideshow>
        <app-slide><img src="static/images/movies/starwars.jpg" alt=""></app-slide>
				<app-slide><img src="static/images/movies/coco.jpg" alt=""></app-slide>
				<app-slide><img src="static/images/movies/spiderman.jpg" alt=""></app-slide>
    </app-slideshow>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'men';
}
