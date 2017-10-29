import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateIComponent } from './state-i.component';

describe('StateIComponent', () => {
  let component: StateIComponent;
  let fixture: ComponentFixture<StateIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
