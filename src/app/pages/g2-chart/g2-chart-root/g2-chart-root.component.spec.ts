import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2ChartRootComponent } from './g2-chart-root.component';

describe('G2ChartRootComponent', () => {
  let component: G2ChartRootComponent;
  let fixture: ComponentFixture<G2ChartRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2ChartRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2ChartRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
