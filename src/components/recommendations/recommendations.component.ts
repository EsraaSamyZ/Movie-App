import { Component, Input } from '@angular/core';
import { MovieService } from 'src/services/themovieAPI.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/interface/movie.interface';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
})

export class RecommendationsComponent {
  movies!: Movie[];
  anotherimg!: URL;
  @Input() movieID!: number;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
  ) {}
  id!: number;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.movieID = +params['id'];
      this.fetchRecommendedMovies();
    });
  }

  fetchRecommendedMovies(): void {
    this.movieService.getRecommendedMovies(this.movieID).subscribe((data) => {
      this.movies = data.results.slice(0, 6);
      this.movies.forEach((movie) => {
        if (movie.poster_path !== null) {
          movie.img = `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`;
        } else {
          movie.img = 'https://placehold.co/370x566';
        }
      });
    });
  }

}
