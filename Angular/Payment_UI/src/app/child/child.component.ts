import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  Step1 = "1";
  Step2 = "2";
  Step3 = "3";
  Step4 = "4";

  selectedBlock: string = "";

  constructor() { 
    this.selectedBlock = this.Step1;
  }

  set(step: string) {
    this.selectedBlock = step;
  }

  ngOnInit(): void {
  }

}










 