import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  loginform= this.fb.group({

    userName:['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]]

  })


  ngOnInit(): void {
  }
  submit(){
    alert(JSON.stringify(this.loginform.value))
  }

}
