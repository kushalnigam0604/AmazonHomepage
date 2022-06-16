import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cssHome : boolean = false;
  cssCollection : boolean = false;
  cssRecovery : boolean = false;
  cssCampaign : boolean = false;
  cssProduct : boolean = false;
  cssQueries : boolean = false;

  addCss(data : string){
    this.cssHome = false;
    this.cssCollection = false;
    this.cssRecovery = false;
    this.cssCampaign = false;
    this.cssProduct = false;
    this.cssQueries = false;
    
    if(data === 'Home')
    {
      if(this.cssHome === false){
        this.cssHome = true;
      }
      else{
        this.cssHome = false;
      }
    }
    else if(data === 'Collection'){
      if(this.cssCollection === false){
        this.cssCollection = true;
      }
      else{
        this.cssCollection = false;
      }
    }
    else if(data === 'Recovery'){
      if(this.cssRecovery === false){
        this.cssRecovery = true;
      }
      else{
        this.cssRecovery = false;
      }
    }
    else if(data === 'Campaign'){
      if(this.cssCampaign === false){
        this.cssCampaign = true;
      }
      else{
        this.cssCampaign = false;
      }
    }
    else if(data === 'Product'){
      if(this.cssProduct === false){
        this.cssProduct = true;
      }
      else{
        this.cssProduct = false;
      }
    }
    else if(data === 'Queries'){
      if(this.cssQueries === false){
        this.cssQueries = true;
      }
      else{
        this.cssQueries = false;
      }
    }
  }

}
