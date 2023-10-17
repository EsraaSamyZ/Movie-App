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
  searchvalue = ' ';
  searchedvalue!: any;
  searchedmovie!: any;
  Movie!: any;
  moveees!: any;
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.fetchmovies();
  }
  mychild(val: any) {
    this.searchedvalue = val;
    if (this.searchedvalue) {
      console.log(this.searchedvalue);
      this.getonemovie(this.searchedvalue);
    } else this.fetchmovies();
  }
  mo!: any;

  getonemovie(searchedvalue: string) {
    this.movieService.getPopularMovies().subscribe((data) => {
      this.moveees = data.results;
      this.mo = this.moveees.find((mov: any) => {
        return mov.title.includes(searchedvalue);
      });
      console.log(this.mo);
      this.movieService.getmovie(this.mo.title).subscribe((data: any) => {
        this.movies = data.results;
        console.log(this.movies);
      });
    });
  }
  //

  fetchmovies() {
    this.movieService.getPopularMovies().subscribe((data) => {
      this.movies = data.results.slice(0, 12);
      // console.log(this.movies)
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
