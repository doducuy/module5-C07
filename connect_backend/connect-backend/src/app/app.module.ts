import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentEditComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
