import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsbanqueComponent } from './detailsbanque.component';

describe('DetailsbanqueComponent', () => {
  let component: DetailsbanqueComponent;
  let fixture: ComponentFixture<DetailsbanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsbanqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsbanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
