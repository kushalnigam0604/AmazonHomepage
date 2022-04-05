import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-component',
  templateUrl: './route-component.component.html',
  styleUrls: ['./route-component.component.css']
})
export class RouteComponentComponent implements OnInit {

  newRoute = "New Route created.";
  
  constructor() { }

  ngOnInit(): void {
  }

}
