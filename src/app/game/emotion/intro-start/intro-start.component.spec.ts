import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroStartComponent } from './intro-start.component';

describe('IntroStartComponent', () => {
  let component: IntroStartComponent;
  let fixture: ComponentFixture<IntroStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
