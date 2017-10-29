import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateOComponent } from './state-o.component';

describe('StateOComponent', () => {
  let component: StateOComponent;
  let fixture: ComponentFixture<StateOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
