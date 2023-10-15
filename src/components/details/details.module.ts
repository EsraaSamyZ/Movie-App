import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RecommendatinsComponent } from './recommendatins/recommendatins.component';



@NgModule({
  declarations: [
    MovieDetailsComponent,
    RecommendatinsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DetailsModule { }
