import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  userName:string="Maram Shivakarthik"

  constructor(private cs:ComponentService) { 
    this.cs.userName.subscribe(uname => this.userName= uname)
  }

  update(uname){
    // this.userName=uname.value;
    this.cs.userName.next(uname.value);
  }

  ngOnInit(): void {
  }

}
