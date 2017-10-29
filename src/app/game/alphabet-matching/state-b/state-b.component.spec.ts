import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateBComponent } from './state-b.component';

describe('StateBComponent', () => {
  let component: StateBComponent;
  let fixture: ComponentFixture<StateBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
