import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2CustomLegendIIComponent } from './g2-custom-legend-ii.component';

describe('G2CustomLegendIIComponent', () => {
  let component: G2CustomLegendIIComponent;
  let fixture: ComponentFixture<G2CustomLegendIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2CustomLegendIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2CustomLegendIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
