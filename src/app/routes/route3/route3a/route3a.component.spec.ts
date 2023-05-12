import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3aComponent } from './route3a.component';

describe('Route3aComponent', () => {
  let component: Route3aComponent;
  let fixture: ComponentFixture<Route3aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route3aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
