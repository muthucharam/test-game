import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateFinalComponent } from './state-final.component';

describe('StateFinalComponent', () => {
  let component: StateFinalComponent;
  let fixture: ComponentFixture<StateFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
