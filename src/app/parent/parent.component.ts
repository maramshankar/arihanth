import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  name:string="Maram Shankar";

  parentProp:string =  "";

  parentMethod(data:any){
    this.parentProp = data;
  }

}
