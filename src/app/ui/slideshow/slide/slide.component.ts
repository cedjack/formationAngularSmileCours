import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  template: `
   <ng-content></ng-content>
  `,
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
