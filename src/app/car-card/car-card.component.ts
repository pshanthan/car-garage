import { Component } from '@angular/core';
import { Car } from '../../models/Car';
import { Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  imports: [],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css',
})
export class CarCardComponent {
  @Input() car!: Car;
}
