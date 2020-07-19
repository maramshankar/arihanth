import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice/data.service';

@Component({
  selector: 'app-two2',
  templateUrl: './two2.component.html',
  styleUrls: ['./two2.component.css']
})
export class Two2Component  {
  myname:string;

  constructor(private dataService:DataService ) { 
    dataService.myObservable.subscribe(res => (this.myname= res));
  }

}