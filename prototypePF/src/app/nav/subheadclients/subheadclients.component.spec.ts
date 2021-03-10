import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheadclientsComponent } from './subheadclients.component';

describe('SubheadclientsComponent', () => {
  let component: SubheadclientsComponent;
  let fixture: ComponentFixture<SubheadclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubheadclientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheadclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
