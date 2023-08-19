import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MovieResults } from 'tmdb-movie';

@Component({
  selector: 'movie-now-playing',
  templateUrl: './movie-now-playing.component.html',
  styleUrls: ['./movie-now-playing.component.scss']
})
export class MovieNowPlayingComponent implements OnInit {
  private _data: MovieResults[] = [];
  @Output() onCardClick = new EventEmitter();
  @Input() number:number = 1;
  @Input() title:string = '';
  @Input() set data(data: MovieResults[] | null) {
    this._data = data ?? [];
  }
  get data(): MovieResults[] {
    return this._data;
  }
  constructor() { }

  ngOnInit() {
  }
  toggleChange(value:MatButtonToggleChange):void{
    console.log(value);
  }

}
