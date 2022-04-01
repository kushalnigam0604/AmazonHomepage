import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POC1';
  months = ["jan","feb","march","apr","may","june","july","aug","sep","oct","nov","dec"];
  isAvailable = false;
  istrue = true;
}
