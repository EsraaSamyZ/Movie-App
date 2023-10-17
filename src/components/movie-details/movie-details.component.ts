import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/services/themovieAPI.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from '../../interface/movie.interface';
import { WatchListService } from 'src/services/watch-list.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movie: any = [];
  @Input() movieID!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private themovieApi: MovieService,
    private WatchListService: WatchListService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.movieID = +params['id'];

      this.themovieApi.getMovieDetails(this.movieID).subscribe((data) => {
        this.movie = data;
        if (this.movie.poster_path !== null) {
          this.movie.img = `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${this.movie.poster_path}`;
        } else {
          this.movie.img = 'https://placehold.co/370x566';
        }
        this.movie.vote = this.movie.vote_average / 2;
      });
    });
  }

  addToWatchList(favMovie: Movie) {
    this.WatchListService.AddtoWatchList(favMovie);
  }

  isFavoriteMovie(favMovie: Movie): boolean {
    let isFavorite = false;
    this.WatchListService.getFavouritMovies().subscribe(
      (favoriteMovies: Movie[]) => {
        isFavorite = favoriteMovies.some((movie) => movie.id === favMovie.id);
      }
    );
    return isFavorite;
  }
}
