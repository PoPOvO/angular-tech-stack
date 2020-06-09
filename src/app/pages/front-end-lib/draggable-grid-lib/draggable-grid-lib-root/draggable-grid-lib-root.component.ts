import {Component, OnInit, ViewChild} from '@angular/core';
import {
  CompactType,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponentInterface,
  GridType
} from 'angular-gridster2';
import {NzResizeEvent} from 'ng-zorro-antd/resizable';

@Component({
  selector: 'app-draggable-grid-lib-root',
  templateUrl: './draggable-grid-lib-root.component.html',
  styleUrls: ['./draggable-grid-lib-root.component.css']
})
export class DraggableGridLibRootComponent implements OnInit {
  @ViewChild('sub', {static: true})
  e: any;

  options: GridsterConfig = {
    gridType: GridType.Fit,
    compactType: CompactType.None,
    maxCols: 6,
    maxRows: 6,
    minCols: 6,
    minRows: 6,
    pushItems: true,
    minItemCols: 1,
    minItemRows: 1,
    draggable: {
      enabled: true
    },
    resizable: {
      enabled: true,
      start: (item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) => {
        console.log('拖拽开始', item, itemComponent, event);
      },
      stop: (item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) => {
        console.log('拖拽结束', item, itemComponent, event);
      },
    }
  };

  dashboard: Array<GridsterItem> = [
    {cols: 1, rows: 1, y: 0, x: 0},
    {cols: 1, rows: 1, y: 1, x: 0},
    // {cols: 1, rows: 1, y: 0, x: 4},
    // {cols: 3, rows: 2, y: 1, x: 4},
    // {cols: 1, rows: 1, y: 4, x: 5},
    // {cols: 1, rows: 1, y: 2, x: 1},
    // {cols: 2, rows: 2, y: 5, x: 5},
    // {cols: 2, rows: 2, y: 3, x: 2},
    // {cols: 2, rows: 1, y: 2, x: 2},
    // {cols: 1, rows: 1, y: 3, x: 4},
    // {cols: 1, rows: 1, y: 0, x: 6}
  ];

  width = 400;
  height = 200;

  constructor() { }

  ngOnInit() {
    console.log('测试', typeof ['A', 'B']);
  }

  onResize({ width, height }: NzResizeEvent): void {
    this.width = width!;
    this.height = height!;
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 4, rows: 4});
  }
}
