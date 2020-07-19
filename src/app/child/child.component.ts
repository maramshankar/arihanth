import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() user:string;

  @Output() notify:EventEmitter<string> = new EventEmitter<string>();
  childMethod(){
    this.notify.emit("Maram akshith from child component");
  }

 
}
