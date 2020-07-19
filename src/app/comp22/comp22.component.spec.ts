import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp22Component } from './comp22.component';

describe('Comp22Component', () => {
  let component: Comp22Component;
  let fixture: ComponentFixture<Comp22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
