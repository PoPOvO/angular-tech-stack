import {Component, Injector, NgZone, OnInit} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {PopupComponent} from '../../share/popup/popup.component';
import {PopupService} from '../../share/popup/popup.service';
import {FormControl, FormGroup} from '@angular/forms';
import {NumberPowPipe} from '../../share/pipe/number-pow.pipe';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  control: FormControl;

  optionValues = [];

  selectedValue = [];

  nameList = [
    {label: "Alice", value: "Alice"},
    {label: "Bob", value: "Bob"},
    {label: "Charlie", value: "Charlie"},
  ];

  f: FormGroup;

  arr = [
    {value: 'S', status: true},
    {value: 'S', status: false},
    {value: 'S', status: true},
    {value: 'S', status: false}
  ];

  today = new Date(Date.now());

  format = 'yyyy-MM-dd';

  edit = true;

  constructor(
    injector: Injector,
    public popup: PopupService,
    private n: NumberPowPipe,
    private ngZone: NgZone
  ) {
    this.control = new FormControl(null);
    console.log('Monitor：', n);
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // console.log('AAAAAAAA:', PopupElement);
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
  ngOnInit() {
    for (let i = 1; i < 20; i++) {
      if (i % 4 === 0) {
        this.optionValues.push({ label: "s" + i.toString(36) + i, value: i.toString(36) + i });
      }
      this.optionValues.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }

    this.f = new FormGroup({
      name: this.control,
      nameCopy: new FormControl(null)
    });

    this.f.get('name').valueChanges.subscribe((value: any) => {
      console.log('Name ValueChange!', value);
    });
  }

  selectValueChange(e) {
    console.log("Data", e, this.control.value, this.optionValues);
  }

  add() {
    this.ngZone.runOutsideAngular(() => {
        console.log("在NgZone外执行");
        setTimeout(() => {
          this.arr.push({value: 'SSS', status: true});
          console.log("执行数据变化", this.arr);
          this.today.setFullYear(2077);
        });
      }
    );
    // setTimeout(() => {
    //   console.log("执行数据变化");
    //   this.arr.push({value: 'SSS', status: true});
    //   this.today.setFullYear(2077);
    // });
  }

  nameChange(value) {
    console.log("Name ngModelChange!", value);
  }

  nameCopyChange(value) {
    if (value) {
      this.f.get('name').setValue(value);
    }
  }
}
