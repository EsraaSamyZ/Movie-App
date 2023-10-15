import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from '../components/details/movie-details/movie-details.component';
import { HomeComponent } from '../components/home/home.component'; // Import the MovieDetailComponent

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: HomeComponent },
  { path: 'movies/:id', component: MovieDetailsComponent }, // Movie Detail Route
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class AppRoutingModule { }
