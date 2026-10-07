import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../../models/Car';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-carlist',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css',
})
export class CarlistComponent implements OnInit {
  cars: Car[] = [];
  carForm = new FormGroup({
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
  });
  editingId: number | null = null;
  constructor(private carService: CarService) {}
  ngOnInit(): void {
    this.getCars();
  }
  getCars() {
    return this.carService.getCars().subscribe((car) => (this.cars = car));
  }
  onSubmit() {
    const rawCar = this.carForm.getRawValue();
    const car: Car = {
      make: rawCar.make,
      model: rawCar.model,
      year: Number(rawCar.year),
      mileage: Number(rawCar.mileage),
    };
    if (this.editingId) {
      car.id = this.editingId;
      this.carService.updateCar(car).subscribe((updated) => {
        this.cars = this.cars.map((c) => (c.id === updated.id ? updated : c));
      });
      this.editingId = null;
    } else {
      this.carService.addCar(car).subscribe((c) => {
        this.cars = [...this.cars, c];
      });
    }
    this.carForm.reset();
  }
  startEdit(car: Car) {
    this.editingId = car.id ?? null;
    this.carForm.patchValue({
      make: car.make,
      model: car.model,
      year: String(car.year),
      mileage: String(car.year),
    });
  }
}
