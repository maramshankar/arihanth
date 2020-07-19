import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName:string="Maram Shankar"

  constructor(private cs:ComponentService) { 
    this.cs.userName.subscribe(uname => this.userName= uname)
  }

  ngOnInit(): void {
  }
  update(uname){
    // this.userName=uname.value;
    this.cs.userName.next(uname.value);
  }

}
