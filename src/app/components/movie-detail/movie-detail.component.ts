import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoveieDetailResponse } from 'src/app/interfaces/movie-detail-response';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id:number = 0;
  movie:MoveieDetailResponse|undefined;

  constructor(private apiService:MovieApiService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
   let sub = this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.getMovieById();
    });
    sub.unsubscribe();
  }

  getMovieById():void{
      this.apiService.getMovieById(this.id).subscribe((m)=>{
        this.movie = m;
      });
  }

}
