import { Component, OnInit, Input } from '@angular/core';
import { Theater } from '../../shared/theater.model';

@Component({
  selector: 'app-theaters-list',
  template: `
    <div *ngFor="let theater of theaters">
      <img [src]="theater.logoSrc">
      <h2><a [routerLink]="['../theater', theater.id]">{{theater.title}}</a></h2>
    </div>
  `,
  styleUrls: ['./theaters-list.component.css']
})
export class TheatersListComponent implements OnInit {

  @Input() theaters: Theater[];

  constructor() { }

  ngOnInit() {
  }

}
