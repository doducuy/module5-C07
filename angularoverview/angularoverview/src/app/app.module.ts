import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import {FormsModule} from "@angular/forms";
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCalculatorComponent,
    ColorPickerComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
