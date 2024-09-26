import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'PortfolioWebsite';
  private themeService: ThemeService = inject(ThemeService)
  
  getTheme() {
    return this.themeService.themeSignal();
  }
  
  ngOnInit() {
    const documentElement = document.documentElement;
    this.themeService.setTheme(localStorage.getItem('theme') || 'dark-theme')
    documentElement?.classList.add(this.themeService.themeSignal());
  }
}
