import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateKComponent } from './state-k.component';

describe('StateKComponent', () => {
  let component: StateKComponent;
  let fixture: ComponentFixture<StateKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
