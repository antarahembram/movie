import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComComponent } from './nav-com.component';

describe('NavComComponent', () => {
  let component: NavComComponent;
  let fixture: ComponentFixture<NavComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
