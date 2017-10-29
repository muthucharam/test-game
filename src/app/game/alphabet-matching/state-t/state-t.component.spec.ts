import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTComponent } from './state-t.component';

describe('StateTComponent', () => {
  let component: StateTComponent;
  let fixture: ComponentFixture<StateTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
