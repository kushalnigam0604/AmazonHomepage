import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { UserComponent } from './user/user.component';
import { APIService } from './api.service';
import { UserChildComponent } from './user-child/user-child.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserComponent,
    UserChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
    ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
