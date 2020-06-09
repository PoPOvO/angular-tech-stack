import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutRootComponent} from './layout-root/layout-root.component';
import {NormalLayoutComponent} from './normal-layout/normal-layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutRootComponent,
    children: [
      { path: 'normal', component: NormalLayoutComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
