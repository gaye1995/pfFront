import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesComptableComponent } from './factures-comptable.component';

describe('FacturesComptableComponent', () => {
  let component: FacturesComptableComponent;
  let fixture: ComponentFixture<FacturesComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturesComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturesComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
