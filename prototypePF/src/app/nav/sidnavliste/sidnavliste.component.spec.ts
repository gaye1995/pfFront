import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidnavlisteComponent } from './sidnavliste.component';

describe('SidnavlisteComponent', () => {
  let component: SidnavlisteComponent;
  let fixture: ComponentFixture<SidnavlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidnavlisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidnavlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
