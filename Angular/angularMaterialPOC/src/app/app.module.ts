import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';


import {MatCommonModule} from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatChipsModule} from '@angular/material/chips';
import { MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import {MatStepperModule} from '@angular/material/stepper';





import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgesComponent } from './badges/badges.component';
import {
  BottomSheetComponent,
  BottomSheet,
} from './bottom-sheet/bottom-sheet.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { ChipsComponent } from './chips/chips.component';
import { DialogComponent , DialogExample } from './dialog/dialog.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { MenuComponent } from './menu/menu.component';
import { TreeChecklistExample } from './tree/tree.component';
import { StepperComponent } from './stepper/stepper.component';
const materialElement = [
  MatAutocompleteModule,
  MatBottomSheetModule,
  MatFormFieldModule,
  MatInputModule,
  MatBadgeModule,
  MatListModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatIconModule,
  MatCommonModule,
  MatDialogModule,
  MatButtonModule,
  MatExpansionModule,
  MatMenuModule,
  MatTreeModule,
  MatStepperModule
];

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    BadgesComponent,
    BottomSheetComponent,
    BottomSheet,
    ButtonToggleComponent,
    CheckBoxComponent,
    ChipsComponent,
    DialogComponent,
    DialogExample,
    ExpansionPanelComponent,
    MenuComponent,
    TreeChecklistExample,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    materialElement,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
