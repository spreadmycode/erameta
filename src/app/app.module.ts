import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CalculatorComponent } from './calculator/calculator.component';
import { StepperComponent } from './stepper/stepper.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FileDragNDropDirective } from './file-drag-n-drop.directive';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    StepperComponent,
    PageNotFoundComponent,
    FileDragNDropDirective,
    DialogConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogConfirmComponent],
})
export class AppModule {}
