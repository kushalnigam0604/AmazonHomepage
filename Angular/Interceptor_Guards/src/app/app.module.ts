import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { APIService } from './api.service';
import { ApiGuard } from './api.guard';
import { IntercepterService } from './intercepter.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [APIService,ApiGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass : IntercepterService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
