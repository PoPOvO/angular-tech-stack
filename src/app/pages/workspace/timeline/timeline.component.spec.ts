import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
