import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth: any;

  constructor(private api:APIService) { }

  ngOnInit(): void {
  }
  Login(data:any){
      this.api.loginUser(this.data).subscribe(
        (        res: { token: string; }) => {
          localStorage.setItem('token', res.token)
          // this.route.navigate(['/login'])
        },
        (        err: any) => console.log(err)
      )
    }
  data(data: any) {
    throw new Error('Method not implemented.');
  }
}
