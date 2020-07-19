import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaramformComponent } from './maramform.component';

describe('MaramformComponent', () => {
  let component: MaramformComponent;
  let fixture: ComponentFixture<MaramformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaramformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaramformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
