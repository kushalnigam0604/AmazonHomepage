import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth: any;

  constructor(private api:APIService , private _router:Router) {
    api.getapiCall().subscribe((data:any) => {
      console.log(data);
    })
   }

  ngOnInit(): void {
  }
  login(data : any){
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
