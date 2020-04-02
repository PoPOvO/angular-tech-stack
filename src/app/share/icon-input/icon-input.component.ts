import {AfterViewInit, Component, ContentChild, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {IconInputRefDirective} from './icon-input-ref.directive';

/**
 * 带图标的输入框
 */
@Component({
  selector: 'app-icon-input',
  templateUrl: './icon-input.component.html',
  styleUrls: ['./icon-input.component.css']
})
export class IconInputComponent implements OnInit {
  @Input() icon: string;

  @ContentChild(IconInputRefDirective, {static: false})
  iconInputRef: IconInputRefDirective;

  // 监听宿主（icon-input本身）的属性变化，并为宿主设置属性
  @HostBinding('class.focus')
  get focus() {
    return this.iconInputRef ? this.iconInputRef.focus : false;
  }

  ngOnInit(): void {
  }
}
