import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPlaceholderImageComponent } from './svg-placeholder-image.component';

describe('SvgPlaceholderImageComponent', () => {
  let component: SvgPlaceholderImageComponent;
  let fixture: ComponentFixture<SvgPlaceholderImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgPlaceholderImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SvgPlaceholderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
