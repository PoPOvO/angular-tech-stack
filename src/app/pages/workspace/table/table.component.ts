import {Component, OnInit, ViewChild} from '@angular/core';
import {NzTableComponent} from 'ng-zorro-antd';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export interface VirtualDataInterface {
  index: number;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  @ViewChild('virtualTable', { static: false }) nzTableComponent: NzTableComponent;
  private destroy$ = new Subject();
  listOfData: VirtualDataInterface[] = [];

  scrollToIndex(index: number): void {
    this.nzTableComponent.cdkVirtualScrollViewport.scrollToIndex(index);
  }

  trackByIndex(_: number, data: VirtualDataInterface): number {
    return data.index;
  }

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 20000; i++) {
      data.push({
        index: i,
        name: `Edward King`,
        age: 32,
        address: `London`
      });
    }
    this.listOfData = data;
  }

  ngAfterViewInit(): void {
    this.nzTableComponent.cdkVirtualScrollViewport.scrolledIndexChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: number) => {
        console.log('scroll index to', data);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
