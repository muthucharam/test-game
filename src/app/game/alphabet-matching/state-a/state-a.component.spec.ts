import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateAComponent } from './state-a.component';

describe('StateAComponent', () => {
  let component: StateAComponent;
  let fixture: ComponentFixture<StateAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
