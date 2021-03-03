import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietelisteComponent } from './societeliste.component';

describe('SocietelisteComponent', () => {
  let component: SocietelisteComponent;
  let fixture: ComponentFixture<SocietelisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietelisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
