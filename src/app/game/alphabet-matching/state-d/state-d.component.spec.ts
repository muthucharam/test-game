import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDComponent } from './state-d.component';

describe('StateDComponent', () => {
  let component: StateDComponent;
  let fixture: ComponentFixture<StateDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
