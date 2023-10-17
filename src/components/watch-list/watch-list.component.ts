import { Component } from '@angular/core';
import { WatchListService } from 'src/services/watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent {
favMovies : any=[] ;
constructor(private WatchListService:WatchListService){

}
ngOnInit(){
  this.WatchListService.getFavouritMovies().subscribe(res => {
    this.favMovies = res;
    console.log(this.favMovies)
    this.favMovies.forEach((movie:any) =>{
     movie.img = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
    })
  })



}






}
