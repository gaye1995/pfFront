import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplefactureComponent } from './exemplefacture.component';

describe('ExemplefactureComponent', () => {
  let component: ExemplefactureComponent;
  let fixture: ComponentFixture<ExemplefactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplefactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplefactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
