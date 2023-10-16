import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/services/themovieAPI.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/interface/movie.interface';
import { WatchListService } from 'src/services/watch-list.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movie: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private themovieApi: MovieService,
    private WatchListService: WatchListService
  ) {}
  ngOnInit() {
    this.movie = this.themovieApi
      .getMovieDetails(+this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.movie = data;
        this.movie.img = `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;

        this.movie.vote = this.movie.vote_average / 2;
      });
  }
  isFavoriteMovie(mov: Movie) {
    let isFavorite = false;

    this.WatchListService.getFavouritMovies().subscribe(
      (favoriteMovies: Movie[]) => {
        isFavorite = favoriteMovies.some((movie) => movie.id === mov.id);
        return isFavorite;
      }
    );
  }
  addToWatchList(favMovie: Movie) {
    this.WatchListService.AddtoWatchList(favMovie);
  }
}
