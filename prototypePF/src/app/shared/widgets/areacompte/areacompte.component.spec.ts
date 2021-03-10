import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreacompteComponent } from './areacompte.component';

describe('AreacompteComponent', () => {
  let component: AreacompteComponent;
  let fixture: ComponentFixture<AreacompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreacompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreacompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
