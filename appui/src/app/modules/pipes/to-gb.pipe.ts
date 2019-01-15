import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toGB'
})
export class ToGBPipe implements PipeTransform {

  transform(value: number): number {
    return Math.ceil(value / 1073741824);
  }

}
