import { Component, OnInit } from '@angular/core';
import {BaseChartComponent} from '../base/base-chart.component';

@Component({
  selector: 'app-line-chrt',
  templateUrl: './line-chrt.component.html',
  styleUrls: ['./line-chrt.component.css']
})
export class LineChrtComponent extends BaseChartComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
