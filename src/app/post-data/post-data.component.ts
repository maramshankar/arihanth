import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  x:any

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
  }
  postdata(data){
   
this.http.post('https://jsonplaceholder.typicode.com/posts',data)
.subscribe((result)=>{
  console.log("result", result)
})
  }

}
