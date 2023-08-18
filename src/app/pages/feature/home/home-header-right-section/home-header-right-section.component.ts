import { Component, Input, OnInit } from '@angular/core';
import { MovieResults } from 'tmdb-movie';
@Component({
  selector: 'tmdb-home-header-right-section',
  templateUrl: './home-header-right-section.component.html',
  styleUrls: ['./home-header-right-section.component.scss'],
})
export class HomeHeaderRightSectionComponent {
  @Input() data: MovieResults[] | null = [];
 
}
