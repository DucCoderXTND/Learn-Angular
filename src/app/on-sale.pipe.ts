import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale',
  standalone: true,
})
export class OnSalePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    // console.log('my pipe', value);
    if (value) {
      return 'Đang ha gia !'
    }
    return '';
  }
}
