import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingBlocksRootComponent } from './building-blocks-root.component';

describe('BuildingBlocksRootComponent', () => {
  let component: BuildingBlocksRootComponent;
  let fixture: ComponentFixture<BuildingBlocksRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingBlocksRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingBlocksRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
