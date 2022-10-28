import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private service : ServiceService) { }

  msg = "hello";
  
  ngOnInit(): void {
    this.service.setMessage(this.msg);
  }

  changeCountry(_country: any){
console.log(_country);
  }

}
