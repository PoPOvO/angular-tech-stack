import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {AdItem} from '../ad-item';
import {AdService} from '../ad.service';
import {AdBannerComponent} from '../ad-banner/ad-banner.component';
import {AdDirective} from '../ad.directive';
import {HeroProfileComponent} from '../hero-profile/hero-profile.component';
import {AdComponent} from '../ad.component';

@Component({
  selector: 'app-layout-root',
  templateUrl: './layout-root.component.html',
  styleUrls: ['./layout-root.component.css']
})
export class LayoutRootComponent implements OnInit {
  @ViewChild('adBanner', {static: false})
  adBanner: AdBannerComponent;

  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  ads: AdItem[];

  constructor(
    private adService: AdService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

  changeAd() {
    this.adBanner.loadComponent();
  }

  addAd() {
    const viewContainerRef = this.adHost.viewContainerRef;
    const adItem = new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'});
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    // viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as AdComponent).data = adItem.data;
  }

  clearAd() {
    this.adHost.viewContainerRef.clear();
  }
}
