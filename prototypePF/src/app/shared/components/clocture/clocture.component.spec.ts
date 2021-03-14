import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloctureComponent } from './clocture.component';

describe('CloctureComponent', () => {
  let component: CloctureComponent;
  let fixture: ComponentFixture<CloctureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloctureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloctureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
