import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maramform',
  templateUrl: './maramform.component.html',
  styleUrls: ['./maramform.component.css']
})
export class MaramformComponent {

  submit(data : any){

    console.log(data);

  }

 
}
