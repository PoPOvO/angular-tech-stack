import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChrtComponent } from './line-chrt.component';

describe('LineChrtComponent', () => {
  let component: LineChrtComponent;
  let fixture: ComponentFixture<LineChrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
