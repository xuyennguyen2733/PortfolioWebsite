import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
})
export class TopNavComponent {
  isExtraSmallScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isExtraSmallScreen = window.innerWidth < 400;
  }
}
