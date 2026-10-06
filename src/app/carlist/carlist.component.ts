import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../../models/Car';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carlist',
  imports: [CommonModule],
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
