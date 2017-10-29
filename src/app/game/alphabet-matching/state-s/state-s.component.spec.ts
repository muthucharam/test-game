import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSComponent } from './state-s.component';

describe('StateSComponent', () => {
  let component: StateSComponent;
  let fixture: ComponentFixture<StateSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
