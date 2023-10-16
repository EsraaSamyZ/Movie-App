import { Component, Input } from '@angular/core';
import { WatchListService } from '../../services/watch-list.service';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';
import { Movie } from '../../interface/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movies!: Movie[];

  constructor(private WatchListService: WatchListService) {}

  ngOnInit() {}

  addToWatchList(favMovie: Movie) {
    this.WatchListService.AddtoWatchList(favMovie);
  }
}
