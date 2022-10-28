import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  msg : string = "";
  constructor() { }

  setMessage(data: string){
    this.msg = data;
  }
  getMessage(){
    return this.msg;
  }
}
