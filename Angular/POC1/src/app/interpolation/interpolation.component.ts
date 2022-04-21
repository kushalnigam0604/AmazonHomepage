import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  name = "Tiger";

  getName(){
    return this.name;
  }

  obj = {
    name : 'peter',
    age : 25
  }

  arr = ['tea', 'milk', 'water'];

  first = 20;
  second = 30;

  url = window.location.href;

  getValue(){
    alert("button clicked")
  }

  getByPassingValue(value : any){
    alert(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
