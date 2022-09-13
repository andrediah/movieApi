import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from 'src/app/interfaces/movie-search-response';
import { MovieStorageService } from 'src/app/services/movie-storage.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(private storage:MovieStorageService) { }
  //watchListMovies:Result[] = [];

  watchListMovies$:Observable<Result[]> | undefined;

  ngOnInit(): void {
    this.watchListMovies$ = this.storage.getWatchlistData();
    this.watchListMovies$.subscribe((s)=>{
      console.log(s);
    });
  }
  removeWatchListItem(id:string){
    console.log(id);
    this.storage.removeWatchlistData(id);
    this.watchListMovies$ = this.storage.getWatchlistData();
  }
}
