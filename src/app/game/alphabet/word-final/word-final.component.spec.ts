import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFinalComponent } from './word-final.component';

describe('WordFinalComponent', () => {
  let component: WordFinalComponent;
  let fixture: ComponentFixture<WordFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
