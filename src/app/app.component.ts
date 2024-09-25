import { Component, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'PortfolioWebsite';
  private themeService: ThemeService = inject(ThemeService)
  
  getTheme() {
    return this.themeService.themeSignal();
  }
}
