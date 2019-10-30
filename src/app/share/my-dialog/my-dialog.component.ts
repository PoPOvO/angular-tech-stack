import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgElement, WithProperties} from '@angular/elements';

@Component({
  selector: 'my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit, OnChanges {
  @Input()
  content: string;

  @Input()
  content1: string;

  _content2: string;

  constructor() { }

  @Input() set content2(content: string) {
    content = content ? content : '空的';
    this._content2 = content;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes:", changes);
  }
}
