import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,searchName:any): any {
    if(searchName !==" "){

  
    return value.filter(employee => employee.empName.startsWith(searchName));
  }
  else return value;
  }
}
