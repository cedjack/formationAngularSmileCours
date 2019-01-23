import { Component, OnInit } from '@angular/core';
import { TheaterService } from '../../shared/theater.service';
import { ActivatedRoute } from '@angular/router';
import { Theater } from '../../shared/theater.model';

@Component({
  selector: 'app-theater',
  template: `
    <app-theater-details *ngIf=[theater] [theater]="theater"></app-theater-details>
  `,
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {

  theater: Theater;

  constructor(private theaterService: TheaterService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id') || '1', 10);

    this.theaterService.getTheater(id).subscribe(
      (result) => {
        this.theater = result;
      },
      (error) => {
        console.log('Erreur recup theater');
      }
    );
  }

}
