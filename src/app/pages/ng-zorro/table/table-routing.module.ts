import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableRootComponent} from './table-root/table-root.component';


const routes: Routes = [
  {
    path: '',
    component: TableRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
