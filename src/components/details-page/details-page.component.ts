import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {


  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  movieTD: number = +this.activatedRoute.snapshot.params['id'];

}
