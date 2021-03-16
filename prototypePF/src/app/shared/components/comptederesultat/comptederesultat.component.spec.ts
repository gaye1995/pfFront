import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptederesultatComponent } from './comptederesultat.component';

describe('ComptederesultatComponent', () => {
  let component: ComptederesultatComponent;
  let fixture: ComponentFixture<ComptederesultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptederesultatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptederesultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
