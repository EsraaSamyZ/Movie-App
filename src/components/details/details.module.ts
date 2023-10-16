import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RecommendatinsComponent } from './recommendatins/recommendatins.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieDetailsComponent, RecommendatinsComponent],
  imports: [CommonModule, NgbModule, DatePipe, FormsModule, RouterModule],
})
export class DetailsModule {}
