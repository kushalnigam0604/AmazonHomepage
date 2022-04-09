import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverStatus = "No server created.";
  serverName = 'Testserver';
  serverCreated = false;
  username = '';
  servers = ['Testserver'];
  condition = true;
  logArray = [1];

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    },4000);
    
  }

  ngOnInit(): void {
  }

  onServerStatuscall(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverStatus = "Server was created." + this.serverName;
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;  
  }

  deleteUsername(){
    this.username = '';
  }

  changeCondition(){
    if(this.condition==true)
    this.condition = false;
    else
    this.condition = true;

    this.logArray.push(this.logArray.length + 1);
  }

}
