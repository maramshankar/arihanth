import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-one',
  templateUrl: './register-one.component.html',
  styleUrls: ['./register-one.component.css']
})
export class RegisterOneComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  registerForm = this.fb.group({
    name:['', Validators.required],
    userName:['',Validators.required],
    email:['', [Validators.required, Validators.pattern('^[a-z0-9_+.]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$')]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['', Validators.required]
  })

  ngOnInit(): void {
  }
  
  register(){
    console.log(this.registerForm.value)
  }

}
