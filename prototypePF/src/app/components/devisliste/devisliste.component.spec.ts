import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevislisteComponent } from './devisliste.component';

describe('DevislisteComponent', () => {
  let component: DevislisteComponent;
  let fixture: ComponentFixture<DevislisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevislisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevislisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
