import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryPageComponent } from './dictionary_simple/dictionary-page/dictionary-page.component';
import { DictionaryDetailPageComponent } from './dictionary_simple/dictionary-detail-page/dictionary-detail-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateProductComponent } from './management_product/create-product/create-product.component';
import { ListProductComponent } from './management_product/list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryPageComponent,
    DictionaryDetailPageComponent,
    CreateProductComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
