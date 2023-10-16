import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/themovieAPI.service';
import {Movie} from '../../interface/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(data => {
      this.movies = data.results;
      console.log(this.movies)
      this.movies.forEach(movie => {
        movie.img = `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.backdrop_path}`;
      });
    });
  }

}
