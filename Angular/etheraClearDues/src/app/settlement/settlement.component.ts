import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css'],
  animations: [
    trigger('changeDivSize', [
      state(
        'initial',
        style({
          transform: 'scale(1)',
        })
      ),
      state(
        'final',
        style({
          transform: 'scale(1.3)',
        })
      ),
      transition('initial=>final', animate('200ms')),
      transition('final=>initial', animate('200ms')),
    ]),
  ],
})
export class SettlementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  currentState1 = 'initial';
  currentState2 = 'final';
  accountOrAmount = 'Pending Offers';

  pending: boolean = true;
  actioned: boolean = false;

  changeState() {
    this.currentState1 = this.currentState1 === 'initial' ? 'final' : 'initial';
    this.currentState2 = this.currentState2 === 'final' ? 'initial' : 'final';
    this.accountOrAmount =
      this.accountOrAmount === 'Pending Offers'
        ? 'Actioned Offers'
        : 'Pending Offers';
    if (this.accountOrAmount === 'Pending Offers') {
      this.pending = true;
    } else {
      this.pending = false;
    }
    if (this.accountOrAmount === 'Actioned Offers') {
      this.actioned = true;
    } else {
      this.actioned = false;
    }
  }

  showslider: boolean = false;

  show() {
    this.showslider = this.showslider === false ? true : false;
  }

  selectedDCP: boolean = false;
  selectedDates: boolean = false;

  DCPValue: string = 'DCP Sole';
  DCP: string[] = ['DCP Sole', 'DCP Sole 1', 'DCP Sole 2', 'DCP Sole 3'];

  DCPfunc() {
    this.selectedDCP = true;
  }

  DCPFuncChange(data: any) {
    this.DCPValue = data;
  }

  DateValue: string = "JAN 1 - JAN 31'2022";
  dates: string[] = ["JAN 1 - JAN 31'2022", "FEB 1 - FEB 28'2022", "MAR 1 - MAR 31'2022", "APR 1 - APR 30'2022"];

  showDate() {
    this.selectedDates = true;
  }

  showDateChange(data: any) {
    this.DateValue = data;
  }

  leave() {

    this.selectedDCP = false;
    this.selectedDates = false;
  }

  headElements : string[] = ["S.No.", "TOS", "Pre-Approved Offer Amount", "Payment Start Date", "Offer Amount", "No. Of EMI", "Ctr Offer Start Date", "Ctr Amount", "Ctr No. Of EMI", "Status", "Action Date", "Action User"];


  settlement : any[] = [{
    SNo: "1",
    ToS: "1,00,000",
    preApproved: "70,000",
    payStartDate: "Jan,1,2021",
    offerAmount: "69,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "2",
    ToS: "3,31,451",
    preApproved: "1,15,164",
    payStartDate: "Jan,3,2021",
    offerAmount: "1,50,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "3",
    ToS: "2,03,934",
    preApproved: "39,088",
    payStartDate: "Jan,4,2021",
    offerAmount: "16,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "4",
    ToS: "1,39,617",
    preApproved: "46,512",
    payStartDate: "Jan,4,2021",
    offerAmount: "45,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "5",
    ToS: "64,407",
    preApproved: "18,293",
    payStartDate: "Jan,4,2021",
    offerAmount: "15,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "6",
    ToS: "2,05,715",
    preApproved: "15,481",
    payStartDate: "Jan,4,2021",
    offerAmount: "2,500",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "7",
    ToS: "4,86,251",
    preApproved: "47,536",
    payStartDate: "Jan,6,2021",
    offerAmount: "40,000",
    noOfEmi: "2",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "8",
    ToS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "9",
    ToS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "10",
    ToS: "64,407",
    preApproved: "18,293",
    payStartDate: "Jan,4,2021",
    offerAmount: "15,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "11",
    ToS: "2,05,715",
    preApproved: "15,481",
    payStartDate: "Jan,4,2021",
    offerAmount: "2,500",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "12",
    ToS: "4,86,251",
    preApproved: "47,536",
    payStartDate: "Jan,6,2021",
    offerAmount: "40,000",
    noOfEmi: "2",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "13",
    ToS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "14",
    ToS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "15",
    ToS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "16",
    ToS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "17",
    ToS: "64,407",
    preApproved: "18,293",
    payStartDate: "Jan,4,2021",
    offerAmount: "15,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "18",
    ToS: "2,05,715",
    preApproved: "15,481",
    payStartDate: "Jan,4,2021",
    offerAmount: "2,500",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "19",
    ToS: "4,86,251",
    preApproved: "47,536",
    payStartDate: "Jan,6,2021",
    offerAmount: "40,000",
    noOfEmi: "2",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "20",
    ToS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "21",
    ToS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "22",
    ToS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "23",
    ToS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "24",
    ToS: "64,407",
    preApproved: "18,293",
    payStartDate: "Jan,4,2021",
    offerAmount: "15,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "25",
    ToS: "2,05,715",
    preApproved: "15,481",
    payStartDate: "Jan,4,2021",
    offerAmount: "2,500",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "26",
    ToS: "4,86,251",
    preApproved: "47,536",
    payStartDate: "Jan,6,2021",
    offerAmount: "40,000",
    noOfEmi: "2",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "27",
    ToS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "28",
    ToS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "29",
    ToS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "30",
    ToS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}];

settlement2 = [{
  SNo: "1",
  ToS: "4,84,088",
  preApproved: "1,99,719",
  payStartDate: "Jan,1,2021",
  offerAmount: "1,50,000",
  noOfEmi: "1",
  ctsStartDate: "-",
  ctsAmount: "-",
  ctsNoOfEmi: "-",
  status: !0,
  actionDate: "5 days",
  actionUser: "Abhishek",
  offerOpen: !1
}, {
  SNo: "2",
  ToS: "3,31,451",
  preApproved: "1,15,164",
  payStartDate: "Jan,3,2021",
  offerAmount: "1,50,,000",
  noOfEmi: "1",
  ctsStartDate: "-",
  ctsAmount: "-",
  ctsNoOfEmi: "-",
  status: !0,
  actionDate: "5 days",
  actionUser: "Shravan",
  offerOpen: !1
}, {
  SNo: "3",
  ToS: "2,03,934",
  preApproved: "39,088",
  payStartDate: "Jan,4,2021",
  offerAmount: "10,000",
  noOfEmi: "1",
  ctsStartDate: "-",
  ctsAmount: "-",
  ctsNoOfEmi: "-",
  status: !0,
  actionDate: "5 days",
  actionUser: "Shivani",
  offerOpen: !1
}];




}
