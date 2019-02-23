import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week01Component } from './week01.component';

describe('Week01Component', () => {
  let component: Week01Component;
  let fixture: ComponentFixture<Week01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
