import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjPostcardComponent } from './proj-postcard.component';

describe('ProjPostcardComponent', () => {
  let component: ProjPostcardComponent;
  let fixture: ComponentFixture<ProjPostcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjPostcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjPostcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
