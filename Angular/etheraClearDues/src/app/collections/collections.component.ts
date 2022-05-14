import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        backgroundColor: 'rgb(223, 152, 0)',
        transform: 'scale(1.1)'
      })),
      transition('initial=>final', animate('200ms')),
      transition('final=>initial', animate('200ms'))
    ]),
  ]
})
export class CollectionsComponent implements OnInit {
  currentState1 = 'initial';
  currentState2 = 'final';
  accountOrAmount = 'By Accounts';

changeState() {
  this.currentState1 = this.currentState1 === 'initial' ? 'final' : 'initial';
  this.currentState2 = this.currentState2 === 'final' ? 'initial' : 'final';
  this.accountOrAmount = this.accountOrAmount === 'By Accounts' ? 'By Amount' : 'By Accounts';
}

showslider : boolean = false;

show(){
  this.showslider = this.showslider === false ? true : false;
  console.log(this.showslider);
  
}

  constructor() { }

  ngOnInit(): void {
  }

}
