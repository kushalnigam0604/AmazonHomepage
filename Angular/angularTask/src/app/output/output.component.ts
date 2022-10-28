import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  msg : string = "";
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    this.msg = this.service.getMessage();
  }

}
