import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private productUrl = 'https://dummyjson.com/products/1';
  private introsUrl = 'https://svc.campustrack.net/api/auth/user/intros';

  constructor(private http: HttpClient) {}

  getProduct(): Observable<any> {
    return this.http.get<any>(this.productUrl).pipe(
      catchError(this.handleError)
    );
  }

  getUserIntros(): Observable<any> {
    return this.http.get<any>(this.introsUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
