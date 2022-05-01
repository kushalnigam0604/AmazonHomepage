import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UIComponent implements OnInit {
  Step1 = "1";
  Step2 = "2";
  Step3 = "3";
  Step4 = "4";

  selectedBlock: string = "";

  constructor() { 
    this.selectedBlock = this.Step1;
  }

  set(step: string) {
    // console.log(step);
    this.selectedBlock = step;
  }
  ngOnInit(): void {
  }

  otp: any;
  showOtpComponent = true;
  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: "*",
    inputStyles: {
      width: "30px",
      height: "30px",
    },
  };

  // OTP Code
  onOtpChange(otp : any) {
    this.otp = otp;
    // When all 4 digits are filled, trigger OTP validation method
    if (otp.length == 4) {
      this.validateOtp();
    }
  }

  setVal(val : any) {
    this.ngOtpInput.setValue(val);
  }

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }
  validateOtp() {
   // write your logic here to validate it, you can integrate sms API here if you want 
  }

}
