import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MovieResults } from 'tmdb-movie';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @ViewChild('slider') slider!: ElementRef;
  @Input() data: MovieResults[] | null = [];
  sectionIndex: number = 0;
  swipe(direction: string): void {
    if (direction === 'left') {
      this.sectionIndex = this.sectionIndex > 0 ? this.sectionIndex - 1 : 0;
    } else {
      this.sectionIndex = this.sectionIndex < 3 ? this.sectionIndex + 1 : 3;
    }
    const translate = this.sectionIndex * -25;
    this.slider.nativeElement.style.transform = `translate(${translate}%)`;
  }
}
