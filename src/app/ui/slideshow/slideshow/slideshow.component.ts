import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-slideshow',
  template: `
    <div id="slideshow">
        <div id="slides" [style.transform]="transform" [style.transitionDuration.ms]="speed" (transitionend)="start()">
          <ng-content></ng-content>
        </div>
        <app-pagination (pagination)="onPagination($event)"></app-pagination>
      </div>
  `,
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  /** Delay between each automatic move */
  @Input() delay = 5000;
  /** Speed for one move */
  @Input() speed = 1000;
  /** Total of slides */
  total = 0;
  /** Currently displayed slide */
  current = 1;
  /** Reference to the current timer */
  timer = 0;

  transform = '';

  @ContentChildren(SlideComponent) slides: QueryList<SlideComponent>;

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.total = this.slides.length;
    this.start();
  }

  /** Launches the automatic delay */
  start() {

    /* Stop any current timer to avoid concurrent timers */
    this.stop();

    /* Launches a new timer and then move */
    this.timer = window.setTimeout(() => {
      this.move();
    }, this.delay);

  }

  /** Stops the current timeout */
  stop() {

    window.clearTimeout(this.timer);

  }

  /**
   * Move to another slide
   * @param next Position of the destination slide
   */
  move(next = (this.current < this.total) ? (this.current + 1) : 1) {

    /* Translate the slides container */
    this.transform = `translateX(${(next - 1) * -100}%)`;

    /* Update the new current position */
    this.current = next;

    /* The transitionend event (registered in constructor) will relaunch a new timer */

  }

  /** Pagination listener handler */
  onPaginationClick(event: MouseEvent) {

    /* Stop the automatic delay as the user interacts */
    this.stop();

    /* Retrieves the page number in custom attributes */
    let page = Number.parseInt((event.target as HTMLElement).dataset.page || '1', 10);

    /* Move to the wanted slide */
    this.move(page);

  }

  onPagination(page: number) {
    this.stop();
    this.move(page);
  }
}
