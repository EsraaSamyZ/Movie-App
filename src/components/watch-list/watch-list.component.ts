import { Component } from '@angular/core';
import { WatchListService } from 'src/services/watch-list.service';
import { Movie } from '../../interface/movie.interface';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent {
  favMovies: Movie[] = [];
  constructor(private WatchListService: WatchListService) {}
  ngOnInit() {
    this.WatchListService.getFavouritMovies().subscribe((res) => {
      this.favMovies = res;
    });
  }

  addToWatchList(favMovie: Movie) {
    this.WatchListService.AddtoWatchList(favMovie);
  }

  isFavoriteMovie(favMovie: Movie): boolean {
    let isFavorite = false;
    this.WatchListService.getFavouritMovies().subscribe(
      (favoriteMovies: Movie[]) => {
        isFavorite = favoriteMovies.some((movie) => movie.id === favMovie.id);
      }
    );
    return isFavorite;
  }
}
