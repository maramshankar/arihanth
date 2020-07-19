import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../covid19/corona.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {

  countries:any;
  country:any;
  confirmed:number;
  recovered:number;
  deaths:number

  constructor(private cs:CoronaService) { }


  ngOnInit(): void {
    this.cs.getCountries().subscribe(data=> this.countries=data)
      // console.log(data)   

  }
  getCoronaData(){
    this.cs.getCoronaReal(this.country).subscribe((data)=>{
      console.log(data)
      var index = data.length -1
      console.log(index)
      this.confirmed = data[index].Confirmed
      this.recovered = data[index].Recovered
      this.deaths = data[index].Deaths
    })
  }
  getCountry(country:any){
    this.country = country

  }

}
