import { NgModule } from '@angular/core';

import { BuildingBlocksRoutingModule } from './building-blocks-routing.module';
import { BuildingBlocksRootComponent } from './building-blocks-root/building-blocks-root.component';
import {ShareModule} from '../../../share/share.module';
import { BoxModelComponent } from './box-model/box-model.component';


@NgModule({
  declarations: [BuildingBlocksRootComponent, BoxModelComponent],
  imports: [
    ShareModule,
    BuildingBlocksRoutingModule
  ]
})
export class BuildingBlocksModule { }
