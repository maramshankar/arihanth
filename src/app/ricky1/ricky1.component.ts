import { Component, OnInit } from '@angular/core';
import { RickyService } from '../rickyservice/ricky.service';

@Component({
  selector: 'app-ricky1',
  templateUrl: './ricky1.component.html',
  styleUrls: ['./ricky1.component.css']
})
export class Ricky1Component  {
    
  myEmployees: any;
  myname:string;
  myemail:string;
  id:number=0;

  constructor(private rService:RickyService) {
  
    rService.myObservable.subscribe(res => (this.myEmployees = res));

   }

   getData(name, email){
      this.myname = name;
      this.myemail = email;
      this.id++

   }
   dataFrmRicky1(){
     this.myEmployees.push({id:this.id, name:this.myname, email:this.myemail});
     this.rService.changeData(this.myEmployees)
   }

   }


 


