import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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
export class ContactListComponent implements AfterViewInit {

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
  constructor() {
     
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  changeValue(value:boolean){
    if(value === true)
    value = false;
    else
    value = true;
    return value;
    console.log(value);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


