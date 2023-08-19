import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { DiscoverResults, DiscoverService, MovieListService, MovieResults } from 'tmdb-movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  movieNowPlaying$: Observable<MovieResults[]> = this.movieListService
    .nowPlaying()
    .pipe(
      map((res) => {
        return res.results.filter((_, i) => i < 3);
      })
    );
  movieList$: Observable<MovieResults[]> = this.discoverService
    .getDiscoverMovie()
    .pipe(map((result: DiscoverResults) => result.results));

  poster$: Observable<MovieResults[]> = this.movieList$.pipe(map((res)=>{
    return res.filter((_, i) => i < 5)
  }));
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
