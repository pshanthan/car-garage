import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../../models/Car';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-carlist',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css',
})
export class CarlistComponent implements OnInit {
  cars: Car[] = [];
  editingId: number | null = null;
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
  constructor(
    private carService: CarService,
    private activatedroute: ActivatedRoute,
  ) {}
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
    this.carService.addCar(car).subscribe((c) => {
      this.cars = [...this.cars, c];
    });
    this.carForm.reset();
  }
  updateCar(c: Car) {
    const idParam = this.activatedroute.snapshot.paramMap.get('id');
    this.editingId = Number(idParam);
    const iDfound = this.carService
      .getCars()
      .subscribe((c) => this.editingId === c.id);
  }
}
