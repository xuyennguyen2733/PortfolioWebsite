import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  @Output() toggleDrawer = new EventEmitter<void>();

  onToggle() {
    this.toggleDrawer.emit();
  }
}
