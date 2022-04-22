import { Component } from '@angular/core';
import { ChildCompComponent } from './child-comp/child-comp.component';


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

  parentDataForChild = "Bitcoin (child data changes with parent data)";
  inputArrayForParent = ['milk', 'tea', 'coffee'];


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

   constructor() {

   }

   ngOnInit() {
      
      this.formdata = new FormGroup ({
        emailID: new FormControl("",Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ])),
        passwd:new FormControl("")
      })
   }

   onClickSubmit(data: { emailid: string; password: any }){
     alert("Entered Email id : " + data.emailid + " " + data.password);
   }
   onClick(data: { emailID: string; }) {
     this.email = data.emailID;
   }

   addInputDataToParent(newData: string){
     this.inputArrayForParent.push(newData);
   }
}

