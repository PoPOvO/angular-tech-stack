import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuildingBlocksRootComponent} from './building-blocks-root/building-blocks-root.component';
import {BoxModelComponent} from './box-model/box-model.component';


const routes: Routes = [
  {
    path: '',
    component: BuildingBlocksRootComponent,
    children: [
      { path: 'box', component: BoxModelComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingBlocksRoutingModule { }
