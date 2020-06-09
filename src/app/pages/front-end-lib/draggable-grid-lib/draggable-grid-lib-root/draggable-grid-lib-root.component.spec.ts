import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableGridLibRootComponent } from './draggable-grid-lib-root.component';

describe('DraggableGridLibRootComponent', () => {
  let component: DraggableGridLibRootComponent;
  let fixture: ComponentFixture<DraggableGridLibRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableGridLibRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableGridLibRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
