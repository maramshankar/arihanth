import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyempComponent } from './myemp.component';

describe('MyempComponent', () => {
  let component: MyempComponent;
  let fixture: ComponentFixture<MyempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
