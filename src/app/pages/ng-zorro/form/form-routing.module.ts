import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormRootComponent} from './form-root/form-root.component';


const routes: Routes = [
  {
    path: '',
    component: FormRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
