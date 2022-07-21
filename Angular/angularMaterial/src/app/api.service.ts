import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  loginUrl = "https://reqres.in/api/login";
  userUrl = "https://reqres.in/api/users?page=2";

  getapiCall(){
    return this.http.get(this.userUrl);
  }
  postApiCall(data:any){
    return this.http.post(this.loginUrl,data);
  }
}
