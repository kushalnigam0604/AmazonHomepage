import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../Services/userdata.service'; 


@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  users : any;

  constructor(private userdata: UserdataService) 
  {
    this.users = userdata.users();
   }


  message : string | undefined;
  ngOnInit(): void {
    this.userdata.receivedMessage().subscribe((data) => {
      this.message = data;
    })
  }

}
