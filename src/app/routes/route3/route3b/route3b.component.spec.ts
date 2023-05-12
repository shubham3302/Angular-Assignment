import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3bComponent } from './route3b.component';

describe('Route3bComponent', () => {
  let component: Route3bComponent;
  let fixture: ComponentFixture<Route3bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route3bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route3bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
