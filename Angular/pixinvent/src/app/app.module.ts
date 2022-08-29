import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppRoutingModule , RoutingComponent } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatNativeDateModule} from '@angular/material/core';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';


import { AppComponent } from './app.component';
import { LeftMenubarComponent } from './left-menubar/left-menubar.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './left-menubar/contact/contact.component';
import { DashboardComponent } from './left-menubar/dashboard/dashboard.component';
import { TemplateComponent } from './left-menubar/template/template.component';
import { MailComponent } from './left-menubar/mail/mail.component';
import { ChatComponent } from './left-menubar/chat/chat.component';
import { TodoComponent } from './left-menubar/todo/todo.component';
import { KanbanComponent } from './left-menubar/kanban/kanban.component';
import { CalenderComponent } from './left-menubar/calender/calender.component';
import { InvoiceComponent } from './left-menubar/invoice/invoice.component';
import { UserComponent } from './left-menubar/user/user.component';
import { FileComponent } from './left-menubar/file/file.component';
import { PagesComponent } from './left-menubar/pages/pages.component';
import { MediasComponent } from './left-menubar/medias/medias.component';
import { AuthenticationComponent } from './left-menubar/authentication/authentication.component';
import { MiscComponent } from './left-menubar/misc/misc.component';
import { ContactMenuComponent } from './left-menubar/contact/contact-menu/contact-menu.component';
import { ContactListComponent } from './left-menubar/contact/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenubarComponent,
    HeaderComponent,
    ContactComponent,
    DashboardComponent,
    TemplateComponent,
    MailComponent,
    ChatComponent,
    TodoComponent,
    KanbanComponent,
    CalenderComponent,
    InvoiceComponent,
    UserComponent,
    FileComponent,
    PagesComponent,
    MediasComponent,
    AuthenticationComponent,
    MiscComponent,
    RoutingComponent,
    ContactMenuComponent,
    ContactListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
