import {Component, Host, HostListener, OnInit, Optional} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  providers: [CommonService]
})
export class RateComponent implements OnInit {
  constructor(@Optional() @Host() private commonService: CommonService) {
    console.log('Workspace-Rate-Common:', this.commonService);
  }

  ngOnInit(): void {
    this.commonService.printHello();
  }

  click2() {}
}
