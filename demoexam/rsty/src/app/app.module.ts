import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { CustomerTypeComponent } from './customer-type/customer-type/customer-type.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './customer/edit/edit.component';
import {NgxPaginationModule} from "ngx-pagination";
import { HeaderComponent } from './customer/common/header/header.component';
import { FooterComponent } from './customer/common/footer/footer.component';
import { NavigateComponent } from './customer/common/navigate/navigate.component';
import { HomeComponent } from './customer/common/home/home.component';
import { CreateComponent } from './customer/create/create.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CongcudungcuListComponent } from './congcudungcu/congcudungcu-list/congcudungcu-list.component';
import { CongcudungcuCreateComponent } from './congcudungcu/congcudungcu-create/congcudungcu-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerTypeComponent,
    CustomerListComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    NavigateComponent,
    HomeComponent,
    CreateComponent,
    CongcudungcuListComponent,
    CongcudungcuCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
