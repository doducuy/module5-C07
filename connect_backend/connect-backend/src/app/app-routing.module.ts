import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from "./student/student-list/student-list.component";
import {StudentEditComponent} from "./student/student-edit/student-edit.component";

const routes: Routes = [
  {path:'', component: StudentListComponent},
  {path:'student/edit/:id', component: StudentEditComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
