import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Two2Component } from './two2.component';

describe('Two2Component', () => {
  let component: Two2Component;
  let fixture: ComponentFixture<Two2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Two2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Two2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
