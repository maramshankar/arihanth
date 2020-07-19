import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickyService {

  myBehaviorSubject = new BehaviorSubject([{id:101, name:"shankar", email:"shan@gmail.com"}]);
  myObservable = this.myBehaviorSubject.asObservable();
  
  changeData(data:any){
    this.myBehaviorSubject.next(data);
  }

  
}
