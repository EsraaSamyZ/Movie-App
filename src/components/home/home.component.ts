import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/themovieAPI.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  movies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(data => {
      this.movies = data.results;
      console.log(this.movies)
      this.movies.forEach(movie => {
        movie.img = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
      });
    });
  }

}
