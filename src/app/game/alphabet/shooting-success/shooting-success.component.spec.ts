import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootingSuccessComponent } from './shooting-success.component';

describe('ShootingSuccessComponent', () => {
  let component: ShootingSuccessComponent;
  let fixture: ComponentFixture<ShootingSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShootingSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootingSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
