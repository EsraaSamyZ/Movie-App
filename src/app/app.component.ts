import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-app';
  constructor(private router: Router) {}

  isHeaderVisible() {
    // Get the current route
    const currentRoute = this.router.url;

    // Define the routes where the header should be visible
    const visibleRoutes = ['/','/movies/:id' ,'/favmovies' ];

    // Check if the current route is in the visibleRoutes array
    return visibleRoutes.includes(currentRoute);
  }
}
