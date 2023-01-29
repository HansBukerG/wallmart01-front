import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPercentaje'
})
export class DiscountPercentajePipe implements PipeTransform {

  transform(value:number): string {
    return value+"%";
  }

}
