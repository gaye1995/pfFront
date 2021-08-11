import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComptableComponent } from './header-comptable.component';

describe('HeaderComptableComponent', () => {
  let component: HeaderComptableComponent;
  let fixture: ComponentFixture<HeaderComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
