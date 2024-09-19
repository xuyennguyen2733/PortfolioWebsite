import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

interface Project {
  title: string
  imagePath: string
  link: string
  summary: string
}

@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrl: './web-app.component.scss',
})
export class WebAppComponent implements AfterViewInit {
  @ViewChild('cardContentRef', { static: false }) cardContentRef!: ElementRef;
  resizeObserver!: ResizeObserver;
  title: string = 'Web App';
  rowHeight: string = '3:1';
  
  projects: Project[] = [
    {
      title: "ASL Alphabet Recognition",
      imagePath: "images/web-preview/asl-alphabet-recognition.png",
      link: "https://xuyennguyen2733.github.io/asl-recognition/",
      summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, possimus."
    },
    {
      title: "Chinese Typing Practice",
      imagePath: "images/web-preview/typing-practice-preview.png",
      link: "https://xuyennguyen2733.github.io/TypingPractice/",
      summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, possimus."
    },
    {
      title: "Class Schedule Maker",
      imagePath: "images/web-preview/class-scheduler.png",
      link: "https://xuyennguyen2733.github.io/ClassSchedule/",
      summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, possimus."
    },
    {
      title: "Signaway - Learn Sign Language",
      imagePath: "images/web-preview/asl-alphabet-recognition.png",
      link: "https://xuyennguyen2733.github.io/asl-recognition/",
      summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, possimus."
    },
  ]

  constructor(
    private elRef: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void {
    this.calculateRowHeight();
    this.resizeObserver = new ResizeObserver(() => {
      this.calculateRowHeight();
    });
    this.resizeObserver.observe(this.cardContentRef.nativeElement);
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
    const matCard = this.elRef.nativeElement.querySelector('.container-card');
    const matCardHeader = this.elRef.nativeElement.querySelector(
      '.container-card > mat-card-header',
    );
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
