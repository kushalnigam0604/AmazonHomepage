import { Component , Input , Output , EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {


  @Input() childData = "crypto";

  @Output() newChildEvent = new EventEmitter<string>();

  


  constructor() { }

  ngOnInit(): void {
  }

  addNewChild(value : string){
    this.newChildEvent.emit(value); 
  }

}
