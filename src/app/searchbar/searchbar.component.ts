import { Component } from '@angular/core';
import { Movie } from 'src/interface/movie.interface';
import { MovieService } from 'src/services/themovieAPI.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  searchedmovie!: any;
  value!: any;
  constructor(private movieService: MovieService) {}
  movies: Movie[] = [];
  Movie!: object;
  search(val: string) {
    this.movieService.getPopularMovies().subscribe((data) => {
      this.movies = data.results;
      console.log(this.movies);
      this.searchedmovie = this.movies.find((mov) => mov.title.includes(val));
      console.log(this.searchedmovie);
      this.movieService
        .getmovie(this.searchedmovie.title)
        .subscribe((data: any) => {
          this.Movie = data.results;
          console.log(this.Movie);
        });
    });
  }
}
