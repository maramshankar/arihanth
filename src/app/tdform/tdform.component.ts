import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent  {

  onSubmit(data:any){
    console.log(data)
  }
  

}
