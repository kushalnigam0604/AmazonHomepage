import {AfterViewInit, Component, ViewChild , OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl , FormGroup} from '@angular/forms';
import { DataTransferService } from 'src/app/data-transfer.service';

export interface UserData {
  User: string;
  Full_Name: string;
  Email: string;
  Phone: number;
  Favorite: boolean;
}


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements AfterViewInit ,OnInit {

  displayedColumns: string[] = ['User', 'Full_Name', 'Email', 'Phone' , 'Favorite'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

   users = [
    {
      User : 'abhi',
      Full_Name:'Abhishek',
      Email:'abhi@gamil.com',
      Phone: 9957354645,
      Favorite: true
    },
    {
     User : 'yash',
     Full_Name:'Aman',
     Email:'yash@gamil.com',
     Phone: 9957455667,
     Favorite : false
   },
   {
     User : 'naman',
     Full_Name:'Rohan',
     Email:'Rohan@gamil.com',
     Phone: 9957359923,
     Favorite: false
   },
   {
     User : 'kush',
     Full_Name:'Kushal',
     Email:'Kushal@gamil.com',
     Phone: 7466397884,
     Favorite: true
   },
   {
     User : 'anjul',
     Full_Name:'Harry',
     Email:'Harry@gamil.com',
     Phone: 8849576638,
     Favorite: false
   },
   {
     User : 'anurag',
     Full_Name:'Animesh',
     Email:'Animesh@gamil.com',
     Phone: 6483674577,
     Favorite: false
   },
   {
     User : 'kapil',
     Full_Name:'Harshit',
     Email:'Harshit@gamil.com',
     Phone: 8634758734,
     Favorite: false
   },
   {
    User : 'yash',
    Full_Name:'Aman',
    Email:'yash@gamil.com',
    Phone: 9957455667,
    Favorite : false
  },
  {
    User : 'naman',
    Full_Name:'Rohan',
    Email:'Rohan@gamil.com',
    Phone: 9957359923,
    Favorite: false
  },
  {
    User : 'kush',
    Full_Name:'Kushal',
    Email:'Kushal@gamil.com',
    Phone: 7466397884,
    Favorite: true
  },
  {
    User : 'anjul',
    Full_Name:'Harry',
    Email:'Harry@gamil.com',
    Phone: 8849576638,
    Favorite: false
  },
  {
    User : 'anurag',
    Full_Name:'Animesh',
    Email:'Animesh@gamil.com',
    Phone: 6483674577,
    Favorite: false
  },
  {
    User : 'kapil',
    Full_Name:'Harshit',
    Email:'Harshit@gamil.com',
    Phone: 8634758734,
    Favorite: false
  },
  {
    User : 'yash',
    Full_Name:'Aman',
    Email:'yash@gamil.com',
    Phone: 9957455667,
    Favorite : false
  },
  {
    User : 'naman',
    Full_Name:'Rohan',
    Email:'Rohan@gamil.com',
    Phone: 9957359923,
    Favorite: false
  },
  {
    User : 'kush',
    Full_Name:'Kushal',
    Email:'Kushal@gamil.com',
    Phone: 7466397884,
    Favorite: true
  },
  {
    User : 'anjul',
    Full_Name:'Harry',
    Email:'Harry@gamil.com',
    Phone: 8849576638,
    Favorite: false
  },
  {
    User : 'anurag',
    Full_Name:'Animesh',
    Email:'Animesh@gamil.com',
    Phone: 6483674577,
    Favorite: false
  },
  {
    User : 'kapil',
    Full_Name:'Harshit',
    Email:'Harshit@gamil.com',
    Phone: 8634758734,
    Favorite: false
  },
  {
    User : 'kapil',
    Full_Name:'Harshit',
    Email:'Harshit@gamil.com',
    Phone: 8634758734,
    Favorite: false
  }
   ]

   AllContactVariable:boolean = false;
   StarredContactVariable:boolean = false;
  constructor(private changeValueOfTable: DataTransferService) {
    
     
    // Assign the data to the data source for the table to render
   
      this.dataSource = new MatTableDataSource(this.users);
    
  }

  changeValue(val : any){
    if(val.Favorite == true){
      val.Favorite = false;
    }
    else{
      val.Favorite = true;
    }
    console.log(val);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  pagingValue_1 : number = 10;
  pagingValue_2 : number = 15;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  value:any;
  openNav() {
    this.value = true;
  }
  
  closeNav() {
    this.value = false;
  }
  public contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'User' : new FormControl(null),
      'Full_Name' : new FormControl(null ),
      'Email' : new FormControl(null),
      'Phone' : new FormControl(null),
      'Address' : new FormControl(null),
      'Company' : new FormControl(null),
      'JobTitle' : new FormControl(null)
      })

      this.changeValueOfTable.getValue().subscribe(changeValueOfTable => {
        if(changeValueOfTable == 'All Contacts'){
          this.AllContactVariable = true;
          this.StarredContactVariable = false;
          this.update();
        }
        else{
                this.StarredContactVariable = true;
                this.AllContactVariable = false;
                this.update();
        }
      })
  }
  onSubmit(){
    console.log(this.contactForm.value);
  }
  starredUsers = [{User: '',
    Full_Name: '',
    Email : '',
    Phone : 0,
    Favorite: false }]
  update(){
    if(this.AllContactVariable === true){
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      console.log('all');

    }
    if(this.StarredContactVariable === true){
      for(let i=0 ; i<this.users.length ; i++){
        if(this.users[i].Favorite === true){
          this.starredUsers.push(this.users[i]);
        }
      }
      this.starredUsers.splice(0,1);
      this.dataSource = new MatTableDataSource(this.starredUsers);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      console.log('starred');

    }
  }
  
}
