import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Defines the default theme signal to be dark-theme
  themeSignal = signal<string>("dark-theme");
  
  setTheme(theme: string) {
    this.themeSignal.set(theme);
  }
  
  // Switches between "dark-theme" and "light-theme"
  updateTheme() {
    this.themeSignal.update(value => value === "dark-theme" ? "light-theme" : "dark-theme" );
  }
}