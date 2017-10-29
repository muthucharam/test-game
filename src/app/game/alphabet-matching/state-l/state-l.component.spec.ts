import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateLComponent } from './state-l.component';

describe('StateLComponent', () => {
  let component: StateLComponent;
  let fixture: ComponentFixture<StateLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
