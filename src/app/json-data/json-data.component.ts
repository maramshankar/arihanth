import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
  styleUrls: ['./json-data.component.css']
})
export class JsonDataComponent implements OnInit {

  placehold:any

  constructor(private http:HttpClient) { }

  

  ngOnInit(): void {
    
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((data)=> this.placehold= data)
  }

}
