import {Component, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const CONTROLLER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomControlComponent),
  multi: true
};
/**
 * 用户自定义Form控件
 */
@Component({
  selector: 'custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.css'],
  providers: [CONTROLLER_VALUE_ACCESSOR]
})
export class CustomControlComponent implements OnInit, ControlValueAccessor {
  _count: number;

  propagateChange = (_: any) => {};

  @Input()
  set count(count: number) {
    if (count) {
      this._count = count;
    } else {
      this._count = 0;
    }

    // 调用valueChange回调函数
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

  constructor() { }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    console.log('V->M', fn);
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    console.log('M->V', obj);
    if (obj) {
      this.count = obj;
    }
  }
}
