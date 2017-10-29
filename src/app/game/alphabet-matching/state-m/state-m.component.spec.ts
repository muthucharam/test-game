import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMComponent } from './state-m.component';

describe('StateMComponent', () => {
  let component: StateMComponent;
  let fixture: ComponentFixture<StateMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
