import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://localhost:3000/cars';
  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl);
  }
  addCar(c: Car): Observable<Car> {
    return this.httpClient.post<Car>(this.apiUrl, c);
  }
  updateCar(c: Car): Observable<Car> {
    return this.httpClient.put<Car>(`${this.apiUrl}/${c.id}`, c);
  }
  deleteCar(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
