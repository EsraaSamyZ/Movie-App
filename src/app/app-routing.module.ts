import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from '../components/details/movie-details/movie-details.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies/:id', component: MovieDetailsComponent }, // Movie Detail Route
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
