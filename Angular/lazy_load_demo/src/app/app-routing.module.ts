import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'a', loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) }, { path: 'b', loadChildren: () => import('./moduleb/moduleb.module').then(m => m.ModulebModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
