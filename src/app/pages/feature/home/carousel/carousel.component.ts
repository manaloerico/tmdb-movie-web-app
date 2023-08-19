import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MovieResults } from 'tmdb-movie';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewChecked {
  

  @ViewChild('slider') slider!: ElementRef;
  private _data: MovieResults[] = [];
  @Input() number:number = 1;
  @Input() set data(data: MovieResults[] | null) {
    this._data = data ?? [];
  }
  get data(): MovieResults[] {
    return this._data;
  }
  sectionIndex: number = 0;
  ngAfterViewChecked(): void {
   this.slider.nativeElement.style.width = `${100 * this.data.length}%`;
  }
  swipe(direction: string): void {
    if (direction === 'left') {
      this.sectionIndex = this.sectionIndex > 0 ? this.sectionIndex - 1 : 0;
    } else {
      const max = (this.data.length - 1);
      this.sectionIndex = this.sectionIndex < max ? this.sectionIndex + 1 : max;
    }
    const translate = this.sectionIndex * -(100/this.data.length);
    this.slider.nativeElement.style.transform = `translate(${translate}%)`;
  }
}
