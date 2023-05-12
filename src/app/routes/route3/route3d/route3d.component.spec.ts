import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3dComponent } from './route3d.component';

describe('Route3dComponent', () => {
  let component: Route3dComponent;
  let fixture: ComponentFixture<Route3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route3dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
