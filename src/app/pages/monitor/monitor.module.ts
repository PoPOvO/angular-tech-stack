import { NgModule } from '@angular/core';

import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor.component';
import {ShareModule} from '../../share/share.module';
import { LineChrtComponent } from './line-chrt/line-chrt.component';


@NgModule({
  declarations: [MonitorComponent, LineChrtComponent],
  imports: [
    ShareModule,
    MonitorRoutingModule
  ]
})
export class MonitorModule { }
