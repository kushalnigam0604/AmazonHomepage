import { Component ,ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-contact-menu',
  templateUrl: './contact-menu.component.html',
  styleUrls: ['./contact-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ContactMenuComponent  {

  fillerNav = ['Filters' , 'All Contatcts' , 'Frequent' , 'Starred Contacts' , 'Options' , 'Exports' , 'Imports' , 'Print' , 'Departments' , 'Engineering'];
  
  value:string | undefined;
  setValue(st : string){
    this.value  = st;
  }
}
