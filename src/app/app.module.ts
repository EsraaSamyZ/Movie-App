import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeComponent } from 'src/components/home/home.component';
import { WatchListComponent } from 'src/components/watch-list/watch-list.component';
import { DetailsModule } from 'src/components/details/details.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';

import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatePipe } from '../pipes/custom-date.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WatchListComponent,
    MovieCardComponent,
    CustomDatePipe,
  ],
  imports: [
    BrowserModule,
    DetailsModule,
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
