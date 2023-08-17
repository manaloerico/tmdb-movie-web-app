import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
})
export class CastComponent {
  @Input() data: any;
}
