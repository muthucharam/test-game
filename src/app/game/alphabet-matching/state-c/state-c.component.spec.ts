import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCComponent } from './state-c.component';

describe('StateCComponent', () => {
  let component: StateCComponent;
  let fixture: ComponentFixture<StateCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
