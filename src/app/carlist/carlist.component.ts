import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../../models/Car';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carlist',
  imports: [CommonModule],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css',
})
export class CarlistComponent implements OnInit {
  cars: Car[] = [];
  constructor(private carService: CarService) {}
  ngOnInit(): void {
    this.getCars();
  }
  getCars() {
    return this.carService.getCars().subscribe((car) => (this.cars = car));
  }
  addCar(c: Car) {
    c.id = Date.now();
    this.carService.addCar(c);
  }
}
