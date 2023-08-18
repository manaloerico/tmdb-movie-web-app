import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { HttpClientModule } from '@angular/common/http';
import {  
  CastCardModule,
  DiscoverModule,
  GenreModule,
  MovieCardModule,
  MovieModule,
  MovieListModule
} from 'tmdb-movie';
import { MovieComponent } from './movie/movie.component';
import { PosterComponent } from './movie/components/poster/poster.component';
import { CastComponent } from './movie/components/cast/cast.component';   
import { CarouselComponent } from './home/carousel/carousel.component';
import { HomeHeaderRightSectionComponent } from './home/home-header-right-section/home-header-right-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    FeatureComponent,
    MovieComponent,
    PosterComponent,
    CastComponent,
    CarouselComponent,
    HomeHeaderRightSectionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FeatureRoutingModule,
    AppMaterialModule,
    DiscoverModule,
    GenreModule,
    MovieListModule,
    MovieCardModule,
    MovieModule,
    CastCardModule
  ],
})
export class FeatureModule {}
