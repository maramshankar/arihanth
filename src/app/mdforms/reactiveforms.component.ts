import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {

  constructor(private fb:FormBuilder) { }

  empForm = this.fb.group({
    empName:['', [Validators.required,Validators.minLength(5)]],
    empId:['',[Validators.required]],
    salary:['']

  });
  submit(){
    console.log(this.empForm.value)
  }


}
