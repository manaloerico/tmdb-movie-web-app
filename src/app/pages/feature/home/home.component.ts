import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, combineLatestWith, forkJoin, map, take } from 'rxjs';
import {
  DiscoverResults,
  DiscoverService,
  MovieListService,
  MovieResults,
  NowPlayingResults,
  PopularResults,
  TopRatedResults,
  UpComingResults,
} from 'tmdb-movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  nowPlaying$: Observable<MovieResults[]> = this.movieListService
    .nowPlaying()
    .pipe(map((result: NowPlayingResults) => result.results));

  popular$: Observable<MovieResults[]> = this.movieListService
    .popular()
    .pipe(map((result: PopularResults) => result.results));
  topRated$: Observable<MovieResults[]> = this.movieListService
    .topRated()
    .pipe(map((result: TopRatedResults) => result.results));
  upComing$: Observable<MovieResults[]> = this.movieListService
    .upComing()
    .pipe(map((result: UpComingResults) => result.results));
  movieList$ = forkJoin([
    this.nowPlaying$,
    this.popular$,
    this.topRated$,
    this.upComing$,
  ]).pipe(
    map(([nowPlaying, popular, topRated, upComing]) => {
      return { nowPlaying, popular, topRated, upComing };
    })
  );
  movieNowPlaying$: Observable<MovieResults[]> = this.nowPlaying$.pipe(
    map((res) => {
      return res.filter((_, i) => i < 3);
    })
  );
  dicoverList$: Observable<MovieResults[]> = this.discoverService
    .getDiscoverMovie()
    .pipe(
      map((result: DiscoverResults) => result.results.filter((_, i) => i < 10))
    );
  sidePoster$: Observable<MovieResults[]> = this.discoverService
    .getDiscoverMovie()
    .pipe(
      map((result: DiscoverResults) => result.results.filter((_, i) => i < 3))
    );
  poster$: Observable<MovieResults[]> = this.nowPlaying$.pipe(
    map((res) => {
      return res.filter((_, i) => i < 5);
    })
  );
  constructor(
    private discoverService: DiscoverService,
    private movieListService: MovieListService,
    private router: Router
  ) {}
  onCardClick(movie: any): void {
    this.router.navigate([
      `/movie/${movie.id}-${movie.original_title
        .toLowerCase()
        .replace(/[^A-Z0-9]+/gi, '-')}`,
    ]);
  }

  // private getMovieWithGenre(genres: any): Observable<any> {
  //   return this.discoverService.getDiscoverMovie().pipe(
  //     map((result: any) => {
  //       const newResult = { ...result };
  //       newResult.results = newResult.results.map((res: any) => {
  //         const newMovie = { ...res };
  //         newMovie['genres'] = newMovie.genre_ids.map(
  //           (g: number) => genres.find((x: any) => x.id === g).name
  //         );
  //         return newMovie;
  //       });
  //       return newResult;
  //     })
  //   );
  // }
}
