import {Component, EventEmitter, forwardRef, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AllSelectComponent),
  multi: true
};
/**
 * 全选select
 */
@Component({
  selector: 'all-select',
  templateUrl: './all-select.component.html',
  styleUrls: ['./all-select.component.css'],
  providers: [DEFAULT_VALUE_ACCESSOR]
})
export class AllSelectComponent implements OnChanges, ControlValueAccessor {
  // 外部输入的option的数据
  @Input() optionValues = [];
  // 全选禁用
  @Input() disableAllSelected = false;
  // select框的数据
  @Input() values = [];

  @Input() nzPlaceHolder = '请输入';
  @Input() nzMaxTagCount = 1;
  @Input() nzDropdownMatchSelectWidth = false;
  @Input() nzAutoClearSearchValue = false;
  @Input() nzDisabled = false;

  // select的全部数据
  selectedAllValues = [];
  // 全选开关
  allSelected = false;
  // 搜索的option数据
  searchValues = [];
  enableRender = true;

  onChange = (_: any) => {}

  constructor() { }

  onSearch(e) {
    this.searchValues = this.search(e);
    this.enableRender = this.searchValues.length > 0;
  }

  // AntD的模糊搜索策略
  search(searchValue) {
    return this.optionValues.filter((option) => {
      if (option && option.label) {
        return option.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
      } else {
        return false;
      }
    }).map((v) => {
      return v.value;
    });
  }

  valuesChange(values: []) {
    if (values.length <= 0) {
      this.allSelected = false;
    }
    this.onChange(this.values);
  }

  switchChange() {
    if (this.searchValues.length > 0 && this.allSelected) { // 搜索情况
      this.values = this.searchValues;
    } else if (!this.searchValues.length && this.allSelected) { // 一般情况
      this.values = this.selectedAllValues;
    }

    if (!this.allSelected) {
      this.values = [];
    }
    this.searchValues = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedAllValues = this.optionValues.map((v) => {
      return v.value;
    });
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
