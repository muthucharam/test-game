import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateFComponent } from './state-f.component';

describe('StateFComponent', () => {
  let component: StateFComponent;
  let fixture: ComponentFixture<StateFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
