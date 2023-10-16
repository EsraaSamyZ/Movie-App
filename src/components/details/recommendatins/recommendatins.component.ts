import { Component } from '@angular/core';
import { MovieService } from 'src/services/themovieAPI.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Movie } from 'src/interface/movie.interface';

@Component({
  selector: 'app-recommendatins',
  templateUrl: './recommendatins.component.html',
  styleUrls: ['./recommendatins.component.css'],
})
export class RecommendatinsComponent {
  recommended!: Array<Movie>;
  anotherimg!: URL;
  constructor(
    private MOVIESERVICE: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
        Object.assign(mo, {
          anotherimg: `https://image.tmdb.org/t/p/w500/${mo.backdrop_path}`,
        });
      });
    });
  }
  routing(id: number) {
    console.log('fail');
    this.router.navigate(['/movies', id]);
    console.log('hello');
  }
}
