import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';

/**
 * 可编辑、可查看的Form
 */
@Component({
  selector: 'app-form-editable-viewable',
  templateUrl: './form-editable-viewable.component.html',
  styleUrls: ['./form-editable-viewable.component.css']
})
export class FormEditableViewableComponent implements OnInit {
  form: FormGroup;

  edit = true;

  options = [
    {label: '测试1', value: 1},
    {label: '测试2', value: 2},
    {label: '测试3', value: 3},
    {label: '测试4', value: 4}
  ];

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      problemFirstBelong: [1, [Validators.required]], // 问题归属一级（手机）
      problemSecondBelong: [1, [Validators.required]], // 问题归属二级（手机）
      conditionClose: [1, [Validators.required]], // 有条件关闭（手机）
      responsibilityDept: [1, [Validators.required]], // 责任部门
      ndf: [1, [Validators.required]], // 是否NDF（电视）
      ndfDesc: ['@', [Validators.required]], // NDF说明（电视）
      improvementSn: ['#', [Validators.required]], // 改善对策Sn（电视）
      extractionRoot: ['$', [Validators.required]], // 根因提炼
      responsibilityPersonId: ['A', [Validators.required]], // 责任人
      problemDefinitionId: ['B', [Validators.required]], // 确认人
      problemDefinitionTime: [new Date(), [Validators.required]], // 确认日期
      note: ['!', [Validators.required]] // 备注
    });
  }

  getFormValue(name: string, optionList: Array<any>) {
    const value = this.form.get(name).value;
    const opt = optionList.find(v => v.value === value);
    return opt ? opt.label : '-';
  }

  submitForm() {
    this.edit = false;
    this.msg.success('提交成功');
  }
}
