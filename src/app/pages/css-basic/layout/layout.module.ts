import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutRootComponent } from './layout-root/layout-root.component';
import {ShareModule} from '../../../share/share.module';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import {AdDirective} from './ad.directive';
import { NormalLayoutComponent } from './normal-layout/normal-layout.component';


@NgModule({
  declarations: [LayoutRootComponent, AdBannerComponent, HeroJobAdComponent, HeroProfileComponent, AdDirective, NormalLayoutComponent],
  imports: [
    ShareModule,
    LayoutRoutingModule
  ],
  entryComponents: [
    HeroJobAdComponent, HeroProfileComponent
  ]
})
export class LayoutModule { }
