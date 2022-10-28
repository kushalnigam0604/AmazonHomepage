import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  users : any;
  constructor(private service : ServiceService) { 
    this.users = service.users();

  }

  message : string | undefined;

  ngOnInit(): void {
    this.service.receivedMessage().subscribe((data) => {
      this.message = data;
    })
  }
}
