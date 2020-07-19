import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ricky1Component } from './ricky1.component';

describe('Ricky1Component', () => {
  let component: Ricky1Component;
  let fixture: ComponentFixture<Ricky1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ricky1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ricky1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
