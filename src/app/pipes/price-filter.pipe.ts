import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(array: any[], mayor30: boolean, menor10: boolean): any {
    if (mayor30 && menor10) {
      return _.filter(array, row => parseInt(row.price.replace('.', '')) >= 30000 || parseInt(row.price.replace('.', '')) <= 10000);
    }
    if (mayor30) {
      return _.filter(array, row => parseInt(row.price.replace('.', '')) >= 30000);
    }
    if (menor10) {
      return _.filter(array, row => parseInt(row.price.replace('.', '')) <= 10000);
    }
    return array;
  }
}
