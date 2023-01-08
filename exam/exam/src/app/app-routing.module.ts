import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./lohang/list/list.component";
import {CreateComponent} from "./lohang/create/create.component";

const routes: Routes = [
  {path:"lohang/list", component: ListComponent},
  {path:"lohang/create", component: CreateComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
