import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './app.sqrt';
import { RouteComponentComponent } from './route-component/route-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChangeTextDirective,
    SqrtPipe,
    RouteComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   {
    //     path: ""
    //   }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
