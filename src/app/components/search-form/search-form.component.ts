import { Component, OnInit } from '@angular/core';
import { MovieSearchResponse, Result } from 'src/app/interfaces/movie-search-response';
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

  ngOnInit(): void {
  }
  
  searchMovie(){
    this.apiServices.getMovies().subscribe((m)=>{
      this.movieResutls = m.results;
    });
  }
}
