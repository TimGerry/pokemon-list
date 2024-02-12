import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availability',
  standalone: true
})
export class AvailabilityPipe implements PipeTransform {

  transform(value: string | undefined): string {
    return value ? value : 'Unavailable';
  }

}
