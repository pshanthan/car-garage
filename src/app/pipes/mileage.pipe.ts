import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mileage'
})
export class MileagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
