import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurantsUrl = 'api/restaurants';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(this.restaurantsUrl)
        .pipe(
          tap(restaurants => console.log('fetched restaurants')),
          catchError(this.handleError('getRestaurants', []))
        );
  }

  getRestaurant(id: string): Observable<any> {
    const url = `${this.restaurantsUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(() => console.log(`fetched restaurant id=${id}`)),
      catchError(this.handleError<any>(`getHero id=${id}`))
    );
  }

  searchRestaurants(term: string): Observable<any[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<any[]>(`${this.restaurantsUrl}/?name=${term}`)
        .pipe(
          tap(() => console.log(`fetched restaurants matching ${term}`)),
          catchError(this.handleError<any[]>('searchRestaurants', []))
        );
  }


}
