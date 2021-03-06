import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StylingTextRootComponent} from './styling-text-root/styling-text-root.component';


const routes: Routes = [
  {
    path: '',
    component: StylingTextRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StylingTextRoutingModule { }
