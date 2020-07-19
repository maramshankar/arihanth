import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modelforms',
  templateUrl: './modelforms.component.html',
  styleUrls: ['./modelforms.component.css']
})
export class ModelformsComponent implements OnInit {
  states:Array<string> = ['TS','AP','MP','UP'];
  reactiveForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      firstName:[],
      lastName:[],
      Address:this.fb.group({
        addressType:[],
        expiryDate:[],
        streetAddress:[],
        city:[],
        state:[],
        zipcode:[]
      })

    });
  }

  subHandler(){
    console.log(this.reactiveForm);
  }

}
