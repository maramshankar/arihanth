import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value:string): string {
    let result:string= '';
  
    for(let i=value.length; i>=0; i--){
      result += value.charAt(i);
    }

    return result;
  }

}
