import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from 'src/app/interfaces/movie-search-response';

@Component({
  selector: 'app-movie-result',
  templateUrl: './movie-result.component.html',
  styleUrls: ['./movie-result.component.css']
})

export class MovieResultComponent implements OnInit {

  constructor() { }
  @Input() movie:Result | undefined;
  @Output() addWatchlistItemEvent = new EventEmitter<Result>();

  ngOnInit(): void {

  }

  addtoWatchList(movie:Result | undefined):void{
    this.addWatchlistItemEvent.emit(movie);
  }
}
