import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POC1';
  todaydate = new Date();
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"];
  isAvailable = false;
  istrue = true;

  formdata!: FormGroup;
  email: any;


  myClickfunction(event:any){
    alert("button is clicked.");
    console.log(event);
    }

    changemonths(event:any) {
      console.log("Changed month from the Dropdown");
      console.log(event);
   }

   presentdate: Date | undefined;
   componentproperty: string | undefined;
   constructor(private myservice: MyserviceService) {}

   ngOnInit() {
      this.presentdate = this.myservice.showTodayDate();
      console.log(this.myservice.serviceproperty);
      this.myservice.serviceproperty = "component created"; // value is changed.
      this.componentproperty = this.myservice.serviceproperty;

      this.formdata = new FormGroup ({
        email: new FormControl("",Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ])),
        passwd:new FormControl("")
      })
   }

   onClickSubmit(data: { emailid: string; password: any }){
     alert("Entered Email id : " + data.emailid + " " + data.password);
   }
   onClick(data: { email: string; }) {
     this.email = data.email;
   }
}

