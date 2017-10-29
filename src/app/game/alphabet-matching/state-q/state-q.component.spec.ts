import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateQComponent } from './state-q.component';

describe('StateQComponent', () => {
  let component: StateQComponent;
  let fixture: ComponentFixture<StateQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
