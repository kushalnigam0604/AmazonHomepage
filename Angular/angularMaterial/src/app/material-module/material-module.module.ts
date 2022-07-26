import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from '../material-module/user/user.component';
import { LoginPageComponent } from '../material-module/login-page/login-page.component';
import { UserChildComponent } from '../material-module/user-child/user-child.component';
import { APIService } from '../api.service';






const materialelements = [MatFormFieldModule , MatInputModule , MatButtonModule , MatTableModule]

@NgModule({
  declarations: [
    UserComponent,
    LoginPageComponent,
    UserChildComponent
  ],
  imports: [
    materialelements,
    ReactiveFormsModule

  ],
  exports: [
    materialelements
  ],
  providers :[APIService]
})
export class MaterialModuleModule { }
