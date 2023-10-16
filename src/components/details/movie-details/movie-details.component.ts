import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/services/themovieAPI.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movie: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private themovieApi: MovieService
  ) {}
  ngOnInit() {
    this.movie = this.themovieApi
      .getMovieDetails(+this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.movie = data;
        this.movie.img = `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
        console.log(this.movie);
        this.movie.vote = this.movie.vote_average / 2;
      });
  }
}
