import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice/data.service';

@Component({
  selector: 'app-one1',
  templateUrl: './one1.component.html',
  styleUrls: ['./one1.component.css']
})
export class One1Component  {
  myname:string;

  constructor(private dataService:DataService ) { 
    dataService.myObservable.subscribe(res => (this.myname= res));
  }

  changDataFrmCompo(){
    this.dataService.changeData("Maram Shankar");
  }

}
