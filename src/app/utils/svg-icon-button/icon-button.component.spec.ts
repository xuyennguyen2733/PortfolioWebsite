import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconButtonComponent } from './icon-button.component';

describe('IconButtonComponent', () => {
  let component: SvgIconButtonComponent;
  let fixture: ComponentFixture<SvgIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgIconButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SvgIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
