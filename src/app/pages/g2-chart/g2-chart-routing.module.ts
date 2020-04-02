import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {G2ChartRootComponent} from './g2-chart-root/g2-chart-root.component';


const routes: Routes = [
  {
    path: '',
    component: G2ChartRootComponent,
    data: {desc: 'G2图表测试相关'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class G2ChartRoutingModule { }
