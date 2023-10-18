import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/themovieAPI.service';
import { Movie } from '../../interface/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  searchedvalue!: any;
  currentPage: number = 1; // Current page
  totalPages: number = 1; // Total pages

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  mychild(val: any) {
    this.searchedvalue = val;
    if (this.searchedvalue) {
      this.searchMovies(this.searchedvalue);
    } else {
      this.fetchMovies();
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    // Reload data when page changes
    if (this.searchedvalue) {
      this.searchMovies(this.searchedvalue);
    } else {
      this.fetchMovies();
    }
  }

  searchMovies(searchedvalue: string) {
    this.movieService
      .searchMovies(searchedvalue, this.currentPage)
      .subscribe((data) => {
        this.movies = data.results;
        this.totalPages = data.total_pages;
        // ... Rest of your code for setting movie img paths
        this.movies.forEach((movie) => {
          if (movie.poster_path !== null) {
            movie.img = `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`;
          } else {
            movie.img = 'https://placehold.co/370x566';
          }
        });
      });
  }

  fetchMovies() {
    this.movieService.getPopularMovies(this.currentPage).subscribe((data) => {
      this.movies = data.results;
      this.totalPages = data.total_pages;
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
