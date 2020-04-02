import { NgModule } from '@angular/core';
import { G2ChartRootComponent } from './g2-chart-root/g2-chart-root.component';
import {ShareModule} from '../../share/share.module';
import {G2ChartRoutingModule} from './g2-chart-routing.module';
import { G2CustomLegendIIComponent } from './g2-custom-legend-ii/g2-custom-legend-ii.component';
import { G2CustomLegendIComponent } from './g2-custom-legend-i/g2-custom-legend-i.component';



@NgModule({
  declarations: [G2ChartRootComponent, G2CustomLegendIIComponent, G2CustomLegendIComponent],
  imports: [
    ShareModule,
    G2ChartRoutingModule
  ]
})
export class G2ChartModule { }
