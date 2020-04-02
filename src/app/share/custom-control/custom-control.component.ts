import {Component, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const CONTROLLER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomControlComponent),
  multi: true
};
/**
 * 用户自定义count控件:
 *
 * View：这里的Model并不是`_count`，而是主组件中的`ngModel`或者`formControl`对应的FormControl对象，
 * `_count`仅仅是一个中间变量，用于表单控件的属性绑定，去更新View的值。可以说，_count就等价于View的值。
 *
 * Model：这里的Model就是主组件中的`ngModel`或者`formControl`对应的FormControl对象
 *
 * ControlValueAccessor做的就是同步`View`和`Model`的值，即`_count`和`formControl对象`的值。
 */
@Component({
  selector: 'custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.css'],
  providers: [CONTROLLER_VALUE_ACCESSOR]
})
export class CustomControlComponent implements OnInit, ControlValueAccessor {
  // 计数器
  _count: number;

  // 通过该callback更新Model
  propagateChange = (_: any) => {};

  @Input()
  set count(count: number) {
    this._count = count ? count : 0;
    // 调用callback更新model
    this.propagateChange(this._count);
  }

  get count() {
    return this._count;
  }

  increment() {
    this.count++;
    this.propagateChange(this.count);
  }

  decrement() {
    this.count--;
    this.propagateChange(this.count);
  }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    console.error('V->M', fn);
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  writeValue(obj: any): void {
    console.error('M->V', obj);
    // 更新表单控件的值
    if (obj) {
      this.count = obj;
    }
  }

  constructor() { }
}
