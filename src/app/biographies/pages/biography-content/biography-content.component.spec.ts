import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographyContentComponent } from './biography-content.component';

describe('BiographyContentComponent', () => {
  let component: BiographyContentComponent;
  let fixture: ComponentFixture<BiographyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiographyContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiographyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
