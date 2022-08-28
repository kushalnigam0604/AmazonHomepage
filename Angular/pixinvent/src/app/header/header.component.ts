import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flag = 'En';
  flags = [ 'English','French','Portuguese','German'];

  changeValue(i:string){
    this.flag = i.slice(0,2);
  }
}
