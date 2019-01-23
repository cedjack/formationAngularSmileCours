import { Component, OnInit, Input } from '@angular/core';
import { Theater } from '../../shared/theater.model';

@Component({
  selector: 'app-theater-details',
  template: `
    <a [routerLink]="['/cinema', 'theaters']" >Retour liste</a>
    <div>
      <img [src]="theater.logoSrc">
      <h1>{{theater.title}}</h1>
      <p>{{theater.address}}</p>
    </div>
  `,
  styleUrls: ['./theater-details.component.css']
})
export class TheaterDetailsComponent implements OnInit {

  @Input() theater: Theater;
  constructor() { }

  ngOnInit() {
  }

}
