import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootingStaticComponent } from './shooting-static.component';

describe('ShootingStaticComponent', () => {
  let component: ShootingStaticComponent;
  let fixture: ComponentFixture<ShootingStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShootingStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootingStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
