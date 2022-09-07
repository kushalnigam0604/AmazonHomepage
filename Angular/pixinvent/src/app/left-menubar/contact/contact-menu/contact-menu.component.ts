import { Component ,ChangeDetectionStrategy} from '@angular/core';
import { DataTransferService } from 'src/app/data-transfer.service';

@Component({
  selector: 'app-contact-menu',
  templateUrl: './contact-menu.component.html',
  styleUrls: ['./contact-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ContactMenuComponent  {
  constructor(private changeValue: DataTransferService){}

  fillerNav = ['Filters' , 'All Contacts' , 'Frequent' , 'Starred Contacts' , 'Options' , 'Exports' , 'Imports' , 'Print' , 'Departments' , 'Engineering'];
  
  value:string | undefined;
  setValue(st : string){
    this.value  = st;
    if(st == 'All Contacts'){
      this.changeValue.sendValue('All Contacts');
    }
    if(st == 'Starred Contacts'){
      this.changeValue.sendValue('Starred Contacts');
    }
  }
}
