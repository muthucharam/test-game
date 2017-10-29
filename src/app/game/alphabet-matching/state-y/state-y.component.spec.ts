import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateYComponent } from './state-y.component';

describe('StateYComponent', () => {
  let component: StateYComponent;
  let fixture: ComponentFixture<StateYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
