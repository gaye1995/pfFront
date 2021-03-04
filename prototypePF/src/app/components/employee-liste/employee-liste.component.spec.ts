import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListeComponent } from './employee-liste.component';

describe('EmployeeListeComponent', () => {
  let component: EmployeeListeComponent;
  let fixture: ComponentFixture<EmployeeListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
