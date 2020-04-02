import { Pipe, PipeTransform } from '@angular/core';

/**
 * 自定义管道：
 * 对数字求pow次方
 */
@Pipe({
  name: 'numberPow',
})
export class NumberPowPipe implements PipeTransform {
  transform(value: any, pow?: number): any {
    return Math.pow(value, isNaN(pow) ? 1 : pow);
  }
}
