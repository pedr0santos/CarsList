import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Vehicle } from '../../shared/models/cars-model';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  // private apiUrl = environment.apiUrl;
  private apiUrl = 'https://66e5b3d95cc7f9b6273e1e36.mockapi.io/api';
  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http
      .get<Vehicle[]>(`${this.apiUrl}/cars`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('Ocorreu um erro:', error);
    return throwError(
      () => new Error('Algo deu errado; por favor, tente novamente.')
    );
  }
}
