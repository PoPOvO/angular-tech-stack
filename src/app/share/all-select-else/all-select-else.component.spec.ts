import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSelectElseComponent } from './all-select-else.component';

describe('AllSelectElseComponent', () => {
  let component: AllSelectElseComponent;
  let fixture: ComponentFixture<AllSelectElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSelectElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSelectElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
