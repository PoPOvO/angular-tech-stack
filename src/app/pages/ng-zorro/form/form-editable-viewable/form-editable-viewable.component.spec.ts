import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormEditableViewableComponent} from './form-editable-viewable.component';


describe('FormEditableComponent', () => {
  let component: FormEditableViewableComponent;
  let fixture: ComponentFixture<FormEditableViewableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditableViewableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditableViewableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
