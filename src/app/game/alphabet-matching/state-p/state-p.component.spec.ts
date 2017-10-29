import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePComponent } from './state-p.component';

describe('StatePComponent', () => {
  let component: StatePComponent;
  let fixture: ComponentFixture<StatePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
