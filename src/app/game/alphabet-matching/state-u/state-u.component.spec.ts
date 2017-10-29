import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateUComponent } from './state-u.component';

describe('StateUComponent', () => {
  let component: StateUComponent;
  let fixture: ComponentFixture<StateUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
