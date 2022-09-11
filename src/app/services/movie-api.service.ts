import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MoveieDetailResponse } from '../interfaces/movie-detail-response';
import { MovieSearchResponse } from '../interfaces/movie-search-response';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private httpClient:HttpClient) { }
  getMovies(): Observable<MovieSearchResponse>{
    let returnVar = this.httpClient.get<MovieSearchResponse>(environment.apiEndpoint);
    return returnVar;
  }
  getMovieById(movieId:number): Observable<MoveieDetailResponse>{
    let returnVar = this.httpClient.get<MoveieDetailResponse>(environment.movieApiEndpoint + movieId);
    return returnVar;
  }
}
