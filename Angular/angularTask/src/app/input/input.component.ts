import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  users : any;

  constructor(private service : ServiceService) { 
    this.users = service.users();

  }

  sendMessage(message : any){
    this.service.sendMessage(message);
  }

 ngOnInit(): void {
 }
}
