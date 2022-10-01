import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjContainerComponent } from './proj-container.component';

describe('ProjContainerComponent', () => {
  let component: ProjContainerComponent;
  let fixture: ComponentFixture<ProjContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
