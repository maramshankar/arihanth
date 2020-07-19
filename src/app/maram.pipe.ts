import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maram'
})
export class MaramPipe implements PipeTransform {

  transform(value:any, args?:any[]): any{
   return value.sort((o1,o2) =>{
      let x= o1.stdName.toLowerCase();
      let y= o2.stdName.toLowerCase();
      if(x<y) {
        return -1;
      } else {
        return 1;
      }
      return 0;
    });
  
  }

}
