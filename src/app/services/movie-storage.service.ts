import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../interfaces/movie-search-response';


@Injectable({
  providedIn: 'root'
})
export class MovieStorageService {

  constructor(private httpClient:HttpClient) { }
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  public saveWatchlistData(cart: Result[]) {
    let value = JSON.stringify(cart);

    localStorage.setItem('key', value);
  }

  public addWatchlistData(item: Result) {
    // let value = JSON.stringify(item);
    // console.log(value);
    this.httpClient.post(environment.restdbApi,item)
      .subscribe((d)=>{  
            console.log(d);
      })   ;    

  }
  public removeWatchlistData(id: string) {
    // let value = JSON.stringify(item);
    // console.log(value);
    let path = environment.restdbApi + '/' + id;
     console.log(path);
    this.httpClient.delete(path)
    .subscribe((d)=>{      console.log(d);    })
    ;    

  }

  getWatchlistData(): Observable<Result[]>{
    let returnVar = this.httpClient.get<Result[]>(environment.restdbApi);
    returnVar.subscribe((s)=>{
      //console.log(s);
      //let cart:Result[] = JSON.parse(s);
    })
    return returnVar;
  }

  // public getWatchlistData():Result[] {
    
  //   // let value = localStorage.getItem('key');
  //   // if (value !== null){
  //   //   let cart:Result[] = JSON.parse(value);
  //   //   return cart;
  //   // }
  //   // let empty:Result[] = [];
  //   // return empty;

  // }
  public clearData() {
    localStorage.clear();
  }
  ngOnInit(): void {
    
   
  }
}
