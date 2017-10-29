import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateJComponent } from './state-j.component';

describe('StateJComponent', () => {
  let component: StateJComponent;
  let fixture: ComponentFixture<StateJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
