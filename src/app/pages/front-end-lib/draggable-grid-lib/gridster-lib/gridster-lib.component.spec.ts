import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsterLibComponent } from './gridster-lib.component';

describe('GridsterLibComponent', () => {
  let component: GridsterLibComponent;
  let fixture: ComponentFixture<GridsterLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsterLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsterLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
