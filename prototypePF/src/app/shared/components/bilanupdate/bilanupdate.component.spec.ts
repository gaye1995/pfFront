import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanupdateComponent } from './bilanupdate.component';

describe('BilanupdateComponent', () => {
  let component: BilanupdateComponent;
  let fixture: ComponentFixture<BilanupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilanupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilanupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
