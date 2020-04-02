import {Directive, HostListener} from '@angular/core';

// 监听`icon-input`中`input`的事件
@Directive({
  selector: '[appIconInputRef]'
})
export class IconInputRefDirective {
  focus: boolean;

  // 监听宿主的事件，即`input`
  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }

  constructor() { }

}
