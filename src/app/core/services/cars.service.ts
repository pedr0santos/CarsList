import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Vehicle } from '../models/cars-model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Ocorreu um erro:', error);
    return throwError(() => new Error('Algo deu errado; por favor, tente novamente.'));
  }
}
