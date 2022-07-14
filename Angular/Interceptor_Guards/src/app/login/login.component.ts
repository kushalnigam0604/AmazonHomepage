import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth: any;

  constructor(private api:APIService , private _router:Router) {}

  ngOnInit(): void {
  }
  callGetFunc()
    {
      this.api.getapiCall().subscribe((data:any) => {
        console.log(data);
      })
    }
  login(data : NgForm){
    this.callGetFunc();
    this.api.postApiCall(data).subscribe((res : any) => {
      this._router.navigate(['/user']);
      console.log(res.token);
      localStorage.setItem("token" , res.token);
    },
    err => {
      console.log(err);
    });
  }
}


