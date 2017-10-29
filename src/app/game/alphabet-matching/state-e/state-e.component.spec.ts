import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateEComponent } from './state-e.component';

describe('StateEComponent', () => {
  let component: StateEComponent;
  let fixture: ComponentFixture<StateEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
