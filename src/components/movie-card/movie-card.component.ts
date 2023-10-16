import { Component, Input } from '@angular/core';
import { WatchListService } from 'src/services/watch-list.service';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie: any;
  @Input() backdropImageUrl!: string;

  constructor(private WatchListService: WatchListService){

  }
  ngOnInit(){
  }
  addToWatchList(favMovie:any){
    this.WatchListService.AddtoWatchList(favMovie)
  }
}
