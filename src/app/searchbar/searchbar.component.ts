import { Component } from '@angular/core';
import { Movie } from 'src/interface/movie.interface';
import { MovieService } from 'src/services/themovieAPI.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  constructor(private movieService: MovieService) {}
  movies: Movie[] = [];
  search() {
    this.movieService.getPopularMovies().subscribe((data) => {
      this.movies = data.results;
      console.log(this.movies);
      // data.forEach((element) => {});
    });
  }
}
