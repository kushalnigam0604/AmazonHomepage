import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';




const materialelements = [MatFormFieldModule , MatInputModule , MatButtonModule , MatTableModule]

@NgModule({
  declarations: [],
  imports: [
    materialelements
  ],
  exports: [
    materialelements
  ]
})
export class MaterialModule { }
