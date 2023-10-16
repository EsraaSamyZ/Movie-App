import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RecommendatinsComponent } from './recommendatins/recommendatins.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MovieDetailsComponent, RecommendatinsComponent],
  imports: [CommonModule, NgbModule],
})
export class DetailsModule {}
