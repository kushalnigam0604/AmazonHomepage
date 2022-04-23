import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './app.sqrt';
import { RouteComponentComponent } from './route-component/route-component.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventsComponent } from './events/events.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { GetAndPostComponent } from './get-and-post/get-and-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeTextDirective,
    SqrtPipe,
    RouteComponentComponent,
    ChildCompComponent,
    InterpolationComponent,
    EventsComponent,
    Sibling1Component,
    Sibling2Component,
    GetAndPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "route-component",
        component: RouteComponentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
