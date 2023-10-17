import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';
import { HomeComponent } from '../components/home/home.component';
import { WatchListComponent } from '../components/watch-list/watch-list.component';
import { DetailsPageComponent } from '../components/details-page/details-page.component';

const routes: Routes = [
  // { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'movies/:id', component: DetailsPageComponent},
  { path:'favmovies' ,component :WatchListComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
