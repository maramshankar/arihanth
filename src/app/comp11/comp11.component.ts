import { Component, OnInit } from '@angular/core';
import { BehaServiceService } from '../beha-service.service';

@Component({
  selector: 'app-comp11',
  templateUrl: './comp11.component.html',
  styleUrls: ['./comp11.component.css']
})
export class Comp11Component implements OnInit {

  userName:string='Dell'

  constructor(private bs:BehaServiceService) {

    this.bs.userName.subscribe(uname => this.userName =uname)
   }

   update(uname){
     this.bs.userName.next(uname.value)
   }
 

  ngOnInit(): void {
  }

}
