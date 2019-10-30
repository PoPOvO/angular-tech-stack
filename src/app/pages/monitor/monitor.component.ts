import {Component, Injector, OnInit} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {PopupComponent} from '../../share/popup/popup.component';
import {PopupService} from '../../share/popup/popup.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  control: FormControl;
  optionValues = [];
  arr = [
    {value: 'S', status: true},
    {value: 'S', status: false},
    {value: 'S', status: true},
    {value: 'S', status: false}
  ];
  today = new Date(Date.now());
  format = 'yyyy-MM-dd';

  constructor(injector: Injector, public popup: PopupService) {
    this.control = new FormControl(['11']);
    console.log('Monitor：');
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
  }

  selectValueChange(e) {
    console.log("Data", e, this.control.value, this.optionValues);
  }

  add() {
    this.arr.push({value: 'SSS', status: true});
    this.today.setFullYear(2077);
  }
}
