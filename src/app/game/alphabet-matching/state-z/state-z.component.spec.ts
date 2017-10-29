import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateZComponent } from './state-z.component';

describe('StateZComponent', () => {
  let component: StateZComponent;
  let fixture: ComponentFixture<StateZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
