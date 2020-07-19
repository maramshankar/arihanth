import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  myBehaviorSubject = new BehaviorSubject("Default value");
  myObservable = this.myBehaviorSubject.asObservable();

changeData(data:any){
  this.myBehaviorSubject.next(data);
}
}
