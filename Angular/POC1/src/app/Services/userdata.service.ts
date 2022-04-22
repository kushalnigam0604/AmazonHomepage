import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users(){
    return [
      {name: 'naman' , age:20, email:'naman@gamil.com'},
      {name: 'ram' , age:22, email:'ram@gamil.com'},
      {name: 'abhi' , age:24, email:'abhi@gamil.com'}
    ]
  }

}
