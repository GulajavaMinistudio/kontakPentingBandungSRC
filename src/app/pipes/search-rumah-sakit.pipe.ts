import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRumahSakit'
})
export class SearchRumahSakitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
