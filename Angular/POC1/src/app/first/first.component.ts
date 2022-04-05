import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  newVariable = 'Entered in first component html';
  presentdate: Date | undefined;
  newcomponentproperty: string | undefined;
  constructor(private myservice: MyserviceService) {}
  ngOnInit() {
    this.presentdate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty;
  }
}
