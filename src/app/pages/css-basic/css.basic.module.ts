import { NgModule } from '@angular/core';
import {LayoutModule} from './layout/layout.module';
import {BuildingBlocksModule} from './building-blocks/building-blocks.module';
import {StylingTextModule} from './styling-text/styling-text.module';



@NgModule({
  declarations: [],
  imports: [
    BuildingBlocksModule,
    StylingTextModule,
    LayoutModule
  ]
})
export class CssBasicModule { }
