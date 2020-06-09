import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingTextRootComponent } from './styling-text-root.component';

describe('StylingTextRootComponent', () => {
  let component: StylingTextRootComponent;
  let fixture: ComponentFixture<StylingTextRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylingTextRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingTextRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
