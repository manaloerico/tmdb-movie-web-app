import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent {
  @Input() data:any;
  backdropPath(url:string):string{
    return `url('https://image.tmdb.org/t/p/w300_and_h450_bestv2/t/p/w1920_and_h800_multi_faces${url}')`
  }
}
