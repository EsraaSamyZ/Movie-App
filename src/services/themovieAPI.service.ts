// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class MovieService {
//   private apiKey = '89331dd238f7d3c8400eda6517901145';
//   private apiUrl = 'https://api.themoviedb.org/3';

//   constructor(private http: HttpClient) {}

//   getPopularMovies(): Observable<any> {
//     const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;
//     return this.http.get(url);
//   }

//   // FOR Nourhan detailes page
//   getMovieDetails(movieId: number): Observable<any> {
//     const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
//     return this.http.get(url);
//   }

//   getRecommendedMovies(movieId: number): Observable<any> {
//     const url = `${this.apiUrl}/movie/${movieId}/recommendations?api_key=${this.apiKey}`;
//     return this.http.get(url);
//   }
//   getmovie(MovieName: string): Observable<any> {
//     const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${MovieName}`;
//     return this.http.get(url);
//   }
  
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '89331dd238f7d3c8400eda6517901145';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  private buildUrl(endpoint: string, queryParams?: Record<string, string>): string {
    let url = `${this.apiUrl}${endpoint}?api_key=${this.apiKey}`;
    
    if (queryParams) {
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
          url += `&${key}=${queryParams[key]}`;
        }
      }
    }
    
    return url;
  }

  getPopularMovies(page: number = 1): Observable<any> {
    const queryParams = { page: page.toString() };
    const url = this.buildUrl('/movie/popular', queryParams);
    return this.http.get(url);
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = this.buildUrl(`/movie/${movieId}`);
    return this.http.get(url);
  }

  getRecommendedMovies(movieId: number): Observable<any> {
    const url = this.buildUrl(`/movie/${movieId}/recommendations`);
    return this.http.get(url);
  }

  searchMovies(movieName: string, page: number = 1): Observable<any> {
    const queryParams = { query: movieName, page: page.toString() };
    const url = this.buildUrl('/search/movie', queryParams);
    return this.http.get(url);
  }
}
