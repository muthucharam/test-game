import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateGComponent } from './state-g.component';

describe('StateGComponent', () => {
  let component: StateGComponent;
  let fixture: ComponentFixture<StateGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
