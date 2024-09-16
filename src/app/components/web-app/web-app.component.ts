import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrl: './web-app.component.scss'
})
export class WebAppComponent implements AfterViewInit {
  @ViewChild('cardContentRef', {static: false}) cardContentRef!: ElementRef;
  resizeObserver!: ResizeObserver;
  title: string = 'Web App'
  rowHeight: string = '3:1'
  
  constructor(private elRef: ElementRef, private cdr: ChangeDetectorRef) {}
  
  ngAfterViewInit(): void {
    this.calculateRowHeight();
    this.resizeObserver = new ResizeObserver(() => {
      this.calculateRowHeight()
    })
    this.resizeObserver.observe(this.cardContentRef.nativeElement)
  }
  
  initializeResizeObserver() {
    if (this.cardContentRef && this.cardContentRef.nativeElement) {
      this.resizeObserver = new ResizeObserver(() => {
        this.calculateRowHeight();
      });

      this.resizeObserver.observe(this.cardContentRef.nativeElement);
    } else {
      console.error('cardContentRef is not available.');
    }
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateRowHeight();
    
  }

  calculateRowHeight() {
    const matCard = this.elRef.nativeElement.querySelector('.container-card')
    const matCardHeader = this.elRef.nativeElement.querySelector('.container-card > mat-card-header');
    const containerWidth = matCard.offsetWidth;
    const containerHeight = matCard.offsetHeight - matCardHeader.offsetHeight;

    this.rowHeight = (containerWidth / containerHeight).toFixed(2) + ':1';
    
    // Manually trigger change detection
    this.cdr.detectChanges();
  } 
  
  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
