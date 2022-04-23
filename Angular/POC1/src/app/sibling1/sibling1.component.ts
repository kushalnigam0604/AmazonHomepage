import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../Services/userdata.service'; 

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  users : any;

  constructor(private userdata: UserdataService) 
  {
    this.users = userdata.users();
   }

   sendMessage(message : any){
     this.userdata.sendMessage(message);
   }

  ngOnInit(): void {
  }

}
