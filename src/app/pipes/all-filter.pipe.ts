import * as _ from "lodash";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allFilter'
})
export class AllFilterPipe implements PipeTransform {

  transform(array: any[], filterr: string): any {    
    if (filterr == "stock") {
      return _.filter(array, { available: true });
    }
    if (filterr == "empty") {
      return _.filter(array, { available: false });
    }
    if (filterr == "best") {
      return _.filter(array, { best_seller: true });
    }
    return array;
  }

}
