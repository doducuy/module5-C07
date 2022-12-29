import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryPageComponent} from "./dictionary_simple/dictionary-page/dictionary-page.component";
import {DictionaryDetailPageComponent} from "./dictionary_simple/dictionary-detail-page/dictionary-detail-page.component";
import {CreateProductComponent} from "./management_product/create-product/create-product.component";
import {ListProductComponent} from "./management_product/list-product/list-product.component";

const routes: Routes = [
  {path: "", component: DictionaryPageComponent},
  {path:"detail/:name", component: DictionaryDetailPageComponent},
  {path:"product/create", component: CreateProductComponent},
  {path:"product/list", component: ListProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
