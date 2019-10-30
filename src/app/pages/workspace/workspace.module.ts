import { NgModule } from '@angular/core';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { RateComponent } from './rate/rate.component';
import {ShareModule} from '../../share/share.module';
import { CardComponent } from './card/card.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [RateComponent, CardComponent, TimelineComponent, SliderComponent],
  imports: [
    ShareModule,
    WorkspaceRoutingModule
  ]
})
export class WorkspaceModule { }
