import { Component, Output } from '@angular/core';
import { Movie } from 'src/interface/movie.interface';
import { MovieService } from 'src/services/themovieAPI.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  searchedmovie!: any;
  value!: any;
  constructor(private movieService: MovieService) {}

  @Output() myData = new EventEmitter<any>();

  search(val: string) {
    this.value = val;
    this.myData.emit(this.value);
  }
}
