import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaramComponent } from './maram.component';

describe('MaramComponent', () => {
  let component: MaramComponent;
  let fixture: ComponentFixture<MaramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
