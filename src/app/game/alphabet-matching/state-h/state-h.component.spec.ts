import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateHComponent } from './state-h.component';

describe('StateHComponent', () => {
  let component: StateHComponent;
  let fixture: ComponentFixture<StateHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
