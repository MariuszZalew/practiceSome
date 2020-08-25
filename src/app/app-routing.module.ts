import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListViewComponent } from './list-view/list-view.component';
import { FormViewComponent } from "./form-view/form-view.component";

const routes: Routes = [
  {path: '', component: ListViewComponent},
  {path: 'FormView', component: FormViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
