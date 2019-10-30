import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AllSelectElseComponent),
  multi: true
};
@Component({
  selector: 'app-all-select-else',
  templateUrl: './all-select-else.component.html',
  styleUrls: ['./all-select-else.component.css'],
  providers: [DEFAULT_VALUE_ACCESSOR]
})
export class AllSelectElseComponent implements OnChanges, ControlValueAccessor {
  allSelectValue = -1;
  // 外部输入的option的数据
  @Input() optionValues = [];
  // 全选禁用
  @Input() disableAllSelected = false;
  // select框的数据
  values = [];

  @Input() nzPlaceHolder = '请输入';
  @Input() nzMaxTagCount = 1;
  @Input() nzDisabled = false;
  @Input() nzDropdownMatchSelectWidth = true;
  @Input() nzAutoClearSearchValue = true;

  // select的全部数据
  selectedAllValues = [];
  // 内部判断全选的标志
  allSelected = false;

  constructor() { }

  onChange = (_: any) => {}

  change(arr: []) {
    const clickAllSelected = this.isAllSelected(arr);

    if (clickAllSelected && !this.allSelected) {
      this.allSelected = true;
      this.values = this.selectedAllValues;
    } else if ((clickAllSelected && this.allSelected) || (arr.length === 0)) {
      this.allSelected = false;
      this.values = [];
    }
    // 触发change事件
    this.onChange(this.values);
  }

  search(searchValue) {
    // // AntD的模糊搜索策略
    // const arr = this.optionValues.filter((option) => {
    //   if (option && option.label) {
    //     return option.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    //   } else {
    //     return false;
    //   }
    // }).map((v) => {
    //   return v.value;
    // });
    //
    // this.values = arr;
  }

  // 是否点击全选
  isAllSelected(arr: []) {
    return arr.findIndex((v) => {
      return v === this.allSelectValue;
    }) >= 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedAllValues = this.optionValues.map((v) => {
      return v.value;
    });

    // 每次深拷贝optionValues，防止全选影响源数据
    if (changes.optionValues) {
      this.optionValues = JSON.parse(JSON.stringify(changes.optionValues.currentValue));
      this.optionValues.unshift({label: '全选', value: this.allSelectValue});
    }
  }

  // 注册ngModelChange
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  // 初始化DOM
  writeValue(obj: any): void {
    if (obj) {
      this.values = obj;
    }
  }
}
