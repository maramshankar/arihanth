import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {

  title="React Form Creation";
  regForm:FormGroup;
  submitted= false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', [Validators.required ,Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    });
  }

}
