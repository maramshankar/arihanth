import { Component} from '@angular/core';

@Component({
  selector: 'app-maram',
  templateUrl: './maram.component.html',
  styleUrls: ['./maram.component.css']
})
export class MaramComponent  {

  searchByName:string="";

  students = [
    {stdName:"akshith", stdRollNo:1001, Fee:15000, stdImg:"../assets/images/pho2.jpg",dob:'15/07/2013'},
    {stdName:"shiva", stdRollNo:1002, Fee:12000, stdImg:"../assets/images/pho3.jpg",dob:'15/03/2014'},
    {stdName:"manvik", stdRollNo:1003, Fee:10000, stdImg:"../assets/images/pho4.jpg",dob:'14/02/2015'},
    {stdName:"arihanth", stdRollNo:1004, Fee:9000, stdImg:"../assets/images/pho1.jpg",dob:'15/07/2016'},
  ]

  
}
