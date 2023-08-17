import { Component, OnInit } from '@angular/core';
import { DiscoverService } from 'tmdb-movie';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor(
    private d:DiscoverService
  ) { }

  ngOnInit(): void {
  }

}
