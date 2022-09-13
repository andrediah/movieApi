import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

const routes: Routes = [
  {path:'search',component:SearchFormComponent},
  {path:'movie/:id',component:MovieDetailComponent},
  {path:'watchlist',component:WatchlistComponent},
  {path:'',redirectTo:'/search', pathMatch:'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
