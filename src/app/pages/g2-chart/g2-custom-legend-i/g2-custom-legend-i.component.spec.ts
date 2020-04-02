import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2CustomLegendIComponent } from './g2-custom-legend-i.component';

describe('G2CustomLegendIComponent', () => {
  let component: G2CustomLegendIComponent;
  let fixture: ComponentFixture<G2CustomLegendIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2CustomLegendIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2CustomLegendIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
