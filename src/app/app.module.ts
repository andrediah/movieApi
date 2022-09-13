import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { MovieResultComponent } from './components/movie-result/movie-result.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ParameterInterceptor } from './intercentor/parameter.interceptor';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { HeaderInterceptor } from './intercentor/header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    MovieResultComponent,
    NotFoundComponent,
    MovieDetailComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,   
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ParameterInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi:true},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
