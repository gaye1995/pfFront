import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArearepportComponent } from './arearepport.component';

describe('ArearepportComponent', () => {
  let component: ArearepportComponent;
  let fixture: ComponentFixture<ArearepportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArearepportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArearepportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
