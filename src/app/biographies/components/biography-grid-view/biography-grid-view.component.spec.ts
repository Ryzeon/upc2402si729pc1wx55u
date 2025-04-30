import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographyGridViewComponent } from './biography-grid-view.component';

describe('BiographyGridViewComponent', () => {
  let component: BiographyGridViewComponent;
  let fixture: ComponentFixture<BiographyGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiographyGridViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiographyGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
