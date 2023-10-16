import { Component } from '@angular/core';
import { WatchListService } from 'src/services/watch-list.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  moviesLength : number =0;
constructor(private WatchListService:WatchListService ){

}
ngOnInit(){
  this.WatchListService.getFavouritMovies().subscribe(res =>{
    this.moviesLength =res.length;
    console.log(this.moviesLength);
  })
}
}
