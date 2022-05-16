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


  constructor() { }

  ngOnInit(): void {

  }

  currentState1 = 'initial';
  currentState2 = 'final';
  accountOrAmount = 'By Accounts';
  cardDetails=
  [
    {
      "heading":"Total Accounts",
      "lac":"9.84 Lac",
      "per":"",
      "src":'assets/totalAccounts.png',
      "crore":"4,178.60 Cr",
      "info":"assets/info-d.png"
    },
    {
      "heading":"Total Engagement",
      "lac":"8.12 Lac",
      "per":"(81%)",
      "src":"assets/totalEngagement.png",
      "crore":"3,384.67 Cr",
      "info":"assets/info-d.png"

    },
    {
      "heading":"Total Login",
      "lac":"5.90 Lac",
      "per":"(74%)",
      "src":"assets/totalRegistered.png",
      "crore":"2,504.66 Cr",
      "info":"assets/info-d.png"

    },
    {
      "heading":"Digital Paid",
      "lac":"3.38 Lac",
      "per":"(65%)",
      "src":"assets/digitallyPaid.png",
      "crore":"1,628.03 Cr",
      "info":"assets/info-d.png"

    },
    {
      "heading":"Overall Resolved",
      "lac":"5.23 Lac",
      "per":"(52%)",
      "src":"assets/overallResolved.png",
      "crore":"2,172.80 Cr",
      "info":"assets/info-d.png"
    },
  ]

  account : boolean = true;
  amount : boolean = false;

changeState() {
  this.currentState1 = this.currentState1 === 'initial' ? 'final' : 'initial';
  this.currentState2 = this.currentState2 === 'final' ? 'initial' : 'final';
  this.accountOrAmount = this.accountOrAmount === 'By Accounts' ? 'By Amount' : 'By Accounts';
  if(this.accountOrAmount === 'By Accounts'){
    this.account = true;
  }
  else{
    this.account = false;
  }
  if(this.accountOrAmount === 'By Amount'){
    this.amount = true;
  }
  else{
    this.amount = false;
  }
}

showslider : boolean = false;

show(){
  this.showslider = this.showslider === false ? true : false;
  console.log(this.showslider);
  
}

credit : string [] = ['creditCard','loan'];

creditCard(){
  console.log('credit');
  for(let i of this.credit)
  {
    console.log(i);
  }
  
}

live : string[] = ['live','Pre-NPA','NPA'];

liveFunc(){
  console.log('live');
  for(let i of this.live){
    console.log(i);
  }
}

dates : string[] = ['March','April','May'];

showDate(){
  console.log('date');
  for(let i of this.dates){
    console.log(i);
  }
}

leave(){
  console.log('left');
  
}

}
