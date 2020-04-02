import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRootComponent } from './form-root.component';

describe('FormRootComponent', () => {
  let component: FormRootComponent;
  let fixture: ComponentFixture<FormRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
