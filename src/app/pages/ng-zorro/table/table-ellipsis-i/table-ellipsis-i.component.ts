import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-ellipsis-i',
  templateUrl: './table-ellipsis-i.component.html',
  styleUrls: ['./table-ellipsis-i.component.css']
})
export class TableEllipsisIComponent implements OnInit {

  columns = [
    {title: '序号', index: 'key', width: '100px'},
    {title: '性别', index: 'sex', width: '100px'},
    {title: '姓名', index: 'name', width: '200px'},
    {title: '年龄', index: 'age', width: '100px'},
    {title: '地址', index: 'address', width: '800px'}
  ];

  dataSet = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.dataSet.push(  {
        key: i + '',
        name: 'Black',
        sex: '男',
        age: 15,
        address: '这是一串很长的文字，这是一串很长的文字，这是一串很长的文字，这是一串很长的文字，这是一串很长的文字，这是一串很长的文字，这是一串很长的文字，这是一串很长的文字，这是一串很长的文字，这是一串很长的文字，这是一串很长的文字，这是一串很长的文字，这是一串很长的文字，这是一串很长的文字'
      });
    }
  }

}
