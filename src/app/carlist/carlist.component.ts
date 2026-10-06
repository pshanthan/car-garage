import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../../models/Car';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-carlist',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css',
})
export class CarlistComponent implements OnInit {
  cars: Car[] = [];
  carForm = new FormGroup([
    {
      id: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      make: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      model: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      year: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      mileage: new FormControl('', {
        nonNullable: true,
        validators: Validators.required,
      }),
    },
  ]);
  constructor(private carService: CarService) {}
  ngOnInit(): void {
    this.getCars();
  }
  getCars() {
    return this.carService.getCars().subscribe((car) => (this.cars = car));
  }
  addCar(c: Car) {}
  onSubmit() {}
}
