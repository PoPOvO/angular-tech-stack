import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEditableViewableComponent } from './table-editable-viewable.component';

describe('TableEditableViewableComponent', () => {
  let component: TableEditableViewableComponent;
  let fixture: ComponentFixture<TableEditableViewableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEditableViewableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEditableViewableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
