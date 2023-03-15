import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./customer/customer/customer.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {EditComponent} from "./customer/edit/edit.component";
import {CreateComponent} from "./customer/create/create.component";
import {CongcudungcuListComponent} from "./congcudungcu/congcudungcu-list/congcudungcu-list.component";
import {CongcudungcuCreateComponent} from "./congcudungcu/congcudungcu-create/congcudungcu-create.component";

const routes: Routes = [
  {path: "customer", component: CustomerComponent},
  {path: "customer/list", component: CustomerListComponent},
  {path:"customer/edit/:id", component: EditComponent},
  {path:"customer/create", component: CreateComponent},
  {path:"congcudungcu/list", component: CongcudungcuListComponent},
  {path:"congcudungcu/create", component: CongcudungcuCreateComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
