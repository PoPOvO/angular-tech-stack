import {Component, Host, Inject, InjectionToken, Injector, OnInit, Optional, ReflectiveInjector} from '@angular/core';
import {CommonService} from '../../../service/common.service';
import {BROWSER_STORAGE, StorageService} from '../../../service/storage.service';
import {CommonLogger} from '../../../service/common-interface';
import {CONSOLE_LOGGER} from '../../../service/console-logger.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  providers: [CommonService]
})
export class RateComponent implements OnInit {
  constructor(
    @Optional() @Host() private commonService: CommonService,
    @Optional() @Inject(BROWSER_STORAGE) private storage: StorageService,
    @Optional() @Inject(CONSOLE_LOGGER) private logger: CommonLogger
  ) {
    console.log('Workspace-Rate-Common:', this.commonService, this.storage, this.logger);

    const COMMON = new InjectionToken<CommonService>('common');
    const injector =
      Injector.create({providers: [{provide: COMMON, useValue: new CommonService()}]});
    const url = injector.get(COMMON);
    console.log('FFFFFFFFFFFFF', injector, url);
  }

  ngOnInit(): void {
    this.commonService.printHello();
  }

  click2() {}
}
