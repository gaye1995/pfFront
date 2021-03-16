import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderarticleComponent } from './headerarticle.component';

describe('HeaderarticleComponent', () => {
  let component: HeaderarticleComponent;
  let fixture: ComponentFixture<HeaderarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderarticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
