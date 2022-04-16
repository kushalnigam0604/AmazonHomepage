import { Component , Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  _greetmessage!: string;

  @Input() 
  // greetmessage: string | undefined;

  set greetmessage(msg : string){
    this._greetmessage = msg + "manuplated at child component.";
  }
  get greetmessage(){
    return this._greetmessage;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
