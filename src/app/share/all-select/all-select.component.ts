import {Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
  values = [];

  @Input() nzPlaceHolder = '请输入';
  @Input() nzMaxTagCount = 1;
  @Input() nzMaxMultipleCount = Infinity;
  @Input() nzDropdownMatchSelectWidth = true;
  @Input() nzAutoClearSearchValue = false;
  @Input() nzDisabled = false;

  selectedAllValues = []; // select的全部数据
  allSelected = false; // 全选开关
  searchValues = []; // 搜索的option数据
  enableRender = true;
  onChange = (_: any) => {}

  constructor() { }

  onSearch(e) {
    this.searchValues = this.search(e);
    this.enableRender = this.searchValues.length > 0;
  }

  // AntD的模糊搜索策略:返回搜索的options
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
    // 修改按钮状态
    this.allSelected = values.length === this.selectedAllValues.length;
    this.onChange(this.values);
  }

  switchChange() {
    if (this.allSelected) {
      if (this.searchValues.length > 0) { // 搜索情况
        this.values = this.searchValues;
      } else if (this.searchValues.length === 0) { // 一般情况
        this.values = this.selectedAllValues;
      }
    } else {
      this.values = [];
    }

    this.searchValues = [];
    this.onChange(this.values);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // optionValues第一次变化或者当前值和上次值存在变化，需要更新selectedAllValues
    if (changes.optionValues) {
      if (changes.optionValues.firstChange) {
        this.selectedAllValues = changes.optionValues.currentValue.map((v) => {
          return v.value;
        });
      } else {
        const isEqual = this.compareArr(changes.optionValues.previousValue, changes.optionValues.currentValue);

        if (!isEqual) {
          this.selectedAllValues = changes.optionValues.currentValue.map((v) => {
            return v.value;
          });
        }
      }
      // 修改按钮状态
      this.allSelected = this.values.length === changes.optionValues.currentValue.length;
    }
  }

  // 比较数组元素是否相同
  compareArr(arr1 = [], arr2 = []) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    return arr1.every((v1: any) => {
      return !arr2.every((v2: any) => {
        return v2.value !== v1.value;
      });
    });
  }

  // 注册ngModelChange
  registerOnChange(fn: any): void {
    console.log('Fnnnnnnnnnnnnnnnnn', fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  // 初始化DOM
  writeValue(obj: any): void {
    if (obj) {
      this.values = obj;
      // 修改按钮状态
      this.allSelected = this.values.length === this.selectedAllValues.length;
    }
  }
}
