import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardrepportComponent } from './cardrepport.component';

describe('CardrepportComponent', () => {
  let component: CardrepportComponent;
  let fixture: ComponentFixture<CardrepportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardrepportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardrepportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
