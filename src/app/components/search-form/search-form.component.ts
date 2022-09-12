import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/enums/genre';
import { MovieSearchResponse, Result } from 'src/app/interfaces/movie-search-response';
import { MovieGenre } from 'src/app/interfaces/moviegenre';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private apiServices:MovieApiService) { }
  movieResutls: Result[] = [];
  movieSearch:string = '';
  genreFilter:string = '';
  runtimeFilter:number = 0;
  ratingFilter:number = 0;
  useFilter:boolean = false;
  enumKeys:any = Object.values(Genre).filter(value => typeof value === 'string');
  genreData$:Observable<MovieGenre> | undefined;
  Genre = Genre;

  ngOnInit(): void {
    this.genreData$ = this.apiServices.getMovieGenre();
  }
  
  searchMovie(){
    this.movieResutls = [];
    let parms:string = '';

    if(this.useFilter){      
      if (this.genreFilter !== ''){
        parms += '&with_genres=' + this.genreFilter ;
      }

      if (this.ratingFilter !== 0){
        parms += '&vote_average.gte=' + this.ratingFilter ;
      }

      if (this.runtimeFilter !== 0){
        parms += '&with_runtime.gte=' + this.runtimeFilter ;
      }

      this.apiServices.getMovies(parms).subscribe((m)=>{
        this.movieResutls = m.results;
      });
    } else {
      if (this.movieSearch !== '')
      parms += '&query=' +this.movieSearch;
      this.apiServices.getMovieSearch(parms).subscribe((m)=>{
        this.movieResutls = m.results;
      });

    }

    
  }

  onSelectedGenreType(value:string): void {   
		this.genreFilter = value;
	}  
  toggleFilter():void{
    this.useFilter = !this.useFilter;
  }
}
