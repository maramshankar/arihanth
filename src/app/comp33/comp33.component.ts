import { Component, OnInit } from '@angular/core';
import { BehaServiceService } from '../beha-service.service';

@Component({
  selector: 'app-comp33',
  templateUrl: './comp33.component.html',
  styleUrls: ['./comp33.component.css']
})
export class Comp33Component implements OnInit {

userName:string="Lenovo"

constructor(private bs:BehaServiceService) {
  this.bs.userName.subscribe(uname => this.userName =uname)
 }
update(uname){
  this.bs.userName.next(uname.value)
}
  ngOnInit(): void {
  }

}
