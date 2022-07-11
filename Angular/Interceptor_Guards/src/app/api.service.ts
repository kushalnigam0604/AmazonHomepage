import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  loginUrl = "https://reqres.in/api/login";

  loginUser(user: any){
    return this.http.post<any>(this.loginUrl, user)
  }
  loggedIn() {
    return localStorage.getItem('token')    
  }
  getToken() {
    return localStorage.getItem('token')
  }
}
