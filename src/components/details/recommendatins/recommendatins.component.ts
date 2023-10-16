import { Component } from '@angular/core';
import { MovieService } from 'src/services/themovieAPI.service';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/interface/movie.interface';

@Component({
  selector: 'app-recommendatins',
  templateUrl: './recommendatins.component.html',
  styleUrls: ['./recommendatins.component.css'],
})
export class RecommendatinsComponent {
  recommended!: Array<Movie>;
  constructor(
    private MOVIESERVICE: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}
  id!: number;
  ngOnInit() {
    this.MOVIESERVICE.getRecommendedMovies(
      this.activatedRoute.snapshot.params['id']
    ).subscribe((dat) => {
      this.recommended = dat.results;
      console.log(this.recommended);
      this.recommended.forEach((mo: Movie) => {
        mo.img = `https://image.tmdb.org/t/p/w500/${mo.poster_path}`;
      });
    });
  }
}
