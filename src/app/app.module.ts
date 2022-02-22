import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatListModule} from '@angular/material/list';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {AngularFireModule} from "@angular/fire/compat";
import {FoodPickerComponent} from './component/food-picker/food-picker.component';
import {FoodListComponent} from './component/food-list/food-list.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {DialogBoxComponent} from './component/dialog-box/dialog-box.component';
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {FoodPlanComponent} from './component/food-plan/food-plan.component';
import {BackgroundComponent} from './component/background/background.component';
import {RotateButtonComponent} from './component/rotate-button/rotate-button.component';
import {NavigationArrowComponent} from './component/navigation-arrow/navigation-arrow.component';
import {FoodTextComponent} from './component/food-text/food-text.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodPickerComponent,
    FoodListComponent,
    DialogBoxComponent,
    FoodPlanComponent,
    BackgroundComponent,
    RotateButtonComponent,
    NavigationArrowComponent,
    FoodTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    DragDropModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
