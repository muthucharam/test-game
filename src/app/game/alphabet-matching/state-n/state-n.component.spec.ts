import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateNComponent } from './state-n.component';

describe('StateNComponent', () => {
  let component: StateNComponent;
  let fixture: ComponentFixture<StateNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
