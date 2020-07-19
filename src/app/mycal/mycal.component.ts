import { Component } from '@angular/core';

@Component({
  selector: 'app-mycal',
  templateUrl: './mycal.component.html',
  styleUrls: ['./mycal.component.css']
})
export class MycalComponent {
  result:string='';
  longButtons:string[]= ['AC', 'CE'];
  buttons:string[]= ['7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+'];
  private preValue:string='';
  private curValue:string='';
  
  addToExpression(value:string) {
    if(this.result != ''){
      this.preValue = this.curValue;
      this.curValue= value;

    }
    if(value== 'AC'){
      this.result = '';

    }
    else if(value== 'CE'){
      this.result = this.preValue != '=' ? this.result.slice(0, -1) : this.result;

    }else if(value == '='){
      this.result = eval(this.result);

    }else {
      this.result += value;
    }
  }


}
