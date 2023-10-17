import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeComponent } from 'src/components/home/home.component';
import { WatchListComponent } from 'src/components/watch-list/watch-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';
import { RecommendationsComponent } from '../components/recommendations/recommendations.component';

import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatePipe } from '../pipes/custom-date.pipe';
import { DetailsPageComponent } from '../components/details-page/details-page.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WatchListComponent,
    MovieCardComponent,
    CustomDatePipe,
    MovieDetailsComponent,
    RecommendationsComponent,
    DetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    DatePipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
