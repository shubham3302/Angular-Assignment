import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3cComponent } from './route3c.component';

describe('Route3cComponent', () => {
  let component: Route3cComponent;
  let fixture: ComponentFixture<Route3cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route3cComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route3cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
