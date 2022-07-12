import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  static getToken: any;

  constructor(private http: HttpClient) { }

  loginUrl = "https://reqres.in/api/login";

  getapiCall(){
    return this.http.get(this.loginUrl);
  }
  postApiCall(data:any){
    return this.http.post(this.loginUrl,data);
  }
  getToken(){
    return localStorage.getItem("token");
  }
}
