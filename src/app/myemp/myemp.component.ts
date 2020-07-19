import { Component } from '@angular/core';

@Component({
  selector: 'app-myemp',
  templateUrl: './myemp.component.html',
  styleUrls: ['./myemp.component.css']
})
export class MyempComponent  {
   
  searchByName:string="";
  
  employees= [
    {empName:"shankar maram", empId:101,salary:5000, dob:"08/10/1986", empImg:'../assets/images/img3.jpg'},
    {empName:"akshith kumar", empId:102,salary:15000, dob:"15/07/2013", empImg:'../assets/images/img4.jpg'},
    {empName:"arihanth yadav", empId:103,salary:25000, dob:"19/08/2016", empImg:'../assets/images/img1.jpg'},
    {empName:"shiva karthik", empId:104,salary:15000, dob:"15/03/2014", empImg:'../assets/images/img2.jpg'}
  ];
}


