import * as _ from "lodash";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(array:any[], query: number): any {
    if(query>0)
    {      
      return _.filter(array, { categories: [+query] })
    }
    return array;
  }
}