import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverStatus = "No server created.";

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    },4000);
  }

  ngOnInit(): void {
  }

  onServerStatuscall(){
    this.serverStatus = "Server created."
  }

}
