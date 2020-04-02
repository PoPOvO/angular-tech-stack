import { NgModule } from '@angular/core';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { RateComponent } from './rate/rate.component';
import {ShareModule} from '../../share/share.module';
import { CardComponent } from './card/card.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SliderComponent } from './slider/slider.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [RateComponent, CardComponent, TimelineComponent, SliderComponent, TableComponent],
  imports: [
    ShareModule,
    WorkspaceRoutingModule
  ]
})
export class WorkspaceModule { }
