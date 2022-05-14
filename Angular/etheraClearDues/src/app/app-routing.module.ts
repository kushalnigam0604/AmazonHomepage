import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { CampaignComponent } from './campaign/campaign.component';
import { ProductComponent } from './product/product.component';
import { QueriesComponent } from './queries/queries.component';



const routes: Routes = [
  {path:"home" , component: HomeComponent},
  {path:"collections" , component: CollectionsComponent},
  {path:"recovery" , component: RecoveryComponent},
  {path:"campaign" , component: CampaignComponent},
  {path:"product" , component: ProductComponent},
  {path:"queries" , component: QueriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [HomeComponent,CollectionsComponent,RecoveryComponent,CampaignComponent,ProductComponent,QueriesComponent];
