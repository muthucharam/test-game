import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateOneStaticComponent } from './state-one-static.component';

describe('StateOneStaticComponent', () => {
  let component: StateOneStaticComponent;
  let fixture: ComponentFixture<StateOneStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateOneStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateOneStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
