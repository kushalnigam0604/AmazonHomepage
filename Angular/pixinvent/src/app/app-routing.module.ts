import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './left-menubar/authentication/authentication.component';
import { CalenderComponent } from './left-menubar/calender/calender.component';
import { ChatComponent } from './left-menubar/chat/chat.component';
import { ContactComponent } from './left-menubar/contact/contact.component';
import { DashboardComponent } from './left-menubar/dashboard/dashboard.component';
import { FileComponent } from './left-menubar/file/file.component';
import { InvoiceComponent } from './left-menubar/invoice/invoice.component';
import { KanbanComponent } from './left-menubar/kanban/kanban.component';
import { MailComponent } from './left-menubar/mail/mail.component';
import { MediasComponent } from './left-menubar/medias/medias.component';
import { MiscComponent } from './left-menubar/misc/misc.component';
import { PagesComponent } from './left-menubar/pages/pages.component';
import { TemplateComponent } from './left-menubar/template/template.component';
import { TodoComponent } from './left-menubar/todo/todo.component';
import { UserComponent } from './left-menubar/user/user.component';

const routes: Routes = [
  { path: 'Authentication', component: AuthenticationComponent },
  { path: 'Calender', component: CalenderComponent },
  { path: 'Chat', component: ChatComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'File', component: FileComponent },
  { path: 'Invoice', component: InvoiceComponent },
  { path: 'Kanban', component: KanbanComponent },
  { path: 'Mail', component: MailComponent },
  { path: 'Medias', component: MediasComponent },
  { path: 'Misc', component: MiscComponent },
  { path: 'Pages', component: PagesComponent },
  { path: 'Template', component: TemplateComponent },
  { path: 'Todo', component: TodoComponent },
  { path: 'User', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RoutingComponent = [AuthenticationComponent , CalenderComponent , ChatComponent , ContactComponent , DashboardComponent , FileComponent , InvoiceComponent , KanbanComponent , MailComponent , MediasComponent , MiscComponent , PagesComponent , TemplateComponent , TodoComponent , UserComponent];
