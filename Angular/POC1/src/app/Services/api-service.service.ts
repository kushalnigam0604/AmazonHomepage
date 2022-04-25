import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = "https://jsonplaceholder.typicode.com/todos/1";
  constructor(private http: HttpClient) { }

  getapiCall(){
    return this.http.get(this.url);
  }
  postApiCall(data:any){
    return this.http.post(this.url,data);
  }

}
