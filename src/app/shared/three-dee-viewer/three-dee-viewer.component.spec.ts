import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDeeViewerComponent } from './three-dee-viewer.component';

describe('ThreeDeeViewerComponent', () => {
  let component: ThreeDeeViewerComponent;
  let fixture: ComponentFixture<ThreeDeeViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreeDeeViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDeeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
