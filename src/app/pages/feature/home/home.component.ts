import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { Observable, map } from 'rxjs';
import { DiscoverService } from 'tmdb-movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  movieList$: Observable<any> = this.discoverService
    .getDiscoverMovie()
    .pipe(map((result: any) => result.results));

  constructor(
    private discoverService: DiscoverService,
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
