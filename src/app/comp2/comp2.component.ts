import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  userName:string="Maram Akshith"

  constructor(private cs:ComponentService) { 
    this.cs.userName.subscribe(uname => this.userName= uname)
  }

  updateUserName(uname){
    // this.userName=uname.value;
    this.cs.userName.next(uname.value);
  }

  ngOnInit(): void {
  }

}
