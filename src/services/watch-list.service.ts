import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interface/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  private favouritMovies = new BehaviorSubject<any>([]);
  private favouritMoviesList:Movie[]= []

  constructor() { }
  getFavouritMovies(){
    return this.favouritMovies.asObservable()
  }
  // AddtoWatchList(movie : Movie){
  //   this.favouritMoviesList.push(movie)
  //   this.favouritMovies.next(this.favouritMoviesList)
  // }

  AddtoWatchList(movie: Movie) {
    const index = this.favouritMoviesList.findIndex((m) => m.id === movie.id);
  
    if (index === -1) {
      this.favouritMoviesList.push(movie);
    } else {
      this.favouritMoviesList.splice(index, 1);
    }
  
    this.favouritMovies.next(this.favouritMoviesList);
  }
}
