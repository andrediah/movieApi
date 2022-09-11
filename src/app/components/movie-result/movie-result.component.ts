import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/movie-search-response';

@Component({
  selector: 'app-movie-result',
  templateUrl: './movie-result.component.html',
  styleUrls: ['./movie-result.component.css']
})
export class MovieResultComponent implements OnInit {

  constructor() { }
  @Input() movie:Result | undefined;
  ngOnInit(): void {

  }

}
