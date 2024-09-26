import { Component, HostListener } from '@angular/core';

interface TextElement {
  text: string;
  style?: string;
}
interface IntroChip {
  textElements: TextElement[];
  icon: string;
}

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent {
  isSmallScreen: boolean = window.innerWidth <= 540;
  isExtraSmallScreen: boolean = window.innerWidth <= 360;
  introductionChipData: IntroChip[] = [
    { textElements: [{ text: 'Full-time software engineer' }], icon: '👩‍💻' },
    { textElements: [{ text: 'Part-time game developer' }], icon: '🎮' },
    { textElements: [{ text: 'Occasional creative artist' }], icon: '🎨' },
    { textElements: [{ text: 'Recreational language learner' }], icon: '📚' },
    {
      textElements: [{ text: 'Aspirational machine learning researcher' }],
      icon: '🤖',
    },
    {
      textElements: [
        { text: 'Absolutely' },
        { text: 'NOT', style: 'color: palevioletred; font-weight: 700;' },
        { text: 'a pink lover' },
      ],
      icon: '😤',
    },
  ];

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isSmallScreen = window.innerWidth <= 540;
    this.isExtraSmallScreen = window.innerWidth <= 360;
  }
  
  getJoinedText(textElements: TextElement[] | null) {
    if (!!!textElements) return;
    let joinedText = "";
    for (let element of textElements) {
      joinedText += ` ${element.text}`;
    }
    return joinedText;
  }

  ngOnInit() {
    this.onResize();
  }
}
