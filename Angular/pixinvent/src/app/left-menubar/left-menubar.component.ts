import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-left-menubar',
  templateUrl: './left-menubar.component.html',
  styleUrls: ['./left-menubar.component.css']
})
export class LeftMenubarComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  fillerNav = ['Dashboard' , 'Template' , 'Mail' , 'Chat' , 'Todo' , 'Kanban' , 'File' , 'Contact' , 'Calender' , 'Invoice' , 'User' , 'Pages' , 'Medias', 'Authentication' , 'Misc'];

  // fillerContent = Array.from(
  //   {length: 1},
  //   () =>
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. `,
  // );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
