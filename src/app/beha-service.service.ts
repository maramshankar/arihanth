import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaServiceService {

  constructor() { }

  userName = new Subject<any>()
}
