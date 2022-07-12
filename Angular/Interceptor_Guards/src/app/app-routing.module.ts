import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiGuard } from './api.guard';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {component: LoginComponent,path : 'login'},
  {component: UserComponent, path:'user', canActivate:[ApiGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
