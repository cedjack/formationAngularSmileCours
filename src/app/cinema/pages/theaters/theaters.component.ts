import { Component, OnInit } from '@angular/core';
import { Theater } from '../../shared/theater.model';
import { TheaterService } from '../../shared/theater.service';

@Component({
  selector: 'app-theaters',
  template: `
    <app-theaters-list *ngIf="theaters" [theaters]="theaters"></app-theaters-list>
  `,
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {

  theaters: Theater[] = [];

  constructor(private theaterService: TheaterService) { }

  ngOnInit() {
    this.theaterService.getTheaters().subscribe(
      (result) => {
        this.theaters = result;
      },
      (error) => {
        console.log('ERREUR');
      }
    );
  }

}
