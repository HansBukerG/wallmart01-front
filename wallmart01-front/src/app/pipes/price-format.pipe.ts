import { formatNumber } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  transform(amount: number ): (string | null) {
    return`$${((formatNumber(amount, 'en-US', '1.0-0')).toString())}`;
  }

}
