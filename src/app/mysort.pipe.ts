import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort'
})
export class MysortPipe implements PipeTransform {

  transform(value:any, args?: any[]): any {
    return value.sort((o1,o2) => {
    let x =  o1.empName.toLowerCase();
     let y = o2.empName.toLowerCase();
     if(x<y){
       return -1;
     }else {
       return 1;
     }
     return 0;
    });
  }

}
