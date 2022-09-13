import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/enums/genre';
import { MovieSearchResponse, Result } from 'src/app/interfaces/movie-search-response';
import { MovieGenre } from 'src/app/interfaces/moviegenre';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { MovieStorageService } from 'src/app/services/movie-storage.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private apiServices:MovieApiService, private storage:MovieStorageService) { }
  movieResponse:MovieSearchResponse| undefined;
  movieResutls: Result[] = [];
  movieSearch:string = '';
  genreFilter:string = '';
  runtimeFilter:number = 0;
  ratingFilter:number = 0;
  currentPage:number = 1;
  maxPage:number = 0;
  useFilter:boolean = false;
  enumKeys:any = Object.values(Genre).filter(value => typeof value === 'string');
  genreData$:Observable<MovieGenre> | undefined;
  Genre = Genre;

  ngOnInit(): void {
    this.genreData$ = this.apiServices.getMovieGenre();    
  }
  SubmitForm(){
    this.currentPage = 1;
    this.searchMovie();
  }

  searchMovie(){
    this.movieResutls = [];
    let parms:string = '&page=' + this.currentPage;

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
        this.movieResponse = m;
        this.movieResutls = this.movieResponse.results;
        this.maxPage = m.total_pages;

      });

    }    
  }

  onSelectedGenreType(value:string): void {   
		this.genreFilter = value;
	}  

  toggleFilter():void{
    this.useFilter = !this.useFilter;
  }

  nextPage():void{
    this.currentPage++;
    this.searchMovie();
  }

  previousPage():void{
    this.currentPage--;
    this.searchMovie();
  }

  addtoWatch(movie:Result):void{ 
    console.log(movie);
    
    this.storage.addWatchlistData(movie);
    // let watchlist = this.storage.getWatchlistData();
    // watchlist.push(movie);
    // this.storage.saveWatchlistData(watchlist);
    // console.log(watchlist);
  }
}
