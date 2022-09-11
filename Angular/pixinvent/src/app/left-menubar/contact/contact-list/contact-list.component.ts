import {AfterViewInit, Component, ViewChild , OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl , FormGroup} from '@angular/forms';
import { DataTransferService } from 'src/app/data-transfer.service';

export interface UserData {
  id: number;
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
      id : 1,
      User : 'abhi',
      Full_Name:'Abhishek Verma',
      Email:'abhi@gamil.com',
      Phone: 9957354645,
      Favorite: true
    },
    {
      id : 2,
     User : 'yash',
     Full_Name:'Yash Mishra',
     Email:'yash@gamil.com',
     Phone: 9957455667,
     Favorite : false
   },
   {
     id : 3,
     User : 'rohan',
     Full_Name:'Rohan Gupta',
     Email:'rohan@gamil.com',
     Phone: 9957359923,
     Favorite: false
   },
   {
     id : 4,
     User : 'kushal',
     Full_Name:'Kushal Nigam',
     Email:'kushal@gamil.com',
     Phone: 7466397884,
     Favorite: true
   },
   {
     id : 5,
     User : 'anjul',
     Full_Name:'Anjul Chaturvedi',
     Email:'anjul@gamil.com',
     Phone: 8849576638,
     Favorite: false
   },
   {
     id : 6,
     User : 'anurag',
     Full_Name:'Anurag Singh',
     Email:'anurag@gamil.com',
     Phone: 6483674577,
     Favorite: false
   },
   {
     id : 7,
     User : 'kapil',
     Full_Name:'Kapil Sharma',
     Email:'kapil@gamil.com',
     Phone: 8634758734,
     Favorite: false
   },
   {
    id : 8,
    User : 'aman',
    Full_Name:'Aman Sinha',
    Email:'aman@gamil.com',
    Phone: 9957455667,
    Favorite : false
  },
  {
    id : 9,
    User : 'naman',
    Full_Name:'Naman Gupta',
    Email:'naman@gamil.com',
    Phone: 9957359923,
    Favorite: false
  },
  {
    id : 10,
    User : 'kushagra',
    Full_Name:'Kushagra Singh',
    Email:'kushagra@gamil.com',
    Phone: 7466397884,
    Favorite: true
  },
  {
    id : 11 ,
    User : 'harry',
    Full_Name:'Harry Singh',
    Email:'Harry@gamil.com',
    Phone: 8849576638,
    Favorite: false
  },
  {
    id : 12,
    User : 'animesh',
    Full_Name:'Animesh Shukla',
    Email:'animesh@gamil.com',
    Phone: 6483674577,
    Favorite: false
  },
  {
    id : 13,
    User : 'sankalp',
    Full_Name:'Sankalp Tiwari',
    Email:'sankalp@gamil.com',
    Phone: 8634758734,
    Favorite: false
  },
  {
    id : 14,
    User : 'anant',
    Full_Name:'Anant Mishra',
    Email:'anant@gamil.com',
    Phone: 9957455667,
    Favorite : false
  },
  {
    id : 15,
    User : 'hardik',
    Full_Name:'Hardik Panday',
    Email:'hardik@gamil.com',
    Phone: 9957359923,
    Favorite: false
  },
  {
    id : 16,
    User : 'paul',
    Full_Name:'Paul Hammer',
    Email:'paul@gamil.com',
    Phone: 7466397884,
    Favorite: true
  },
  { 
    id : 17,
    User : 'james',
    Full_Name:'James Bond',
    Email:'james@gamil.com',
    Phone: 8849576638,
    Favorite: false
  },
  {
    id : 18,
    User : 'tony',
    Full_Name:'Tony Stark',
    Email:'tony@gamil.com',
    Phone: 6483674577,
    Favorite: false
  },
  {
    id : 19,
    User : 'heath',
    Full_Name:'Heath Adams',
    Email:'heath@gamil.com',
    Phone: 8634758734,
    Favorite: false
  },
  {
    id : 20,
    User : 'walter',
    Full_Name:'Walter White',
    Email:'walter@gamil.com',
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
  starredUsers = [{
    id :0,
    User: '',
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
      this.starredUsers = [];

    }
    if(this.StarredContactVariable === true){
      for(let i=0 ; i<this.users.length ; i++){
        if(this.users[i].Favorite === true){
          this.starredUsers.push(this.users[i]);
        }
      }
      if(this.starredUsers[0].Full_Name == '')
      this.starredUsers.splice(0,1);
      this.dataSource = new MatTableDataSource(this.starredUsers);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      console.log('starred');

    }
  }
  
}
