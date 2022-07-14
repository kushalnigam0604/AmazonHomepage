import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { APIService } from './api.service';
import { Router } from '@angular/router';

@Injectable()

export class ApiGuard implements CanActivate {
  constructor(private api:APIService , private _router:Router){
  }
  canActivate():any{
    if(this.api.getToken()){
      console.log('true');
      return true;
    }
    else{
      console.log('false');
      this._router.navigate(['/login']);
      return false;
    }
  }
  
}
