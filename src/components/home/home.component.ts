import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/themovieAPI.service';
import { Movie } from '../../interface/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies: Movie[] = [];
  searchedvalue!: any;
  Movie!: any;
  moveees!: any;
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.fetchmovies();
  }
  mychild(val: any) {
    this.searchedvalue = val;
    if (this.searchedvalue) {
      this.getmovie(this.searchedvalue);
    } else this.fetchmovies();
  }

  getmovie(searchedvalue: string) {
    this.movieService.getmovie(searchedvalue).subscribe((data: any) => {
      this.movies = data.results;
      this.movies.forEach((movie) => {
        if (movie.poster_path !== null) {
          movie.img = `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`;
        } else {
          movie.img = 'https://placehold.co/370x566';
        }
      });
    });
  }

  fetchmovies() {
    this.movieService.getPopularMovies().subscribe((data) => {
      this.movies = data.results.slice(0, 12);
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
