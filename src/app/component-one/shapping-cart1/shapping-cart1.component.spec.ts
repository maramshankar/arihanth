import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShappingCart1Component } from './shapping-cart1.component';

describe('ShappingCart1Component', () => {
  let component: ShappingCart1Component;
  let fixture: ComponentFixture<ShappingCart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShappingCart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShappingCart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
