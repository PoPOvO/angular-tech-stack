import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {CommonService} from '../../../../service/common.service';

/**
 * 可编辑、可查看的table
 */
@Component({
  selector: 'app-table-editable-viewable',
  templateUrl: './table-editable-viewable.component.html',
  styleUrls: ['./table-editable-viewable.component.css']
})
export class TableEditableViewableComponent implements OnInit {
  columns = [
    {title: 'ID', index: 'id'},
    {title: '姓名', index: 'name'},
    {title: '年龄', index: 'age'},
    {title: '地址', index: 'address'}
  ];

  // 评论数据
  commentDataSet = [];

  dataSet: any[] = [];

  // 控制editable table的元数据
  editTable = {};

  // 当前编辑的row
  editLine = -1;

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      updateTime: [{value: new Date(), disabled: true}],
      updater: [{value: '王五', disabled: true}],
      title: ['测试edit table'],
      subForms: this.fb.array([]),
      comment: ['一段评论文字']
    });
  }

  startEdit(i): void {
    this.editTable[i] = true;
  }

  cancelEdit(i): void {
    this.editTable[i] = false;
  }

  // 更新editable table
  updateEditTable() {
    this.subForms.clear();
    this.dataSet.forEach((v, i) => {
      this.subForms.push(this.fb.group({
        name: [v.name],
        age: [v.age],
        address: [v.address],
      }));
      this.editTable[i] = false;
    });
  }

  // 保存数据
  save(index) {
    this.editLine = index;
    this.cancelEdit(index);
    Object.assign(this.dataSet[index], (this.subForms.at(index) as FormGroup).getRawValue());
  }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.dataSet.push({
        id: `${i}`,
        name: `PopovO ${i}`,
        age: 32,
        address: `London Park no. ${i}`
      });
    }

    this.updateEditTable();
    this.startEdit(this.editLine = 0);
  }

  get subForms() {
    return this.form.get('subForms') as FormArray;
  }

  subFormsItem(i) {
    return this.subForms.at(i) as FormGroup;
  }

  submit() {
    Object.assign(this.dataSet[this.editLine], (this.subForms.at(this.editLine) as FormGroup).getRawValue());
    console.log('提交table', this.editLine !== -1 ? this.subFormsItem(this.editLine).getRawValue() : null);
    console.log('提交comment', this.form.get('comment').value);

    if (this.form.get('comment').value) {
      this.commentDataSet = [
        ...this.commentDataSet,
        {
          name: '@Pop',
          content: this.form.get('comment').value,
          displayTime: new Date()
        }
      ];
      this.form.get('comment').setValue(null);
    }
  }
}
