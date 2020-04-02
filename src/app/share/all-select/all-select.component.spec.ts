import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSelectComponent } from './all-select.component';

describe('AllSelectComponent', () => {
  let component: AllSelectComponent;
  let fixture: ComponentFixture<AllSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
