import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  userName:string="Maram Manvth"

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
