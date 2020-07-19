import { Component} from '@angular/core';

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.css']
})
export class MyformsComponent  {
  name:string="Maram Shankar";
  regiform(event){
    console.log(event);
  }

}
