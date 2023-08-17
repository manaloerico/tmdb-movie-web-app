import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap, map, combineLatest, combineLatestWith } from 'rxjs/operators';
import { MovieService } from 'tmdb-movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  movieId$:Observable<string> = this.activatedRoute.paramMap.pipe(map((movie:ParamMap)=>{
    return movie.get('id')?.split('-')[0] ?? '';
  }))
  movieDetails$:Observable<any> = this.getMovieDetails();
  constructor(
    private activatedRoute:ActivatedRoute,
    private movieService:MovieService
  ) { }
 

  private getMovieDetails():Observable<any>{
    return this.movieId$.pipe(
      switchMap((movieId:string)=>this.getAllDetails(movieId)),
      map(([details,cast])=>{
        return {details,cast};
      })) 
  }
  private getAllDetails(movieId:string):Observable<any>{
   return this.movieService.details(movieId).pipe(combineLatestWith(this.movieService.credits(movieId)))
  }

 

}
