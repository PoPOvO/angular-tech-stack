import { NgModule } from '@angular/core';

import { StylingTextRoutingModule } from './styling-text-routing.module';
import { StylingTextRootComponent } from './styling-text-root/styling-text-root.component';
import {ShareModule} from '../../../share/share.module';


@NgModule({
  declarations: [StylingTextRootComponent],
  imports: [
    ShareModule,
    StylingTextRoutingModule
  ]
})
export class StylingTextModule { }
