import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './app.sqrt';
import { RouteComponentComponent } from './route-component/route-component.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeTextDirective,
    SqrtPipe,
    RouteComponentComponent,
    ChildCompComponent,
    InterpolationComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "route-component",
        component: RouteComponentComponent
      }
    ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
