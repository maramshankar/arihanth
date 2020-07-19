import { Component, OnInit } from '@angular/core';
import { BehaServiceService } from '../beha-service.service';

@Component({
  selector: 'app-comp22',
  templateUrl: './comp22.component.html',
  styleUrls: ['./comp22.component.css']
})
export class Comp22Component implements OnInit {

  userName:string="Samsung"

  constructor(private bs:BehaServiceService) {
    this.bs.userName.subscribe(uname => this.userName =uname)
   }

   update(uname){
    this.bs.userName.next(uname.value)
   }

  ngOnInit(): void {
  }

}
