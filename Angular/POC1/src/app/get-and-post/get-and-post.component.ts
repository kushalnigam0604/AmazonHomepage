import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-get-and-post',
  templateUrl: './get-and-post.component.html',
  styleUrls: ['./get-and-post.component.css']
})
export class GetAndPostComponent implements OnInit {

  users : any;
  constructor(private userData: ApiServiceService) 
  { 
    userData.apiCall().subscribe((data : any) => {
      // console.log(data);
      
      this.users = data;
    })
  }

  ngOnInit(): void {
  }

}
