import { NgModule } from '@angular/core';

import { DraggableGridLibRoutingModule } from './draggable-grid-lib-routing.module';
import { GridsterLibComponent } from './gridster-lib/gridster-lib.component';
import {ShareModule} from '../../../share/share.module';
import { DraggableGridLibRootComponent } from './draggable-grid-lib-root/draggable-grid-lib-root.component';


@NgModule({
  declarations: [GridsterLibComponent, DraggableGridLibRootComponent],
  imports: [
    ShareModule,
    DraggableGridLibRoutingModule
  ]
})
export class DraggableGridLibModule { }
