import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.css']
})
export class ResisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
      this.buildForm()
  }

  buildForm(){
    this. registerForm= this.fb.group({

      name:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      userName:['', Validators.required],
      password:['',[Validators.required, Validators.minLength(6)]],
      confirmPassword:['']
  
      })
  }
register(){
console.log(this.registerForm.value)  

}
}
