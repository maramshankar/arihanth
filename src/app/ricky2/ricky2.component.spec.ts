import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ricky2Component } from './ricky2.component';

describe('Ricky2Component', () => {
  let component: Ricky2Component;
  let fixture: ComponentFixture<Ricky2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ricky2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ricky2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
