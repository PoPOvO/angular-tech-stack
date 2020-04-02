import {Component, Host, HostBinding, HostListener, Inject, Optional} from '@angular/core';
import {CommonService} from '../../../service/common.service';
import {CONSOLE_LOGGER} from '../../../service/console-logger.service';
import {CommonLogger} from '../../../service/common-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CommonService],
})
export class CardComponent {
  constructor(
    @Optional() @Host() private commonService: CommonService,
    @Optional() @Inject(CONSOLE_LOGGER) private logger: CommonLogger
  ) {
    console.log('Workspace-Card-Common:', this.commonService, this.logger);
  }

  @HostBinding('attr.test')
  get test() {
    return 'test';
  }

  click1(e) {
  }
  //
  // @HostListener('window:click', ['$event'])
  // clickListener(e) {
  //   console.log('SSSSSss监听到click', e);
  //   console.log('错误提交');
  //   console.log('正常提交');
  // }
}
