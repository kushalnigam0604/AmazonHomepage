import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  apiCall() {
    throw new Error('Method not implemented.');
  }

  private subject = new Subject<string>();

  constructor() { }

  sendMessage(message: string){
    this.subject.next(message);
  }

  receivedMessage(): Observable<string>{
    return this.subject.asObservable();
  } 

  users(){
    return [
      {name: 'naman' , age:20, email:'naman@gamil.com'},
      {name: 'ram' , age:22, email:'ram@gamil.com'},
      {name: 'abhi' , age:24, email:'abhi@gamil.com'}
    ]
  }

}
