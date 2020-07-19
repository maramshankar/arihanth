import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maramsearch'
})
export class MaramsearchPipe implements PipeTransform {

  transform(value: any, searchName: any): any {
        if(searchName!==" "){
    return value.filter(student => student.stdName.startsWith(searchName));
  }else 
  return value;
}

}
