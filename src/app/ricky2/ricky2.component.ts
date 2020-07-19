import { Component, OnInit } from '@angular/core';
import { RickyService } from '../rickyservice/ricky.service';

@Component({
  selector: 'app-ricky2',
  templateUrl: './ricky2.component.html',
  styleUrls: ['./ricky2.component.css']
})
export class Ricky2Component {
  myEmployees: any;
  

  constructor(private rService:RickyService) {
  
    rService.myObservable.subscribe(res => (this.myEmployees = res));

   }


}
