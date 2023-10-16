import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  private favouritMovies = new BehaviorSubject<any>([]);
  private favouritMoviesList:any= []

  constructor() { }
  getFavouritMovies(){
    return this.favouritMovies.asObservable()
  }
}
