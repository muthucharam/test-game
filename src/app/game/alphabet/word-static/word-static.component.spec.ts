import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStaticComponent } from './word-static.component';

describe('WordStaticComponent', () => {
  let component: WordStaticComponent;
  let fixture: ComponentFixture<WordStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
