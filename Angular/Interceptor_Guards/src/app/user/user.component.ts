import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.callGetFunc();
  }
  userList : any;
  callGetFunc()
  {
    this.api.getapiCall().subscribe((data:any) => {
      this.userList = data.data;
    })
  }
}
