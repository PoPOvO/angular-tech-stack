import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DraggableGridLibRootComponent} from './draggable-grid-lib-root/draggable-grid-lib-root.component';


const routes: Routes = [{
  path: '',
  component: DraggableGridLibRootComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraggableGridLibRoutingModule { }
