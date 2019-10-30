import {Component, Host, HostListener, Optional} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  // providers: [CommonService]
})
export class CardComponent {
  constructor(@Optional() @Host() private commonService: CommonService) {
    console.log('Workspace-Card-Common:', this.commonService);
  }

  click1(e) {
  }

  @HostListener('window:click', ['$event'])
  clickListener(e) {
    console.log('SSSSSss监听到click', e);
  }
}
