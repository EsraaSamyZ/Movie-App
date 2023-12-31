import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeComponent } from 'src/components/home/home.component';
import { WatchListComponent } from 'src/components/watch-list/watch-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { MovieDetailsComponent } from 'src/components/movie-details/movie-details.component';
import { RecommendationsComponent } from 'src/components/recommendations/recommendations.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsPageComponent } from '../components/details-page/details-page.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NotFountComponent } from 'src/components/not-fount/not-fount.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WatchListComponent,
    MovieCardComponent,
    RecommendationsComponent,
    DetailsPageComponent,
    SearchbarComponent,
    MovieDetailsComponent,
    NotFountComponent,
    PaginationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    DatePipe,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
