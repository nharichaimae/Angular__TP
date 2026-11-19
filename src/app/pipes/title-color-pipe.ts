import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleColor',
  standalone: true
})
export class TitleColorPipe implements PipeTransform {

  transform(value: number): string {
    return value > 10 ? 'red' : 'green';
  }

}