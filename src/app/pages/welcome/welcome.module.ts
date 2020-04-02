import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {ShareModule} from '../../share/share.module';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    ShareModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule {
  constructor() {
    console.log("WelcomeModule 初始化");
  }
}
