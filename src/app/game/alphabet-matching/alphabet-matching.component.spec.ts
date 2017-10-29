import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetMatchingComponent } from './alphabet-matching.component';

describe('AlphabetMatchingComponent', () => {
  let component: AlphabetMatchingComponent;
  let fixture: ComponentFixture<AlphabetMatchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabetMatchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
