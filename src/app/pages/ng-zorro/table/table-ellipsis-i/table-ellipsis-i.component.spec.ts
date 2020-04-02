import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEllipsisIComponent } from './table-ellipsis-i.component';

describe('TableEllipsisIComponent', () => {
  let component: TableEllipsisIComponent;
  let fixture: ComponentFixture<TableEllipsisIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEllipsisIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEllipsisIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
