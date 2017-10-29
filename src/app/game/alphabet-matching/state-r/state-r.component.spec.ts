import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateRComponent } from './state-r.component';

describe('StateRComponent', () => {
  let component: StateRComponent;
  let fixture: ComponentFixture<StateRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
