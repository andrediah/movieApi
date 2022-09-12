import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MoveieDetailResponse } from '../interfaces/movie-detail-response';
import { MovieSearchResponse } from '../interfaces/movie-search-response';
import { MovieGenre } from '../interfaces/moviegenre';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private httpClient:HttpClient) { }
  getMovies(parms:string): Observable<MovieSearchResponse>{
    let returnVar = this.httpClient.get<MovieSearchResponse>(environment.apiEndpoint + parms);
    return returnVar;
  }
  getMovieById(movieId:number): Observable<MoveieDetailResponse>{
    let returnVar = this.httpClient.get<MoveieDetailResponse>(environment.movieApiEndpoint + movieId);
    return returnVar;
  }
  getMovieGenre(): Observable<MovieGenre>{
    let returnVar = this.httpClient.get<MovieGenre>(environment.movieGenreApiEndpoint);
    return returnVar;
  }

  getMovieSearch(parms:string): Observable<MovieSearchResponse>{
    let returnVar = this.httpClient.get<MovieSearchResponse>(environment.movieSearchApiEndpoint + parms);
    return returnVar;
  }
  
}
