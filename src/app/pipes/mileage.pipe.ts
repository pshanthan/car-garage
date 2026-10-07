import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mileage',
})
export class MileagePipe implements PipeTransform {
  transform(value: number): string {
    return `${value.toLocaleString()} miles`;
  }
}
