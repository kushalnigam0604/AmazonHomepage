import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective , FormGroup , FormBuilder , NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { APIService } from '../api.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent implements OnInit {

  constructor(private api:APIService , private _router:Router) { 

  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  

  submit(){
    console.log(this.loginForm.value);
    this.api.postApiCall(this.loginForm.value).subscribe((res : any) => {
      this._router.navigate(['user']);
    },
    err => {
      console.log(err.status);
    });
  }
  

  matcher = new MyErrorStateMatcher();
}
