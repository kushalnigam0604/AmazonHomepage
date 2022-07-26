import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './material-module/login-page/login-page.component';

const routes: Routes = [

  { path: 'material', loadChildren: () => import('./material-module/material-module.module').then(m => m.MaterialModuleModule) },

  {component: LoginPageComponent,path : 'login-page'},

  {path: '**', redirectTo: 'login-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
