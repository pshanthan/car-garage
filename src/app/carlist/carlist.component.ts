import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { Observable } from 'rxjs';
import { Car } from '../../models/Car';

@Component({
  selector: 'app-carlist',
  imports: [],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css',
})
export class CarlistComponent {
  cars: Car[] = [];
  constructor(private carService: CarService) {}
  getCars() {
    return this.carService.getCars().subscribe((car) => (this.cars = car));
  }
}
