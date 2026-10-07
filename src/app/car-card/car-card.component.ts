import { Component, EventEmitter } from '@angular/core';
import { Car } from '../../models/Car';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MileagePipe } from '../pipes/mileage.pipe';

@Component({
  selector: 'app-car-card',
  imports: [CommonModule, MileagePipe],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css',
})
export class CarCardComponent {
  @Input() car!: Car;
  @Output() edit = new EventEmitter<Car>();
  @Output() remove = new EventEmitter<number>();
}
