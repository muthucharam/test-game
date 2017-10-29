import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWComponent } from './state-w.component';

describe('StateWComponent', () => {
  let component: StateWComponent;
  let fixture: ComponentFixture<StateWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
