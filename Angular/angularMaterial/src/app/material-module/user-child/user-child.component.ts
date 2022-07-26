import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent implements OnInit {

  constructor() { }

  @Input() imageUrl:string = '';

  ngOnInit(): void {
  }
  
}
