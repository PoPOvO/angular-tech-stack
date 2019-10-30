import { Pipe, PipeTransform } from '@angular/core';

/**
 * 对数组filter
 */
@Pipe({
  name: 'arrFilter'
})
export class ArrFilterPipe implements PipeTransform {
  transform(value: any): any {
    return value.filter((v) => v.status);
  }
}
