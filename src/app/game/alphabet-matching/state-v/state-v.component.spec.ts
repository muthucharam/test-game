import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateVComponent } from './state-v.component';

describe('StateVComponent', () => {
  let component: StateVComponent;
  let fixture: ComponentFixture<StateVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
