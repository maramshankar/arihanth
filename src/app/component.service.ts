import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor() { }
  userName= new Subject<any>();
}
