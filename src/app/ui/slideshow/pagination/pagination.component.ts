import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <ul id="pagination">
        <li *ngFor="let slide of slides; index as page" (click)="onClick(page+1)">
          {{page+1}}
        </li>
			</ul>
  `,
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() slides: any[];
  @Output() pagination = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClick(page: number) {
    this.pagination.emit(page);
  }

}
