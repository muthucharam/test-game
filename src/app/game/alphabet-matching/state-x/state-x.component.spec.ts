import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateXComponent } from './state-x.component';

describe('StateXComponent', () => {
  let component: StateXComponent;
  let fixture: ComponentFixture<StateXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
