import { Component, EventEmitter } from '@angular/core';
import { Car } from '../../models/Car';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-car-card',
  imports: [],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css',
})
export class CarCardComponent {
  @Input() car!: Car;
  @Output() edit = new EventEmitter<Car>();
  @Output() remove = new EventEmitter<number>();
}
