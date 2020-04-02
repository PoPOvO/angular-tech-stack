import {AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.css']
})
export class CodeBoxComponent implements OnInit {
  copied = false;

  code = false;

  view = false;

  @Input() codeText;

  @Input() title;

  @Input() content;

  constructor(
    private msg: NzMessageService
  ) {}

  ngOnInit(): void {
  }

  copyAction() {
    this.copied = !this.copied;
    this.msg.success('copy成功');
    setTimeout(() => {
      this.copied = !this.copied;
    }, 1000);
  }

  codeAction() {
    this.code = !this.code;
    setTimeout(() => {
      this.code = !this.code;
    }, 1000);
  }

  viewAction() {
    this.view = !this.view;
    setTimeout(() => {
      this.view = !this.view;
    }, 1000);
  }
}
