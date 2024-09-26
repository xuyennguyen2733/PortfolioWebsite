import { Component, HostListener, inject} from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
})
export class TopNavComponent {
  isSmallScreen: boolean = window.innerWidth <= 500;
  
  private themeService: ThemeService = inject(ThemeService);

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isSmallScreen = window.innerWidth <= 500;
  }
  
  getTheme() {
    return this.themeService.themeSignal()
  }
  
  toggleTheme() {
    const documentElement = document.querySelector(':root')
    documentElement?.classList.remove(this.themeService.themeSignal())
    this.themeService.updateTheme()
    documentElement?.classList.add(this.themeService.themeSignal())
  }
}

