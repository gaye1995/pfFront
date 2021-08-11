import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComptablesComponent } from './data-comptables.component';

describe('DataComptablesComponent', () => {
  let component: DataComptablesComponent;
  let fixture: ComponentFixture<DataComptablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataComptablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComptablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
