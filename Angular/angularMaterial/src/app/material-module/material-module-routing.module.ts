import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleComponent } from './material-module.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [

  { path: 'material', component: MaterialModuleComponent },
  {component: LoginPageComponent,path : 'login-page'},
  {component: UserComponent, path:'user'},
  {path: '**', redirectTo: 'login-page' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialModuleRoutingModule { }
