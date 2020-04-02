import {Component, Host, HostListener, Input, Optional} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html'
})
export class TimelineComponent {
  @Input()
  message;

  constructor(@Optional() @Host() private commonService: CommonService) {
    console.log('Workspace-TimeLine-Common:', this.commonService);
  }
}
