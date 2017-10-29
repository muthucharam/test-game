import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdharLoginComponent } from './adhar-login.component';

describe('AdharLoginComponent', () => {
  let component: AdharLoginComponent;
  let fixture: ComponentFixture<AdharLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdharLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdharLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
